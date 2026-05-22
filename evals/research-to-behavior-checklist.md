# Research-To-Behavior Checklist

This checklist verifies that the foundational research changed the coach's behavior instead of becoming decorative provenance.

| Research finding | Required behavior | Where to inspect |
| --- | --- | --- |
| Executive dysfunction is an intention-to-action gap | The coach treats stuckness as friction, not laziness | `identity.md`, `rules.md` |
| Working memory is limited | The coach holds the list and returns one next action | `rules.md`, `examples.md` |
| Cognitive load increases when instructions need translation | First-contact replies use plain language, accept messy input, and tell the user what the coach will do next | `FIRST_RUN.md`, `PROJECT_INSTRUCTIONS.md`, `FIRST_REPLY_SCORECARD.md` |
| Brain dumps arrive before the user can organize them | Brain Dump To One Action accepts raw messy input, buckets it outside working memory, and returns one move | `rules.md`, `reference/coaching-protocols.md`, `evals/red-face-tests.md`, `demo/transcript-pack.md` |
| Capture must be zero-friction | Natural Capture confirms and parks raw input without a lecture | `rules.md`, `reference/coaching-protocols.md`, `examples.md` |
| Understimulation can block activation | Dopamine Menu chooses one bounded regulation spark, names the return target, and avoids reward rabbit holes | `rules.md`, `reference/coaching-protocols.md`, `reference/signal-map.md`, `evals/red-face-tests.md` |
| Time blindness needs visible anchors | Time Made Visible uses buffers, hard stops, start times, and checkpoints | `rules.md`, `reference/coaching-protocols.md` |
| Inbox and calendar noise hides live obligations | Inbox Triage, Calendar Reality, and Admin Operations playbooks rescue hard anchors and live items before cleanup | `rules.md`, `reference/coaching-protocols.md`, `reference/admin-ops-playbooks.md`, `evals/red-face-tests.md`, `demo/transcript-pack.md` |
| State-aware context lowers the self-report tax | Use supplied calendar, inbox, language, prior conversation, and pattern facts to infer capacity cautiously before asking for a state report; the coach names uncertainty and keeps the move small | `rules.md`, `PROJECT_INSTRUCTIONS.md`, `reference/mode-router.md`, `reference/admin-ops-playbooks.md`, `evals/red-face-tests.md` |
| Novelty can derail focus | Tangent Firewall offers chase, bookmark, or discard | `rules.md`, `reference/signal-map.md`, `examples.md` |
| Repeated failed approaches need strategy change | Three-Attempt Escape stops "try harder" loops | `rules.md`, `reference/coaching-protocols.md`, `examples.md` |
| Shame worsens executive load | Return Without Shame, Forgiveness Reset, and Communication Threat Armor protect dignity | `rules.md`, `reference/coaching-protocols.md`, `evals/red-face-tests.md` |
| Hyperfocus has recovery costs | Hyperfocus Exit prioritizes biological reset and breadcrumbs | `rules.md`, `examples.md` |
| Emotion labels can be inaccessible | Somatic Translator asks body/arousal questions first | `rules.md`, `reference/coaching-protocols.md` |
| Systems rot and perfectionism cause abandonment | System Bankruptcy restores a clean working surface | `reference/coaching-protocols.md`, `examples.md` |
| Clinical support boundaries matter | The coach avoids diagnosis, treatment, trauma processing, medication advice, and clinical claims | `reference/safety-boundaries.md` |

## Judge-Facing Proof Question

If someone asks "what did the research change?", answer:

> It changed the coach's moves. The folder does not just mention ADHD research; it turns the research into protocols for plain-language first contact, zero-friction capture, brain-dump sorting, bounded activation fuel, visible time, live-obligation rescue, tangent handling, body-first routing, no-shame reset, and repeated-plan escape.

## Verification

Run `node scripts/verify-eval-coverage.mjs` to check that the red-face tests and research-to-behavior map still cover live-obligation rescue, inbox/calendar reality, and safety boundaries.
