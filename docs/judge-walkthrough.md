# Judge Walkthrough

Use this fast path to evaluate the first reply without mistaking the shortcut for the whole product scope.

## 1. Read The Thesis

Open `START_HERE.md`, then `JUDGE_BRIEF.md`, then `README.md`.

Unstuck Coach is an external executive-function accessibility layer for whole people when intention, care, context, body state, or closure fail to become action.

It is not an ADHD encyclopedia. It should coach the live moment: state, friction, one next move, held context, and clean closure.

## 2. Check The Required Folder Shape

Required Week 5 files:

- `identity.md`: who the coach is and who it coaches.
- `rules.md`: how it behaves.
- `examples.md`: calibrated interaction examples.
- `reference/`: reusable protocols, admin operations playbooks, signal map, safety boundaries, source notes.
- `README.md`: how a stranger uses it.

Extra proof files:

- `START_HERE.md`
- `PRODUCT_THESIS.md`
- `ICM_TRACE.md`
- `FIRST_RUN.md`
- `FIRST_REPLY_SCORECARD.md`
- `COMPETITION_RULES_TRACE.md`
- `WRITEUP.md`
- `HANDOFF_CARD.md`
- `JUDGE_SCORECARD.md`
- `JUDGE_FAQ.md`
- `JUDGE_BRIEF.md`
- `PROJECT_INSTRUCTIONS.md`
- `PUBLICATION_CHECKLIST.md`
- `WALKTHROUGH.md`
- `PITCH_REEL.md`
- `RECEIPTS.md`
- `landing/index.html`
- `landing/reel.html`
- `demo/whole-person-tour.md`
- `scripts/prepare-publication-link.mjs`
- `scripts/verify-submission-copy.mjs`
- `scripts/verify-submission-surfaces.mjs`
- `scripts/verify-pitch-reel.mjs`
- `scripts/verify-reel-page.mjs`
- `scripts/verify-judge-faq.mjs`
- `scripts/verify-judge-scorecard.mjs`
- `scripts/verify-judge-brief.mjs`
- `scripts/verify-competition-rules-trace.mjs`
- `scripts/verify-product-thesis.mjs`
- `scripts/verify-icm-trace.mjs`
- `scripts/verify-first-run.mjs`
- `scripts/verify-first-reply-scorecard.mjs`
- `scripts/verify-start-here.mjs`
- `scripts/verify-landing-copy.mjs`
- `scripts/verify-transcript-pack.mjs`
- `scripts/verify-first-reply-acceptance.mjs`
- `scripts/verify-whole-person-tour.mjs`
- `scripts/verify-console-behavior.mjs`
- `scripts/verify-eval-coverage.mjs`
- `scripts/verify-admin-ops-playbooks.mjs`
- `scripts/judge-quick-proof.mjs`
- `scripts/verify-public-bundle.mjs`
- `scripts/verify-publication-ready.mjs`
- `scripts/verify-github-public-url.mjs`
- `scripts/build-public-bundle.mjs`
- `scripts/stage-public-repo.mjs`
- `scripts/final-review-smoke.mjs`
- `scripts/verify-clean-public-stage.mjs`
- `demo/before-after.md`
- `demo/transcript-pack.md`
- `demo/whole-person-tour.md`
- `evals/red-face-tests.md`
- `evals/research-to-behavior-checklist.md`

## 3. Try Four Prompts

Drop the folder into a Claude Project and start with:

Paste `PROJECT_INSTRUCTIONS.md` into the Claude Project instructions, or use this minimal start prompt:

```text
You are Unstuck Coach. Read identity.md, rules.md, examples.md, and reference/. Coach me through the life loop in front of me. If my first message is vague, ask one state-calibrating question. If I name a stuck signal, route it directly.
```

Then try:

```text
I need a coach to get started on this.
```

Expected behavior:

- Treats this as a stuck-loop moment, not a motivation problem.
- Avoids a plan essay.
- Accepts the messy task pile as-is and promises one returned next move.

First reply acceptance test:

- Pass: names friction, gives one concrete move, asks for tiny proof or one state signal.
- Fail: article, long menu, moralizing, or vague continuation.

Then try:

```text
I need to pay the bill, eat something, and answer the text, but I am frozen.
```

Expected behavior:

- Holds the loops instead of handing them back.
- Recognizes the body-state need.
- Gives one humane concrete move and asks for tiny proof.

Try:

```text
My inbox and calendar are a mess and I do not know what is real.
```

Expected behavior:

- Treats this as system overload, not a personal failure.
- Rescues live obligations before cleanup.
- Asks for one hard calendar anchor or one inbox item tied to time, money, safety, or another person.

Try:

```text
idea: make a shutdown checklist for Sunday nights
```

Expected behavior:

- Captures and parks the idea.
- Does not turn capture into a lecture.

Try:

```text
I tried the same plan three times and failed every time.
```

Expected behavior:

- Stops repeating the failed strategy.
- Says the plan failed, not the person.
- Changes task shape.

