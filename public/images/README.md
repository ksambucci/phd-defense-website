# Photos go here

Drop your images into these folders. The site shows a tasteful green placeholder
anywhere a real photo isn't supplied yet, so nothing breaks if a folder is empty.

```
hero/        Brno skyline or a strong gorilla/fieldwork shot  → hero/brno.jpg
gorillas/    Fieldwork gallery                                → gorillas/1.jpg, 2.jpg, …
brno/        City, castle, cathedral, things-to-do
tram/        Party tram shots                                 → tram/1.jpg, 2.jpg, 3.jpg
reservoir/   The house + lake                                 → reservoir/house.jpg
timeline/    PhD-journey milestone images
```

**Tips**
- The home hero looks for `hero/brno.jpg`.
- The gallery looks for `gorillas/1.jpg` … `gorillas/9.jpg` (edit `src/pages/gallery.astro` to add more).
- Keep files reasonably sized (long edge ~2000px, JPG/WebP) — guests open this on phones.
- Filenames are case-sensitive on GitHub Pages. Stick to lowercase.
