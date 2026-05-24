# Unstuck Coach

A folder-based whole-person executive-function accessibility coach for people who need help starting, switching, remembering, regulating, capturing, recovering, and closing loops without shame.

Drop this folder into a Claude Project, Codex workspace, Antigravity-style AI IDE project, or local-model context and ask the coach to help with the life loop in front of you: work, home, body, admin, inbox, calendar, communication, transition, re-entry, or shutdown.

The core idea: Unstuck Coach acts as portable executive-function accessibility. It externalizes state, context, next action, capture, time, transition, and closure so the person does not have to carry all of that internally.

## Who This Is For

Unstuck Coach is for people who already have values, obligations, care, and intelligence, but lose traction at the executive-function layer:

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
- Sorts raw brain dumps into one next move plus parked context.
- Uses a bounded dopamine menu when the user needs activation fuel before starting.
- Makes time visible with buffers, hard stops, and start anchors.
- Uses a tangent firewall: chase, bookmark, or discard.
- Switches strategy after repeated failed attempts.
- Resets messy systems without shame.
- Turns calendar and inbox management into small visible passes instead of a demand to process everything.

## Try It Quickly

1. Open the canonical landing page: `https://unstuck.kyanitelabs.tech/`.
2. Try the live GLM chat demo: `https://unstuck.kyanitelabs.tech/chat/`.
3. The live demo is backed by GLM-5.1 through Z.AI's international coding-plan endpoint with reasoning enabled and a 1200-token completion budget.
4. Open `START_HERE.md`.
5. Load the folder into a Claude Project or another AI workspace.
6. Paste `PROJECT_INSTRUCTIONS.md`.
7. Try: `I need a coach to get started on this.`
8. Score the first response with `FIRST_REPLY_SCORECARD.md`.

The landing page gives the visual version of this path. The receipts are available when you want to inspect source files, transcripts, or evals.

## Receipt Room: Folder Map

This section is for inspection after the human value is clear.

```text
unstuck-coach/
├── robots.txt
├── sitemap.xml
├── llms.txt
├── LICENSE
├── AGENTS.md
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
├── JUDGE_BRIEF.md
├── PROJECT_INSTRUCTIONS.md
├── PUBLICATION_CHECKLIST.md
├── WALKTHROUGH.md
├── PITCH_REEL.md
├── RECEIPTS.md
├── SUBMISSION.md
├── identity.md
├── rules.md
├── examples.md
├── docs/
│   └── judge-walkthrough.md
├── demo/
│   ├── before-after.md
│   ├── transcript-pack.md
│   └── whole-person-tour.md
├── landing/
│   ├── assets/
│   │   ├── unstuck-coach-logo.png
│   │   ├── unstuck-handoff-card.svg
│   │   └── unstuck-admin-bridge.jpg
│   ├── index.html
│   ├── evidence.html
│   ├── reel.html
│   ├── styles.css
│   ├── reel.css
│   └── app.js
├── scripts/
│   ├── prepare-publication-link.mjs
│   ├── public-bundle-files.mjs
│   ├── build-evidence-page.mjs
│   ├── render-review-screenshots.mjs
│   ├── verify-landing-accessibility.mjs
│   ├── verify-source-notes.mjs
│   ├── verify-submission-copy.mjs
│   ├── verify-submission-surfaces.mjs
│   ├── verify-pitch-reel.mjs
│   ├── verify-reel-page.mjs
│   ├── verify-judge-faq.mjs
│   ├── verify-judge-scorecard.mjs
│   ├── verify-judge-brief.mjs
│   ├── verify-competition-rules-trace.mjs
│   ├── verify-product-thesis.mjs
│   ├── verify-icm-trace.mjs
│   ├── verify-first-run.mjs
│   ├── verify-first-reply-scorecard.mjs
│   ├── verify-start-here.mjs
│   ├── verify-landing-copy.mjs
│   ├── verify-transcript-pack.mjs
│   ├── verify-first-reply-acceptance.mjs
│   ├── verify-whole-person-tour.mjs
│   ├── verify-mode-router.mjs
│   ├── verify-console-behavior.mjs
│   ├── verify-eval-coverage.mjs
│   ├── verify-admin-ops-playbooks.mjs
│   ├── judge-quick-proof.mjs
│   ├── verify-public-bundle.mjs
│   ├── verify-final-privacy-scan.mjs
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
│   ├── admin-ops-playbooks.md
│   ├── mode-router.md
│   ├── signal-map.md
│   ├── safety-boundaries.md
│   └── source-notes.md
└── README.md
```

