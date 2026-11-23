/*
 * Service worker for malharcare.in
 *
 * What it does:
 *   - keeps a small copy of the site so the phone numbers, address and hours
 *     still show when a visitor has no signal
 *   - always tries the network first for the page, CSS and JS, so an update
 *     you upload is seen straight away
 *   - serves photos, fonts and icons from the saved copy to save mobile data,
 *     checking for a newer version of each at most once a day
 *
 * You do not normally need to touch this file. Changing VERSION clears
 * everything visitors have saved, which is rarely needed.
 */
const VERSION = 'malhar-2026-11-23';
const ONE_DAY = 24 * 60 * 60 * 1000;

const SHELL = [
  './',
  'offline.html',
  'assets/css/site.css',
  'assets/js/site.js',
  'assets/fonts/anek-latin-text.woff2',
  'assets/fonts/anek-latin-display.woff2',
  'assets/fonts/anek-kannada-name.woff2',
  'assets/icons/favicon.svg',
  'assets/icons/icon-192.png'
];

// The new site starts this file as "sw.js?site=2". The old site started it as
// plain "sw.js", so a missing marker means an old page is still on screen.
const startedByOldSite = new URL(self.location.href).searchParams.get('site') !== '2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(SHELL.map((url) => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

// A returning visitor's browser may still show the old website from its own
// memory. That old page is what started this worker, so reload it once: the
// reload comes back through this worker, which fetches the new site.
function reloadOpenTabs() {
  self.clients.matchAll({ type: 'window' }).then((tabs) => {
    tabs.forEach((tab) => {
      tab.navigate(tab.url).catch(() => null);
    });
  });
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clear anything saved by earlier versions, including the previous
      // website's copy ("mahlar-medical-…"), then take charge of open tabs.
      const names = await caches.keys();
      await Promise.all(names.filter((name) => name !== VERSION).map((name) => caches.delete(name)));
      await self.clients.claim();
    })().then(() => {
      // Deliberately not waited for. This worker answers the reload itself,
      // and it can only do that once this start-up step has finished, so
      // waiting here would leave the tab hanging.
      if (startedByOldSite) reloadOpenTabs();
    })
  );
});

// Page, CSS and JS: the live copy if we can get it, the saved copy if not.
// 'no-cache' makes the browser check with the server instead of trusting a
// copy it kept from an earlier visit.
async function networkFirst(request, isPage) {
  const cache = await caches.open(VERSION);
  try {
    const response = await fetch(request, { cache: 'no-cache' });
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    const saved = (await cache.match(request)) || (await cache.match(request, { ignoreSearch: true }));
    if (saved) return saved;
    if (isPage) {
      const fallback = (await cache.match('./')) || (await cache.match('offline.html'));
      if (fallback) return fallback;
    }
    throw error;
  }
}

async function refresh(request, cache) {
  const response = await fetch(request, { cache: 'no-cache' });
  if (response.ok) await cache.put(request, response.clone());
  return response;
}

// Photos, fonts and icons: the saved copy straight away, refreshed quietly
// in the background when it is more than a day old.
async function savedFirst(request, event) {
  const cache = await caches.open(VERSION);
  const saved = await cache.match(request);
  if (!saved) return refresh(request, cache);

  const savedAt = Date.parse(saved.headers.get('date') || '');
  if (!savedAt || Date.now() - savedAt > ONE_DAY) {
    event.waitUntil(refresh(request, cache).catch(() => null));
  }
  return saved;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.headers.has('range')) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, true));
    return;
  }

  if (/\.(?:css|js|webmanifest)$/.test(url.pathname)) {
    event.respondWith(networkFirst(request, false));
    return;
  }

  if (url.pathname.includes('/assets/') && /\.(?:avif|webp|jpe?g|png|svg|woff2)$/.test(url.pathname)) {
    event.respondWith(savedFirst(request, event));
  }
});
