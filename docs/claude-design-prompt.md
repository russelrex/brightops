# BrightOps Digital — Design & Layout Reference (New Page Brief)

Use this document as a **Claude prompt** in a new chat when building pages that match the BrightOps Digital website. Copy the full contents into Claude, then add your specific page request at the end.

---

## Project context

- **Business:** Two-partner startup offering full stack development, automation, CRM setup, mobile apps, funnels, and operations tools.
- **Stack:** React 19 + TypeScript + Vite. Styles in `src/index.css`. Components in `src/components/`. Content/data in `src/data/content.ts`.
- **Tone:** Professional, startup-friendly, clear copy. No heavy jargon. Trustworthy and modern.

---

## Design philosophy

- **Editorial / architectural layout:** Visible grid lines, numbered sections, document-style labels (FILE, FIG, SHEET).
- **Premium minimal:** White background, black top bar, thin borders, generous whitespace.
- **Typography contrast:** Large serif headlines (Fraunces) + tight sans body (Inter Tight) + mono labels (JetBrains Mono).
- **Accent system:** Deep green for emphasis (`em`, status dots, contact band) + muted blue for links, hovers, primary CTAs.
- **Fixed chrome:** Black top bar + left sidebar; main content offset to the right.

---

## Color tokens (CSS variables)

```css
--accent: #386152;           /* green — italic emphasis, dots, contact section bg */
--accent-deep: #25453a;
--accent-blue: #2d5a8a;       /* primary buttons, links, hovers */
--accent-blue-light: #4a7ab5;
--paper: #ffffff;              /* page background */
--paper-2: #f4f4f4;           /* row hover / subtle fill */
--ink: #14181a;                /* primary text, top bar, footer */
--ink-2: #2c3338;              /* body secondary */
--ink-soft: #5b6469;           /* meta, labels */
--line: rgba(20,24,26,0.16);   /* borders */
--line-2: rgba(20,24,26,0.08);
--side: 280px;                 /* sidebar width */
--top: 36px;                   /* top bar height */
```

**Fonts (Google Fonts):**

- Display: `Fraunces`
- Sans: `Inter Tight`
- Mono: `JetBrains Mono`

---

## App shell (every page)

```html
<div class="appB">
  <!-- Fixed top bar -->
  <div class="topbar">
    <div class="topbar__l">
      <span class="topbar__dot"></span>
      <span>SYSTEMS • AUTOMATION • DEVELOPMENT • OPERATIONS</span>
    </div>
    <div class="topbar__c">BRIGHTOPS DIGITAL — STARTUP.HOMEPAGE.V2 — 2026</div>
    <div class="topbar__r">
      <a href="mailto:hello@brightopsdigital.com">hello@brightopsdigital.com</a>
      <span class="topbar__sep">/</span>
      <a href="#contact" class="topbar__cta">BOOK A CONSULTATION →</a>
    </div>
  </div>

  <!-- Fixed left sidebar -->
  <aside class="sidenav">
    <div class="sidenav__top">
      <div class="brandmark">
        <!-- SVG logo: 40×40 square, diagonal lines, "BO" centered -->
        <div class="brandmark__name">BrightOps Digital</div>
        <div class="brandmark__sub">TWO-PARTNER STARTUP / DEV + OPS</div>
      </div>
    </div>
    <nav class="sidenav__menu">
      <a href="#top" class="sidenav__item">
        <span class="sidenav__num">00</span>
        <span class="sidenav__label">Home</span>
      </a>
      <!-- 01 Services, 02 Tech Stack, 03 Process, 04 About, 05 Contact -->
    </nav>
    <div class="sidenav__foot">
      <div class="sidenav__progress">
        <div class="sidenav__progressBar" style="width: X%"></div>
      </div>
      <div class="sidenav__meta">
        <span>REMOTE TEAM</span>
        <span>TIME EST</span>
      </div>
    </div>
  </aside>

  <main class="appB__main">
    <!-- page sections here -->
  </main>

  <footer class="foot2"></footer>
</div>
```

