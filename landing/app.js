const demos = [
  {
    label: "Life freeze",
    prompt: "I need to pay the bill, eat something, and answer the text, but I am frozen.",
    generic:
      "Make a list, decide what is most important, set a timer, and reward yourself when you finish.",
    startline:
      "I am holding the three loops. Biology comes first because planning on empty is false data. Eat the smallest available food, then reply with one word: fed.",
  },
  {
    label: "Get started",
    prompt: "I need a coach to get started on this.",
    generic:
      "You can do it. Try setting a timer, making a to-do list, and reminding yourself why this matters.",
    startline:
      "Good. We are not making a plan yet; we are crossing the startline. Put the work in front of you, choose the smallest visible surface, and tell me what is open.",
  },
  {
    label: "Message spiral",
    prompt: "That message makes me feel like I did something wrong.",
    generic:
      "Try not to take it personally. People are usually not as upset as you think.",
    startline:
      "We are not processing your worth through a notification. First pass: quote the sentence that carries the threat, then write what it literally asks for.",
  },
  {
    label: "Inbox/calendar",
    prompt: "My inbox and calendar are a mess and I do not know what is real.",
    generic:
      "Clean your inbox, update your calendar, prioritize every commitment, and make a better schedule.",
    startline:
      "That is system overload, not a character problem. We are rescuing live obligations: open the calendar, name the next hard anchor, then pick one inbox item tied to time, money, safety, or another person.",
  },
  {
    label: "Too many loops",
    prompt: "I need to shower, answer the text, find the form, and clean the kitchen.",
    generic:
      "Prioritize your tasks by urgency and importance. You can use a matrix to decide what to do first.",
    startline:
      "I am holding the list. You only need the first relief move. Choose the loop that gets easier if it moves 10 percent, then touch only that surface.",
  },
  {
    label: "Failed plan",
    prompt: "I tried to start the insurance form Monday, yesterday, and this morning. I keep failing.",
    generic:
      "Stay positive and try again. Consistency is built by showing up, even when motivation is low.",
    startline:
      "That is three attempts. We are not trying harder at the same plan. The plan failed; you did not. Pick the closest blocker: energy, missing document, unclear first field, or dread.",
  },
];

function optionalSelector(selector) {
  try {
    return document.querySelector(selector);
  } catch {
    return null;
  }
}

function optionalSelectorAll(selector) {
  try {
    return Array.from(document.querySelectorAll(selector));
  } catch {
    return [];
  }
}

const navToggle = optionalSelector(".nav-toggle");
const navLinks = optionalSelectorAll(".nav-links a");

navLinks.forEach((link, index) => {
  link.style.setProperty("--link-index", index);
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const nextState = !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", nextState);
    navToggle.setAttribute("aria-expanded", String(nextState));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const promptEl = document.querySelector("#demo-prompt");
const genericEl = document.querySelector("#demo-generic");
const startlineEl = document.querySelector("#demo-startline");
const tabs = Array.from(document.querySelectorAll(".prompt-tab"));
let activeDemo = 0;
let cycleTimer = null;

function setDemo(index, userInitiated = false) {
  activeDemo = index;
  const demo = demos[index];
  promptEl.textContent = demo.prompt;
  genericEl.textContent = demo.generic;
  startlineEl.textContent = demo.startline;

  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  if (userInitiated) {
    restartCycle();
  }
}

function restartCycle() {
  window.clearInterval(cycleTimer);
  cycleTimer = window.setInterval(() => {
    setDemo((activeDemo + 1) % demos.length);
  }, 6000);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const index = Number.parseInt(tab.dataset.demo, 10);
    setDemo(index, true);
  });
});

restartCycle();

const coachConsole = document.querySelector("#coach-console");
const coachInput = document.querySelector("#coach-input");
const sampleChips = Array.from(document.querySelectorAll(".sample-chip"));
const consoleState = document.querySelector("#console-state");
const consoleStateNote = document.querySelector("#console-state-note");
const consoleFriction = document.querySelector("#console-friction");
const consoleFrictionNote = document.querySelector("#console-friction-note");
const consoleMove = document.querySelector("#console-move");
const consoleMoveNote = document.querySelector("#console-move-note");
const consoleCheck = document.querySelector("#console-check");
const consoleCheckNote = document.querySelector("#console-check-note");

