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

The results below cover the first local version. The playful revision has a separate verification checklist beneath them.

- Node 22 production build completed successfully after the final policy-header cleanup. Existing image lint warnings remain. Generated webpack cache was cleared after the local disk filled during cache writes; the final build and source files are preserved.
- 27 tests passed, including five countdown boundary tests written before implementation.
- Browser verified home → Global Hackathon → Breakpoint, announcement → Breakpoint, official ticket/community destinations, native FAQ keyboard operation, mobile menu Escape/focus/inert behavior, loaded images, and no console warnings/errors on the new page.
- Checked 320, 375, 768, 1024, and 1280px layouts. Fixed a clipped homepage menu at 320px. Reduced-motion rules were inspected in the browser; this browser does not expose media-preference emulation.
- Canonical/indexing/security headers and sitemap verified through the final local production server; `/policy` and `/insights` each have exactly one announcement.
- Independent spec/plan and code review completed with no remaining substantive findings. Changes remain local on `codex/breakpoint-community`.

## Playful revision requested on 14 October

Direction: playful travel invitation within the existing Superteam Germany brand. Spacious asymmetric hero, a tangible boarding-pass illustration, bold tight type, brief staggered reveals, and clear official ticket/community actions. Keep the page short and welcoming.

- [x] Restore ordinary-link hover shimmer and the primary CTA's swept shimmer across all redesigned pages. On `/breakpoint`, send the primary navbar CTA to official Luma tickets.
- [x] Replace community photography with an original Brandenburg Gate / Big Ben landmark asset and an illustrative Berlin-to-London boarding pass. Keep dates, routing, timer and copy in HTML.
- [x] Reuse the existing Paper shader for German bottom-left and UK top-right colours, with a protected reading area and static fallback. Add small lilac/mint details.
- [x] Add native text reveals and a boarding-pass border beam inspired by Magic UI; add distinct visual scenes to the reasons and next-step sections. Respect reduced motion, pause/resume and non-JavaScript content.
- [x] Check navigation, menu, timer, FAQ, loaded art/shaders, overflow and focus at desktop, tablet and 320/375px mobile widths. Run relevant regressions and obtain independent review. The revision changes only static assets and documents, so use the already verified Node 22 production build; restart its server to register new public files and verify their actual responses and rendering.
- [x] Save a fresh screenshot, reset temporary viewport controls, and leave the revised local preview open. No deployment.

## Playful revision verification

- All 27 countdown, checklist and deployment compatibility tests passed. Both new JavaScript files pass syntax checks; `git diff --check` passes.
- Browser checked 320, 375, 768, 1024 and 1280px with no horizontal overflow. Both country shader canvases and all eager artwork/icons load. New static assets return 200 with the correct MIME types under the existing security policy.
- Home → Global Hackathon → Breakpoint flow works. Home and BuildStation keep the internal Breakpoint CTA; the Breakpoint page CTA links to official Luma tickets. Live stylesheet inspection confirms ordinary-link hover shimmer and primary swept shimmer.
- Mobile menu Escape closes the menu, returns focus, and leaves hidden links inert; the following Tab reaches the hero ticket action. Native FAQ opens by Space.
- Pause/resume works, including the navbar shimmer, marquee, shader speed, illustration hover transforms and visible headings. Reduced-motion rules were inspected; this browser does not offer media-preference emulation.
- Independent specification and code reviews completed. Both reported pause-control gaps were fixed and re-reviewed with no remaining issues.
- Desktop preview saved as `breakpoint-playful-desktop-v2.jpg` in the task's local preview artifacts. Artwork and prompt are preserved in `design-assets/breakpoint/`; the public WebP preserves transparency and is approximately 159 KiB.
- This iteration did not change the Next application or route configuration. It uses the earlier successful Node 22 production build, with the local server restarted to register the added public files.

## Glossy card and grain-texture refinement

