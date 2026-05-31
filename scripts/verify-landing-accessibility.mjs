#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

function read(root, file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function stripTags(markup) {
  return markup.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function attrs(markup) {
  const found = {};
  for (const [, name, rawValue] of markup.matchAll(/\s([a-zA-Z:-]+)(?:="([^"]*)")?/g)) {
    found[name] = rawValue ?? true;
  }
  return found;
}

function ids(markup) {
  return new Set([...markup.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
}

function elements(markup, tag) {
  return [...markup.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "gi"))].map((match) => match[0]);
}

function localHashTargets(markup) {
  return [...markup.matchAll(/\shref="#([^"]+)"/g)].map((match) => match[1]);
}

function count(markup, pattern) {
  return (markup.match(pattern) || []).length;
}

export function verifyLandingAccessibility(root = process.cwd()) {
  const failures = [];
  const htmlPath = path.join(root, "landing/index.html");
  const cssPath = path.join(root, "landing/styles.css");
  const appPath = path.join(root, "landing/app.js");

  if (!fs.existsSync(htmlPath)) {
    return {
      checked: false,
      images: 0,
      buttons: 0,
      labelledSections: 0,
      localHashLinks: 0,
      failures: ["Missing landing/index.html."],
    };
  }

  if (!fs.existsSync(cssPath)) failures.push("Missing landing/styles.css.");
  if (!fs.existsSync(appPath)) failures.push("Missing landing/app.js.");

  const html = read(root, "landing/index.html");
  const css = fs.existsSync(cssPath) ? read(root, "landing/styles.css") : "";
  const app = fs.existsSync(appPath) ? read(root, "landing/app.js") : "";
  const allIds = ids(html);
  const sections = elements(html, "section");
  const images = elements(html, "img");
  const buttonBlocks = [...html.matchAll(/<button\b[^>]*>[\s\S]*?<\/button>/gi)].map((match) => match[0]);
  const labelledSections = sections.filter((section) => attrs(section)["aria-labelledby"]);
  const hashTargets = localHashTargets(html);

  if (!/<html\s+lang="en"/i.test(html)) {
    failures.push("landing/index.html must declare lang=\"en\".");
  }

  if (!/<meta\s+name="viewport"\s+content="width=device-width, initial-scale=1"/i.test(html)) {
    failures.push("landing/index.html must include the responsive viewport meta tag.");
  }

  const h1Count = count(html, /<h1\b/gi);
  if (h1Count !== 1) {
    failures.push(`landing/index.html should have exactly one h1, found ${h1Count}.`);
  }

  if (!/<main\s+id="top"/i.test(html) || !allIds.has("top")) {
    failures.push("landing/index.html must expose main#top for home navigation.");
  }

  for (const requiredId of ["hero-title", "how", "how-title", "privacy", "privacy-title", "stuck-sentence", "nav-links"]) {
    if (!allIds.has(requiredId)) {
      failures.push(`landing/index.html is missing required id: ${requiredId}`);
    }
  }

  for (const requiredMarkup of [
    '<header class="site-nav" aria-label="Primary">',
    '<nav id="nav-links" class="nav-links" aria-label="Page sections">',
    'aria-label="Try a stuck sentence"',
    'aria-label="Sample stuck sentences"',
  ]) {
    if (!html.includes(requiredMarkup)) {
      failures.push(`landing/index.html is missing accessibility anchor: ${requiredMarkup}`);
    }
  }

  for (const target of hashTargets) {
    if (!allIds.has(target)) {
      failures.push(`Local hash link points at missing id: #${target}`);
    }
  }

  for (const section of labelledSections) {
    const labelId = attrs(section)["aria-labelledby"];
    if (!allIds.has(labelId)) {
      failures.push(`Section aria-labelledby points at missing id: ${labelId}`);
    }
  }

  for (const image of images) {
    const imageAttrs = attrs(image);
    if (!("alt" in imageAttrs)) {
      failures.push(`Image is missing alt text: ${image}`);
      continue;
    }
    const isDecorative =
      imageAttrs["aria-hidden"] === "true" ||
      imageAttrs.role === "presentation" ||
      imageAttrs.role === "none";
    const alt = typeof imageAttrs.alt === "string" ? imageAttrs.alt.trim() : "";
    if (isDecorative && alt.length > 0) {
      failures.push(`Decorative image should use empty alt text: ${image}`);
    }
    if (!isDecorative && alt.length < 12) {
      failures.push(`Image alt text is too terse: ${imageAttrs.alt}`);
    }
  }

  for (const button of buttonBlocks) {
    const buttonAttrs = attrs(button);
    const visibleText = stripTags(button);
    if (!buttonAttrs["aria-label"] && !visibleText) {
      failures.push(`Button lacks an accessible name: ${button}`);
    }
  }

  const navToggle = elements(html, "button").find((button) => button.includes("nav-toggle"));
  if (!navToggle) {
    failures.push("Missing mobile nav toggle button.");
  } else {
    const navToggleAttrs = attrs(navToggle);
    if (navToggleAttrs["aria-controls"] !== "nav-links") {
      failures.push("Mobile nav toggle must control nav-links.");
    }
    if (navToggleAttrs["aria-expanded"] !== "false") {
      failures.push("Mobile nav toggle should default aria-expanded to false.");
    }
    if (!navToggleAttrs["aria-label"]) {
      failures.push("Mobile nav toggle needs an aria-label.");
    }
  }

  for (const forbidden of [/tabindex="\d+"/i, /autofocus\b/i, /role="button"/i]) {
    if (forbidden.test(html)) {
      failures.push(`landing/index.html contains avoidable accessibility anti-pattern: ${forbidden}`);
    }
  }

  for (const requiredCss of [":focus-visible", "@media (prefers-reduced-motion: reduce)", "scroll-behavior: auto !important"]) {
    if (!css.includes(requiredCss)) {
      failures.push(`landing/styles.css is missing accessibility CSS: ${requiredCss}`);
    }
  }

  if (/scroll-behavior\s*:\s*smooth/i.test(css)) {
    failures.push("landing/styles.css must not use smooth scrolling for hash navigation.");
  }

  for (const requiredAppText of [
    "navToggle.setAttribute(\"aria-expanded\", String(nextState))",
    "navToggle?.setAttribute(\"aria-expanded\", \"false\")",
    "button.dataset.sample",
  ]) {
    if (!app.includes(requiredAppText)) {
      failures.push(`landing/app.js is missing expected behavior text: ${requiredAppText}`);
    }
  }

  for (const requiredCopy of [
    "Paste the stuck sentence. Get one humane next move.",
    "Try Unstuck Coach",
    "See privacy and boundaries",
    "not therapy, diagnosis, or medical treatment",
    "No prompt histories, request bodies, API keys, or provider payloads in analytics.",
  ]) {
    if (!html.includes(requiredCopy)) {
      failures.push(`landing/index.html is missing required product copy: ${requiredCopy}`);
    }
  }

  for (const requiredUrl of [
    "https://unstuck.kyanitelabs.tech/",
    "https://unstuck.kyanitelabs.tech/chat/",
    "https://kyanitelabs.tech/unstuck/",
  ]) {
    if (!html.includes(requiredUrl)) {
      failures.push(`landing/index.html is missing required URL: ${requiredUrl}`);
    }
  }

  return {
    checked: true,
    images: images.length,
    buttons: buttonBlocks.length,
    labelledSections: labelledSections.length,
    localHashLinks: hashTargets.length,
    sampleButtons: count(html, /\sdata-sample=/g),
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyLandingAccessibility();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
