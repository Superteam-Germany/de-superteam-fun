# BuildStation Optional peaq Side-Track Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a clearly optional peaq Machine Economy side-track reminder and link to the final BuildStation checklist item without introducing another checkbox or implying that every team must enter.

**Architecture:** Extend the existing static `germany-track` checklist row in `public/site/buildstation.html`. Keep the approved question and completion semantics unchanged; only add one explanatory paragraph and a second resource link inside the expandable details. Update the existing canonical-content regression test first so the implementation is driven by a failing expectation.

**Tech Stack:** Static HTML, Node.js built-in test runner, existing BuildStation checklist JavaScript and CSS.

---

### Task 1: Add the optional peaq reminder to the Germany Earn checklist details

**Files:**
- Modify: `tests/buildstation-checklist.test.mjs:34`
- Modify: `public/site/buildstation.html:657-660`
- Reference: `docs/superpowers/specs/2026-10-09-buildstation-submission-checklist-design.md:117-128`

- [ ] **Step 1: Update the canonical checklist expectation**

In the `germany-track` object inside `tests/buildstation-checklist.test.mjs`, retain the existing question and add the approved optional guidance and resource:

```js
{
  id: "germany-track",
  category: "Final Checks",
  question: "Have you submitted the same project to the Superteam Germany listing on Earn?",
  guidance: [
    "Submit the same project to the Superteam Germany listing on Earn in addition to your Colosseum submission.",
    "The project must be built on Solana, comply with the global hackathon rules, and meet the regional eligibility requirements, including having Germany selected as the country. Check the Earn deadline and confirm the separate submission.",
    "Teams building for the Machine Economy can also submit their project separately to the optional peaq Germany side track.",
  ],
  resources: [
    "https://superteam.fun/earn/listing/colosseum-crypto-worlds-fair-hackathon-superteam-germany-track/",
    "https://superteam.fun/earn/listing/build-solutions-advancing-the-machine-economy-with-peaq",
  ],
}
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run:

```bash
node --test tests/buildstation-checklist.test.mjs
```

Expected: FAIL because the HTML does not yet contain the third guidance paragraph or peaq resource URL.

- [ ] **Step 3: Add the optional paragraph and second resource link**

In the `germany-track` details inside `public/site/buildstation.html`, keep the existing two paragraphs and replace the one-link resources container with:

```html
<p>Teams building for the Machine Economy can also submit their project separately to the optional peaq Germany side track.</p>
<div class="checklist-resources">
  <a class="checklist-resource" href="https://superteam.fun/earn/listing/colosseum-crypto-worlds-fair-hackathon-superteam-germany-track/" target="_blank" rel="noreferrer">Superteam Germany listing on Earn</a>
  <a class="checklist-resource" href="https://superteam.fun/earn/listing/build-solutions-advancing-the-machine-economy-with-peaq" target="_blank" rel="noreferrer">Optional: peaq Machine Economy side track</a>
</div>
```

Do not change the checkbox count, checklist identifier, question, completion logic, or readiness calculation.

- [ ] **Step 4: Run the checklist regression suite**

Run:

```bash
node --test tests/buildstation-checklist.test.mjs
```

Expected: all tests PASS, including the canonical 12-item content test and existing persistence, accordion, readiness, and celebration checks.

- [ ] **Step 5: Verify the expanded row in the local browser**

If the local server is not already running, start it in a separate terminal:

```bash
yarn dev
```

Open `http://localhost:3000/buildstation#submission-checklist`, expand the final checklist row, and confirm:

- the row still counts as one of 12 checks;
- the original Germany Earn link remains present;
- the optional peaq sentence contains no use of the word “genuinely”;
- the second link is labelled `Optional: peaq Machine Economy side track`;
- expanding, checking, unchecking, persistence, and readiness display still work;
- no console errors appear.

- [ ] **Step 6: Run the production build**

Run:

```bash
yarn build
```

Expected: the production build completes successfully without errors.

- [ ] **Step 7: Commit the implementation**

```bash
git add tests/buildstation-checklist.test.mjs public/site/buildstation.html
git commit -m "Add optional peaq checklist link"
```
