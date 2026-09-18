import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [, , inputArg, outputArg] = process.argv;

if (!inputArg || !outputArg) {
  throw new Error(
    "Usage: node scripts/normalize-brandenburg-gate-mask.mjs <input> <output>",
  );
}

const inputPath = path.resolve(inputArg);
const outputPath = path.resolve(outputArg);
const { data: alpha, info } = await sharp(inputPath)
  .removeAlpha()
  .grayscale()
  .negate()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);

for (let index = 0; index < alpha.length; index += 1) {
  const outputIndex = index * 4;
  rgba[outputIndex] = 239;
  rgba[outputIndex + 1] = 232;
  rgba[outputIndex + 2] = 222;
  rgba[outputIndex + 3] = alpha[index];
}

await mkdir(path.dirname(outputPath), { recursive: true });
await sharp(rgba, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toFile(outputPath);

console.log(`${outputPath}: ${info.width}x${info.height}`);
