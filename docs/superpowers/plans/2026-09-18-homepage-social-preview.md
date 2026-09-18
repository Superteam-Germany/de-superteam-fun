# Homepage Social Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the approved Option C Brandenburg Gate social card for both homepage domains and the Superteam Germany Luma calendar.

**Architecture:** Build one versioned 1200 × 630 image from a generated homepage-style backdrop plus deterministic Superteam Germany logo and Gate assets. Point both homepage metadata implementations at that asset, then upload the identical file to Luma as a separate external update. Keep the existing Summit-specific metadata unchanged.

**Tech Stack:** OpenAI image generation for background-only artwork, Sharp 0.35.4 for deterministic normalization and composition, Node.js 22 tests, Next.js metadata, static HTML metadata, and the Luma web UI.

---

## File structure

- Create `design-assets/social/home-social-card-background-v1.png` — retained background-only source produced with image generation.
- Create `design-assets/social/brandenburg-gate-mask-v1.png` — normalized transparent Gate silhouette used by the renderer.
- Create `scripts/normalize-brandenburg-gate-mask.mjs` — deterministic black-on-white to transparent-mask conversion.
- Create `scripts/render-home-social-card.mjs` — deterministic compositor for the background, Gate, and exact navbar logo.
- Create `public/images/home-social-card-v1.jpg` — production social asset used by the website and uploaded to Luma.
- Modify `deployment-compatibility.test.mjs` — portable metadata, image, payload-size, and Summit-isolation contract.
- Modify `package.json` and `yarn.lock` — direct, exact Sharp development dependency.
- Modify `public/site/home.html` — production root-page Open Graph and X metadata.
- Modify `src/app/layout.tsx` — shared Next.js Open Graph and X metadata.

### Task 1: Make the compatibility suite portable and add the failing social-card contract

**Files:**
- Modify: `deployment-compatibility.test.mjs`
- Modify: `package.json`
- Modify: `yarn.lock`

- [ ] **Step 1: Remove all ignored-prototype coupling**

In the existing production-route test, remove both ignored prototype reads and both full-file equality assertions:

- `.superpowers/brainstorm/83126-1788606365/grain-shader-v12-upcoming-events.html`
- `.superpowers/brainstorm/83126-1788606365/global-hackathon.html`

Keep the assertions that validate the committed `public/site/home.html` and `public/site/global-hackathon.html` files themselves. This makes the suite reproducible in a clean checkout and removes the already-existing unrelated failures without weakening production-file coverage.

- [ ] **Step 2: Add an exact direct Sharp dependency under Node 22**

Run:

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
yarn add --dev --exact sharp@0.35.4
```

Expected: `sharp` is listed directly in `devDependencies`, and `yarn.lock` records the exact requested package version.

- [ ] **Step 3: Add the failing production contract**

Import `statSync` from `node:fs`, `fileURLToPath` from `node:url`, and `sharp` from `sharp`. Add an asynchronous test named `homepage metadata uses the approved versioned social card` that verifies all of the following:

```js
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
```

- `public/images/home-social-card-v1.jpg` exists.
- `await sharp(cardPath).metadata()` reports exactly 1200 × 630.
- `statSync(cardPath).size` is less than 1,000,000 bytes.
- `public/site/home.html` still contains the exact HTML-encoded current title, main description, and shorter X description.
- Its Open Graph and X image URLs are `https://de.superteam.fun/images/home-social-card-v1.jpg`.
- Its Open Graph width and height are `1200` and `630`, and its X card remains `summary_large_image`.
- `src/app/layout.tsx` still contains the exact unescaped current title and `siteDescription` value.
- It defines `HOME_SOCIAL_IMAGE = "/images/home-social-card-v1.jpg"`, uses 1200 × 630 in Open Graph, keeps `twitter.card` as `summary_large_image`, and uses `HOME_SOCIAL_IMAGE` for X.
- Neither homepage metadata implementation references `st-banner.png`.
- `src/app/solana-summit-germany/page.tsx`, `agenda/page.tsx`, and `side-events/page.tsx` still reference `summit-social-card-v1.jpg` and do not reference `home-social-card-v1.jpg`.

- [ ] **Step 4: Prove the intended failure is isolated**

