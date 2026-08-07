# tahirhafeez.com — Next.js Frontend

Portfolio site for [tahirhafeez.com](https://www.tahirhafeez.com), built with **Next.js** (App Router) and powered by a headless **WordPress** CMS at `cms.tahirhafeez.com`. The design is based on the "Amara" Tailwind CSS template, adapted into React components and wired to real WordPress content for case studies.

This README is written as a **content-editing map** — for every page and section, it tells you exactly which file to open and what to change. No code changes are needed to update text; you're just editing strings inside `.tsx` files (or, for case studies, inside WordPress itself).

---

## 1. How the site is put together

```
tahirhafeez.com/                 ← this repo (GitHub: tahir1032/wp-headless)
├── src/
│   ├── app/                     ← one folder per page (routes) + layout
│   │   ├── layout.tsx           ← shared shell: header, footer, sidebar, <head>, fonts
│   │   ├── page.tsx             ← Home page ( / )
│   │   ├── studio/page.tsx      ← Studio page ( /studio )
│   │   ├── work/page.tsx        ← Work grid page ( /work )
│   │   ├── work/[slug]/page.tsx ← Case study detail page ( /work/whatever-slug )
│   │   ├── contact-us/page.tsx  ← Contact page ( /contact-us )
│   │   └── api/                 ← contact form + revalidate webhook (backend logic, not content)
│   ├── components/
│   │   ├── shell/                ← Header, Footer, ContactSidebar, ServicesShowcase, Preloader, etc.
│   │   ├── work/CaseCard.tsx     ← the repeating "project card" used on Home + Work
│   │   └── contact/ContactForm.tsx
│   ├── lib/
│   │   ├── wordpress.ts          ← fetches real case studies from the WordPress REST API
│   │   ├── fallback-data.ts      ← placeholder case studies shown ONLY if WordPress has none yet
│   │   └── site-config.ts        ← email, WhatsApp number, LinkedIn URL (single source of truth)
│   └── types/index.ts            ← TypeScript shape of a "CaseStudy"
├── public/
│   ├── images/                   ← every image the site uses (see §5 below)
│   ├── video/                    ← about.mp4, video2.mp4 (home page background videos)
│   ├── js/, vendor/, icons/       ← animation engine + icon fonts, don't touch
│   └── styles/ → actually at src/styles/  ← Tailwind CSS partials, don't touch unless changing the look
├── wordpress/tahirhafeez-headless/  ← the custom WP plugin (case studies + contact form API), gitignored
├── .env.local                    ← local environment variables (never committed)
└── package.json
```

**Two places hold content:**
1. **This repo** — all the fixed/static text on Home, Studio, and Contact Us (headings, paragraphs, service descriptions, nav labels).
2. **WordPress** (`cms.tahirhafeez.com/wp-admin`) — the actual case studies (the "Work" portfolio items). See §4.

---

## 2. Pages, in detail

### Home — `/` — file: `src/app/page.tsx`

| Section | What it is | Where the text lives |
|---|---|---|
| Hero | Big "Tahir" text + 10 mouse-trailing images | Line with `<h1 ...>Tahir</h1>` — change the name/word here |
| Video section | Background video (`about.mp4`) + 2 thumbnail buttons + a YouTube popup button | `data-src="https://www.youtube.com/embed/..."` — replace with your own YouTube video ID, or remove the button |
| "Recent work" strip | Shows your **5 latest case studies** from WordPress (falls back to demo content if none published yet) | Case study text comes from WordPress (§4). The intro paragraph ("At Tahir, we know your time is precious...") is hardcoded here — edit directly |
| "STUDIO" zoom section | Big animated "STUDIO" text with a decorative path animation | Just the word "STUDIO" — cosmetic, links to `/studio` |
| Services showcase | 4 service cards (Web Design, Web Development, Mobile Apps, Branding) | **Shared component**, see §3 `ServicesShowcase.tsx` — you'll likely rewrite these 4 to be WordPress/GoHighLevel service offerings instead |
| "180 projects" stat | Big number + one sentence | Both hardcoded right in this file — change "180" and the sentence to your real numbers |

### Studio — `/studio` — file: `src/app/studio/page.tsx`

This is your "About" page. All text is static (no WordPress involved).

| Section | Where |
|---|---|
| "Meet the Studio" heading + 2 hero photos | Top of file |
| Intro paragraph ("We are a creative digital studio...") | Right below the hero |
| "Our Mission" / "Our Promise" / "Our Approach" (3 short blurbs + photos) | Middle of file — **these 3 are the best place to describe your WordPress/GHL philosophy and approach** |
| "Why Clients Choose Us" (4 bullet points) | `CHOOSE_US` array near the top of the file — currently generic design-agency bullets, rewrite for your actual strengths |
| Image wheel (scrolling carousel) | `WHEEL_IMAGES` array — just image numbers, no text |
| Services showcase (same 4 cards as Home) | Shared component, see §3 |

### Work — `/work` — file: `src/app/work/page.tsx`

The portfolio grid. **All the actual project content comes from WordPress**, not this file (see §4). This file only controls:
- The big heading ("Building Brands Through Design") — change this
- The **filter categories** on the left sidebar (`fallbackFilters` in `src/lib/fallback-data.ts`) — currently: All Work, Web Design, Web Development, Mobile Apps, Branding, UI/UX Design, Digital Marketing, Motion Graphics, 3D Design. You'll want to rename/reduce these to match WordPress + GoHighLevel work categories (these labels must match the `case_study_category` taxonomy slugs registered in the WordPress plugin — ask before renaming if you're not sure how they connect).

