#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const root = process.cwd();
const outputDir = path.join(root, "output", "playwright");

function loadPlaywright() {
  try {
    return require("playwright");
  } catch (error) {
    throw new Error(
      "Playwright is required. Install it locally or run with NODE_PATH pointing at a node_modules directory that contains playwright.",
    );
  }
}

function fileUrl(file) {
  return pathToFileURL(path.join(root, file)).href;
}

async function captureViewport({ browser, file, name, viewport, selector, requiredText = [], elementOnly = false }) {
  const page = await browser.newPage({ viewport });
  const events = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      events.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => events.push(`pageerror: ${error.message}`));

  await page.goto(fileUrl(file), { waitUntil: "load" });
  await page.addStyleTag({
    content:
      ".reveal-item { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }",
  });
  await page.waitForTimeout(1100);

  if (selector) {
    const targetTop = await page.locator(selector).evaluate((element) => {
      return element.getBoundingClientRect().top + window.scrollY;
    });
    await page.evaluate((top) => {
      window.scrollTo(0, Math.max(0, top - 118));
    }, targetTop);
    await page.waitForTimeout(1250);
  }

  const bodyText = await page.locator("body").innerText();
  const missingText = requiredText.filter((text) => !bodyText.includes(text));
  const horizontalOverflow = await page.evaluate(() => {
    return Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth);
  });

  const screenshotPath = path.join(outputDir, `${name}.png`);
  if (elementOnly && selector) {
    await page.locator(selector).screenshot({ path: screenshotPath });
  } else {
    await page.screenshot({ path: screenshotPath, fullPage: false });
  }
  await page.close();

  return {
    name,
    file,
    selector,
    elementOnly,
    viewport,
    screenshot: screenshotPath,
    consoleOrPageEvents: events,
    horizontalOverflow,
    missingText,
  };
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();

  const captures = [
    {
      file: "landing/index.html",
      name: "startline-review-landing-desktop",
      viewport: { width: 1440, height: 1000 },
      requiredText: ["External executive function for the whole human.", "Calendar and inbox"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-landing-mobile",
      viewport: { width: 390, height: 900 },
      requiredText: ["External executive function for the whole human.", "Calendar and inbox"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-admin-desktop",
      viewport: { width: 1440, height: 1000 },
      selector: "#admin-ops",
      requiredText: ["Original operations support, rebuilt as safe coaching.", "No autonomous reading"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-admin-mobile",
      viewport: { width: 390, height: 900 },
      selector: "#admin-ops",
      requiredText: ["Original operations support, rebuilt as safe coaching.", "No autonomous reading"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-firstrun-desktop",
      viewport: { width: 1440, height: 1000 },
      selector: "#setup",
      elementOnly: true,
      requiredText: [
        "The first run is already scripted.",
        "First run receipt",
        "EXACT COLD-START RECEIPT",
        "I need a coach to get started on this.",
      ],
    },
    {
      file: "landing/index.html",
      name: "startline-review-firstrun-mobile",
      viewport: { width: 390, height: 900 },
      selector: "#setup",
      elementOnly: true,
      requiredText: [
        "The first run is already scripted.",
        "First run receipt",
        "EXACT COLD-START RECEIPT",
        "I need a coach to get started on this.",
      ],
    },
    {
      file: "landing/index.html",
      name: "startline-review-scorecard-desktop",
      viewport: { width: 1440, height: 1000 },
      selector: "#scorecard",
      requiredText: ["Judge the coach before reading the whole folder.", "Verify scorecard"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-scorecard-mobile",
      viewport: { width: 390, height: 900 },
      selector: "#scorecard",
      requiredText: ["Judge the coach before reading the whole folder.", "Verify scorecard"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-faq-desktop",
      viewport: { width: 1440, height: 1000 },
      selector: "#faq",
      requiredText: ["The fastest objections have short answers.", "Open FAQ"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-faq-mobile",
      viewport: { width: 390, height: 900 },
      selector: "#faq",
      requiredText: ["The fastest objections have short answers.", "Open FAQ"],
    },
    {
      file: "landing/index.html",
      name: "startline-review-proofgate-desktop",
      viewport: { width: 1440, height: 1000 },
      selector: "#proof-gate",
      requiredText: ["Run the whole proof layer before publishing.", "Final link missing. Review placeholder still present."],
    },
    {
      file: "landing/index.html",
      name: "startline-review-proofgate-mobile",
      viewport: { width: 390, height: 900 },
      selector: "#proof-gate",
      requiredText: ["Run the whole proof layer before publishing.", "Final link missing. Review placeholder still present."],
    },
    {
      file: "landing/index.html",
      name: "startline-review-submission-desktop",
      viewport: { width: 1440, height: 1000 },
      selector: ".submission-section",
      elementOnly: true,
      requiredText: [
        "SKOOL SUBMISSION COPY",
        "one-page judge brief",
        "whole-person tour",
        "final review smoke test",
      ],
    },
    {
      file: "landing/index.html",
      name: "startline-review-submission-mobile",
      viewport: { width: 390, height: 900 },
      selector: ".submission-section",
      elementOnly: true,
      requiredText: [
        "SKOOL SUBMISSION COPY",
        "one-page judge brief",
        "whole-person tour",
        "final review smoke test",
      ],
    },
    {
      file: "landing/reel.html",
      name: "startline-review-reel-desktop",
      viewport: { width: 1440, height: 1000 },
      requiredText: [
        "External executive function for the whole human.",
        "The public payload verifies while publishing stays blocked.",
      ],
    },
    {
      file: "landing/reel.html",
      name: "startline-review-reel-mobile",
      viewport: { width: 390, height: 900 },
      requiredText: [
        "External executive function for the whole human.",
        "The public payload verifies while publishing stays blocked.",
      ],
    },
  ];

  const results = [];
  try {
    for (const capture of captures) {
      results.push(await captureViewport({ browser, ...capture }));
    }
  } finally {
    await browser.close();
  }

  const failures = results.flatMap((result) => {
    const resultFailures = [];
    if (result.consoleOrPageEvents.length > 0) {
      resultFailures.push(`${result.name}: console/page events: ${result.consoleOrPageEvents.join("; ")}`);
    }
    if (result.horizontalOverflow > 0) {
      resultFailures.push(`${result.name}: horizontal overflow ${result.horizontalOverflow}px`);
    }
    for (const text of result.missingText) {
      resultFailures.push(`${result.name}: missing required text ${text}`);
    }
    return resultFailures;
  });

  const summary = {
    status: failures.length === 0 ? "pass" : "fail",
    outputDir,
    screenshots: results.map((result) => result.screenshot),
    captures: results.map((result) => ({
      name: result.name,
      file: result.file,
      selector: result.selector,
      elementOnly: result.elementOnly,
      viewport: result.viewport,
      horizontalOverflow: result.horizontalOverflow,
      consoleOrPageEvents: result.consoleOrPageEvents.length,
      missingText: result.missingText,
    })),
    failures,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
