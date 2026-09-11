# Design QA — Superteam Germany mobile hero refinement

Date: 2026-09-09

## Source visual truth

- User-provided Superteam Brazil reference, captured in Brave at a responsive `425 × 751` CSS-pixel viewport: `.superpowers/brainstorm/83126-1788606365/qa/brazil-reference-mobile-425x751.png`.
- Reference qualities used: six visible cards, one wide anchor image, staggered smaller cards, generous separation, and a collage that uses the available mobile width without feeling compressed.

## Implementation evidence

- Current implementation captures: `.superpowers/brainstorm/83126-1788606365/qa/germany-mobile-425x751-final.png` and `.superpowers/brainstorm/83126-1788606365/qa/germany-mobile-375x751-final.png`.
- The final captures contain only the emulated page viewport, so card edges and spacing can be judged without browser chrome.
- State: page top, default theme, no hover or focus, background motion enabled.
- Additional live check: the hero remained complete and unclipped at `375 × 751` CSS pixels.
- Accessibility tree confirms six hero images on mobile and exposes the Lamborghini as a link named `Explore Solana Summit Germany`.

## Comparison

### Full-view comparison

The implementation preserves the reference hierarchy—brand and primary action, centered headline, community CTA, then the photo composition—while retaining the Germany page's black, red, and gold visual language. At both 425 and 375 pixels wide, the hero remains complete, centered, and unclipped.

### Focused hero-collage comparison

The revised mobile composition hides only the seventh desktop card and positions six cards inside a fluid `min(385px, calc(100vw - 40px))` frame. At 425 pixels, the measured card geometry now closely follows the Brazil reference: top row `81 / 196 / 81` pixels and bottom row `123 / 135 / 112` pixels. The right column has a clear vertical gap, and the bottom-center and bottom-right cards no longer overlap.

## Fidelity surfaces

- Typography: Germany's established display face and headline treatment are intentionally preserved; the Brazil page is a composition reference, not a typography target.
- Spacing and layout: six-card mobile mosaic, 20-pixel collage gutters at 425 pixels, staggered top cards, and explicit separation between the right-side cards.
- Color: existing Germany black/red/gold palette is preserved.
- Image quality: existing Germany event photography remains `object-fit: cover`; no generated placeholders were introduced.
- Copy: hero copy is unchanged.
- Desktop: the seven-card collage remains unchanged outside the mobile media query.
- Reduced motion: existing reduced-motion behavior remains intact.

## Findings and iteration history

1. P1 — First mobile grid attempt collapsed side cards into narrow vertical slivers. Fixed by resetting inherited insets and using explicit percentage-based positioning.
2. P2 — The follow-up six-card version still read as too centered and compressed. Fixed by widening the frame from 356 to 384 pixels, reducing outer gutters to 12 pixels, increasing inter-card gaps to about 4%, increasing the frame height to 270 pixels, and staggering the top side cards.
3. P1 — The embedded tweet stylesheet also targeted the generic `.tile` class, adding a `16px 40px` margin to every hero card. This shifted both rows toward the center and caused the right-side pair to collide. Fixed with a scoped `.collage .tile { margin: 0; }` reset.
4. P2 — The mobile headline still consumed more vertical space than the reference. Reduced it to a fluid `36–41px` range with a 360-pixel maximum width.
5. Recheck — Six cards are individually legible, use the full available width, and remain fully visible at both 425 and 375 pixels. No remaining P0, P1, or P2 visual issues observed.
6. P3 — The exact image subjects and absence of Brazil-style statistic cards are intentional; the Germany hero keeps its own event photography and content model.

## Interaction and runtime checks

- `Explore the Summit` opens the Summit page in a new tab with `target="_blank"` and `rel="noreferrer"`.
- The Lamborghini Easter egg uses the same new-tab behavior.
- Brave showed three errors and six warnings from external favicon, Luma/Sentry, and wallet-extension resources. No new local JavaScript runtime error was observed.

final result: passed
