# BAD MACRO

An artist identity website for **Bad Macro** - cinematic, uncanny, and deliberate.
This site is equal parts gallery, signal, and archive: a place where released work
lives alongside visual language, story fragments, and future experiments.

## Vision

Bad Macro lives in the space between:

- **Clockwork Orange**: stylized menace, ritual, and theatrical control
- **2001: A Space Odyssey**: stark futurism, silence, scale, and clean geometry

The result should feel both analog and futuristic:

- Minimal but emotionally loaded
- Elegant but slightly disturbing
- Slow, intentional, and immersive

This is not a generic music landing page. It is a digital world with a pulse.

## Core Goals

1. Establish a recognizable visual and narrative identity for Bad Macro.
2. Showcase published music with clear paths to Spotify, Apple Music, and YouTube.
3. Host music directly on the site over time.
4. Build a foundation that can grow into a full audiovisual archive.

## Audience Experience

When someone lands on the site, they should feel:

- Immediate atmosphere (mood before information)
- Curiosity (what is this world?)
- Confidence (where to listen now)
- Return value (new drops, new visuals, new artifacts)

## Brand and Tone Guide

### Personality

- Controlled
- Cinematic
- Precise
- Strange
- Confident

### Voice

- Short sentences
- High-impact phrasing
- Minimal filler
- Never corny, never over-explained

Example tone:

> "Transmission received."
> "New sequence online."
> "Listen in full."

## Visual Direction

### Art Direction Keywords

- Monolithic
- Symmetrical
- Clinical
- Retro-futurist
- Ritualistic

### Color System (Initial)

- Primary dark: near-black / charcoal
- Highlight: warning orange or surgical red
- Neutrals: bone white, steel gray

Use color sparingly. Contrast should feel intentional, not decorative.

### Typography

- One strong display face for statements/headlines
- One clean sans-serif for navigation/body text
- Wide tracking and strict spacing for system-like UI labels

### Motion

- Slow fades
- Hard cuts at key moments
- Minimal parallax/glitch effects used with restraint

No noisy animations. Movement should feel cinematic, not "tech demo."

## Site Architecture (v1)

### 1) Home

- Hero statement (identity + mood)
- Primary listen actions:
  - Spotify
  - Apple Music
  - YouTube (when ready)
- Featured release block

### 2) Releases

- Chronological list of singles/EPs/albums
- Cover art + metadata
- External platform links per release
- Future: on-site playback and download assets

### 3) About

- Short artist statement
- Influences/themes
- Contact or management routing

### 4) Visuals (future-ready)

- Stills, treatments, visual companions, campaign fragments

## Functional Requirements

### Immediate

- Responsive layout (mobile-first, desktop refined)
- Fast load times
- Stable external links for streaming platforms
- Clean metadata for sharing (Open Graph + social cards)

### Near-Term

- Embedded previews for new releases
- Mailing list capture
- Lightweight CMS/workflow for release updates

### Long-Term

- Native audio hosting and playback library
- Full archive mode (audio, visual, writing, process)
- Ticketing/events integration if needed

## Technical Direction (Suggested)

- Frontend: modern React framework (Next.js or equivalent)
- Styling: design-token driven CSS system
- Media: optimized images/audio delivery
- Hosting: Vercel/Netlify/Cloudflare Pages
- Analytics: privacy-respecting event tracking

Keep architecture simple, modular, and easy to evolve.

## Build Principles

1. **Mood first, then navigation** - emotional tone is the product.
2. **Less, but sharper** - cut anything that dilutes identity.
3. **Every section earns its place** - no filler components.
4. **Consistency is mythology** - repeated motifs build the world.
5. **Speed is part of the aesthetic** - performance supports immersion.

## Content Checklist

- [ ] Artist statement draft
- [ ] High-res logo/wordmark options
- [ ] Release catalog metadata
- [ ] Streaming links (Spotify / Apple Music / YouTube)
- [ ] Hero imagery/video loop concepts
- [ ] Press/contact email

## Roadmap

### Phase 1 - Foundation

- Finalize brand language + visual system
- Build Home/Releases/About structure
- Add platform outbound links
- Launch public v1

### Phase 2 - Expansion

- Add richer release pages
- Add visuals section
- Introduce mailing list and announcements

### Phase 3 - Archive

- Host tracks on-site
- Build searchable media archive
- Introduce deeper worldbuilding content

## Definition of Done for v1

The site is "v1 complete" when:

- A first-time visitor immediately understands the Bad Macro identity
- Core releases are easy to find and play on major platforms
- Visual and editorial tone is consistent across all pages
- The system is ready for frequent release updates

## Working Tagline Options

- "A controlled signal from the near future."
- "Cinematic electronic work from Bad Macro."
- "Music for ritual systems and cold stars."

---

This README is the creative and technical north star for Bad Macro web development.
When making design or product decisions, bias toward **clarity, atmosphere, and
cohesive identity**.

## Deployment Runbook (GitHub + Vercel + GoDaddy)

This project is ready to deploy as a static Vercel site (`index.html` + `styles.css`).

### 1) Initialize a standalone git repo in `BadMacro`

```bash
cd /Users/stefan/development/BadMacro
git init
git add .
git commit -m "Initial Bad Macro site foundation"
```

### 2) Create and connect GitHub repo

Option A (GitHub website):

1. Create a new repository named `BadMacro` (or `badmacro-site`) on GitHub.
2. Do **not** initialize with a README/gitignore/license.
3. Run:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Option B (GitHub CLI, if installed later):

```bash
gh auth login
gh repo create BadMacro --public --source=. --remote=origin --push
```

### 3) Import into Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New... -> Project**.
3. Import your `BadMacro` GitHub repository.
4. Framework preset: **Other** (or auto-detected static).
5. Deploy.

No build command is required for this static setup.

### 4) Connect `badmacro.com`

In Vercel:

1. Open project -> **Settings -> Domains**.
2. Add `badmacro.com` and `www.badmacro.com`.
3. Vercel will show required DNS records.

In GoDaddy DNS:

- Set `A` record for `@` to `76.76.21.21` (Vercel apex record)
- Set `CNAME` for `www` to `cname.vercel-dns.com`

Then return to Vercel and verify domain status.

### 5) Enforce canonical domain

In Vercel Domains settings, choose either:

- `badmacro.com` as primary and redirect `www`, or
- `www.badmacro.com` as primary and redirect apex

Recommended: use `badmacro.com` as canonical for artist branding.

### 6) Platform links (next action)

Replace the placeholder links in `index.html` with your real Spotify/Apple Music/YouTube URLs before public sharing.
