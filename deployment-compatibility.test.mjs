import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const read = path => readFileSync(new URL(path, import.meta.url), "utf8");

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
  const expectedHtmlTitle =
    "Superteam Germany | Solana Builders, Founders &amp; Startups";
  const expectedLayoutTitle =
    "Superteam Germany | Solana Builders, Founders & Startups";
  const expectedDescription =
    "Superteam Germany helps Solana builders and founders launch, grow, raise capital, hire talent and connect through events across Germany.";
  const expectedHtmlTwitterDescription =
    "Launch, grow and connect with Germany’s Solana builder and founder community.";

  assert.ok(existsSync(cardPath), "the versioned homepage social card must exist");
  const cardMetadata = await sharp(cardPath).metadata();
  assert.equal(cardMetadata.width, 1200);
  assert.equal(cardMetadata.height, 630);
  assert.ok(statSync(cardPath).size < 1_000_000, "social card must stay under 1 MB");

  assert.match(home, new RegExp(`<title>${expectedHtmlTitle}</title>`));
  assert.ok(home.includes(`content="${expectedDescription}"`));
  assert.ok(home.includes(`content="${expectedHtmlTwitterDescription}"`));
  assert.match(
    home,
    /<meta property="og:image" content="https:\/\/de\.superteam\.fun\/images\/home-social-card-v1\.jpg" \/>/,
  );
  assert.match(home, /<meta property="og:image:width" content="1200" \/>/);
  assert.match(home, /<meta property="og:image:height" content="630" \/>/);
  assert.match(home, /<meta name="twitter:card" content="summary_large_image" \/>/);
  assert.match(
    home,
    /<meta name="twitter:image" content="https:\/\/de\.superteam\.fun\/images\/home-social-card-v1\.jpg" \/>/,
  );
  assert.doesNotMatch(home, /st-banner\.png/);

  assert.ok(layout.includes(`default: "${expectedLayoutTitle}"`));
  assert.ok(layout.includes(`"${expectedDescription}"`));
  assert.match(
    layout,
    /const HOME_SOCIAL_IMAGE = "\/images\/home-social-card-v1\.jpg";/,
  );
  assert.match(
    layout,
    /url:\s*HOME_SOCIAL_IMAGE,[\s\S]*?width:\s*1200,[\s\S]*?height:\s*630,/,
  );
  assert.match(layout, /twitter:\s*\{[\s\S]*?card:\s*"summary_large_image"/);
  assert.match(layout, /images:\s*\[HOME_SOCIAL_IMAGE\]/);
  assert.doesNotMatch(layout, /st-banner\.png/);

  for (const summitPath of [
    "./src/app/solana-summit-germany/page.tsx",
    "./src/app/solana-summit-germany/agenda/page.tsx",
    "./src/app/solana-summit-germany/side-events/page.tsx",
  ]) {
    const summitPage = read(summitPath);
    assert.match(summitPage, /summit-social-card-v1\.jpg/);
    assert.doesNotMatch(summitPage, /home-social-card-v1\.jpg/);
  }
});
