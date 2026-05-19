# Startline Coach Walkthrough

Use this as the longer recording script or as a quick read for anyone judging the folder cold. For the tight competition video/GIF layer, use `PITCH_REEL.md` and the record-ready browser page at `landing/reel.html`; both are verifier-guarded.

## One-Sentence Thesis

Startline Coach is external executive function for the whole human: start, switch, remember, regulate, capture, recover, and close without shame.

## Shot List

1. Open `START_HERE.md`.
2. Open `landing/index.html`.
3. Open `JUDGE_FAQ.md` for the shortest answers to likely judging objections.
4. Open `PITCH_REEL.md` and `landing/reel.html` if recording a tight competition video.
5. Show the thesis and proof strip: portable Claude Project folder, specific athlete, coach-first behavior.
6. Show the 60-second cold-run band.
7. Scroll to the handoff card and name the loop: state, friction, move, hold, check, close.
8. Scroll to the runnable console and type a stuck point.
9. Scroll to the demo and switch between prompts, including `Get started`.
10. Open `demo/transcript-pack.md` to show cold-test coaching transcripts.
11. Open `COMPETITION_RULES_TRACE.md` to show rule-to-file evidence.
12. Open `PRODUCT_THESIS.md` to show the design rationale.
13. Open `ICM_TRACE.md` to show the method-to-evidence map.
14. Open `FIRST_RUN.md` to show the exact cold-start receipt.
15. Open `FIRST_REPLY_SCORECARD.md` to show the pass/fail gate.
16. Open `RECEIPTS.md` to show claim-to-file evidence.
17. Run `node scripts/verify-pitch-reel.mjs`.
18. Run `node scripts/verify-reel-page.mjs`.
19. Run `node scripts/verify-judge-faq.mjs`.
20. Run `node scripts/verify-judge-scorecard.mjs`.
21. Run `node scripts/verify-competition-rules-trace.mjs`.
22. Run `node scripts/verify-product-thesis.mjs`.
23. Run `node scripts/verify-submission-surfaces.mjs`.
24. Run `node scripts/verify-icm-trace.mjs`.
25. Run `node scripts/verify-first-run.mjs`.
26. Run `node scripts/verify-first-reply-scorecard.mjs`.
27. Run `node scripts/verify-start-here.mjs`.
28. Run `node scripts/verify-transcript-pack.mjs`.
29. Run `node scripts/verify-landing-copy.mjs`.
30. Run `node scripts/verify-admin-ops-playbooks.mjs`.
31. Run `node scripts/verify-clean-public-stage.mjs`.
32. Run `node scripts/judge-quick-proof.mjs`.
33. Run `node scripts/final-review-smoke.mjs --expect-blocked`.
34. Point to the product-thesis evidence refs, rules-trace rows, pitch-reel rows, reel-page scenes, judge-FAQ questions, judge-scorecard rows, submission-surface sync, ICM-trace rows, first-run checks, first-reply scorecard checks, start-here prompt blocks, admin-ops playbooks, clean-stage preflight, judge quick proof summary, copy-button count, nine-case console behavior check, nine-case transcript check, and nine-case first-reply check in the verifier output.
35. Mention that `PUBLICATION_CHECKLIST.md` keeps the private-to-public posting lane explicit.
36. Mention that `node scripts/prepare-publication-link.mjs --url https://github.com/OWNER/REPO --write` inserts the approved public URL.
37. Mention that `node scripts/stage-public-repo.mjs --target ../startline-coach-week5-public` dry-runs the clean repository handoff.
38. Mention that `node scripts/verify-publication-ready.mjs` becomes the final green gate after the public GitHub link is inserted.
39. End on `docs/judge-walkthrough.md` and the four prompts a judge should try.

## Voiceover

