import { createHash } from "node:crypto";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const width = 1200;
const height = 630;
const goldenWidth = 1200;
const goldenHeight = 600;
const goldenTop = 15;
const expectedGoldenHash =
  "a34b25a483c1d13ba0dfe9e1781af9c1d79b607df5707588d5226b684f4ddbf6";
const goldenPath = path.join(
  root,
  "design-assets/social/home-social-card-option-c-golden.png",
);
const outputPath = path.join(root, "public/images/home-social-card-v1.jpg");

const golden = await readFile(goldenPath);
const goldenHash = createHash("sha256").update(golden).digest("hex");
if (goldenHash !== expectedGoldenHash) {
  throw new Error(
    `Frozen Option C golden hash mismatch: ${goldenHash}; expected ${expectedGoldenHash}`,
  );
}

const goldenMetadata = await sharp(golden).metadata();
if (
  goldenMetadata.width !== goldenWidth ||
  goldenMetadata.height !== goldenHeight
) {
  throw new Error(
    `Unexpected golden size: ${goldenMetadata.width}x${goldenMetadata.height}; expected ${goldenWidth}x${goldenHeight}`,
  );
}

await mkdir(path.dirname(outputPath), { recursive: true });
await sharp({
  create: {
    width,
    height,
    channels: 3,
    background: "#050505",
  },
})
  .composite([{ input: golden, left: 0, top: goldenTop }])
  .jpeg({ quality: 90, chromaSubsampling: "4:4:4", mozjpeg: true })
  .toFile(outputPath);

const outputMetadata = await sharp(outputPath).metadata();
if (outputMetadata.width !== width || outputMetadata.height !== height) {
  throw new Error(
    `Unexpected output size: ${outputMetadata.width}x${outputMetadata.height}; expected ${width}x${height}`,
  );
}

console.log(
  `${outputPath}: ${outputMetadata.width}x${outputMetadata.height}, golden ${goldenHash}`,
);
