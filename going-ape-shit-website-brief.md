# Going Ape Shit — Website Build Brief

**A guest-info site for Kelly's PhD defense celebration weekend.**
Brno, Czech Republic • September 2026

This document is the single source of truth for building the site. Hand it to Claude Code as the spec. Anything marked **[TBC]** is a placeholder for Kelly to confirm — wire it so it can be changed in one place.

---

## 1. Concept & tone

- **Title:** *Going Ape Shit* — Kelly's PhD Celebration
- **Subtitle:** Brno, Czech Republic • September 2026
- **Tagline option:** *"After years of gorillas, parasites, fieldwork and far too much coffee, it's finally time to defend my PhD — come celebrate in Brno."*
- **Vibe split:** ~70% epic party / 20% destination weekend in Brno / 10% "oh, and there's a defense." Sell the *weekend*, not the viva. The defense is the reason everyone's flying in, but it is not the star.
- **Model:** build it like a mini wedding website, not an academic event page.

## 2. Design system

- **Palette:** forest / dark green + cream (gorilla-and-forest theme). Warm, not corporate.
- **Feel:** elegant but playful. Big photography, generous whitespace, rounded cards.
- **Mobile-first** — most guests will open this on a phone from a WhatsApp link. Test narrow viewports first.
- **Typography:** one characterful display face for headings, one clean readable face for body. (Use self-hosted or Google Fonts loaded statically.)
- **Personality touches:** gorilla/parasite motifs used sparingly as accents, not gimmicks.

## 3. Tech & hosting constraints — READ FIRST

- **Hosting: GitHub Pages (free).** This means the site **must be a fully static build** — no server-side rendering, no API routes, no backend.
- **Recommended stack:** a static-site generator that's painless on GitHub Pages — **Astro** or **Vite + React**. (Next.js is fine *only* with static export `output: 'export'`; if used, configure `basePath`/`assetPrefix` for the repo subpath.)
- **GitHub Pages base path:** a project page serves from `username.github.io/<repo>/`, so configure the build `base` and use relative asset/route paths, or set up a custom domain / user-page to serve from root. Don't hardcode `/`-rooted asset paths.
- **Content in editable files:** all dates, venues, hotel lists, FAQ, schedule, etc. live in **JSON (or Markdown) content files** in the repo, so Kelly can update one file when the date is confirmed — no digging through components.
- **RSVP:** embedded **Google Form** via `<iframe>` (works perfectly on a static site — see §6).
- **Maps:** use Google Maps **embed iframes** or plain "open in Google Maps" links with pins. Avoid anything needing a secret API key committed to a public repo.
- **Single config file** (e.g. `site.config.json`) holding: defense date, countdown target, RSVP form URL, all venue URLs/coords. One edit updates the whole site.

## 4. Photos / assets

Kelly will add a photo folder to the project. Suggested structure under `public/images/`:

```
public/images/
  hero/         (Brno skyline / a strong gorilla-or-fieldwork shot)
  gorillas/     (fieldwork gallery)
  brno/         (city, castle, cathedral, things-to-do)
  tram/         (party tram shots)
  reservoir/    (the house + lake)
  timeline/     (PhD-journey milestone images)
```

Use tasteful placeholders (solid green blocks or stock-free Brno images) anywhere a real photo isn't supplied yet, so the layout never breaks.

## 5. Site structure (nav order = the order guests will ask things)

`Home → Travel → Accommodation → Defense → Party Tram → Friday Party → Reservoir Weekend → Things To Do → FAQ → RSVP`

Plus fun extras woven in: **PhD timeline**, **gorilla gallery**, **PhD bingo**, **silly stats**.

---

## 6. Page-by-page spec

### Home
- Large hero image of Brno (or a gorilla shot) + title + subtitle + tagline.
- **Countdown timer** to the defense date (driven by `site.config.json`).
- Prominent **RSVP** button.
- At-a-glance schedule card:

  | When | What |
  |---|---|
  | Thursday | Guests arrive |
  | Friday | PhD Defense |
  | Friday | Party Tram |
  | Friday night | Celebration Party |
  | Saturday–Sunday | Reservoir Weekend |

