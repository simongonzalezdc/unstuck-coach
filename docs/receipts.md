# Unstuck Coach Receipts

Use this as the evidence map for the entry. Each claim should point to a file a judge can inspect directly.

| Claim | Evidence | What To Check |
| --- | --- | --- |
| This is a folder-based coach, not a standalone app | `identity.md`, `rules.md`, `examples.md`, `reference/`, `README.md` | The required Week 5 files exist and each file has a clear job. |
| It fits the Week 5 brief | `docs/competition-rules-trace.md`, `README.md`, `SUBMISSION.md` | The rules trace maps each requirement and judging question to the file that proves it. |
| The product thesis is explicit | `docs/product-thesis.md` | The entry explains why the folder is the product, why first contact is a cold test rather than the whole scope, how the method maps to whole-person accessibility behavior, and where the coach stops. |
| ICM fit is explicit and inspectable | `docs/icm-trace.md`, `docs/competition-rules-trace.md` | The entry maps staged context, editable decisions, handoffs, auditability, and publication safety to concrete files and checks. |
| The first reply is scoreable | `FIRST_REPLY_SCORECARD.md` | The judge can reject articles, menus, moralizing, vague continuations, and unsafe clinical moves before reading the whole folder. |
| It is paste-ready beyond Claude Project | `PROJECT_INSTRUCTIONS.md`, `README.md`, `START_HERE.md`, `landing/index.html` | A stranger can add the folder as knowledge in Claude Project or another file-aware project workspace. |
| It has a true first file | `START_HERE.md` | The fastest route contains the 60-second path, exact start prompt, first-reply acceptance test, and cold prompts. |
| The first run is a receipt | `FIRST_RUN.md` | The judge can inspect the exact cold-start prompt, expected first reply, task-pile proof loop, and immediate fail patterns. |
| The domain is specific | `identity.md`, `docs/writeup.md` | The athlete is a whole person with executive-function access friction at concrete start, switch, memory, body-state, re-entry, and closure thresholds, not a generic self-improvement audience. |
| The operating surface is inspectable | `reference/signal-map.md`, `landing/index.html`, `PROJECT_INSTRUCTIONS.md` | The folder maps food/body, calendar/inbox, messages/shame, home/admin loops, capture/re-entry, and closure/recovery to first coaching moves and proof checks. |
| The whole-person tour is testable | `demo/whole-person-tour.md` | A judge can run six cold prompts across food/body, calendar/inbox, messages/shame, home/admin, capture/re-entry, and closure/recovery, with proof checks and immediate-fail signals. |
| The coach actually coaches | `rules.md`, `examples.md`, `demo/before-after.md`, `demo/transcript-pack.md` | Responses start with state/friction/one move rather than articles or tactic lists. |
| The live demo proves the first move before setup | `landing/index.html`, `SUBMISSION.md` | The landing routes to a hosted chat so the first move can be tested before any setup. |
| It handles shame and communication threat | `examples.md`, `evals/red-face-tests.md`, `reference/coaching-protocols.md` | Message and conflict spirals are sorted into literal asks before meaning-making. |
| It externalizes working memory | `rules.md`, `reference/signal-map.md`, `docs/handoff-card.md` | The coach holds the list, returns one next move, and parks the rest. |
| It preserves calendar and inbox support | `rules.md`, `examples.md`, `reference/coaching-protocols.md`, `reference/admin-ops-playbooks.md`, `reference/signal-map.md`, `PROJECT_INSTRUCTIONS.md`, `landing/index.html`, `landing/app.js` | Inbox piles and calendar drift route to live-obligation rescue, hard anchors, reply debt repair, scheduling friction, missed-obligation recovery, and one live item instead of inbox zero or a total schedule rebuild. |
| It preserves the multi-mode coaching insight | `identity.md`, `rules.md`, `reference/mode-router.md` | The coach shifts between ally support, strategy, execution, memory keeping, and recovery closure without exposing a confusing mode menu. |
| The admin layer is operational, not decorative | `reference/admin-ops-playbooks.md` | Calendar and inbox management have five playbooks, five close statuses, and explicit no-account-access boundaries. |
| It converts research into behavior | `evals/research-to-behavior-checklist.md`, `reference/research-notes.md` | Research concepts map to actual protocols, including live-obligation rescue before cleanup. |
| It is above the brief without hiding the folder | `docs/judge-brief.md`, `landing/index.html`, `docs/competition-rules-trace.md`, `docs/icm-trace.md`, `demo/transcript-pack.md`, `docs/judge-scorecard.md` | The one-page judge brief and landing proof band distinguish the required-file floor, whole-person scope, ICM trace, cold-test transcripts, and judge scorecard. |
| It removes first-run friction | `landing/index.html`, `PROJECT_INSTRUCTIONS.md`, `demo/transcript-pack.md` | The landing launch kit exposes the exact start prompt, workspace path, and cold-test prompts before the judge leaves the page. |
| The landing page carries the first move | `landing/index.html`, `START_HERE.md` | The 60-second cold-run band tells the judge exactly what to open, paste, and test before reading everything. |
| The submission surfaces stay synchronized | `SUBMISSION.md` | The primary Skool draft and landing-page version use the same approved story. |
| The launch prompts are copy-ready | `landing/index.html`, `landing/app.js` | The start prompt and four cold prompts have copy controls, including the inbox/calendar recovery prompt. |
| It makes failure obvious quickly | `landing/index.html`, `PROJECT_INSTRUCTIONS.md`, `docs/handoff-card.md`, `docs/judge-walkthrough.md` | The first-reply acceptance test separates real coaching from articles, menus, moralizing, or vague continuations. |
| It has a cold judge path | `landing/index.html`, `docs/judge-walkthrough.md`, `docs/handoff-card.md`, `demo/transcript-pack.md` | A stranger can test the first reply quickly without mistaking the judging shortcut for the whole product scope. |
| It is presentation-ready | `docs/pitch-reel.md`, `landing/reel.html`, `docs/walkthrough.md`, `landing/index.html`, `docs/receipts.md` | A short recording can show thesis, handoff, live demo, receipts, and evidence without exposing local review notes. |
| It is easy to judge | `docs/judge-brief.md`, `docs/judge-scorecard.md`, `docs/judge-walkthrough.md`, `docs/receipts.md` | A judge can read the above-the-brief case first, then score domain, folder method, coaching behavior, cold usability, pressure behavior, research conversion, safety, and proof. |
| The shortest judging objections are answered | `docs/judge-faq.md` | The FAQ gives the shortest answers to the Week 5 judging questions and points every answer to concrete evidence. |
| It has boundaries | `reference/safety-boundaries.md`, `docs/handoff-card.md` | The coach avoids therapy, diagnosis, medication guidance, and crisis handling. |

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