**Main content:** `margin-left: 280px`, `margin-top: 36px`, `padding: 0 56px`, left border `1px solid var(--line)`.

**Mobile (<1100px):** Sidebar hidden; main full width; padding `0 32px`.

---

## Current homepage sections (reference order)

| # | Section ID | Component | Purpose |
|---|------------|-----------|---------|
| — | `#top` | `Hero` | Headline, subcopy, CTAs, hero image, specs, marquee |
| §01 | `#services` | `ServicesSection` | What We Build — 10 service rows with images |
| §02 | `#tech-stack` | `TechStackSection` | Tools by category, 2-col grid with icons |
| — | — | `FeatureBand` | Full-bleed collaboration image |
| §03 | `#process` | `ProcessSection` | How We Work — 6 steps |
| §04 | `#about` | `AboutSection` | Two-partner story + roles |
| §05 | `#why` | `WhySection` | Why BrightOps bullets |
| §06 | `#contact` | `ContactSection` | Green CTA band + form |
| — | — | `Footer` | Brand + link columns |

---

## Reusable section header

```html
<div class="sectionHead">
  <div>
    <span class="kicker">§ 01 · SECTION NAME</span>
    <h2 class="sectionTitle">Headline with <em>italic green word</em>.</h2>
  </div>
  <div>
    <p class="sectionHead__note">Supporting sentence. Max ~2 lines. Plain language.</p>
  </div>
</div>
```

- `.kicker`: mono, 10px, letter-spacing 0.22em, green `var(--accent)`.
- `.sectionTitle`: Fraunces, `clamp(40px, 5.2vw, 88px)`, line-height ~0.96.
- `em` inside titles: italic, green accent.

---

## Section patterns (reuse these layouts)

### 1. Hero (`heroB`)

- Grid: meta row → title + image → lede + CTAs → 4 spec cells.
- Headline: up to 4 lines, large Fraunces; one word in `<em>`.
- Image frame: border, grid texture padding, crosshair corners, mono caption overlay.
- CTAs: `.btn2.btn2--solid` (blue) + `.btn2.btn2--ghost` (outline).
- Bottom: black marquee ticker (mono, scrolling uppercase).

### 2. Row list (`services2` + `srv2`)

- Border-top on container; each row = 3-column grid: `code | title+body | media or list`.
- Code: mono `S.01`, `T.01`, `01` — green accent.
- Title: large Fraunces; body: 15px `var(--ink-2)`.
- Hover: `background: var(--paper-2)`.

**Service row with image:**

```html
<article class="srv2 srv2--service">
  <div><span class="srv2__code">S.01</span></div>
  <div>
    <h3 class="srv2__title">Title</h3>
    <p class="srv2__body">Description.</p>
  </div>
  <div class="srv2__media">
    <img src="https://images.unsplash.com/..." alt="" loading="lazy" />
  </div>
</article>
```

### 3. Tech stack tools (`toolGrid` — 2 columns)

```html
<ul class="toolGrid">
  <li>
    <img
      class="toolIcon toolIcon--brand"
      src="https://cdn.simpleicons.org/{slug}/8a9199"
      width="28"
      height="28"
      alt=""
    />
    <span>Tool Name</span>
  </li>
</ul>
```

- Brand icons: Simple Icons CDN, 28px, grayscale (`filter: grayscale(1)`), color `#8a9199`.
- Non-brand tools: minimal gray stroke SVG fallback (`ToolIcon` component).
- 2-column grid; no arrow bullets in tech stack.

### 4. Full-bleed image band (`band`)

- Breaks out of main padding (`margin: 0 -56px`).
- Dark frame border, mono caption block bottom-left with green left border.

### 5. About (`about2`)

- `sectionHead` + 2-column card grid with partner roles.
- Cards: mono label (blue) + body copy.

### 6. Why us (`why2`)

- `sectionHead` + 2-column bullet list.
- Items: `→` prefix in blue mono, bordered grid cells.

### 7. Process (`process2`)

- Same `srv2` rows as services, but 2 columns (code + content only).
- 6 steps: Discover → Plan → Build → Test → Launch → Optimize.