- Silly stats strip (placeholder values for Kelly): *Years spent: X · Field seasons: X · Papers published: X · Cups of coffee: ∞*.

### Travel
The most-used page. Lead line: **"Fly into Brno if you can — otherwise Vienna."** Then this comparison:

| Gateway | Fly from the UK | Then to Brno | Rough total | Best for |
|---|---|---|---|---|
| **Brno (BRQ)** *direct* | Ryanair from **Stansted only**, ~2h05, ~5/week (**Tue–Sat**), £15–35 | You're there (8 km / ~15 min to centre) | ~2h flying | Simplest. Anyone leaving **by Saturday** |
| **Vienna (VIE)** | Austrian & BA from Heathrow, Ryanair from Stansted, Wizz/easyJet from Luton/Gatwick; regional UK via Jet2 (Manchester, Edinburgh, Bristol, Glasgow, Newcastle, Leeds). ~daily, ~2h15, from ~£55 | **RegioJet bus from the airport**, hourly, every day, ~2h10, ~€12 | ~4–4.5h | **Best all-rounder.** Regional UK family + anyone needing **Sun/Mon** returns |
| **Bratislava (BTS)** | Ryanair / Buzz / Wizz direct from Stansted, ~2h15, most days, £16–37 | ~9 km to Bratislava centre, then FlixBus/RegioJet ~1.5–2h | ~4.5–5h | Cheap backup if Brno/Vienna fares spike |
| *Prague (PRG)* | Many UK flights daily | City-centre station, then train ~2.5h | ~5h+ | Only for a bargain UK→Prague fare |

**Bottom-of-page note (important — pre-empts the Sun/Mon problem):**
> **Mixing and matching:** You don't have to fly in and out the same way.
> - **Fly into Brno, fly home from Vienna** — cheap direct flight in, then the hourly RegioJet bus to Vienna airport for any day's return.
> - **Stay till Tuesday** — the Brno direct flight runs Tue–Sat, so if you're with us at the reservoir through the weekend, a Tuesday flight home means no transfer at all.
> **When in doubt: Brno in, Vienna out.**

- One booking link for all ground legs: **RegioJet (regiojet.com)** — covers Vienna, Bratislava and the Prague train.
- Include small maps / "open in Google Maps" links for each airport→Brno route.

### Accommodation
Lead steer: *"Stay in the centre to be walkable to the defense, the bars and the tram — unless you're with us at the reservoir."* Show on an embedded map, grouped:

**Comfortable — for parents & older relatives (central):**
- **Hotel Grandezza** — palace-style on Zelný trh square, fluent English staff, 5 min from the station. grandezzahotel.cz
- **Grand Palace Brno** — elegant, edge of old town, spa + lobby piano bar. grandpalace.cz
- **Grandhotel Brno** — classic, directly opposite the train/bus station (handy for the Vienna bus crowd). grandhotelbrno.cz

**Good value — central:**
- **Hotel Avion** — solid mid-range, dead centre on Česká. avion-hotel.cz
- **Internesto Apartments** — apartment-style with kitchens, good for families sharing. internesto.com

**At the reservoir:**
- **Maximus Resort** — on the Brno reservoir; spa, pools, lakeside sauna. The natural overflow for anyone who can't fit in the rented house but wants the lakeside weekend. maximus-resort.cz

### Defense
Many guests have never seen a PhD defense — explain it.

- **Venue:** Department of Anthropology (Ústav antropologie), Faculty of Science, Masaryk University — Budova 2, **Kotlářská 2, 602 00 Brno-střed**, next to the Botanical Garden. (Map pin: ~49.2051, 16.5974.) Embed a Google Map.
- **Explainer section — "What happens at a Czech PhD defense?":** it's public; guests are welcome; how long it lasts; dress code (smart casual); when photos happen; when celebrations begin. **[Kelly to confirm details.]**
- **Schedule (placeholders — [TBC]):**

  | Time | |
  |---|---|
  | 10:00 | Arrival |
  | 10:30 | Defense begins |
  | 12:00 | Questions |
  | 13:00 | Decision |
  | 13:30 | Photos |
  | 14:00 | Drinks → board the tram |

