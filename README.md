# Startline Coach

A folder-based whole-person executive-function accessibility coach for people who need help starting, switching, remembering, regulating, capturing, recovering, and closing loops without shame.

Drop this folder into a Claude Project and ask Claude to coach you through the life loop in front of you: work, home, body, admin, inbox, calendar, communication, transition, re-entry, or shutdown.

The core idea: Startline Coach acts as portable executive-function accessibility. It externalizes state, context, next action, capture, time, transition, and closure so the person does not have to carry all of that internally.

## Who This Is For

Startline Coach is for people who already have values, obligations, care, and intelligence, but lose traction at the executive-function layer:

- Too many tasks or life loops in working memory.
- Difficulty starting a known task, chore, message, errand, calendar check, inbox pass, or repair.
- Time estimates that collapse on contact with reality.
- Hyperfocus followed by crash.
- Shame after avoidance.
- Message, conflict, or communication-threat spirals.
- Inbox piles, reply debt, calendar drift, and scheduling friction.
- Unclear re-entry after an interrupted session.
- Raw ideas that need capture without turning into a new planning spiral.
- Body-state needs that must be handled before planning can work.
- End-of-day or transition points that need clean closure.

## What This Coach Does

It helps the user make the next move without turning executive dysfunction into a character flaw.

It does not just answer questions about ADHD, productivity, or motivation. It coaches in the moment:

- Checks state before planning.
- Reduces options to one next action.
- Holds the rest of the list.
- Offers body-doubling scripts.
- Creates re-entry breadcrumbs.
- Uses shame-free return protocols.
- Captures raw ideas without turning them into a lecture.
- Makes time visible with buffers, hard stops, and start anchors.
- Uses a tangent firewall: chase, bookmark, or discard.
- Switches strategy after repeated failed attempts.
- Resets messy systems without shame.
- Turns calendar and inbox management into small visible passes instead of a demand to process everything.

## Folder Structure

```text
startline-coach/
├── START_HERE.md
├── PRODUCT_THESIS.md
├── FIRST_RUN.md
├── FIRST_REPLY_SCORECARD.md
├── COMPETITION_RULES_TRACE.md
├── ICM_TRACE.md
├── WRITEUP.md
├── HANDOFF_CARD.md
├── JUDGE_SCORECARD.md
├── JUDGE_FAQ.md
├── PROJECT_INSTRUCTIONS.md
├── PUBLICATION_CHECKLIST.md
├── WALKTHROUGH.md
├── PITCH_REEL.md
├── RECEIPTS.md
├── identity.md
├── rules.md
├── examples.md
├── demo/
│   ├── before-after.md
│   └── transcript-pack.md
├── landing/
│   ├── assets/
│   │   └── startline-handoff-card.svg
│   ├── index.html
│   ├── reel.html
│   ├── styles.css
│   ├── reel.css
│   └── app.js
├── scripts/
│   ├── prepare-publication-link.mjs
│   ├── verify-submission-copy.mjs
│   ├── verify-submission-surfaces.mjs
│   ├── verify-pitch-reel.mjs
│   ├── verify-reel-page.mjs
│   ├── verify-judge-faq.mjs
│   ├── verify-judge-scorecard.mjs
│   ├── verify-competition-rules-trace.mjs
│   ├── verify-product-thesis.mjs
│   ├── verify-icm-trace.mjs
│   ├── verify-first-run.mjs
│   ├── verify-first-reply-scorecard.mjs
│   ├── verify-start-here.mjs
│   ├── verify-landing-copy.mjs
│   ├── verify-transcript-pack.mjs
│   ├── verify-first-reply-acceptance.mjs
│   ├── verify-console-behavior.mjs
│   ├── verify-eval-coverage.mjs
│   ├── judge-quick-proof.mjs
│   ├── verify-public-bundle.mjs
│   ├── verify-publication-ready.mjs
│   ├── verify-github-public-url.mjs
│   ├── final-review-smoke.mjs
│   ├── verify-clean-public-stage.mjs
│   ├── build-public-bundle.mjs
│   └── stage-public-repo.mjs
├── evals/
│   ├── red-face-tests.md
│   └── research-to-behavior-checklist.md
├── reference/
│   ├── coaching-protocols.md
│   ├── signal-map.md
│   ├── safety-boundaries.md
│   └── source-notes.md
└── README.md
```

## How To Use

1. Create a Claude Project.
2. Add this whole folder as project knowledge.
3. Paste `PROJECT_INSTRUCTIONS.md` into the Claude Project instructions.
4. Start a chat with:

```text
You are Startline Coach. Read identity.md, rules.md, examples.md, and reference/. Coach me through the life loop in front of me. If my first message is vague, ask one state-calibrating question. If I name a stuck signal, route it directly.
```

## Judge This In 5 Minutes

Open `START_HERE.md` for the shortest path, then open `landing/index.html` for the visual walkthrough.

Open `FIRST_RUN.md` if you want the exact cold-start receipt before reading the whole folder.

Use the runnable console on the landing page to preview how the protocols turn a messy stuck point into state, friction, one move, and a proof check.

