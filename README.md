# Awakened — gotawakened.com

React source for gotawakened.com, rebuilt from the production build of the original site.

Stack: Vite, React 19, React Router 7, Tailwind CSS 3 (shadcn/ui theme), Framer Motion,
TanStack Query, Zod. Every public page is prerendered to static HTML at build time, so search
engines and link previews get the full content, title, description and structured data without
running JavaScript; React then hydrates the page in the browser.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server with hot reload (http://localhost:5173)
npm run build    # client build + prerender every page into dist/
npm run preview  # serve dist/ locally (no clean URLs; use `vercel dev` for exact routing)
```

## Layout

| Path | What's there |
| --- | --- |
| `src/main.jsx` | Browser entry: hydrates prerendered HTML (or renders, for client-only pages) |
| `src/entry-server.jsx` | Build-time renderer used by `scripts/prerender.mjs` |
| `src/routes.jsx` | All routes, plus `PRERENDER_PAGES` (what is prerendered and listed in the sitemap) |
| `src/components/Seo.jsx` | `<Seo>` — title, description, canonical, Open Graph/Twitter, robots, JSON-LD |
| `src/lib/site.js` | Site URL, default title/description, share image |
| `src/lib/commerce.js` | Checkout (calls `/api/commerce/create-checkout-session`) |
| `src/layouts/RootLayout.jsx` | Shared layout: header, `<main>`, footer |
| `src/pages/` | One file per page |
| `src/content/pages.js` | Page copy (English + Arabic) for several pages |
| `src/i18n/LanguageContext.jsx` | EN/AR switching — `const { t, isAr } = useLanguage()`, `t("English", "العربية")` |
| `src/index.css` | Tailwind, theme colour variables, Arabic/RTL typography |
| `public/` | Static files: favicons, `og-image.jpg`, optimized logos in `images/`, `robots.txt` |
| `vercel.json` | Clean URLs, `/reserve` → `/events`, checkout rewrite, caching + security headers |

## Adding a page

1. Create `src/pages/NewPage.jsx` and render `<Seo path="/new" title="…" description="…" />` at the top.
2. Add the route in `src/routes.jsx`, and add it to `PRERENDER_PAGES` so it is prerendered and in the sitemap.

## SEO notes

- Canonical domain is `https://www.gotawakened.com` (`src/lib/site.js`); the bare `gotawakened.com` redirects to it (set in Vercel → Domains).
- `/checkout/*` pages are `noindex` and rendered client-side only (they depend on the query string).
- Unknown URLs get `404.html` with a real 404 status.
- Language is switched in the browser on the same URL, so there are no separate `/ar` URLs;
  search engines index the English version.

## Server endpoints

The contact form posts to `/api/contact` and the booking/events pages post to
`/api/commerce/create-checkout-session`. These were provided by the original host (GoDaddy Airo)
and are **not** part of this project — they must be supplied wherever the site is deployed.