```text
This is Startline Coach, a folder-based AI coach for whole-person executive-function accessibility.

The fastest visible test is the startline prompt, but the coach is broader: work, home, body state, admin, communication, transition, re-entry, and shutdown.

The folder follows the Week 5 structure. START_HERE.md gives the one-minute judge path. identity.md defines the athlete and voice. rules.md teaches the coaching loop. examples.md calibrates the behavior. reference/ holds protocols, admin operations playbooks, and boundaries. README.md gives the cold-start path. PROJECT_INSTRUCTIONS.md is the paste-ready setup for Claude Project.

The important distinction is that this is not an ADHD knowledge base. It does not answer "I cannot start" with a productivity article. It checks state, names the friction without blame, gives one visible move, holds the rest of the list, asks for tiny proof, and closes the loop.

The product thesis explains the design choice: the folder is the product, first contact is a cold test rather than the whole scope, and the coach deliberately stops before therapy, diagnosis, medication advice, or autonomous execution. The ICM trace makes the method practical: visible context, editable decisions, bounded handoffs, auditable proof, and publication safety all point to files. The judge FAQ gives short answers to the questions a reviewer is likely to ask before they open every file. The first-run receipt shows the exact cold-start prompt, expected first reply, tiny proof loop, and fail patterns. The first-reply scorecard gives the fastest pass/fail gate: name friction, give one move, hold context, ask for proof, and reject articles, menus, moralizing, vague continuations, or unsafe clinical moves. The landing page includes an above-the-brief proof band, a 60-second cold-run band, a copy-ready Claude Project launch kit, a first-reply pass condition, a one-command proof gate, a judge quick proof command, and a tiny runnable console that previews the protocol: type a messy stuck point and it returns state, friction, one humane move, and a proof check. The rules trace maps the Week 5 brief to the folder, and the receipts are here so the judge does not have to trust the landing page. The scorecard makes the evaluation criteria explicit. The publication checklist keeps the last mile clear: approval, documented eligibility, clean public repo, final link, and green gate. The demo shows generic advice versus Startline coaching. The product-thesis verifier checks the rationale and evidence references, the rules-trace verifier checks Week 5 compliance rows and blockers, the judge-FAQ verifier checks the short-answer layer, the judge-scorecard verifier checks the criteria and fast path, the submission-surface verifier keeps the Skool draft and landing copy synchronized, the ICM-trace verifier checks the method map, the first-run verifier checks the cold-start receipt, the first-reply scorecard verifier checks the pass/fail gate, the start-here verifier checks the fastest path is paste-ready, the landing-copy verifier checks prompt-copy controls, the transcript verifier checks the examples are present, the first-reply verifier checks that the replies avoid generic advice while naming friction, giving one visible move, and asking for proof, the eval-coverage verifier checks red-face cases plus the research-to-behavior map, and the admin-ops verifier checks the calendar/inbox playbooks. The judge quick proof command gives a publication-independent summary of those checks before the final public URL exists. The clean-stage preflight proves the public payload can move into a separate temporary folder and verify there. The final smoke test runs the proof layer in one command and confirms publication stays blocked until the public link is approved. The red-face evals test shame, overload, inbox/calendar reality, communication threat, time blindness, capture, tangents, and safety boundaries. The research-to-behavior checklist shows how the research became actual protocols, including live-obligation rescue before cleanup.

The clean repository handoff is guarded too: the staging helper verifies the bundle first, defaults to dry-run, and writes only when the target folder has been reviewed.

To test it, load the folder into a Claude Project and try five prompts: "I need a coach to get started on this." "I need to pay the bill, eat something, and answer the text, but I am frozen." "My inbox and calendar are a mess and I do not know what is real." "idea: make a shutdown checklist for Sunday nights." And "That message makes me feel like I did something wrong."

If the response is a lecture, it failed. If it creates one state-aware next move and preserves dignity, it is doing the job.
```

## Recording Checklist

- Keep the video under 90 seconds.
- Use `PITCH_REEL.md` and `landing/reel.html` for the short public-facing reel.
- Show `START_HERE.md` or the landing page first, not the file tree.
- Show the runnable console once.
- Show one live prompt switch in the demo.
- Show `FIRST_RUN.md`, `ICM_TRACE.md`, `demo/transcript-pack.md`, and `RECEIPTS.md` so the proof feels inspectable.
- Show the verifier output only long enough to make the zero-failure gate, ICM rows, clean-stage preflight, first-run checks, copy-button count, nine console behavior cases, nine transcript cases, and nine first-reply checks visible.
- Do not show local review notes, local paths, browser history, or unpublished repository settings.

## Five Demo Prompts

```text
I need a coach to get started on this.
```

```text
I need to pay the bill, eat something, and answer the text, but I am frozen.
```

```text
My inbox and calendar are a mess and I do not know what is real.
```

```text
idea: make a shutdown checklist for Sunday nights
```

```text
That message makes me feel like I did something wrong.
```
