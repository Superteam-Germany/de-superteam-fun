import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [, , inputArg, outputArg] = process.argv;
const EXPECTED_WIDTH = 485;
const EXPECTED_HEIGHT = 412;

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

if (info.width !== EXPECTED_WIDTH || info.height !== EXPECTED_HEIGHT) {
  throw new Error(
    `Unexpected source size: ${info.width}x${info.height}; expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`,
  );
}

const rgba = Buffer.alloc(info.width * info.height * 4);

for (let index = 0; index < alpha.length; index += 1) {
  const outputIndex = index * 4;
  rgba[outputIndex] = 255;
  rgba[outputIndex + 1] = 255;
  rgba[outputIndex + 2] = 255;
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

const outputMetadata = await sharp(outputPath).metadata();
if (
  outputMetadata.width !== EXPECTED_WIDTH ||
  outputMetadata.height !== EXPECTED_HEIGHT
) {
  throw new Error(
    `Unexpected output size: ${outputMetadata.width}x${outputMetadata.height}; expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`,
  );
}

console.log(`${outputPath}: ${info.width}x${info.height}`);
