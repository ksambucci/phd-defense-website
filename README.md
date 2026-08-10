# Going Ape Shit 🦍

Guest-info site for Kelly's PhD defense celebration weekend in Brno, September 2026.
Built with [Astro](https://astro.build) as a fully static site for **GitHub Pages**.

---

## Edit the site without touching code

Almost everything lives in plain data files:

| What | File |
|---|---|
| **Dates, RSVP link, donation link, stats, hosting path** | `site.config.json` |
| Travel options | `src/data/travel.json` |
| Hotels | `src/data/accommodation.json` |
| Defense info & schedule | `src/data/defense.json` |
| Party tram | `src/data/tram.json` |
| Friday party | `src/data/party.json` |
| Reservoir weekend | `src/data/reservoir.json` |
| Things to do / Kelly's picks | `src/data/thingstodo.json` |
| FAQ | `src/data/faq.json` |
| PhD timeline | `src/data/timeline.json` |
| Bingo squares | `src/data/bingo.json` |
| Home schedule strip | `src/data/schedule.json` |

**Photos:** drop them into `public/images/…` — see `public/images/README.md`.
Missing photos show a tasteful green placeholder, so the layout never breaks.

### The things still marked TBC
Search the project for `TBC` / `[TBC]`. The big ones, all in `site.config.json` unless noted:
- **Defense date** (`event.defenseDate` + `event.countdownTarget` — Fri 18 or 25 Sept 2026)
- **RSVP form** (`rsvp.formEmbedUrl` — see below)
- **Donation link** (`donation.url` — Persefona)
- **Silly stats** (`stats`)
- Defense-day schedule (`src/data/defense.json`)
- Tram meeting point/time (`src/data/tram.json`)
- Friday party venue (`src/data/party.json`)
- Reservoir guest list (`src/data/reservoir.json`)
- PhD timeline milestones (`src/data/timeline.json`)

### Wiring up the RSVP form
1. Build the form in Google Forms (questions are listed on the RSVP page).
2. In Google Forms: **Send → `< >` (Embed HTML)** and copy the `src="…"` URL.
3. Paste it into `site.config.json` → `rsvp.formEmbedUrl`. The form appears automatically.
4. Link responses to a Google Sheet — that's your live guest list.

### The Travel Map (`/travels`)
Trips live in `src/data/travels.json`. Distances are auto-computed (straight-line,
round trips from Brno) — the headline number is an estimate until you add the real one.

**To get the true grand total from your Google Timeline:**
1. **On your phone** (Timeline now lives on-device): Google Maps → profile picture →
   **Your Timeline** → **⋯ / Settings** → **Export Timeline data**. You'll get a
   `Timeline.json` (or `location-history.json`).
   *Older data?* Use [Google Takeout](https://takeout.google.com) → **Location History
   (Timeline)** → export as JSON.
2. Hand me that file and I'll total up every trip (incl. conferences & local hops) and
   either set `realTotalKm` in `travels.json` or build a richer map from it.
3. Don't commit the raw export to the public repo — it's sensitive location data. Share
   it privately; only the computed totals go on the site.

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Other commands:
```bash
npm run build    # static build into dist/
npm run preview  # preview the production build
```

---

## Deploy to GitHub Pages

1. Create a GitHub repo and push this folder to the `main` branch.
2. **Set the base path:** in `site.config.json` → `hosting.base`, put `"/your-repo-name"`
   and set `hosting.siteUrl` to `"https://your-username.github.io"`.
   (Using a custom domain or a `username.github.io` user-repo? Set `base` to `"/"`.)
3. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds and
   deploys automatically. Your site lands at `https://your-username.github.io/your-repo-name/`.

---

## Tech notes
- Fully static — no backend, no API keys committed. Maps use keyless Google embeds.
- All internal links go through `src/lib/url.ts` so the base path works from a subpath or root.
- Theme (forest green + cream) and fonts are set in `src/styles/global.css`.
