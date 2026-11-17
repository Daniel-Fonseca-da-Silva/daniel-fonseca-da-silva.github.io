# portfolio-dev

Personal portfolio built with TypeScript, Vite and plain DOM rendering, deployed to GitHub Pages.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # type-check (tsc) and production build into dist/
npm run preview  # serve the production build locally
```

## Updating the CV (PDF)

The downloadable CV lives in `public/cv/`. To replace it:

1. Copy the new PDF into `public/cv/`.
2. Either keep the same file name, or update `cv.file` in `src/data/profile.ts` to the new name.

The "Download CV" buttons and the resume preview read from that path automatically.

## Updating the content

All text, metrics, experience, projects and skills live in `src/data/profile.ts`. Components only render that data. Keep figures traceable to the CV; the impact metrics and charts are derived from it.

Before deploying, set `siteUrl` in `src/data/profile.ts` to the real GitHub Pages URL. It feeds the canonical link and the JSON-LD schema.

## Structure

```
src/
  app.ts              page composition (section order lives here)
  main.ts             bootstrap: renders the app and applies SEO
  seo.ts              canonical link and Person JSON-LD
  style.css           design tokens, layout and components
  data/profile.ts     all content
  domain/             types and pure helpers (insights for charts)
  lib/html.ts         escaping tagged template (`html`, `raw`)
  lib/url.ts          base-aware public asset URLs
  components/         reusable pieces (Section, TimelineChart, BarChart, FlowDiagram, ...)
  sections/           page sections built from components
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**.
