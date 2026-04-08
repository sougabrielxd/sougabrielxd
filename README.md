# Portfolio — Gabriel Lucas

Minimal, editorial personal portfolio built with Next.js 15 + TypeScript.

## Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **CSS Modules** — zero runtime CSS-in-JS
- **DM Sans + DM Mono** via next/font

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata + fonts
│   ├── page.tsx         # Single page
│   ├── page.module.css  # Page layout
│   └── globals.css      # Design tokens + reset
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Hero.module.css
│   ├── Projects.tsx     # Projects section
│   └── Projects.module.css
└── data/
    └── content.ts       # ← EDIT THIS FILE ONLY
```

## How to update content

**Everything lives in `src/data/content.ts`.**

### Update personal info

```ts
export const meta = {
  name: "Gabriel Lucas",
  role: "Full-Stack Engineer · AI Systems Builder",
  bio: "Your bio here.",
  links: {
    github: "https://github.com/...",
    linkedin: "https://linkedin.com/in/...",
    resume: "/resume.pdf",  // place PDF at /public/resume.pdf
  },
}
```

### Add a project

```ts
export const projects: Project[] = [
  {
    slug: "my-project",
    title: "Project title",
    description: "Short description — 1-2 sentences max.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/my-project.png",  // 1200×675px recommended
    links: {
      demo: "https://...",    // optional
      github: "https://...", // optional
      npm: "https://...",    // optional
    },
  },
]
```

Place project images at `/public/projects/`.

### Remove a project

Delete the object from the array. If the array is empty, the section doesn't render.

### Update resume

Replace `/public/resume.pdf` with your updated PDF. Filename stays the same.

## Build & deploy

```bash
npm run build   # outputs to /out (static export)
```

Deploy the `/out` folder to Vercel, Netlify, Cloudflare Pages, or any static host.

### Vercel (recommended)

1. Push to GitHub
2. Import repo on vercel.com
3. Framework: Next.js — Vercel detects it automatically
4. Done

## Design decisions

- **No component library** — pure CSS Modules, zero runtime overhead
- **No animation library** — CSS transitions only, nothing heavy
- **No CMS** — one file to edit, no login, no dashboard
- **Static export** — CDN-friendly, fast everywhere, survives months without touching
- **Dark mode** — via `prefers-color-scheme`, automatic, no JS
