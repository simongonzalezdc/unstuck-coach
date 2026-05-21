# Publication Checklist

Use this only after the folder owner has reviewed the folder and approved the landing page.

## Do Not Publish Until

- The folder owner has read the folder.
- The folder owner has approved the landing page design.
- Premium/VIP eligibility is documented as confirmed.
- A clean Week 5 public repository exists.
- The public repository is not the Week 3 submission repo.
- The final public GitHub URL is ready to paste into `SUBMISSION.md`.
- The final public GitHub URL is rejected if it points at the old Week 3 repository.
- The final public GitHub URL is visible through unauthenticated GitHub API access.

## Final Local Checks

Run these from the working folder before copying the public payload:

```bash
node scripts/verify-submission-copy.mjs
node scripts/verify-submission-surfaces.mjs
node scripts/verify-pitch-reel.mjs
node scripts/verify-reel-page.mjs
node scripts/verify-judge-faq.mjs
node scripts/verify-judge-scorecard.mjs
node scripts/verify-judge-brief.mjs
node scripts/verify-landing-accessibility.mjs
node scripts/verify-source-notes.mjs
node scripts/verify-competition-rules-trace.mjs
node scripts/verify-product-thesis.mjs
node scripts/verify-icm-trace.mjs
node scripts/verify-mode-router.mjs
node scripts/verify-first-run.mjs
node scripts/verify-first-reply-scorecard.mjs
node scripts/verify-start-here.mjs
node scripts/verify-landing-copy.mjs
node scripts/verify-transcript-pack.mjs
node scripts/verify-first-reply-acceptance.mjs
node scripts/verify-console-behavior.mjs
node scripts/verify-eval-coverage.mjs
node scripts/verify-admin-ops-playbooks.mjs
node scripts/verify-whole-person-tour.mjs
node scripts/judge-quick-proof.mjs
node scripts/verify-public-bundle.mjs
node scripts/verify-final-privacy-scan.mjs
NODE_PATH=/path/to/node_modules node scripts/render-review-screenshots.mjs
node scripts/build-public-bundle.mjs
node scripts/verify-clean-public-stage.mjs
node scripts/stage-public-repo.mjs --target ../unstuck-coach-week5-public
node scripts/final-review-smoke.mjs --expect-blocked
```

Expected before public-link insertion:

- `verify-submission-copy.mjs` reports 2-3 Skool comment sentences.
- `verify-submission-surfaces.mjs` reports the Skool draft and SUBMISSION landing version are synchronized, while the landing avoids a separate submission panel.
- `verify-pitch-reel.mjs` reports six timed shots, a short voiceover, and zero public-unsafe private/local references.
- `verify-reel-page.mjs` reports six record-ready reel scenes, resolved local refs, and zero public-unsafe private/local references.
- `verify-judge-faq.mjs` reports eight FAQ questions, evidence references, and zero public-unsafe private/local references.
- `verify-judge-scorecard.mjs` reports nine criteria rows, a sequential fast scoring path, and zero public-unsafe private/local references.
- `verify-judge-brief.mjs` reports seven brief sections, evidence references, six fast-test steps, and zero public-unsafe private/local references.
- `verify-landing-accessibility.mjs` reports labelled landing sections, local hash links, image alt text, copy controls, tab behavior, focus-visible CSS, reduced-motion CSS, and zero failures.
- `verify-source-notes.mjs` reports source lineage, research-to-behavior rows, design-lineage bullets, portability notes, and zero public-unsafe private/local references.
- `verify-competition-rules-trace.mjs` reports 12 brief requirement rows, 4 judging question rows, above-the-brief proof bullets, 4 blockers, and zero public-unsafe private/local references.
- `verify-product-thesis.mjs` reports the folder-first product rationale, whole-person scope, proof logic, and boundaries with zero failures.
- `verify-icm-trace.mjs` reports the public ICM fit map, evidence references, and zero failures.
- `verify-mode-router.mjs` reports 5 stance rows, 5 routing rules, explicit non-coding-only execution framing, and zero failures.
- `verify-first-run.mjs` reports the cold-start receipt checks and zero failures.
- `verify-first-reply-scorecard.mjs` reports the first-reply pass/fail criteria and evidence links with zero failures.
- `verify-start-here.mjs` reports the 60-second path, first prompt, acceptance test, and proof links with zero failures.
- `verify-landing-copy.mjs` reports the landing launch-kit copy controls and target prompt text with zero failures.
- `verify-transcript-pack.mjs` reports 9 checked cases and zero failures.
- `verify-first-reply-acceptance.mjs` reports 9 checked first replies and zero failures.
- `verify-console-behavior.mjs` reports 9 checked behavior cases and zero failures.
- `verify-eval-coverage.mjs` reports 13 red-face tests, at least 12 research-to-behavior rows, and zero failures.
- `verify-admin-ops-playbooks.mjs` reports 5 admin operations playbooks, 5 close statuses, and zero failures.
- `verify-whole-person-tour.mjs` reports 6 tour stops, 6 prompt blocks, 6 proof checks, 6 immediate-fail checks, and zero failures.
- `judge-quick-proof.mjs` reports `status: "pass"` and summarizes the judge-facing proof counts without requiring the final public GitHub URL.
- `verify-public-bundle.mjs` reports zero failures.
- `verify-final-privacy-scan.mjs` reports `status: "pass"` and zero private/local provenance leaks across the public bundle.
- `render-review-screenshots.mjs` refreshes landing, narrow/mobile first-glance, evidence reader, calendar/inbox admin-band, first-run receipt, scorecard, FAQ, and reel screenshots when Playwright is available through local install or `NODE_PATH`.
- `verify-clean-public-stage.mjs` stages into a temporary separate folder, verifies the staged payload, removes the temporary target, and reports zero failures.
- `final-review-smoke.mjs --expect-blocked` reports `status: "pass"` before the final public link is inserted.
- Warnings about the missing final GitHub link are expected while the folder is still private.

