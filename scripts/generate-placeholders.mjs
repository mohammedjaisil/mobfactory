/**
 * Generates tasteful branded placeholder images for every path the site
 * references, so there are ZERO 404s before real photos are uploaded.
 *
 * Drop your real photos into /public with the same filenames to replace them.
 * Re-run any time with:  node scripts/generate-placeholders.mjs
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const NAVY = "#0f102c";
const NAVY_2 = "#171a3d";
const LIGHT = "#f2f0ea";
const LIGHT_2 = "#e7e4da";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg({ w, h, dark, label }) {
  const bg = dark ? NAVY : LIGHT;
  const bg2 = dark ? NAVY_2 : LIGHT_2;
  const ink = dark ? "#ffffff" : NAVY;
  const faint = dark ? "rgba(255,255,255,0.34)" : "rgba(15,16,44,0.34)";
  const mono = Math.round(Math.min(w, h) * 0.16);
  const cap = Math.max(11, Math.round(Math.min(w, h) * 0.026));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${bg2}"/>
        <stop offset="1" stop-color="${bg}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <rect x="${w * 0.04}" y="${h * 0.04}" width="${w * 0.92}" height="${h * 0.92}"
      fill="none" stroke="${faint}" stroke-width="1"/>
    <text x="50%" y="49%" text-anchor="middle" dominant-baseline="middle"
      font-family="Georgia, 'Times New Roman', serif" font-size="${mono}" letter-spacing="${mono * 0.04}"
      fill="${ink}">MF</text>
    <text x="50%" y="${h * 0.49 + mono * 0.78}" text-anchor="middle" dominant-baseline="middle"
      font-family="Arial, Helvetica, sans-serif" font-size="${cap}" letter-spacing="${cap * 0.32}"
      fill="${faint}">${esc(label.toUpperCase())}</text>
  </svg>`;
}

async function make(path, { w, h, dark, label }) {
  const full = join(PUBLIC, path);
  await mkdir(dirname(full), { recursive: true });
  const buf = Buffer.from(svg({ w, h, dark, label }));
  await sharp(buf).jpeg({ quality: 82, mozjpeg: true }).toFile(full);
  console.log("✓", path);
}

const P = { w: 900, h: 1200 }; // product / category portrait
const jobs = [
  ["hero.jpg", { w: 2000, h: 1400, dark: true, label: "Campaign" }],
  ["collections/collector-hero.jpg", { w: 2000, h: 1200, dark: true, label: "Collector Series" }],
  ["about/studio.jpg", { w: 1600, h: 900, dark: true, label: "The Studio" }],

  ["categories/tees.jpg", { ...P, dark: true, label: "T-Shirts" }],
  ["categories/shirts.jpg", { ...P, dark: false, label: "Shirts" }],
  ["categories/outerwear.jpg", { ...P, dark: true, label: "Outerwear" }],
  ["categories/trousers.jpg", { ...P, dark: false, label: "Trousers" }],

  ["editorial/collector.jpg", { w: 1200, h: 1500, dark: true, label: "Collector" }],
  ["editorial/craft.jpg", { w: 1200, h: 1500, dark: false, label: "The Craft" }],
];

// Product images (2 each) — alternate dark/light for a lookbook feel.
const products = [
  ["tee-black", "Heavyweight Tee"],
  ["shirt-white", "Oxford Shirt"],
  ["jacket-navy", "Bomber Jacket"],
  ["trouser-stone", "Pleated Trouser"],
  ["knit-grey", "Merino Knit"],
  ["overshirt-olive", "Overshirt"],
  ["tee-graphic", "Graphic Tee"],
  ["denim-indigo", "Relaxed Denim"],
  ["hoodie-sand", "Hooded Sweat"],
  ["belt-brown", "Leather Belt"],
  ["cap-navy", "Cotton Cap"],
  ["linen-sky", "Linen Shirt"],
];
products.forEach(([slug, label], i) => {
  jobs.push([`products/${slug}-1.jpg`, { ...P, dark: i % 2 === 0, label }]);
  jobs.push([`products/${slug}-2.jpg`, { ...P, dark: i % 2 !== 0, label: `${label} · Back` }]);
});

await Promise.all(jobs.map(([path, opts]) => make(path, opts)));
console.log(`\nDone — ${jobs.length} placeholder images written to /public.`);
