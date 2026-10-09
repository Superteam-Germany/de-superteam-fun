import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(
  new URL("../public/site/buildstation.html", import.meta.url),
  "utf8",
);

test("places the submission checklist between the process and resources sections", () => {
  const processIndex = page.indexOf('id="how-it-works"');
  const checklistIndex = page.indexOf('id="submission-checklist"');
  const resourcesIndex = page.indexOf('id="resources"');

  assert.ok(processIndex >= 0, "How BuildStation works section must exist");
  assert.ok(checklistIndex > processIndex, "checklist must follow the process section");
  assert.ok(resourcesIndex > checklistIndex, "resources must follow the checklist");
});

test("renders the twelve approved submission checks in canonical category order", () => {
  const rows = [...page.matchAll(/<li class="checklist-item" data-checklist-id="([^"]+)">([\s\S]*?)<\/li>/g)];
  const expected = [
    { id: "one-liner", category: "Pitch", question: "Are your one-liner and project blurb clear and reviewed by someone outside the team?", guidance: ["Your one-liner should explain what the product does in plain English. Your project blurb should add who it is for and why it matters.", "Ask someone unfamiliar with the project to explain it back to you. Avoid leading with buzzwords or a list of technologies."], resources: ["https://x.com/JosipVolarevic2/status/2096885934532768013?s=20"] },
    { id: "market", category: "Pitch", question: "Have you explained your target users, validation, business model, and go-to-market plan?", guidance: ["Explain whose problem you are solving, what evidence supports demand, how you plan to reach users, and how the product could become sustainable.", "Include genuine feedback or traction where available and clearly label assumptions. A large market-size number alone does not demonstrate demand for your product."], resources: ["https://blog.colosseum.com/perfecting-your-hackathon-submission/"] },
    { id: "presentation-video", category: "Pitch", question: "Have you recorded and reviewed your presentation video, keeping it under two minutes?", guidance: ["Use the presentation video to explain what you are building, why it matters, and why your team is suited to build it.", "Have someone review the story before recording. If you use slides, make sure they are readable. Watch the uploaded version to check the audio, playback, and final length."], resources: ["https://x.com/colosseum/status/2103525773529534648", "https://x.com/JosipVolarevic2/status/2106374392166973692?s=20"] },
    { id: "mvp", category: "Product &amp; Demo", question: "Does your MVP work end to end, and can judges access and try it?", guidance: ["Test the main product flow and provide a working product link. For developer tools or infrastructure, provide a reproducible example instead.", "Include test credentials where necessary and keep the relevant services running during judging. Avoid broken deployments, inaccessible environments, or a waitlist in place of a working product."], resources: [] },
    { id: "demo-video", category: "Product &amp; Demo", question: "Have you recorded a separate product-demo video, keeping it under three minutes and showing the working product?", guidance: ["The product demo should be separate from the presentation video. Demonstrate the core product flow and provide enough technical context for judges to understand how it works.", "Show the actual product rather than recording a second pitch. Clearly identify anything that is mocked, planned, or unfinished. The demo must be no longer than three minutes."], resources: ["https://colosseum.com/hackathon"] },
    { id: "repository", category: "Code", question: "Is your repository up to date, documented, and accessible to the reviewers?", guidance: ["Link the correct repository, push the latest relevant code, and explain the setup and any important branches in the README.", "Private repositories are allowed, but access must be granted to <code>hackathon@colosseum.com</code>. Do not assume judges will contact you after discovering that the repository is locked."], resources: ["https://colosseum.com/hackathon"] },
    { id: "team", category: "Team &amp; Profile", question: "Is every teammate registered for the current hackathon and included in the project submission?", guidance: ["Every teammate must register for the current competition, and the team leader must include the complete team in the project submission.", "Check that everyone’s details, background, and role are accurate. Do not assume that having an existing Colosseum account means someone is registered for the current hackathon."], resources: ["https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf"] },
    { id: "germany-country", category: "Team &amp; Profile", question: "Have you selected Germany as your team’s primary base country on Colosseum?", guidance: ["Check the team location in Colosseum before submitting. Registering through the Germany referral link does not automatically set the country.", "Germany must be selected for the team to be recognized as Germany-based and to qualify for the regional Earn track."], resources: [] },
    { id: "eligibility", category: "Final Checks", question: "Have you checked your eligibility, disclosed previous work, and completed every required submission field in English?", guidance: ["Review the current eligibility rules, including age, restricted jurisdictions, employer or contractual obligations, previous work, and the one-team/one-product restriction.", "Disclose relevant work completed before the hackathon and clearly distinguish it from work completed during the competition. Complete every required field accurately; all submitted content must be in English."], resources: ["https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf"] },
    { id: "links", category: "Final Checks", question: "Have you tested every submitted link and verified that reviewers have the necessary access permissions?", guidance: ["Test the exact links pasted into the submission form—not only the versions saved in your bookmarks.", "Open product, video, repository, and document links while logged out. Verify access to private repositories separately. Ideally, ask someone outside the team to check all materials as well."], resources: ["https://blog.colosseum.com/perfecting-your-hackathon-submission/"] },
    { id: "colosseum-submission", category: "Final Checks", question: "Have you completed the final Colosseum submission before the deadline and confirmed its submitted status—not just saved a draft?", guidance: ["The team leader must complete the final submission before the deadline.", "Review the project information and uploaded materials, confirm that the entry shows as submitted, and save the confirmation. Do not stop after registering, creating a project, or saving a draft. Afterwards, monitor the contact inbox included in the submission."], resources: ["https://colosseum.com/legal/Crypto%20World%27s%20Fair%20Hackathon%20Rules.pdf"] },
    { id: "germany-track", category: "Final Checks", question: "Have you submitted the same project to the Superteam Germany listing on Earn?", guidance: ["Submit the same project to the Superteam Germany listing on Earn in addition to your Colosseum submission.", "The project must be built on Solana, comply with the global hackathon rules, and meet the regional eligibility requirements, including having Germany selected as the country. Check the Earn deadline and confirm the separate submission.", "Teams building for the Machine Economy can also submit their project separately to the optional peaq Germany side track."], resources: ["https://superteam.fun/earn/listing/colosseum-crypto-worlds-fair-hackathon-superteam-germany-track/", "https://superteam.fun/earn/listing/build-solutions-advancing-the-machine-economy-with-peaq"] },
  ];

  assert.deepEqual(rows.map(row => row[1]), expected.map(item => item.id));
  assert.equal(new Set(rows.map(row => row[1])).size, 12);
  expected.forEach((item, index) => {
    const block = rows[index][2];
    assert.ok(block.includes(`<span class="checklist-category" aria-hidden="true">${item.category}</span>`), `${item.id} category`);
    assert.ok(block.includes(`<span class="checklist-question-text">${item.question}</span>`), `${item.id} question`);
    item.guidance.forEach(copy => assert.ok(block.includes(copy), `${item.id} guidance: ${copy}`));
    item.resources.forEach(url => assert.ok(block.includes(`href="${url}"`), `${item.id} resource: ${url}`));
  });
});

