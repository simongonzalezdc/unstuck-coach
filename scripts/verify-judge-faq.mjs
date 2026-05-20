#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

function read(root, file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

export function verifyJudgeFaq(root = process.cwd()) {
  const file = path.join(root, "JUDGE_FAQ.md");
  const failures = [];

  if (!fs.existsSync(file)) {
    return {
      checked: false,
      questions: 0,
      evidenceRefs: 0,
      failures: ["Missing JUDGE_FAQ.md."],
    };
  }

  const markdown = read(root, "JUDGE_FAQ.md");
  const questions = (markdown.match(/^## /gm) || []).length;
  const evidenceRefs = (markdown.match(/Evidence:/g) || []).length;

  const requiredText = [
    "What is Startline Coach?",
    "Who exactly does it coach?",
    "Is this just an ADHD knowledge base?",
    "How should I cold-test it?",
    "What is an immediate fail?",
    "How does it fit ICM?",
    "What goes above the brief?",
    "one-page judge brief",
    "JUDGE_BRIEF.md",
    "scripts/verify-judge-brief.mjs",
    "What is still blocked?",
    "six-stop whole-person judge tour",
    "scripts/verify-whole-person-tour.mjs",
    "I need a coach to get started on this.",
    "state, friction, one humane visible move, held context, proof, capture, body-state routing, transition, recovery, and closure",
    "scripts/verify-first-reply-acceptance.mjs",
    "scripts/final-review-smoke.mjs",
    "landing/reel.html",
    "scripts/verify-eval-coverage.mjs",
    "scripts/verify-publication-ready.mjs",
  ];

  for (const text of requiredText) {
    if (!markdown.includes(text)) {
      failures.push(`JUDGE_FAQ.md is missing required text: ${text}`);
    }
  }

  if (questions !== 8) {
    failures.push(`Expected 8 FAQ questions, found ${questions}.`);
  }

  if (evidenceRefs < 8) {
    failures.push(`Expected at least 8 evidence references, found ${evidenceRefs}.`);
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
      failures.push(`JUDGE_FAQ.md contains public-unsafe local/private text: ${text}`);
    }
  }

  return {
    checked: true,
    questions,
    evidenceRefs,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyJudgeFaq();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
