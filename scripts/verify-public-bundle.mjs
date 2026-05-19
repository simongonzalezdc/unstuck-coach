#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { publicBundleDirs, publicBundleFiles } from "./public-bundle-files.mjs";
import { verifyConsoleBehavior } from "./verify-console-behavior.mjs";
import { verifyCompetitionRulesTrace } from "./verify-competition-rules-trace.mjs";
import { verifyFirstReplyAcceptance } from "./verify-first-reply-acceptance.mjs";
import { verifyFirstReplyScorecard } from "./verify-first-reply-scorecard.mjs";
import { verifyFirstRun } from "./verify-first-run.mjs";
import { verifyIcmTrace } from "./verify-icm-trace.mjs";
import { verifyJudgeFaq } from "./verify-judge-faq.mjs";
import { verifyJudgeScorecard } from "./verify-judge-scorecard.mjs";
import { verifyLandingCopy } from "./verify-landing-copy.mjs";
import { verifyPitchReel } from "./verify-pitch-reel.mjs";
import { verifyReelPage } from "./verify-reel-page.mjs";
import { verifyProductThesis } from "./verify-product-thesis.mjs";
import { verifyStartHere } from "./verify-start-here.mjs";
import { verifySubmissionCopy } from "./verify-submission-copy.mjs";
import { verifySubmissionSurfaces } from "./verify-submission-surfaces.mjs";
import { verifyTranscriptPack } from "./verify-transcript-pack.mjs";

const root = process.cwd();

const publicSafetyPatterns = [
  /PRIVATE_[A-Z0-9_]*\.md/i,
  /\/Users\/[^/\s)'"`]+/i,
  /\/private\/(?:tmp|var)\//i,
  /\b(?:Desktop|Downloads|Documents)\/[^\s)'"`]+/i,
  /\bworkspaces\/[^\s)'"`]+/i,
  /\b(?:api[_-]?key|secret|token|password)\b\s*[:=]/i,
  /\b[A-Za-z0-9_.-]+\.(?:sqlite|db|jsonl)\b/i,
  /\b(?:phone|sms|email|account|credential)s?\s*[:=]\s*[^\s]+/i,
];

const disallowedLiteralFragments = [
  ["source", "Branch"].join(""),
  ["codex", "startline"].join("/"),
  ["skool", "competitions"].join("_"),
  ["EF", "COACH"].join("-"),
  ["si", "mon", "gonzalez"].join(""),
  ["Si", "mon"].join(""),
  ["Mac", "Mini"].join(" "),
  ["KyaniteLabs", "dev-learning"].join("/"),
  ["Desktop", "liam-private"].join("/"),
  ["workspaces", "liam"].join("/"),
  ["Cloak", "Browser"].join(""),
  [".cloak", "browser"].join(""),
  ["Skool", "comment", "sweep"].join(" "),
  ["Tw", "ilio"].join(""),
  ["Tele", "gram"].join(""),
  ["patterns", "db"].join("."),
  ["calls", "jsonl"].join("."),
  ["para", "sqlite"].join("."),
];

const emojiPattern = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const unfinishedPresentationPatterns = [
  /\bTODO\s*:/,
];