- [x] Slim the shared static announcement and the legacy React announcement.
- [x] Remove the hero eyebrow, caption, visible pause control and moving ribbon; remove obsolete CSS/JavaScript.
- [x] Match BuildStation's full-size grain shader and seamless header, with opposing Germany/UK masks; preserve reduced-motion and hidden-tab pausing.
- [x] Keep one glossy boarding pass and glossy BP26 badge; enlarge the card title and label the timer "Countdown".
- [x] Replace the three previous scenes with matching dark cards and licensed Lucide icons, keeping the approved headings and welcome copy.
- [x] Run existing regressions, JavaScript syntax and diff checks, and a fresh Node 22 production build for the updated legacy announcement.
- [x] Verify desktop/mobile layouts, background rendering, image loading, menu/FAQ/ticket flow, and obtain independent review.
- [x] Save updated hero and reasons screenshots, reset viewport controls and leave the local page open.

### Country identity correction

The user found the German corner too faint and the UK colours ambiguous. Replace the colour washes with real flag-icons shapes and blend neutral moving grain at the React wrapper level, since the shader wrapper isolates its canvas. The latest direction puts Germany at the upper left opposite the Union Jack at the upper right. Match their size, mirrored fade and grain, while lowering opacity and saturation to restore the earlier subtle colour treatment. Both sit beneath the reading shield. Verify the new assets, both canvases, responsive positions and contrast before handoff.

Fresh build completed successfully, with existing unrelated image lint warnings. All 27 regressions, JavaScript syntax checks and diff checks passed. New flag and reason-icon assets return 200. The older policy page renders the slimmer React announcement once.

The final browser pass checked 320, 375, 768, 901, 1041 and 1280px with no horizontal overflow. Both flags now share source proportions and mirrored top-corner positions, opacity .36 (.28 on small phones), muted saturation and grain. Both canvases render, all eager images load, and the browser reports no warnings or errors. Navigation and hero text remain legible, including at the two layout boundaries. Mobile Escape closes the menu, restores focus and leaves the closed menu inert; the native FAQ opens with Space; the navbar ticket link points to the official Luma page. Reduced-motion and hidden-tab pausing were checked in source, without a browser preference emulation. Independent review found no substantive issues.

Updated desktop/mobile hero and three-card screenshots are saved as v5. The temporary QA tab is closed, viewport overrides are reset, and the refreshed local Breakpoint page is left open. The final corner-position and colour-softening changes are static CSS/SVG assets verified against the running production server; no additional build was needed for those assets.

## Floating paper refinement

- [x] Increase flag presence and visibly animated grain while preserving identical dimensions and opposing corner placement.
- [x] Move the boarding pass and BP26 badge through one parent transform; add a gentle float with reduced-motion/background-tab pausing.
- [x] Remove the hero newcomer link and the divider before the reasons section.
- [x] Adapt the existing three reasons into cream paper cards with consistent coloured icon stickers, inspired by the Altitude reference.
- [x] Match the established homepage/BuildStation footer structure, content and responsive styling; remove the separate back-to-top action.
- [x] Verify flag motion, shared card/badge hover, desktop/mobile layouts, menu and FAQ, asset loading and JavaScript syntax; review the final delta.
- [x] Save current screenshots, close temporary tabs, reset viewport controls and leave the refreshed local page open.

### Floating paper verification

All 27 existing regressions pass with Node 22. Both JavaScript modules pass syntax checks; PostCSS parses the current CSS; diff checks pass. Browser checks cover 320, 375, 768 and 1280px with no horizontal overflow or clipped menu/badge. Flag dimensions match at every checked width (480 × 360px on desktop), and both canvases render. Two final screenshots show the texture changing in both flag regions. Card/badge parent transforms change together on hover, and the card no longer has its own independent rotation.

The three cream cards remain equal height at desktop and tablet widths and stack on phones. Their body and label contrast against the darkest paper surface measures 5.29:1 and 5.05:1. The footer has the established four-column desktop and stacked mobile layouts, matching link groups and no separate back-to-top action. The hero newcomer line is absent and the hero/reasons border is 0px. Mobile Escape restores focus and leaves the closed menu inert; Space opens the native FAQ. All eager images load and browser logs contain no warnings/errors. Reduced-motion and background-tab pausing were reviewed in source without preference emulation. Independent source review found no substantive issues.

