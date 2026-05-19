# Startline Coach Receipts

Use this as the evidence map for the entry. Each claim should point to a file a judge can inspect directly.

| Claim | Evidence | What To Check |
| --- | --- | --- |
| This is a folder-based coach, not a standalone app | `identity.md`, `rules.md`, `examples.md`, `reference/`, `README.md` | The required Week 5 files exist and each file has a clear job. |
| It fits the Week 5 brief | `COMPETITION_RULES_TRACE.md`, `scripts/verify-competition-rules-trace.mjs`, `README.md`, `SUBMISSION.md` | The rules trace maps each requirement and judging question to the file that proves it, and the verifier keeps that map complete. |
| The product thesis is explicit | `PRODUCT_THESIS.md`, `scripts/verify-product-thesis.mjs` | The entry explains why the folder is the product, why first contact is a cold test rather than the whole scope, how the method maps to whole-person accessibility behavior, and where the coach stops. |
| ICM fit is explicit and inspectable | `ICM_TRACE.md`, `scripts/verify-icm-trace.mjs`, `COMPETITION_RULES_TRACE.md` | The entry maps staged context, editable decisions, handoffs, auditability, and publication safety to concrete files and checks. |
| The first reply is scoreable | `FIRST_REPLY_SCORECARD.md`, `scripts/verify-first-reply-scorecard.mjs`, `scripts/verify-first-reply-acceptance.mjs` | The judge can reject articles, menus, moralizing, vague continuations, and unsafe clinical moves before reading the whole folder. |
| It is paste-ready for Claude Project | `PROJECT_INSTRUCTIONS.md`, `README.md` | A stranger can add the folder as knowledge, paste the instructions, and start with a test prompt. |
| It has a true first file | `START_HERE.md`, `scripts/verify-start-here.mjs` | The fastest route contains the 60-second path, exact start prompt, first-reply acceptance test, and cold prompts. |
| The first run is a receipt | `FIRST_RUN.md`, `scripts/verify-first-run.mjs` | The judge can inspect the exact cold-start prompt, expected first reply, tiny proof loop, and immediate fail patterns. |
| The domain is specific | `identity.md`, `WRITEUP.md` | The athlete is a whole person with executive-function access friction at concrete start, switch, memory, body-state, re-entry, and closure thresholds, not a generic self-improvement audience. |
| The coach actually coaches | `rules.md`, `examples.md`, `demo/before-after.md`, `demo/transcript-pack.md`, `scripts/verify-transcript-pack.mjs`, `scripts/verify-first-reply-acceptance.mjs` | Responses start with state/friction/one move rather than articles or tactic lists, and the transcript pack plus first-reply verifier check all nine cold-test examples. |
| The protocol is runnable before opening Claude | `landing/index.html`, `landing/app.js` | The console translates a messy stuck point into state, friction, one move, and a proof check. |
| It handles shame and communication threat | `examples.md`, `evals/red-face-tests.md`, `reference/coaching-protocols.md` | Message and conflict spirals are sorted into literal asks before meaning-making. |
| It externalizes working memory | `rules.md`, `reference/signal-map.md`, `HANDOFF_CARD.md` | The coach holds the list, returns one next move, and parks the rest. |
| It preserves original Liam calendar and inbox support | `rules.md`, `examples.md`, `reference/coaching-protocols.md`, `reference/signal-map.md`, `PROJECT_INSTRUCTIONS.md`, `landing/app.js` | Inbox piles and calendar drift route to live-obligation rescue, hard anchors, and one visible next item instead of inbox zero or a total schedule rebuild. |
| It converts research into behavior | `evals/research-to-behavior-checklist.md`, `scripts/verify-eval-coverage.mjs`, `reference/source-notes.md` | Research concepts map to actual protocols, including live-obligation rescue before cleanup, not bibliography padding. |
| It is above the brief without hiding the folder | `landing/index.html`, `COMPETITION_RULES_TRACE.md`, `ICM_TRACE.md`, `demo/transcript-pack.md`, `JUDGE_SCORECARD.md` | The landing proof band distinguishes the required-file floor, ICM trace, cold-test transcripts, and judge scorecard. |
| It removes first-run friction | `landing/index.html`, `PROJECT_INSTRUCTIONS.md`, `demo/transcript-pack.md` | The landing launch kit exposes the exact start prompt and the first cold-test prompts before the judge leaves the page. |
| The landing page carries the first move | `landing/index.html`, `START_HERE.md`, `scripts/verify-start-here.mjs` | The 60-second cold-run band tells the judge exactly what to open, paste, and test before reading everything. |
| The submission surfaces stay synchronized | `SUBMISSION.md`, `landing/index.html`, `scripts/verify-submission-surfaces.mjs` | The primary Skool draft, SUBMISSION landing-page version, and landing-page submission section use the same approved story. |
| The launch prompts are copy-ready | `landing/index.html`, `landing/app.js`, `scripts/verify-landing-copy.mjs` | The start prompt and four cold prompts have copy controls with verified target text, including the inbox/calendar recovery prompt. |
| It makes failure obvious quickly | `landing/index.html`, `PROJECT_INSTRUCTIONS.md`, `HANDOFF_CARD.md`, `docs/judge-walkthrough.md`, `scripts/verify-first-reply-acceptance.mjs` | The first-reply acceptance test separates real coaching from articles, menus, moralizing, or vague continuations, and the verifier rejects generic-advice patterns. |
| It has a cold judge path | `landing/index.html`, `docs/judge-walkthrough.md`, `HANDOFF_CARD.md`, `demo/transcript-pack.md` | A stranger can understand and test the coach in five minutes. |
| It is presentation-ready | `PITCH_REEL.md`, `landing/reel.html`, `scripts/verify-pitch-reel.mjs`, `scripts/verify-reel-page.mjs`, `WALKTHROUGH.md`, `landing/index.html`, `RECEIPTS.md` | A short recording can show thesis, handoff, runnable console, demo, receipts, and verifier without exposing local review notes. |
| It is easy to judge | `JUDGE_SCORECARD.md`, `scripts/verify-judge-scorecard.mjs`, `docs/judge-walkthrough.md`, `RECEIPTS.md` | A judge can score domain, folder method, coaching behavior, cold usability, pressure behavior, research conversion, safety, and proof, and the scorecard fast path verifies itself. |
| The shortest judging objections are answered | `JUDGE_FAQ.md`, `scripts/verify-judge-faq.mjs` | The FAQ gives the shortest answers to the Week 5 judging questions and points every answer to concrete evidence. |
| The fast judge proof is publication-independent | `scripts/judge-quick-proof.mjs`, `START_HERE.md`, `JUDGE_SCORECARD.md` | A judge can get a passing proof summary, including the inherited inbox/calendar behavior, without needing the final public GitHub URL first. |
| It is safe to publish later | `PUBLICATION_CHECKLIST.md`, `scripts/prepare-publication-link.mjs`, `scripts/verify-publication-ready.mjs`, `scripts/verify-github-public-url.mjs` | The final posting lane is explicit: approval, eligibility, clean public repo, link insertion, a green publication gate, and unauthenticated proof that the final GitHub URL is public. |
| The clean repo handoff is guarded | `scripts/stage-public-repo.mjs`, `scripts/build-public-bundle.mjs`, `PUBLICATION_CHECKLIST.md` | The payload can be staged into a separate folder only after the bundle verifies; dry-run is the default. |
| The clean repo handoff is preflighted | `scripts/verify-clean-public-stage.mjs`, `scripts/stage-public-repo.mjs`, `scripts/verify-public-bundle.mjs` | The preflight stages into a temporary separate folder, verifies from inside the staged payload, and removes the temporary target. |
| It has boundaries | `reference/safety-boundaries.md`, `HANDOFF_CARD.md` | The coach avoids therapy, diagnosis, medication guidance, and crisis handling. |
| The public bundle is self-checking | `scripts/verify-public-bundle.mjs`, `scripts/verify-submission-copy.mjs`, `scripts/verify-submission-surfaces.mjs`, `scripts/verify-pitch-reel.mjs`, `scripts/verify-reel-page.mjs`, `scripts/verify-judge-faq.mjs`, `scripts/verify-judge-scorecard.mjs`, `scripts/verify-competition-rules-trace.mjs`, `scripts/verify-product-thesis.mjs`, `scripts/verify-icm-trace.mjs`, `scripts/verify-first-run.mjs`, `scripts/verify-first-reply-scorecard.mjs`, `scripts/verify-start-here.mjs`, `scripts/verify-landing-copy.mjs`, `scripts/verify-transcript-pack.mjs`, `scripts/verify-first-reply-acceptance.mjs`, `scripts/verify-console-behavior.mjs`, `scripts/verify-eval-coverage.mjs`, `scripts/judge-quick-proof.mjs`, `scripts/prepare-publication-link.mjs`, `scripts/verify-publication-ready.mjs`, `scripts/verify-github-public-url.mjs`, `scripts/final-review-smoke.mjs`, `scripts/verify-clean-public-stage.mjs`, `scripts/build-public-bundle.mjs`, `scripts/stage-public-repo.mjs` | The verifier checks required files, local landing links/assets, product-thesis completeness, Week 5 rules-trace completeness, ICM-trace completeness, pitch-reel readiness, record-ready reel page, judge FAQ, judge scorecard, first-run receipt completeness, first-reply scorecard completeness, start-here prompt readiness, landing copy controls, Skool comment shape, synchronized submission surfaces, transcript-pack completeness, first-reply acceptance, runnable console classifications, eval coverage, judge quick proof, privacy patterns, symbol-range leakage, and public GitHub URL visibility; the guarded link helper and final publication gate block posting until the public GitHub link is inserted and publicly visible. |
| The one-command final smoke gate is ready | `scripts/final-review-smoke.mjs`, `PUBLICATION_CHECKLIST.md`, `scripts/verify-publication-ready.mjs`, `scripts/verify-github-public-url.mjs` | Before approval, the smoke test passes while publication remains blocked only on the final public GitHub link and review placeholder; after link insertion, the ready smoke must prove the GitHub URL is publicly visible. |

## Five Fast Tests

Paste these into a Claude Project after loading the folder:

```text
I need a coach to get started on this.
```

Expected: startline moment, no plan essay, one visible surface to open.

```text
I need to pay the bill, eat something, and answer the text, but I am frozen.
```

Expected: activation friction, first-contact move, tiny proof.

```text
My inbox and calendar are a mess and I do not know what is real.
```

Expected: live-obligation rescue, one hard calendar anchor or one inbox item, no demand for inbox zero.

```text
idea: make a shutdown checklist for Sunday nights
```

Expected: capture first, no lecture, parked or routed lightly.

```text
That message makes me feel like I did something wrong.
```

Expected: separates worth from comments and sorts communication threat into action buckets.
