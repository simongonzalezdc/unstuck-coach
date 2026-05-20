#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

function read(root, file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

export function verifyJudgeBrief(root = process.cwd()) {
  const file = path.join(root, "JUDGE_BRIEF.md");
  const failures = [];

  if (!fs.existsSync(file)) {
    return {
      checked: false,
      sections: 0,
      evidenceRefs: 0,
      fastTestSteps: 0,
      failures: ["Missing JUDGE_BRIEF.md."],
    };
  }

  const markdown = read(root, "JUDGE_BRIEF.md");
  const sections = (markdown.match(/^## /gm) || []).length;
  const evidenceRefs = (markdown.match(/`(?:[^`]+\.md|scripts\/[^`]+\.mjs|landing\/index\.html)`/g) || []).length;
  const fastTest = markdown.split("## Fast Judge Test")[1]?.split("## ")[0] || "";
  const fastTestSteps = (fastTest.match(/^\d+\. /gm) || []).length;

  const requiredText = [
    "A one-page read",
    "above the brief",
    "not a generic ADHD/productivity folder",
    "whole-person executive-function accessibility coach",
    "Coding is one proof scenario.",
    "food/body, calendar/inbox, messages/shame, home/admin loops, capture/re-entry, transitions, hyperfocus recovery, and shutdown",
    "above-the-brief layer",
    "first-run receipt",
    "first-reply scorecard",
    "six-stop whole-person tour",
    "repeatable screenshot helper",
    "desktop, mobile, and narrow mobile",
    "Calendar/inbox admin operations",
    "original Liam scope",
    "no-account-access boundary",
    "mode router preserves the original multi-mode assistant insight",
    "reference/mode-router.md",
    "ally, strategist, engineer/executor, keeper, and recovery stances",
    "I need a coach to get started on this.",
    "My inbox and calendar are a mess and I do not know what is real.",
    "node scripts/judge-quick-proof.mjs",
    "article",
    "long menu",
    "moralizing",
    "vague continuation",
    "unsafe clinical advice",
    "ICM as practical workflow architecture",
    "visible context, editable decisions, bounded handoffs, and auditable proof",
    "final public GitHub URL",
    "review placeholder",
    "owner approves the publication path",
    "PRODUCT_THESIS.md",
    "ICM_TRACE.md",
    "COMPETITION_RULES_TRACE.md",
    "FIRST_RUN.md",
    "FIRST_REPLY_SCORECARD.md",
    "demo/whole-person-tour.md",
    "reference/admin-ops-playbooks.md",
    "reference/mode-router.md",
    "evals/red-face-tests.md",
    "JUDGE_FAQ.md",
    "JUDGE_SCORECARD.md",
    "landing/index.html",
    "scripts/render-review-screenshots.mjs",
    "scripts/judge-quick-proof.mjs",
    "scripts/final-review-smoke.mjs",
  ];

  for (const text of requiredText) {
    if (!markdown.includes(text)) {
      failures.push(`JUDGE_BRIEF.md is missing required text: ${text}`);
    }
  }

  if (sections !== 7) {
    failures.push(`Expected 7 judge brief sections, found ${sections}.`);
  }

  if (evidenceRefs < 13) {
    failures.push(`Expected at least 13 evidence references, found ${evidenceRefs}.`);
  }

  if (fastTestSteps !== 6) {
    failures.push(`Expected 6 fast judge test steps, found ${fastTestSteps}.`);
  }

  const forbiddenText = [
    ["PRIVATE", "_"].join(""),
    [".cloak", "browser"].join(""),
    [".o", "mx"].join(""),
    ["docs", "plans"].join("/"),
    ["out", "put"].join("") + "/",
    ["/", "Users", "/"].join(""),
    ["Si", "mon"].join(""),
  ];

  for (const text of forbiddenText) {
    if (markdown.includes(text)) {
      failures.push(`JUDGE_BRIEF.md contains public-unsafe local/private text: ${text}`);
    }
  }

  return {
    checked: true,
    sections,
    evidenceRefs,
    fastTestSteps,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyJudgeBrief();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
