# Unstuck Product System

Unstuck is a quiet workbench for an overloaded brain. It should feel useful,
low-threat, and materially calm: warm paper, deep ink, blue apatite action, and
readable type.

## Non-Negotiables

- Unstuck is light-mode first.
- Kyanite keeps its own identity; Unstuck does not inherit Kyanite dark glass.
- The prompt box is the brand object.
- Motion is functional only: press, focus, menu open, state change.
- No glassmorphism, neon, rainbow accents, giant shouting hero type, or generic
  productivity-app polish.

## Core Tokens

```css
--font-sans: "Atkinson Hyperlegible", "Aptos", "Avenir Next", "Plus Jakarta Sans", system-ui, sans-serif;
--font-mono: "Geist Mono", "SF Mono", ui-monospace, monospace;

--ink: #101317;
--muted: #5f655f;
--paper: #f7f3ea;
--surface: #fffdf8;
--line: #d8d0c2;

--apatite-950: #052733;
--apatite-900: #064b5f;
--apatite-800: #075e73;
--apatite-700: #08758d;
--apatite-500: #11a5ce;
--apatite-100: #d7f0f2;
--apatite-50: #eaf8f7;
```

## Typography

Body text starts at `1rem` and uses unitless `line-height: 1.5`. Type uses a
small fixed step scale, with breakpoint changes only where a heading would crowd
the screen. Text blocks should stay near `66ch`; headings use balanced wrapping.

## Components

- Primary action: blue apatite fill, white text, pill radius.
- Secondary action: warm paper surface, deep ink text.
- Cards: paper slips with 8px radius, soft border, minimal shadow.
- Chips: apatite wash background, apatite ink text.
- Focus: visible apatite ring.