### Party Tram
Probably the coolest page — make it visual.
- Heading: *"The Brno Celebration Tram (Šalina)"* — after the defense we board a private historic party tram and celebrate while rolling through Brno to the party venue.
- Include: meeting point, departure time, route map, drinks/snacks aboard, lots of photos. **[Details TBC.]**

### Friday Party
After the tram.
- Venue, map, dress code (*"whatever survives the tram"*), food, drinks, timings. **[Venue TBC.]**
- House rule, displayed prominently: *"The only rule is that nobody is allowed to ask about reviewer comments."*

### Reservoir Weekend
- The rented house: **chataprygl.cz** — by the reservoir, with pool, sauna, terraces, outdoor kitchen, grills, sports facilities; sleeps ~8–9 plus extra beds.
- Who's staying there / arrival Saturday / departure Sunday. **[Kelly to assign.]**
- **Activities:** boat trips, swimming, paddleboarding, lakeside walks, cycling routes, Veveří Castle, easy hops back into central Brno.
- Note Maximus Resort (above) as nearby overflow accommodation.

### Things To Do in Brno  +  Kelly's Local Guide
This page does double duty: the classic sights *and* Kelly's personal picks for guests who don't know the city. Build as sectioned cards with photos; give **Kelly's Picks** visual priority (lead the page with them). Almost everything is a ~10-min walk from the main square.

**⭐ Kelly's Picks** (lead with these — they're the personal heart of the page; keep the asides, they're the charm):
- **Bistro Bastardo** — Matthijs' favourite Mexican. On nám. Svobody. *bistrobastardo.com*
- **Klárabára Winecafé** — Kelly's favourite wine bar; lovely Moravian wines, owners pick for you. (Closed Sun.) *kbwinecafe.cz*
- **La Famiglia** — Mum & Dad's favourite Italian. *lafamigliabrno.cz*
- **William Thomas Artisan Bakery** — best croissant in Brno (go in the morning before they sell out). *wtbakery.cz*
- **Ještě jednu** — best ice cream. *Yes, Niall, this one's for you.* Artisan gelato, seasonal flavours, gloriously erratic opening hours. *jestejednu.cz*
- **The Bar That Doesn't Exist** — best cocktails. *barkteryneexistuje.cz*
- **Queen's Pub** — for a spot of darts (and bait to lure Brit & Phil out). Live music, Guinness. *queenspubbrno.cz*
- **Pivovarský dům Poupě** — your brother's favourite, for the tabletop curling. Central brewpub on Dominikánská with its own beers. (Closed Sun.)

**Must-see:** Špilberk Castle · Cathedral of SS Peter & Paul · Villa Tugendhat · Underground Brno · the Ossuary · the 10-Z nuclear bunker.

**Nature:** the Brno reservoir · Veveří Castle · Holedná forest.

