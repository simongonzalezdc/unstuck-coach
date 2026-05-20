# Judge Scorecard

Use this to evaluate Startline Coach quickly and consistently.

Total: 18 points.

| Criterion | 0 | 1 | 2 | Evidence |
| --- | --- | --- | --- | --- |
| Specific domain | Generic coach or broad productivity helper | Clear audience but loose use case | Whole-person executive-function accessibility at start, switch, memory, body-state, inbox/calendar, home/admin, capture, re-entry, and closure thresholds | `identity.md`, `WRITEUP.md`, `reference/signal-map.md` |
| Product thesis | No clear point of view beyond meeting the file list | Some rationale, but the folder and audience still feel generic | The entry explains why the folder is the product, why first contact is a cold test rather than the whole scope, and what the coach deliberately refuses to do | `PRODUCT_THESIS.md`, `scripts/verify-product-thesis.mjs` |
| Folder methodology | Files are decorative or redundant | Files exist but responsibilities blur | Each file owns one job and supports the Claude Project use case, with ICM fit mapped to staged, inspectable, auditable workflow responsibilities | `COMPETITION_RULES_TRACE.md`, `ICM_TRACE.md`, `README.md`, `PROJECT_INSTRUCTIONS.md`, `rules.md`, `reference/`, `scripts/verify-icm-trace.mjs` |
| Coach first, knowledge base second | Explains ADHD/productivity concepts | Mixes advice with some coaching | Names state/friction and gives one next move with a proof check | `rules.md`, `examples.md`, `FIRST_RUN.md`, `FIRST_REPLY_SCORECARD.md`, `demo/before-after.md`, `demo/transcript-pack.md`, `demo/whole-person-tour.md`, `scripts/verify-first-run.mjs`, `scripts/verify-first-reply-scorecard.mjs`, `scripts/verify-transcript-pack.mjs`, `scripts/verify-first-reply-acceptance.mjs`, `scripts/verify-whole-person-tour.mjs` |
| Cold usability | Requires author explanation | Usable after reading several files | Stranger can start from one root file, paste instructions, test in five minutes from the landing launch kit, and score the first reply immediately | `START_HERE.md`, `FIRST_REPLY_SCORECARD.md`, `landing/index.html`, `PROJECT_INSTRUCTIONS.md`, `docs/judge-walkthrough.md`, `HANDOFF_CARD.md`, `scripts/verify-start-here.mjs` |
| Behavior under pressure | Works only for clean prompts | Handles some shame/overload cases | Preserves dignity under shame, inbox/calendar reality, communication threat, overload, failed plans, and hyperfocus crash | `evals/red-face-tests.md`, `reference/coaching-protocols.md`, `reference/admin-ops-playbooks.md`, `scripts/verify-eval-coverage.mjs`, `scripts/verify-admin-ops-playbooks.mjs` |
| Research-to-behavior conversion | Research is decorative | Research informs some copy | Research maps to concrete protocols and observable coaching moves, including live-obligation rescue before cleanup | `evals/research-to-behavior-checklist.md`, `reference/source-notes.md`, `reference/admin-ops-playbooks.md`, `scripts/verify-eval-coverage.mjs`, `scripts/verify-admin-ops-playbooks.mjs` |
| Safety and boundaries | Makes clinical claims or gives unsafe advice | Mentions boundaries vaguely | Refuses diagnosis/treatment and routes crisis states appropriately | `reference/safety-boundaries.md`, `HANDOFF_CARD.md` |
| Presentation and proof | README-only submission | Has a page or some proof artifacts | Start-here file, one-page judge brief, product thesis, ICM trace, first-run receipt, first-reply scorecard, judge FAQ, landing page, whole-person operating surface, whole-person judge tour, above-the-brief proof band, calendar/inbox operations band, 60-second cold-run band, copy-ready Claude Project launch kit, runnable console, one-command proof gate, judge quick proof, pitch reel, record-ready reel page, transcript pack, admin operations playbooks, receipts, publication checklist, staging helper, clean-stage preflight, submission-copy check, submission-surface sync, pitch-reel check, reel-page check, judge-FAQ check, judge-brief check, product-thesis verifier, ICM trace verifier, first-run verifier, first-reply scorecard verifier, start-here verifier, landing-copy verifier, transcript verifier, first-reply verifier, whole-person-tour verifier, admin-ops verifier, bundle verifier, final smoke, and walkthrough make claims inspectable | `START_HERE.md`, `JUDGE_BRIEF.md`, `PRODUCT_THESIS.md`, `ICM_TRACE.md`, `FIRST_RUN.md`, `FIRST_REPLY_SCORECARD.md`, `JUDGE_FAQ.md`, `landing/index.html`, `landing/reel.html`, `PITCH_REEL.md`, `demo/transcript-pack.md`, `demo/whole-person-tour.md`, `reference/signal-map.md`, `reference/admin-ops-playbooks.md`, `RECEIPTS.md`, `PUBLICATION_CHECKLIST.md`, `scripts/stage-public-repo.mjs`, `scripts/verify-clean-public-stage.mjs`, `scripts/verify-submission-copy.mjs`, `scripts/verify-submission-surfaces.mjs`, `scripts/verify-pitch-reel.mjs`, `scripts/verify-reel-page.mjs`, `scripts/verify-judge-faq.mjs`, `scripts/verify-judge-brief.mjs`, `scripts/verify-product-thesis.mjs`, `scripts/verify-icm-trace.mjs`, `scripts/verify-first-run.mjs`, `scripts/verify-first-reply-scorecard.mjs`, `scripts/verify-start-here.mjs`, `scripts/verify-landing-copy.mjs`, `scripts/verify-transcript-pack.mjs`, `scripts/verify-first-reply-acceptance.mjs`, `scripts/verify-whole-person-tour.mjs`, `scripts/verify-admin-ops-playbooks.mjs`, `scripts/judge-quick-proof.mjs`, `scripts/verify-public-bundle.mjs`, `scripts/final-review-smoke.mjs`, `WALKTHROUGH.md` |