Current v6 hero, cards and footer screenshots are saved. The temporary reference/QA tab is closed, the viewport is restored and the refreshed local page remains open. This iteration changes public assets only, so the existing production server serves the verified source directly.

## Stable loading and concise copy

- [x] Reproduce the bright pre-texture flag state with temporary CSS-only markup and assets, without changing the approved texture.
- [x] Keep the loading shade until the direct shader wrapper carries `data-paper-shader`; respect reduced motion. Verify empty and uninitialized-canvas cases keep the shade while the initialized live page removes it.
- [x] Link the Breakpoint announcement directly to official Luma tickets, leaving the other page announcements unchanged.
- [x] Remove the reasons introduction, three footnotes and travel note; use "See you in London" and reduce the desktop card minimum height to 320px.
- [x] Check desktop/tablet/mobile layouts, loading states, destination navigation, console output, CSS parsing and existing regressions; resolve review findings.
- [x] Save current screenshots, close test tabs, stop/delete the temporary fixture server and files, restore the viewport and leave the local page open.

The temporary first-paint fixture exposed the undimmed SVG background. The fallback reduced sampled loading-state brightness from 65.22 to 35.22 for Germany and 58.60 to 32.29 for the UK. A second fixture with blank canvases reproduced the premature canvas-only readiness gate; the final direct-wrapper marker keeps its shade at opacity 1. Both real initialized wrappers remove the shade to opacity 0, retaining the approved live appearance. Hardware/WebGL failure was represented by uninitialized markup, without changing browser preferences.

The banner click opened "Solana Breakpoint 2026 · Luma" at the official ticket URL. All six requested copy strings are absent. Desktop cards measure 320px tall and tablet cards remain equal height; 375, 768 and 1280px layouts have no horizontal overflow. Browser logs contain no warnings/errors. All 27 regressions, CSS parsing and diff checks pass. Independent review's fallback finding is resolved, with no remaining substantive issues. Current v7 screenshots are saved and the user is left with the original single local preview tab.

## More visible boarding pass float

- [x] Increase the shared card/badge float from 6px over 7 seconds to 10px over 6 seconds; increase the shared hover lift from 4px to 6px.
- [x] Keep reduced-motion suppression and hidden-tab pausing unchanged.
- [x] Verify live desktop motion and hover, mobile bounds, CSS parsing, diff checks and existing regressions; save the updated hero preview.

The live desktop float was observed near both ends of its range (-0.11px and -9.80px), with a 6-second cycle. Hover settles at -6px on the common card/badge parent. Both 1280px and 375px layouts have no horizontal overflow, and the badge remains inside the viewport. All 27 existing regressions and CSS/diff checks pass; the browser console is clear. Reduced-motion behavior was reviewed in source without preference emulation. The v8 hero screenshot is saved and the temporary viewport override is reset.

The subsequent requested rollback restores the original gentle 6px float over 7 seconds and the 4px hover lift. The pass and BP26 badge still move through their shared parent. The refreshed local page confirms the 7-second cycle, shared parent and no desktop overflow; the v10 hero screenshot is saved and the viewport override is reset.

## Persistent announcement strip

Approved design: keep the narrow strip visible while scrolling, leave the navbar in normal flow, allow dismissal for the visit, and direct Breakpoint visitors to tickets. Use one shared stylesheet and browser module for the standalone pages and a small React wrapper in SiteChrome for the remaining routes, including Summit pages. Reserve the measured strip height and clear it for anchor navigation; use the same campaign-specific sessionStorage key everywhere, with a safe fallback when storage is unavailable.

