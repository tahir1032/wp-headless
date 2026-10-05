# tahirhafeez.com — Next.js Frontend

Site for [tahirhafeez.com](https://www.tahirhafeez.com), built with **Next.js 16** (App Router) and **Tailwind CSS v4**, backed by a headless **WordPress** CMS at `cms.tahirhafeez.com`. The design comes from the Figma file `tahirhafeez.fig`.

## Run it

```bash
npm install
cp .env.local.example .env.local   # then fill in WORDPRESS_API_URL etc.
npm run dev                         # http://localhost:3000
npm run build && npm start          # production build
```

## Where things live

```
src/
├── app/
│   ├── layout.tsx            ← <head>, Inter font, header + footer on every page
│   ├── globals.css           ← design tokens (colors, radii) + type scale (.t-display, .t-heading, .t-title, .t-lead)
│   ├── page.tsx              ← Home ( / )
│   ├── studio/page.tsx       ← About, services, tech stack ( /studio )
│   ├── industries/page.tsx   ← Industry grid ( /industries )
│   ├── work/page.tsx         ← Case study grid, from WordPress ( /work )
│   ├── work/[slug]/page.tsx  ← Case study detail, from WordPress
│   ├── contact-us/page.tsx   ← Contact ( /contact-us )
│   ├── api/contact           ← forwards the contact form to WordPress
│   └── api/revalidate        ← webhook WordPress calls after edits
├── components/
│   ├── layout/               ← SiteHeader, SiteFooter
│   ├── home/                 ← one file per homepage section, top to bottom
│   ├── contact/              ← ContactSection (used on Home and /contact-us), ContactForm
│   ├── work/WorkCard.tsx
│   └── ui/                   ← Container, Logo, ButtonLink, SectionLabel, SectionIntro, Tag
├── lib/
│   ├── site-config.ts        ← email, WhatsApp, LinkedIn, nav links
│   ├── industries-data.ts    ← industry cards on /industries
│   └── wordpress.ts          ← WordPress REST API client (case studies)
└── types/index.ts
```

## Editing content

- **Static text** (headings, paragraphs, FAQs): edit the strings in the matching file under `src/components/home/` or `src/app/*/page.tsx`.
- **Case studies**: add them in WordPress (`cms.tahirhafeez.com/wp-admin`). They appear on `/work` within an hour, or right away if the revalidate webhook is set up. See `CONNECT.md`.
- **Contact details**: `src/lib/site-config.ts`, or the `NEXT_PUBLIC_*` env vars.
- **Contact form options**: `SERVICE_GROUPS` / `BUDGET_OPTIONS` in `ContactForm.tsx` must match `ALLOWED_SERVICES` / `ALLOWED_BUDGETS` in the WordPress plugin (`wordpress/tahirhafeez-headless/includes/class-contact.php`), or WordPress drops the value.

## Design tokens

| Token | Value | Use |
|---|---|---|
| `brand` | `#0000EE` | buttons, accents, links |
| `ink` | `#292929` | headings, dark section |
| `body` | `#52525B` | body copy |
| `muted` | `#71717A` | captions, placeholders |
| `line` | `#E4E4E7` | borders and grey panels |

Font: Inter (via `next/font`). Icons: `lucide-react`.
