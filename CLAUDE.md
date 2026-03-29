@AGENTS.md

# Project: Portfolio Site

- Next.js 16 + React 19 + Tailwind CSS 4 + GSAP
- Package manager: npm
- Path alias: `@/*` → `./src/*`

## Structure

```
src/
  app/          # Next.js App Router (layout, page)
  components/   # UI components
  data/         # Site data (projects, site config)
  lib/          # Utilities
```

## Commands

```bash
make dev       # Start dev server (localhost:3000)
make kill      # Kill process on port 3000
npm run build  # Production build
npm run lint   # ESLint
```

## Conventions

- Language: Japanese (UI text), English (code/comments)
- Data files live in `src/data/` — keep components free of hardcoded content
- Use `@/` path alias for all imports
- shadcn/ui components in `src/components/ui/`

# currentDate
Today's date is 2026-03-29.
