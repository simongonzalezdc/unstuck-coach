# Competition Rules Trace

This file maps the Week 5 brief to the exact artifact that satisfies each rule or judging question.

Publication status is controlled by `PUBLICATION_CHECKLIST.md` and `scripts/verify-publication-ready.mjs`.

## Brief Requirements

| Week 5 requirement | Where it is satisfied | How to verify |
| --- | --- | --- |
| Build a folder-based AI coach | `identity.md`, `rules.md`, `examples.md`, `reference/`, `README.md` | Required files exist and each has one job. |
| Pick a specific domain | `identity.md`, `WRITEUP.md`, `README.md` | Domain is whole-person executive-function accessibility across starting, switching, remembering, body-state routing, capture, re-entry, overload, and closure thresholds. |
| Make it portable into a Claude Project | `PROJECT_INSTRUCTIONS.md`, `README.md`, `docs/judge-walkthrough.md` | Paste the project instructions, load the folder as knowledge, and try the three judge prompts. |
| Coach, not knowledge base | `rules.md`, `examples.md`, `FIRST_RUN.md`, `demo/before-after.md`, `evals/red-face-tests.md` | Good responses name state/friction, give one move, and ask for proof instead of explaining productivity. |
| Include `identity.md` | `identity.md` | Defines athlete, promise, voice, boundaries, and refusal style. |
| Include `rules.md` | `rules.md` | Defines the coaching loop and routing rules. |
| Include `examples.md` | `examples.md` | Calibrates responses under task-start friction, capture, overload, communication threat, failed plans, and recovery. |
| Include `reference/` | `reference/coaching-protocols.md`, `reference/signal-map.md`, `reference/safety-boundaries.md`, `reference/source-notes.md` | Protocols, signal routing, source lineage, and boundaries are separated into reference files. |
| Include `README.md` | `README.md` | Gives setup, judge path, prompt list, proof artifacts, and verification commands. |
| Submit a public GitHub repo link | `SUBMISSION.md`, `PUBLICATION_CHECKLIST.md`, `scripts/prepare-publication-link.mjs`, `scripts/verify-publication-ready.mjs` | Intentionally blocked until final approval and clean public Week 5 repo URL insertion. |
| Include 2-3 sentences describing who the coach is and who it coaches | `SUBMISSION.md`, `scripts/verify-submission-copy.mjs` | Verifier checks the Skool comment draft sentence count and length. |
| Respect Premium/VIP eligibility | `PUBLICATION_CHECKLIST.md` | Eligibility is documented as confirmed before posting. |

## Judging Questions

| Judging question | Evidence | Strong-signal check |
| --- | --- | --- |
| Does it actually coach? | `FIRST_RUN.md`, `demo/before-after.md`, `rules.md`, `examples.md`, `landing/index.html` | Try "I need a coach to get started on this." The response should create one concrete next move and ask for tiny proof. |
| Is the domain specific enough? | `identity.md`, `WRITEUP.md`, `JUDGE_BRIEF.md`, `JUDGE_SCORECARD.md` | The user is not "everyone"; it is a person with executive-function access friction at concrete life-loop thresholds. |
| Is the methodology clean and useful? | `ICM_TRACE.md`, `PROJECT_INSTRUCTIONS.md`, `rules.md`, `reference/`, `RECEIPTS.md` | The loop is inspectable: state, friction, move, hold, check, close, with a public ICM trace and verifier. |
| Does the README make it easy for someone else to use? | `README.md`, `docs/judge-walkthrough.md`, `HANDOFF_CARD.md` | A stranger gets setup, prompts, proof files, and pass/fail criteria without a call. |

## Above-The-Brief Proof

- `landing/index.html`: visual judge path and hosted GLM live-demo route.
- `ICM_TRACE.md`: explicit ICM fit map from workflow architecture to folder evidence.
- `FIRST_RUN.md`: exact cold-start receipt for the first judge prompt.
- `JUDGE_BRIEF.md`: one-page above-the-brief case, fast judge test, failure modes, ICM fit, evidence map, and blocked publication state.
- `JUDGE_SCORECARD.md`: 18-point scoring rubric.
- `JUDGE_FAQ.md`: short answers to predictable judge objections.
- `RECEIPTS.md`: claim-to-file proof map.
- `WALKTHROUGH.md`: 90-second recording/read-through path.
- `PITCH_REEL.md` and `landing/reel.html`: verified short-form video/GIF proof path.
- `scripts/verify-competition-rules-trace.mjs`: executable check for this Week 5 rules trace.
- `scripts/verify-first-run.mjs`: executable check for the first-run receipt.
- `scripts/verify-judge-scorecard.mjs`: executable check for the judge scorecard criteria and fast path.
- `scripts/verify-judge-brief.mjs`: executable check for the one-page above-the-brief case.
- `scripts/verify-judge-faq.mjs`: executable check for the judge FAQ.
- `scripts/verify-icm-trace.mjs`: executable check for the ICM trace and evidence references.
- `scripts/verify-public-bundle.mjs`: privacy, structure, landing-link, submission-copy, first-run, and console-behavior checks.
- `scripts/build-public-bundle.mjs`: ignored export for the clean Week 5 public repo.

## Current Blockers

These are deliberate blockers, not hidden gaps:

- The folder owner must approve or veto the landing page design.
- A clean public Week 5 repository must exist.
- The final public GitHub URL must replace the placeholder in `SUBMISSION.md`.
- `scripts/verify-publication-ready.mjs` must report `status: "ready"` after the final URL is inserted.
