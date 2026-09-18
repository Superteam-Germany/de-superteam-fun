# Exact Option C Social Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the approximate social card with a deterministic export of the exact approved browser Option C, then verify and redeploy it.

**Architecture:** Preserve a browser-rendered, lossless 1200 × 600 golden made from the approved 518 × 259 Option C prototype at 2× device scale, then resize it once to the target artwork size. The production renderer treats that golden as immutable input, centers it on a 1200 × 630 social canvas, and encodes the JPEG. A reproducible capture fixture retains the exact CSS and full Gate filter, while visual regression compares the independently frozen golden to the production export with both RGB and edge-sensitive metrics.

**Tech Stack:** Node.js 22, Sharp 0.35.4, SVG filters/gradients, Node test runner, Next.js metadata, Vercel.

---

## File structure

- Create `design-assets/social/brandenburg-gate-source-v1.png` — byte-identical 485 × 412 user-approved Gate source.
- Create `design-assets/social/home-social-card-option-c-source.html` — exact fixed-size browser capture fixture.
- Create `design-assets/social/home-social-card-option-c-golden.png` — frozen approved 1200 × 600 browser-rendered golden; normal rendering never overwrites it.
- Modify `design-assets/social/brandenburg-gate-mask-v1.png` — continuous-alpha Gate mask.
- Delete `design-assets/social/home-social-card-background-v1.png` — rejected generated approximation.
- Modify `scripts/normalize-brandenburg-gate-mask.mjs` — derive the exact antialiased mask.
- Create `scripts/capture-home-social-card-option-c.mjs` — explicit manual golden-capture command using local Chrome.
- Modify `scripts/render-home-social-card.mjs` — render the 1200 × 630 JPEG from the immutable golden.
- Modify `deployment-compatibility.test.mjs` — enforce visual regression, bands, metadata, and Summit isolation.
- Modify `public/images/home-social-card-v1.jpg` — corrected production card.
- Verify `public/site/home.html` and `src/app/layout.tsx` — identical homepage preview metadata.

### Task 1: Lock the exact visual contract

**Files:**
- Modify: `deployment-compatibility.test.mjs`

- [ ] **Step 1: Add regression helpers**

Add helpers that decode two Sharp images to 3-channel raw RGB buffers and calculate mean absolute channel error. Add an edge-map comparison using a fixed Laplacian kernel, plus a helper that compares a solid band against RGB `5,5,5`.

- [ ] **Step 2: Extend the existing social-card test**

Require:

- `design-assets/social/home-social-card-option-c-golden.png` exists at 1200 × 600;
- the central 1200 × 600 crop of `public/images/home-social-card-v1.jpg` differs from the golden by mean absolute RGB error below `8`;
- its Laplacian edge-map error stays below a calibrated threshold that passes the approved JPEG but fails test fixtures with the logo or Gate shifted by four pixels;
- the 15-pixel top and bottom bands differ from `#050505` by mean absolute RGB error below `8`;
- the existing 1200 × 630, sub-1 MB, metadata, `st-banner.png` removal, and Summit-isolation assertions remain.

- [ ] **Step 3: Run the test and prove the old export fails**

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
node --test deployment-compatibility.test.mjs
```

Expected: the new golden assertion fails because the exact Option C golden does not exist yet.

### Task 2: Render the literal browser Option C

**Files:**
- Create: `design-assets/social/brandenburg-gate-source-v1.png`
- Create: `design-assets/social/home-social-card-option-c-source.html`
- Create: `design-assets/social/home-social-card-option-c-golden.png`
- Modify: `design-assets/social/brandenburg-gate-mask-v1.png`
- Delete: `design-assets/social/home-social-card-background-v1.png`
- Modify: `scripts/normalize-brandenburg-gate-mask.mjs`
- Create: `scripts/capture-home-social-card-option-c.mjs`
- Modify: `scripts/render-home-social-card.mjs`
- Modify: `public/images/home-social-card-v1.jpg`

- [ ] **Step 1: Persist the exact Gate source**

Copy `.superpowers/brainstorm/6436-1789727766/brandenburg-gate.png` byte-for-byte to `design-assets/social/brandenburg-gate-source-v1.png`, verify both SHA-256 hashes match, and remove `design-assets/social/home-social-card-background-v1.png`.

- [ ] **Step 2: Preserve continuous Gate edges**

Keep the normalizer's inverted continuous grayscale alpha with no threshold and assert source and mask are 485 × 412. The normalized mask remains a durable asset, while the browser capture fixture applies the complete approved CSS filter chain `invert(1) sepia(1) saturate(.35) brightness(.92)` and `screen` blend to the byte-identical source.

- [ ] **Step 3: Freeze the exact 1200 × 600 browser golden**

Create a fixed 518 × 259 capture fixture using the prototype's exact HTML/CSS values:

- base `#050505`;
- top-right radial ellipse 54% × 76%: gold `.88`, red `.68` at 38%, transparent at 74%;
- bottom-left radial ellipse 54% × 76%: gold `.82`, red `.66` at 38%, transparent at 74%;
- protection ellipse 67% × 70%: black `.98` at 0%, `.9` at 46%, `.18` at 83%, transparent at 100%;
- grain `baseFrequency=.92`, two octaves, stitched tiles, inner opacity `.24`, layer opacity `.24`, soft-light blend;
- Gate box `left:50%`, `bottom:-23%`, `width:77%`, `height:79%`, bottom-contained, opacity `.19`, screen blend;
- exact navbar SVG and the approved logo shadows.

