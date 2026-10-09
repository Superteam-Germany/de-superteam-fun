# BuildStation Submission Checklist Design

## Scope

Maintain an interactive Colosseum submission-readiness checklist on the production BuildStation page in `public/site/buildstation.html`, directly after **How BuildStation works** and before **Resources**. The section must feel native to Superteam Germany rather than copy Superteam Türkiye's visual design.

This checklist is specifically for Germany-primary teams building with Superteam Germany. International teammates may participate, but a team may only select Germany if Germany accurately represents its primary base. Global teams that are not Germany-primary may still use the guidance, but the Germany-specific completion state is not intended for them.

The page countdown uses the official Crypto World's Fair deadline: October 12, 2026 at 11:59 PM Pacific Daylight Time (`2026-10-12T23:59:00-07:00`).

## Section Copy and Progress

- **Heading:** Is your submission ready?
- **Introduction:** Twelve final checks before you submit. Tick them off as you go—your progress is saved in this browser.
- **Default progress label:** READY
- **Initial progress:** 0 / 12
- **Completed progress:** READY TO SUBMIT and 12 / 12
- The completion celebration occurs only on a user-created 11/12 to 12/12 transition.

## Categorization and Layout

Keep the checklist as one compact panel. Reorder related checks together and place a short gold category label before every visible question. Do not add separate category cards or divider rows.

The five labels are `PITCH`, `PRODUCT & DEMO`, `CODE`, `TEAM & PROFILE`, and `FINAL CHECKS`. Use “Final Checks” instead of “Submission” because the entire component is already a submission checklist.

Each category label is visually available but `aria-hidden="true"`; the accordion trigger's accessible name remains the complete question without a repeated category prefix.

## Canonical Checklist Order and Content

### 1. Pitch — Are your one-liner and project blurb clear and reviewed by someone outside the team?

Your one-liner should explain what the product does in plain English. Your project blurb should add who it is for and why it matters.

Ask someone unfamiliar with the project to explain it back to you. Avoid leading with buzzwords or a list of technologies.

