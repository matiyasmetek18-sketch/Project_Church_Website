# [CHURCH NAME] - Reformed Baptist Church Plant Website

A fast, static-first church plant website built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Overview

This website serves a Reformed Baptist church plant. It is designed with a classical editorial aesthetic, high readability, and strict accessibility standards.

### Architectural Principles & Constraints
- **Static-first**: No database, no client-side authentication, 0kB unnecessary JavaScript runtime.
- **Strict No-Fabrication Rule**: Unconfirmed details (church name, physical location, meeting time, pastor names, confessional ratification) are kept strictly as placeholders (e.g., `[CHURCH NAME]`, `[LOCATION]`, `[MEETING TIME]`).
- **Centralized Configuration**: All church-specific details are centralized in [`src/config/church.ts`](src/config/church.ts). To update information once confirmed by leadership, edit this configuration file without changing UI components.
- **Design System**: Classical editorial aesthetic with EB Garamond headings, Source Sans 3 body text, deep navy (`#070c18` / `#0f172a`), warm white (`#fdfbf7`), and restrained antique gold (`#b45309`) accents.

## Project Structure

```text
/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro         # Editorial navbar & plant status bar
│   │   ├── Footer.astro         # 4-column footer with disclaimer
│   │   ├── SectionHeader.astro  # Section header with gold dividers
│   │   └── PillarCard.astro     # Theological conviction card
│   ├── config/
│   │   └── church.ts            # Central church configuration & placeholders
│   ├── layouts/
│   │   └── BaseLayout.astro     # Main layout, fonts, skip links, SEO
│   ├── pages/
│   │   └── index.astro          # Phase 1 homepage
│   └── styles/
│       └── global.css           # Tailwind v4 theme tokens & base styles
├── astro.config.mjs        # Astro configuration with Tailwind CSS v4
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js (v22+ recommended)
- npm

### Development
```bash
# Start local dev server
npm run dev

# Or start dev server in background
astro dev --background
```

### Production Build
```bash
# Build static site to ./dist
npm run build

# Preview production build locally
npm run preview
```
