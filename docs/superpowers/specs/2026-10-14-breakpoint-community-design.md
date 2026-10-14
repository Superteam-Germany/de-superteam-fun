# Breakpoint community page and announcement

## Approved direction

The user approved the announcement, navigation order, four-section community page, and hero copy, and requested a local implementation for visual review. Use Superteam Germany's existing dark, cream, and gold identity with subtle Germany-to-London accents. Treat spoken references to "Speed in Germany" as Superteam Germany in this established context.

## Public content

- Announcement: "Join Superteam Germany at Breakpoint" and "London · 15–17 November", linking to `/breakpoint` in the same tab.
- Primary navbar button: "Breakpoint", linking to `/breakpoint`.
- Redesigned navbar order: What We Do, Events, Team, FAQ, Global Hackathon, Join Us, Breakpoint. Global Hackathon is an ordinary internal link to `/buildstation`, immediately after FAQ, on desktop and mobile.
- Hero: "From Germany to Breakpoint." Copy: "Join Superteam Germany in London. Meet the people building Solana, reconnect with the community, and take your next idea beyond Germany."
- Event facts: 15–17 November 2026, Olympia, London. Verified on `https://solana.com/breakpoint` on 2026-10-14.
- Primary page action: "Get your ticket", to `https://luma.com/breakpoint2026`. Secondary action: "Meet the community", to the existing `https://t.me/superteamgermany`. The latter is the general community channel, not a dedicated Breakpoint group.
- Three reasons: meet beyond your usual circle, bring what you are building, and experience it with your community. Describe opportunities rather than promise organised introductions, accommodation, travel, or side events.
- Explicit newcomer invitation: no official Superteam membership required to connect with the community; founders, developers, designers, creators, and curious newcomers are welcome.
- Compact next-step section: secure a conference ticket through the official organiser, connect with the existing community, arrange one's own travel and stay. Keep official programme and ticket-option details on the official site.
- Short native FAQ: newcomers/membership, who the invitation is for, ticket purchase, and where to find programme information.
- Do not publish internal attendance data, recruitment targets, unconfirmed discounts, or unconfirmed community programmes. Do not repeat these private details in repository documentation.

## Visual design

Follow `public/site/home.html` and `public/site/buildstation.html`: Inter, near-black canvas, warm cream type, gold calls to action, generous spacing, rounded photography, and restrained motion. Use real existing community images with a caption identifying the past German gathering. Add the Germany-to-London route as typography; do not manufacture a ticket, route map, skyline, or branded partnership asset. Any official Breakpoint information is linked rather than copied at length.

The announcement is a compact full-width gold bar, with dark text, visible focus, and a naturally wrapping mobile layout. The page is substantially shorter than BuildStation and has no duplicated agenda, attendee counter, or new form.

The user subsequently requested a timer. Add a restrained days/hours/minutes countdown near the dates, labelled "Until 15 November". It targets the start of that calendar day in London (`2026-11-15T00:00:00Z`), not an unverified conference opening time. On 15–17 November show "Breakpoint is here"; from 18 November show "Breakpoint 2026 has wrapped". Never display negative values or a ticking seconds counter. Keep dates visible without JavaScript, hide the timer until calculated, and do not announce minute-by-minute updates to screen readers. A small lilac London accent can reference the verified purple identity of the official Breakpoint hero without changing the site's main brand.

## Implementation boundaries

- Home and BuildStation are static HTML served by `next.config.js` rewrites. Add the Breakpoint route through the same mechanism and give it the existing static-page security headers.
- Add a focused shared campaign navigation stylesheet for the announcement and responsive navigation. Avoid refactoring unrelated homepage interactions.
- Update navigation on home, BuildStation, and the new page. Add the same announcement and replace the stale primary campaign CTA in the legacy React navigation while retaining its ordinary links.
- Remove the policy page's redundant inline navigation, since the root SiteChrome already supplies it; this prevents the new announcement appearing twice there. Leave the policy text as is.
- Add canonical, description, Open Graph/Twitter metadata, and a sitemap entry for `/breakpoint`. Direct static files continue to be noindex through existing `/site/:path*` headers.
- Footer on the new page uses existing site navigation and community links, plus Breakpoint.
- No deployment, public posting, ticket purchasing, or changes to external services.

## Verification

Run the existing checklist and deployment compatibility tests and the Node 22 production build. Use the in-app browser to verify banner → page → official ticket/community links; homepage and BuildStation navigation; newcomers FAQ; keyboard operation, Escape/return focus, hidden mobile menu links; viewport widths 375, 768, 1024, and 1280; and reduced motion. Inspect screenshots and fix visible layout issues. Check local image loading, console output, static-route response/security headers, canonical metadata, and the sitemap. Leave a local preview open for the user.
