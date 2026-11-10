# Church plant website

Static site built with [Astro](https://astro.build) and Tailwind CSS. Church facts live in [`src/config/church.ts`](src/config/church.ts) as bracketed placeholders such as `[CHURCH NAME]` and `[City]`. Never invent names, addresses, times, or doctrine.

## Prerequisites

- Node.js 22
- npm

## Install

```bash
npm ci
```

## Dev

```bash
npm run dev
```

Serves the site at http://localhost:4321.

## Build

```bash
npm run build
```

Writes the static site to `dist/`.

## Check

```bash
npm run check
```

Runs `astro check`.

## Preview

```bash
npm run preview
```

Serves the production build. Run `npm run build` first.

## Project structure

```text
src/config/church.ts       # Bracketed placeholders. Never invent church facts.
src/components/            # Header, footer, and shared Astro components
src/layouts/               # Base HTML layout
src/pages/                 # Routes
src/styles/global.css      # Theme tokens and base styles
public/                    # Static files
docs/WORKFLOW.md           # Team process
.github/workflows/ci.yml   # Pull request and main-branch checks
```

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pull requests and on pushes to `main`. The job uses Node.js 22, then `npm ci`, `npm run build`, and `npm run check`. It does not use secrets.
