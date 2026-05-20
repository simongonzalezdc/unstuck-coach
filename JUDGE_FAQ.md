# Judge FAQ

Use this when you want the shortest answers to the Week 5 judging questions before opening every file.

## What is Startline Coach?

Startline Coach is a folder-based whole-person executive-function accessibility coach for people whose lives stall at the executive-function layer: starting, switching, remembering, regulating, capturing, recovering, or closing.

It is designed for a Claude Project: load the folder, paste `PROJECT_INSTRUCTIONS.md`, and try a real stuck prompt.

Evidence: `identity.md`, `README.md`, `PROJECT_INSTRUCTIONS.md`, `START_HERE.md`.

## Who exactly does it coach?

It coaches whole people under executive-function load:

- starting a known task, chore, message, calendar check, inbox pass, or errand,
- choosing one move from competing tasks,
- holding context outside working memory,
- re-entering after avoidance or interruption,
- handling message, conflict, inbox, calendar, or communication-threat spirals,
- parking ideas without losing them,
- routing body-state needs before planning,
- transitioning out of hyperfocus,
- closing or pausing a work loop cleanly.

Evidence: `identity.md`, `PRODUCT_THESIS.md`, `FIRST_RUN.md`, `demo/transcript-pack.md`.

`reference/signal-map.md` makes that breadth inspectable as operating surfaces: food/body, calendar/inbox, messages/shame, home/admin loops, capture/re-entry, and closure/recovery.

## Is this just an ADHD knowledge base?

No. It is ADHD-informed, but the public artifact is observable behavior: state, friction, one humane visible move, held context, proof, capture, body-state routing, transition, recovery, and closure.

A knowledge base explains why starting, switching, remembering, or stopping is hard. Startline should change the next move and preserve the person's agency.

Evidence: `rules.md`, `examples.md`, `FIRST_REPLY_SCORECARD.md`, `demo/before-after.md`.

## How should I cold-test it?

Open `START_HERE.md`, paste `PROJECT_INSTRUCTIONS.md` into a Claude Project, add the folder as project knowledge, and try:

```text
I need a coach to get started on this.
```

The first reply should name the friction without blame, give one visible move, and ask for tiny proof or one state signal.

Evidence: `START_HERE.md`, `FIRST_RUN.md`, `FIRST_REPLY_SCORECARD.md`, `scripts/verify-first-reply-acceptance.mjs`.

## What is an immediate fail?

Fail the coach if the first reply becomes:

- a productivity article,
- a long menu of tactics,
- moralizing,
- a vague continuation,
- unsafe clinical advice.

Evidence: `FIRST_REPLY_SCORECARD.md`, `PROJECT_INSTRUCTIONS.md`, `scripts/verify-first-reply-scorecard.mjs`.

## How does it fit ICM?

The system makes the workflow staged, inspectable, editable, and auditable:

- context is visible,
- decisions are explicit,
- handoffs are bounded,
- proof is attached to files and scripts,
- publication remains blocked until the approved public link exists.

Evidence: `ICM_TRACE.md`, `COMPETITION_RULES_TRACE.md`, `RECEIPTS.md`, `scripts/final-review-smoke.mjs`.

## What goes above the brief?

The required folder is present, but the entry also includes:

- a landing page,
- a one-page judge brief,
- a whole-person operating-surface map,
- a six-stop whole-person judge tour,
- a record-ready pitch reel page,
- a first-run receipt,
- a first-reply scorecard,
- cold-test transcripts,
- red-face evals,
- an eval-coverage verifier,
- calendar/inbox admin operations playbooks,
- a judge quick proof command,
- an ICM trace,
- receipts,
- a clean-public-repo staging preflight,
- one-command final smoke.

Evidence: `JUDGE_BRIEF.md`, `landing/index.html`, `landing/reel.html`, `PITCH_REEL.md`, `RECEIPTS.md`, `demo/whole-person-tour.md`, `reference/signal-map.md`, `reference/admin-ops-playbooks.md`, `scripts/verify-judge-brief.mjs`, `scripts/verify-whole-person-tour.mjs`, `scripts/verify-admin-ops-playbooks.mjs`, `scripts/verify-eval-coverage.mjs`, `scripts/judge-quick-proof.mjs`, `scripts/verify-public-bundle.mjs`.

## What is still blocked?

Public submission is intentionally blocked until:

- the folder owner approves the landing/reel design,
- a clean Week 5 public repository exists,
- the final public GitHub URL is inserted,
- the final Skool comment is approved.

Eligibility is documented as confirmed; the remaining blockers are publication and approval gates.

Evidence: `PUBLICATION_CHECKLIST.md`, `SUBMISSION.md`, `scripts/verify-publication-ready.mjs`.