## How To Use

## Search And AI Discovery

When the repository is made public, set the repository About homepage to the Kyanite landing page:

```text
https://unstuck.kyanitelabs.tech/
```

The front-facing discovery files are:

- `robots.txt` for crawler access and sitemap discovery.
- `sitemap.xml` for the landing page, live chat demo, evidence reader, and pitch reel URLs.
- `llms.txt` for answer engines, AI search, and LLM citation context.
- `landing/index.html` for browser metadata, Open Graph/Twitter previews, canonical URL, and structured data.

### Claude Project

1. Create a Claude Project.
2. Add this whole folder as project knowledge.
3. Paste `PROJECT_INSTRUCTIONS.md` into the Claude Project instructions.
4. Start a chat with:

```text
You are Unstuck Coach. Read identity.md, rules.md, examples.md, and reference/. Coach me through the life loop in front of me. If my first message is vague, ask one state-calibrating question. If I name a stuck signal, route it directly.
```

### Codex

Open the folder as the Codex workspace. `AGENTS.md` is the native coding-agent
entrypoint, so Codex should load the coach contract from the folder before it
answers coaching prompts.

```bash
codex -C unstuck-coach "I need a coach to get started on this."
```

If your coding agent does not automatically read `AGENTS.md`, paste the same
start prompt from the Claude Project path first.

### Antigravity Or Another AI IDE

Create a project from the Unstuck folder. Keep file access scoped to this project, then ask the workspace to read `PROJECT_INSTRUCTIONS.md`, `START_HERE.md`, `identity.md`, `rules.md`, `examples.md`, and `reference/` before coaching.

Use the same first chat message from the Claude Project path.

### Local Models

Use a local runner with enough context to hold the operating files. If it cannot ingest the whole folder, paste `PROJECT_INSTRUCTIONS.md` first, then add:

- `identity.md`
- `rules.md`
- `examples.md`
- `reference/coaching-protocols.md`
- `reference/signal-map.md`
- `reference/safety-boundaries.md`

Then start with one cold prompt from `START_HERE.md`.

## Quick Evaluation Path

This is a shortcut, not the product boundary. Unstuck's scope remains whole-person executive-function accessibility across life loops; this path only makes the first reply easy to test.

Open `START_HERE.md` for the shortest path, `JUDGE_BRIEF.md` for the one-page above-the-brief case, then `landing/index.html` for the visual walkthrough.

Open `FIRST_RUN.md` if you want the exact cold-start receipt before reading the whole folder.

Use the live demo button on the landing page to test a real GLM-backed stuck point. The protocol verifier remains in `scripts/verify-console-behavior.mjs` as proof of the routing logic.

Open `docs/judge-walkthrough.md` for a longer evaluation path.

The quick test:

1. Load the folder into a Claude Project.
2. Try: `I need a coach to get started on this.`
3. Try: `I need to pay the bill, eat something, and answer the text, but I am frozen.`
4. Try: `My inbox and calendar are a mess and I do not know what is real.`
5. Try: `idea: make a shutdown checklist for Sunday nights`
6. Try: `I tried the same plan three times and failed every time.`

If Unstuck gives a productivity article, it failed. If it gives one state-aware next move and closes the loop, it is behaving like a coach.

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
Body double me through the first concrete move.
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

