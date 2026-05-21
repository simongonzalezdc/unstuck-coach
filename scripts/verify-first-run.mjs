#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const requiredText = [
  "This is the one-minute receipt for the core Week 5 question: does the folder actually coach?",
  "PROJECT_INSTRUCTIONS.md` routes this prompt directly.",
  "The coach should not ask the traffic-light question first",
  "I need a coach to get started on this.",
  "This is activation friction, not a motivation problem.",
  "We are not making a full plan yet; we are getting one move unstuck.",
  "Reply with only what is open.",
  "If nothing is open yet, reply with \"not open\"",
  "The move was still too large.",
  "Make it smaller",
  "touch the keyboard, trackpad, paper, bag, handle, or surface",
  "The form is open.",
  "You crossed the first line.",
  "point to the first field, sentence, line, object, or choice",
  "I will hold the rest.",
  "A productivity article.",
  "A long menu of options.",
  "Moralizing about discipline or motivation.",
  "node scripts/verify-public-bundle.mjs",
];

const projectInstructionRequiredText = [
  "First-message routing:",
  "If the first user message already names a stuck signal, do not ask the traffic-light question first. Route it directly.",
  "use the FIRST_RUN.md shape",
  "I need a coach to get started on this.",
  "It should not ask the traffic-light question first because the user has already given a stuck signal.",
  "Second cold prompt:",
  "When the first user message is vague, start with:",
];

function fencedTextBlocks(markdown) {
  return [...markdown.matchAll(/```text\n([\s\S]*?)\n```/g)].map((match) => match[1].trim());
}

export function verifyFirstRun(root = process.cwd()) {
  const file = path.join(root, "FIRST_RUN.md");
  const failures = [];

  if (!fs.existsSync(file)) {
    return {
      checked: false,
      checks: 0,
      promptBlocks: 0,
      failures: ["Missing FIRST_RUN.md."],
    };
  }

  const markdown = fs.readFileSync(file, "utf8");

  for (const text of requiredText) {
    if (!markdown.includes(text)) {
      failures.push(`FIRST_RUN.md is missing required text: ${text}`);
    }
  }

  const projectInstructionsPath = path.join(root, "PROJECT_INSTRUCTIONS.md");
  if (!fs.existsSync(projectInstructionsPath)) {
    failures.push("Missing PROJECT_INSTRUCTIONS.md.");
  } else {
    const projectInstructions = fs.readFileSync(projectInstructionsPath, "utf8");
    for (const text of projectInstructionRequiredText) {
      if (!projectInstructions.includes(text)) {
        failures.push(`PROJECT_INSTRUCTIONS.md is missing first-run routing text: ${text}`);
      }
    }
  }

  const prompts = fencedTextBlocks(markdown);
  if (prompts.length < 5) {
    failures.push(`Expected at least 5 pasteable first-run text blocks, got ${prompts.length}.`);
  }

  const coldPrompt = prompts.find((prompt) => prompt === "I need a coach to get started on this.");
  if (!coldPrompt) {
    failures.push("Missing exact first-run cold prompt.");
  }

  const expectedFirstReply = prompts.find((prompt) => prompt.startsWith("This is activation friction"));
  if (!expectedFirstReply) {
    failures.push("Missing exact expected first reply.");
  } else {
    const forbidden = [
      "try breaking",
      "set a timer",
      "make a to-do list",
      "stay positive",
      "prioritize",
    ];
    for (const phrase of forbidden) {
      if (expectedFirstReply.toLowerCase().includes(phrase)) {
        failures.push(`Expected first reply contains generic-advice phrase: ${phrase}`);
      }
    }
  }

  const tableRows = (markdown.match(/^\| .+ \|$/gm) || []).length;
  if (tableRows < 5) {
    failures.push(`FIRST_RUN.md score table is too small: ${tableRows} rows.`);
  }

  return {
    checked: true,
    checks: requiredText.length + projectInstructionRequiredText.length,
    promptBlocks: prompts.length,
    tableRows,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyFirstRun();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
