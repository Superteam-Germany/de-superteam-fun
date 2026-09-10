# Hackathon Title and Post-Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Normalize the Count Yourself In heading and add a fifth post-hackathon support step to the Global Hackathon page.

**Architecture:** Extend the existing single-file HTML/CSS/JavaScript prototype without introducing a new component system. Reuse the shared section-title scale and the current step data/activation logic.

**Tech Stack:** Semantic HTML, CSS, vanilla JavaScript

---

### Task 1: Normalize the Count Yourself In title

**Files:**
- Modify: `.superpowers/brainstorm/83126-1788606365/global-hackathon.html`

- [ ] Change `.count-title` to the same `clamp(44px,4.8vw,66px)` scale used by `.section-title`.
- [ ] Verify the Count Yourself In title matches the other major section headings at desktop and mobile widths.

### Task 2: Add post-hackathon support to the BuildStation steps

**Files:**
- Modify: `.superpowers/brainstorm/83126-1788606365/global-hackathon.html`

- [ ] Add a fifth semantic step button with `data-step="4"` and the label `Post-Hackathon Support`.
- [ ] Add the matching fifth entry to the `steps` JavaScript array describing grant and accelerator guidance, launch amplification, membership review, and ecosystem introductions.
- [ ] Increase the desktop step list and detail height so five controls remain comfortable; keep the existing auto-height mobile layout.
- [ ] Activate each control and confirm its index, heading, and description match.

### Task 3: Verify the responsive interaction

**Files:**
- Verify: `.superpowers/brainstorm/83126-1788606365/global-hackathon.html`

- [ ] Confirm all five controls remain real buttons and preserve hover, focus, and click activation.
- [ ] Confirm each control remains at least 40 pixels tall on touch layouts.
- [ ] Confirm reduced-motion rules and the rest of the page remain unchanged.
- [ ] Run `git diff --check -- .superpowers/brainstorm/83126-1788606365/global-hackathon.html` and expect no whitespace errors.