- `landing/index.html` gives the visual product front door: whole-person hero, coaching routes, Claude Project launch kit, Codex/AI IDE/local-model setup paths, live coaching demo bridge, folder-method map, and readable source-proof links.
- `robots.txt`, `sitemap.xml`, and `llms.txt` give the public repo a crawler, answer-engine, and generative-engine discovery layer on the Kyanite domain.
- `landing/assets/unstuck-coach-logo.png` gives the public brand mark used in the navigation and favicon.
- `landing/assets/unstuck-admin-bridge.jpg` gives the admin-operations band a bitmap operating-map asset using the simplified PuenteWorks bridge/Mola visual language.
- `landing/reel.html` gives a record-ready six-scene pitch reel page for the optional video/GIF proof layer.
- `AGENTS.md` gives Codex, Claude Code, and AI IDEs a native coding-agent entrypoint for loading the coach contract from the folder.
- `START_HERE.md` gives the 60-second route, exact start prompt, first-reply acceptance test, and fast cold prompts.
- `PRODUCT_THESIS.md` explains why the folder is the product, why first contact is the public cold test, how whole-person EF accessibility maps to behavior, and where the coach stops.
- `ICM_TRACE.md` maps the coaching system to staged, inspectable, editable, and auditable workflow architecture.
- `FIRST_RUN.md` shows the exact cold-start prompt, expected first reply, tiny proof loop, first-message routing, and immediate fail patterns.
- `FIRST_REPLY_SCORECARD.md` gives the fastest pass/fail gate for whether the first response actually coaches.
- `COMPETITION_RULES_TRACE.md` maps every Week 5 rule and judging question to concrete evidence in the folder.
- `WRITEUP.md` compresses the submission thesis into a short judge-readable argument.
- `HANDOFF_CARD.md` gives a one-page operator handoff with use cases, good/bad behavior, gaps, and the cold-start test.
- `JUDGE_SCORECARD.md` gives an 18-point scoring rubric with evidence links.
- `JUDGE_FAQ.md` gives the shortest answers to likely Week 5 judging objections before a judge opens every file.
- `JUDGE_BRIEF.md` gives a one-page above-the-brief argument so the winning case is not scattered across the folder.
- `PROJECT_INSTRUCTIONS.md` gives paste-ready Claude Project instructions and a first-reply acceptance test so a stranger can load the coach without translating the README.
- `PUBLICATION_CHECKLIST.md` gives the final publication gate without exposing local review notes.
- `WALKTHROUGH.md` provides the longer recording/read-through script and shot list.
- `PITCH_REEL.md` compresses the presentation layer into a verified 75-second judge reel.
- `RECEIPTS.md` maps each public claim to the exact file that proves it.
- `demo/before-after.md` shows how Unstuck Coach differs from generic productivity advice.
- `demo/transcript-pack.md` gives cold-test transcript examples for the moments a judge is likely to try.
- `demo/whole-person-tour.md` gives a six-stop cold tour across the full life surface.
- `evals/red-face-tests.md` stress-tests shame, overload, brain dumps, dopamine-menu drift, inbox/calendar reality, time blindness, capture, tangents, hyperfocus, and safety boundaries.
- `evals/research-to-behavior-checklist.md` maps the research foundation to actual coach behavior, including live-obligation rescue before cleanup.
- `reference/mode-router.md` preserves the original multi-mode assistant insight as a public-safe stance portfolio: ally support, strategy, execution, memory keeping, and recovery closure.
- `reference/signal-map.md` gives the whole-person operating surface map: food/body and activation fuel, calendar/inbox, messages/shame, home/admin loops, capture/re-entry, and closure/recovery.
- `reference/admin-ops-playbooks.md` gives operational calendar and inbox playbooks for hard-anchor recovery, live-obligation rescue, reply debt, missed obligations, and scheduling friction without claiming account access.
- `scripts/prepare-publication-link.mjs` dry-runs or writes the approved repository URL into `SUBMISSION.md`.
- `scripts/build-evidence-page.mjs` renders the actual Markdown receipts into `landing/evidence.html` so proof clicks show readable source-backed content instead of hand-typed claim cards.
- `scripts/render-review-screenshots.mjs` refreshes the landing, narrow/mobile first-glance, evidence reader, admin-band, first-run receipt, scorecard, FAQ, and reel screenshots for design approval using standard Playwright.
- `scripts/verify-landing-accessibility.mjs` checks landing semantics, labeled controls, hash targets, reduced-motion handling, focus-visible treatment, and accessibility behavior wiring.
- `scripts/verify-source-notes.mjs` checks the public source notes for competition fit, design lineage, research translation, portability, and private-provenance safety.
- `scripts/verify-submission-copy.mjs` checks that the Skool comment draft stays within the required 2-3 sentence shape.
- `scripts/verify-submission-surfaces.mjs` checks that the Skool draft and SUBMISSION landing version stay synchronized while the landing avoids a separate submission panel.
- `scripts/verify-pitch-reel.mjs` checks that the 75-second pitch reel has six timed shots, a short voiceover, and no public-unsafe private/local references.
- `scripts/verify-reel-page.mjs` checks that the record-ready reel page has six scenes, local refs, responsive CSS hooks, and no public-unsafe private/local references.
- `scripts/verify-judge-faq.mjs` checks that the judge FAQ keeps eight short answers, evidence references, and no public-unsafe private/local references.
- `scripts/verify-judge-scorecard.mjs` checks that the judge scorecard keeps nine criteria, a sequential fast path, evidence links, and no public-unsafe private/local references.
- `scripts/verify-judge-brief.mjs` checks that the judge brief keeps the whole-person wedge, above-the-brief case, fast test, failure modes, ICM fit, evidence map, blocked state, and no public-unsafe private/local references.
- `scripts/verify-competition-rules-trace.mjs` checks that the Week 5 rules trace keeps the required brief rows, judging-question rows, above-the-brief proof list, ready-to-post checks, and no public-unsafe private/local references.
- `scripts/verify-product-thesis.mjs` checks that the product thesis stays explicit about folder-first design, first-contact coaching, proof, and boundaries.
- `scripts/verify-icm-trace.mjs` checks that the ICM trace stays public, evidence-backed, and tied to the proof layer.
- `scripts/verify-first-run.mjs` checks that the first-run receipt keeps the cold prompt, expected first reply, proof loop, and fail patterns intact.
- `scripts/verify-first-reply-scorecard.mjs` checks that the first-reply scorecard keeps its pass/fail criteria, fail patterns, and evidence links.
- `scripts/verify-start-here.mjs` checks that the fastest judge path stays paste-ready.
- `scripts/verify-landing-copy.mjs` checks that the landing launch-kit prompts, including the inbox/calendar recovery prompt, stay copy-ready.
- `scripts/verify-transcript-pack.mjs` checks that the cold-test transcript pack stays complete.
- `scripts/verify-first-reply-acceptance.mjs` checks that cold-test first replies name friction, give one move, ask for proof, and avoid generic advice patterns.
- `scripts/verify-whole-person-tour.mjs` checks that the whole-person tour keeps six surfaces, pasteable prompts, proof checks, and immediate-fail signals.
- `scripts/verify-mode-router.mjs` checks that the coach keeps five stance modes and rejects coding-only execution framing.
- `scripts/verify-console-behavior.mjs` checks the proof-layer protocol classifications.
- `scripts/verify-eval-coverage.mjs` checks red-face coverage and the research-to-behavior map.
- `scripts/verify-admin-ops-playbooks.mjs` checks the calendar/inbox admin operations playbooks.
- `scripts/judge-quick-proof.mjs` gives a publication-independent proof summary for the cold judge path, including original-Liam inbox/calendar behavior.
- `scripts/verify-public-bundle.mjs` checks required files, landing proof/launch-kit text, local landing refs, public-safe text, submission copy, transcript completeness, and protocol behavior.
- `scripts/verify-final-privacy-scan.mjs` gives the final post-link privacy pass a named command instead of leaving it as a manual grep ritual.
- `scripts/verify-publication-ready.mjs` is the final posting gate after the public GitHub link is inserted; it rejects the old Week 3 repo and reruns the proof-layer checks, including source-note lineage, landing accessibility, whole-person tour coverage, and mode routing.
- `scripts/verify-github-public-url.mjs` checks that the approved repository URL is visible through unauthenticated GitHub API access.
- `scripts/final-review-smoke.mjs` runs the proof checks in one concise command, rebuilds the public payload unless skipped, and verifies whether the publication gate is expected to be blocked or ready.
- `scripts/verify-clean-public-stage.mjs` stages the payload into a temporary separate folder, verifies it there, and removes the temporary target.
- `scripts/build-public-bundle.mjs` exports the clean public repo payload after the source bundle verifies.
- `scripts/stage-public-repo.mjs` dry-runs or writes the verified payload into a clean public repository folder.

