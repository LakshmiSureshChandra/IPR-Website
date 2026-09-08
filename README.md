# IPR Website

Marketing and lead-generation site for **IPR Architects**, a design-build studio in
Hyderabad — architecture, interiors, construction and landscaping.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · Motion · deployed on Vercel.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — all routes prerender static
```

Analytics IDs are optional; copy `.env.local.example` to `.env.local` to enable GA4,
the Meta Pixel and Google Ads conversions. Without them the `Analytics` component
renders nothing.

## The hero

The homepage opens on a still of the finished tower, then rewinds and rebuilds it as
you scroll: drawing → wireframe → concrete frame → finished tower → balcony → interior.

It is **not** a `<video>`. Setting `currentTime` on a video element to scrub stutters
badly on iOS Safari, so the hero paints a pre-decoded frame sequence onto a `<canvas>`
instead — 320 webp frames in `public/images/hero/`, loaded coarse-to-fine so an early
scroll already has even coverage across the whole sequence.

Source clips live in `media/hero/` and never ship to the browser. To change the film,
edit those and regenerate:

```bash
# rejoin the five clips into one master (0.25s crossfades)
ffmpeg -y -i media/hero/s1.mp4 -i media/hero/s2.mp4 -i media/hero/s3.mp4 \
       -i media/hero/s4.mp4 -i media/hero/s5.mp4 \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.25:offset=3.814[a];\
[a][2:v]xfade=transition=fade:duration=0.25:offset=7.628[b];\
[b][3:v]xfade=transition=fade:duration=0.25:offset=11.442[c];\
[c][4:v]xfade=transition=fade:duration=0.25:offset=15.256,scale=1920:1080,format=yuv420p" \
  -an -c:v libx264 -preset slow -crf 18 -r 24 media/hero/hero.mp4

# then re-extract the frames the site actually scrubs
./scripts/hero-frames.sh media/hero/hero.mp4 320 1440
```

Set `HERO_FRAME_COUNT` in `src/lib/media.ts` to whatever the script prints. That is the
only code change a new hero film needs. Fewer frames or a smaller width trades
smoothness for weight — `240 1280` lands around 9 MB instead of 16 MB.

Full shot-by-shot notes, including the keyframe chain the clips were generated from,
are in [`docs/hero-sequence-plan.md`](docs/hero-sequence-plan.md).

## Layout

```
src/app/           routes — home, 4 service pages, projects, about, contact
src/components/    Hero (canvas scrub), Navbar, Footer, LeadForm, ServiceLayout
src/components/ui/ button, card, badge, input, sheet, accordion, navigation-menu
src/lib/           media.ts (frame config), projects.ts, whatsapp.ts
public/images/     hero/ (scrub frames) · story/ (film stills) · renders/ · logo/
media/hero/        source clips — masters only, not served
```

Every CTA opens WhatsApp with a source-tagged message; see `src/lib/whatsapp.ts`.
