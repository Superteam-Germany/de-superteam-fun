# Hackathon title and post-support design

## Goal

Make the Global Hackathon page's section hierarchy consistent and show that Superteam Germany support continues after submission.

## Design

- Use the existing shared major-section title scale for `Count yourself in.` so it matches `Why build with Superteam Germany?`, `How BuildStation works.`, `Resources.`, and `Frequently asked questions.`
- Add a fifth `Post-Hackathon Support` item to the existing BuildStation step control rather than creating another page section.
- Explain the ongoing support in one concise paragraph: grant and accelerator guidance, launch amplification, membership review, and relevant ecosystem introductions.
- Increase the desktop step component height enough to keep five controls comfortable. Preserve the existing stacked mobile behavior.
- Keep BuildStation dates on the linked Luma page and avoid adding another dated schedule to this page.

## Interaction and accessibility

- Reuse the existing real buttons, hover, focus, and click activation behavior.
- Preserve the current tab semantics and reduced-motion handling.
- Keep all controls at least 40 pixels tall on mobile.

## Verification

- Confirm all five BuildStation controls activate the matching title and description.
- Check the section-title scale in the source.
- Review the layout at approximately 390, 768, and 1280 pixels wide.
