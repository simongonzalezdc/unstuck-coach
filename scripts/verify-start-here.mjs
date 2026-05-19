#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const requiredText = [
  "60-Second Path",
  "landing/index.html",
  "Claude Project launch kit",
  "PROJECT_INSTRUCTIONS.md",
  "FIRST_RUN.md",
  "I need a coach to get started on this.",
  "My inbox and calendar are a mess and I do not know what is real.",
  "First Reply Acceptance Test",
  "Names the friction without blame.",
  "Gives one visible next move.",
  "Asks for tiny proof or one state signal.",
  "If it gives a productivity article, it failed.",
  "docs/judge-walkthrough.md",
  "scripts/verify-first-reply-acceptance.mjs",
  "scripts/verify-public-bundle.mjs",
];

function fencedTextBlocks(markdown) {
  return [...markdown.matchAll(/```text\n([\s\S]*?)\n```/g)].map((match) => match[1].trim());
}

export function verifyStartHere(root = process.cwd()) {
  const file = path.join(root, "START_HERE.md");
  const failures = [];

  if (!fs.existsSync(file)) {
    return {
      checked: false,
      promptBlocks: 0,
      failures: ["Missing START_HERE.md."],
    };
  }

  const markdown = fs.readFileSync(file, "utf8");

  for (const text of requiredText) {
    if (!markdown.includes(text)) {
      failures.push(`START_HERE.md is missing required text: ${text}`);
    }
  }

  const prompts = fencedTextBlocks(markdown);
  if (prompts.length < 5) {
    failures.push(`Expected at least 5 pasteable text blocks, got ${prompts.length}.`);
  }

  const firstColdPrompt = prompts.find((prompt) => prompt === "I need a coach to get started on this.");
  if (!firstColdPrompt) {
    failures.push("Missing exact first cold prompt.");
  }

  const startPrompt = prompts.find((prompt) => prompt.startsWith("You are Startline Coach."));
  if (
    !startPrompt ||
    !startPrompt.includes("If my first message is vague, ask one state-calibrating question.") ||
    !startPrompt.includes("If I name a stuck signal, route it directly.")
  ) {
    failures.push("Missing routed Startline Coach project start prompt.");
  }

  return {
    checked: true,
    promptBlocks: prompts.length,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyStartHere();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
