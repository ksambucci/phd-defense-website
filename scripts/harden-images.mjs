/**
 * Prepare photos for publishing on a public site.
 *
 * Rewrites everything under public/images/ in place:
 *   - strips ALL metadata (EXIF, GPS coordinates, camera serial, timestamps)
 *   - downscales so the longest edge is at most MAX_EDGE px
 *   - re-encodes at web quality
 *
 * Full-quality originals live in _originals-backup/ (git-ignored). This script
 * never touches them, so it is safe to re-run: drop new photos into
 * public/images/, back them up, then run `npm run harden-images`.
 *
 * Note on what this does and does not do: stripping GPS and downscaling means
 * no location data and no print-resolution file ever reaches the public repo.
 * It does NOT stop someone who can see the page from saving the web-sized copy
 * — a static host cannot prevent that.
 */
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('../public/images', import.meta.url));
const MAX_EDGE = 1800;
const JPEG_QUALITY = 82;
const EXTS = new Set(['.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXTS.has(extname(entry.name).toLowerCase())) yield full;
  }
}

let count = 0;
let before = 0;
let after = 0;

for await (const file of walk(ROOT)) {
  const originalSize = (await stat(file)).size;

  // Read fully into memory first — sharp cannot stream to the file it is reading.
  const input = await readFile(file);
  const image = sharp(input, { failOn: 'none' });
  const { width, height, format } = await image.metadata();

  const longest = Math.max(width ?? 0, height ?? 0);
  const pipeline = image.rotate(); // bake in EXIF orientation before it is stripped

  if (longest > MAX_EDGE) {
    pipeline.resize({
      width: width >= height ? MAX_EDGE : undefined,
      height: height > width ? MAX_EDGE : undefined,
      withoutEnlargement: true,
    });
  }

  // sharp drops metadata unless withMetadata() is called, so EXIF/GPS goes here.
  const output = await (format === 'png'
    ? pipeline.png({ compressionLevel: 9 })
    : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
  ).toBuffer();

  await writeFile(file, output);

  count += 1;
  before += originalSize;
  after += output.length;

  const rel = file.slice(ROOT.length + 1);
  const saved = ((1 - output.length / originalSize) * 100).toFixed(0);
  console.log(
    `  ${rel.padEnd(48)} ${longest}px -> ${Math.min(longest, MAX_EDGE)}px  ${saved}% smaller`
  );
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(
  `\n${count} images hardened. ${mb(before)} MB -> ${mb(after)} MB ` +
    `(${((1 - after / before) * 100).toFixed(0)}% smaller). Metadata stripped.`
);
