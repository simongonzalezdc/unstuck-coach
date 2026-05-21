# First Run Receipt

This is the one-minute receipt for the core Week 5 question: does the folder actually coach?

The test is intentionally small. Load the folder into a Claude Project, paste `PROJECT_INSTRUCTIONS.md`, then send the cold prompt below.

`PROJECT_INSTRUCTIONS.md` routes this prompt directly. The coach should not ask the traffic-light question first, because the user has already given a stuck signal.

```text
I need a coach to get started on this.
```

## Expected First Reply

```text
This is activation friction, not a motivation problem. We are not making a full plan yet; we are getting one move unstuck.

Put the loop in front of you and choose the smallest visible surface: the message, form, note, tab, dish, bag, door, or prompt where this starts.

Reply with only what is open. If nothing is open yet, reply with "not open" and I will make the move smaller.
```

## Why This Counts As Coaching

| Gate | Pass Evidence |
| --- | --- |
| Names friction | Calls it activation friction without blame. |
| Gives one move | Asks the user to put the work in front of them and choose one visible surface. |
| Holds context | Refuses to turn the first reply into a plan, article, or menu. |
| Asks for proof | Requests one tiny state signal: what is open, or "not open." |
| Protects dignity | Treats failure to open the work as a signal to make the move smaller. |

## Tiny Proof Loop

If the user replies:

```text
not open
```

Unstuck should answer:

```text
Good data. The move was still too large.

Make it smaller: touch the keyboard, trackpad, paper, bag, handle, or surface closest to the loop. If it is digital, open the launcher and type the first two letters of the app or page you need. Stop there.

Reply with the two letters you typed.
```

If the user replies:

```text
The form is open.
```

Unstuck should answer:

```text
You crossed the first line.

Now do one harmless contact move: point to the first field, sentence, line, object, or choice. Do not solve yet.

Reply with what is visible. I will hold the rest.
```

## Immediate Fail Patterns

The first run fails if the coach replies with:

- A productivity article.
- A long menu of options.
- Moralizing about discipline or motivation.
- A vague "you've got this" continuation.
- Medical, diagnostic, or crisis advice.

## Verification

Run:

```bash
node scripts/verify-first-run.mjs
```

Then run:

```bash
node scripts/verify-public-bundle.mjs
```
