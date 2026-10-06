# IPR Website

Website for IPR Architects, a design-build firm in Hyderabad. They do architecture,
interiors, construction and landscaping.

Built with Next.js 16, React 19, Tailwind 4 and Motion. Hosted on Vercel.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, every page is prerendered
```

Analytics IDs are optional. Copy `.env.local.example` to `.env.local` to turn on GA4,
the Meta Pixel and Google Ads conversions. Without them the `Analytics` component
renders nothing.

## The hero

The home page opens on a still of the finished building. As you scroll it jumps back to
the drawing and builds forward again: drawing, wireframe, concrete frame, finished
building, balcony, interior.

It is not a `<video>`. Scrubbing a video's `currentTime` stutters on iOS Safari, so the
page draws a sequence of pre-extracted frames onto a `<canvas>` instead. There are 320
webp frames in `public/images/hero/`, plus a smaller set in `public/images/hero-sm/`
that phones load.

The source clips live in `media/hero/` and are not served. To change the film, replace
them and regenerate the frames:

```bash
# join the five clips into one file, with a 0.25s crossfade between each
ffmpeg -y -i media/hero/s1.mp4 -i media/hero/s2.mp4 -i media/hero/s3.mp4 \
       -i media/hero/s4.mp4 -i media/hero/s5.mp4 \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.25:offset=3.814[a];\
[a][2:v]xfade=transition=fade:duration=0.25:offset=7.628[b];\
[b][3:v]xfade=transition=fade:duration=0.25:offset=11.442[c];\
[c][4:v]xfade=transition=fade:duration=0.25:offset=15.256,scale=1920:1080,format=yuv420p" \
  -an -c:v libx264 -preset slow -crf 18 -r 24 media/hero/hero.mp4

# extract the frames the site scrubs: full size for desktop, smaller for phones
./scripts/hero-frames.sh media/hero/hero.mp4 320 1440
./scripts/hero-frames.sh media/hero/hero.mp4 320 1024 public/images/hero-sm
```

Set `HERO_FRAME_COUNT` in `src/lib/media.ts` to the number the script prints. That is the
only code change a new film needs. Fewer frames or a smaller width gives a lighter page
but a less smooth scrub.

## Project layout

```
src/app/           pages: home, projects, about, contact
src/components/    Hero, SpatialShowcase, Navbar, Footer, LeadForm
src/components/ui/ button, card, badge, input, sheet, accordion
src/lib/           media.ts, projects.ts, showcase.ts, whatsapp.ts
public/images/     hero and hero-sm (scroll frames), portfolio, logo
media/hero/        source clips, not served
```

Every call to action opens WhatsApp with a message already filled in. See
`src/lib/whatsapp.ts`. The slides in the home page showcase are in `src/lib/showcase.ts`
and the projects page reads `src/lib/projects.ts`.
