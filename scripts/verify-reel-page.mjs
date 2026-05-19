#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

function read(root, file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function localLinkTarget(href) {
  if (!href || href.startsWith("#")) return null;
  if (/^[a-z]+:/i.test(href)) return null;
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  return path.normalize(path.join("landing", clean));
}

export function verifyReelPage(root = process.cwd()) {
  const failures = [];
  const htmlPath = path.join(root, "landing/reel.html");
  const cssPath = path.join(root, "landing/reel.css");

  if (!fs.existsSync(htmlPath)) {
    return {
      checked: false,
      slides: 0,
      localRefs: 0,
      failures: ["Missing landing/reel.html."],
    };
  }

  if (!fs.existsSync(cssPath)) {
    failures.push("Missing landing/reel.css.");
  }

  const html = read(root, "landing/reel.html");
  const css = fs.existsSync(cssPath) ? read(root, "landing/reel.css") : "";
  const slides = (html.match(/class="reel-slide/g) || []).length;
  const hrefs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  const localRefs = hrefs.filter(localLinkTarget).length;

  if (slides !== 6) {
    failures.push(`Expected 6 record-ready reel slides, found ${slides}.`);
  }

  const requiredHtml = [
    "Record-ready pitch reel scenes",
    "External executive function for the whole human.",
    "start, switch, remember",
    "A stranger can start before reading every file.",
    "I need a coach to get started on this.",
    "Judge the coach on the first response.",
    "A stuck sentence becomes a coaching move.",
    "The coach is tested where generic advice breaks.",
    "The public payload verifies while publishing stays blocked.",
    "node scripts/final-review-smoke.mjs --expect-blocked",
    "../PITCH_REEL.md",
    "../scripts/verify-reel-page.mjs",
  ];

  for (const text of requiredHtml) {
    if (!html.includes(text)) {
      failures.push(`landing/reel.html is missing required text: ${text}`);
    }
  }

  const requiredCss = [
    ".reel-slide",
    "scroll-snap-type",
    "grid-template-columns",
    "overflow-wrap: anywhere",
    "var(--paper)",
    "border-top: 7px solid var(--magenta)",
    '"PP Editorial New"',
    "min-height: 100dvh",
    "transform: rotate(1.2deg)",
    "@media (max-width: 620px)",
  ];

  for (const text of requiredCss) {
    if (!css.includes(text)) {
      failures.push(`landing/reel.css is missing required text: ${text}`);
    }
  }

  const visualGuardrails = [
    {
      pattern: /font-size\s*:\s*clamp\([^;]*vw/i,
      message: "landing/reel.css uses viewport-scaled font-size clamp.",
    },
    {
      pattern: /rgba\(\s*0\s*,\s*0\s*,\s*0\s*,/i,
      message: "landing/reel.css uses pure black rgba instead of project charcoal.",
    },
    {
      pattern: /#000(?:000)?\b/i,
      message: "landing/reel.css uses pure black hex instead of project charcoal.",
    },
  ];

  for (const guardrail of visualGuardrails) {
    if (guardrail.pattern.test(css)) {
      failures.push(guardrail.message);
    }
  }

  for (const href of hrefs) {
    const target = localLinkTarget(href);
    if (target && !fs.existsSync(path.join(root, target))) {
      failures.push(`landing/reel.html local link does not resolve: ${href} -> ${target}`);
    }
  }

  const forbiddenText = [
    ["PRIVATE", "_"].join(""),
    [".cloak", "browser/"].join(""),
    [".o", "mx/"].join(""),
    ["docs", "plans"].join("/") + "/",
    ["out", "put"].join("") + "/",
    ["/", "Users", "/"].join(""),
  ];

  for (const text of forbiddenText) {
    if (html.includes(text) || css.includes(text)) {
      failures.push(`Reel page contains public-unsafe local/private text: ${text}`);
    }
  }

  const staleCodingFirstText = [
    "Open the likely file.",
    "Reply with the filename.",
  ];

  for (const text of staleCodingFirstText) {
    if (html.includes(text)) {
      failures.push(`landing/reel.html still contains stale coding-first text: ${text}`);
    }
  }

  return {
    checked: true,
    slides,
    localRefs,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyReelPage();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
