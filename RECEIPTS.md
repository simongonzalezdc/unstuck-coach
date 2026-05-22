# Unstuck Coach Receipts

Use this as the evidence map for the entry. Each claim should point to a file a judge can inspect directly.

| Claim | Evidence | What To Check |
| --- | --- | --- |
| This is a folder-based coach, not a standalone app | `identity.md`, `rules.md`, `examples.md`, `reference/`, `README.md` | The required Week 5 files exist and each file has a clear job. |
| It fits the Week 5 brief | `COMPETITION_RULES_TRACE.md`, `scripts/verify-competition-rules-trace.mjs`, `README.md`, `SUBMISSION.md` | The rules trace maps each requirement and judging question to the file that proves it, and the verifier keeps that map complete. |
| The product thesis is explicit | `PRODUCT_THESIS.md`, `scripts/verify-product-thesis.mjs` | The entry explains why the folder is the product, why first contact is a cold test rather than the whole scope, how the method maps to whole-person accessibility behavior, and where the coach stops. |
| ICM fit is explicit and inspectable | `ICM_TRACE.md`, `scripts/verify-icm-trace.mjs`, `COMPETITION_RULES_TRACE.md` | The entry maps staged context, editable decisions, handoffs, auditability, and publication safety to concrete files and checks. |
| The first reply is scoreable | `FIRST_REPLY_SCORECARD.md`, `scripts/verify-first-reply-scorecard.mjs`, `scripts/verify-first-reply-acceptance.mjs` | The judge can reject articles, menus, moralizing, vague continuations, and unsafe clinical moves before reading the whole folder. |
| It is paste-ready beyond Claude Project | `PROJECT_INSTRUCTIONS.md`, `README.md`, `START_HERE.md`, `landing/index.html` | A stranger can add the folder as knowledge in Claude Project, open it as a Codex workspace, create an Antigravity-style project, or paste the core files into a local-model runner. |
| It has a true first file | `START_HERE.md`, `scripts/verify-start-here.mjs` | The fastest route contains the 60-second path, exact start prompt, first-reply acceptance test, and cold prompts. |
| The first run is a receipt | `FIRST_RUN.md`, `scripts/verify-first-run.mjs` | The judge can inspect the exact cold-start prompt, expected first reply, task-pile proof loop, and immediate fail patterns. |
| The domain is specific | `identity.md`, `WRITEUP.md` | The athlete is a whole person with executive-function access friction at concrete start, switch, memory, body-state, re-entry, and closure thresholds, not a generic self-improvement audience. |
| The operating surface is inspectable | `reference/signal-map.md`, `landing/index.html`, `PROJECT_INSTRUCTIONS.md` | The folder maps food/body, calendar/inbox, messages/shame, home/admin loops, capture/re-entry, and closure/recovery to first coaching moves and proof checks. |
| The whole-person tour is testable | `demo/whole-person-tour.md`, `scripts/verify-whole-person-tour.mjs` | A judge can run six cold prompts across food/body, calendar/inbox, messages/shame, home/admin, capture/re-entry, and closure/recovery, with proof checks and immediate-fail signals. |
| The coach actually coaches | `rules.md`, `examples.md`, `demo/before-after.md`, `demo/transcript-pack.md`, `scripts/verify-transcript-pack.mjs`, `scripts/verify-first-reply-acceptance.mjs` | Responses start with state/friction/one move rather than articles or tactic lists, and the transcript pack plus first-reply verifier check all nine cold-test examples. |
| The protocol is runnable before opening Claude | `landing/index.html`, `landing/app.js` | The console translates a messy stuck point into state, friction, one move, and a proof check. |
| It handles shame and communication threat | `examples.md`, `evals/red-face-tests.md`, `reference/coaching-protocols.md` | Message and conflict spirals are sorted into literal asks before meaning-making. |
| It externalizes working memory | `rules.md`, `reference/signal-map.md`, `HANDOFF_CARD.md` | The coach holds the list, returns one next move, and parks the rest. |
| It preserves original Liam calendar and inbox support | `rules.md`, `examples.md`, `reference/coaching-protocols.md`, `reference/admin-ops-playbooks.md`, `reference/signal-map.md`, `PROJECT_INSTRUCTIONS.md`, `landing/index.html`, `landing/app.js` | Inbox piles and calendar drift route to live-obligation rescue, hard anchors, reply debt repair, scheduling friction, missed-obligation recovery, and one live item instead of inbox zero or a total schedule rebuild; the landing now gives this layer its own judge-visible band. |
| It preserves the original multi-mode coaching insight | `identity.md`, `rules.md`, `reference/mode-router.md`, `scripts/verify-mode-router.mjs` | The coach shifts between ally support, strategy, execution, memory keeping, and recovery closure without exposing a confusing mode menu or reducing engineer/execution mode to coding. |
| The admin layer is operational, not decorative | `reference/admin-ops-playbooks.md`, `scripts/verify-admin-ops-playbooks.mjs` | Calendar and inbox management have five playbooks, five close statuses, and explicit no-account-access boundaries. |
| It converts research into behavior | `evals/research-to-behavior-checklist.md`, `scripts/verify-eval-coverage.mjs`, `reference/source-notes.md`, `scripts/verify-source-notes.mjs` | Research concepts map to actual protocols, including live-obligation rescue before cleanup, and the public source notes verify competition fit, design lineage, research translation, portability, and private-provenance safety instead of acting as bibliography padding. |
| It is above the brief without hiding the folder | `JUDGE_BRIEF.md`, `landing/index.html`, `COMPETITION_RULES_TRACE.md`, `ICM_TRACE.md`, `demo/transcript-pack.md`, `JUDGE_SCORECARD.md`, `scripts/verify-judge-brief.mjs` | The one-page judge brief and landing proof band distinguish the required-file floor, whole-person scope, ICM trace, cold-test transcripts, and judge scorecard. |
| It removes first-run friction | `landing/index.html`, `PROJECT_INSTRUCTIONS.md`, `demo/transcript-pack.md` | The landing launch kit exposes the exact start prompt, non-Claude runner paths, and the first cold-test prompts before the judge leaves the page. |
| The landing page carries the first move | `landing/index.html`, `START_HERE.md`, `scripts/verify-start-here.mjs` | The 60-second cold-run band tells the judge exactly what to open, paste, and test before reading everything. |
| The submission surfaces stay synchronized | `SUBMISSION.md`, `scripts/verify-submission-surfaces.mjs` | The primary Skool draft and SUBMISSION landing-page version use the same approved story; the landing does not render a separate submission panel. |
| The launch prompts are copy-ready | `landing/index.html`, `landing/app.js`, `scripts/verify-landing-copy.mjs` | The start prompt and four cold prompts have copy controls with verified target text, including the inbox/calendar recovery prompt. |
| It makes failure obvious quickly | `landing/index.html`, `PROJECT_INSTRUCTIONS.md`, `HANDOFF_CARD.md`, `docs/judge-walkthrough.md`, `scripts/verify-first-reply-acceptance.mjs` | The first-reply acceptance test separates real coaching from articles, menus, moralizing, or vague continuations, and the verifier rejects generic-advice patterns. |
| It has a cold judge path | `landing/index.html`, `docs/judge-walkthrough.md`, `HANDOFF_CARD.md`, `demo/transcript-pack.md` | A stranger can test the first reply quickly without mistaking the judging shortcut for the whole product scope. |
| It is presentation-ready | `PITCH_REEL.md`, `landing/reel.html`, `scripts/verify-pitch-reel.mjs`, `scripts/verify-reel-page.mjs`, `WALKTHROUGH.md`, `landing/index.html`, `RECEIPTS.md` | A short recording can show thesis, handoff, runnable console, demo, receipts, and verifier without exposing local review notes. |
| It is easy to judge | `JUDGE_BRIEF.md`, `JUDGE_SCORECARD.md`, `scripts/verify-judge-brief.mjs`, `scripts/verify-judge-scorecard.mjs`, `docs/judge-walkthrough.md`, `RECEIPTS.md` | A judge can read the above-the-brief case first, then score domain, folder method, coaching behavior, cold usability, pressure behavior, research conversion, safety, and proof; the brief and scorecard fast path verify themselves. |
| The shortest judging objections are answered | `JUDGE_FAQ.md`, `scripts/verify-judge-faq.mjs` | The FAQ gives the shortest answers to the Week 5 judging questions and points every answer to concrete evidence. |
| The fast judge proof is publication-independent | `scripts/judge-quick-proof.mjs`, `START_HERE.md`, `JUDGE_BRIEF.md`, `JUDGE_SCORECARD.md` | A judge can get a passing proof summary, including the one-page winning argument and inherited inbox/calendar behavior, without needing the final public GitHub URL first. |
| It is safe to publish later | `PUBLICATION_CHECKLIST.md`, `scripts/prepare-publication-link.mjs`, `scripts/verify-publication-ready.mjs`, `scripts/verify-github-public-url.mjs`, `scripts/verify-final-privacy-scan.mjs` | The final posting lane is explicit: approval, eligibility, clean public repo, link insertion, source-note lineage, landing accessibility, whole-person tour, mode routing, final privacy scan, a green publication gate, and unauthenticated proof that the final GitHub URL is public. |
| The clean repo handoff is guarded | `scripts/stage-public-repo.mjs`, `scripts/build-public-bundle.mjs`, `PUBLICATION_CHECKLIST.md` | The payload can be staged into a separate folder only after the bundle verifies; dry-run is the default. |
| The clean repo handoff is preflighted | `scripts/verify-clean-public-stage.mjs`, `scripts/stage-public-repo.mjs`, `scripts/verify-public-bundle.mjs` | The preflight stages into a temporary separate folder, verifies from inside the staged payload, and removes the temporary target. |
| It has boundaries | `reference/safety-boundaries.md`, `HANDOFF_CARD.md` | The coach avoids therapy, diagnosis, medication guidance, and crisis handling. |
| The public bundle is self-checking | `scripts/verify-public-bundle.mjs`, `scripts/verify-submission-copy.mjs`, `scripts/verify-submission-surfaces.mjs`, `scripts/verify-pitch-reel.mjs`, `scripts/verify-reel-page.mjs`, `scripts/verify-judge-faq.mjs`, `scripts/verify-judge-scorecard.mjs`, `scripts/verify-judge-brief.mjs`, `scripts/verify-competition-rules-trace.mjs`, `scripts/verify-product-thesis.mjs`, `scripts/verify-source-notes.mjs`, `scripts/verify-icm-trace.mjs`, `scripts/verify-first-run.mjs`, `scripts/verify-first-reply-scorecard.mjs`, `scripts/verify-start-here.mjs`, `scripts/verify-landing-copy.mjs`, `scripts/verify-transcript-pack.mjs`, `scripts/verify-first-reply-acceptance.mjs`, `scripts/verify-whole-person-tour.mjs`, `scripts/verify-console-behavior.mjs`, `scripts/verify-eval-coverage.mjs`, `scripts/verify-admin-ops-playbooks.mjs`, `scripts/judge-quick-proof.mjs`, `scripts/prepare-publication-link.mjs`, `scripts/verify-publication-ready.mjs`, `scripts/verify-github-public-url.mjs`, `scripts/verify-final-privacy-scan.mjs`, `scripts/final-review-smoke.mjs`, `scripts/verify-clean-public-stage.mjs`, `scripts/build-public-bundle.mjs`, `scripts/stage-public-repo.mjs` | The verifier checks required files, local landing links/assets, product-thesis completeness, source-notes lineage completeness, Week 5 rules-trace completeness, ICM-trace completeness, pitch-reel readiness, record-ready reel page, judge FAQ, judge scorecard, judge brief, first-run receipt completeness, first-reply scorecard completeness, start-here prompt readiness, landing copy controls, Skool comment shape, synchronized submission surfaces, transcript-pack completeness, first-reply acceptance, whole-person tour coverage, runnable console classifications, eval coverage, admin operations playbooks, judge quick proof, privacy patterns, symbol-range leakage, final privacy scan, and public GitHub URL visibility; the guarded link helper and final publication gate block posting until the public GitHub link is inserted and publicly visible. |
| The one-command final smoke gate is ready | `scripts/final-review-smoke.mjs`, `PUBLICATION_CHECKLIST.md`, `scripts/verify-publication-ready.mjs`, `scripts/verify-github-public-url.mjs`, `scripts/verify-final-privacy-scan.mjs` | Before approval, the smoke test passes while publication remains blocked only on the final public GitHub link and review placeholder; after link insertion, the ready smoke must prove the GitHub URL is publicly visible and the final gate still covers source lineage, accessibility, whole-person scope, stance routing, and final privacy. |

## Five Fast Tests

Paste these into a Claude Project or another runner after loading the folder:

```text
I need a coach to get started on this.
```

Expected: accepts the messy task pile as-is, no plan essay, promises one returned next move.

```text
I need to pay the bill, eat something, and answer the text, but I am frozen.
```

Expected: working-memory overload with body-state routing, one food/body proof.

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
