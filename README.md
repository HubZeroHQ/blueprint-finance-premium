# Blueprint Base

Blueprint Base is the production-ready engineering foundation for every HubZero Blueprint.

It is not a finished website, application, or template.

Its purpose is to provide a consistent engineering baseline so new blueprints can focus on architecture, design, and product-specific functionality instead of repeatedly solving the same engineering problems.

## What belongs here

* Project structure
* Global application layout
* Design tokens
* Theme configuration
* Shared UI primitives
* Utilities
* Common providers
* Engineering conventions

## What does not belong here

* Business-specific features
* Industry-specific functionality
* Branding
* Marketing content
* Sample pages
* Client assets

Those belong in individual blueprints.

## Getting Started

Install dependencies:

```bash
npm install
```

Initialize the blueprint:

```bash
npx hz init
```

Start the development server:

```bash
npm run dev
```

## AI Skills

Blueprint Base also ships a small, curated library of reusable AI assistant skills under `.agents/skills/` and `.claude/skills/`. They assist implementation and review; they never override HubZero's engineering, architecture, or design guidance in `.hubzero`. See [SKILLS.md](./SKILLS.md) for what's included, why, and how to maintain it.

## Philosophy

Blueprint Base standardizes engineering.

It does not standardize creativity.

Every HubZero blueprint should inherit a consistent engineering foundation while remaining free to develop its own architecture, identity, and design language.
