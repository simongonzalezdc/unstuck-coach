#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const requiredText = [
  "This file makes the ICM fit inspectable instead of leaving it as a claim.",
  "practical workflow architecture",
  "visible context, editable decisions, bounded handoffs, and auditable proof",
  "Practical Fit",
  "File Responsibilities",
  "What Would Fail The Fit",
  "Cold-Run Proof Path",
  "A generic ADHD or productivity knowledge base.",
  "Vague claims about methodology without scorecards, receipts, or verifiers.",
  "node scripts/verify-icm-trace.mjs",
  "node scripts/final-review-smoke.mjs --expect-ready --skip-build",
  "state, friction, move, hold, check, and close",
];

const requiredEvidence = [
  "identity.md",
  "rules.md",
  "examples.md",
  "reference/",
  "PROJECT_INSTRUCTIONS.md",
  "START_HERE.md",
  "FIRST_RUN.md",
  "FIRST_REPLY_SCORECARD.md",
  "JUDGE_SCORECARD.md",
  "RECEIPTS.md",
  "landing/index.html",
  "PUBLICATION_CHECKLIST.md",
  "scripts/verify-icm-trace.mjs",
  "scripts/final-review-smoke.mjs",
  "scripts/verify-publication-ready.mjs",
];

export function verifyIcmTrace(root = process.cwd()) {
  const file = path.join(root, "ICM_TRACE.md");
  const failures = [];

  if (!fs.existsSync(file)) {
    return {
      checked: false,
      sections: 0,
      evidenceRefs: 0,
      fitRows: 0,
      failures: ["Missing ICM_TRACE.md."],
    };
  }

  const content = fs.readFileSync(file, "utf8");

  for (const text of requiredText) {
    if (!content.includes(text)) {
      failures.push(`ICM_TRACE.md is missing required text: ${text}`);
    }
  }

  for (const evidence of requiredEvidence) {
    if (!content.includes(evidence)) {
      failures.push(`ICM_TRACE.md is missing evidence reference: ${evidence}`);
    }
  }

  const fitRows = [...content.matchAll(/^\| [^|]+ \| [^|]+ \| `[^`]+/gm)].length;
  if (fitRows < 8) {
    failures.push(`Expected at least 8 practical-fit evidence rows, got ${fitRows}.`);
  }

  return {
    checked: true,
    sections: (content.match(/^## /gm) || []).length,
    evidenceRefs: requiredEvidence.filter((evidence) => content.includes(evidence)).length,
    fitRows,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyIcmTrace();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