## 4. Inspect The Proof

Open `landing/index.html`.

The landing page should make the product understandable before you read every file:

- the athlete
- the above-the-brief proof band
- the 60-second cold-run band
- the Claude Project launch kit
- the Codex, AI IDE, and local-model setup paths
- the launch-kit copy controls
- the coaching loop
- the calendar/inbox operations band
- the live demo bridge
- the before/after behavior difference
- the folder-method map
- the cold judge path
- the record-ready pitch reel page

Check the Calendar and inbox layer. It should show Calendar Reality, Inbox Live Obligation, Reply Debt Recovery, and the no-account-access safety boundary before asking you to trust the deeper playbooks.

Use the console to type a stuck point. It should return:

- state
- friction
- first move
- proof check

Open `WRITEUP.md`.

Open `JUDGE_BRIEF.md`.

It should make the winning case readable before the judge opens every proof artifact: whole-person executive-function accessibility, above-the-brief proof, a fast judge test, failure modes, ICM fit, evidence map, and current publication readiness.

Open `PRODUCT_THESIS.md`.

It should make the design point of view explicit: the folder is the product, first contact is a cold test rather than the whole scope, the coaching loop is staged and inspectable, the setup path is portable beyond Claude Project, proof beats persuasion, and the coach stops before therapy, diagnosis, medication advice, or autonomous execution.

Open `ICM_TRACE.md`.

It should make the ICM fit practical rather than decorative: visible context, editable decisions, bounded handoffs, auditable proof, and publication safety should each point to concrete files.

Open `START_HERE.md`.

It should provide the 60-second path, exact Unstuck Coach start prompt, first-reply acceptance test, and the first cold prompt without requiring the judge to read every file first.

Open `FIRST_RUN.md`.

It should show the exact cold-start prompt, expected first reply, tiny proof loop, and immediate fail patterns.

Open `FIRST_REPLY_SCORECARD.md`.

It should make the first reply scoreable before the judge reads the whole folder: name friction, give one move, hold context, ask for proof, and immediately reject articles, menus, moralizing, vague continuations, or unsafe clinical moves.

It should compress the argument: specific domain, folder methodology, and proof layer.

Open `COMPETITION_RULES_TRACE.md`.

It should map the Week 5 brief, required files, judging questions, and current publication readiness checks to concrete evidence.

Run its verifier:

```bash
node scripts/verify-competition-rules-trace.mjs
```

It should report 12 brief requirement rows, 4 judging question rows, above-the-brief proof bullets, 4 ready-to-post checks, and zero public-unsafe private/local references.

Open `HANDOFF_CARD.md`.

It should make the coach handoff obvious enough for a stranger to use without a call.

Open `JUDGE_SCORECARD.md`.

It should make the evaluation criteria explicit enough to score the entry without inventing a rubric.

Run its verifier:

```bash
node scripts/verify-judge-scorecard.mjs
```

It should report nine criteria rows, a sequential fast scoring path, and zero public-unsafe private/local references.

Open `JUDGE_FAQ.md`.

It should answer the predictable Week 5 judging questions quickly: what the coach is, who it coaches, what fails, how it fits ICM, what goes above the brief, and where the ready publication proof lives.

Open `PROJECT_INSTRUCTIONS.md`.

It should be paste-ready for Claude Project instructions and should preserve the core loop: state, friction, move, hold, check, close.

Open `PUBLICATION_CHECKLIST.md`.

It should keep final publishing auditable: design approval, documented Premium/VIP eligibility, clean public repo, final link insertion, public URL proof, and the green publication gate.

Open `WALKTHROUGH.md`.

It should make the presentation path obvious: thesis, handoff, demo, transcripts, receipts, verifier, and the five judge prompts.

Open `RECEIPTS.md`.

It should map every public claim to a concrete artifact, so the entry feels inspectable instead of persuasive-only.

Open `demo/whole-person-tour.md`.

It should make the breadth testable in one place: food/body, calendar/inbox, messages/shame, home/admin loops, capture/re-entry, and closure/recovery. Each stop should have a pasteable prompt, expected first move, proof check, and immediate-fail signal.

Run its verifier:

```bash
node scripts/verify-whole-person-tour.mjs
```

It should report 6 tour stops, 6 prompt blocks, 6 proof checks, 6 immediate-fail checks, and zero failures.

Run the verifier:

```bash
node scripts/verify-public-bundle.mjs
```

It should report zero failures, a 2-3 sentence Skool comment draft, and nine protocol behavior cases. Warnings about the final GitHub link are expected until the public repo URL is inserted.

For the submission-copy proof, run:

```bash
node scripts/verify-submission-copy.mjs
```

It should report a 2-3 sentence comment draft under the character cap.

For the submission-surface proof, run:

```bash
node scripts/verify-submission-surfaces.mjs
```

It should report that the primary Skool draft and SUBMISSION landing-page version are synchronized, and that the landing does not render a separate submission panel.

For the pitch-reel proof, run:

```bash
node scripts/verify-pitch-reel.mjs
```

It should report six timed shots, a short voiceover, and zero public-unsafe private/local references.

For the record-ready reel page proof, run:

```bash
node scripts/verify-reel-page.mjs
```

It should report six reel scenes, resolved local refs, and zero public-unsafe private/local references.

For the judge FAQ proof, run:

```bash
node scripts/verify-judge-faq.mjs
```

It should report eight FAQ questions, evidence references, and zero public-unsafe private/local references.

For the product-thesis proof, run:

```bash
node scripts/verify-product-thesis.mjs
```

It should report the thesis sections and evidence references with zero failures.

For the ICM proof, run:

```bash
node scripts/verify-icm-trace.mjs
```

It should report the ICM trace sections, evidence references, practical-fit rows, and zero failures.

For the first-reply scorecard proof, run:

```bash
node scripts/verify-first-run.mjs
node scripts/verify-first-reply-scorecard.mjs
```

It should report the scorecard checks and table rows with zero failures.

For the console-only behavior proof, run:

```bash
node scripts/verify-console-behavior.mjs
node scripts/verify-eval-coverage.mjs
node scripts/verify-admin-ops-playbooks.mjs
node scripts/verify-whole-person-tour.mjs
node scripts/judge-quick-proof.mjs
```

It should classify task-start friction, a getting-started coach request, communication threat, working-memory overload, idea capture, repeated failed plans, body-first recovery, inbox/calendar reality, and calibration fallback. It should also report 13 red-face tests, at least 12 research-to-behavior rows, 5 admin operations playbooks, 6 whole-person tour stops, and a passing judge quick proof summary that does not require the final public GitHub URL.

For the transcript-pack proof, run:

```bash
node scripts/verify-transcript-pack.mjs
```

It should check nine cold-test transcripts and report zero failures.

For the first-reply acceptance proof, run:

```bash
node scripts/verify-first-reply-acceptance.mjs
```

It should check all nine transcript first replies for friction naming, one concrete move, tiny proof or state signal, and generic-advice failure patterns.

To verify the final proof layer, run:

```bash
node scripts/judge-quick-proof.mjs
node scripts/final-review-smoke.mjs --expect-ready --skip-build
```

The quick proof should pass as the judge summary. The smoke gate should also pass with the final public GitHub URL inserted, public, and privacy-checked.

For the clean public-repo staging preflight, run:

```bash
node scripts/verify-clean-public-stage.mjs
```

It should stage the payload into a temporary separate folder, verify from inside that staged payload, remove the temporary target, and report zero failures.

Build the public repo payload:

```bash
node scripts/build-public-bundle.mjs
```

The generated folder at `output/public-bundle/unstuck-coach/` should verify from inside itself. That folder is the clean payload for rebuilding the public repository if the source changes.

Dry-run clean public repository staging:

```bash
node scripts/stage-public-repo.mjs --target ../unstuck-coach-public
```

The helper should verify the bundle first and report a dry-run summary. Use `--write` only after the target folder is reviewed.

After the final public GitHub repository exists, dry-run the link insertion:

```bash
node scripts/prepare-publication-link.mjs --url https://github.com/OWNER/REPO
```

Then write the approved URL:

```bash
node scripts/prepare-publication-link.mjs --url https://github.com/OWNER/REPO --write
```

After the final public GitHub link is inserted, run:

```bash
node scripts/verify-publication-ready.mjs
```

It should report `status: "ready"`. Before the final link is inserted, it should stay blocked.

Open `demo/before-after.md`.

Look for the difference between generic assistant behavior and coach behavior:

- Generic answer: advice, explanation, motivational language.
- Unstuck answer: state-aware, one move, working-memory relief, closure.

Open `demo/transcript-pack.md`.

It should give a judge cold-test examples for getting started, whole-life freeze, message threat, overload, raw capture, repeated failed plans, body-first recovery, inbox/calendar reality, and calibration.

Open `evals/red-face-tests.md`.

The red-face tests check whether the coach still works under shame, overload, inbox/calendar reality, capture, tangents, time blindness, repeated failure, hyperfocus crash, and clinical boundary pressure.

Open `evals/research-to-behavior-checklist.md`.

This file shows how the research turned into behavior:

- working memory -> hold the list
- time blindness -> visible anchors
- inbox/calendar noise -> live-obligation rescue
- interoception -> body-first prompts
- system rot -> bankruptcy/reset
- novelty pull -> tangent firewall

## 5. Pass / Fail Criteria

Pass if the coach:

- Coaches a specific domain.
- Responds like a coach, not a knowledge base.
- Uses clean methodology.
- Gives one useful next move.
- Preserves dignity under shame.
- Has a README that makes the folder usable by a stranger.

Fail if it:

- Lectures about productivity.
- Gives a long list when the user cannot start.
- Makes the user repeat context already provided.
- Moralizes avoidance.
- Crosses therapy, diagnosis, crisis, or medication boundaries.