- [x] Add shared fixed-strip layout, accessible close control, height synchronization and session dismissal in `public/site/community-nav.css` and `public/site/announcement.js`.
- [x] Integrate home, BuildStation and Breakpoint markup plus the React SiteChrome wrapper; add the wider-screen ticket action on Breakpoint.
- [x] Prevent a dismissed strip and its reserved space flashing on new documents with the small synchronous `public/site/announcement-state.js` head bootstrap; keep the focused skip link above the strip.
- [x] Run syntax/CSS checks and existing regressions, build with Node 22, and verify desktop/mobile scrolling, links, keyboard dismissal, persistence across route types, reload and back navigation in the browser.
- [x] Save current screenshots, restore the viewport and leave the local Breakpoint page open.

The final Node 22 production build passes, with only existing Sanity/Browserslist/image warnings. All 27 regressions, module/inline-script syntax checks, CSS parsing and diff checks pass. Browser checks confirm the 32px desktop and 36.34375px mobile strip stays at viewport y0 while the navbar scrolls away. Its reserved height matches the rendered strip, including at 320px and 375px with no overflow. Homepage anchor navigation clears the strip by 16px.

Closing the strip hides its reserved space and persists across Breakpoint, BuildStation, homepage, React policy and Summit pages, reloads and back/forward navigation. The synchronous head bootstrap sets the hidden root state before UI initialization; the React root handles this expected attribute difference. The focused skip link renders above the strip. After scrolling with keyboard focus on the close button, dismissal keeps focus in visible content, and the next Tab continues through the content; temporary tabindex is removed on blur. Independent review also exercised unavailable storage and listener/observer cleanup, with no remaining substantive findings.

Visible Summit navigation retains exactly one announcement through React route changes. All checked browser logs are clear. Current v12 desktop and mobile screenshots are saved, temporary dismissal tabs are closed, the viewport override is reset and the original local Breakpoint preview remains open.

## Dismissal for the current page view

The user now wants the strip to reappear on reload. This supersedes the session-persistence behavior above. Keep dismissal in the current DOM only, reset on pageshow and React pathname changes, and remove sessionStorage, the pre-paint bootstrap and its root CSS attribute. Same-page scrolling and anchor navigation keep the strip closed.

- [x] Replace stored dismissal with page-view dismissal across static and React pages; remove the obsolete bootstrap.
- [x] Verify close/reload/navigation/back behavior, sticky layout and keyboard focus; run syntax/CSS checks, regressions and a Node 22 production build.
- [x] Save the updated preview, restore viewport controls and leave the local Breakpoint page open.

The Node 22 production build, all 27 existing regressions, syntax/CSS checks and diff checks pass. On Breakpoint, closing removes the strip and its reserved space; reload restores 32px on desktop and 36.34375px on a 375px phone without overflow. Closing remains effective during scrolling and homepage hash navigation. Navigation to BuildStation, React pathname changes between Summit pages, reload and back navigation restore the strip. Router restoration was checked after its effects settled. Initial nonpersisted pageshow does not reopen an already dismissed strip. The existing viewport focus restoration and listener/observer cleanup remain in place; independent lifecycle review found no substantive issues. Browser logs are clear, v13 desktop/mobile previews are saved and the original Breakpoint tab is left open with its viewport reset.

## Conference context and builder stages

- [x] Define Breakpoint as Solana’s annual conference in the hero and a new first FAQ, grounded in Solana’s official conference page and 2026 guide.
- [x] Replace the hero Telegram button with the official conference website; retain the newcomer and next-step community links.
- [x] Use "02 / BUILDING" and explicitly invite ideas, prototypes and apps ready to grow; welcome people without a project in the newcomer note.
- [x] Verify desktop/mobile copy layout, the new external link and keyboard FAQ; save updated previews and leave the local page open.

The official-site hero button opened the verified Solana Breakpoint URL and title. The new first FAQ opens with Space and explains the conference; five FAQ items remain compact. All three desktop reason cards stay 320px tall. At 320px the two hero buttons fit on the same row, FAQ text remains within the page and there is no horizontal overflow. Desktop layout and browser logs are clear. Current v14 hero/card/FAQ screenshots are saved, the temporary official-site tab is closed, the viewport is reset and the local Breakpoint page remains open. This refinement changes static copy and links only, so it was verified directly against the running server without another build.

