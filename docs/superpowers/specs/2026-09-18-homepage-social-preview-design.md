# Homepage social preview design

## Goal

Replace the outdated homepage link preview with a social card that clearly belongs to the redesigned Superteam Germany website. Use the same finished card for the canonical homepage, the legacy `www.superteamde.fun` entry point, and the Superteam Germany Luma calendar.

The Solana Summit Germany page keeps its existing Summit-specific social card.

## Approved visual direction

Use the approved **Option C — Brandenburg Gate** composition:

- Export at 1200 × 630 pixels for the standard Open Graph ratio used by X and Luma.
- Treat `.superpowers/brainstorm/6436-1789727766/social-card-directions.html` and its visible `.direction-c` card at `http://localhost:63984/` as the literal visual source of truth. Do not reinterpret, regenerate, or tune the design by eye.
- Preserve the approved 2:1 artwork without stretching: render it as a 1200 × 600 composition centered vertically inside the 1200 × 630 export, using 15-pixel `#050505` extensions above and below.
- Reproduce the exact Option C background layers over a `#050505` base:

  ```css
  radial-gradient(ellipse 54% 76% at 100% 0%, rgba(255,207,50,.88), rgba(229,34,45,.68) 38%, transparent 74%),
  radial-gradient(ellipse 54% 76% at 0% 100%, rgba(255,207,50,.82), rgba(229,34,45,.66) 38%, transparent 74%)
  ```

  Protect the center with:

  ```css
  radial-gradient(ellipse 67% 70% at 50% 50%, rgba(5,5,5,.98) 0%, rgba(5,5,5,.9) 46%, rgba(5,5,5,.18) 83%, transparent 100%)
  ```

- Preserve the exact grain recipe: an SVG `feTurbulence` using `type="fractalNoise"`, `baseFrequency=".92"`, `numOctaves="2"`, and `stitchTiles="stitch"`; an inner full-frame rectangle at opacity `.24`; the full grain layer at opacity `.24`; and `mix-blend-mode: soft-light`.
- Center the exact navbar asset, `public/images/stLogoWithIcon.svg`. The authoritative final visual bounds measured from the approved browser card are 24.58% from the left, 32.60% from the top, 50.84% wide, and 20.90% high within the 2:1 artwork area. Apply those final bounds directly; do not rerun the prototype's unscaled `max-height: 74px` rule at production size.
- Preserve the logo's exact shadow treatment: `drop-shadow(0 3px 7px rgba(0,0,0,.95)) drop-shadow(0 0 22px rgba(0,0,0,.82))`, scaling the pixel distances and blur radii by the same factor used to scale the approved 518 × 259 browser card to 1200 × 600.
- Do not include a tagline or any other supporting copy.
- Place the supplied Brandenburg Gate silhouette using the prototype's exact `.direction-c .brandenburg-gate` geometry: `left: 50%`, `bottom: -23%`, `width: 77%`, `height: 79%`, `object-fit: contain`, `object-position: center bottom`, and `transform: translateX(-50%)`.
- Render the Gate using the complete prototype treatment: `opacity: .19`, `filter: invert(1) sepia(1) saturate(.35) brightness(.92)`, and `mix-blend-mode: screen`.
- Preserve a restrained grain texture so the card feels like the current homepage rather than a flat banner.

## Asset strategy

- Create a versioned production asset at `public/images/home-social-card-v1.jpg`.
- Persist the exact user-approved 485 × 412 black-on-white Gate raster without modification at `design-assets/social/brandenburg-gate-source-v1.png`.
- Derive `design-assets/social/brandenburg-gate-mask-v1.png` deterministically from that durable source: remove alpha, convert to grayscale, invert the full continuous grayscale range into alpha, and do not threshold. This removes only the white background while preserving every antialiased edge value.
- Build the backdrop deterministically from the approved CSS gradient values. Remove the generated background approximation; no image-generation output belongs in the final Option C pipeline.
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

## Deployment

The corrected website preview requires a new production deployment. After local verification, push the feature work through the repository's established feature branch → `development` → `main` flow. Merging the release into `main` triggers the Vercel production deployment. Wait for that deployment to reach `Ready`, then verify the live metadata and image on both homepage domains before testing social unfurls.

The Luma calendar cover is independent of the website deployment and must still be updated separately by a Luma calendar administrator.

## Verification

- Confirm the exported image is exactly 1200 × 630 pixels.
- Confirm the logo is centered and readable at small preview sizes.
- Confirm the Gate does not touch or visually interfere with the logo.
- Render a deterministic 1200 × 600 reference from the approved Option C CSS and compare it with the central 1200 × 600 region of the final JPEG. Permit only bounded JPEG compression tolerance; any geometry, color-stop, opacity, blend, or asset-placement difference fails the comparison.
- Confirm the 15-pixel top and bottom extensions are `#050505` apart from bounded JPEG compression tolerance and that the 1200 × 600 artwork is centered without stretching.
- Confirm both `public/site/home.html` and `src/app/layout.tsx` use the identical new image URL/path and 1200 × 630 dimensions, and neither homepage metadata implementation references `st-banner.png`.
- Confirm `og:image`, `og:image:width`, `og:image:height`, `twitter:card`, and `twitter:image` use the new asset.
- Confirm all Summit metadata and `summit-social-card-v1.jpg` references are unchanged.
- Run the production build and metadata-focused checks.
- Confirm the feature work reaches `main`, the corresponding Vercel production deployment reaches `Ready`, and the deployed commit matches the intended release.
- After deployment, inspect the live metadata and image for both homepage domains.
- Verify fresh previews in X and Slack, allowing for platform cache latency.
- Verify the Luma calendar preview uses the same card without an awkward crop.
