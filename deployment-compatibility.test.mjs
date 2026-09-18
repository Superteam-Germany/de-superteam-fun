import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const read = path => readFileSync(new URL(path, import.meta.url), "utf8");
const sha256 = path =>
  createHash("sha256")
    .update(readFileSync(new URL(path, import.meta.url)))
    .digest("hex");

const SOCIAL_CARD_WIDTH = 1200;
const SOCIAL_CARD_CONTENT_HEIGHT = 600;
const SOCIAL_CARD_HEIGHT = 630;
const HOME_SOCIAL_CARD_GOLDEN_SHA256 =
  "a34b25a483c1d13ba0dfe9e1781af9c1d79b607df5707588d5226b684f4ddbf6";
const MAX_SOCIAL_CARD_RGB_MAE = 0.75;
const MAX_SOCIAL_CARD_LAPLACIAN_MAE = 2;
const SOCIAL_CARD_LOGO_ROI = {
  left: 340,
  top: 240,
  width: 520,
  height: 112,
};
const MAX_SOCIAL_CARD_LOGO_RGB_MAE = 2;
const MAX_SOCIAL_CARD_LOGO_LAPLACIAN_MAE = 6;
const SOCIAL_CARD_GATE_ROI = {
  left: 306,
  top: 352,
  width: 588,
  height: 278,
};
const MAX_SOCIAL_CARD_GATE_RGB_MAE = 1;
const MAX_SOCIAL_CARD_GATE_LAPLACIAN_MAE = 2;
const LAPLACIAN_KERNEL = [
  0, 1, 0,
  1, -4, 1,
  0, 1, 0,
];

const decodeSrgb = async (path, extract, resize) => {
  let image = sharp(path);
  if (resize) image = image.resize(resize);
  if (extract) image = image.extract(extract);

  const { data, info } = await image
    .toColourspace("srgb")
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  assert.equal(info.channels, 3, `${path} must decode to three-channel sRGB`);
  return { data, width: info.width, height: info.height };
};

const meanAbsoluteChannelError = (actual, expected) => {
  assert.equal(actual.length, expected.length, "image buffers must be the same size");

  let totalError = 0;
  for (let index = 0; index < actual.length; index += 1) {
    totalError += Math.abs(actual[index] - expected[index]);
  }
  return totalError / actual.length;
};

const extractRegion = (image, { left, top, width, height }) => {
  assert.ok(left >= 0 && top >= 0, "image ROI must start inside the image");
  assert.ok(left + width <= image.width, "image ROI must fit within the image width");
  assert.ok(top + height <= image.height, "image ROI must fit within the image height");

  const channels = 3;
  const rowLength = width * channels;
  const data = new Uint8Array(rowLength * height);
  for (let row = 0; row < height; row += 1) {
    const sourceStart = ((top + row) * image.width + left) * channels;
    data.set(image.data.subarray(sourceStart, sourceStart + rowLength), row * rowLength);
  }

  return { data, width, height };
};

const laplacianEdgeMap = ({ data, width, height }) => {
  const channels = 3;
  const outputWidth = width - 2;
  const outputHeight = height - 2;
  const edges = new Uint16Array(outputWidth * outputHeight * channels);
  let outputIndex = 0;

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      for (let channel = 0; channel < channels; channel += 1) {
        let response = 0;
        for (let kernelY = -1; kernelY <= 1; kernelY += 1) {
          for (let kernelX = -1; kernelX <= 1; kernelX += 1) {
            const sourceIndex =
              ((y + kernelY) * width + x + kernelX) * channels + channel;
            const kernelIndex = (kernelY + 1) * 3 + kernelX + 1;
            response += data[sourceIndex] * LAPLACIAN_KERNEL[kernelIndex];
          }
        }
        edges[outputIndex] = Math.abs(response);
        outputIndex += 1;
      }
    }
  }

  return edges;
};

const laplacianEdgeError = (actual, expected) =>
  meanAbsoluteChannelError(laplacianEdgeMap(actual), laplacianEdgeMap(expected));

test("the documented local runtime matches the package engine", () => {
  const packageJson = JSON.parse(read("./package.json"));
  const readme = read("./README.md");

  assert.equal(read("./.nvmrc").trim(), "22");
  assert.equal(packageJson.engines.node, "22.x");
  assert.equal(packageJson.packageManager, "yarn@1.22.19");
  assert.ok(readme.indexOf("nvm use") < readme.indexOf("yarn install"));
  assert.doesNotMatch(readme, /NEXT_PUBLIC_SITE_URL/);
});

