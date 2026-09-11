# Hackathon Resources Accordion Design

## Scope

Redesign the Resources section in `.superpowers/brainstorm/83126-1788606365/global-hackathon.html`. Keep the approved Count Yourself In layout unchanged, but remove its disabled orientation-form placeholder button as requested.

## Direction

- **Archetype:** dark editorial utility panel
- **Density:** comfortable when open, compact when collapsed
- **Surface:** one contained glass panel with six adjoining accordion segments
- **Type mood:** direct, structured, technical
- **Motion:** smooth and restrained, using the landing page's existing accordion easing

The Resources section should feel related to the horizontal What We Do accordion on the main landing page without becoming a literal copy. It keeps the hackathon page's black, cream, and gold palette.

## Desktop Layout

Display the six resource categories as horizontal accordion segments within one panel. Each collapsed segment is a narrow vertical rail containing its number and title. The selected segment expands to occupy the remaining width and reveals its description and resource links.

Tech Resources is selected initially because it contains the broadest set of links and demonstrates how the control works. Opening another category closes the previous category, keeping the layout compact and preventing visual overload.

## Mobile Layout

Below 900px, switch the same six controls to a vertical accordion. Collapsed rows show the category number, title, and expand indicator. The selected row expands below its trigger. Only one category remains open at a time.

## Interaction and Accessibility

- Use semantic buttons for every category trigger.
- Expose state with `aria-expanded` and connect each trigger to its panel with `aria-controls`.
- Apply `hidden` to every collapsed panel so its links leave the focus order and accessibility tree; synchronize the attribute with the active state.
- Support click/tap on every viewport; desktop may also preview a category on hover, matching the landing-page interaction.
- Keep focus rings visible and preserve the existing external-link safety attributes.
- Respect `prefers-reduced-motion` by removing the flex/height animation.
- Keep all resource links in the document so they remain keyboard-accessible when their panel is expanded.

## Visual Treatment

- Use one outer glass surface instead of six separate cards.
- Give the active panel a subtle warm gradient and low-opacity inset highlight.
- Use the gold accent only for indices, indicators, and link arrows.
- Separate collapsed rails with fine translucent rules; avoid nested card borders and heavy shadows.
- Preserve generous section whitespace and the current Resources heading and copy.

## Verification

- Verify the initial and changed active states at 1280px.
- Verify the vertical accordion at 390px and 768px.
- Confirm there is no horizontal overflow at 375px, 768px, and 1280px.
- Confirm only one panel is expanded, `aria-expanded` follows the visual state, collapsed links are not keyboard-focusable, and all links retain `target="_blank" rel="noreferrer"`.
- Confirm the page reports no new runtime errors.
