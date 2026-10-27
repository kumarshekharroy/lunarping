# LunarPing

**Made for the curious.**

LunarPing is the home of **LunarPing: Sky Map & Alarms** and a collection of independent web tools by [Shekhar Roy](https://shekharroy.com).

## Develop and build

```sh
npm ci
npm run dev
npm run build
```

`npm run build` checks TypeScript, builds with Vite, and prerenders every route into static HTML. `npm run preview` serves the production output. Run `npm run verify` after building to check static route content, metadata, links, the sitemap, and policy text integrity. `npm run lint` checks ESLint.

| Route | Purpose | Production file |
| --- | --- | --- |
| `/` | Brand homepage, app introduction, searchable tool hub | `dist/index.html` |
| `/app` | Astronomy app landing page | `dist/app/index.html` |
| `/app/privacy` | Full app privacy policy | `dist/app/privacy/index.html` |
| Unknown paths | Branded 404 | `dist/404.html` |

Deploy **all of `dist/`** to the existing static host. The included `_redirects` supports clean app URLs on Cloudflare Pages and Netlify; `_headers` preserves security and asset-caching rules. Hosts without these conventions must serve `/app` and `/app/privacy` from their corresponding `index.html` files and return `404.html` with HTTP 404 for missing paths. Explicit Vite development and preview middleware supports the exact clean URLs and trailing-slash variants. Preview returns the branded page with HTTP 404 for unknown routes. Canonicals use the approved public URLs without trailing slashes.

This task changes only the website repository. It does not deploy the site or alter Android source.

## Content and assets

- `src/data/tools.ts`: unchanged tool catalogue, categories, URLs, and ordering.
- `src/data/app.ts`: app identity, official tagline, support email, and download link.
- `src/data/site.ts`: per-route titles, descriptions, canonical and social metadata, structured data, and sitemap URLs.
- `src/data/app-privacy.txt`: exact bundled Android policy dated **27 October 2026**. `PrivacyPage.tsx` renders its sections without rewriting policy paragraphs. Keep this file synchronized with the policy shipped in future app releases.
- `src/components/CelestialScene.tsx`: original SVG illustrations with an accessible Moon/Sun/Saturn selector. They are labeled illustrations, not live astronomical results or app interfaces.
- `src/pages/AppPage.tsx`: feature content and supporting vector artwork.
- `src/index.css`: shared foundations and existing tool styles. `src/redesign.css`: shared observatory palette, redesign, app, and policy styles.

The Android reference was found at `/Users/shekharroy/Documents/Software Projects/Codex/com.lunarping.application`; the originally supplied `lunarping.com` reference path is the website checkout. Approved identity and features were checked against its engineering guide, design notes, store listing, theme, and bundled privacy policy. The approved app icon was reused as optimized WebP and PNG sizes. No Android files were modified.

**No app screenshots are included**, as requested. Add the supplied screenshots to `public/app/` and integrate them into the app page when ready. Do not use fabricated camera images or app interfaces. The current illustrations are independent of the app UI.

### Enable the real download CTA

`app.downloadUrl` is intentionally `null`: the reference release notes do not establish a live public listing. The page explicitly says the download link is coming soon, and never shows an active store badge. Once a public URL is verified, set it in `src/data/app.ts`; the app hero, final CTA, FAQ, and app structured data use it automatically. No price, ratings, release date, or iOS availability is asserted.

## Tool hub

All five tools retain their original URLs, descriptions, categories, and search/filter behavior: Endpoint, Markdown Viewer, Fullstack Prep, JobDesk, and Meri Kundli. Kitna Lagega is the second homepage product highlight, directly after the LunarPing app hero and before the tool hub. Its original ruler icon, measured-layout workflow, construction and finishing estimates, and Web/Android identity were checked against the separate read-only `kitnalagega.com` project. It links to its own website and has no additional route in this repository. The creator profile remains available.

The sitemap includes the three public routes and the existing tool subdomains. Use the verified `lunarping.com` domain property for sitemap submission. The website uses self-hosted Manrope, React, TypeScript, Vite, Tailwind, and Lucide with no new runtime dependencies.
