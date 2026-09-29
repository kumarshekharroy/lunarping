# LunarPing

**One home. Many useful tools.**

[LunarPing](https://lunarping.com) is a discovery hub for developer utilities, productivity apps, career tools, and web experiments.

## Tech stack

React, TypeScript, Vite, Tailwind CSS, and Lucide React. The site is a static client-side application, and its tool catalogue is maintained in the source code.

## Run locally

```bash
npm ci
npm run dev
```

Vite prints the local URL. To check the site before contributing:

```bash
npm run lint
npm run build
```

Use `npm run preview` to inspect the built site locally.

## Project structure

- [`src/data/tools.ts`](src/data/tools.ts) — tool catalogue and display order
- [`src/types/tool.ts`](src/types/tool.ts) — tool categories and data shape
- [`src/components/`](src/components/) — page sections, cards, and search
- [`src/index.css`](src/index.css) — site styles
- [`public/`](public/) — static assets and site metadata

To add a tool, add an entry to `src/data/tools.ts` with a unique `slug` and `priority`. Use one of the categories defined in `src/types/tool.ts`.

No license has been added to this repository.