**More good spots** (secondary to Kelly's Picks — for guests who want extra options):

*☕ Coffee:*
- *Monogram Espresso Bar* — the city's flagship specialty bar, by the station. (Closed Sun.)
- *But First Coffee* — cosy, world-map magnet wall, opens 7am. (Weekdays only.)
- *Pikolo Espresso Bar* — tiny stylish gem, superb oat-milk coffee. Seats ~6.
- *KIMONO coffee* — corner spot, one of Brno's best terraces, lovely desserts.

*🍽️ Eat:*
- *Vittorio* — polished Mediterranean/Italian; the spot for a proper nice dinner. (Closed Sun.)
- *Lokál U Caipla* — classic Czech done well, tank Pilsner, great value. Reserve.
- *Pivnice U Čápa* — hearty Czech pub near Veveří; svíčková, pork knuckle. Good for family.
- *Nok Nok* — modern, varied, English menu; easy middle-ground for a mixed group.
- *Stopkova Plzeňská Pivnice* — iconic central beer hall; roast duck, Pilsner. (Touristy but reliable.)

*🍸 Drink:*
- *Super Panda Circus* — immersive speakeasy, no menu, ring the bell. Reserve.
- *Satin Bar & Café* — intimate, bartender's-choice. (Thu–Sat.)
- *Whiskáč na Jakubáku* — whisky bar with Brno-themed cocktails (same passage as Queen's Pub).

*All real, currently-open, well-rated spots. Kelly can trim or add more anytime.*

### FAQ
Saves dozens of WhatsApp messages:
- *Do I need to attend the defense?* — No.
- *Can I come only to the party?* — Absolutely.
- *What should I wear?* — Smart casual for the defense; whatever survives the tram for the party.
- *Will everything be in English?* — Yes.
- *Can children come?* — [Kelly's choice].
- *Can partners come?* — [Kelly's choice].
- *Gifts?* — Your presence is enough — honestly, no gifts needed. But if you'd like to mark the occasion, I'd be touched if you donated to **Persefona**, a Brno charity close to my heart that supports people affected by domestic and sexual violence. **[Insert donation link]** *(Either Persefona's own donation page via persefona.cz / Darujme.cz, or a single collection page Kelly sets up — TBD, see §8 note.)*
- *How do I get from the airport?* — link back to Travel.

### RSVP
Embedded Google Form (`<iframe>`). Kelly builds the form in Google Forms; paste its embed URL into `site.config.json`. Finalised questions:
1. Full name *(required)*
2. Email *(required; also enable "Collect email addresses")*
3. Mobile incl. country code *(required)*
4. Can you make it? — Yes / Can't make it / Not sure *(required; "Can't make it" branches to the final message box)*
5. Which bits will you join? — Thursday drinks / Friday defense / party tram / Friday party / reservoir weekend *(checkboxes)*
6. Arrival day — Thursday / Friday / Other
7. Departure day — Saturday / Sunday / Monday / Tuesday / Other
8. Travel route — Direct to Brno / via Vienna / via Bratislava / via Prague / Driving / Not sure
9. Accommodation — Booked / Want a recommendation / Hoping for the reservoir house / Not sorted
10. Dietary requirements / allergies *(paragraph)*
11. Bringing anyone? — Just me / Partner / Children (+ how many & ages)
12. A song for the tram/party *(optional)*
13. Questions or messages *(optional)*

Link form responses to a Google Sheet — that becomes the live guest list. Donations are intentionally **not** in this form (handled via the Persefona link in the FAQ).

---

## 7. Fun extras
- **Kelly's PhD Journey** — interactive timeline spanning **September 2021 → September 2026** (start → defense). Milestone content (Uganda fieldwork, focus groups, sequencing, first paper, submission, etc.) to be filled in with Claude Code during the build.
- **Gorilla Gallery** — fieldwork photos.

---

## 8. Build checklist for Claude Code
1. Scaffold a **static** site (Astro or Vite+React) configured for **GitHub Pages** (correct `base`).
2. Create `site.config.json` holding: defense date (**[TBC: Fri 18 or 25 Sept 2026]**), countdown target, RSVP form URL, venue URLs + map coords.
3. Put page content in editable JSON/Markdown content files.
4. Build all 10 pages + nav in the order above; mobile-first.
5. Wire countdown, embedded Google Form, Google Map embeds, photo galleries.
6. Apply the forest-green + cream theme.
7. Add placeholder images; point Kelly's supplied folder into `public/images/`.
8. Add a GitHub Actions workflow to build & deploy to GitHub Pages on push.

**Open items for Kelly to fill later:** exact defense date, defense-day schedule, tram meeting point/time, Friday party venue, reservoir house guest list, silly-stat numbers, PhD timeline milestones (Sept 2021–Sept 2026), photos, **Persefona donation link** (direct page vs. a collection pot — decision pending).