const consolePatterns = [
  {
    match: /(idea|maybe|what if|could build|new feature|checklist|someday|another thing|remember|remind me|note to self)/i,
    state: "Green-yellow",
    stateNote: "The idea has energy, but it can steal the active lane.",
    friction: "Capture versus execution",
    frictionNote: "Novelty needs a parking lot, not a takeover.",
    move: "Park with a return time.",
    moveNote: "Write the idea in one sentence, add why it matters, and decide when it gets looked at again.",
    check: "One parked idea.",
    checkNote: "The active work continues unless the idea is explicitly promoted.",
  },
  {
    match: /(message|email|reply|review|comment|critique|feedback|approved|rejected|bad at this|spiral|did something wrong|mad at me|upset|conflict)/i,
    state: "Red-yellow",
    stateNote: "Worth is too close to the message. Sort before interpreting.",
    friction: "Communication threat",
    frictionNote: "The task is not to feel better on command. It is to separate what was said from what it means.",
    move: "Separate ask from meaning.",
    moveNote: "Quote the sentence that carries the threat, then write what it literally asks for.",
    check: "One quoted sentence.",
    checkNote: "Proof is a quote and a literal ask, not a rebuttal or apology.",
  },
  {
    match: /(inbox|calendar|schedule|appointment|meeting|unread|reply debt|double-book|overdue|deadline)/i,
    state: "Yellow",
    stateNote: "The surfaces are noisy, so the first job is reality, not cleanup.",
    friction: "Calendar/inbox overload",
    frictionNote: "The user needs live obligations rescued before any full-system processing.",
    move: "Rescue live obligations.",
    moveNote: "Open one surface, name the next hard anchor, then choose one inbox item tied to time, money, safety, relationship, or another person.",
    check: "One hard anchor or live item.",
    checkNote: "Proof is one real calendar anchor or inbox item, not a cleaned system.",
  },
  {
    match: /(too many|overwhelm|everything|tabs|switching|all of this|list|head|brain|bill|form|kitchen|laundry|dishes|shower|groceries|errand|admin)/i,
    state: "Yellow",
    stateNote: "Working memory is saturated. The coach holds the list so the user does not have to.",
    friction: "Working-memory overload",
    frictionNote: "Prioritizing inside the head is the failure mode.",
    move: "Externalize the loops.",
    moveNote: "Write each active loop as a rough line, then mark the one that creates the most relief at 10 percent done.",
    check: "One relief mark.",
    checkNote: "The output is a marked line, not a complete priority system.",
  },
  {
    match: /(failed|tried|again|same plan|three times|keeps failing|cannot make myself|avoid|dread|stuck all week)/i,
    state: "Yellow-red",
    stateNote: "Repeated failed starts mean the strategy failed. The person did not.",
    friction: "Plan mismatch",
    frictionNote: "Trying harder at the same plan is now noise.",
    move: "Name the closest blocker.",
    moveNote: "Choose one: energy, fear of response or conflict, unclear first action, or too many surfaces open.",
    check: "One blocker named.",
    checkNote: "The next plan changes only after the blocker is named.",
  },
  {
    match: /(tired|fried|crash|hungry|late|hyperfocus|forgot to eat|body|sleep|exhausted|ate|eat|food|water|shower|overstimulated)/i,
    state: "Red",
    stateNote: "Biology is in the loop. Planning quality is not the bottleneck.",
    friction: "Recovery before re-entry",
    frictionNote: "The coach protects the next session instead of extracting one more task.",
    move: "Close the loop.",
    moveNote: "Save state, write one re-entry breadcrumb, and take the smallest body reset available.",
    check: "A re-entry breadcrumb.",
    checkNote: "The work is not abandoned if the next start point is visible.",
  },
  {
    match: /(start|begin|blank|stuck|cannot|can't|open|frozen|freeze|first step|where do i start)/i,
    state: "Yellow",
    stateNote: "Enough capacity for one concrete move, not enough for a plan essay.",
    friction: "Activation friction",
    frictionNote: "The blocker is crossing the startline, not understanding the task.",
    move: "Put one surface in front of you.",
    moveNote: "Open or touch the closest surface: bill, message, form, tab, doc, sink, bag, or door. Report what is visible.",
    check: "One visible surface.",
    checkNote: "No polished report. The proof is what is open, touched, or visible.",
  },
];

const fallbackConsole = {
  state: "Unknown-yellow",
  stateNote: "The coach does not guess capacity from a polished prompt.",
  friction: "Needs calibration",
  frictionNote: "Start with the smallest question that changes the next move.",
  move: "Ask one state question.",
  moveNote: "Choose: green, yellow, red, or body-first. Then pick the smallest visible action.",
  check: "One honest signal.",
  checkNote: "Proof is the user's state answer, not a productivity plan.",
};

function renderConsole(result) {
  consoleState.textContent = result.state;
  consoleStateNote.textContent = result.stateNote;
  consoleFriction.textContent = result.friction;
  consoleFrictionNote.textContent = result.frictionNote;
  consoleMove.textContent = result.move;
  consoleMoveNote.textContent = result.moveNote;
  consoleCheck.textContent = result.check;
  consoleCheckNote.textContent = result.checkNote;
}

function coachMoment(text) {
  const normalized = text.trim();
  if (!normalized) {
    return fallbackConsole;
  }
  return consolePatterns.find((pattern) => pattern.match.test(normalized)) || fallbackConsole;
}

coachConsole.addEventListener("submit", (event) => {
  event.preventDefault();
  renderConsole(coachMoment(coachInput.value));
});

sampleChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    coachInput.value = chip.dataset.sample;
    renderConsole(coachMoment(coachInput.value));
  });
});

const copyControls = Array.from(document.querySelectorAll(".copy-control"));

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the textarea path for local file previews.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

copyControls.forEach((control) => {
  control.addEventListener("click", async () => {
    const target = document.querySelector(control.dataset.copyTarget);
    if (!target) return;

    const label = control.querySelector("span:last-child");
    const original = label.textContent;
    await copyText(target.textContent.trim());
    control.classList.add("copied");
    label.textContent = "Copied";
    window.setTimeout(() => {
      control.classList.remove("copied");
      label.textContent = original;
    }, 1400);
  });
});

const revealTargets = optionalSelectorAll(
  ".section-heading, .scope-core, .scope-lanes li, .admin-rhythm-visual, .admin-rhythm-card, .admin-boundary, .coldrun-steps li, .brief-board article, .scorecard-board article, .reel-board article, .thesis-points article, .handoff-figure, .setup-board article, .response-pane, .coach-console, .console-output article, .file-node, .behavior-grid article, .receipts-grid a, .proofgate-board article, .judge-steps li, .submission-copy",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-item");
    target.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => {
    target.classList.add("is-visible");
  });
}
