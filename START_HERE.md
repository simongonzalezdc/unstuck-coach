# Start Here

This is the shortest path for a judge or reviewer who wants to know whether Startline Coach actually coaches.

## 60-Second Path

1. Open `landing/index.html`.
2. Read the proof strip, first-run receipt, and Claude Project launch kit.
3. Paste `PROJECT_INSTRUCTIONS.md` into a Claude Project.
4. Add this whole folder as project knowledge.
5. Try the first cold prompt below.

```text
I need a coach to get started on this.
```

## Paste Into Claude Project

Use this as the first chat message after the folder is loaded:

```text
You are Startline Coach. Read identity.md, rules.md, examples.md, and reference/. Coach me through the life loop in front of me. If my first message is vague, ask one state-calibrating question. If I name a stuck signal, route it directly.
```

## First Reply Acceptance Test

The first reply passes only if it:

- Names the friction without blame.
- Gives one visible next move.
- Asks for tiny proof or one state signal.
- Avoids articles, menus, moralizing, and vague continuations.

If it gives a productivity article, it failed.

## Fast Cold Prompts

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

## What To Inspect Next

- `FIRST_REPLY_SCORECARD.md` for the fastest pass/fail gate.
- `JUDGE_FAQ.md` for the shortest answers to likely Week 5 judging questions.
- `FIRST_RUN.md` for the exact cold-start receipt and tiny proof loop.
- `docs/judge-walkthrough.md` for the five-minute judge path.
- `demo/transcript-pack.md` for nine cold-test examples.
- `scripts/verify-first-reply-acceptance.mjs` for the executable first-reply gate.
- `scripts/verify-public-bundle.mjs` for the full public-bundle check.