test("uses twelve-item progress semantics and stable persisted IDs", () => {
  assert.match(page, /Twelve final checks before you submit/);
  assert.match(page, /id="checklist-score">0 \/ 12</);
  assert.match(page, /aria-valuemax="12"/);
  assert.match(page, /0 of 12 submission checks completed\./);
  assert.match(page, /data-checklist-id="germany-country"/);
  assert.match(page, /const checklistStorageKey="superteam-de-buildstation-checklist-v1"/);
  assert.match(page, /stored\.filter\(id=>validChecklistIds\.has\(id\)\)/);
  assert.match(page, /function saveChecklistProgress\(\)\{try\{localStorage\.setItem/);
  assert.match(page, /function restoreChecklistProgress\(\)\{\s*try\{/);
});

test("includes the approved completion asset and official deadline", () => {
  assert.match(page, /\/images\/new-site\/summit-gold-aventador-pixel\.png/);
  assert.match(page, /2026-10-12T23:59:00-07:00/);
  assert.doesNotMatch(page, /2026-10-13T00:00:00\+02:00/);
});

test("persists progress and celebrates only a user-created final transition", () => {
  assert.match(page, /const checklistStorageKey="superteam-de-buildstation-checklist-v1"/);
  assert.match(page, /localStorage\.getItem\(checklistStorageKey\)/);
  assert.match(page, /localStorage\.setItem\(checklistStorageKey/);
  assert.doesNotMatch(page, /canvas-confetti@1\.9\.3/);
  assert.match(page, /id="checklist-confetti-canvas"/);
  assert.match(page, /function runChecklistConfetti\(\)/);
  assert.match(page, /checklistConfettiCanvas\.dataset\.running="true"/);
  assert.match(page, /previousChecklistCount===checklistItems\.length-1/);
  assert.match(page, /completedCount===checklistItems\.length/);
  assert.match(page, /prefers-reduced-motion: reduce/);
  assert.match(page, /panel\.hidden=!active/);
});

test("uses a compact gold checklist treatment and a restrained left-edge car", () => {
  assert.match(page, /\.checklist-section \{[^}]*padding-top:76px;[^}]*padding-bottom:88px;/);
  assert.match(page, /\.checklist-progress-value \{[^}]*background:var\(--gold\);/);
  assert.match(page, /\.checklist-row \{[^}]*min-height:62px;/);
  assert.match(page, /\.checklist-row \{[^}]*grid-template-columns:44px minmax\(0,1fr\);/);
  assert.match(page, /\.checklist-check \{[^}]*width:44px;[^}]*height:44px;/);
  assert.match(page, /\.checklist-category \{[^}]*color:var\(--gold\);/);
  assert.match(page, /\.checklist-item\.complete \.checklist-question-text \{[^}]*color:rgba\(246,239,227,\.68\);[^}]*text-decoration:line-through;/);
  assert.doesNotMatch(page, /\.checklist-item\.complete \.checklist-question \{/);
  assert.match(page, /\.checklist-lambo \{[^}]*left:0;[^}]*width:clamp\(170px,16vw,230px\);/);
  assert.match(page, /34%,68% \{ transform:translateX\(-38%\); \}/);
});

test("centers a fuller side-confetti celebration for about five seconds without extending the car", () => {
  assert.match(page, /for\(let index=0;index<10;index\+=1\)/);
  assert.match(page, /y:height\*\(\.48\+Math\.random\(\)\*\.08\)/);
  assert.match(page, /elapsed<3400&&now-lastBurst>200/);
  assert.match(page, /elapsed<5100&&particles\.length/);
  assert.match(page, /classList\.remove\("active"\),5200/);
  assert.match(page, /animation:checklist-lambo-drive 2\.8s/);
});
