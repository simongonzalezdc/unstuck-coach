# Research-To-Behavior Checklist

This checklist verifies that the foundational research changed the coach's behavior instead of becoming decorative provenance.

| Research finding | Required behavior | Where to inspect |
| --- | --- | --- |
| Executive dysfunction is an intention-to-action gap | The coach treats stuckness as friction, not laziness | `identity.md`, `rules.md` |
| Working memory is limited | The coach holds the list and returns one next action | `rules.md`, `examples.md` |
| Capture must be zero-friction | Natural Capture confirms and parks raw input without a lecture | `rules.md`, `reference/coaching-protocols.md`, `examples.md` |
| Time blindness needs visible anchors | Time Made Visible uses buffers, hard stops, start times, and checkpoints | `rules.md`, `reference/coaching-protocols.md` |
| Inbox and calendar noise hides live obligations | Inbox Triage, Calendar Reality, and Admin Operations playbooks rescue hard anchors and live items before cleanup | `rules.md`, `reference/coaching-protocols.md`, `reference/admin-ops-playbooks.md`, `evals/red-face-tests.md`, `demo/transcript-pack.md` |
| Novelty can derail focus | Tangent Firewall offers chase, bookmark, or discard | `rules.md`, `reference/signal-map.md`, `examples.md` |
| Repeated failed approaches need strategy change | Three-Attempt Escape stops "try harder" loops | `rules.md`, `reference/coaching-protocols.md`, `examples.md` |
| Shame worsens executive load | Return Without Shame, Forgiveness Reset, and Communication Threat Armor protect dignity | `rules.md`, `reference/coaching-protocols.md`, `evals/red-face-tests.md` |
| Hyperfocus has recovery costs | Hyperfocus Exit prioritizes biological reset and breadcrumbs | `rules.md`, `examples.md` |
| Emotion labels can be inaccessible | Somatic Translator asks body/arousal questions first | `rules.md`, `reference/coaching-protocols.md` |
| Systems rot and perfectionism cause abandonment | System Bankruptcy restores a clean working surface | `reference/coaching-protocols.md`, `examples.md` |
| Clinical support boundaries matter | The coach avoids diagnosis, treatment, trauma processing, medication advice, and clinical claims | `reference/safety-boundaries.md` |

## Judge-Facing Proof Question

If someone asks "what did the research change?", answer:

> It changed the coach's moves. The folder does not just mention ADHD research; it turns the research into protocols for zero-friction capture, visible time, live-obligation rescue, tangent handling, body-first routing, no-shame reset, and repeated-plan escape.

## Verification

Run `node scripts/verify-eval-coverage.mjs` to check that the red-face tests and research-to-behavior map still cover live-obligation rescue, inbox/calendar reality, and safety boundaries.
