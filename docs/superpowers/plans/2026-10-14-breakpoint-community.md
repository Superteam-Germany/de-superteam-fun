# Breakpoint Community Implementation Plan

> For agentic workers: implement the approved local preview task by task with an independent spec/plan review and a final code review. The user has already authorised implementation; no further design or execution-mode approval is needed.

**Goal:** Add a Breakpoint announcement, promote Breakpoint in the navbar, and create a short welcoming community page for local review.

**Architecture:** Keep the existing static HTML rewrite architecture for the redesigned pages. Share only announcement/responsive navigation styling, use native HTML for the new page, and retain existing homepage and BuildStation behavior. The legacy React navigation receives the same campaign announcement and primary CTA.

**Tech Stack:** Next.js 15, static HTML/CSS/JavaScript, existing Inter font and community image assets, React for the existing legacy navigation, Node 22/Yarn 1.

## Task 1: Announcement and navigation

Files: `public/site/community-nav.css`, `public/site/home.html`, `public/site/buildstation.html`, `src/components/nav.tsx`, `src/app/policy/page.tsx`.

- [x] Add a reusable compact gold announcement class with same-tab `/breakpoint` link, readable wrapped dates, minimum 44px touch target, and visible focus.
- [x] Load the shared stylesheet on the static pages. Put the announcement immediately above the primary navigation without covering the existing hero.
- [x] Promote `/breakpoint` to the primary button. Move `/buildstation` to a normal link after FAQ in the redesigned navigation, including the mobile menu.
- [x] Keep menu dismissal on selection/Escape/desktop resize and return focus to the toggle after Escape. Use `inert` correctly for hidden menus.
- [x] Update the legacy React navbar's campaign CTA and announcement without removing its existing normal links.
- [x] Remove the policy page's duplicate inline Nav, because SiteChrome already renders it and would otherwise duplicate the announcement. Verify one announcement on that route after building.

## Task 2: Short community page

Files: `public/site/breakpoint.html`, `public/site/breakpoint.css`, `public/site/breakpoint.js`, `public/site/breakpoint-countdown.mjs`, `tests/breakpoint-countdown.test.mjs`.

- [x] Build a compact hero with the approved headline/copy, event dates/location, primary ticket link and general Telegram link. Use existing local community photography with an accurate caption and a small Germany-to-London text accent.
- [x] Add three reasons to attend with the community and an explicit welcome to newcomers and non-members.
- [x] Add a short cream section with ticket and community next steps, and an official website link for programme/ticket options. Do not show ticket prices or unconfirmed offers.
- [x] Add native `details`/`summary` FAQs and a footer using existing site links.
- [x] Implement the native mobile menu and restrained days/hours/minutes timer; keep content and dates visible without JavaScript. Respect reduced motion and avoid extra dependencies, animations, or data collection.
- [x] Write and run failing countdown tests before implementation for London calendar-day boundaries, rounded remaining minutes, no negative values, and in-event/post-event states. Implement a pure countdown module and rerun the tests.

## Task 3: Route and metadata

Files: `next.config.js`, `src/app/sitemap.ts`, `public/site/breakpoint.html`.

- [x] Add `/breakpoint` → `/site/breakpoint.html` to `beforeFiles` rewrites and attach the existing static-page security headers.
- [x] Add an indexable canonical `/breakpoint`, social metadata, and a sitemap entry. Use existing social image assets.
- [x] Confirm route and assets return 200 and direct static-page URLs stay noindex.

## Task 4: Verify and open local preview

- [x] Run `PATH=/Users/merdanaslan/.nvm/versions/node/v22.22.1/bin:$PATH node --test tests/*.test.mjs deployment-compatibility.test.mjs` and inspect every result.
- [x] Run `PATH=/Users/merdanaslan/.nvm/versions/node/v22.22.1/bin:$PATH yarn build`; use the repository's documented public Sanity configuration if needed, without displaying environment secrets.
- [x] Start the local server on a free port, then inspect home, BuildStation, and Breakpoint via in-app browser.
- [x] Verify navigation destination, mobile menu keyboard/Escape behavior, FAQ operation, local image loading, console output, and layout at 375/768/1024/1280px and reduced motion.
- [x] Obtain an independent code review of the final working diff; fix substantive findings and rerun affected verification.
- [x] Save representative screenshots and open the homepage and `/breakpoint` preview for the user's review. Keep changes local and report any material limitations.

Validate presentation through the actual browser flow and existing regressions instead of tests that only match new copy or markup. The user-requested countdown adds time-dependent behavior, so test its calendar boundaries and post-event states directly.

## Verification results

- Node 22 production build completed successfully after the final policy-header cleanup. Existing image lint warnings remain. Generated webpack cache was cleared after the local disk filled during cache writes; the final build and source files are preserved.
- 27 tests passed, including five countdown boundary tests written before implementation.
- Browser verified home → Global Hackathon → Breakpoint, announcement → Breakpoint, official ticket/community destinations, native FAQ keyboard operation, mobile menu Escape/focus/inert behavior, loaded images, and no console warnings/errors on the new page.
- Checked 320, 375, 768, 1024, and 1280px layouts. Fixed a clipped homepage menu at 320px. Reduced-motion rules were inspected in the browser; this browser does not expose media-preference emulation.
- Canonical/indexing/security headers and sitemap verified through the final local production server; `/policy` and `/insights` each have exactly one announcement.
- Independent spec/plan and code review completed with no remaining substantive findings. Changes remain local on `codex/breakpoint-community`.
