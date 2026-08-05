<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# DIGNIFY — Project instructions

## Project identity

This repository contains the official website of **Dignify**, a digital studio founded by **Dije** and **Ignas**.

Dignify specializes in:

- Website Development
- UI/UX Design
- Front-End Development
- AI Solutions
- n8n Workflow Automation
- API Integration

Dignify is a young studio. The site is a product-design and front-end engineering deliverable first, a sales page second.

## Visual direction

Preserve the established Dignify visual identity at all times:

- monochrome editorial foundation (~85–90% monochrome coverage)
- emerald green (`#10B981`) and gold (`#C9A227`) accents only, used sparingly
- industrial-modern composition
- modular grid alignment
- sharp geometric sections and selective diagonal cuts (`clip-path`)
- bold condensed display typography (Anton), clean sans body (Inter), technical metadata (JetBrains Mono)
- restrained motion (fade/slide reveals only) that respects `prefers-reduced-motion`
- generous but structured whitespace
- heavy 1px horizontal/vertical rules and boxed editorial zones

Do not introduce:

- generic SaaS card layouts
- excessive rounded corners
- colorful gradients
- glassmorphism
- cartoon graphics
- neon or cyberpunk styling
- orange accents (the reference's orange is replaced with emerald + gold)
- fake testimonials, fake metrics, or invented client claims

## Engineering standards

- Read the Next.js 16 docs in `node_modules/next/dist/docs/` before using new APIs.
- Next.js 16 breaking changes: `params`/`searchParams` are async-only (await them), `next lint` is removed (use `npm run lint` = ESLint CLI directly), `viewport` must be a separate export, `metadataBase` is required for relative URL metadata.
- Use TypeScript strict mode (already enabled in `tsconfig.json`).
- Prefer Server Components. Add `'use client'` only where interaction requires it (framer-motion, filters, forms, menus).
- Keep editable content centralized and typed in `src/content/`.
- Do not add dependencies unless they provide clear value.
- Do not commit secrets or placeholder credentials.
- Do not suppress TypeScript or lint errors without justification.
- Preserve accessibility and responsive behavior.
- No code comments unless asked; express intent through naming and structure.

## Content integrity

Never invent:

- clients
- testimonials
- review scores
- awards
- certifications
- business metrics
- years of experience

Label projects honestly as:

- Internal Project
- Concept Project
- Client Project

The `hello@dignify.studio` email and `https://dignify.studio` domain are placeholders; replace them when real ones exist.

## Required validation

Before finishing a meaningful implementation task:

1. Run the configured formatter if present.
2. Run `npm run lint` (ESLint CLI — `next lint` does not exist in Next 16).
3. Run `npx tsc --noEmit` for type checking.
4. Run relevant tests if any exist.
5. Run `npm run build` (production build).
6. Inspect affected routes over HTTP when a dev/prod server is running.
7. Report only checks that were actually executed; never claim browser or visual checks that were not performed.

## Subagents

Use subagents for independent read-heavy review work such as:

- repository exploration
- visual/code inspection
- accessibility review
- responsive review
- SEO and performance review
- content-integrity scans

Avoid parallel edits to overlapping files. The main agent owns final integration and final validation.
