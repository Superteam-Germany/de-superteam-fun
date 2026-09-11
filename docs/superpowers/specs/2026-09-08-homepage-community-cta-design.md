# Homepage Community CTA Design

## Goal

Clarify the homepage action hierarchy without making the navigation feel crowded. Telegram community membership is the primary navbar action, the Global Hackathon remains visibly promoted as navigation, and the hero builder count stays a quiet secondary community entry point.

## Navbar

- Keep the existing navigation order through FAQ.
- Add `Global Hackathon` immediately after FAQ as a regular text link to `global-hackathon.html`.
- Distinguish the Global Hackathon link with a persistent thin white underline and the same restrained text shimmer used by the existing navigation on hover. It must not use a pill-shaped background.
- Add `Join Us ↗` as the only pill-shaped navbar CTA on the far right. It links to `https://t.me/superteamgermany` in a new tab.
- Preserve the current header spacing and ensure both actions remain readable without wrapping at supported desktop widths.

## Hero community pill

- Keep the current Telegram destination and visible copy, `Join 1,000+ builders ↗`.
- Restore its earlier subtle visual treatment: translucent near-black background, neutral low-contrast border, compact typography, and no gold-filled or gold-outlined resting state.
- Retain a restrained hover response and visible gold keyboard focus ring so the pill is discoverably interactive without competing with the navbar CTA.

## Final CTA

Keep the simplified secondary link text, `Join our Telegram community ↗`, beneath the newsletter form. Do not restore the `Prefer real-time updates?` prefix.

## Accessibility and motion

- Use real anchors for every navigation action.
- Keep minimum 40-pixel touch height for pill CTAs.
- Provide visible `:focus-visible` treatments.
- Disable decorative shimmer and movement when `prefers-reduced-motion: reduce` is active.

## Verification

Verify the desktop navbar hierarchy visually, confirm all three Telegram links use the intended destination, confirm the Global Hackathon link opens the local page, check keyboard focus styles, confirm reduced-motion coverage, and ensure the navbar remains usable at narrower responsive widths.
