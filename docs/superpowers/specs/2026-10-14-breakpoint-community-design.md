# Breakpoint community page and announcement

## Approved direction

The user approved the announcement, navigation order, four-section community page, and hero copy, and requested a local implementation for visual review. Use Superteam Germany's existing dark, cream, and gold identity with subtle Germany-to-London accents. Treat spoken references to "Speed in Germany" as Superteam Germany in this established context.

## Public content

- Announcement: "Join Superteam Germany at Breakpoint" and "London · 15–17 November", linking to `/breakpoint` in the same tab.
- Primary navbar button: "Breakpoint", linking to `/breakpoint` on other pages and the official Luma ticket page when already on `/breakpoint`. Preserve the existing gold text shimmer on ordinary links and swept shimmer on the primary CTA.
- Redesigned navbar order: What We Do, Events, Team, FAQ, Global Hackathon, Join Us, Breakpoint. Global Hackathon is an ordinary internal link to `/buildstation`, immediately after FAQ, on desktop and mobile.
- Hero: "From Germany to Breakpoint." Copy: "Join Superteam Germany in London for Breakpoint, Solana’s flagship conference. Grow your network, explore opportunities, reconnect with the community, and take your idea or app further." Use Solana’s verified "flagship" description rather than an unverified largest-conference comparison.
- Event facts: 15–17 November 2026, Olympia, London. Verified on `https://solana.com/breakpoint` on 2026-10-14.
- Primary page action: "Get your ticket", to `https://luma.com/breakpoint2026`. Hero secondary action: "Explore Breakpoint", to `https://solana.com/breakpoint`. Keep Telegram entry points in the newcomer note and community next-step section; that is the general community channel, not a dedicated Breakpoint group.
- Three reasons: meet beyond your usual circle, bring what you are building, and experience it with your community. The builder card explicitly welcomes an idea, a prototype or an app ready to grow, with fresh perspectives and potential collaborators as concrete benefits. Describe opportunities rather than promise organised introductions, accommodation, travel, or side events.
- Use five matching reason cards: connections, building, community, merch and side events. Keep "Leave room in your suitcase" as the merch heading and mention food/drinks available on site there. Give side events their own card with a link to `https://luma.com/BP-SideEvents` and a note that some events need a separate RSVP. Solana’s registration page confirms swag; the expanded official 2026 FAQ confirms on-site food/drinks/merch and separate RSVPs for some side events. This does not establish full catering, unlimited merch or automatic access to exclusive side events. Preserve that distinction in the copy.
- Explicit newcomer invitation: no official Superteam membership or existing project required to connect with the community; founders, developers, designers, creators, and curious newcomers are welcome.
- Compact next-step section: secure a conference ticket through the official organiser, connect with the existing community, arrange one's own travel and stay. Keep official programme and ticket-option details on the official site.
- Short native FAQ: what Breakpoint is, newcomers/membership, who the invitation is for, ticket purchase, and where to find programme information. Explain the annual Solana conference in plain language. Conference identity checked against [Solana’s official 2026 guide](https://solana.com/vi/news/breakpoint-guide-part1) and current event page on 2026-10-15.
- Do not publish internal attendance data, recruitment targets, unconfirmed discounts, or unconfirmed community programmes. Do not repeat these private details in repository documentation.

## Visual design

Follow `public/site/home.html` and `public/site/buildstation.html`: Inter, near-black canvas, warm cream type, gold calls to action, and generous spacing. On 14 October the user requested a more playful local revision: remove the past community photograph; introduce an illustrative Berlin-to-London boarding pass with Brandenburg Gate and Big Ben artwork; place the existing German shader colours in the bottom left and a UK blue/red/white treatment in the top right; and use small Solana lilac/mint accents. The boarding pass is a visual invitation, not proof of a booked flight or conference admission. Do not add actual airline identifiers, seat numbers, QR codes, or invented travel arrangements.

Use original generated landmark illustration, grounded in captured screenshots of the existing page and official Breakpoint page. Keep hero copy as selectable HTML. The official page informs bold type, purple London detail, mono route labels and short text reveals; do not copy its full agenda, claims or branded partnership assets. Use native reveals and three matching cards inspired by Magic UI Text Animate, Bento Grid and Glare Hover. All content stays visible without JavaScript and all nonessential motion respects reduced motion. The latest refinement removes the manual motion control, earlier miniature scenes, border beam and marquee.

The announcement is a compact full-width gold bar, with dark text, visible focus, and a naturally wrapping mobile layout. The latest approved behavior below keeps the strip visible while scrolling with no close control. The page is substantially shorter than BuildStation and has no duplicated agenda, attendee counter, or new form.

### Latest local refinement

The user then requested a slimmer announcement (32px desktop, approximately 36–38px wrapped mobile); removal of the hero eyebrow, visual caption, pause/resume UI and moving ribbon; and a seamless navbar/hero background using BuildStation's actual moving grain texture. Country shader layers extend behind the transparent navigation. Germany was initially at the bottom left; the subsequent direction below moves it to the top left. Retain reduced-motion and background-tab pausing without a visible motion control.

Keep a single boarding pass with subtle glossy reflections and an inset edge highlight; remove the purple stacked-backplate shadow. Apply the same glossy finish to the BP26 badge. Remove the small Superteam Germany label from the card header and enlarge "Community Boarding Pass". Label the timer "Countdown"; match the official website's London countdown target and include an accessible date description.

Keep "Go further, together." Replace all three earlier miniature scenes with a consistent row of three dark rounded cards, matching Lucide line icons, clear headings and copy, and restrained hover highlights inspired by Magic UI Bento Grid / Glare Hover. Stack the cards on narrow mobile screens. No moving strip or discount-code teaser is included.

The user subsequently found the German wash too faint and the UK wash reminiscent of a Russian tricolour. Use real flag geometry from the MIT-licensed flag-icons library, with German black/red/gold bands and the Union Jack's diagonal crosses. The latest direction moves Germany to the top left, opposite the UK at the top right, with mirrored size, fade and neutral grain texture. Both flags use low opacity and muted saturation to restore the earlier subtle atmosphere. Keep both beneath the reading shield, preserving legible navigation and hero copy, the seamless black canvas and all other approved refinements.

The user subsequently requested a timer and alignment with the official site's timer. Add a restrained days/hours/minutes countdown in the boarding pass, labelled "Countdown". The official website's client bundle, verified on 15 October 2026, targets 15 November at 09:30 in `Europe/London` (`2026-11-15T09:30:00Z`), and floors remaining minutes. Match that target and rounding, refresh just after each minute boundary and immediately on returning to the tab. Luma currently lists a different 16:00 start, so treat 09:30 as the official website's countdown target rather than a confirmed doors-open time. At the target show "Breakpoint is here"; from 18 November show "Breakpoint 2026 has wrapped". Never display negative values or a ticking seconds counter. Keep dates visible without JavaScript, hide the timer until calculated, include its precise London target in the accessible description, and do not announce minute-by-minute updates to screen readers. A small lilac London accent can reference the verified purple identity of the official Breakpoint hero without changing the site's main brand.

## Implementation boundaries

- Home and BuildStation are static HTML served by `next.config.js` rewrites. Add the Breakpoint route through the same mechanism and give it the existing static-page security headers.
- Add a focused shared campaign navigation stylesheet for the announcement and responsive navigation. Avoid refactoring unrelated homepage interactions.
- Update navigation on home, BuildStation, and the new page. Add the same announcement and replace the stale primary campaign CTA in the legacy React navigation while retaining its ordinary links.
- Remove the policy page's redundant inline navigation, since the root SiteChrome already supplies it; this prevents the new announcement appearing twice there. Leave the policy text as is.
- Add canonical, description, Open Graph/Twitter metadata, and a sitemap entry for `/breakpoint`. Direct static files continue to be noindex through existing `/site/:path*` headers.
- Footer on the new page uses existing site navigation and community links, plus Breakpoint.
- No deployment, public posting, ticket purchasing, or changes to external services.

## Latest playful refinement

The user requests stronger country colours and visible texture/motion while keeping both flags equally sized at the opposing top corners. Restore a middle level of opacity and saturation and increase the neutral grain's movement and contrast without losing real German bands or Union Jack geometry. Treat the boarding pass and BP26 badge as one moving object, including during hover. Remove the hero newcomer link and the divider before the reasons section. Copy the established homepage/BuildStation footer's Navigate, Resources and Connect groups and copyright layout, without a separate back-to-top action.

Use the floating paper objects, generous spacing and light card surfaces of [Acctual's Altitude page](https://www.acctual.com/altitude) as inspiration. Keep the approved dark hero and Superteam gold/cream palette, original landmark art and a single boarding pass. Add a gentle shared float to the travel card and badge; give the three existing reasons cream surfaces with matching gold, lilac and muted green icon stickers. Retain the approved wording, official ticket destination and community invitation. Motion must stop for reduced-motion preferences and pause in background tabs. No unconfirmed offers or new event claims are added.

## Stable flag loading and concise copy

The user approved the final flag appearance but reported a bright initial flash. The raw flag SVGs render before the asynchronous shader's darkening texture. Keep a shaded static loading state until the direct Paper wrapper carries its successful-initialization marker, then fade that shade away. Canvas existence alone is insufficient because WebGL failure can leave an uninitialized canvas. Keep the approved shader parameters, country colours and sizing. Reduced motion disables the fade.

On the Breakpoint page, the announcement links directly to the official Luma ticket page with a safe external link. Keep announcement links on other pages directed to the community Breakpoint page. Remove the reasons introduction, all three card footnotes and the travel/stay note. Use "See you in London" as the warmer section eyebrow; retain "Go further, together." and the core reasons. Reduce the desktop card minimum height to 320px after removing the footnotes.

## Verification

### Persistent announcement approved refinement

Keep the narrow announcement visible at the top throughout scrolling on all website pages, including the standalone homepage, BuildStation and Breakpoint pages and the React routes. Keep the regular navbar scrolling normally. Reserve the strip's actual height in document flow so it does not cover the navbar, and allow anchor navigation to clear it. Use the existing 32px desktop and approximately 36px mobile sizing.

The latest user refinement removes dismissal entirely. Keep the strip visible on every page at all times, remove the close control and its event/focus/reset logic, and retain only measured-height synchronization and cleanup. No storage or route-change reset is needed. Center the link with symmetric padding after removing the close column. On other pages the strip links to `/breakpoint`; on the Breakpoint page it links to the official Luma ticket URL, with a "Get your ticket" action on wider screens and its external arrow retained on narrow screens. Do not add extra motion.

### Always-visible strip, boarding-pass light and five cards

Increase the shared boarding-pass/badge float from 6px over seven seconds to 11px over six seconds. Retain the subtle hover lift and glossy surface. Add a restrained lilac/mint backlight behind the pass, inspired by the supplied Magic UI Backlight reference, using native CSS rather than adding a React dependency to the static page. Animate transform and opacity only; stop nonessential motion for reduced motion and pause in background tabs. The approved country flags and loading shade stay unchanged.

The next requested bento refinement below supersedes the five-column row. Retain the five cream cards, matching coloured Lucide stickers and the real keyboard-accessible side-event calendar link.

### Roomier bento refinement

The user finds five narrow columns crowded and text-heavy, and supplies the Magic UI Bento Grid reference. Use a three-column desktop grid: connections spans two columns in the first row beside building; community, merch and side events occupy the second row. Enlarge the connections card's existing icon sticker and heading, with generous spacing and shorter descriptive copy across the cards. Keep two-column tablet and single-column phone layouts, with the featured card spanning the tablet row and returning to a regular card on phones. No new animation or artwork is needed.

Remove the visible "Some events need a separate RSVP" line at the user's request. Retain the calendar link without introducing any claim that entry to all side events is included. Food/drinks continue to be described only as available on site. Replace the newcomer heading with "New to the community? Join us at Breakpoint." to explicitly invite attendance even without existing community membership or a project. The supporting copy highlights meeting people, making connections and enjoying the Breakpoint experience together; retain the Telegram link.

### Smooth first paint and scroll reveals

The user reports flicker when the bento cards and London's calling section enter the viewport, and a brief untextured flag on reload. The existing observer waits until a visible element reaches 15% intersection before adding an animation that resets its opacity from one to zero and applies blur. Prepare only offscreen elements for a short, one-time opacity/10px transition before they reach the viewport; leave already-visible elements unchanged. Remove blur and per-card stagger delays. Apply the same lifecycle to the section headings, cards and join steps. Treat Make it happen, London's calling and its supporting text/link as one parent reveal, with no nested reveal. Keyboard focus and reduced motion reveal content immediately; preference changes do not replay completed reveals. Default markup remains visible without JavaScript.

Replace the plain shaded flag loading state with a deterministic inline SVG grain/gradient texture applied from the first CSS paint. Keep a textured layer beneath the live Paper shader, then crossfade the two texture overlays after the SDK marks successful initialization. Preserve the approved flag geometry, sizes, overall colour level and shader parameters. Keep the static texture if live rendering fails or is unavailable, and disable the blend transition for reduced motion.

### Travel step, consistent headings and homepage motion

Remove the standalone "Explore the official Breakpoint website" link from Make it happen. Use three next steps in order: get a ticket, plan the London trip, then meet the community before London. Link the new travel step to [the official Breakpoint travel guide](https://solana.com/breakpoint/travel), verified to contain airports, hotels, and visa/ETA guidance. Describe the guide without promising travel bookings or accommodation assistance from Superteam. Keep the official website action in the hero and the existing FAQ references.

Use the same shared h2 font size, weight, line height and tracking for Go further, together; London's calling; and Before you go, including the phone breakpoint. Preserve their existing accent colours and two-line layouts.

The user wants the homepage's noticeable entrance effect restored. Match its 600ms duration, 20px upward movement, `cubic-bezier(.22,1,.36,1)` easing and short 70ms group stagger. Start offscreen section reveals at the homepage's 12% intersection / -8% bottom margin rather than finishing the animation before content is visible. Keep the anti-flicker rule: only prepare offscreen elements; never hide already-visible content or replay completed scroll reveals. Treat each section intro as a single reveal without nested animation. Add the FAQ intro/list to the same lifecycle. For the initial hero entrance, animate the headline at 0ms, supporting details at 180ms and a separate pass wrapper at 360ms, preserving the pass/badge float and hover transforms and immediate navigation/action access. Reduced motion and keyboard focus must show content immediately. The approved flag textures and countdown are unchanged.

### Atomic textured flags and matching navigation

The user still observes a bright plain flag before the moving texture. Replace the separate raw-flag base and fading texture overlays with two complete composites. The initial inline SVG includes the country geometry and grain/darkening filter in the same SVG group, so it cannot paint a raw flag while waiting for a separate texture image. Keep this fallback permanently beneath a separate live host. Only reveal the complete live flag/background/shader composite after the flag image has decoded, the initialized SDK canvas has explicit nonzero dimensions and two animation frames have passed. The SDK initialization marker alone precedes its first resize/draw. Image or shader failure retains the textured fallback; context loss cancels any pending handoff and immediately returns to the fallback. Preserve country geometry, equal sizes, masks, colour opacity/saturation and final shader settings. Reduced motion disables the composite fade and retains the existing paused shader behavior. Preserve the flag-icons MIT notice in the inline copies.

The three static navbars already compute to 13px text. Breakpoint's row instead shifted because its Join Us arrow was a separate flex item without the other pages' whitespace, and the primary CTA's external arrow has a narrower glyph than their forward arrows. Match the Join Us markup and reserve the same one-em arrow slot across the shared CTA styles. Set shared font/weight/line-height/tracking/smoothing explicitly; retain hover/shimmer effects, destinations, responsive menu and 44px controls. Verify actual positions and widths across routes, rather than only their nominal font size.

Run the existing countdown, checklist and deployment compatibility tests. Rebuild with Node 22 when compiled Next.js pages or configuration change; for public HTML/CSS/module refinements, run fresh syntax, CSS parsing and browser checks against the production server. Use the in-app browser to verify banner → page → official ticket/community links; homepage and BuildStation navigation; newcomers FAQ; keyboard operation, Escape/return focus, hidden mobile menu links; responsive layouts; and reduced-motion handling. Inspect screenshots and fix visible layout issues. Check local image loading, console output, static-route response/security headers, canonical metadata, and the sitemap when those change. Leave a local preview open for the user.

### Delayed flag entrance

The user requests that both flags appear later with the hero rather than expose the static-to-live texture handoff. A small head bootstrap hides the entire flags before first paint. Once both decoded, drawn live composites are ready, reveal them together, no earlier than the boarding pass's 360ms entrance delay, using the same 600ms easing. Remove the separate live-composite fade so the finished texture is already present throughout the whole-flag entrance. Retain the approved final colours, masks, equal sizes and moving grain.

If live rendering remains unavailable after 2.5 seconds of visible waiting time, reveal the complete static textured flags and keep that choice for the page visit; late shader loading must not trigger another appearance change. Background time does not consume this budget. Settlement clears the timers and listeners. Without JavaScript the static flags remain visible; reduced motion removes the entrance delay and transition while preserving readiness checks and paused texture motion.
