#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import vm from "node:vm";

const expectedSamples = [
  "I need a coach to get started on this.",
  "That message makes me feel like I did something wrong.",
  "I disappeared from this task and I do not know how to re-enter.",
];

function makeClassList() {
  const values = new Set();
  return {
    add(value) {
      values.add(value);
    },
    contains(value) {
      return values.has(value);
    },
    remove(value) {
      values.delete(value);
    },
    toggle(value, force) {
      const next = force === undefined ? !values.has(value) : Boolean(force);
      if (next) values.add(value);
      else values.delete(value);
      return next;
    },
    values,
  };
}

function makeElement(dataset = {}) {
  const listeners = new Map();
  return {
    attrs: {},
    classList: makeClassList(),
    dataset,
    focused: false,
    listeners,
    value: "",
    addEventListener(name, callback) {
      listeners.set(name, callback);
    },
    click() {
      const callback = listeners.get("click");
      if (callback) callback({ currentTarget: this });
    },
    focus() {
      this.focused = true;
    },
    setAttribute(name, value) {
      this.attrs[name] = String(value);
    },
  };
}

function makeHarness() {
  const documentElement = { classList: makeClassList() };
  const body = { classList: makeClassList() };
  const navToggle = makeElement();
  const stuckSentence = makeElement();
  const navLinks = [makeElement(), makeElement(), makeElement()];
  const sampleButtons = expectedSamples.map((sample) => makeElement({ sample }));

  const document = {
    body,
    documentElement,
    querySelector(selector) {
      if (selector === ".nav-toggle") return navToggle;
      if (selector === "#stuck-sentence") return stuckSentence;
      throw new Error(`Unhandled selector in console verifier: ${selector}`);
    },
    querySelectorAll(selector) {
      if (selector === "#nav-links a") return navLinks;
      if (selector === "[data-sample]") return sampleButtons;
      throw new Error(`Unhandled selector list in console verifier: ${selector}`);
    },
  };

  return { document, navLinks, navToggle, sampleButtons, stuckSentence };
}

export function verifyConsoleBehavior(root = process.cwd()) {
  const appPath = path.join(root, "landing", "app.js");
  const failures = [];

  if (!fs.existsSync(appPath)) {
    return {
      checkedSamples: 0,
      navChecked: false,
      failures: ["Missing landing/app.js."],
    };
  }

  const source = fs.readFileSync(appPath, "utf8");
  const harness = makeHarness();
  const context = vm.createContext({
    document: harness.document,
    globalThis: { document: harness.document },
  });

  vm.runInContext(source, context, {
    filename: appPath,
    timeout: 1000,
  });

  if (!harness.document.documentElement.classList.contains("js")) {
    failures.push("app.js did not add the js class to the document element.");
  }

  harness.navToggle.click();
  if (!harness.document.body.classList.contains("nav-open")) {
    failures.push("Nav toggle did not open the mobile menu.");
  }
  if (harness.navToggle.attrs["aria-expanded"] !== "true") {
    failures.push("Nav toggle did not set aria-expanded=true on open.");
  }

  harness.navLinks[0].click();
  if (harness.document.body.classList.contains("nav-open")) {
    failures.push("Nav link click did not close the mobile menu.");
  }
  if (harness.navToggle.attrs["aria-expanded"] !== "false") {
    failures.push("Nav link click did not set aria-expanded=false.");
  }

  harness.sampleButtons.forEach((button, index) => {
    button.click();
    if (harness.stuckSentence.value !== expectedSamples[index]) {
      failures.push(`Sample button ${index} did not fill the expected stuck sentence.`);
    }
    if (!harness.stuckSentence.focused) {
      failures.push(`Sample button ${index} did not focus the textarea.`);
    }
    harness.stuckSentence.focused = false;
  });

  return {
    checkedSamples: expectedSamples.length,
    navChecked: true,
    failures,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const summary = verifyConsoleBehavior();
  console.log(JSON.stringify(summary, null, 2));
  if (summary.failures.length > 0) {
    process.exitCode = 1;
  }
}
