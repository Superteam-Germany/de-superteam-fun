import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const fixturePath = path.join(
  root,
  "design-assets/social/home-social-card-option-c-source.html",
);
const goldenPath = path.join(
  root,
  "design-assets/social/home-social-card-option-c-golden.png",
);
const captureWidth = 518;
const captureHeight = 259;
const deviceScaleFactor = 2;
const rawWidth = captureWidth * deviceScaleFactor;
const rawHeight = captureHeight * deviceScaleFactor;
const outputWidth = 1200;
const outputHeight = 600;

const args = process.argv.slice(2);
if (args.some(arg => arg !== "--update-golden")) {
  throw new Error(
    "Usage: node scripts/capture-home-social-card-option-c.mjs [--update-golden]",
  );
}

if (!args.includes("--update-golden") && existsSync(goldenPath)) {
  throw new Error(
    `Refusing to overwrite frozen golden without --update-golden: ${goldenPath}`,
  );
}

if (!existsSync(chromePath)) {
  throw new Error(`Google Chrome is unavailable at ${chromePath}`);
}

if (!existsSync(fixturePath)) {
  throw new Error(`Capture fixture is unavailable at ${fixturePath}`);
}

const temporaryDirectory = await mkdtemp(
  path.join(tmpdir(), "home-social-card-option-c-"),
);
const rawScreenshotPath = path.join(temporaryDirectory, "raw.png");
const userDataPath = path.join(temporaryDirectory, "chrome-profile");

try {
  let chromeStderr = "";
  let chromeClosed = false;
  const chrome = execFile(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      `--user-data-dir=${userDataPath}`,
      `--force-device-scale-factor=${deviceScaleFactor}`,
      `--window-size=${captureWidth},${captureHeight}`,
      `--screenshot=${rawScreenshotPath}`,
      pathToFileURL(fixturePath).href,
    ],
    { maxBuffer: 10 * 1024 * 1024 },
  );
  chrome.stderr?.on("data", chunk => {
    chromeStderr += chunk;
  });
  const chromeExit = new Promise((resolve, reject) => {
    chrome.once("error", reject);
    chrome.once("close", (code, signal) => {
      chromeClosed = true;
      resolve({ code, signal });
    });
  });

  let rawMetadata;
  for (let attempt = 0; attempt < 200; attempt += 1) {
    if (existsSync(rawScreenshotPath)) {
      try {
        rawMetadata = await sharp(rawScreenshotPath).metadata();
        if (rawMetadata.width === rawWidth && rawMetadata.height === rawHeight) {
          break;
        }
      } catch {
        // Chrome may still be flushing the PNG; retry until the capture deadline.
      }
    }
    if (chromeClosed) break;
    await delay(100);
  }

  if (!chromeClosed) chrome.kill("SIGTERM");
  await chromeExit;

  if (!existsSync(rawScreenshotPath)) {
    throw new Error(
      `Chrome exited without creating the raw screenshot${chromeStderr ? `: ${chromeStderr.trim()}` : ""}`,
    );
  }

  rawMetadata ??= await sharp(rawScreenshotPath).metadata();
  if (rawMetadata.width !== rawWidth || rawMetadata.height !== rawHeight) {
    throw new Error(
      `Unexpected raw capture size: ${rawMetadata.width}x${rawMetadata.height}; expected ${rawWidth}x${rawHeight}`,
    );
  }

  await mkdir(path.dirname(goldenPath), { recursive: true });
  await sharp(rawScreenshotPath)
    .resize(outputWidth, outputHeight, {
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(goldenPath);

  const goldenMetadata = await sharp(goldenPath).metadata();
  if (
    goldenMetadata.width !== outputWidth ||
    goldenMetadata.height !== outputHeight
  ) {
    throw new Error(
      `Unexpected golden size: ${goldenMetadata.width}x${goldenMetadata.height}; expected ${outputWidth}x${outputHeight}`,
    );
  }

  console.log(
    `${goldenPath}: ${goldenMetadata.width}x${goldenMetadata.height} from ${rawWidth}x${rawHeight} Chrome capture`,
  );
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
