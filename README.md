# Pietro Dessotti — Portfolio

Personal portfolio and technical blog for **Pietro Henrique Mello Dessotti**, Senior Frontend Engineer at Zenvia.

Live at: [pietrodessotti.dev](https://pietrodessotti.dev)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 (CSS-only config) |
| Content | MDX via `next-mdx-remote/rsc` |
| Dark mode | `next-themes` (class-based) |
| Icons | `lucide-react` |
| Email | Resend |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router routes
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── articles/[slug]/
│   ├── architecture/
│   ├── case-studies/[slug]/
│   ├── contact/
│   ├── api/contact/        # Contact form API (Resend)
│   ├── layout.tsx          # Root layout, global metadata
│   ├── globals.css         # Tailwind v4 config + CSS variables
│   ├── opengraph-image.tsx # Default site OG image (1200×630)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Header, Footer, ThemeProvider, ThemeToggle, MobileMenu
│   ├── sections/           # Homepage sections (Hero, WhatIDo, Experience, …)
│   ├── ui/                 # Button, Card, Badge, Tag, SectionHeading
│   ├── articles/           # ArticleCard, ArticleHeader
│   ├── case-studies/       # CaseStudyCard, CaseStudyHeader
│   ├── mdx/                # MDXRenderer, MDXComponents, Callout
│   └── contact/            # ContactForm
├── data/                   # Static data (navigation, experience, skills, architecture, …)
├── lib/
│   ├── mdx.ts              # getAllArticles, getArticleBySlug, getAllCaseStudies, …
│   └── utils.ts            # cn(), formatDate(), formatDateShort()
└── types/                  # Article, CaseStudy TypeScript interfaces

content/
├── articles/               # .mdx files with frontmatter
└── case-studies/           # .mdx files with richer frontmatter
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Homepage with all sections |
| `/about` | Bio, values, and background |
| `/articles` | Article list |
| `/articles/[slug]` | Full article with reading time + JSON-LD |
| `/architecture` | Deep dives: React, Microfrontends, BFF, Design Systems |
| `/case-studies` | Case study list |
| `/case-studies/[slug]` | Full case study with metadata + JSON-LD |
| `/contact` | Contact form (powered by Resend) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file at the root:

```bash
# Required for the contact form in production
RESEND_API_KEY=re_your_api_key_here
```

In development, the contact form falls back to `console.log` if the key is missing.

---

## Content

### Articles

Create `.mdx` files in `content/articles/` with this frontmatter:

```yaml
---
title: 'Your Article Title'
description: 'A short description shown in previews and meta tags.'
publishedAt: '2025-06-01'
updatedAt: '2025-06-10'     # optional
tags: ['React', 'TypeScript']
featured: true              # optional — surfaces in homepage preview
draft: false                # optional — drafts are excluded from builds
---
```

### Case Studies

Create `.mdx` files in `content/case-studies/` with this frontmatter:

```yaml
---
title: 'Case Study Title'
description: 'Short description.'
publishedAt: '2025-01-01'
tags: ['Design System', 'React']
role: 'Senior Frontend Engineer'
company: 'Zenvia'
duration: '6 months'
teamSize: '4 engineers'
impact:
  - 'Reduced design inconsistencies by 60%'
  - 'Adopted by 8 product teams'
technologies: ['React', 'TypeScript', 'Storybook']
featured: true              # optional
---
```

Reading time is calculated automatically from content length.

---

## Design System

All design tokens are defined as CSS variables in [src/app/globals.css](src/app/globals.css). No `tailwind.config.ts` — Tailwind v4 is configured entirely in CSS.

**Key tokens:**

| Token | Light | Dark |
|---|---|---|
| `--background` | `white` | `zinc-950` |
| `--foreground` | `zinc-950` | `zinc-50` |
| `--muted` | `zinc-500` | `zinc-400` |
| `--muted-bg` | `zinc-50` | `zinc-900` |
| `--border` | `zinc-200` | `zinc-800` |
| `--accent` | `#0070f3` | `#3291ff` |

---

## SEO

- **Metadata**: Title templates, descriptions, keywords, Open Graph and Twitter cards via Next.js `generateMetadata`
- **OG Images**: Auto-generated 1200×630 images for the site, each article, and each case study (`next/og`)
- **JSON-LD**: Article and BreadcrumbList structured data on all content detail pages
- **Sitemap**: Auto-generated at `/sitemap.xml` including all static and dynamic routes
- **Robots**: Configured at `/robots.txt`
- **metadataBase**: Set to `https://pietrodessotti.dev` for correct absolute URL resolution

---

## Deployment

The project is optimized for **Vercel** (zero config required).

1. Push to GitHub
2. Import the repository in Vercel
3. Add the `RESEND_API_KEY` environment variable in Vercel's project settings
4. Deploy

**Security headers** (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are applied to all routes via `next.config.ts`.

**Image optimization** is enabled with AVIF and WebP formats via `next.config.ts`.

---

## License

All rights reserved. Code is publicly visible for reference but not licensed for reuse.
