# BuildStation Checklist Categories Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the BuildStation submission checklist to 12 items, add the Germany-primary-base check, and organize every row with compact inline category labels in the approved canonical order.

**Architecture:** Preserve the existing static-page implementation in `public/site/buildstation.html`. Reorder the existing semantic checklist items without changing their IDs, add `germany-country`, and let the existing DOM-driven progress and persistence logic automatically derive the new 12-item total. Extend the focused Node contract test before changing production markup, then verify state migration and responsive behavior in the browser.

**Tech Stack:** Static HTML/CSS, vanilla JavaScript, Node.js built-in test runner, Next.js production build, local in-app browser verification.

---

## File Structure

- Modify `public/site/buildstation.html`: checklist copy, category labels, canonical row order, new Germany-country row, 12-item progress semantics, and compact label styling.
- Modify `tests/buildstation-checklist.test.mjs`: contract coverage for the canonical semantic-ID order, labels, new content, progress maxima, persistence, accessibility, and completion threshold.
- Reference `docs/superpowers/specs/2026-10-09-buildstation-submission-checklist-design.md`: approved source of truth.

### Task 1: Lock the 12-item contract with failing tests

**Files:**
- Modify: `tests/buildstation-checklist.test.mjs`
- Test: `tests/buildstation-checklist.test.mjs`

- [ ] **Step 1: Replace the 11-item assertion with the canonical 12-item order**

Assert the exact array:

```js
[
  "one-liner",
  "market",
  "presentation-video",
  "mvp",
  "demo-video",
  "repository",
  "team",
  "germany-country",
  "eligibility",
  "links",
  "colosseum-submission",
  "germany-track",
]
```

- [ ] **Step 2: Add an exact content contract for every row**

Create an expected array of 12 objects containing each row's semantic ID, category, exact question, exact guidance paragraphs, and resource URLs in canonical order. For each object, extract its `<li>` block and assert every approved string is present. This must catch existing copy drift such as “if eligible,” “Don’t,” “all the materials,” and “Your project.”

- [ ] **Step 3: Add category, target-size, and completed-state assertions**

Require all five category labels, `aria-hidden="true"` on every label, a distinct `.checklist-question-text` span, a minimum 44px checkbox label/grid track, and completed-state styling scoped to `.checklist-question-text` rather than `.checklist-category`.

Use `rgba(246,239,227,.68)` or a more legible existing token for completed question text on `#050505`; this yields well above 4.5:1 contrast while remaining visibly subdued. The category label remains gold and is never struck through.

- [ ] **Step 4: Add 12-item progress and completion assertions**

Require `aria-valuemax="12"`, the initial `0 / 12` copy, “0 of 12 submission checks completed,” and the existing dynamic completion expression based on `checklistItems.length`.

- [ ] **Step 5: Add persistence migration assertions**

Require the unchanged storage key, the new `germany-country` semantic ID, filtering through `validChecklistIds`, and exception handling around restore/write paths.

- [ ] **Step 6: Run the focused test and verify RED**

Run:

```bash
node --test tests/buildstation-checklist.test.mjs
```

Expected: FAIL because the page still contains 11 rows, lacks `germany-country`, and has no category-label markup.

- [ ] **Step 7: Commit the failing contract**

```bash
git add tests/buildstation-checklist.test.mjs
git commit -m "Test categorized BuildStation checklist"
```

### Task 2: Implement the categorized 12-item checklist

**Files:**
- Modify: `public/site/buildstation.html`
- Test: `tests/buildstation-checklist.test.mjs`

- [ ] **Step 1: Add compact category-label styling**

Add `.checklist-category` and `.checklist-question-text` spans inside `.checklist-question`. Use the existing gold token, uppercase mono styling, a small fixed inline width on desktop for alignment, natural wrapping on narrow screens, and no new card/divider treatment. Apply the completed muted color and strike-through only to `.checklist-question-text`; use at least `rgba(246,239,227,.68)` against `#050505`, leaving the category label gold.

Increase the checkbox label and its grid track to at least 44 by 44 CSS pixels at every breakpoint without increasing the compact row height unnecessarily.

- [ ] **Step 2: Reorder existing rows without changing semantic IDs**

Move the existing blocks into this order: `one-liner`, `market`, `presentation-video`, `mvp`, `demo-video`, `repository`, `team`, `germany-country`, `eligibility`, `links`, `colosseum-submission`, `germany-track`.

Renumber trigger/panel IDs from 1 through 12 so every `aria-controls` and `aria-labelledby` pair remains valid. Do not derive stored state from these numeric DOM IDs.

- [ ] **Step 3: Add category labels to all rows**

Use this pattern:

```html
<span class="checklist-question">
  <span class="checklist-category" aria-hidden="true">Pitch</span>
  <span class="checklist-question-text">Are your one-liner and project blurb clear and reviewed by someone outside the team?</span>
</span>
```

Apply `Pitch`, `Product & Demo`, `Code`, `Team & Profile`, or `Final Checks` according to the approved spec.

- [ ] **Step 4: Add the Germany-country row**

Use semantic ID and value `germany-country`, an accessible checkbox label, the approved question, and two approved guidance paragraphs:

```html
<li class="checklist-item" data-checklist-id="germany-country">
  <!-- checkbox + Team & Profile trigger -->
  <!-- Germany referral does not set the country automatically -->
  <!-- select Germany only when it accurately represents the team's primary base -->
</li>
```

