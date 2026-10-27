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
| `/` | Brand homepage, app introductions, searchable tool hub, shared contact form | `dist/index.html` |
| `/app` | Astronomy app landing page | `dist/app/index.html` |
| `/app/privacy` | Full app privacy policy | `dist/app/privacy/index.html` |
| Unknown paths | Branded 404 | `dist/404.html` |

Deploy **all of `dist/`** to the existing static host. The included `_redirects` supports clean app URLs on Cloudflare Pages and Netlify; `_headers` preserves security and asset-caching rules. Hosts without these conventions must serve `/app` and `/app/privacy` from their corresponding `index.html` files and return `404.html` with HTTP 404 for missing paths. Explicit Vite development and preview middleware supports the exact clean URLs and trailing-slash variants. Preview returns the branded page with HTTP 404 for unknown routes. Canonicals use the approved public URLs without trailing slashes.

The website is maintained here and has not been deployed by this task. A later explicit artwork request updated only the app icon/logo exports in both projects; interface colors and behavior are unchanged.

## Content and assets

- `src/data/tools.ts`: unchanged tool catalogue, categories, URLs, and ordering.
- `src/data/app.ts`: app identity, official tagline, support email, and download link.
- `src/data/kitna.ts`: Kitna Lagega identity, description, website, and Google Play link.
- `src/data/site.ts`: per-route titles, descriptions, canonical and social metadata, structured data, and sitemap URLs.
- `src/data/app-privacy.txt`: exact bundled Android policy dated **27 October 2026**. `PrivacyPage.tsx` renders its sections without rewriting policy paragraphs. Keep this file synchronized with the policy shipped in future app releases.
- `src/components/CelestialScene.tsx`: original SVG illustrations with an accessible Moon/Sun/Saturn selector. They are labeled illustrations, not live astronomical results or app interfaces.
- `src/pages/AppPage.tsx`: feature content and supporting vector artwork.
- `src/index.css`: shared foundations and existing tool styles. `src/redesign.css`: shared observatory palette, redesign, app, and policy styles.

The Android reference was found at `/Users/shekharroy/Documents/Software Projects/Codex/com.lunarping.application`; the originally supplied `lunarping.com` reference path is the website checkout. Approved identity and features were checked against its engineering guide, design notes, store listing, theme, and bundled privacy policy. The approved app icon is exported as optimized WebP and PNG sizes. The later calm steel-blue color refinement is recorded in `assets/branding/icon-color-edit.json`, with its full-size master beside it; the original Android artwork is preserved.

**No app screenshots are included**, as requested. Add the supplied screenshots to `public/app/` and integrate them into the app page when ready. Do not use fabricated camera images or app interfaces. The current illustrations are independent of the app UI.

### Google Play links

The owner-supplied LunarPing listing URL is `https://play.google.com/store/apps/details?id=com.lunarping.app`. `app.downloadUrl` drives the app hero, final CTA, FAQ, and structured data. Kitna Lagega is released on Android at `https://play.google.com/store/apps/details?id=com.kitnalagega.app`; its homepage highlight includes separate Google Play and website links. No price, ratings, release date, or iOS availability is asserted. Homepage and app-page titles, descriptions, Open Graph/Twitter metadata, and application structured data reflect the current content and links.

## Contact and feedback

The homepage has one shared website form at `/#contact`, linked from the main navigation, footer, and app page. It collects a name, reply email, subject, and message. Subjects cover feedback, bugs, support, privacy/data requests, collaboration, and other enquiries; there are no listing-specific forms.

The form submits directly over HTTPS to `https://formsubmit.co/contact@shekharroy.com` using a native POST, including when JavaScript is unavailable. It uses browser validation, a honeypot, FormSubmit's default spam check and confirmation page, and a table email template. The selected subject becomes the email subject with a `[LunarPing website]` prefix. The form explains that the details are sent through FormSubmit and links its privacy policy. If the recipient has not already activated FormSubmit, the first submission triggers a confirmation email that the recipient must approve before delivery is enabled. Do not send real test messages as part of automated checks.

## Tool hub

All five tools retain their original URLs, descriptions, categories, and search/filter behavior: Endpoint, Markdown Viewer, Fullstack Prep, JobDesk, and Meri Kundli. Kitna Lagega is the second homepage product highlight, directly after the LunarPing app hero and before the tool hub. Its original ruler icon, measured-layout workflow, construction and finishing estimates, and Web/Android identity were checked against the separate read-only `kitnalagega.com` project. The expanded highlight includes feature details, a floor-plan illustration, and separate website and Google Play links; LunarPing remains the flagship. There is no additional Kitna Lagega route in this repository. The creator profile remains available.

The sitemap includes the three public routes and the existing tool subdomains. Use the verified `lunarping.com` domain property for sitemap submission. The website uses self-hosted Manrope, React, TypeScript, Vite, Tailwind, and Lucide with no new runtime dependencies.
