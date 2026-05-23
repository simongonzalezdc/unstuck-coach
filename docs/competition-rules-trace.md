# Competition Rules Trace

This file maps the Week 5 brief to the exact artifact that satisfies each rule or judging question.

Current status: approved for public review at the GitHub link in `SUBMISSION.md`.

## Brief Requirements

| Week 5 requirement | Where it is satisfied | How to verify |
| --- | --- | --- |
| Build a folder-based AI coach | `identity.md`, `rules.md`, `examples.md`, `reference/`, `README.md` | Required files exist and each has one job. |
| Pick a specific domain | `identity.md`, `docs/writeup.md`, `README.md` | Domain is whole-person executive-function accessibility across starting, switching, remembering, body-state routing, capture, re-entry, overload, and closure thresholds. |
| Make it portable into a Claude Project | `PROJECT_INSTRUCTIONS.md`, `README.md`, `docs/judge-walkthrough.md` | Paste the project instructions, load the folder as knowledge, and try the three judge prompts. |
| Coach, not knowledge base | `rules.md`, `examples.md`, `FIRST_RUN.md`, `demo/before-after.md`, `evals/red-face-tests.md` | Good responses name state/friction, give one move, and ask for proof instead of explaining productivity. |
| Include `identity.md` | `identity.md` | Defines athlete, promise, voice, boundaries, and refusal style. |
| Include `rules.md` | `rules.md` | Defines the coaching loop and routing rules. |
| Include `examples.md` | `examples.md` | Calibrates responses under task-start friction, capture, overload, communication threat, failed plans, and recovery. |
| Include `reference/` | `reference/coaching-protocols.md`, `reference/signal-map.md`, `reference/safety-boundaries.md`, `reference/research-notes.md` | Protocols, signal routing, research lineage, and boundaries are separated into reference files. |
| Include `README.md` | `README.md` | Gives setup, judge path, prompt list, and proof artifacts. |
| Submit a public GitHub repo link | `SUBMISSION.md` | The public repository link is ready to submit. |
| Include 2-3 sentences describing who the coach is and who it coaches | `SUBMISSION.md` | The Skool comment draft is 2-3 sentences. |
| Respect Premium/VIP eligibility | `SUBMISSION.md` | The public submission text is ready to post from the approved account. |

## Judging Questions

| Judging question | Evidence | Strong-signal check |
| --- | --- | --- |
| Does it actually coach? | `FIRST_RUN.md`, `demo/before-after.md`, `rules.md`, `examples.md`, `landing/index.html` | Try "I need a coach to get started on this." The response should create one concrete next move and ask for tiny proof. |
| Is the domain specific enough? | `identity.md`, `docs/writeup.md`, `docs/judge-brief.md`, `docs/judge-scorecard.md` | The user is not "everyone"; it is a person with executive-function access friction at concrete life-loop thresholds. |
| Is the methodology clean and useful? | `docs/icm-trace.md`, `PROJECT_INSTRUCTIONS.md`, `rules.md`, `reference/`, `docs/receipts.md` | The loop is inspectable: state, friction, move, hold, check, close, with a public ICM trace. |
| Does the README make it easy for someone else to use? | `README.md`, `docs/judge-walkthrough.md`, `docs/handoff-card.md` | A stranger gets setup, prompts, proof files, and pass/fail criteria without a call. |

## Above-The-Brief Proof

- `landing/index.html`: visual judge path and hosted live-demo route.
- `docs/icm-trace.md`: explicit ICM fit map from workflow architecture to folder evidence.
- `FIRST_RUN.md`: exact cold-start receipt for the first judge prompt.
- `docs/judge-brief.md`: one-page above-the-brief case, fast judge test, failure modes, ICM fit, and evidence map.
- `docs/judge-scorecard.md`: 18-point scoring rubric.
- `docs/judge-faq.md`: short answers to predictable judge objections.
- `docs/receipts.md`: claim-to-file proof map.
- `docs/walkthrough.md`: 90-second recording/read-through path.
- `docs/pitch-reel.md` and `landing/reel.html`: short-form video/GIF proof path.

## Current Status

- The public repository link is ready.
- The landing page routes to the live demo and readable evidence.
- The folder can be tested from the first cold prompt without a live explainer.