## Public Repo Payload

The generated payload is:

```text
output/public-bundle/unstuck-coach/
```

After approval, keep the reviewed source folder as the canonical copy until the final link is inserted and verified. Do not maintain two different `SUBMISSION.md` files.

Recommended final sequence:

1. Insert the approved final public GitHub URL in the reviewed source folder.
2. Run the ready gates from the reviewed source folder.
3. Build or stage the public payload into the clean Week 5 public repository.
4. Run the public-bundle and ready gates again from inside that final public repository.

Copy the generated payload into the clean Week 5 public repository after the approved link is present in the reviewed source folder.

Or stage it with the guarded helper:

```bash
node scripts/stage-public-repo.mjs --target ../unstuck-coach-week5-public --write --require-ready
```

The `--require-ready` flag is for final publication staging. It refuses to stage if the reviewed source folder still has the placeholder URL or fails `verify-publication-ready.mjs`.

If the target already contains non-git files, the helper stops unless `--force` is passed after review.

From inside the copied public repository, run:

```bash
node scripts/verify-public-bundle.mjs
node scripts/verify-publication-ready.mjs
node scripts/verify-github-public-url.mjs
node scripts/verify-final-privacy-scan.mjs
node scripts/final-review-smoke.mjs --expect-ready --skip-build
```

They should still report zero failures. If any command reports that the final URL is missing or still a placeholder, the public repository was staged from the wrong copy.

## Insert The Final Link

Run this from the reviewed source folder before staging or copying into the final public repository. If the final public repository is already staged, rerun the same command there after copying only to confirm it contains the same approved link.

Dry-run first:

```bash
node scripts/prepare-publication-link.mjs --url https://github.com/OWNER/REPO
```

Write only after the dry-run looks right:

```bash
node scripts/prepare-publication-link.mjs --url https://github.com/OWNER/REPO --write
```

Then run:

```bash
node scripts/verify-publication-ready.mjs
node scripts/verify-github-public-url.mjs
node scripts/verify-final-privacy-scan.mjs
node scripts/final-review-smoke.mjs --expect-ready --skip-build
```

The final green state is:

- `status` is `ready`.
- The GitHub link is the real public Week 5 repository.
- The GitHub link is rejected if it points at the old Week 3 repository.
- The GitHub link is visible through unauthenticated GitHub API access, proving the private review repo is not being submitted by accident.
- The Skool comment draft remains 2-3 sentences.
- Product thesis, Week 5 rules trace, ICM trace, pitch reel, record-ready reel page, judge FAQ, judge scorecard, first-run receipt, first-reply scorecard, start-here path, landing copy controls, transcript pack, first-reply acceptance, and console behavior cases still pass.
- Landing accessibility, source-note lineage, mode routing, whole-person tour, admin operations, eval coverage, and submission-surface sync still pass inside the final publication gate.
- The named final privacy scan passes after the public link is inserted.
- Submission surfaces still match the approved Skool draft.
- The clean-stage preflight has passed from the source folder.
- `final-review-smoke.mjs --expect-ready --skip-build` reports `status: "pass"`.
- No local review notes, generated output, or local provenance paths are in the public bundle.

## Skool Posting Shape

Post the final public GitHub link plus the 2-3 sentence draft from `SUBMISSION.md`.

Do not include local research notes, local browser artifacts, unpublished review-pack files, or unpublished repo history.