## Networking and playful extras

- [x] Rename the secondary hero action to "Explore Breakpoint"; use the verified flagship-conference wording and a short second sentence covering networks, opportunities, community and project growth.
- [x] Include career opportunities in the global connections card; retain the separate Germany community card and the ideas/prototypes/apps invitation.
- [x] Verify merch, food and side-event claims through the official 2026 registration page, guide and expanded FAQ, plus the supplied Luma calendar. The FAQ confirms on-site food/drinks/merch and says some side events require a separate RSVP.
- [x] Add the compact luggage-themed extras row with "Leave room in your suitcase", a side-event calendar link and RSVP note. Use the installed Lucide luggage icon with its ISC notice. Keep full catering, guaranteed merch quantities and universal side-event admission out of the copy.
- [x] Verify desktop/mobile layout, keyboard/link behavior, CSS parsing and existing regressions; save previews and close temporary tabs. The next requested iteration below supersedes the bonus-row layout before final preview restoration.

## Always-visible announcement and five community cards

- [x] Remove the close control from home, BuildStation, Breakpoint and `CampaignAnnouncement`; simplify `announcement.js` to measured-height synchronization and remove close-column CSS.
- [x] Increase the pass/badge float modestly and add a native CSS lilac/mint backlight, with reduced-motion and background-tab handling.
- [x] Replace the extras row with matching merch and side-event reason cards; use five columns on wide screens and responsive 3/2/1 columns below that. Keep the verified food/RSVP limits and Lucide notices.
- [x] Run existing regressions, syntax/CSS checks and a Node 22 production build for the changed React wrapper. Verify desktop/tablet/phone layouts, persistent announcement on static/React routes, the calendar link, motion/focus behavior and browser logs; save and show the local preview.

The Node 22 production build passes in 53.33 seconds, with the existing Sanity CLI, Browserslist and Next image warnings. All 27 existing regressions pass. JavaScript/module and inline-script syntax, both stylesheets and `git diff --check` pass. Independent scoped review found no substantive issues.

The rebuilt React policy route, standalone homepage, BuildStation and Breakpoint show one fixed strip with no close control. Scrolling and homepage anchor navigation retain the strip at viewport y0. Its measured/reserved height is 32px on desktop and 36.34375px on phones. The five-card desktop row, intermediate three-column grid, tablet two-column grid and single-column phone layout were checked at 1280, 1024, 768, 375 and 320px with no settled horizontal overflow or clipped card text. At 1280px the five cards share one row and equal height. The side-event link has a 44px target and visible 2px keyboard focus; Enter opens the correct Luma calendar and title.

Browser inspection confirms the pass and BP26 badge share the same moving group, with the six-second float and eight-second backlight active. CSS inspection confirms reduced motion disables both and the existing background-state class pauses both. The approved flags are unchanged. Current v16 desktop/mobile screenshots are saved; temporary QA/calendar tabs are closed, viewport overrides are cleared and the original local Breakpoint preview remains open.

## Roomier bento and direct newcomer invitation

- [x] Remove the RSVP line and unused note styling; change the newcomer heading to "New to the community? Join us at Breakpoint." Explicitly welcome attendance without membership or a project, with meeting people, new connections and a shared experience as benefits.
- [x] Use a three-column desktop bento with connections spanning two columns, building beside it and the other three cards beneath. Give the featured card a larger existing icon and heading; shorten supporting text and increase spacing. Keep responsive tablet and phone layouts.
- [x] Parse CSS/HTML scripts and run existing regressions. Inspect desktop, tablet and phone cards and save the desktop preview. Public HTML/CSS-only changes do not require another Next build. The resumed verification below resolves the earlier browser limitation.

All 27 existing regressions pass. CSS parsing, inline-script parsing, requested copy/link assertions and `git diff --check` pass. At 1280px the featured card spans 780.7px, beside a 381.3px building card; the remaining three cards occupy the second row. At 768px the featured card spans the 720px grid and the supporting cards use two columns. At 375px all five cards use the single 335px column and the featured heading returns to 22px. None of the checked card text is clipped. The RSVP sentence is removed, and the newcomer invitation explicitly welcomes attending Breakpoint without community membership or a project.