### 8. Contact (`contact2`)

- Full-bleed green band (`var(--accent)`), subtle grid texture overlay.
- White/off-white text; italic gold-tint `em` in headline.
- Left: info lines + CTA buttons; right: minimal underline form fields.
- Submit: white background, blue mono uppercase text.

### 9. Footer (`foot2`)

- Black background, offset by sidebar width.
- Brand mark + tagline + 3 link columns + mono copyright row.

---

## Buttons

| Class | Style |
|--------|--------|
| `btn2 btn2--solid` | Blue bg (`--accent-blue`), white text, mono uppercase |
| `btn2 btn2--ghost` | 1px ink border, hover fills black |

---

## Copy conventions

- Section index: `§ 02 · TECH STACK`
- File meta: `FILE / 2026.05.01 — BRIGHTOPS DIGITAL`
- Sheet refs: `SHEET 01 / 07`
- Figure captions: `FIG. 01 — LABEL` + `SCALE 1 : 1200`
- Status: green dot + label (e.g. "Available")
- Email: `hello@brightopsdigital.com`
- Tagline: `Smarter systems. Stronger businesses.`

---

## Images

- Use **Unsplash** for placeholders (software dev, dashboards, automation, team collaboration, mobile, CRM).
- Service thumbnails: slight grayscale + contrast; `object-fit: cover`.
- Hero/feature: high quality, `w=2000&q=85` or similar.

---

## File structure (when adding features)

```
src/
├── App.tsx                 # Shell + section order
├── index.css               # All global + component styles
├── data/content.ts         # Copy, arrays, nav items
├── components/
│   ├── TopBar.tsx
│   ├── SideNav.tsx
│   ├── BrandMark.tsx
│   ├── Hero.tsx
│   ├── ServicesSection.tsx
│   ├── TechStackSection.tsx
│   ├── ToolIcon.tsx
│   ├── FeatureBand.tsx
│   ├── ProcessSection.tsx
│   ├── AboutSection.tsx
│   ├── WhySection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── hooks/                  # useInView, useScrollProgress, useClock
```

---

## Checklist for a new page/section

1. Keep `appB` shell: TopBar, SideNav, `appB__main`, Footer.
2. Use existing CSS classes; add new ones only if needed (BEM: `block__element`, `--modifier`).
3. Match spacing: `padding-bottom: 100px` on sections; `border-top` between major blocks.
4. Add sidebar nav entry with next number (e.g. `06`) and matching `id` on the section.
5. Put reusable strings in `src/data/content.ts`.
6. Export a React component from `src/components/` and register it in `App.tsx`.

---

## Do NOT

- Redesign as generic SaaS (heavy cards, gradients, large radius).
- Drop editorial cues: numbered nav, grid lines, FILE/FIG labels.
- Use beige background (site is **white**).
- Replace Fraunces + mono system with Inter-only templates.
- Use purple/pink accents.

---

## Claude prompt template (copy below into a new chat)

```
You are building UI for BrightOps Digital. Read and follow the design system in docs/claude-design-prompt.md (or the spec pasted below).

Match the existing editorial layout exactly. Stack: React 19 + TypeScript + Vite.

[TASK]
Describe the page or section you want here. Example:
- Add a Pricing section (§ 07) with 3 tiers in srv2 row style
- Add a Case Studies page with hero + project grid
- Add a single service detail page template

[OUTPUT]
- React component(s) in TypeScript
- content.ts data entries
- Minimal CSS additions using existing CSS variables
- App.tsx integration steps
```

---

## Brand quick reference

| Item | Value |
|------|--------|
| Name | BrightOps Digital |
| Email | hello@brightopsdigital.com |
| Partners | 2 (DevOps/ops + full stack dev) |
| Services | Full stack, mobile, automation, CRM, funnels, ops, websites, Shopify, community platforms, Airbnb/booking |
| Primary CTA | Book a Consultation |

---

*Last updated for BrightOps Digital homepage v2 — white background, tech stack icons, startup positioning.*
