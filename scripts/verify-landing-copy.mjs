#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const expectedSamples = [
  {
    label: "Start",
    text: "I need a coach to get started on this.",
  },
  {
    label: "Reply",
    text: "That message makes me feel like I did something wrong.",
  },
  {
    label: "Re-enter",
    text: "I disappeared from this task and I do not know how to re-enter.",
  },
];

const expectedCopy = [
  "Paste the stuck sentence. Get one humane next move.",
  "For task initiation, working-memory overload, re-entry, messages, admin loops, and shutdown without shame.",
  "Try Unstuck Coach",
  "See privacy and boundaries",
  "No polished prompt needed. Fragments count.",
  "Unstuck Coach is not therapy, diagnosis, or medical treatment.",
  "No prompt histories, request bodies, API keys, or provider payloads in analytics.",
];

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

export function verifyLandingCopy(root = process.cwd()) {
  const htmlPath = path.join(root, "landing", "index.html");
  const jsPath = path.join(root, "landing", "app.js");
  const failures = [];

  if (!fs.existsSync(htmlPath)) {
    return {
      checkedSamples: 0,
      checkedCopyBlocks: 0,
      failures: ["Missing landing/index.html."],
    };
  }

  if (!fs.existsSync(jsPath)) {
    return {
      checkedSamples: 0,
      checkedCopyBlocks: 0,
      failures: ["Missing landing/app.js."],
    };
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const app = fs.readFileSync(jsPath, "utf8");
  const normalizedHtml = normalize(html.replace(/<[^>]*>/g, " "));

  for (const sample of expectedSamples) {
    if (!html.includes(`data-sample="${sample.text}"`)) {
      failures.push(`Missing sample value: ${sample.text}`);
    }
    if (!new RegExp(`data-sample="${sample.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>${sample.label}<`, "i").test(html)) {
      failures.push(`Missing sample label wiring: ${sample.label}`);
    }
  }

  for (const copy of expectedCopy) {
    if (!normalizedHtml.includes(copy)) {
      failures.push(`Missing product copy: ${copy}`);
    }
  }

  for (const requiredAppText of [
    "const sampleButtons = Array.from(document.querySelectorAll(\"[data-sample]\"))",
    "stuckSentence.value = button.dataset.sample || \"\"",
    "stuckSentence.focus()",
  ]) {
    if (!app.includes(requiredAppText)) {
      failures.push(`landing/app.js missing sample behavior text: ${requiredAppText}`);
    }
  }

  if (!html.includes("data-analytics-event=\"demo cta clicked\"")) {
    failures.push("Landing CTA analytics event wiring is missing.");
  }

  return {
    checkedSamples: expectedSamples.length,
    checkedCopyBlocks: expectedCopy.length,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyLandingCopy();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