test("the production routes serve tracked copies of the approved redesign", () => {
  const nextConfig = read("./next.config.js");
  const homeUrl = new URL("./public/site/home.html", import.meta.url);
  const hackathonUrl = new URL("./public/site/buildstation.html", import.meta.url);

  assert.ok(existsSync(homeUrl));
  assert.ok(existsSync(hackathonUrl));
  assert.match(nextConfig, /source:\s*["']\/["'][\s\S]*destination:\s*["']\/site\/home\.html["']/);
  assert.match(nextConfig, /source:\s*["']\/buildstation["'][\s\S]*destination:\s*["']\/site\/buildstation\.html["']/);
});

test("production HTML uses clean internal routes and deployable asset paths", () => {
  const home = read("./public/site/home.html");
  const hackathon = read("./public/site/buildstation.html");

  assert.match(home, /href:["']\/buildstation["']/);
  assert.doesNotMatch(home, /global-hackathon\.html/);
  assert.doesNotMatch(home, /assets\/summit/);
  assert.doesNotMatch(hackathon, /grain-shader-v12-upcoming-events\.html/);
  assert.match(hackathon, /href="\/#what-we-do"/);
});

test("production dependencies use supported security-patched releases", () => {
  const packageJson = JSON.parse(read("./package.json"));

  assert.equal(packageJson.dependencies.next, "15.5.24");
  assert.equal(packageJson.dependencies["eslint-config-next"], "15.5.24");
  assert.equal(packageJson.dependencies.axios, "1.20.0");
  assert.equal(packageJson.dependencies["next-sanity"], "9.12.3");
  assert.equal(packageJson.dependencies["@sanity/client"], "7.27.0");
  assert.equal(packageJson.dependencies.postcss, "8.5.28");
  assert.equal(packageJson.resolutions.postcss, "8.5.28");
  assert.equal(packageJson.resolutions.tar, "7.5.21");
  assert.equal(packageJson.resolutions["tar-fs"], "2.1.4");
});

test("production routes send baseline and content security headers", () => {
  const nextConfig = read("./next.config.js");

  assert.match(nextConfig, /Content-Security-Policy/);
  assert.match(nextConfig, /default-src 'self'/);
  assert.match(nextConfig, /frame-ancestors 'none'/);
  assert.match(nextConfig, /X-Content-Type-Options[\s\S]*nosniff/);
  assert.match(nextConfig, /Referrer-Policy[\s\S]*strict-origin-when-cross-origin/);
  assert.match(nextConfig, /Permissions-Policy/);
  assert.match(nextConfig, /Strict-Transport-Security/);
});

test("the image optimizer only accepts the CMS image host", () => {
  const nextConfig = read("./next.config.js");

  assert.doesNotMatch(nextConfig, /hostname:\s*["']\*\*["']/);
  assert.match(nextConfig, /hostname:\s*["']cdn\.sanity\.io["']/);
});

test("new-tab links in the production redesign isolate their opener", () => {
  const home = read("./public/site/home.html");
  const hackathon = read("./public/site/buildstation.html");
  const homeNewTabLinks = home.match(/target:"_blank"[\s\S]{0,80}?rel:"[^"]*(?:noopener|noreferrer)[^"]*"/g) ?? [];
  const hackathonNewTabLinks = hackathon.match(/<a\b[^>]*target=["']_blank["'][^>]*>/g) ?? [];

  assert.equal(homeNewTabLinks.length, (home.match(/target:"_blank"/g) ?? []).length);
  assert.ok(hackathonNewTabLinks.length > 0);
  for (const link of hackathonNewTabLinks) {
    assert.match(link, /rel=["'][^"']*(?:noopener|noreferrer)[^"']*["']/);
  }
});

test("route handlers use the Next 15 request signature", () => {
  for (const path of [
    "./src/app/api/get-events/route.ts",
    "./src/app/api/get-luma-events/route.ts",
  ]) {
    const route = read(path);

    assert.doesNotMatch(route, /export async function GET\([^)]*,[^)]*\)/);
  }
});

test("dynamic pages await Next 15 route params", () => {
  const blogPost = read("./src/app/blog/[slug]/page.tsx");
  const blogIndex = read("./src/app/blog/page.tsx");

  assert.match(blogPost, /type BlogPostParams = Promise<\{\s*slug:\s*string;?\s*\}>/);
  assert.match(blogPost, /await params/);
  assert.match(blogIndex, /type BlogSearchParams = Promise</);
  assert.match(blogIndex, /await searchParams/);
});

test("the newsletter proxy bounds and validates public input", () => {
  const newsletter = read("./src/app/api/newsletter/route.ts");

  assert.match(newsletter, /content-type/i);
  assert.match(newsletter, /request\.text\(\)/);
  assert.match(newsletter, /MAX_REQUEST_BODY_BYTES/);
  assert.match(newsletter, /MAX_EMAIL_LENGTH/);
  assert.match(newsletter, /timeout:\s*8_000/);
  assert.match(newsletter, /originUrl\.host !== requestHost/);
  assert.match(newsletter, /originUrl\.protocol !== `\$\{requestProtocol\}:`/);
});

test("the redesigned newsletter form always calls the real backend", () => {
  const home = read("./public/site/home.html");

  assert.match(home, /fetch\(["']\/api\/newsletter["']/);
  assert.doesNotMatch(home, /window\.location\.port/);
});

test("public data proxies publish bounded CDN cache policies", () => {
  for (const path of [
    "./src/app/api/get-events/route.ts",
    "./src/app/api/get-luma-events/route.ts",
    "./src/app/api/projects/route.ts",
  ]) {
    assert.match(read(path), /s-maxage=300, stale-while-revalidate=900/);
  }
});

test("homepage metadata uses the approved versioned social card", async () => {
  const home = read("./public/site/home.html");
  const layout = read("./src/app/layout.tsx");
  const cardUrl = new URL(
    "./public/images/home-social-card-v1.jpg",
    import.meta.url,
  );
  const cardPath = fileURLToPath(cardUrl);
  const goldenUrl = new URL(
    "./design-assets/social/home-social-card-option-c-golden.png",
    import.meta.url,
  );
  const goldenPath = fileURLToPath(goldenUrl);
  const expectedHtmlTitle =
    "Superteam Germany | Solana Builders, Founders &amp; Startups";
  const expectedLayoutTitle =
    "Superteam Germany | Solana Builders, Founders & Startups";
  const expectedDescription =
    "Superteam Germany helps Solana builders and founders launch, grow, raise capital, hire talent and connect through events across Germany.";
  const expectedHtmlTwitterDescription =
    "Launch, grow and connect with Germany’s Solana builder and founder community.";

  assert.ok(existsSync(cardPath), "the versioned homepage social card must exist");
  assert.ok(existsSync(goldenPath), "the independent Option C golden must exist");
  assert.equal(sha256(goldenPath), HOME_SOCIAL_CARD_GOLDEN_SHA256);
  const cardMetadata = await sharp(cardPath).metadata();
  assert.equal(cardMetadata.width, SOCIAL_CARD_WIDTH);
  assert.equal(cardMetadata.height, SOCIAL_CARD_HEIGHT);
  assert.ok(statSync(cardPath).size < 1_000_000, "social card must stay under 1 MB");
  const goldenMetadata = await sharp(goldenPath).metadata();
  assert.equal(goldenMetadata.width, SOCIAL_CARD_WIDTH);
  assert.equal(goldenMetadata.height, SOCIAL_CARD_CONTENT_HEIGHT);

  const golden = await decodeSrgb(goldenPath, undefined, {
    width: SOCIAL_CARD_WIDTH,
    height: SOCIAL_CARD_HEIGHT,
    fit: "fill",
    kernel: sharp.kernel.lanczos3,
  });
  const cardContent = await decodeSrgb(cardPath);
  assert.ok(
    meanAbsoluteChannelError(cardContent.data, golden.data) < MAX_SOCIAL_CARD_RGB_MAE,
    `edge-to-edge social-card RGB MAE must stay under ${MAX_SOCIAL_CARD_RGB_MAE}`,
  );
  assert.ok(
    laplacianEdgeError(cardContent, golden) < MAX_SOCIAL_CARD_LAPLACIAN_MAE,
    `edge-to-edge social-card Laplacian edge MAE must stay under ${MAX_SOCIAL_CARD_LAPLACIAN_MAE}`,
  );

  for (const [name, roi, maxRgbMae, maxLaplacianMae] of [
    [
      "logo",
      SOCIAL_CARD_LOGO_ROI,
      MAX_SOCIAL_CARD_LOGO_RGB_MAE,
      MAX_SOCIAL_CARD_LOGO_LAPLACIAN_MAE,
    ],
    [
      "Brandenburg Gate",
      SOCIAL_CARD_GATE_ROI,
      MAX_SOCIAL_CARD_GATE_RGB_MAE,
      MAX_SOCIAL_CARD_GATE_LAPLACIAN_MAE,
    ],
  ]) {
    const cardRegion = extractRegion(cardContent, roi);
    const goldenRegion = extractRegion(golden, roi);
    assert.ok(
      meanAbsoluteChannelError(cardRegion.data, goldenRegion.data) < maxRgbMae,
      `${name} ROI RGB MAE must stay under ${maxRgbMae}`,
    );
    assert.ok(
      laplacianEdgeError(cardRegion, goldenRegion) < maxLaplacianMae,
      `${name} ROI Laplacian edge MAE must stay under ${maxLaplacianMae}`,
    );
  }

  assert.match(home, new RegExp(`<title>${expectedHtmlTitle}</title>`));
  assert.ok(home.includes(`content="${expectedDescription}"`));
  assert.ok(home.includes(`content="${expectedHtmlTwitterDescription}"`));
  assert.match(
    home,
    /<meta property="og:image" content="https:\/\/de\.superteam\.fun\/images\/home-social-card-v1\.jpg\?v=3" \/>/,
  );
  assert.match(
    home,
    /<meta property="og:image:secure_url" content="https:\/\/de\.superteam\.fun\/images\/home-social-card-v1\.jpg\?v=3" \/>/,
  );
  assert.match(home, /<meta property="og:image:type" content="image\/jpeg" \/>/);
  assert.match(home, /<meta property="og:image:width" content="1200" \/>/);
  assert.match(home, /<meta property="og:image:height" content="630" \/>/);
  assert.match(home, /<meta name="twitter:card" content="summary_large_image" \/>/);
  assert.match(
    home,
    /<meta name="twitter:image" content="https:\/\/de\.superteam\.fun\/images\/home-social-card-v1\.jpg\?v=3" \/>/,
  );
  assert.doesNotMatch(home, /st-banner\.png/);

  assert.ok(layout.includes(`default: "${expectedLayoutTitle}"`));
  assert.ok(layout.includes(`"${expectedDescription}"`));
  assert.match(
    layout,
    /const HOME_SOCIAL_IMAGE =\s*"https:\/\/de\.superteam\.fun\/images\/home-social-card-v1\.jpg\?v=3";/,
  );
  assert.match(
    layout,
    /url:\s*HOME_SOCIAL_IMAGE,[\s\S]*?secureUrl:\s*HOME_SOCIAL_IMAGE,[\s\S]*?width:\s*1200,[\s\S]*?height:\s*630,[\s\S]*?type:\s*"image\/jpeg",/,
  );
  assert.match(layout, /twitter:\s*\{[\s\S]*?card:\s*"summary_large_image"/);
  assert.match(
    layout,
    /twitter:\s*\{[\s\S]*?images:\s*\[\s*\{\s*url:\s*HOME_SOCIAL_IMAGE,[\s\S]*?alt:\s*"Superteam Germany logo above a Brandenburg Gate silhouette",?\s*\},?\s*\]/,
  );
  assert.doesNotMatch(layout, /st-banner\.png/);

  for (const [summitPath, expectedHash] of [
    [
      "./src/app/solana-summit-germany/page.tsx",
      "e08e6db427bdda5e650c2d7079c2eff625deeae22498db1293fcdca340750224",
    ],
    [
      "./src/app/solana-summit-germany/agenda/page.tsx",
      "e2a5bef9e453102c88070a77fcf53c04427a7e5f40471482c6f28c87cd49cf62",
    ],
    [
      "./src/app/solana-summit-germany/side-events/page.tsx",
      "d30d554d8b130d896e16b50c98d2f356b1901986fee0e9957e05ffb1406ef06d",
    ],
  ]) {
    const summitPage = read(summitPath);
    assert.match(summitPage, /summit-social-card-v1\.jpg/);
    assert.doesNotMatch(summitPage, /home-social-card-v1\.jpg/);
    assert.equal(sha256(summitPath), expectedHash);
  }
});