Run:

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
node --test deployment-compatibility.test.mjs
```

Expected: both former ignored-prototype failure paths are gone; the new social-card test fails only because the new asset and metadata do not exist yet.

- [ ] **Step 5: Commit the portable test contract**

```bash
git add deployment-compatibility.test.mjs package.json yarn.lock
git commit -m "Test homepage social preview metadata"
```

### Task 2: Create the approved Option C production asset

**Files:**
- Create: `design-assets/social/home-social-card-background-v1.png`
- Create: `design-assets/social/brandenburg-gate-mask-v1.png`
- Create: `scripts/normalize-brandenburg-gate-mask.mjs`
- Create: `scripts/render-home-social-card.mjs`
- Create: `public/images/home-social-card-v1.jpg`

- [ ] **Step 1: Create all durable asset directories**

Run:

```bash
mkdir -p design-assets/social scripts public/images
```

- [ ] **Step 2: Generate the background-only artwork**

Use the `imagegen` skill and image-generation tool with this prompt:

```text
Create a background-only social card at a 1200:630 aspect ratio for Superteam Germany. Match the redesigned website hero: near-black center; warm gold glow emerging from the upper-right corner with red beneath it; a mirrored warm gold and red glow from the lower-left corner. Keep the central 60 percent very dark and uncluttered for a white logo. Add only extremely subtle fine grain. No text, no logo, no icons, no buildings, no silhouettes, and no borders.
```

Save the chosen output as `design-assets/social/home-social-card-background-v1.png`. Inspect it at full size and reject any output containing text, symbols, landmark shapes, or an insufficiently dark center.

- [ ] **Step 3: Normalize the approved Gate source into a transparent mask**

Create `scripts/normalize-brandenburg-gate-mask.mjs`. It must:

- accept input and output paths from `process.argv` and fail clearly when either is missing;
- use Sharp to remove alpha, convert to grayscale, and negate without thresholding;
- preserve the inverted grayscale values directly as alpha coverage so the source's antialiased edge pixels remain smooth at social-card size;
- write an RGBA PNG whose RGB channels are `239, 232, 222` and whose alpha channel comes from that continuous grayscale mask;
- create the output directory recursively.

Then run:

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
node scripts/normalize-brandenburg-gate-mask.mjs \
  .superpowers/brainstorm/6436-1789727766/brandenburg-gate.png \
  design-assets/social/brandenburg-gate-mask-v1.png
```

Inspect the normalized file with the image viewer. Expected: a transparent canvas containing only the exact approved Quadriga and six-column Gate silhouette, with no white rectangular background.

- [ ] **Step 4: Add the deterministic renderer**

Create `scripts/render-home-social-card.mjs`. It must:

- load `design-assets/social/home-social-card-background-v1.png` and resize/crop it to exactly 1200 × 630;
- load the normalized transparent Gate PNG;
- load the exact navbar asset `public/images/stLogoWithIcon.svg`;
- composite the Gate at `x=306`, `y=350`, `width=588`, `height=498`, opacity `0.19`;
- add a subtle monochrome grain overlay at approximately `0.025` opacity;
- composite the logo at `x=340`, `y=244`, `width=520`, `height=107`, with a restrained black drop shadow;
- render `public/images/home-social-card-v1.jpg` as JPEG quality 90, chroma subsampling `4:4:4`, with `mozjpeg: true`;
- assert that the output is exactly 1200 × 630 and fail otherwise.

The logo geometry is intentional: its visual center is at `297.5px`, approximately `17.5px` above the card center at `315px`, matching the approved Option C composition.

- [ ] **Step 5: Render and inspect at full and unfurl size**

Run:

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
node scripts/render-home-social-card.mjs
sips -g pixelWidth -g pixelHeight public/images/home-social-card-v1.jpg
wc -c public/images/home-social-card-v1.jpg
```

Expected: 1200 × 630 and less than 1 MB. Inspect both the full-size card and an approximately 600 × 315 preview. Confirm that:

- the exact navbar logo is horizontally centered and easily readable;
- the Gate is subtle but recognizable;
- the Quadriga remains below the wordmark;
- the Gate is not visibly cut out toward the center;
- the red/gold corners match the approved Option C direction.

If inspection exposes a mismatch, adjust only Gate coordinates/opacity, logo coordinates, or grain opacity, rerender, and inspect again.

- [ ] **Step 6: Commit the reproducible design sources and output**

```bash
git add design-assets/social scripts/normalize-brandenburg-gate-mask.mjs \
  scripts/render-home-social-card.mjs public/images/home-social-card-v1.jpg