Open `docs/judge-walkthrough.md` for the shortest evaluation path.

The quick test:

1. Load the folder into a Claude Project.
2. Try: `I need a coach to get started on this.`
3. Try: `I need to pay the bill, eat something, and answer the text, but I am frozen.`
4. Try: `My inbox and calendar are a mess and I do not know what is real.`
5. Try: `idea: make a shutdown checklist for Sunday nights`
6. Try: `I tried the same plan three times and failed every time.`

If Startline gives a productivity article, it failed. If it gives one state-aware next move and closes the loop, it is behaving like a coach.

## Best First Prompts

```text
I cannot start this task.
```

```text
I need a coach to get started on this.
```

```text
I have too many things in my head. Help me sort them.
```

```text
My inbox and calendar are a mess and I do not know what is real.
```

```text
I am coming back after avoiding this project.
```

```text
That message makes me feel like I did something wrong.
```

```text
Body double me through the first visible move.
```

```text
idea: make a shutdown checklist for Sunday nights
```

```text
I tried the same plan three times and it keeps failing.
```

```text
I have 25 minutes before I leave and think I can finish the whole pile.
```

## Proof Artifacts

- `landing/index.html` gives a visual judge path, above-the-brief proof band, 60-second cold-run band, Claude Project launch kit, runnable coach console, live coaching demo, folder-method map, one-command proof gate, and submission copy.
- `landing/reel.html` gives a record-ready six-scene pitch reel page for the optional video/GIF proof layer.
- `START_HERE.md` gives the 60-second route, exact start prompt, first-reply acceptance test, and fast cold prompts.
- `PRODUCT_THESIS.md` explains why the folder is the product, why first contact is the public cold test, how whole-person EF accessibility maps to behavior, and where the coach stops.
- `ICM_TRACE.md` maps the coaching system to staged, inspectable, editable, and auditable workflow architecture.
- `FIRST_RUN.md` shows the exact cold-start prompt, expected first reply, tiny proof loop, first-message routing, and immediate fail patterns.
- `FIRST_REPLY_SCORECARD.md` gives the fastest pass/fail gate for whether the first response actually coaches.
- `COMPETITION_RULES_TRACE.md` maps every Week 5 rule and judging question to concrete evidence in the folder.
- `WRITEUP.md` compresses the submission thesis into a short judge-readable argument.
- `HANDOFF_CARD.md` gives a one-page operator handoff with use cases, good/bad behavior, gaps, and the five-minute test.
- `JUDGE_SCORECARD.md` gives an 18-point scoring rubric with evidence links.
- `JUDGE_FAQ.md` gives the shortest answers to likely Week 5 judging objections before a judge opens every file.
- `PROJECT_INSTRUCTIONS.md` gives paste-ready Claude Project instructions and a first-reply acceptance test so a stranger can load the coach without translating the README.
- `PUBLICATION_CHECKLIST.md` gives the final publication gate without exposing local review notes.
- `WALKTHROUGH.md` provides the longer recording/read-through script and shot list.
- `PITCH_REEL.md` compresses the presentation layer into a verified 75-second judge reel.
- `RECEIPTS.md` maps each public claim to the exact file that proves it.
- `demo/before-after.md` shows how Startline Coach differs from generic productivity advice.
- `demo/transcript-pack.md` gives cold-test transcript examples for the moments a judge is likely to try.
- `evals/red-face-tests.md` stress-tests shame, overload, inbox/calendar reality, time blindness, capture, tangents, hyperfocus, and safety boundaries.
- `evals/research-to-behavior-checklist.md` maps the research foundation to actual coach behavior, including live-obligation rescue before cleanup.
- `scripts/prepare-publication-link.mjs` dry-runs or writes the final public GitHub URL into `SUBMISSION.md`.
- `scripts/verify-submission-copy.mjs` checks that the Skool comment draft stays within the required 2-3 sentence shape.
- `scripts/verify-submission-surfaces.mjs` checks that the Skool draft, SUBMISSION landing version, and landing-page submission copy stay synchronized.
- `scripts/verify-pitch-reel.mjs` checks that the 75-second pitch reel has six timed shots, a short voiceover, and no public-unsafe private/local references.
- `scripts/verify-reel-page.mjs` checks that the record-ready reel page has six scenes, local refs, responsive CSS hooks, and no public-unsafe private/local references.
- `scripts/verify-judge-faq.mjs` checks that the judge FAQ keeps eight short answers, evidence references, and no public-unsafe private/local references.
- `scripts/verify-judge-scorecard.mjs` checks that the judge scorecard keeps nine criteria, a sequential fast path, evidence links, and no public-unsafe private/local references.
- `scripts/verify-competition-rules-trace.mjs` checks that the Week 5 rules trace keeps the required brief rows, judging-question rows, above-the-brief proof list, blockers, and no public-unsafe private/local references.
- `scripts/verify-product-thesis.mjs` checks that the product thesis stays explicit about folder-first design, first-contact coaching, proof, and boundaries.
- `scripts/verify-icm-trace.mjs` checks that the ICM trace stays public, evidence-backed, and tied to the proof layer.
- `scripts/verify-first-run.mjs` checks that the first-run receipt keeps the cold prompt, expected first reply, proof loop, and fail patterns intact.
- `scripts/verify-first-reply-scorecard.mjs` checks that the first-reply scorecard keeps its pass/fail criteria, fail patterns, and evidence links.
- `scripts/verify-start-here.mjs` checks that the fastest judge path stays paste-ready.
- `scripts/verify-landing-copy.mjs` checks that the landing launch-kit prompts, including the inbox/calendar recovery prompt, stay copy-ready.
- `scripts/verify-transcript-pack.mjs` checks that the cold-test transcript pack stays complete.
- `scripts/verify-first-reply-acceptance.mjs` checks that cold-test first replies name friction, give one move, ask for proof, and avoid generic advice patterns.
- `scripts/verify-console-behavior.mjs` checks the runnable console's protocol classifications.
- `scripts/verify-eval-coverage.mjs` checks red-face coverage and the research-to-behavior map.
- `scripts/judge-quick-proof.mjs` gives a publication-independent proof summary for the cold judge path, including original-Liam inbox/calendar behavior.
- `scripts/verify-public-bundle.mjs` checks required files, landing proof/launch-kit text, local landing refs, public-safe text, submission copy, transcript completeness, and console behavior.
- `scripts/verify-publication-ready.mjs` is the final posting gate after the public GitHub link is inserted; it rejects the old Week 3 repo and reruns the proof-layer checks.
- `scripts/verify-github-public-url.mjs` proves the final GitHub link is publicly visible through unauthenticated GitHub API access, so the private review repo cannot pass as public.
- `scripts/final-review-smoke.mjs` runs the proof checks in one concise command, rebuilds the public payload unless skipped, and verifies whether the publication gate is expected to be blocked or ready.
- `scripts/verify-clean-public-stage.mjs` stages the payload into a temporary separate folder, verifies it there, and removes the temporary target.
- `scripts/build-public-bundle.mjs` exports the clean public repo payload after the source bundle verifies.
- `scripts/stage-public-repo.mjs` dry-runs or writes the verified payload into a clean public repository folder.

