/*
 * Rebuilds the optimised, responsive photos in assets/img from the full-size
 * originals in images/.
 *
 *   cd tools && npm install && npm run images
 *
 * To rebuild only some photos, name them:  npm run images -- shopfront counter
 *
 * To add or change a photo, edit the PHOTOS list below. `crop` is
 * [left, top, width, height] as fractions (0-1) of the upright original;
 * leave it out to use the whole photo. Each photo is written as AVIF and WebP
 * at every listed width plus one JPEG fallback, with location data and other
 * metadata removed.
 */
const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'images');
const OUT = path.join(ROOT, 'assets', 'img');

const GALLERY = 'medical-gallery';
const CUSTOMER = 'customer engament images';

const PHOTOS = [
  // Shop front with both pillars: used in the hero. The page fades its edges
  // into the background, so the crop keeps spare roof above and steps below.
  { out: 'shopfront',        src: `${GALLERY}/angle_view.jpeg`,       crop: [0, 0.10, 1, 0.79],           widths: [480, 768, 1080, 1440], fallback: 1080 },
  // Clinic pillar, corridor and the CLINIC door sign
  { out: 'clinic-entrance',  src: `${GALLERY}/angle_view.jpeg`,       crop: [0, 0.255, 0.47, 0.50],       widths: [360, 540, 800],        fallback: 540 },
  // Pharmacy counter
  { out: 'counter',          src: `${GALLERY}/front_view.jpeg`,       crop: [0, 0, 1, 0.79],              widths: [480, 768, 1080, 1600], fallback: 1080 },
  { out: 'medicines',        src: `${GALLERY}/items_view2.jpeg`,                                           widths: [480, 800, 1600],       fallback: 800 },
  { out: 'baby-nutrition',   src: `${GALLERY}/IMG_7363.jpeg`,                                              widths: [480, 800, 1600],       fallback: 800 },
  { out: 'essentials',       src: `${GALLERY}/items_view1.jpeg`,                                           widths: [480, 800, 1600],       fallback: 800 },
  { out: 'billing-desk',     src: `${GALLERY}/side_view.jpeg`,        crop: [0.16, 0, 0.84, 0.50],        widths: [480, 800, 1600],       fallback: 800 },
  { out: 'personal-care',    src: `${GALLERY}/items_view3.jpeg`,      crop: [0.10, 0.19, 0.72, 0.43],     widths: [480, 800, 1400],       fallback: 800 },
  // Lit signboard at night: used in "Find us"
  { out: 'signboard',        src: `${GALLERY}/full_front_view.jpeg`,  crop: [0.035, 0.205, 0.85, 0.435],  widths: [480, 800, 1200, 1600], fallback: 800 },
  { out: 'facilities-board', src: `${GALLERY}/facilities_board.jpeg`, crop: [0.20, 0.06, 0.56, 0.745],    widths: [360, 600, 1000],       fallback: 600 },
  // Customer photos are cropped so that no customer's face is shown
  { out: 'busy-counter',     src: `${CUSTOMER}/298b8a7e-8393-403e-a85c-42ce310cea8c.jpeg`, crop: [0.30, 0.07, 0.70, 0.82],  widths: [480, 800, 1100], fallback: 800 },
  { out: 'counter-day',      src: `${CUSTOMER}/621ca541-5a43-4194-bdc1-83d255ec9260.jpeg`, crop: [0.275, 0.04, 0.725, 0.88], widths: [480, 800, 1100], fallback: 800 },
];

async function build() {
  fs.mkdirSync(OUT, { recursive: true });
  const manifest = {};
  let total = 0;

  const only = process.argv.slice(2);
  const unknown = only.filter((name) => !PHOTOS.some((photo) => photo.out === name));
  if (unknown.length) throw new Error(`No photo called: ${unknown.join(', ')}`);
  const photos = only.length ? PHOTOS.filter((photo) => only.includes(photo.out)) : PHOTOS;

  for (const photo of photos) {
    // .rotate() with no arguments applies the camera's orientation flag
    const upright = await sharp(path.join(SRC, photo.src)).rotate().toBuffer();
    const meta = await sharp(upright).metadata();

    let region = { left: 0, top: 0, width: meta.width, height: meta.height };
    if (photo.crop) {
      const [x, y, w, h] = photo.crop;
      region = {
        left: Math.round(x * meta.width),
        top: Math.round(y * meta.height),
        width: Math.round(w * meta.width),
        height: Math.round(h * meta.height),
      };
      region.width = Math.min(region.width, meta.width - region.left);
      region.height = Math.min(region.height, meta.height - region.top);
    }
    const cropped = await sharp(upright).extract(region).toBuffer();
    const ratio = region.height / region.width;

    const sizes = [];
    for (const width of photo.widths.filter((w) => w <= region.width)) {
      const height = Math.round(width * ratio);
      const resized = sharp(cropped).resize({ width, height, fit: 'fill', kernel: 'lanczos3' });
      const base = path.join(OUT, `${photo.out}-${width}`);

      await resized.clone().avif({ quality: 50, effort: 6 }).toFile(`${base}.avif`);
      await resized.clone().webp({ quality: 60, effort: 6, smartSubsample: true }).toFile(`${base}.webp`);
      const avifKb = Math.round(fs.statSync(`${base}.avif`).size / 1024);
      const webpKb = Math.round(fs.statSync(`${base}.webp`).size / 1024);
      total += fs.statSync(`${base}.avif`).size + fs.statSync(`${base}.webp`).size;
      sizes.push({ width, height, avifKb, webpKb });

      if (width === photo.fallback) {
        await resized.clone().jpeg({ quality: 70, mozjpeg: true, progressive: true }).toFile(`${base}.jpg`);
        total += fs.statSync(`${base}.jpg`).size;
      }
    }
    manifest[photo.out] = sizes;
    console.log(photo.out.padEnd(18), sizes.map((s) => `${s.width}x${s.height} ${s.avifKb}/${s.webpKb}KB`).join('  '));
  }

  console.log(`\nWrote ${photos.length} photos, ${(total / 1024 / 1024).toFixed(1)} MB in total, to assets/img`);
  return manifest;
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
