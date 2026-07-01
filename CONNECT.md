# Connect WordPress CMS → Next.js Frontend

Follow these steps in order. Your live CMS is at **https://cms.tahirhafeez.com** and your frontend is on **Vercel**.

---

## Step 1 — Install the headless plugin on WordPress

The `case_study` API is **not active yet** on your CMS (returns 404). Install the plugin:

1. Download or use: `wordpress/tahirhafeez-headless.zip`
2. Go to **https://cms.tahirhafeez.com/wp-admin**
3. **Plugins → Add New → Upload Plugin**
4. Upload `tahirhafeez-headless.zip` → **Install Now → Activate**
5. Go to **Settings → Permalinks** → select **Post name** → **Save Changes**

**Verify API works** — open in browser:
```
https://cms.tahirhafeez.com/wp-json/wp/v2/case_study
```
You should see `[]` (empty array), not a 404 error.

---

## Step 2 — Configure WordPress Headless CMS settings

1. **Settings → Headless CMS**
2. Enable **Headless Mode** ✓
3. **Vercel Revalidate URL:** `https://www.tahirhafeez.com/api/revalidate`
4. **Vercel Revalidate Secret:** pick a random string (e.g. `th_2025_xK9mP2qR7`) — use the same in Vercel (Step 3)
5. **Extra CORS Origins** (optional, for browser requests):
   ```
   https://tahirhafeez.vercel.app
   ```
6. **Save**

---

## Step 3 — Add environment variables in Vercel

1. Vercel → your project **wp-headless** → **Settings → Environment Variables**
2. Add these for **Production** (and Preview if you want):

| Name | Value |
|------|--------|
| `WORDPRESS_API_URL`  | `https://cms.tahirhafeez.com` |
| `REVALIDATE_SECONDS` | `3600` |
| `REVALIDATE_SECRET`  | same secret as WordPress (Step 2) |

3. **Save**
4. **Deployments → Redeploy** (required — env vars only apply after redeploy)

---

## Step 4 — Add case studies in WordPress

1. **Case Studies → Add New**
2. Fill in:
   - **Title** — e.g. "Coaching Business — GHL Funnel"
   - **Platform** — WordPress / GHL / Webflow / Wix
   - **Client Type** — e.g. "Coaching Business"
   - **Problem** — what the client struggled with
   - **Solution** — what you built
   - **Result Metrics** — e.g. Label: `Conversion`, Value: `+40%`
3. **Publish**

Publishing auto-triggers a Vercel cache refresh (if revalidate is configured).

---

## Step 5 — Verify live site

1. Open **https://www.tahirhafeez.com**
2. Scroll to **Case Studies** — your WordPress entries should appear
3. If still showing old/sample data → wait 1 hour OR redeploy Vercel OR visit:
   ```
   POST https://www.tahirhafeez.com/api/revalidate
   Header: x-vercel-revalidate-secret: YOUR_SECRET
   Body: {"path":"/"}
   ```

---

## How it works

```
WordPress (cms.tahirhafeez.com)
  └── Case Studies CPT + REST API
        └── /wp-json/wp/v2/case_study

Next.js (www.tahirhafeez.com on Vercel)
  └── Fetches case studies at build + every hour (ISR)
  └── /api/revalidate ← WordPress pings this on publish
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| API returns 404 | Plugin not installed or permalinks not saved |
| Site shows sample case studies | `WORDPRESS_API_URL` not set in Vercel — redeploy |
| Site shows "coming soon" | Plugin works but no published case studies yet |
| Changes not appearing | Redeploy Vercel or wait for revalidate (3600s) |
| Publish doesn't update site | Check revalidate URL + secret match in WP and Vercel |

---

## Local development

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000 — pulls case studies from live CMS.