## Verify The Public Bundle

Run:

```bash
node scripts/judge-quick-proof.mjs
node scripts/verify-source-notes.mjs
node scripts/verify-landing-accessibility.mjs
node scripts/verify-mode-router.mjs
node scripts/verify-admin-ops-playbooks.mjs
node scripts/verify-whole-person-tour.mjs
node scripts/verify-judge-brief.mjs
node scripts/verify-public-bundle.mjs
node scripts/verify-final-privacy-scan.mjs
```

The quick proof reports the cold-start path, first-reply gate, transcript evidence, whole-person tour, live-demo bridge, protocol behavior verifier, stress evals, admin operations playbooks, source-notes lineage proof, research-to-behavior proof, product thesis, ICM trace, judge FAQ, scorecard, concise judge brief, and fastest cold prompts. The bundle verifier checks required files, local landing-page links/assets, product thesis, source notes, Week 5 rules trace, ICM trace, pitch reel, record-ready reel page, judge FAQ, judge scorecard, judge brief, first-run receipt, first-reply scorecard, start-here prompt readiness, landing accessibility, landing copy controls, mode routing, Skool comment shape, synchronized submission surfaces, transcript completeness, whole-person tour coverage, first-reply acceptance, protocol behavior, public-safe checklist text, emoji/symbol-range leakage, private provenance patterns, and the standalone final privacy scan.

