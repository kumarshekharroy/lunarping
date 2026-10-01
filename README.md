# LunarPing

**One home. Many useful tools.**

[LunarPing](https://lunarping.com) is a discovery hub for developer utilities, productivity apps, career tools, and web experiments.

This repository contains the LunarPing website and its tool catalogue. The individual tools are hosted separately.

## Explore the collection

| Tool | Description |
| --- | --- |
| [Endpoint](https://endpoint.lunarping.com) | A playground for API requests and endpoint testing. |
| [Markdown Viewer](https://md.lunarping.com) | A focused space for rendering and previewing Markdown. |
| [Fullstack Prep](https://fullstack-prep.lunarping.com) | Interview preparation for full-stack developers. |
| [JobDesk](https://jobdesk.lunarping.com) | A workspace for tracking job applications and next steps. |
| [Meri Kundli](https://kundli.lunarping.com) | A web app for exploring Kundli and astrology. |

The website includes search and category filters to help visitors find a tool.

## Built with

React, TypeScript, Vite, Tailwind CSS, and Lucide React, with a self-hosted Manrope font. Production builds prerender the homepage into static HTML; React adds interactive search and filtering in the browser.

## Getting started

Install Node.js and npm, then run these commands from the repository directory:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Check the code with ESLint. |
| `npm run build` | Check TypeScript and generate the prerendered production site in `dist/`. |
| `npm run preview` | Preview a production build locally. Run the build command first. |

## Project structure

- [`src/data/tools.ts`](src/data/tools.ts) — tool catalogue and display order
- [`src/types/tool.ts`](src/types/tool.ts) — tool categories and data shape
- [`src/components/`](src/components/) — page sections, cards, and search
- [`src/index.css`](src/index.css) — site styles
- [`src/data/site.ts`](src/data/site.ts) — canonical URL, SEO metadata, and catalogue structured data
- [`scripts/prerender.mjs`](scripts/prerender.mjs) — build-time homepage rendering
- [`public/`](public/) — static assets, 404 page, and hosting headers/redirects

## Updating the catalogue

Add or edit an entry in [`src/data/tools.ts`](src/data/tools.ts). Each tool has a name, description, URL, category, status, and display priority. New entries should use a unique `slug` and `priority`, with a category defined in [`src/types/tool.ts`](src/types/tool.ts).

The website and its structured data use the same catalogue. Update site metadata in [`src/data/site.ts`](src/data/site.ts), then run `npm run lint` and `npm run build` to check your changes.

## Production build

Use `npm run build` to generate the complete site, including prerendered content, social preview metadata, JSON-LD structured data, `robots.txt`, and `sitemap.xml`. The sitemap includes the LunarPing homepage and tool URLs on LunarPing subdomains, using the catalogue to keep the list current.

Submit the shared sitemap through a verified `lunarping.com` domain property in Google Search Console, which covers its subdomains. Google supports [cross-site sitemap submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#sitemap-cross-submission) for verified sites.

Deploy the `dist/` directory to a static host. The included `_headers`, `_redirects`, and `404.html` files support Cloudflare Pages and Netlify. Other hosts may need equivalent configuration for headers, redirects, and HTTP 404 responses. Domain redirects and HTTPS are configured through the hosting provider. Vite preview does not apply hosting-specific rules.

## Creator

Built and maintained by [Shekhar Roy](https://shekharroy.com).

## License

This repository does not currently include a license.