- [ ] **Step 5: Update static count and progress semantics**

Change “Eleven” to “Twelve,” `0 / 11` to `0 / 12`, `aria-valuemax="11"` to `aria-valuemax="12"`, and the initial live description to “0 of 12 submission checks completed.” Keep runtime score, progress width, live description, and 11/12-to-12/12 celebration derived from `checklistItems.length`.

- [ ] **Step 6: Preserve migration and accessibility behavior**

Keep the `superteam-de-buildstation-checklist-v1` key and existing semantic IDs. Confirm the current restore path filters stored values through `validChecklistIds`, so old valid checks remain selected and the new row starts unchecked. Keep category labels out of accessible names with `aria-hidden="true"`, retain native checkboxes/buttons, visible focus, `hidden` details, and one-open-row behavior.

Update every existing question and guidance paragraph to match the canonical spec exactly, including replacing “if eligible,” contractions, and other known wording drift.

- [ ] **Step 7: Run the focused test and verify GREEN**

Run:

```bash
node --test tests/buildstation-checklist.test.mjs
```

Expected: all focused tests pass after updating the existing checklist-content test rather than duplicating it.

- [ ] **Step 8: Commit the implementation**

```bash
git add public/site/buildstation.html tests/buildstation-checklist.test.mjs
git commit -m "Categorize BuildStation submission checklist"
```

### Task 3: Verify persistence, accessibility, layout, and production compatibility

**Files:**
- Verify: `public/site/buildstation.html`
- Verify: `tests/buildstation-checklist.test.mjs`
- Verify: `deployment-compatibility.test.mjs`

- [ ] **Step 1: Start or reuse the exact localhost environment**

Use Node 22 and bind the existing Next.js development server explicitly:

```bash
PATH="/Users/merdanaslan/.nvm/versions/node/v22.22.1/bin:$PATH" npm run dev -- --hostname 127.0.0.1
curl --retry 20 --retry-delay 1 --retry-connrefused -I http://127.0.0.1:3000/buildstation
```

If port 3000 already serves this repository, reuse it. Use the in-app browser (`iab`) and a cache-busting query for all checks. Inject and clear saved arrays with `tab.playwright.evaluate(() => localStorage.setItem(...) / localStorage.removeItem(...))`, then navigate to a new query value so the static page reloads.

- [ ] **Step 2: Run automated verification**

```bash
node --test tests/buildstation-checklist.test.mjs
node --test deployment-compatibility.test.mjs
git diff --check
PATH="/Users/merdanaslan/.nvm/versions/node/v22.22.1/bin:$PATH" yarn build
```

Expected: all Node tests pass, `git diff --check` is silent, and the production build exits 0. Existing unrelated Next.js `<img>` warnings may remain.

- [ ] **Step 3: Verify desktop and accessibility behavior at 1280 CSS pixels**

Open `http://localhost:3000/buildstation?checklist=categories#submission-checklist`. Confirm canonical order, five labels, and 12-item progress semantics. Use browser keyboard actions and DOM assertions to verify checkbox Space activation; accordion Enter and Space activation; visible focus style; question-only accessible names; valid `aria-controls`/`aria-labelledby` pairs; synchronized `aria-expanded`; closed panels have `hidden` and their links are absent from tab order; activating an open row closes it; opening a second row closes the first; the progressbar values update; and the polite live text exactly reports “N of 12 submission checks completed.”

- [ ] **Step 4: Verify migration and storage failure handling**

Run separate cache-busted reloads for: valid existing semantic IDs; invalid JSON; non-array JSON; an array with mixed non-string values; duplicates; unknown IDs; and an old 11-item completed array without `germany-country`. Confirm valid existing checks remain selected, invalid values cannot inflate progress, the page remains usable, and `germany-country` starts unchecked.

For unavailable storage, use a browser initialization hook before navigation (or an equivalent isolated browser context) that makes `Storage.prototype.getItem` throw, then repeat with `setItem` throwing. Confirm the page initializes, checkboxes remain usable for the current session, and no uncaught error is logged.

- [ ] **Step 5: Verify responsive behavior and contrast**

Check 375, 768, and 1280 CSS-pixel widths plus 200% zoom. Confirm category labels and questions wrap cleanly, the page has no horizontal scrolling, and computed checkbox-label and accordion-button rectangles are at least 44 by 44 CSS pixels. Calculate the completed-text contrast against `#050505` from its computed color and confirm at least 4.5:1; confirm the category remains gold and has no line-through.

- [ ] **Step 6: Verify completion, reduced motion, and runtime health**

Set 11/12, check the last item, and confirm the five-second side confetti plus 2.8-second Lamborghini behavior runs once. Reload at 12/12 and confirm it does not replay. Uncheck and recheck one item and confirm it can replay.

Repeat completion in a browser context emulating `prefers-reduced-motion: reduce`; confirm the score reaches 12/12 while the celebration does not become active and the confetti canvas does not report running. Inspect browser console/error logs after normal, malformed-storage, interaction, and reduced-motion checks; require no new uncaught runtime errors.

- [ ] **Step 7: Leave a testable local state**

Reset the first item so the page remains at 11/12 for the user to trigger manually. Mark the localhost preview as the deliverable.

- [ ] **Step 8: Commit any verification-only test refinements**

If browser verification exposes a contract gap, add the failing test first, fix it, rerun all verification, and commit only the scoped refinement.