## Verify The Public Bundle

Run:

```bash
node scripts/judge-quick-proof.mjs
node scripts/verify-public-bundle.mjs
```

The quick proof reports the cold-start path, first-reply gate, transcript evidence, runnable console, stress evals, research-to-behavior proof, product thesis, ICM trace, judge FAQ, scorecard, and fastest cold prompts without requiring the final public GitHub link. The bundle verifier checks required files, local landing-page links/assets, product thesis, Week 5 rules trace, ICM trace, pitch reel, record-ready reel page, judge FAQ, judge scorecard, first-run receipt, first-reply scorecard, start-here prompt readiness, landing copy controls, Skool comment shape, synchronized submission surfaces, transcript completeness, first-reply acceptance, runnable console behavior, public-safe checklist text, emoji/symbol-range leakage, and private provenance patterns. Before final publication it may warn that the GitHub link is still pending; after the public repo link is inserted, those warnings should be gone.

To prove the payload can stage into a separate clean repository folder, run:

```bash
node scripts/verify-clean-public-stage.mjs
```

## Build The Public Repo Payload

Run:

```bash
node scripts/build-public-bundle.mjs
```

This creates an ignored export at `output/public-bundle/startline-coach/`. After final link approval, copy that exported folder into the clean Week 5 public repository and run the verifier again from inside the copied repo.

Dry-run staging into a separate clean repository folder:

```bash
node scripts/stage-public-repo.mjs --target ../startline-coach-week5-public
```

After reviewing the target, write it:

```bash
node scripts/stage-public-repo.mjs --target ../startline-coach-week5-public --write
```

## Final Publication Gate

After final approval and once the public GitHub repository exists, dry-run the link insertion:

```bash
node scripts/prepare-publication-link.mjs --url https://github.com/OWNER/REPO
```

After reviewing the dry-run output, write it:

```bash
node scripts/prepare-publication-link.mjs --url https://github.com/OWNER/REPO --write
```

Then run:

```bash
node scripts/verify-publication-ready.mjs
node scripts/verify-github-public-url.mjs
```

Both checks should report `status: "ready"`. Until the final public GitHub link replaces the review placeholder, this gate is expected to report `status: "blocked"`. It should also stay blocked if the link points at the old Week 3 repository or at any private repository that unauthenticated GitHub API access cannot see.

For one-command final review before the link exists, run:

```bash
node scripts/final-review-smoke.mjs --expect-blocked
```

After the final public link is inserted, run:

```bash
node scripts/final-review-smoke.mjs --expect-ready --skip-build
```

## The Bar

If the coach gives you a long productivity article, it failed.

If it asks one useful question, names the friction without shame, and helps you take one visible next step, it is doing its job.

## Safety Note

This is a coaching scaffold, not medical care or therapy. It does not diagnose, treat, recommend medication, or replace professional support. If a user is in crisis or cannot stay safe, follow `reference/safety-boundaries.md`.
