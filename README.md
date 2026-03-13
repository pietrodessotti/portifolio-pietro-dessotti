# Pietro Dessotti — Portfolio

Personal site and technical blog for **Pietro Henrique Mello Dessotti**, Senior Frontend Engineer at Zenvia.

**[pietrodessotti.dev](https://pietrodessotti.dev)**

---

## About the site

This is not a template — it's a living document of my engineering trajectory.

The site covers five years of growth from intern to senior engineer, the architectural decisions I've owned, the systems I've helped build, and the ideas I think are worth writing about. It's also where I share long-form articles on frontend engineering, React, microfrontends, and design systems.

---

## Features

- **MDX articles** — Long-form technical writing with reading time, tags, and JSON-LD structured data
- **Accent color system** — Visitors can personalize the site's accent color; preference is persisted via `localStorage` and restored before first paint to avoid flash
- **Dark mode** — System-aware via `next-themes`, toggleable
- **Static generation** — All pages pre-rendered at build time via Next.js App Router
- **Contact form** — Server-side via Resend, no client-side secrets

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 — CSS-only config, no `tailwind.config.ts` |
| Content | MDX via `next-mdx-remote/rsc` |
| State | Zustand (accent color store) |
| Dark mode | `next-themes` (class-based) |
| Icons | `lucide-react` |
| Email | Resend |
| Deployment | Vercel |

---

## Design decisions

**Tailwind v4 without config file** — All design tokens live in `globals.css` via `@theme {}` blocks. This keeps styling co-located with CSS and avoids a parallel JS config layer.

**MDX via RSC** — Articles are rendered as React Server Components with zero client JS. Code blocks, callouts, and custom components are all statically rendered.

**Accent system via `data-accent`** — Instead of injecting CSS variables from JavaScript, the store writes to `document.documentElement.dataset.accent`. CSS selectors on `:root[data-accent="..."]` do the rest. An inline script in `<head>` restores the value from `localStorage` before hydration.

**Microfrontend background** — The architectural choices here (RSC boundaries, strict client/server split, component isolation) reflect the same principles I apply at scale at Zenvia.

---

## License

All rights reserved. Code is publicly visible for reference but not licensed for reuse or redistribution.
