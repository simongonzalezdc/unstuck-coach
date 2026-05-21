#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

function read(root, file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function extractVoiceover(markdown) {
  const match = markdown.match(/## Voiceover\s*```text\s*([\s\S]*?)```/i);
  return match ? match[1].trim() : "";
}

function wordCount(text) {
  return (text.match(/\b[\w'-]+\b/g) || []).length;
}

export function verifyPitchReel(root = process.cwd()) {
  const file = path.join(root, "PITCH_REEL.md");
  const failures = [];

  if (!fs.existsSync(file)) {
    return {
      checked: false,
      shotRows: 0,
      voiceoverWords: 0,
      failures: ["Missing PITCH_REEL.md."],
    };
  }

  const markdown = read(root, "PITCH_REEL.md");
  const requiredText = [
    "75-Second Shot Plan",
    "One-Line Hook",
    "Unstuck Coach gives whole people portable executive-function accessibility",
    "The first response is scoreable: name friction, give one move, ask for proof.",
    "The protocol chooses state, friction, move, and check instead of giving an article.",
    "The source proof stays readable without slowing the first move.",
    "The evidence reader renders the source files behind the claim",
    "Keep private material off screen.",
    "landing/evidence.html#first-reply-scorecard",
  ];

  for (const text of requiredText) {
    if (!markdown.includes(text)) {
      failures.push(`PITCH_REEL.md is missing required text: ${text}`);
    }
  }

  const shotRows = (markdown.match(/^\| 0:/gm) || []).length;
  if (shotRows !== 6) {
    failures.push(`Expected 6 timed shot rows, found ${shotRows}.`);
  }

  const voiceover = extractVoiceover(markdown);
  const voiceoverWords = wordCount(voiceover);
  if (!voiceover) {
    failures.push("Missing text voiceover block.");
  }
  if (voiceoverWords > 170) {
    failures.push(`Voiceover is too long for a 75-second reel: ${voiceoverWords} words.`);
  }

  const forbiddenText = [
    ["PRIVATE", "_"].join(""),
    [".cloak", "browser/"].join(""),
    [".o", "mx/"].join(""),
    ["docs", "plans"].join("/") + "/",
    ["out", "put"].join("") + "/",
    ["/", "Users", "/"].join(""),
  ];

  const publicSections = markdown.replace(/Keep private material off screen\./g, "");
  for (const text of forbiddenText) {
    if (publicSections.includes(text)) {
      failures.push(`PITCH_REEL.md contains public-unsafe local/private text outside the cut-rule warning: ${text}`);
    }
  }

  return {
    checked: true,
    shotRows,
    voiceoverWords,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyPitchReel();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