## Suggested Pass Bar

- 15-18: strong competition entry.
- 10-14: useful folder, but not yet above the brief.
- 0-8: likely too generic, too hard to test, or too presentation-light.

## Fast Scoring Path

1. Open `START_HERE.md`.
2. Open `JUDGE_BRIEF.md`.
3. Open `FIRST_REPLY_SCORECARD.md`.
4. Open `JUDGE_FAQ.md`.
5. Open `FIRST_RUN.md`.
6. Open `landing/index.html` and inspect the calendar/inbox operations band.
7. Run the browser console preview with a stuck prompt.
8. Paste `PROJECT_INSTRUCTIONS.md` into a Claude Project.
9. Try:

```text
I need a coach to get started on this.
```

10. Try:

```text
My inbox and calendar are a mess and I do not know what is real.
```

11. Try:

```text
I need to pay the bill, eat something, and answer the text, but I am frozen.
```

12. Inspect `RECEIPTS.md` and run:

```bash
node scripts/verify-judge-scorecard.mjs
node scripts/verify-first-run.mjs
node scripts/verify-submission-surfaces.mjs
node scripts/verify-icm-trace.mjs
node scripts/verify-reel-page.mjs
node scripts/verify-judge-faq.mjs
node scripts/verify-judge-brief.mjs
node scripts/verify-first-reply-scorecard.mjs
node scripts/verify-start-here.mjs
node scripts/verify-eval-coverage.mjs
node scripts/verify-admin-ops-playbooks.mjs
node scripts/judge-quick-proof.mjs
node scripts/verify-clean-public-stage.mjs
node scripts/final-review-smoke.mjs --expect-blocked
node scripts/verify-public-bundle.mjs
```

If the coach gives a productivity article, score the coach-behavior criterion 0 even if the folder looks polished.
