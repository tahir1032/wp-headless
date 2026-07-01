# tahirhafeez.com — Next.js Frontend

Portfolio site for [tahirhafeez.com](https://www.tahirhafeez.com), built with **Next.js** and powered by headless WordPress at `cms.tahirhafeez.com`.

## Where you work on frontend code

**This repo (`wp-headless`) = all Next.js frontend work.**

```
wp-headless/                 ← GitHub repo (this project)
├── src/
│   ├── app/                 ← pages & API routes
│   ├── components/          ← UI sections (Hero, Services, etc.)
│   └── lib/                 ← WordPress API + static data
├── public/                  ← images, favicon
├── package.json
└── next.config.ts
```

**WordPress CMS** is separate — managed at `cms.tahirhafeez.com` (plugin uploaded manually, not via this repo).

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16 + TypeScript + Tailwind |
| Hosting | Vercel → www.tahirhafeez.com |
| CMS | WordPress headless → cms.tahirhafeez.com |
| Content | Case studies via REST API |

## Local development

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment variables (Vercel)

| Variable | Example |
|----------|---------|
| `WORDPRESS_API_URL` | `https://cms.tahirhafeez.com` |
| `REVALIDATE_SECONDS` | `3600` |
| `REVALIDATE_SECRET` | your-secret |
| `NEXT_PUBLIC_BOOKING_URL` | GHL calendar link |
| `NEXT_PUBLIC_CONTACT_EMAIL` | hello@tahirhafeez.com |

## Deploy flow

```
Edit code locally → commit → push to GitHub (tahir1032/wp-headless) → Vercel auto-deploys
```

**Vercel settings:**
- Repository: `tahir1032/wp-headless`
- Root Directory: **leave empty** (Next.js is at repo root)
- Branch: `main`

## WordPress CMS setup

See [CONNECT.md](./CONNECT.md) for connecting case studies from WordPress.

WordPress plugin files are kept locally in `wordpress/` (gitignored) — upload to cms via Hostinger when updated.