git commit -m "Create homepage social preview card"
```

### Task 3: Point both homepage metadata implementations at the new card

**Files:**
- Modify: `public/site/home.html:20-29`
- Modify: `src/app/layout.tsx:8-10,87-108`

- [ ] **Step 1: Update the static production homepage metadata**

In `public/site/home.html`, replace only the old image metadata with:

```html
<meta property="og:image" content="https://de.superteam.fun/images/home-social-card-v1.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Superteam Germany logo above a Brandenburg Gate silhouette" />
...
<meta name="twitter:image" content="https://de.superteam.fun/images/home-social-card-v1.jpg" />
<meta name="twitter:image:alt" content="Superteam Germany logo above a Brandenburg Gate silhouette" />
```

Do not change the current title or description.

- [ ] **Step 2: Update shared Next.js metadata**

Add below `SITE_URL` in `src/app/layout.tsx`:

```ts
const HOME_SOCIAL_IMAGE = "/images/home-social-card-v1.jpg";
```

Use it in the Open Graph image object with width `1200`, height `630`, and alt text `Superteam Germany logo above a Brandenburg Gate silhouette`. Use `[HOME_SOCIAL_IMAGE]` for the X image and retain `card: "summary_large_image"`. Do not change the current title or description.

- [ ] **Step 3: Run the focused contract**

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
node --test deployment-compatibility.test.mjs
```

Expected: all tests pass, including dimensions, file size, title/description preservation, X card type, and Summit isolation.

- [ ] **Step 4: Commit the metadata switch**

```bash
git add public/site/home.html src/app/layout.tsx
git commit -m "Use new homepage social preview"
```

### Task 4: Verify the repository build and final diff

**Files:**
- Verify only; no expected changes.

- [ ] **Step 1: Check formatting and intended scope**

Run:

```bash
git diff --check 258a8aa..HEAD
git status --short
```

Expected: no whitespace errors and no unexpected files.

- [ ] **Step 2: Build under the repository's required environment**

Run:

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
export SANITY_PROJECT_ID=loktgfyy
export SANITY_DATASET=production
yarn build
```

Expected: the production build succeeds.

- [ ] **Step 3: Perform the final visual check**

Open `public/images/home-social-card-v1.jpg` at full size and at an approximate social-unfurl size. Confirm no crop risk, blurred logo, white box around the Gate, accidental generated text, or visual regression from approved Option C.

### Task 5: Replace the Luma calendar cover with the identical card

**External surface:**
- Update: `https://luma.com/SuperteamGermany` calendar cover/appearance only.

- [ ] **Step 1: Open the authenticated calendar appearance editor**

In the Luma web UI, open the Superteam Germany calendar appearance/cover settings. Do not change the calendar title, description, URL, permissions, or events.

- [ ] **Step 2: Upload the production file and preserve its crop**

Upload `public/images/home-social-card-v1.jpg`. Use the full 1200 × 630 frame without zooming or cropping away the logo, Gate, or corner glows. Save the appearance change.

- [ ] **Step 3: Verify the saved Luma result**

Reload the public calendar page and visually inspect the actual saved cover/crop. Confirm it matches Option C rather than merely confirming that the upload completed.

Fetch the public page metadata and verify that its preview image is a new Luma CDN URL with 1200 × 630 dimensions. Open that URL and confirm it visually shows the same Option C asset.

### Task 6: Final deployment and unfurl verification

**External surfaces:**
- Verify: `https://de.superteam.fun/`
- Verify: `https://www.superteamde.fun/`
- Verify privately: X composer draft and a Slack DM to self/private test channel.

- [ ] **Step 1: Record the final repository state**

Run:

```bash
git status --short
git log --oneline -6
git diff 258a8aa..HEAD --stat
```

Expected: the worktree is clean and the diff contains only the planned tests, dependency declaration, reproducible design sources, production card, and homepage metadata.

- [ ] **Step 2: Verify both live homepage hosts after deployment**

Fetch the rendered metadata from both homepage URLs and confirm each exposes the versioned absolute card URL and 1200 × 630 dimensions. Open the live image URL and confirm it is the approved Option C card.

- [ ] **Step 3: Check real unfurls without publishing messages**

Paste each homepage URL into an X composer draft and into a Slack DM to yourself or a private test channel. Verify the new image, title, and description appear. Remove the draft/test message if desired; do not post publicly or send to other people as part of verification.