Phone inspection found that the animated backlight's negative inset could produce a one-pixel document overflow at some animation phases. Its bounds now remain inside the boarding pass before blur (`inset:0`), retaining the same gradient, blur and timing. Source checks confirm that change. During final verification the browser connection reset; reconnecting to the existing localhost preview was rejected by the browser tool's URL policy. No alternate browser surface or workaround was used. The final phone overflow recheck, calendar focus recheck and viewport restoration could not be completed after that reset. The 1280px desktop bento screenshot, captured before the glow-bound adjustment, is saved as `breakpoint-bento-desktop-v17.jpg`; the visible section and copy are unchanged by that adjustment.

## Local server restart and resumed phone verification

The user requested restarting localhost and retrying phone verification. Port 3000 had no listener and the HTTP connection failed. Restarted the existing production build using Node 22, bound to 127.0.0.1:3000; `/breakpoint` then returned HTTP 200. Browser inventory showed the previous preview tab was gone. A new tab in the same in-app browser opened the restored page successfully, resolving the earlier verification limitation.

At 375px and 320px the document width exactly matches the viewport, all five cards fit their single column without clipped text, and both hero actions share one row within the page. The backlight uses `inset:0`; the narrow-phone check also sampled its expanding/translating animation phase without overflow. The fixed announcement remains at viewport y0. Keyboard focus reaches Browse side events with a visible 2px outline and a 44px target; its destination remains the correct Luma calendar. Browser warnings/errors are clear. The updated newcomer invitation and removed RSVP line render correctly. Saved `breakpoint-phone-verified-v18.jpg`, reset the viewport override and left the Breakpoint bento preview visible. The local server remains running.

## Smooth loading and single-pass reveals

- [x] Replace the visible-then-hidden blur reveal in `breakpoint.js`/`breakpoint.css` with offscreen preparation and a short one-time entrance. Cover the bento, section headings, grouped London intro and join steps; preserve no-JS, keyboard and reduced-motion visibility.
- [x] Add an inline SVG grain/gradient fallback for the flags, with a smooth texture-to-texture handoff to the live Paper shader. Preserve final flag appearance and stop relying on a plain initial shade.
- [x] Verify initial/offscreen/entered states and repeat scrolling in the browser, keyboard focus, first-frame flag texture, desktop/phone layouts and console output. Run fresh syntax/CSS checks and existing regressions; save previews and leave localhost open.

The old reveal was reproduced: offscreen content started at opacity one, then received a zero-opacity/blur keyframe once it was already 15% visible. The replacement prepares only elements beyond the viewport, uses an 80px observer margin and zero threshold, and reveals each target once with a 400ms opacity/10px transition. No blur, keyframe reset, stagger or nested reveal remains. Reloading within the bento leaves visible cards at opacity one with no entrance class; scrolling away and back does not replay them. The London intro and join steps share the same lifecycle. Keyboard navigation to the pending join-step links shows them immediately with visible focus and no entrance transition. Reduced-motion CSS and listener handling were inspected; pending items become visible and completed transitions cannot replay when preferences change.

Browser reload checks observed both flags during their handoff, with the inline SVG grain present while live opacity rose and static texture opacity fell. The final Paper parameters and overall flag styling are preserved. Desktop and 375px phone card layouts have no clipped text or horizontal overflow. Existing regressions pass 27/27, and independent scoped review reports no substantive findings. Fresh module/HTML-script/CSS parsing and diff checks pass. Current v19 previews are saved, browser warnings/errors are clear, viewport controls are reset and the local preview remains open.

## Match the official countdown

