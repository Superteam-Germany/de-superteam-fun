# BuildStation Submission Checklist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved persistent 11-item submission checklist and completion celebration to the production BuildStation page, while correcting the official countdown deadline.

**Architecture:** Keep the existing static-page architecture and implement the feature entirely in `public/site/buildstation.html`, using semantic HTML, scoped CSS, and small vanilla-JavaScript state helpers. Add a Node built-in contract test that reads the generated HTML and guards the approved content, persistence hooks, completion assets, placement, and deadline without introducing a test dependency.

**Tech Stack:** Static HTML/CSS, vanilla JavaScript, browser `localStorage`, `canvas-confetti@1.9.3` from esm.sh, Node.js built-in test runner, existing pixel Lamborghini PNG.

---

### Task 1: Add a failing checklist contract test

**Files:**
- Create: `tests/buildstation-checklist.test.mjs`
- Test: `public/site/buildstation.html`

- [ ] **Step 1: Write the failing contract test**

Use `node:test`, `node:assert/strict`, and `readFile` to load `public/site/buildstation.html`. Assert:

- the checklist section exists after `works-section` and before `resources`;
- exactly 11 elements use a unique `data-checklist-id` value;
- both the two-minute presentation question and separate three-minute demo question exist;
- the Germany-track question and approved Earn URL exist;
- the Lamborghini asset exists;
- the countdown uses `2026-10-12T23:59:00-07:00` and no longer uses the old local-midnight value.

- [ ] **Step 2: Run the test and verify that it fails**

Run: `node --test tests/buildstation-checklist.test.mjs`

Expected: FAIL because the checklist markup and corrected deadline are not implemented.

- [ ] **Step 3: Commit the failing test**

```bash
git add tests/buildstation-checklist.test.mjs
git commit -m "Test BuildStation submission checklist contract"
```

### Task 2: Add checklist markup, copy, and responsive styling

**Files:**
- Modify: `public/site/buildstation.html`
- Test: `tests/buildstation-checklist.test.mjs`

- [ ] **Step 1: Add checklist styles**

Add scoped `.checklist-*` rules near the existing content-section styles. Implement the dark full-width section, heading, bordered panel, progress header/bar, adjoining accordion rows, native checkbox treatment, checked strike-through state, expanded guidance, gold resource links, focus-visible styles, and responsive adjustments at the page's existing breakpoints.

- [ ] **Step 2: Add the approved section markup**

Insert `<section class="content-section checklist-section" id="submission-checklist">` immediately after the closing `works-section` and before the Resources section. Include:

- heading `Is your submission ready?`;
- approved introduction;
- `READY`, `0 / 11`, progress bar, and screen-reader progress text;
- 11 checklist articles using stable IDs `one-liner`, `mvp`, `market`, `team`, `repository`, `eligibility`, `presentation-video`, `demo-video`, `links`, `colosseum-submission`, and `germany-track`;
- one native checkbox and one separate accordion button per item;
- hidden details regions containing the approved guidance and source links;
- all accordion rows closed initially;
- a fixed, initially hidden celebration layer containing the existing Lamborghini asset.

- [ ] **Step 3: Correct the countdown deadline**

Replace:

```js
const deadline = new Date("2026-10-13T00:00:00+02:00");
```

with:

```js
const deadline = new Date("2026-10-12T23:59:00-07:00");
```

- [ ] **Step 4: Run the contract test**

Run: `node --test tests/buildstation-checklist.test.mjs`

Expected: PASS for structure, approved content, assets, placement, and deadline.

- [ ] **Step 5: Commit the static checklist**

```bash
git add public/site/buildstation.html
git commit -m "Add BuildStation submission checklist"
```

### Task 3: Implement accordion state, persistence, and completion celebration

**Files:**
- Modify: `public/site/buildstation.html`
- Test: `tests/buildstation-checklist.test.mjs`

- [ ] **Step 1: Implement the accordion behavior**

Add helpers that open at most one `.checklist-item`, synchronize `aria-expanded`, toggle `hidden` on its details region, and update the plus/minus presentation. Checkbox changes must not open or close details.

- [ ] **Step 2: Implement saved progress**

Read a JSON array of checked IDs from `localStorage` with `try/catch`, ignore unknown IDs, restore valid checkbox state, and update the score without celebration. On each user checkbox change, persist the valid checked IDs and update:

- numeric score;
- progress-bar width and `aria-valuenow`;
- completed row styling;
- accessible progress description;
- `READY` versus `READY TO SUBMIT` label.

If storage throws, retain in-memory behavior without surfacing an error to the participant.

- [ ] **Step 3: Implement completion celebration**

Import `canvas-confetti@1.9.3` in the existing module script and expose a safe completion callback to the checklist logic. On an explicit user transition from 10/11 to 11/11:

- fire small gold/red/cream/white bursts from left and right for about 1.5 seconds;
- add the active class to the Lamborghini layer so it drives in from the right, pauses, and exits left;
- remove/reset the class after the animation so later completion transitions can replay it;
- continue the Lamborghini effect if confetti import or invocation fails;
- skip all motion when `prefers-reduced-motion: reduce` is active.

- [ ] **Step 4: Extend and run the contract test**

Extend the test to assert the versioned storage key is `superteam-de-buildstation-checklist-v1`, the pinned confetti URL exists, and the HTML contains the persistence restore guard, reduced-motion guard, one-open-item accordion logic, and completion-transition guard. Run:

`node --test tests/buildstation-checklist.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the interactions**

```bash
git add public/site/buildstation.html tests/buildstation-checklist.test.mjs
git commit -m "Persist checklist progress and celebrate completion"
```

### Task 4: Verify production build and localhost behavior

**Files:**
- Verify: `public/site/buildstation.html`
- Verify: `tests/buildstation-checklist.test.mjs`

- [ ] **Step 1: Run automated checks**

Run:

```bash
node --test tests/buildstation-checklist.test.mjs
node --test deployment-compatibility.test.mjs
yarn build
git diff --check
```

Expected: checklist and deployment-compatibility tests pass, production build completes, and no whitespace errors are reported.

- [ ] **Step 2: Start the local site**

Run `yarn dev` and open `http://localhost:3000/buildstation`.

- [ ] **Step 3: Verify desktop behavior**

At approximately 1280px:

- verify section placement and visual continuity;
- expand multiple questions and confirm only the current one stays open;
- check items and verify score/progress updates;
- reach 11/11 and verify side confetti and Lamborghini motion;
- reload and verify checked state remains without replaying the celebration;
- verify the countdown reflects the corrected deadline.

- [ ] **Step 4: Verify responsive and accessible behavior**

At approximately 375px and 768px:

- confirm long questions wrap without horizontal overflow;
- confirm checkbox and accordion controls remain independently tappable;
- keyboard through controls and links, checking visible focus and collapsed-content focus behavior;
- source-review the reduced-motion branch and, where browser emulation is available, confirm motion is suppressed.

- [ ] **Step 5: Review the final diff**

Run `git status --short` and `git diff HEAD~3 -- public/site/buildstation.html tests/buildstation-checklist.test.mjs`. Confirm only approved checklist, celebration, test, and deadline changes are present. During manual testing, uncheck one item after the first completion and recheck it to confirm the celebration replays exactly once for the new 10/11-to-11/11 transition.