Create an explicit capture script that launches `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` headlessly at 518 × 259 with 2× device scale, captures the fixture losslessly, then resizes the 1036 × 518 capture to 1200 × 600. Write `design-assets/social/home-social-card-option-c-golden.png` once, record its SHA-256 in the test, and require an explicit `--update-golden` flag to overwrite it. This makes the approved oracle reproducible without letting normal rendering update its own expected image.

- [ ] **Step 4: Build the 1200 × 630 production export**

Replace the approximate renderer with one that reads the frozen golden, verifies its recorded hash and 1200 × 600 dimensions, creates a `#050505` 1200 × 630 canvas, composites the golden at `x=0,y=15` without resizing, and encodes `public/images/home-social-card-v1.jpg` at quality 90, chroma subsampling `4:4:4`, and mozjpeg. Assert both output dimensions.

- [ ] **Step 5: Render, test, and visually compare**

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
node scripts/normalize-brandenburg-gate-mask.mjs \
  design-assets/social/brandenburg-gate-source-v1.png \
  design-assets/social/brandenburg-gate-mask-v1.png
node scripts/capture-home-social-card-option-c.mjs --update-golden
node scripts/render-home-social-card.mjs
node --test deployment-compatibility.test.mjs
sips -g pixelWidth -g pixelHeight public/images/home-social-card-v1.jpg
wc -c public/images/home-social-card-v1.jpg
```

Expected: all 13 tests pass; the final image is 1200 × 630 and below 1 MB. Inspect the frozen golden, final JPEG, and a 600 × 315 preview. Glow positions, logo proportions, Gate geometry, and contrast must match the captured approved prototype. Prove the edge assertion fails after shifting either the logo or Gate by four pixels in a temporary fixture, then restore the approved fixture.

- [ ] **Step 6: Commit the correction**

```bash
git add deployment-compatibility.test.mjs design-assets/social \
  scripts/capture-home-social-card-option-c.mjs \
  scripts/normalize-brandenburg-gate-mask.mjs \
  scripts/render-home-social-card.mjs public/images/home-social-card-v1.jpg
git commit -m "Match social card to approved Option C"
```

### Task 3: Verify the repository and metadata

**Files:**
- Verify: `public/site/home.html`
- Verify: `src/app/layout.tsx`
- Verify: Summit metadata pages.

- [ ] **Step 1: Run focused checks and formatting validation**

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
node --test deployment-compatibility.test.mjs
git diff --check 258a8aa..HEAD
git status --short
```

- [ ] **Step 2: Run the production build**

```bash
source "$HOME/.nvm/nvm.sh"
nvm use 22
export SANITY_PROJECT_ID=loktgfyy
export SANITY_DATASET=production
yarn build
```

Expected: build succeeds; existing non-blocking `<img>` warnings may remain.

- [ ] **Step 3: Confirm one asset is used everywhere intended**

Confirm both homepage metadata files point to the same `home-social-card-v1.jpg` and 1200 × 630 dimensions; neither references `st-banner.png`. Assert the SHA-256 hashes of the three Summit metadata files remain `e08e6db427bdda5e650c2d7079c2eff625deeae22498db1293fcdca340750224`, `e2a5bef9e453102c88070a77fcf53c04427a7e5f40471482c6f28c87cd49cf62`, and `d30d554d8b130d896e16b50c98d2f356b1901986fee0e9957e05ffb1406ef06d`, matching baseline commit `258a8aa` exactly.

### Task 4: Redeploy and verify live previews

**External surfaces:**
- Release path: feature branch → `development` → `main`
- Production: Vercel
- Verify: `https://de.superteam.fun/`, `https://www.superteamde.fun/`
- Separate admin update: `https://luma.com/SuperteamGermany`

- [ ] **Step 1: Prepare the Git handoff**

Record the clean status, commits, and diff. Push the feature branch only with the user's established GitHub workflow, merge through `development`, and release `development` to `main`.

- [ ] **Step 2: Verify Vercel**

Wait for the `main` deployment for the released commit to reach `Ready`. Verify both live homepage documents expose the corrected versioned image and 1200 × 630 dimensions, and verify the live image visually matches Option C.

- [ ] **Step 3: Verify unfurls privately**

Paste each homepage URL into an X draft and a Slack DM to self/private test channel. Do not publish or send to another person. Allow for cache latency.

- [ ] **Step 4: Update Luma separately**

A Superteam Germany Luma calendar administrator uploads the same `public/images/home-social-card-v1.jpg` as the calendar cover. Verify the saved public Luma cover and its Luma CDN social image use the same Option C composition. If the signed-in account is not a calendar administrator, stop and hand off the file without changing accounts or calendar data.
