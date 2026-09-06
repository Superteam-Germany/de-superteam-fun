# Newsletter CTA Design

## Goal

End the redesigned homepage with one focused conversion action: subscribing to the Superteam Germany newsletter. Telegram and other social destinations remain available elsewhere on the site and in the footer, so they will not compete with the newsletter in this section.

## Placement and visual direction

The section appears immediately after the black FAQ and before the future footer. It uses the site's warm off-white canvas to create a clear transition out of the FAQ and to continue the established dark/light section rhythm.

The composition is centered and intentionally spacious. A restrained black, red, and gold accent provides a German visual signature without recreating the animated hero or using literal flag stripes. The treatment must remain subtle enough that the email form is the focal point.

## Content hierarchy

1. A large headline: “Stay close to what’s happening.”
2. Supporting copy: “Get upcoming events, opportunities, and community updates from Superteam Germany.”
3. A prominent email subscription form containing an explicit email label, email input, and “Subscribe” button.
4. Quiet reassurance text: “No spam. Unsubscribe anytime.”

The final wording remains editable during the later site-wide content pass, but the hierarchy and relative emphasis are fixed for this iteration.

## Interaction and states

The prototype will demonstrate the complete interaction locally without making a real network request:

- Empty or malformed submissions display an inline error and move focus to the email field.
- A valid submission enters a roughly 600 ms simulated loading state and then replaces the form with a success confirmation. The submitted address is not displayed or retained.
- Editing the field after an error clears the stale error message.
- The form remains usable with keyboard navigation and exposes its status through an accessible live region.

The production implementation will connect the same interface to the existing newsletter provider or endpoint after that integration is identified. No subscriber data will be collected by the local prototype.

## Responsive behavior

On desktop and tablet, the input and button share one horizontal row. On narrow mobile screens they stack vertically, with both controls spanning the available width. Text remains centered and uses a readable maximum line length. The section must not introduce horizontal overflow.

## Motion

Only small control hover and focus transitions are used. The background accent is static in this first iteration. All nonessential transitions are disabled when the visitor prefers reduced motion.

## Verification

Verify the section at desktop, tablet, and mobile widths; confirm keyboard focus styling, invalid-email behavior, success behavior, reduced-motion treatment, and the absence of horizontal overflow. Confirm that the FAQ-to-CTA transition is visually distinct and that the section can lead cleanly into a future dark footer.
