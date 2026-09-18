# Homepage social preview design

## Goal

Replace the outdated homepage link preview with a social card that clearly belongs to the redesigned Superteam Germany website. Use the same finished card for the canonical homepage, the legacy `www.superteamde.fun` entry point, and the Superteam Germany Luma calendar.

The Solana Summit Germany page keeps its existing Summit-specific social card.

## Approved visual direction

Use the approved **Option C — Brandenburg Gate** composition:

- Export at 1200 × 630 pixels for the standard Open Graph ratio used by X and Luma.
- Recreate the redesigned homepage hero's near-black canvas with its red and warm-gold corner glow.
- Center the exact navbar asset, `public/images/stLogoWithIcon.svg`, horizontally.
- Position the logo approximately 18 pixels above the mathematical vertical center for optical balance.
- Do not include a tagline or any other supporting copy.
- Place the supplied Brandenburg Gate silhouette low in the background so the Quadriga remains clearly separated from the logo.
- Render the Gate in the same subtle warm-gray treatment used in the approved prototype, with low enough contrast that it supports rather than competes with the logo.
- Preserve a restrained grain texture so the card feels like the current homepage rather than a flat banner.

## Asset strategy

- Create a versioned production asset at `public/images/home-social-card-v1.jpg`.
- Persist a normalized transparent source mask for the exact user-approved Gate silhouette at `design-assets/social/brandenburg-gate-mask-v1.png` so the composition remains reproducible.
- Keep the exact logo and Gate silhouette deterministic; do not ask a generative model to redraw either brand asset.
- Optimize the JPEG for crisp logo edges and gradients while keeping the payload appropriate for link unfurls.
- Use the same image file for Open Graph, X/Twitter metadata, and the Luma calendar preview.

## Website metadata

Update both homepage metadata sources:

- `public/site/home.html`, which currently serves the redesigned root homepage.
- `src/app/layout.tsx`, so the shared Next.js metadata remains consistent.

The metadata should use an absolute canonical image URL on `https://de.superteam.fun`, declare the 1200 × 630 dimensions, use `summary_large_image` for X, and keep the current homepage title and description.

Live verification shows that `https://de.superteam.fun/` and `https://www.superteamde.fun/` already serve the same homepage metadata from this repository. Update the shared metadata once and verify both hosts; no domain or redirect infrastructure change is required.

## Luma calendar

Luma is a separate external calendar-cover update and is not changed by the repository deployment. Upload the same 1200 × 630 Option C export to the Superteam Germany calendar, save the change, and preserve the calendar name and content. Check Luma's result so the logo and Quadriga remain fully visible.

## Cache behavior

Use the new versioned filename instead of overwriting `st-banner.png`. This gives social crawlers a new asset URL and reduces the chance that X, Slack, or other clients continue showing the old image from cache.

## Verification

- Confirm the exported image is exactly 1200 × 630 pixels.
- Confirm the logo is centered and readable at small preview sizes.
- Confirm the Gate does not touch or visually interfere with the logo.
- Confirm `og:image`, `og:image:width`, `og:image:height`, `twitter:card`, and `twitter:image` use the new asset.
- Run the production build and metadata-focused checks.
- After deployment, inspect the live metadata for both homepage domains.
- Verify fresh previews in X and Slack, allowing for platform cache latency.
- Verify the Luma calendar preview uses the same card without an awkward crop.
