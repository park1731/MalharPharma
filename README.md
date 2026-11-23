# Malhar Pharma & Clinic — website

The website for Malhar Pharma & Clinic, Begur–Koppa Main Road, Koppa Village, Bengaluru 560105 (malharcare.in).

It is a single page built with plain HTML, CSS and JavaScript. There is nothing to install and nothing to build: the files in this folder are the website.

## The theme

The shop is two things in one place, and the site is laid out the same way.

- **Blue is the clinic, green is the pharmacy.** The two colours come from the split cross on the shop's signboard.
- **Clinic on the left, pharmacy on the right**, as in the shop itself. You see this in the two buttons at the top, in the clinic and pharmacy sections (each has a pillar with stacked letters, like the pillars at the shop door), and in the action bar at the bottom of the screen on phones.
- **The header is the signboard**: the name in Kannada and English, with the red address strip underneath.

All colours are defined once at the top of `assets/css/site.css`.

## Files

| File or folder | What it is |
| --- | --- |
| `index.html` | The whole page: all text, phone numbers, services and questions |
| `assets/css/site.css` | The design |
| `assets/js/site.js` | Open/closed status, the booking and order forms, photo viewer, menu |
| `assets/img/` | Photos, already resized and compressed for the web |
| `assets/fonts/`, `assets/icons/` | Fonts, logo and app icons |
| `404.html`, `offline.html` | Shown for a wrong address, and when a visitor has no signal |
| `sw.js`, `manifest.webmanifest` | Lets the site open without signal and be added to a phone's home screen |
| `.htaccess`, `robots.txt`, `sitemap.xml` | Settings for the web host and for search engines |
| `images/` | Your original full-size photos. The site does not load these |
| `tools/` | Optional helpers (see "Changing photos") |

### Temporary files from the previous website

`styles.css`, `script.js` and `config.js` in the top folder belong to the previous website. The new site does not use them. They are kept only because Hostinger's CDN was still serving a saved copy of the old home page, which needs them. Once the CDN cache has been cleared (hPanel → the website → CDN → clear or flush cache), these three files can be deleted.

## Seeing it on your computer

Run this in the project folder, then open http://localhost:8000

```
python3 -m http.server 8000
```

## Putting it online

Upload everything in this folder to the website's root folder (`public_html` on most hosts), replacing the old files. You can leave out `tools/`, `images/` and `README.md`; the site does not need them.

People who visited the old site will be moved to the new one automatically the next time they open it.

## Changing things

Everything visitors read is in `index.html`. Search for the text you want to change and edit it.

**Phone numbers.** Search for `9307845862` and `9423178631` in `index.html`, `404.html` and `offline.html`. The WhatsApp number used by the forms is at the top of `assets/js/site.js` (`WHATSAPP_NUMBER`).

**Opening hours.** Change the text in `index.html` (search for `10:30`), the `openingHoursSpecification` block near the top of `index.html`, and `OPENS_AT`, `CLOSES_AT` and `OPEN_DAYS` at the top of `assets/js/site.js`, which drive the "Open now" label.

**Doctor's timings.** Search for `Doctor’s timings` in `index.html` and write the exact hours there.

**Clinic services.** Each one is a block in the list under `What you can come in for`. Copy a block to add one, and add the same name to the `What do you need?` list in the booking form. The two names must match exactly.

**Questions.** Each one is a `<details class="qa">` block. The same questions also appear near the top of `index.html` in a block marked `FAQPage`, which search engines read. Change both.

**Address or map position.** The map and the "Get directions" button use the coordinates `12.80677, 77.62703`. Search for `12.80677` to change them.

## Changing photos

The photos in `assets/img/` were made from the originals in `images/` by `tools/build-images.cjs`, which crops each one, saves it in several sizes and removes location data. To change a photo or add one:

```
cd tools
npm install
npm run images
```

The list of photos and crops is at the top of `tools/build-images.cjs`. Customer photos are cropped so that no customer's face is shown. To rebuild just one photo, name it: `npm run images -- shopfront`.

The large photo at the top of the page has no frame. Its edges are faded into the background in `assets/css/site.css` (search for `.shop-frame`), which is why its crop keeps spare roof above the signboard and steps below.

The picture shown when the link is shared on WhatsApp is `assets/img/og-image.jpg`. Its source is `tools/og/og.html`.

## Credits

- Typeface: Anek Latin and Anek Kannada by Ek Type, SIL Open Font License (`assets/fonts/OFL.txt`)
- Icons: Lucide, ISC licence. WhatsApp glyph from Simple Icons, CC0