To prove the payload can stage into a separate clean repository folder, run:

```bash
node scripts/verify-clean-public-stage.mjs
```

## Build The Public Repo Payload

Run:

```bash
node scripts/build-public-bundle.mjs
```

This creates an ignored export at `output/public-bundle/unstuck-coach/`. Use it only when rebuilding the public payload; the submitted public repository should still be verified from inside its own checkout.

Dry-run staging into a separate clean repository folder:

```bash
node scripts/stage-public-repo.mjs --target ../unstuck-coach-public
```

After reviewing the target, write it:

```bash
node scripts/stage-public-repo.mjs --target ../unstuck-coach-public --write
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
node scripts/verify-final-privacy-scan.mjs
```

Both checks should report `status: "ready"` with the approved public repository URL inserted. The gate should fail if the link points at the old Week 3 repository or at any repository unauthenticated GitHub API access cannot see.

For one-command final review after the public link is inserted, run:

```bash
node scripts/final-review-smoke.mjs --expect-ready --skip-build
```

## The Bar

If the coach gives you a long productivity article, it failed.

If it asks one useful question, names the friction without shame, and helps you take one concrete next step, it is doing its job.

## Safety Note

This is a coaching scaffold, not medical care or therapy. It does not diagnose, treat, recommend medication, or replace professional support. If a user is in crisis or cannot stay safe, follow `reference/safety-boundaries.md`.