Resource: [Josip's guide to writing a one-liner](https://x.com/JosipVolarevic2/status/2096885934532768013?s=20)

### 2. Pitch — Have you explained your target users, validation, business model, and go-to-market plan?

Explain whose problem you are solving, what evidence supports demand, how you plan to reach users, and how the product could become sustainable.

Include genuine feedback or traction where available and clearly label assumptions. A large market-size number alone does not demonstrate demand for your product.

Resource: [Colosseum's submission guidance](https://blog.colosseum.com/perfecting-your-hackathon-submission/)

### 3. Pitch — Have you recorded and reviewed your presentation video, keeping it under two minutes?

Use the presentation video to explain what you are building, why it matters, and why your team is suited to build it.

Have someone review the story before recording. If you use slides, make sure they are readable. Watch the uploaded version to check the audio, playback, and final length.

Resources:

- [Colosseum's event-specific announcement](https://x.com/colosseum/status/2103525773529534648)
- [Josip's advice on the first pitch-deck slide](https://x.com/JosipVolarevic2/status/2106374392166973692?s=20)

### 4. Product & Demo — Does your MVP work end to end, and can judges access and try it?

Test the main product flow and provide a working product link. For developer tools or infrastructure, provide a reproducible example instead.

Include test credentials where necessary and keep the relevant services running during judging. Avoid broken deployments, inaccessible environments, or a waitlist in place of a working product.

### 5. Product & Demo — Have you recorded a separate product-demo video, keeping it under three minutes and showing the working product?

The product demo should be separate from the presentation video. Demonstrate the core product flow and provide enough technical context for judges to understand how it works.

Show the actual product rather than recording a second pitch. Clearly identify anything that is mocked, planned, or unfinished. The demo must be no longer than three minutes.

Resource: [Colosseum submission requirements and FAQ](https://colosseum.com/hackathon)

### 6. Code — Is your repository up to date, documented, and accessible to the reviewers?

Link the correct repository, push the latest relevant code, and explain the setup and any important branches in the README.

Private repositories are allowed, but access must be granted to `hackathon@colosseum.com`. Do not assume judges will contact you after discovering that the repository is locked.

Resource: [Colosseum submission requirements and FAQ](https://colosseum.com/hackathon)

### 7. Team & Profile — Is every teammate registered for the current hackathon and included in the project submission?

Every teammate must register for the current competition, and the team leader must include the complete team in the project submission.

Check that everyone's details, background, and role are accurate. Do not assume that having an existing Colosseum account means someone is registered for the current hackathon.

Resource: [Official Crypto World's Fair rules](https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf)

### 8. Team & Profile — Have you selected Germany as your team's primary base country on Colosseum?

Check the team location in Colosseum before submitting. Registering through the Germany referral link does not automatically set the country.

Germany must be selected for the team to be recognized as Germany-based and to qualify for the regional Earn track. Only select Germany if it accurately represents the team's primary base.

### 9. Final Checks — Have you checked your eligibility, disclosed previous work, and completed every required submission field in English?

Review the current eligibility rules, including age, restricted jurisdictions, employer or contractual obligations, previous work, and the one-team/one-product restriction.

Disclose relevant work completed before the hackathon and clearly distinguish it from work completed during the competition. Complete every required field accurately; all submitted content must be in English.

Resource: [Official Crypto World's Fair rules](https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf)

### 10. Final Checks — Have you tested every submitted link and verified that reviewers have the necessary access permissions?

Test the exact links pasted into the submission form—not only the versions saved in your bookmarks.

Open product, video, repository, and document links while logged out. Verify access to private repositories separately. Ideally, ask someone outside the team to check all materials as well.

Resource: [Colosseum's submission guidance](https://blog.colosseum.com/perfecting-your-hackathon-submission/)

### 11. Final Checks — Have you completed the final Colosseum submission before the deadline and confirmed its submitted status—not just saved a draft?

The team leader must complete the final submission before the deadline.

Review the project information and uploaded materials, confirm that the entry shows as submitted, and save the confirmation. Do not stop after registering, creating a project, or saving a draft. Afterwards, monitor the contact inbox included in the submission.

Resource: [Official Crypto World's Fair rules](https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf)

### 12. Final Checks — Have you submitted the same project to the Superteam Germany listing on Earn?

Submit the same project to the Superteam Germany listing on Earn in addition to your Colosseum submission.

The project must be built on Solana, comply with the global hackathon rules, and meet the regional eligibility requirements, including having Germany selected as the country. Check the Earn deadline and confirm the separate submission.

Teams building for the Machine Economy can also submit their project separately to the optional peaq Germany side track.

Resources:

- [Superteam Germany listing on Earn](https://superteam.fun/earn/listing/colosseum-crypto-worlds-fair-hackathon-superteam-germany-track/)
- [Optional: peaq Machine Economy side track](https://superteam.fun/earn/listing/build-solutions-advancing-the-machine-economy-with-peaq)

## Visual Treatment

Use the existing full-width dark section, shell width, page typography, bordered checklist panel, gold progress treatment, adjoining rows, and fine separators.

Each row contains:

1. A native checkbox with an accessible label and at least a 44 by 44 CSS-pixel label target.
2. A semantic accordion button with the category label, full question, and decorative plus/minus glyph.
3. A details region linked through `aria-expanded`, `aria-controls`, and `aria-labelledby`.

Category labels use the existing gold token, uppercase mono styling, and sufficient contrast against the dark background. Subdued guidance, links, and completed text must remain readable at WCAG AA contrast for their applicable text size. Completed questions retain the existing checked and restrained strike-through treatment.

## Interaction and Accessibility

- Enter or Space activates the focused checkbox or accordion button through native control behavior.
- Every interactive element has a visible focus indicator.
- Activating a closed accordion opens it and closes any other open row. Activating the open row closes it.
- The plus/minus glyph is `aria-hidden="true"`.
- Closed details use `hidden`, removing their content and links from the accessibility tree and keyboard order.
- The progress track retains `role="progressbar"`, an accessible label, `aria-valuemin="0"`, `aria-valuemax="12"`, and a synchronized `aria-valuenow`.
- A polite live text reports “N of 12 submission checks completed” after each checkbox change.
- Category labels do not alter the question's accessible name.

## Persistence and Migration

- Retain the versioned key `superteam-de-buildstation-checklist-v1` because existing items already use stable semantic IDs rather than row positions.
- Preserve the existing semantic IDs when rows are reordered: `one-liner`, `market`, `presentation-video`, `mvp`, `demo-video`, `repository`, `team`, `eligibility`, `links`, `colosseum-submission`, and `germany-track`.
- Add the new stable ID `germany-country`; it starts unchecked for existing users.
- On restore, accept only an array of known string IDs, discard duplicates and unknown IDs, and ignore malformed values.
- Wrap reads and writes in exception handling so blocked or unavailable storage does not break the current page session.
- Never derive state from row position.
- Restoring 12/12 must not replay the completion celebration.

## Completion Celebration

On a user-created transition from 11/12 to 12/12:

- Fire gold, cream, and white confetti inward from the vertical middle of both sides for approximately five seconds.
- Drive the existing pixel Lamborghini (`/images/new-site/summit-gold-aventador-pixel.png`) partway in from the left and return it off the left edge after approximately 2.8 seconds.
- Change the progress label to `READY TO SUBMIT`.
- Allow the celebration to replay after a later uncheck and recheck.
- Suppress confetti and vehicle motion when `prefers-reduced-motion: reduce` is active.

The confetti uses the existing local canvas implementation and no third-party runtime dependency.

## Responsive Requirements

- At 375, 768, and 1280 CSS pixels wide, all category labels and questions wrap without horizontal overflow.
- At 200% browser zoom, controls reflow without clipped text or horizontal page scrolling.
- Checkbox and accordion-button targets remain at least 44 by 44 CSS pixels.
- The desktop Lamborghini keeps the existing `clamp(170px,16vw,230px)` width and left-edge peek from `translateX(-110%)` to `translateX(-38%)`.
- The existing mobile rule may suppress the decorative celebration to protect content and performance; checklist completion must remain fully functional.

## Countdown

Use:

```js
const deadline = new Date("2026-10-12T23:59:00-07:00");
```

This equals October 13 at 08:59 in Berlin while daylight-saving time is active. Tests verify the exact ISO instant or epoch rather than a timezone-dependent delta from the prior implementation. The countdown clamps at zero after the deadline.

## Verification

- Confirm all 12 semantic IDs, category labels, questions, explanations, and resource links match the canonical order.
- Confirm old saved IDs survive the reorder and `germany-country` starts unchecked.
- Confirm malformed, duplicated, and unknown stored IDs do not break or inflate progress.
- Confirm checkbox and accordion keyboard behavior, visible focus, accessible names, expanded states, details focus order, progress values, and live announcements.
- Confirm only one details region is open at a time.
- Confirm a stored 12/12 state does not replay the celebration.
- Confirm the 11/12 to 12/12 transition triggers confetti and the Lamborghini once per transition.
- Confirm reduced-motion mode suppresses celebration motion.
- Confirm no horizontal overflow at 375, 768, and 1280 CSS pixels and at 200% zoom.
- Confirm the deadline by its exact ISO instant or epoch.
- Run the production build and confirm no new runtime errors.
