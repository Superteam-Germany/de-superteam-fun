# Homepage Footer Design

## Goal

Finish the redesigned homepage with a compact, Australia-inspired footer that preserves Superteam Germany’s current brand and useful links while improving information hierarchy.

## Structure

The footer follows the off-white newsletter CTA and returns the page to a near-black background. Its main row is a responsive four-column grid:

1. **Brand:** the existing Superteam Germany logo and a short line about building Solana’s future in Germany.
2. **Navigate:** What We Do, Events, Team, Partners, and FAQ, linking to their homepage anchors.
3. **Resources:** Global Hackathon, Resources & Docs, and Superteam Global.
4. **Connect:** visible text links for X, Discord, Telegram, and YouTube, each carrying a small external-link arrow.

“Support for Your Project” is removed. No additional destinations are invented.

## Bottom row

A thin divider separates the primary grid from a small legal row. The left side reads “© 2026 Superteam Germany. All rights reserved.” The right side retains a quiet Privacy Policy link so privacy information remains accessible to newsletter subscribers without competing with the footer navigation.

## Visual treatment

The footer uses the site’s near-black canvas, warm-white text, muted secondary copy, thin translucent dividers, and restrained gold hover/focus accents. It borrows Superteam Australia’s clear grouped navigation rather than copying its exact styling. The section has no decorative animation; the transition from the off-white newsletter should feel crisp and intentional.

## Responsive and accessible behavior

Desktop uses the four-column grid with a wider brand column. Tablet uses two columns. Mobile becomes one column, keeps generous but reduced spacing, and stacks the copyright and privacy link. All external links open in a new tab with `rel="noreferrer"`, and all links have visible focus states.

## Prototype destinations

- Global Hackathon: `https://de.superteam.fun/buildstation`
- Resources & Docs: `https://superteamde.gitbook.io/superteamde`
- Superteam Global: `https://superteam.fun`
- X: `https://x.com/SuperteamDE`
- Discord: `https://discord.gg/CVwJhHgFfF`
- Telegram: `https://t.me/superteamgermany`
- YouTube: `https://www.youtube.com/@SuperteamDE`
- Privacy Policy: `https://de.superteam.fun/policy`

The full production implementation can use relative internal URLs when the prototype is ported into the Next.js application.

## Verification

Verify desktop, tablet, and mobile grids; correct link labels and destinations; the 2026 copyright; removal of “Support for Your Project”; visible keyboard focus; and no horizontal overflow.