### Case study detail — `/work/[slug]` — file: `src/app/work/[slug]/page.tsx`

One page per project, e.g. `/work/wordpress-site-migration`. **100% of the content here comes from WordPress** — title, date, client name, tags, "Overview," "Our Approach Solution," and the 5 gallery photos. There is no text to edit in this file; you write this content per-project inside WordPress (see §4). This page is only shown with placeholder demo content if WordPress has zero published case studies.

### Contact Us — `/contact-us` — file: `src/app/contact-us/page.tsx`

| Section | Where |
|---|---|
| "Let's Discuss Your Project" hero | Top of file |
| Contact info sidebar (email, WhatsApp, "location", LinkedIn) | Email/WhatsApp/LinkedIn pull from `src/lib/site-config.ts` (§6) — edit there, not here. The **address line** ("5th Floor, Corporate Plaza, Central District") is a placeholder — replace or delete it here directly |
| "We're excited to learn more..." heading | Right above the form |
| **Contact form fields** | `src/components/contact/ContactForm.tsx` |
| **Service dropdown in the form** | Same file — `SERVICE_OPTIONS` array. **This still lists the old Amara template's services (Logo design, Brand identity, Social media creatives, etc.) — you'll want to replace these with your actual WordPress/GoHighLevel service offerings** (e.g. "WordPress website build," "GoHighLevel funnel setup," "CRM automation," "Website maintenance," etc.) |

**Contact form status:** fully working — submits to your WordPress plugin (`/wp-json/th/v1/contact`), creates a private "Contact Submission" entry visible in `wp-admin`, and emails you a notification. **Newsletter forms (footer + slide-out sidebar) are NOT wired up yet** — they're static/decorative only.

---

## 3. Shared content (appears on every page)

| Component | File | Contains |
|---|---|---|
| Header / nav | `src/components/shell/Header.tsx` | Logo text ("@Tahir"), nav labels (Home / Work / Studio / Contact Us), email + WhatsApp pills |
| Footer | `src/components/shell/Footer.tsx` | Newsletter heading, "Contact Us" / "Company" / "Social Media" columns, "Let's discuss" CTA, copyright line |
| Contact slide-out panel | `src/components/shell/ContactSidebar.tsx` | Opens via the "Info" button — short tagline, contact list, newsletter form |
| 4 service cards | `src/components/shell/ServicesShowcase.tsx` | Used on both Home and Studio — `SERVICES` array at the top of the file (letter badge, title, description, 3 bullet items each) |
| Site `<title>` / meta description | `src/app/layout.tsx` | The `metadata` object near the top — this is what shows in Google search results and browser tabs |

---

## 4. Case studies (the actual portfolio content) — lives in WordPress

Your real project write-ups (WordPress builds, GoHighLevel automations, etc.) are **not edited in this codebase at all**. They're managed at:

**`https://cms.tahirhafeez.com/wp-admin` → Case Studies → Add New**

Each case study has these fields (added by the custom `tahirhafeez-headless` plugin):

| Field | Shows up as |
|---|---|
| Title | Card title + detail page heading |
| Featured Image | Card thumbnail (460×450 recommended) |
| Platform (WordPress / GHL / Webflow / Wix) | Internal tag, not currently shown on the card |
| Client Type | Internal field |
| **Client Name** | "Client Name: ___" on the detail page |
| **Problem** | Shown as "Overview" on the detail page |
| **Solution** | Shown as "Our Approach Solution" on the detail page |
| **Result Metrics** (label/value pairs) | Not currently displayed on the frontend (stored, not yet rendered) |
| **Gallery** (multiple images) | The 5 photos on the detail page |
| Case Study Category (taxonomy) | Which `/work` filter button it appears under |
| Case Study Tags (taxonomy) | The small pill badges on the card and detail page |

