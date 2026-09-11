import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

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
  const reviewHome = read("./.superpowers/brainstorm/83126-1788606365/grain-shader-v12-upcoming-events.html");
  const reviewHackathon = read("./.superpowers/brainstorm/83126-1788606365/global-hackathon.html");

  assert.equal(home, reviewHome);
  assert.equal(hackathon, reviewHackathon);
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
