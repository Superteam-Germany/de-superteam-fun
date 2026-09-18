import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const width = 1200;
const height = 630;
const backgroundPath = path.join(
  root,
  "design-assets/social/home-social-card-background-v1.png",
);
const gatePath = path.join(
  root,
  "design-assets/social/brandenburg-gate-mask-v1.png",
);
const logoPath = path.join(root, "public/images/stLogoWithIcon.svg");
const outputPath = path.join(root, "public/images/home-social-card-v1.jpg");

const [background, gateSource, logoSource] = await Promise.all([
  sharp(backgroundPath)
    .resize(width, height, { fit: "cover", position: "centre" })
    .png()
    .toBuffer(),
  readFile(gatePath),
  readFile(logoPath),
]);

const gateData = gateSource.toString("base64");
const logoData = logoSource.toString("base64");
const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"
       xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="logo-shadow" x="-25%" y="-60%" width="150%" height="220%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.92" />
        <feDropShadow dx="0" dy="0" stdDeviation="18" flood-color="#000" flood-opacity="0.72" />
      </filter>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="18" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </defs>

    <image href="data:image/png;base64,${gateData}" x="306" y="350"
           width="588" height="498" preserveAspectRatio="xMidYMid meet"
           opacity="0.19" />
    <rect width="1200" height="630" filter="url(#grain)" opacity="0.025"
          style="mix-blend-mode:soft-light" />
    <image href="data:image/svg+xml;base64,${logoData}" x="340" y="244"
           width="520" height="107" preserveAspectRatio="xMidYMid meet"
           filter="url(#logo-shadow)" />
  </svg>
`);

await mkdir(path.dirname(outputPath), { recursive: true });
await sharp(background)
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 90, chromaSubsampling: "4:4:4", mozjpeg: true })
  .toFile(outputPath);

const metadata = await sharp(outputPath).metadata();

if (metadata.width !== width || metadata.height !== height) {
  throw new Error(`Unexpected output size: ${metadata.width}x${metadata.height}`);
}

console.log(`${outputPath}: ${metadata.width}x${metadata.height}`);
