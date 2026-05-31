#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { verifyConsoleBehavior } from "./verify-console-behavior.mjs";
import { verifyFinalPrivacyScan } from "./verify-final-privacy-scan.mjs";
import { verifyLandingAccessibility } from "./verify-landing-accessibility.mjs";
import { verifyLandingCopy } from "./verify-landing-copy.mjs";

function read(root, file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function addVerifierFailures(failures, label, result) {
  for (const failure of result.failures || []) {
    failures.push(`${label} check failed: ${failure}`);
  }
}

export function verifyPublicationReady(root = process.cwd()) {
  const failures = [];
  const warnings = [];

  for (const file of ["landing/index.html", "landing/styles.css", "landing/app.js", "robots.txt", "sitemap.xml", "llms.txt", "README.md"]) {
    if (!fs.existsSync(path.join(root, file))) {
      failures.push(`Missing publication file: ${file}`);
    }
  }

  const html = fs.existsSync(path.join(root, "landing/index.html")) ? read(root, "landing/index.html") : "";
  const robots = fs.existsSync(path.join(root, "robots.txt")) ? read(root, "robots.txt") : "";
  const sitemap = fs.existsSync(path.join(root, "sitemap.xml")) ? read(root, "sitemap.xml") : "";
  const llms = fs.existsSync(path.join(root, "llms.txt")) ? read(root, "llms.txt") : "";

  const consoleBehavior = verifyConsoleBehavior(root);
  addVerifierFailures(failures, "Console behavior", consoleBehavior);

  const landingCopy = verifyLandingCopy(root);
  addVerifierFailures(failures, "Landing copy", landingCopy);

  const landingAccessibility = verifyLandingAccessibility(root);
  addVerifierFailures(failures, "Landing accessibility", landingAccessibility);

  const finalPrivacyScan = verifyFinalPrivacyScan(root);
  addVerifierFailures(failures, "Final privacy scan", finalPrivacyScan);

  for (const requiredUrl of [
    "https://unstuck.kyanitelabs.tech/",
    "https://unstuck.kyanitelabs.tech/chat/",
    "https://kyanitelabs.tech/unstuck/",
  ]) {
    if (!html.includes(requiredUrl) && !llms.includes(requiredUrl)) {
      failures.push(`Publication surface is missing required URL: ${requiredUrl}`);
    }
  }

  if (!/User-agent:\s*OAI-SearchBot[\s\S]*?Allow:\s*\//i.test(robots)) {
    failures.push("robots.txt must allow OAI-SearchBot for ChatGPT search visibility.");
  }

  if (!/User-agent:\s*GPTBot[\s\S]*?Disallow:\s*\//i.test(robots)) {
    failures.push("robots.txt must explicitly disallow GPTBot unless training access is approved.");
  }

  if (!robots.includes("Sitemap: https://unstuck.kyanitelabs.tech/sitemap.xml")) {
    failures.push("robots.txt is missing the production sitemap URL.");
  }

  for (const loc of ["https://unstuck.kyanitelabs.tech/", "https://unstuck.kyanitelabs.tech/chat/"]) {
    if (!sitemap.includes(`<loc>${loc}</loc>`)) {
      failures.push(`sitemap.xml is missing ${loc}`);
    }
  }

  for (const requiredLlmsText of [
    "non-clinical executive-function accessibility coach",
    "stuck sentence into one humane next move",
    "not therapy, diagnosis, or medical treatment",
    "Analytics should not store prompts, histories, request bodies, API keys, or provider payloads.",
  ]) {
    if (!llms.includes(requiredLlmsText)) {
      failures.push(`llms.txt is missing product/discovery text: ${requiredLlmsText}`);
    }
  }

  const retiredTerms = [
    ["compe", "tition"].join(""),
    ["jud", "ge"].join(""),
    ["week", "5"].join(""),
    ["Claude", " Project", " folder"].join(""),
  ];
  if (new RegExp(retiredTerms.join("|"), "i").test(`${html}\n${robots}\n${sitemap}\n${llms}`)) {
    failures.push("Publication files still contain retired event-era language.");
  }

  if (!html.includes("application/ld+json")) {
    warnings.push("Landing page does not include structured data.");
  }

  return {
    status: failures.length === 0 ? "ready" : "blocked",
    consoleBehaviorSamples: consoleBehavior.checkedSamples,
    landingCopySamples: landingCopy.checkedSamples,
    landingCopyBlocks: landingCopy.checkedCopyBlocks,
    landingAccessibilityImages: landingAccessibility.images,
    landingAccessibilityButtons: landingAccessibility.buttons,
    landingAccessibilityLabelledSections: landingAccessibility.labelledSections,
    landingAccessibilityHashLinks: landingAccessibility.localHashLinks,
    finalPrivacyScanFiles: finalPrivacyScan.checkedFiles,
    finalPrivacyScanTextFiles: finalPrivacyScan.scannedTextFiles,
    finalPrivacyScanSkippedGuardScripts: finalPrivacyScan.skippedGuardScripts,
    failures,
    warnings,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyPublicationReady();
  console.log(JSON.stringify(summary, null, 2));

  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