The user reported 30d 14h 33m on our page versus 31d 00h 02m on the official website. The local module targeted midnight on 15 November; the official website's current client bundle (`486-7c62ff9ac9f86ab6.js`) targets 15 November 2026 at 09:30 in `Europe/London`, exactly 9h 30m later. Its timer floors remaining minutes. Luma's current JSON-LD and event data instead list a 16:00 London start. Align with the [official website's timer](https://solana.com/breakpoint), without claiming that its target is a confirmed doors-open time; the [ticket listing](https://luma.com/breakpoint2026) remains the destination for booking details.

- [x] Reproduce the screenshot difference with a failing regression at 15 October 09:27:58 UTC, and cover the final partial minute, midnight before the target, exact target and post-event boundaries.
- [x] Set the target to `2026-11-15T09:30:00Z`, floor remaining minutes and update the accessible target description. Refresh just after wall-clock minute boundaries and immediately on visibility changes, without hidden-tab counter animation.
- [x] Run fresh regression/syntax checks, compare the live local and official countdowns, inspect the phone layout and save the corrected preview.

The screenshot regression first failed with the reported local 30d 14h 33m result versus the official 31d 00h 02m. After the correction, all seven countdown tests and all 29 total regressions pass. Both modules pass fresh syntax checks, `git diff --check` passes and localhost returns HTTP 200. Live browser comparison showed 30d 23h 41m on both sites in the same check; the local display then advanced at the next minute boundary. At 375px the timer fits within the boarding pass, all three parts have matching content/client dimensions and the document has no horizontal overflow. The desktop timer and accessible target render correctly, with no browser warnings or errors. Saved the v20 desktop and phone previews; the existing public paths require no Next rebuild.

## Travel and homepage entrance consistency

- [x] Verify the supplied official travel guide and add it as step two, between tickets and community. Remove the duplicate official-website link from the section intro, and update step numbering and intro copy.
- [x] Remove the oversized join heading override so all three section headings share desktop and phone typography.
- [x] Compare homepage and BuildStation source effects; restore the homepage's 600ms/20px easing and 70ms stagger with visible-entry timing. Preserve offscreen preparation, one-time reveals, focus/reduced-motion handling and the textured flags. Add a separate hero entrance wrapper so the pass/badge float retains its transform.
- [x] Verify section typography, visible entrance states, no replay/flicker, travel navigation and keyboard focus on desktop and phone; run fresh syntax/CSS checks and existing regressions, save previews and leave localhost running.

At 1280px all three section headings compute to 48.64px, 530 weight and 49.6128px line height; at 375px they all compute to 39px. Browser sampling captured the hero headline/details/pass entrances at 0/180/360ms while hero actions stayed fully visible and the original six-second pass float remained on its own wrapper. Fresh top-of-page scrolling showed the cards transitioning from the prepared 20px/zero-opacity state to visible, with the first two card delays at 0/70ms; the join steps were also observed entering once. Reloading inside the bento left the visible card at opacity one without a reveal class, and returning to it did not replay an entrance. Keyboard navigation into the pending travel step revealed it immediately with zero transition and a visible 2px link outline.

The travel link has a 44px target and opened `Travel | Breakpoint 2026` at the correct official URL using Enter. The three phone steps fit their 335px column with no horizontal overflow. The duplicate section link and nested reveal targets are absent. Reduced-motion selectors and listener cleanup were reviewed, and independent scoped review found no substantive issues. All 29 regressions, JavaScript/inline-script syntax, CSS parsing and diff checks pass; browser warnings/errors are clear. Saved v21 desktop/phone previews, closed the temporary guide tab, and retained the running local preview.

## Final review, atomic flag loading and unified navigation

- [x] Reproduce the texture handoff and compare actual navbar geometry on home, BuildStation and Breakpoint. Check the pinned Paper SDK's initialization/resize/draw order.
- [x] Make the fallback an atomic inline textured flag. Fade the complete live composite over it after image decoding, nonzero SDK canvas dimensions and two paint frames; retain fallback on failure/context loss. Keep geometry, masks, approved colour levels and final shader settings.
- [x] Match Join Us text/arrow spacing and the primary CTA arrow slot in shared navigation styles. Verify identical desktop link sizes and positions across all three pages, and matching 375px mobile CTA geometry through actual route navigation.
- [x] Check local assets/routes, IDs, anchors, external action destinations, security headers, countdown regressions, keyboard menu/focus/FAQ behavior and phone content sizing. Review reduced-motion handling and first-frame failure/cancellation behavior.
- [x] Finish the narrow-phone reload and final desktop screenshot, run fresh syntax/CSS/regression checks, restore the viewport and retain localhost.

The initial flag implementation exposed raw SVG backgrounds under separately fading multiply layers. Browser sampling confirmed both texture opacities changed during the handoff. The pinned SDK sets its marker before ResizeObserver supplies actual canvas dimensions and draws the first correctly sized frame. The replacement keeps an inline, fully filtered SVG visible throughout initialization and blends a complete, already drawn live composite over it; the initial DOM inspection shows no raw country background, a visible filtered SVG, and zero live opacity.

The navbars all used 13px regular text and 750-weight CTAs. Join Us spacing and the different primary arrow advances shifted Breakpoint's row by 5.484375px. After normalization, all seven links have identical x positions, widths, heights, sizes and weights at 1280px on all three routes. At 375px each route's CTA is 113.84375px wide at x193.15625, with 12px text and a 44px height. The responsive navigation opens, Escape closes it and restores focus, and the closed menu is inert. Keyboard focus into the travel step shows it immediately with a 2px outline; the native FAQ opens with Enter. All five cards and three steps fit their 335px phone column without clipped text or horizontal overflow. The ticket destination opened `Solana Breakpoint 2026 · Luma` at the intended URL.

All 17 local page/asset URLs returned HTTP 200; IDs, internal anchors, new-tab isolation and route security headers pass. Behavioral checks cover the default blank canvas, image decoding and failure, two paint frames, early/mid/late context loss and detached hosts. Independent scoped review found no substantive source-level issues. No compiled Next.js files or new public paths changed, so the existing production server serves these refinements without a rebuild.

The 320px reload also shows no plain country background, fully visible filtered SVG fallbacks, and zero initial live opacity. Both flags measure 205×154px, and document width remains 320px with no clipped cards/steps. At 375px both are 240×180px; at 1280px both are 480×360px. Settled desktop rendering retains the approved live grain, and all three headings retain their shared typography. Fresh 29/29 regressions, module/inline-script parsing, both CSS parsers and diff checks pass. Browser warnings/errors and broken loaded-image checks are clear. Saved v22 initial-frame, phone and final desktop previews; temporary QA/ticket tabs are closed, the viewport override is reset, and only the running local Breakpoint preview remains open.

## Delayed flag entrance

- [x] Hide both complete flags before first paint and reveal them together only after both live textures are ready, no earlier than the boarding pass's 360ms entrance delay. Use the shared 600ms opacity easing and remove the separate live-composite fade.
- [x] Keep a stable textured fallback after 2.5 seconds of visible waiting, pause the budget in background tabs, and prevent late shader loading from replacing the chosen fallback. Preserve no-JavaScript visibility and reduced-motion handling.
- [x] Verify warm/slow readiness, fallback settlement, timer/listener cleanup, reduced motion and background-tab timing with isolated bootstrap checks. Check the actual desktop and phone reload sequence and run the existing regressions.

Browser samples on desktop and at 375px show both whole flags at opacity zero while their live composites become ready, followed by equal opacity values throughout their shared entrance. The desktop pass entrance begins alongside the flags on a warm reload; slower shader loading waits for readiness. Both phone flags remain 240×180px at their approved final opacity of .52, with a 375px document width. A scoped review identified background time consuming the fallback timeout; the corrected visible-time budget passes initially hidden and partially hidden timing cases, and the follow-up review found no remaining substantive issues.

Fresh 29/29 regressions, module and inline-script/JSON parsing, both CSS parsers and diff checks pass. Browser warnings/errors are clear. The final change adds no assets or dependencies and changes only existing public-page files and documentation; the running production server serves it without a rebuild.