const publishBlockers = [
  {
    file: "SUBMISSION.md",
    pattern: /Pending review|Do not publish/i,
    message: "Submission still contains review/publish placeholder text.",
  },
  {
    file: "SUBMISSION.md",
    pattern: /GitHub link:\s*\n\s*```text\s*\n\s*Pending review/im,
    message: "Final public GitHub link is not inserted yet.",
  },
];

const projectInstructionRequiredText = [
  "State -> Friction -> Move -> Hold -> Check -> Close.",
  "Ask one question at a time.",
  "If it gives a productivity article, it failed.",
  "First Reply Acceptance Test",
  "FIRST_RUN.md shows the exact cold-start receipt and tiny proof loop.",
  "First-message routing:",
  "If the first user message already names a stuck signal, do not ask the traffic-light question first. Route it directly.",
  "Names the friction without blame.",
  "Gives one visible next move.",
  "Asks for tiny proof or one state signal.",
  "reference/safety-boundaries.md",
];

const startHereRequiredText = [
  "60-Second Path",
  "landing/index.html",
  "PROJECT_INSTRUCTIONS.md",
  "FIRST_RUN.md",
  "FIRST_REPLY_SCORECARD.md",
  "JUDGE_FAQ.md",
  "I need a coach to get started on this.",
  "First Reply Acceptance Test",
  "If it gives a productivity article, it failed.",
  "scripts/verify-first-reply-acceptance.mjs",
];

const judgeScorecardRequiredText = [
  "Total: 18 points.",
  "Coach first, knowledge base second",
  "Product thesis",
  "ICM_TRACE.md",
  "JUDGE_FAQ.md",
  "FIRST_RUN.md",
  "score the first reply immediately",
  "If the coach gives a productivity article",
  "scripts/verify-judge-scorecard.mjs",
  "scripts/verify-public-bundle.mjs",
];

const handoffCardRequiredText = [
  "If my first message is vague, ask one state-calibrating question.",
  "If I name a stuck signal, route it directly.",
  "First Reply Acceptance Test",
  "Names the friction without blame.",
  "Gives one visible next move.",
  "Asks for tiny proof or one state signal.",
  "Avoids articles, menus, moralizing, and vague continuations.",
];

const judgeWalkthroughRequiredText = [
  "ICM_TRACE.md",
  "JUDGE_FAQ.md",
  "scripts/verify-icm-trace.mjs",
  "scripts/verify-judge-faq.mjs",
  "scripts/verify-judge-scorecard.mjs",
  "scripts/final-review-smoke.mjs --expect-blocked",
  "FIRST_RUN.md",
  "First reply acceptance test",
  "Pass: names friction, gives one visible move, asks for tiny proof or one state signal.",
  "Fail: article, long menu, moralizing, or vague continuation.",
];

const receiptsRequiredText = [
  "The product thesis is explicit",
  "ICM fit is explicit and inspectable",
  "one-command final smoke gate",
  "submission surfaces stay synchronized",
  "The first run is a receipt",
  "The first reply is scoreable",
  "preserves original Liam calendar and inbox support",
  "My inbox and calendar are a mess and I do not know what is real.",
  "It makes failure obvious quickly",
  "first-reply acceptance test",
  "shortest answers to the Week 5 judging questions",
  "articles, menus, moralizing, or vague continuations",
  "unauthenticated proof that the final GitHub URL is public",
  "scripts/verify-github-public-url.mjs",
];

const judgeFaqRequiredText = [
  "What is Startline Coach?",
  "Who exactly does it coach?",
  "Is this just an ADHD knowledge base?",
  "How should I cold-test it?",
  "What is an immediate fail?",
  "How does it fit ICM?",
  "What goes above the brief?",
  "What is still blocked?",
  "the folder owner approves the landing/reel design",
  "scripts/verify-publication-ready.mjs",
];

const publicationChecklistRequiredText = [
  "Do Not Publish Until",
  "Premium/VIP eligibility is documented as confirmed.",
  "A clean Week 5 public repository exists.",
  "The final public GitHub URL is rejected if it points at the old Week 3 repository.",
  "The final public GitHub URL is visible through unauthenticated GitHub API access.",
  "node scripts/verify-icm-trace.mjs",
  "node scripts/verify-clean-public-stage.mjs",
  "node scripts/verify-submission-surfaces.mjs",
  "node scripts/verify-pitch-reel.mjs",
  "node scripts/verify-judge-faq.mjs",
  "node scripts/verify-judge-scorecard.mjs",
  "node scripts/verify-competition-rules-trace.mjs",
  "node scripts/verify-product-thesis.mjs",
  "node scripts/final-review-smoke.mjs --expect-blocked",
  "node scripts/final-review-smoke.mjs --expect-ready --skip-build",
  "node scripts/verify-publication-ready.mjs",
  "node scripts/verify-github-public-url.mjs",
  "node scripts/verify-first-reply-scorecard.mjs",
  "node scripts/verify-start-here.mjs",
  "node scripts/verify-landing-copy.mjs",
  "node scripts/verify-first-reply-acceptance.mjs",
  "node scripts/verify-console-behavior.mjs",
];

const rulesTraceRequiredText = [
  "Brief Requirements",
  "Coach, not knowledge base",
  "ICM fit",
  "ICM_TRACE.md",
  "JUDGE_FAQ.md",
  "PITCH_REEL.md",
  "landing/reel.html",
  "scripts/verify-competition-rules-trace.mjs",
  "scripts/verify-judge-scorecard.mjs",
  "scripts/verify-judge-faq.mjs",
  "Include 2-3 sentences describing who the coach is and who it coaches",
  "Current Blockers",
  "Eligibility is documented as confirmed before posting.",
  "scripts/verify-publication-ready.mjs",
];

const transcriptPackRequiredText = [
  "Getting Started",
  "I need a coach to get started on this.",
  "Names the live friction without blame.",
  "Inbox And Calendar Reality",
  "My inbox and calendar are a mess and I do not know what is real.",
  "Reply with the anchor only.",
  "Three Failed Attempts",
  "Body-First Recovery",
  "scripts/verify-transcript-pack.mjs",
  "scripts/verify-first-reply-acceptance.mjs",
];

const stagingHelperRequiredText = [
  "--target",
  "--write",
  "Target must be outside this working folder.",
  "verify-public-bundle.mjs",
];

const finalReviewSmokeRequiredText = [
  "--expect-blocked",
  "--expect-ready",
  "--skip-build",
  "--verbose",
  "verify-submission-surfaces.mjs",
  "verify-pitch-reel.mjs",
  "verify-judge-faq.mjs",
  "verify-judge-scorecard.mjs",
  "verify-competition-rules-trace.mjs",
  "verify-publication-ready.mjs",
  "verify-github-public-url.mjs",
  "verify-icm-trace.mjs",
  "verify-clean-public-stage.mjs",
  "Expected publication gate to remain blocked before final public link insertion.",
  "Expected final GitHub URL to be publicly visible before publication.",
];

const githubPublicUrlRequiredText = [
  "unauthenticated GitHub API access",
  "private review repo cannot pass as public",
  "hasPublicGitHubUrl",
  "isDisallowedSubmissionRepo",
  "GitHub repository was not visible through unauthenticated API access",
];

const cleanPublicStageRequiredText = [
  "startline-clean-public-stage-",
  "stage-public-repo.mjs",
  "verify-public-bundle.mjs",
  "Clean-stage target must be outside this working folder.",
  "targetRemoved",
];

const submissionSurfacesRequiredText = [
  "Landing-page version",
  "landing/index.html submission section must contain the primary Skool comment draft.",
  "whose bottleneck is not intelligence or effort",
  "final review smoke test",
];

const pitchReelRequiredText = [
  "75-Second Shot Plan",
  "One-Line Hook",
  "Startline Coach gives whole people portable executive-function accessibility",
  "landing/reel.html",
  "node scripts/final-review-smoke.mjs --expect-blocked",
];

const staleCodingFirstText = [
  {
    file: "landing/reel.html",
    text: "Open the likely file.",
  },
  {
    file: "landing/reel.html",
    text: "Reply with the filename.",
  },
  {
    file: "FIRST_RUN.md",
    text: "open the likely file",
  },
  {
    file: "examples.md",
    text: "I know what bug to fix. I just cannot start.",
  },
  {
    file: "demo/transcript-pack.md",
    text: "Open the file, tab, doc, or issue",
  },
  {
    file: "FIRST_REPLY_SCORECARD.md",
    text: "open the file, tab, doc, or issue",
  },
  {
    file: "reference/coaching-protocols.md",
    text: "Tell me when the file is open.",
  },
];

const staleWholePersonDriftText = [
  {
    file: "rules.md",
    text: "Feedback And Message Armor",
  },
  {
    file: "reference/coaching-protocols.md",
    text: "Feedback And Message Armor",
  },
  {
    file: "reference/signal-map.md",
    text: "Feedback Threat",
  },
  {
    file: "landing/app.js",
    text: "Feedback or communication threat",
  },
  {
    file: "demo/transcript-pack.md",
    text: "fear of feedback",
  },
];

const readmeRequiredText = [
  "A folder-based whole-person executive-function accessibility coach for people who need help starting, switching, remembering, regulating, capturing, recovering, and closing loops without shame.",
  "The core idea: Startline Coach acts as portable executive-function accessibility.",
  "If Startline gives a productivity article, it failed.",
  "JUDGE_FAQ.md` gives the shortest answers to likely Week 5 judging objections",
  "PITCH_REEL.md` compresses the presentation layer into a verified 75-second judge reel.",
  "scripts/verify-github-public-url.mjs` proves the final GitHub link is publicly visible through unauthenticated GitHub API access",
  "node scripts/verify-github-public-url.mjs",
];

const icmTraceRequiredText = [
  "This file makes the ICM fit inspectable instead of leaving it as a claim.",
  "practical workflow architecture",
  "visible context, editable decisions, bounded handoffs, and auditable proof",
  "What Would Fail The Fit",
  "scripts/verify-icm-trace.mjs",
];

const visualCssGuardrails = [
  {
    file: "landing/reel.css",
    pattern: /font-size\s*:\s*clamp\([^;]*vw/i,
    message: "uses viewport-scaled font-size clamp",
  },
  {
    file: "landing/reel.css",
    pattern: /rgba\(\s*0\s*,\s*0\s*,\s*0\s*,/i,
    message: "uses pure black rgba instead of project charcoal",
  },
  {
    file: "landing/reel.css",
    pattern: /#000(?:000)?\b/i,
    message: "uses pure black hex instead of project charcoal",
  },
  {
    file: "landing/styles.css",
    pattern: /font-size\s*:\s*clamp\([^;]*vw/i,
    message: "uses viewport-scaled font-size clamp",
  },
  {
    file: "landing/styles.css",
    pattern: /rgba\(\s*0\s*,\s*0\s*,\s*0\s*,/i,
    message: "uses pure black rgba instead of project charcoal",
  },
  {
    file: "landing/styles.css",
    pattern: /#000(?:000)?\b/i,
    message: "uses pure black hex instead of project charcoal",
  },
];

const visualTextGuardrails = [
  {
    file: "landing/styles.css",
    pattern: /font-family\s*:[^;]*(?:Inter|Roboto|Arial|Open Sans|Helvetica)/i,
    message: "uses generic/banned font-family fallback in landing CSS",
  },
  {
    file: "landing/reel.css",
    pattern: /font-family\s*:[^;]*(?:Inter|Roboto|Arial|Open Sans|Helvetica)/i,
    message: "uses generic/banned font-family fallback in reel CSS",
  },
  {
    file: "landing/assets/startline-handoff-card.svg",
    pattern: /font-family="[^"]*(?:Inter|Roboto|Arial|Open Sans|Helvetica)/i,
    message: "uses generic/banned font-family fallback in handoff SVG",
  },
];

const visualCssRequiredText = [
  {
    file: "landing/styles.css",
    text: "--paper: #fff8ec",
    message: "missing warm-paper color token",
  },
  {
    file: "landing/styles.css",
    text: "--ink: #060910",
    message: "missing PuenteWorks black-structure token",
  },
  {
    file: "landing/styles.css",
    text: "--steel: #06434a",
    message: "missing deep bridge/teal structure token",
  },
  {
    file: "landing/styles.css",
    text: "--gold: #ffc018",
    message: "missing solar-yellow bridge signal token",
  },
  {
    file: "landing/styles.css",
    text: "--orange: #ff8b00",
    message: "missing production-orange bridge signal token",
  },
  {
    file: "landing/styles.css",
    text: "--cyan: #00d7e8",
    message: "missing reef/cyan signal token",
  },
  {
    file: "landing/styles.css",
    text: "--lime: #b7f10b",
    message: "missing lime signal token",
  },
  {
    file: "landing/styles.css",
    text: "--magenta: #ff147f",
    message: "missing magenta signal token",
  },
  {
    file: "landing/styles.css",
    text: ".mola-bridge",
    message: "missing simplified bridge motif",
  },
  {
    file: "landing/styles.css",
    text: '"PP Editorial New"',
    message: "missing editorial display typography",
  },
  {
    file: "landing/styles.css",
    text: 'font-family: "Avenir Next", "Plus Jakarta Sans", "Geist", "Satoshi", system-ui, sans-serif',
    message: "missing strong humanist/geometric page type stack",
  },
  {
    file: "landing/styles.css",
    text: "--ease-out: cubic-bezier(0.32, 0.72, 0, 1)",
    message: "missing high-end custom motion curve",
  },
  {
    file: "landing/styles.css",
    text: "body::before",
    message: "missing fixed paper/noise texture layer",
  },
  {
    file: "landing/styles.css",
    text: "body::after",
    message: "missing left-edge signal inlay",
  },
  {
    file: "landing/styles.css",
    text: ".site-nav,",
    message: "missing detached navigation island styling",
  },
  {
    file: "landing/styles.css",
    text: "top: 1.15rem",
    message: "missing detached navigation offset",
  },
  {
    file: "landing/styles.css",
    text: ".nav-toggle",
    message: "missing mobile nav morph control",
  },
  {
    file: "landing/styles.css",
    text: ".reveal-item",
    message: "missing scroll reveal choreography",
  },
  {
    file: "landing/styles.css",
    text: ".bridge-one",
    message: "missing primary bridge motif",
  },
  {
    file: "landing/styles.css",
    text: ".bridge-two",
    message: "missing secondary bridge motif",
  },
  {
    file: "landing/styles.css",
    text: "border: 2px solid var(--ink)",
    message: "missing black structural borders",
  },
  {
    file: "landing/styles.css",
    text: "linear-gradient(145deg, rgba(6, 9, 16, 0.98), rgba(6, 67, 74, 0.96))",
    message: "missing dark structural hero field",
  },
  {
    file: "landing/styles.css",
    text: "linear-gradient(90deg, var(--steel), var(--ink) 46%, #07101c)",
    message: "missing dark bridge-deck proof strip",
  },
  {
    file: "landing/styles.css",
    text: "border-top: 5px solid var(--magenta)",
    message: "missing saturated proof-card rail",
  },
  {
    file: "landing/reel.css",
    text: "var(--paper)",
    message: "missing warm-paper reel surface",
  },
  {
    file: "landing/reel.css",
    text: "border-top: 7px solid var(--magenta)",
    message: "missing colored reel rail",
  },
  {
    file: "landing/reel.css",
    text: '"PP Editorial New"',
    message: "missing editorial reel typography",
  },
  {
    file: "landing/reel.css",
    text: "min-height: 100dvh",
    message: "missing stable dynamic viewport reel sizing",
  },
  {
    file: "landing/reel.css",
    text: "transform: rotate(1.2deg)",
    message: "missing physical reel card tension",
  },
  {
    file: "landing/app.js",
    text: "IntersectionObserver",
    message: "missing efficient scroll reveal implementation",
  },
  {
    file: "landing/app.js",
    text: "optionalSelector",
    message: "missing verifier-safe optional DOM access",
  },
  {
    file: "landing/index.html",
    text: 'class="nav-toggle"',
    message: "missing mobile nav toggle markup",
  },
  {
    file: "landing/assets/startline-handoff-card.svg",
    text: 'font-family="Avenir Next, sans-serif"',
    message: "missing cleaned handoff-card SVG type stack",
  },
];

const landingRequiredText = [
  "External executive function for the whole human.",
  "Life loop",
  "body: hungry / yellow",
  "Food before planning",
  "Text without meaning-making",
  "Food, messages, bills, transitions, and re-entry all count as access work.",
  "Calendar blocks and inbox triage count too.",
  "Calendar/inbox",
  "Triage one inbox item",
  "My inbox and calendar are a mess and I do not know what is real.",
  "61 public files, 9 console cases, 9 transcripts, 9 first-reply checks.",
  "Food/body",
  "Eat before planning",
  "Leave breadcrumb",
  "This is activation friction, not a planning problem.",
  "Above the brief",
  "Whole person under executive load",
  "The folder is the product. The page makes it judgeable.",
  "Brief floor",
  "ICM fit",
  "Read ICM trace",
  "Cold test",
  "Product thesis",
  "One-command proof gate",
  "Run the whole proof layer before publishing.",
  "node scripts/final-review-smoke.mjs --expect-blocked",
  "node scripts/final-review-smoke.mjs --expect-ready --skip-build",
  "node scripts/verify-clean-public-stage.mjs",
  "Clean repo preflight",
  "node scripts/verify-submission-surfaces.mjs",
  "Submission surfaces synced.",
  "node scripts/verify-pitch-reel.mjs",
  "75-second pitch reel ready.",
  "Final link missing. Review placeholder still present.",
  "61 public files, 9 console cases, 9 transcripts, 9 first-reply checks.",
  "First run receipt",
  "Judge path",
  "Claude Project launch kit",
  "60-second cold run",
  "First reply scorecard",
  "Exact cold-start receipt",
  "PROJECT_INSTRUCTIONS.md` routes concrete stuck signals directly.",
  "The coach should not ask the traffic-light question first",
  "First reply preview",
  "Reply with what is open.",
  "Judge the coach before reading the whole folder.",
  "Copy cold prompt 04",
  "Try: \"My inbox and calendar are a mess and I do not know what is real.\"",
  "Open FAQ",
  "The fastest objections have short answers.",
  "75-second pitch reel",
  "Show the judge the movie, then hand them the folder.",
  "The visible reel path",
  "Open reel page",
  "Open reel script",
  "Verify reel",
  "0:58-1:15",
  "Close on proof.",
  "Names friction.",
  "Gives one move.",
  "Holds context.",
  "Asks for proof.",
  "Article, menu, moralizing, vague continuation, or unsafe clinical advice.",
  "Start before you read everything.",
  "Open `START_HERE.md`.",
  "Paste `PROJECT_INSTRUCTIONS.md`.",
  "Start here",
  "The first run is already scripted.",
  "You are Startline Coach. Read identity.md, rules.md, examples.md, and reference/.",
  "If my first message is vague, ask one state-calibrating question.",
  "If I name a stuck signal, route it directly.",
  "I need a coach to get started on this.",
  "First reply pass condition",
  "Name the friction, give one visible move, and ask for tiny proof.",
  "../demo/transcript-pack.md",
  "../ICM_TRACE.md",
  "../scripts/verify-icm-trace.mjs",
  "../scripts/verify-submission-surfaces.mjs",
  "../PITCH_REEL.md",
  "./reel.html",
  "../scripts/verify-pitch-reel.mjs",
  "../scripts/verify-reel-page.mjs",
  "../START_HERE.md",
  "../PRODUCT_THESIS.md",
  "../FIRST_RUN.md",
  "../FIRST_REPLY_SCORECARD.md",
  "../scripts/verify-start-here.mjs",
  "../scripts/verify-product-thesis.mjs",
  "../scripts/verify-first-run.mjs",
  "../scripts/verify-first-reply-scorecard.mjs",
  "../scripts/verify-landing-copy.mjs",
  "../scripts/verify-first-reply-acceptance.mjs",
  "../scripts/final-review-smoke.mjs",
  "../scripts/verify-clean-public-stage.mjs",
  "../PUBLICATION_CHECKLIST.md",
  "../PROJECT_INSTRUCTIONS.md",
  "../JUDGE_SCORECARD.md",
  "../JUDGE_FAQ.md",
  "../scripts/verify-judge-faq.mjs",
  "../scripts/verify-judge-scorecard.mjs",
  "../scripts/verify-competition-rules-trace.mjs",
];

const ignoredCandidatePrefixes = [
  ["docs", "plans"].join("/") + "/",
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function listFiles(dir = ".") {
  const absolute = path.join(root, dir);
  const entries = fs.readdirSync(absolute, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = path.join(dir, entry.name).replace(/^\.\//, "");
    if (entry.name === ".git" || entry.name === ".omx" || entry.name === "output") {
      continue;
    }
    if (entry.isDirectory()) {
      files.push(...listFiles(relative));
    } else {
      files.push(relative);
    }
  }
  return files;
}

function localLinkTarget(href) {
  if (!href || href.startsWith("#")) return null;
  if (/^[a-z]+:/i.test(href)) return null;
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  return path.normalize(path.join("landing", clean));
}

const failures = [];
const warnings = [];

for (const dir of publicBundleDirs) {
  if (!exists(dir) || !fs.statSync(path.join(root, dir)).isDirectory()) {
    failures.push(`Missing required directory: ${dir}`);
  }
}

for (const file of publicBundleFiles) {
  if (!exists(file)) {
    failures.push(`Missing required file: ${file}`);
  }
}

const allFiles = listFiles().filter((file) => {
  if (ignoredCandidatePrefixes.some((prefix) => file.startsWith(prefix))) return false;
  if (file.startsWith("PRIVATE_")) return false;
  return publicBundleFiles.includes(file);
});

for (const file of allFiles) {
  const content = read(file);
  if (emojiPattern.test(content)) {
    failures.push(`Emoji or symbol-range character found in public candidate: ${file}`);
  }
  if (!file.startsWith("scripts/")) {
    for (const pattern of unfinishedPresentationPatterns) {
      if (pattern.test(content)) {
        failures.push(`Unfinished presentation marker ${pattern} found in ${file}`);
      }
    }
  }
  for (const fragment of disallowedLiteralFragments) {
    if (content.toLowerCase().includes(fragment.toLowerCase())) {
      failures.push(`Disallowed local/provenance literal found in public candidate: ${file}`);
    }
  }
  for (const pattern of publicSafetyPatterns) {
    if (file.startsWith("scripts/")) continue;
    if (pattern.test(content)) {
      if (file === ".gitignore" && pattern.source.includes("PRIVATE_")) continue;
      failures.push(`Private/provenance pattern ${pattern} found in ${file}`);
    }
  }
}

const index = read("landing/index.html");
const hrefs = [...index.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
for (const href of hrefs) {
  const target = localLinkTarget(href);
  if (target && !exists(target)) {
    failures.push(`Landing local link does not resolve: ${href} -> ${target}`);
  }
}
for (const requiredText of landingRequiredText) {
  if (!index.includes(requiredText)) {
    failures.push(`landing/index.html is missing required text: ${requiredText}`);
  }
}

for (const blocker of publishBlockers) {
  if (exists(blocker.file) && blocker.pattern.test(read(blocker.file))) {
    warnings.push(blocker.message);
  }
}

if (exists("PROJECT_INSTRUCTIONS.md")) {
  const projectInstructions = read("PROJECT_INSTRUCTIONS.md");
  for (const requiredText of projectInstructionRequiredText) {
    if (!projectInstructions.includes(requiredText)) {
      failures.push(`PROJECT_INSTRUCTIONS.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("START_HERE.md")) {
  const startHere = read("START_HERE.md");
  for (const requiredText of startHereRequiredText) {
    if (!startHere.includes(requiredText)) {
      failures.push(`START_HERE.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("JUDGE_SCORECARD.md")) {
  const judgeScorecard = read("JUDGE_SCORECARD.md");
  for (const requiredText of judgeScorecardRequiredText) {
    if (!judgeScorecard.includes(requiredText)) {
      failures.push(`JUDGE_SCORECARD.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("HANDOFF_CARD.md")) {
  const handoffCard = read("HANDOFF_CARD.md");
  for (const requiredText of handoffCardRequiredText) {
    if (!handoffCard.includes(requiredText)) {
      failures.push(`HANDOFF_CARD.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("docs/judge-walkthrough.md")) {
  const judgeWalkthrough = read("docs/judge-walkthrough.md");
  for (const requiredText of judgeWalkthroughRequiredText) {
    if (!judgeWalkthrough.includes(requiredText)) {
      failures.push(`docs/judge-walkthrough.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("RECEIPTS.md")) {
  const receipts = read("RECEIPTS.md");
  for (const requiredText of receiptsRequiredText) {
    if (!receipts.includes(requiredText)) {
      failures.push(`RECEIPTS.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("JUDGE_FAQ.md")) {
  const judgeFaq = read("JUDGE_FAQ.md");
  for (const requiredText of judgeFaqRequiredText) {
    if (!judgeFaq.includes(requiredText)) {
      failures.push(`JUDGE_FAQ.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("PUBLICATION_CHECKLIST.md")) {
  const publicationChecklist = read("PUBLICATION_CHECKLIST.md");
  for (const requiredText of publicationChecklistRequiredText) {
    if (!publicationChecklist.includes(requiredText)) {
      failures.push(`PUBLICATION_CHECKLIST.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("COMPETITION_RULES_TRACE.md")) {
  const rulesTrace = read("COMPETITION_RULES_TRACE.md");
  for (const requiredText of rulesTraceRequiredText) {
    if (!rulesTrace.includes(requiredText)) {
      failures.push(`COMPETITION_RULES_TRACE.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("ICM_TRACE.md")) {
  const icmTrace = read("ICM_TRACE.md");
  for (const requiredText of icmTraceRequiredText) {
    if (!icmTrace.includes(requiredText)) {
      failures.push(`ICM_TRACE.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("demo/transcript-pack.md")) {
  const transcriptPack = read("demo/transcript-pack.md");
  for (const requiredText of transcriptPackRequiredText) {
    if (!transcriptPack.includes(requiredText)) {
      failures.push(`demo/transcript-pack.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("scripts/stage-public-repo.mjs")) {
  const stagingHelper = read("scripts/stage-public-repo.mjs");
  for (const requiredText of stagingHelperRequiredText) {
    if (!stagingHelper.includes(requiredText)) {
      failures.push(`scripts/stage-public-repo.mjs is missing required text: ${requiredText}`);
    }
  }
}

if (exists("scripts/final-review-smoke.mjs")) {
  const finalReviewSmoke = read("scripts/final-review-smoke.mjs");
  for (const requiredText of finalReviewSmokeRequiredText) {
    if (!finalReviewSmoke.includes(requiredText)) {
      failures.push(`scripts/final-review-smoke.mjs is missing required text: ${requiredText}`);
    }
  }
}

if (exists("scripts/verify-github-public-url.mjs")) {
  const githubPublicUrl = read("scripts/verify-github-public-url.mjs");
  for (const requiredText of githubPublicUrlRequiredText) {
    if (!githubPublicUrl.includes(requiredText)) {
      failures.push(`scripts/verify-github-public-url.mjs is missing required text: ${requiredText}`);
    }
  }
}

if (exists("scripts/verify-clean-public-stage.mjs")) {
  const cleanPublicStage = read("scripts/verify-clean-public-stage.mjs");
  for (const requiredText of cleanPublicStageRequiredText) {
    if (!cleanPublicStage.includes(requiredText)) {
      failures.push(`scripts/verify-clean-public-stage.mjs is missing required text: ${requiredText}`);
    }
  }
}

if (exists("scripts/verify-submission-surfaces.mjs")) {
  const submissionSurfaces = read("scripts/verify-submission-surfaces.mjs");
  for (const requiredText of submissionSurfacesRequiredText) {
    if (!submissionSurfaces.includes(requiredText)) {
      failures.push(`scripts/verify-submission-surfaces.mjs is missing required text: ${requiredText}`);
    }
  }
}

if (exists("PITCH_REEL.md")) {
  const pitchReel = read("PITCH_REEL.md");
  for (const requiredText of pitchReelRequiredText) {
    if (!pitchReel.includes(requiredText)) {
      failures.push(`PITCH_REEL.md is missing required text: ${requiredText}`);
    }
  }
}

if (exists("README.md")) {
  const readme = read("README.md");
  for (const requiredText of readmeRequiredText) {
    if (!readme.includes(requiredText)) {
      failures.push(`README.md is missing required text: ${requiredText}`);
    }
  }
}

for (const stale of staleCodingFirstText) {
  if (exists(stale.file) && read(stale.file).includes(stale.text)) {
    failures.push(`${stale.file} still contains stale coding-first text: ${stale.text}`);
  }
}

for (const stale of staleWholePersonDriftText) {
  if (exists(stale.file) && read(stale.file).includes(stale.text)) {
    failures.push(`${stale.file} still contains stale whole-person positioning text: ${stale.text}`);
  }
}

for (const guardrail of visualCssGuardrails) {
  if (exists(guardrail.file) && guardrail.pattern.test(read(guardrail.file))) {
    failures.push(`${guardrail.file} ${guardrail.message}.`);
  }
}

for (const guardrail of visualTextGuardrails) {
  if (exists(guardrail.file) && guardrail.pattern.test(read(guardrail.file))) {
    failures.push(`${guardrail.file} ${guardrail.message}.`);
  }
}

for (const requirement of visualCssRequiredText) {
  const content = exists(requirement.file) ? read(requirement.file) : "";
  if (!content.includes(requirement.text)) {
    failures.push(`${requirement.file} ${requirement.message}: ${requirement.text}`);
  }
}

const consoleBehavior = verifyConsoleBehavior(root);
for (const failure of consoleBehavior.failures) {
  failures.push(`Console behavior check failed: ${failure}`);
}

const productThesis = verifyProductThesis(root);
for (const failure of productThesis.failures) {
  failures.push(`Product thesis check failed: ${failure}`);
}

const competitionRulesTrace = verifyCompetitionRulesTrace(root);
for (const failure of competitionRulesTrace.failures) {
  failures.push(`Competition rules trace check failed: ${failure}`);
}

const icmTrace = verifyIcmTrace(root);
for (const failure of icmTrace.failures) {
  failures.push(`ICM trace check failed: ${failure}`);
}

const firstRun = verifyFirstRun(root);
for (const failure of firstRun.failures) {
  failures.push(`First-run check failed: ${failure}`);
}

const firstReplyScorecard = verifyFirstReplyScorecard(root);
for (const failure of firstReplyScorecard.failures) {
  failures.push(`First-reply scorecard check failed: ${failure}`);
}

const startHere = verifyStartHere(root);
for (const failure of startHere.failures) {
  failures.push(`Start-here check failed: ${failure}`);
}

const landingCopy = verifyLandingCopy(root);
for (const failure of landingCopy.failures) {
  failures.push(`Landing copy check failed: ${failure}`);
}

const transcriptPack = verifyTranscriptPack(root);
for (const failure of transcriptPack.failures) {
  failures.push(`Transcript pack check failed: ${failure}`);
}

const firstReplyAcceptance = verifyFirstReplyAcceptance(root);
for (const failure of firstReplyAcceptance.failures) {
  failures.push(`First-reply acceptance check failed: ${failure}`);
}

const submissionCopy = verifySubmissionCopy(root);
for (const failure of submissionCopy.failures) {
  failures.push(`Submission copy check failed: ${failure}`);
}

const submissionSurfaces = verifySubmissionSurfaces(root);
for (const failure of submissionSurfaces.failures) {
  failures.push(`Submission surfaces check failed: ${failure}`);
}

const pitchReel = verifyPitchReel(root);
for (const failure of pitchReel.failures) {
  failures.push(`Pitch reel check failed: ${failure}`);
}

const reelPage = verifyReelPage(root);
for (const failure of reelPage.failures) {
  failures.push(`Reel page check failed: ${failure}`);
}

const judgeFaq = verifyJudgeFaq(root);
for (const failure of judgeFaq.failures) {
  failures.push(`Judge FAQ check failed: ${failure}`);
}

const judgeScorecard = verifyJudgeScorecard(root);
for (const failure of judgeScorecard.failures) {
  failures.push(`Judge scorecard check failed: ${failure}`);
}

const summary = {
  requiredFiles: publicBundleFiles.length,
  checkedFiles: allFiles.length,
  landingLocalRefs: hrefs.filter(localLinkTarget).length,
  consoleBehaviorCases: consoleBehavior.checkedCases,
  productThesisSections: productThesis.sections,
  productThesisEvidenceRefs: productThesis.evidenceRefs,
  competitionRulesTraceBriefRows: competitionRulesTrace.briefRequirementRows,
  competitionRulesTraceJudgingRows: competitionRulesTrace.judgingQuestionRows,
  competitionRulesTraceProofBullets: competitionRulesTrace.aboveBriefProofBullets,
  competitionRulesTraceBlockers: competitionRulesTrace.blockerBullets,
  icmTraceSections: icmTrace.sections,
  icmTraceEvidenceRefs: icmTrace.evidenceRefs,
  icmTraceRows: icmTrace.fitRows,
  firstRunChecks: firstRun.checks,
  firstRunPromptBlocks: firstRun.promptBlocks,
  firstReplyScorecardChecks: firstReplyScorecard.checks,
  startHerePromptBlocks: startHere.promptBlocks,
  landingCopyButtons: landingCopy.checkedButtons,
  transcriptPackCases: transcriptPack.checkedCases,
  firstReplyAcceptanceCases: firstReplyAcceptance.checkedCases,
  skoolCommentSentences: submissionCopy.sentenceCount,
  skoolCommentCharacters: submissionCopy.characterCount,
  submissionSurfaceCharacters: submissionSurfaces.landingSectionCharacters,
  pitchReelShotRows: pitchReel.shotRows,
  pitchReelVoiceoverWords: pitchReel.voiceoverWords,
  reelPageSlides: reelPage.slides,
  reelPageLocalRefs: reelPage.localRefs,
  judgeFaqQuestions: judgeFaq.questions,
  judgeFaqEvidenceRefs: judgeFaq.evidenceRefs,
  judgeScorecardCriteriaRows: judgeScorecard.criteriaRows,
  judgeScorecardFastPathSteps: judgeScorecard.fastPathSteps,
  failures,
  warnings,
};

console.log(JSON.stringify(summary, null, 2));

if (failures.length > 0) {
  process.exitCode = 1;
}
