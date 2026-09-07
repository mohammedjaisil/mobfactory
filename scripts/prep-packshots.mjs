/**
 * Turns candidate clothing photos into transparent-background PNG cut-outs by
 * chroma-keying the (near-uniform) corner background colour, then trims to the
 * garment. Keeps only images that key cleanly (a sane transparent fraction).
 * Output → /public/packshots/*.png  (float on ANY background, incl. dark mode).
 */
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = process.env.SRC || join(__dirname, "..", ".tmp-pack");
const OUT = join(__dirname, "..", "public", "packshots");

const TOL = 50; // colour distance considered "background"
const FEATHER = 30; // soft edge width

const NAMES = {
  "17630811": "jeans",
  "4109797": "denim-folded",
  "2129970": "denim-stack",
  "116813": "product",
  "6765179": "denim-jacket",
  "28576623": "white-shirt",
  "8346226": "folded",
};

const dist = (r, g, b, br, bg, bb) =>
  Math.sqrt((r - br) ** 2 + (g - bg) ** 2 + (b - bb) ** 2);

async function keyOut(file, outPath) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const px = (x, y) => {
    const i = (y * width + x) * channels;
    return [data[i], data[i + 1], data[i + 2]];
  };
  // Background colour = average of four corner pixels.
  const corners = [px(2, 2), px(width - 3, 2), px(2, height - 3), px(width - 3, height - 3)];
  const bg = [0, 1, 2].map((c) => corners.reduce((s, p) => s + p[c], 0) / corners.length);

  let clear = 0;
  const total = width * height;
  for (let i = 0; i < total; i++) {
    const o = i * channels;
    const d = dist(data[o], data[o + 1], data[o + 2], bg[0], bg[1], bg[2]);
    if (d < TOL) {
      data[o + 3] = 0;
      clear++;
    } else if (d < TOL + FEATHER) {
      data[o + 3] = Math.round((255 * (d - TOL)) / FEATHER);
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .trim()
    .resize(1000, 1000, { fit: "inside", withoutEnlargement: true })
    .png({ quality: 90 })
    .toFile(outPath);

  return clear / total; // transparent fraction
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => f.endsWith(".jpg"));
  const kept = [];
  for (const f of files) {
    const id = f.replace(".jpg", "");
    const name = NAMES[id] ?? id;
    const out = join(OUT, `${name}.png`);
    try {
      const frac = await keyOut(join(SRC, f), out);
      const ok = frac > 0.28 && frac < 0.82;
      console.log(`${f}\ttransparent=${(frac * 100).toFixed(0)}%\t${ok ? "KEEP → " + name : "skip"}`);
      if (ok) kept.push(name);
    } catch (e) {
      console.log(`${f}\tERROR ${e.message}`);
    }
  }
  console.log("\nKEPT:", kept.join(", ") || "(none)");
}

main();
