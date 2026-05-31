# Unstuck Coach

Unstuck Coach is a non-clinical executive-function accessibility coach by
Kyanite Labs.

Paste the stuck sentence. Get one humane next move.

## Product Surfaces

- Product: https://unstuck.kyanitelabs.tech/
- Live coach: https://unstuck.kyanitelabs.tech/chat/
- Kyanite Labs page: https://kyanitelabs.tech/unstuck/

## Who It Helps

Unstuck is for adults who get stuck at the first-action threshold: task
initiation, reply debt, re-entry after avoidance, admin loops, calendar/inbox
overload, shutdown, and working-memory pileups.

## Boundaries

Unstuck Coach is not therapy, diagnosis, medical treatment, or crisis support.
It supports executive-function access by naming the friction, choosing one next
move, holding the rest of the context, and asking for tiny proof.

## Analytics Posture

Track aggregate product events such as chat opened, first prompt submitted,
reply received, latency, and error status. Do not store prompts, histories,
request bodies, API keys, provider payloads, or email addresses in analytics.

## Local Checks

```bash
node scripts/verify-landing-accessibility.mjs
node scripts/verify-final-privacy-scan.mjs
```
