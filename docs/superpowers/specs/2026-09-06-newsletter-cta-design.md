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

The form reuses the existing newsletter contract: `POST /api/newsletter` with `{ email, group: "default" }`. The existing server route validates the address and subscribes through MailerLite while keeping `MAILERLITE_API_KEY` server-side. A `201` response is success; non-success responses become an inline, user-friendly error.

Because the standalone design prototype is served by a static Python server on port 50336, it will use a clearly scoped local preview mode there and simulate the response without collecting an address. When the component is ported into the Next.js site, the same submit flow calls the existing API route:

- Empty or malformed submissions display an inline error and move focus to the email field.
- A valid preview submission enters a roughly 600 ms loading state and then replaces the form with the existing confirmation instruction to check the subscriber’s email. The submitted address is not displayed or retained by preview mode.
- Editing the field after an error clears the stale error message.
- The form remains usable with keyboard navigation and exposes its status through an accessible live region.

No MailerLite credential or provider call is exposed to the browser; production requests continue through the existing same-origin API route.

## Responsive behavior

On desktop and tablet, the input and button share one horizontal row. On narrow mobile screens they stack vertically, with both controls spanning the available width. Text remains centered and uses a readable maximum line length. The section must not introduce horizontal overflow.

## Motion

Only small control hover and focus transitions are used. The background accent is static in this first iteration. All nonessential transitions are disabled when the visitor prefers reduced motion.

## Verification

Verify the section at desktop, tablet, and mobile widths; confirm keyboard focus styling, invalid-email behavior, success behavior, reduced-motion treatment, and the absence of horizontal overflow. Confirm that the FAQ-to-CTA transition is visually distinct and that the section can lead cleanly into a future dark footer.