Once you publish real case studies, they **automatically replace** the demo/placeholder content on Home, Work, and the detail pages — no code changes needed. Publishing also pings `/api/revalidate` so the live site updates within the hour (or instantly, depending on the webhook).

See `CONNECT.md` for the full WordPress ↔ Vercel connection setup, and `wordpress/INSTALL.md` for plugin upload instructions.

---

## 5. Images — where things live

All images are in `public/images/`, referenced with paths like `/images/work/services/1.webp`.

| Folder / file | Used for | Notes |
|---|---|---|
| `favicon.webp` | Browser tab icon | 50×50 |
| `preloader-img1/2/3.webp` | Loading screen (cycles through 3) | 220×260 each |
| `thumbs/thumb1.webp`, `thumb2.webp` | Home page video thumbnail buttons | 138×159 each |
| `work/services/1.webp`–`10.webp` | Work cards (Home "Recent work" + `/work` grid) — used only when WordPress has no case studies yet | 460×450 each. **Once real case studies exist, their Featured Image replaces these entirely** |
| `work/1.webp`–`5.webp` | Case study detail gallery (demo fallback only) | Varying sizes — replaced by each case study's real Gallery field once published |
| `studio.webp` | Studio page full-width banner | 1879×683 |
| `studio/1.webp`–`4.webp` | Studio page hero + mission/promise/approach photos | Varying sizes |
| `Group.webp` | Decorative rotating badge on `/work` | 447×442 |
| `contect.webp` | Contact page banner strip | 1920×1344 |
| `image-scroll/1.webp`–`17.webp`, `20.webp` | Reused across: Home + Contact hero mouse-trail, Studio image wheel | 150×188 each |
| `svg/eyes.svg` | Decorative footer graphic | vector |

Current images are real, license-free stock photos (via Pexels) themed around WordPress/web development/GoHighLevel/CRM — every one was manually reviewed to remove trademark/logo risk. Swap any of them by replacing the file at the same path/filename — no code changes needed as long as the filename stays the same.

---

## 6. Contact details (email / WhatsApp / LinkedIn)

Single source of truth: **`src/lib/site-config.ts`**. Change these once here and they update everywhere (header, footer, sidebar, contact page):

```ts
CONTACT_EMAIL   // currently dev@tahirhafeez.com
WHATSAPP_DISPLAY / WHATSAPP_LINK   // currently +92 302 7263808
LINKEDIN_URL    // set NEXT_PUBLIC_LINKEDIN_URL in .env.local — currently a placeholder, update to your real profile
```

---

## 7. Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 |
| Hosting | Vercel → www.tahirhafeez.com |
| CMS | Headless WordPress → cms.tahirhafeez.com |
| Content | Case studies + contact form via custom WP REST API (`wordpress/tahirhafeez-headless` plugin) |

## Local development

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment variables (also set in Vercel)

| Variable | Purpose |
|----------|---------|
| `WORDPRESS_API_URL` | `https://cms.tahirhafeez.com` — where case studies/contact form are fetched from |
| `REVALIDATE_SECONDS` | ISR cache duration (default 3600 = 1 hour) |
| `REVALIDATE_SECRET` | Shared secret with the WordPress plugin's revalidate webhook |
| `NEXT_PUBLIC_CONTACT_EMAIL` | See §6 |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, e.g. `923027263808` |
| `NEXT_PUBLIC_LINKEDIN_URL` | Your real LinkedIn profile URL |
| `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_UPWORK_URL`, `NEXT_PUBLIC_FIVERR_URL`, `NEXT_PUBLIC_CLUTCH_URL` | Reserved for future use — not currently rendered anywhere on the site |

## Deploy flow

```
Edit code locally → commit → push to GitHub (tahir1032/wp-headless) → Vercel auto-deploys
```

**Vercel settings:** Repository `tahir1032/wp-headless`, Root Directory **empty** (Next.js is at repo root), Branch `master`.

## WordPress CMS setup

See [CONNECT.md](./CONNECT.md) for connecting case studies from WordPress, and `wordpress/INSTALL.md` for plugin upload troubleshooting. WordPress plugin source is kept locally in `wordpress/` (gitignored — it's uploaded to Hostinger manually, not deployed via this repo/Vercel).
