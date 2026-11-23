/*
 * Malhar Pharma & Clinic: site behaviour.
 * Plain JavaScript, no libraries. Everything on the page still reads fine
 * without it; this file adds the live "open now" status, the booking and
 * order forms (which hand off to WhatsApp), the photo viewer and the menu.
 */
(function () {
  'use strict';

  /* ---------- Shop details used by the script ---------- */
  var WHATSAPP_NUMBER = '919423178631'; // country code + number, digits only
  var SHOP_PHONE_TEXT = '93078\u00a045862';
  var OPENS_AT = 8 * 60; // 8:00 AM, in minutes after midnight
  var CLOSES_AT = 22 * 60 + 30; // 10:30 PM
  var OPEN_DAYS = [1, 2, 3, 4, 5, 6]; // Monday to Saturday (Sunday is 0)

  var DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $$(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------- Where the page opens ---------- */
  // The site looks after this itself, so it behaves the same in every browser:
  //   - a refresh starts again from the top of the page
  //   - a link to a section (…/#visit) still opens at that section
  //   - the browser's Back and Forward buttons move between sections
  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

  function cleanAddress() {
    if (window.location.hash && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  function jumpToStart() {
    var root = document.documentElement;
    root.style.scrollBehavior = 'auto'; // jump, don't glide
    window.scrollTo(0, 0);
    root.style.scrollBehavior = '';
  }

  function sectionInAddress() {
    var id = window.location.hash.slice(1);
    if (!id) return null;
    try {
      id = decodeURIComponent(id);
    } catch (error) {
      /* use it as written */
    }
    return document.getElementById(id);
  }

  var visit = window.performance && performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  var wasRefreshed = visit ? visit.type === 'reload' : !!(window.performance && performance.navigation && performance.navigation.type === 1);

  if (wasRefreshed) {
    cleanAddress();
    jumpToStart();
    window.addEventListener('load', jumpToStart);
  }

  // Back and Forward: go to the section named in the address, or to the start
  window.addEventListener('popstate', function () {
    var section = sectionInAddress();
    if (section) {
      section.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  });

  /* ---------- Time at the shop ---------- */
  // India Standard Time is UTC+5:30 all year, so the shop's clock can be
  // worked out the same way wherever the visitor is.
  function shopNow() {
    var shifted = new Date(Date.now() + 330 * 60 * 1000);
    return {
      day: shifted.getUTCDay(),
      minutes: shifted.getUTCHours() * 60 + shifted.getUTCMinutes(),
      year: shifted.getUTCFullYear(),
      isoDate: shifted.toISOString().slice(0, 10)
    };
  }

  function isOpenDay(day) {
    return OPEN_DAYS.indexOf(day) !== -1;
  }

  function shopStatus() {
    var now = shopNow();

    if (isOpenDay(now.day) && now.minutes >= OPENS_AT && now.minutes < CLOSES_AT) {
      if (CLOSES_AT - now.minutes <= 45) {
        return { state: 'closing', text: 'Open now · closes at 10:30 PM' };
      }
      return { state: 'open', text: 'Open now · until 10:30 PM' };
    }

    if (isOpenDay(now.day) && now.minutes < OPENS_AT) {
      return { state: 'closed', text: 'Closed now · opens at 8 AM' };
    }

    if (now.day !== 0 && isOpenDay((now.day + 1) % 7)) {
      return { state: 'closed', text: 'Closed now · opens tomorrow at 8 AM' };
    }

    return { state: 'closed', text: (now.day === 0 ? 'Closed today' : 'Closed now') + ' · opens Monday at 8 AM' };
  }

  function showStatus() {
    var status = shopStatus();
    $$('[data-status]').forEach(function (el) {
      el.setAttribute('data-state', status.state);
      var text = $('[data-status-text]', el);
      if (text) text.textContent = status.text;
    });
  }

  showStatus();
  window.setInterval(showStatus, 30 * 1000);

  var yearEl = $('[data-year]');
  if (yearEl) yearEl.textContent = String(shopNow().year);

  /* ---------- Menu (phones and tablets) ---------- */
  var menuBtn = $('.menu-btn');
  var nav = $('#site-nav');

  function setMenu(open) {
    if (!menuBtn || !nav) return;
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  // The logo and name at the top of the page go back to the start of the page
  var homeLink = $('.site-header .brand');

  if (homeLink) {
    homeLink.addEventListener('click', function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      setMenu(false);
      cleanAddress();
      window.scrollTo(0, 0); // glides, unless the visitor has asked for less motion
    });
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.site-header')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  /* ---------- The counter: clinic and pharmacy forms ---------- */
  var counter = $('[data-counter]');
  var tabs = $$('[data-tab]');
  var panels = $$('[data-panel]');
  var forms = $$('[data-form]');
  var requestTitle = $('#request-title');

  function formFor(mode) {
    return forms.filter(function (form) {
      return form.getAttribute('data-form') === mode;
    })[0];
  }

  // Some fields only apply to one choice: a home address for a home visit,
  // a delivery address for home delivery.
  function syncConditionalFields(form) {
    if (!form) return;
    var chosen = form.getAttribute('data-form') === 'clinic' ? form.elements.service.value : form.elements.fulfil.value;
    $$('[data-show-for]', form).forEach(function (field) {
      field.hidden = field.getAttribute('data-show-for') !== chosen;
    });
  }

  function setMode(mode) {
    if (!counter || (mode !== 'clinic' && mode !== 'pharmacy')) return;
    counter.setAttribute('data-mode', mode);
    tabs.forEach(function (tab) {
      var selected = tab.getAttribute('data-tab') === mode;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.getAttribute('data-panel') !== mode;
    });
  }

  if (counter) {
    setMode('clinic');
    forms.forEach(syncConditionalFields);

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        setMode(tab.getAttribute('data-tab'));
      });
      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        var next = tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        setMode(next.getAttribute('data-tab'));
        next.focus();
      });
    });

    // Any link marked data-open="clinic" or "pharmacy" opens that side of the
    // counter; data-service also picks the service in the booking form.
    document.addEventListener('click', function (event) {
      var trigger = event.target.closest('[data-open]');
      if (!trigger) return;
      var mode = trigger.getAttribute('data-open');
      setMode(mode);

      var service = trigger.getAttribute('data-service');
      var clinicForm = formFor('clinic');
      if (service && clinicForm) {
        clinicForm.elements.service.value = service;
        clearError(clinicForm.elements.service);
        syncConditionalFields(clinicForm);
      }

      if (requestTitle) {
        window.setTimeout(function () {
          requestTitle.focus({ preventScroll: true });
        }, 0);
      }
    });

    // Links from outside the page: /#book and /#order
    var openFromHash = function () {
      if (window.location.hash === '#book') setMode('clinic');
      if (window.location.hash === '#order') setMode('pharmacy');
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
  }

  /* ---------- Form checks ---------- */
  function fieldWrap(control) {
    return control.closest ? control.closest('.field') : null;
  }

  function clearError(control) {
    var wrap = fieldWrap(control);
    if (!wrap) return;
    var message = $('.field-error', wrap);
    if (message) message.parentNode.removeChild(message);
    control.removeAttribute('aria-invalid');
    control.removeAttribute('aria-describedby');
  }

  function showError(control, text) {
    var wrap = fieldWrap(control);
    if (!wrap) return;
    var message = $('.field-error', wrap);
    if (!message) {
      message = document.createElement('p');
      message.className = 'field-error';
      message.id = control.id + '-error';
      wrap.appendChild(message);
    }
    message.textContent = text;
    control.setAttribute('aria-invalid', 'true');
    control.setAttribute('aria-describedby', message.id);
  }

  // Accepts 98765 43210, +91 98765 43210, 098765 43210 and similar.
  function cleanMobile(raw) {
    var digits = String(raw).replace(/\D/g, '');
    if (digits.length === 12 && digits.indexOf('91') === 0) digits = digits.slice(2);
    if (digits.length === 11 && digits.charAt(0) === '0') digits = digits.slice(1);
    return /^[6-9]\d{9}$/.test(digits) ? digits : null;
  }

  function spacedMobile(digits) {
    return digits.slice(0, 5) + ' ' + digits.slice(5);
  }

  function readableDate(isoDate) {
    var date = new Date(isoDate + 'T00:00:00Z');
    return DAY_NAMES[date.getUTCDay()] + ', ' + date.getUTCDate() + ' ' + MONTH_NAMES[date.getUTCMonth()] + ' ' + date.getUTCFullYear();
  }

  function tidy(value) {
    return String(value || '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  }

  function whatsappLink(text) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
  }

  function openWhatsApp(url) {
    var opened = null;
    try {
      opened = window.open(url, '_blank');
    } catch (error) {
      opened = null;
    }
    if (opened) {
      try {
        opened.opener = null;
      } catch (error) {
        /* nothing to do */
      }
    } else {
      // Pop-up blocked (common inside in-app browsers): go there directly
      window.location.href = url;
    }
  }

  function showDone(form, url) {
    var done = $('[data-done]', form);
    if (!done) return;
    done.textContent = '';

    var heading = document.createElement('strong');
    heading.textContent = 'WhatsApp should now be open with your message.';
    done.appendChild(heading);
    done.appendChild(document.createTextNode(' Press send there to finish. If it did not open, '));

    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'open WhatsApp here';
    done.appendChild(link);
    done.appendChild(document.createTextNode(' or call ' + SHOP_PHONE_TEXT + '.'));

    done.hidden = false;
    done.setAttribute('role', 'status');
  }

  function buildBooking(form) {
    var f = form.elements;
    var problems = [];
    var today = shopNow().isoDate;

    var name = tidy(f.name.value);
    if (name.length < 2) problems.push([f.name, 'Enter the patient’s name.']);

    var mobile = cleanMobile(f.phone.value);
    if (!mobile) problems.push([f.phone, 'Enter a 10-digit mobile number.']);

    var service = f.service.value;
    if (!service) problems.push([f.service, 'Choose what you need.']);

    var date = f.date.value;
    if (!date) {
      problems.push([f.date, 'Pick a date.']);
    } else if (date < today) {
      problems.push([f.date, 'Pick today or a later date.']);
    } else if (!isOpenDay(new Date(date + 'T00:00:00Z').getUTCDay())) {
      problems.push([f.date, 'We are closed on Sundays. Pick another day.']);
    }

    var isHomeVisit = service === 'Doctor home visit';
    var address = tidy(f.address.value);
    if (isHomeVisit && address.length < 8) problems.push([f.address, 'Enter the address for the home visit.']);

    if (problems.length) return { problems: problems };

    var lines = [
      'Hello Malhar Pharma & Clinic,',
      'I would like to book a visit.',
      '',
      '*Patient:* ' + name,
      '*Mobile:* ' + spacedMobile(mobile),
      '*Service:* ' + service,
      '*Date:* ' + readableDate(date),
      '*Time:* ' + f.time.value
    ];
    if (isHomeVisit) lines.push('*Home address:* ' + address);
    var notes = tidy(f.notes.value);
    if (notes) lines.push('*Notes:* ' + notes);
    lines.push('', '(Sent from malharcare.in)');
    return { text: lines.join('\n') };
  }

  function buildOrder(form) {
    var f = form.elements;
    var problems = [];

    var name = tidy(f.name.value);
    if (name.length < 2) problems.push([f.name, 'Enter your name.']);

    var mobile = cleanMobile(f.phone.value);
    if (!mobile) problems.push([f.phone, 'Enter a 10-digit mobile number.']);

    var items = String(f.items.value || '')
      .split('\n')
      .map(tidy)
      .filter(Boolean);
    if (!items.length) problems.push([f.items, 'List the medicines you need.']);

    var fulfil = f.fulfil.value;
    var isDelivery = fulfil === 'Home delivery';
    var address = tidy(f.address.value);
    if (isDelivery && address.length < 8) problems.push([f.address, 'Enter the delivery address.']);

    if (problems.length) return { problems: problems };

    var lines = [
      'Hello Malhar Pharma & Clinic,',
      'I would like to order medicines.',
      '',
      '*Name:* ' + name,
      '*Mobile:* ' + spacedMobile(mobile),
      '*Medicines:*'
    ];
    items.forEach(function (item) {
      lines.push('• ' + item);
    });
    lines.push('*Prescription:* ' + (f.rx.checked ? 'Yes, I will send a photo here' : 'Not mentioned'));
    lines.push('*How:* ' + fulfil);
    if (isDelivery) lines.push('*Address:* ' + address);
    lines.push('*When:* ' + f.time.value);
    lines.push('', '(Sent from malharcare.in)');
    return { text: lines.join('\n') };
  }

  forms.forEach(function (form) {
    var isClinic = form.getAttribute('data-form') === 'clinic';

    if (isClinic && form.elements.date) {
      var limit = new Date(Date.now() + 330 * 60 * 1000 + 90 * 24 * 60 * 60 * 1000);
      form.elements.date.min = shopNow().isoDate;
      form.elements.date.max = limit.toISOString().slice(0, 10);
    }

    form.addEventListener('input', function (event) {
      if (event.target.getAttribute('aria-invalid')) clearError(event.target);
    });

    form.addEventListener('change', function (event) {
      if (event.target.getAttribute('aria-invalid')) clearError(event.target);
      syncConditionalFields(form);
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      $$('[aria-invalid]', form).forEach(clearError);

      var result = isClinic ? buildBooking(form) : buildOrder(form);
      var done = $('[data-done]', form);

      if (result.problems) {
        if (done) done.hidden = true;
        result.problems.forEach(function (problem) {
          showError(problem[0], problem[1]);
        });
        result.problems[0][0].focus();
        return;
      }

      var url = whatsappLink(result.text);
      showDone(form, url);
      openWhatsApp(url);
    });
  });

  /* ---------- Photo viewer ---------- */
  var lightbox = $('[data-lightbox]');
  var photoLinks = $$('[data-gallery] a');

  if (lightbox && typeof lightbox.showModal === 'function' && photoLinks.length) {
    var lightboxImg = $('[data-lightbox-img]', lightbox);
    var lightboxCaption = $('[data-lightbox-caption]', lightbox);
    var lightboxSources = $$('source', lightbox);
    var current = 0;
    var touchStartX = null;

    var showPhoto = function (index) {
      current = (index + photoLinks.length) % photoLinks.length;
      var link = photoLinks[current];
      var full = link.getAttribute('data-full');
      var thumb = $('img', link);
      lightboxSources.forEach(function (source) {
        source.srcset = full ? full + '.' + source.getAttribute('data-ext') : '';
      });
      lightboxImg.src = link.href;
      lightboxImg.alt = thumb ? thumb.alt : '';
      lightboxCaption.textContent = link.getAttribute('data-caption') || '';
    };

    photoLinks.forEach(function (link, index) {
      link.addEventListener('click', function (event) {
        if (event.metaKey || event.ctrlKey || event.shiftKey) return;
        event.preventDefault();
        showPhoto(index);
        lightbox.showModal();
      });
    });

    $('[data-lightbox-close]', lightbox).addEventListener('click', function () {
      lightbox.close();
    });
    $('[data-lightbox-prev]', lightbox).addEventListener('click', function () {
      showPhoto(current - 1);
    });
    $('[data-lightbox-next]', lightbox).addEventListener('click', function () {
      showPhoto(current + 1);
    });

    // A tap on the dark area around the photo closes the viewer
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox || event.target.tagName === 'FIGURE') lightbox.close();
    });

    lightbox.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') showPhoto(current - 1);
      if (event.key === 'ArrowRight') showPhoto(current + 1);
    });

    lightbox.addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (event) {
      if (touchStartX === null) return;
      var moved = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(moved) > 50) showPhoto(current + (moved < 0 ? 1 : -1));
    }, { passive: true });

    lightbox.addEventListener('close', function () {
      var opener = photoLinks[current];
      if (opener) opener.focus({ preventScroll: true });
    });
  }

  /* ---------- Gentle reveal as sections scroll into view ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealTargets = $$(
      '.section-head, .step, .service, .stock-item, .order-steps li, .note, .half-photo, .tile, ' +
      '.counter, .contact-list li, .signphoto, .hours, .map, .qa, .urgent'
    );

    // The observer reports every element once straight away. Whatever is
    // already on screen (or above it) is left alone, so nothing visible ever
    // blinks; whatever is still below the screen is hidden and fades in when
    // it arrives. Nothing is measured here, which keeps the first load light.
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var el = entry.target;

        if (!el.classList.contains('will-reveal')) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            revealer.unobserve(el);
            return;
          }
          var position = Array.prototype.indexOf.call(el.parentNode.children, el);
          el.style.transitionDelay = Math.min(position, 4) * 60 + 'ms';
          el.classList.add('will-reveal');
          return;
        }

        if (entry.isIntersecting) {
          el.classList.add('is-in');
          revealer.unobserve(el);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

    revealTargets.forEach(function (el) {
      revealer.observe(el);
    });
  }

  /* ---------- Phone action bar: step aside while the forms are on screen ---------- */
  var dock = $('[data-dock]');
  var requestSection = $('#request');

  if (dock && requestSection && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      dock.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { rootMargin: '-20% 0px -20% 0px' }).observe(requestSection);
  }

  /* ---------- Offline support ---------- */
  var isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocal)) {
    window.addEventListener('load', function () {
      // "?site=2" tells the worker it was started by this version of the site
      navigator.serviceWorker.register('sw.js?site=2').catch(function () {
        /* The site works without it */
      });
    });
  }
})();
