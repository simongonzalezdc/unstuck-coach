# Unstuck Coach

A folder-based whole-person executive-function accessibility coach for people who need help starting, switching, remembering, regulating, capturing, recovering, and closing loops without shame.

The core idea: Unstuck Coach acts as portable executive-function accessibility. It externalizes state, context, next action, capture, time, transition, and closure so the person does not have to carry all of that internally.

## Postable Links

- Landing page: `https://unstuck.kyanitelabs.tech/`
- Live GLM demo: `https://unstuck.kyanitelabs.tech/chat/`
- Evidence reader: `https://unstuck.kyanitelabs.tech/evidence`
- Pitch reel: `https://unstuck.kyanitelabs.tech/reel`

The landing page gives the visual version of this path. The evidence reader gives the proof without making the README carry every receipt.

## Fast Judge Path

1. Open `START_HERE.md`.
2. Open `JUDGE_BRIEF.md`.
3. Try the live demo or load the folder into a Claude Project.
4. Test: `I need a coach to get started on this.`
5. Score the first reply with `FIRST_REPLY_SCORECARD.md`.

This is a shortcut, not the product boundary. The real scope is whole-person executive-function accessibility across work, home, body, admin, messages, inbox, calendar, capture, re-entry, and shutdown.

If Unstuck gives a productivity article, it failed. If it gives one state-aware next move, holds the rest of the pile, and asks for tiny proof, it is behaving like a coach.

## What It Coaches

- Too many tasks in working memory.
- Known tasks that still will not start.
- Inbox, calendar, reply debt, and scheduling reality.
- Message threat, shame spirals, and repair.
- Body-state blockers before planning can work.
- Tangents, raw ideas, capture, re-entry, and closure.
- Failed plans that need a new shape instead of more pressure.

## Use The Folder

### Claude Project

1. Add the whole folder as project knowledge.
2. Paste `PROJECT_INSTRUCTIONS.md` into project instructions.
3. Start with `I need a coach to get started on this.`

### Codex Or AI IDE

Open this folder as the workspace. `AGENTS.md` tells coding agents how to load the coach contract before answering coaching prompts.

```bash
codex -C unstuck-coach "I need a coach to get started on this."
```

### Local Models

Use a runner with enough context for `PROJECT_INSTRUCTIONS.md`, `identity.md`, `rules.md`, `examples.md`, and the key files in `reference/`. If context is tight, start with `PROJECT_INSTRUCTIONS.md` plus:

- `reference/coaching-protocols.md`
- `reference/signal-map.md`
- `reference/safety-boundaries.md`

## Evidence Map

- `PROJECT_INSTRUCTIONS.md` is the paste-ready coach contract.
- `FIRST_RUN.md` shows the cold-start behavior.
- `FIRST_REPLY_SCORECARD.md` makes the first reply pass/fail.
- `JUDGE_BRIEF.md` gives the one-page winning case.
- `COMPETITION_RULES_TRACE.md` maps the Week 5 rules to evidence.
- `ICM_TRACE.md` maps the system to visible, editable, auditable workflow.
- `RECEIPTS.md` maps claims to source files.
- `demo/transcript-pack.md` and `demo/whole-person-tour.md` show test prompts.
- `evals/red-face-tests.md` checks shame, overload, time, inbox, capture, and safety pressure.
- `reference/coaching-protocols.md`, `reference/signal-map.md`, and `reference/safety-boundaries.md` hold the operating protocols.
- `landing/evidence.html` renders the public proof room.

## Search And AI Discovery

The public discovery files are:

- `robots.txt` for crawler access and sitemap discovery.
- `sitemap.xml` for the landing page, live chat demo, evidence reader, and pitch reel URLs.
- `llms.txt` for answer engines, AI search, and LLM citation context.
- `landing/index.html` for canonical URL, preview metadata, and structured data.

## Verification

Run the final gate:

```bash
node scripts/final-review-smoke.mjs --expect-ready --skip-build
```

For the public URL and privacy pass:

```bash
node scripts/verify-github-public-url.mjs
node scripts/verify-final-privacy-scan.mjs
```

`scripts/verify-github-public-url.mjs` checks that the approved repository URL is visible through unauthenticated GitHub API access.

The full verifier list lives in `PUBLICATION_CHECKLIST.md` and `scripts/`.

## Safety

Unstuck is not therapy, diagnosis, medication advice, crisis care, or autonomous account access. It can help the user identify the next visible move; it does not secretly operate their inbox, calendar, files, or accounts.
