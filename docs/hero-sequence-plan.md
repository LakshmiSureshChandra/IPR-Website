# Hero scroll sequence — generation plan

Drawing → tower → site reveal → into a residence → interiors.
7 video segments built from **8 shared keyframe images**.

---

## The rule everything depends on

**Segment N's end frame IS segment N+1's start frame — the same image file.**

Generate 8 keyframes, then generate 7 videos, each with a start frame and an end
frame taken from that chain:

```
K0 ──S1──▶ K1 ──S2──▶ K2 ──S3──▶ K3 ──S4──▶ K4 ──S5──▶ K5 ──S6──▶ K6 ──S7──▶ K7
```

Independent clips will not join. The hero is scrubbed, so the viewer can stop on
any frame including the joins; a drift in building geometry that a playing video
would hide becomes a hard glitch you can park on.

## Generate the keyframes in this order (not 0→7)

The finished building is the design bible. Everything else is derived from it, so
make it first and work **outward**:

1. **K4** (finished tower, tight) — establishes facade, proportions, materials
2. **K5** (wide site) — feed K4 as reference so the tower matches
3. **K3 → K2 → K1** — work *backwards*, stripping cladding, then structure, then to wireframe
4. **K0** — the drawing
5. **K6 → K7** — interiors, matched to the balcony seen in K4/K5

Building the tower forward from a blueprint means the design drifts and the final
render is whatever the model felt like. Backwards, every earlier frame is a
subtraction from a fixed target.

---

## STYLE LOCK — paste into every image prompt

> Photoreal architectural visualisation, Unreal Engine 5 / V-Ray quality, 35mm
> lens, no distortion. **Subject:** a 14-storey residential tower — rectangular
> plan with a stepped crown, warm off-white board-formed concrete frame,
> floor-to-ceiling glazing in champagne-bronze mullions, continuous cantilevered
> balcony slabs with slim white fascias, two-storey podium clad in honed
> travertine. **Site:** lakeside plot in Hyderabad — grey granite boulder
> outcrops, mature palms and rain trees, an infinity pool deck facing the water,
> a modern city skyline on the far shore. **Light:** clear late-morning sun, soft
> atmospheric haze, pale blue sky, no harsh shadows. **Palette:** warm white,
> pale concrete, champagne bronze, clear glass, muted green, pale blue.
> **Composition:** tower right of centre, left third of frame calm and
> uncluttered. 16:9.

The granite boulders are deliberate — they read as Hyderabad rather than generic
Dubai, and they give the site a recognisable signature across every frame.

**Left third stays calm in every frame.** The hero copy (masthead, beat text,
CTAs) sits there. Anything busy on the left will fight the type.

## NEGATIVE PROMPT — universal

> text, letters, numbers, watermark, logo, signage, captions, UI overlay, people,
> cars, cranes, birds, fisheye, warped geometry, melting architecture, duplicated
> or extra towers, night, sunset, rain, fog, heavy shadows, oversaturated, HDR
> halos, tilt-shift blur, lens flare, motion blur, vignette

## Output settings

- **16:9, 2560×1440** (gives headroom; frames extract at 1600px wide)
- Same seed across all keyframes wherever the tool allows
- Consistent sun angle and time of day in every frame

---

# PART 1 — The 8 keyframe images

### K0 — The Drawing
*Opening frame. Top-down, matches the reference photo of a plan on a desk.*

> Top-down flat-lay of a large architectural floor plan printed on white paper,
> lying on a pale oak desk. Fine grey line work, dimension strings, room labels,
> section markers, a title block in the lower-right corner. Soft daylight from a
> window at the left, faint paper texture, a gentle shadow along the sheet edge.
> A brass scale rule and a mechanical pencil rest at the right edge of the sheet.
> Clean, minimal, editorial. Warm white and pale grey palette. 16:9.

### K1 — Pure linework
*The paper, desk and props are gone. Only the drawing, filling the frame on warm white. This is the bridge frame — the point where paper stops being paper.*

> Top-down architectural floor-plan line work filling the entire frame, drawn in
> fine warm-grey and champagne-bronze lines on a flat warm-white background. No
> paper edge, no desk, no shadow, no props — only the drawing itself. Crisp
> vector-like precision, dimension strings and grid references visible. 16:9.

### K2 — Wireframe in space
*The plan has tilted into perspective and extruded upward.*

> A 14-storey residential tower rendered as a glowing white wireframe standing in
> three-quarter perspective — floor plates, structural grid, core and column
> lines only, no surfaces. Thin luminous linework against a soft warm-white and
> pale-blue haze. The site is faintly indicated below in the same line style:
> plot boundary, pool outline, path edges. Tower right of centre, calm empty
> space at the left. [STYLE LOCK] 16:9.

### K3 — Structure
*Concrete, topped out. Still raw.*

> The same 14-storey tower as a completed structural frame — board-formed
> off-white concrete floor slabs, columns and two central cores, exposed rebar
> starters at the roof level, no cladding and no glazing, open to the sky between
> slabs. Ground still bare earth and hardstanding. Identical camera position,
> lens and sun angle to the wireframe frame. [STYLE LOCK] 16:9.

### K4 — Finished tower ★ *generate this one first*
*The design bible. Every other frame derives from it.*

> The completed 14-storey residential tower in three-quarter view — full
> floor-to-ceiling glazing in champagne-bronze mullions, continuous white
> cantilevered balcony slabs, board-formed concrete end walls, honed travertine
> podium, planted rooftop pergola. Glass reflecting pale sky and passing cloud.
> Landscaping established at the base: palms, clipped hedging, granite boulders.
> Crisp, luxurious, immaculate. [STYLE LOCK] 16:9.

### K5 — The wide reveal
*Camera has pulled back and risen. The payoff frame.*

> High wide aerial three-quarter view of the completed tower in its full setting —
> infinity pool deck and sun terraces facing the lake, landscaped gardens with
> palms, rain trees and granite boulder outcrops, arrival driveway and porte-
> cochère, tennis court, walking paths. Calm lake water on the right with a modern
> city skyline on the far shore. Tower right of centre; open water and haze fill
> the left third. Serene, expansive, high-end resort residential.
> [STYLE LOCK] 16:9.

### K6 — At the glass
*Rushed in to one residence. The last exterior frame.*

> Close view of a single upper-floor balcony on the tower — champagne-bronze
> framed sliding glass, slim white balcony slab and glass balustrade, a teak
> lounge chair and planter on the terrace. Through the glass, a warm bright
> living room interior is visible but not yet in focus. Bright daylight, lake
> reflected in the glass. Camera at balcony height, straight on. [STYLE LOCK] 16:9.

### K7 — Interior
*Through the glass. The landing frame.*

> Bright luxury apartment living room seen from just inside the balcony glazing —
> floor-to-ceiling windows with a lake and skyline view behind, warm oak joinery,
> fluted wood feature wall, stone coffee table, low linen sofas in warm greige,
> brass accent lighting, large-format marble flooring, styled and immaculate.
> Soft natural daylight flooding in from the right. Warm white, oak, brass and
> stone palette. 16:9.

**Optional K8 — second interior** (if you want "different interiors" plural):

> Master bedroom in the same apartment — upholstered headboard wall in warm
> greige linen, fluted oak panelling, floor-to-ceiling window with the same lake
> view, brass pendant lights, marble side tables, soft morning light. Same
> material palette and camera height as the living room. 16:9.

---

# PART 2 — The 7 video segments

Every segment: **one continuous take, constant linear speed, no cuts, no easing,
no fades.** The scroll supplies the timing — anything the clip eases, the user's
scroll eases a second time.

| # | Move | Start → End | Length |
|---|------|-------------|--------|
| S1 | Push into the drawing | K0 → K1 | 3s |
| S2 | Lift into space | K1 → K2 | 3s |
| S3 | Structure rises | K2 → K3 | 4s |
| S4 | The skin | K3 → K4 | 4s |
| S5 | The reveal | K4 → K5 | 4s |
| S6 | Into the residence | K5 → K6 | 3s |
| S7 | Through the glass | K6 → K7 | 4s |

**Total ≈ 25s.**

### S1 — Push into the drawing (K0 → K1, 3s)
> Locked top-down camera pushing straight down into an architectural floor plan
> on a desk at a slow constant speed. The desk, props and paper edges drift out
> of frame as the drawing fills the view. The paper texture and its shadow fade
> away until only clean line work remains on flat warm white. No rotation, no
> cuts, even speed throughout.

### S2 — Lift into space (K1 → K2, 3s)
> The flat top-down floor-plan line work tilts smoothly from plan view into
> three-quarter perspective as the camera arcs down toward the horizon. As it
> tilts, the lines extrude upward, multiplying into stacked floor plates and
> structural grid until a full 14-storey wireframe tower stands in space. One
> continuous camera move, constant speed, glowing white linework throughout.

*The riskiest segment. If it fails, see Fallbacks below.*

### S3 — Structure rises (K2 → K3, 4s)
> Slow continuous orbit around a glowing wireframe tower as it materialises into
> a real concrete structure from the ground upward — floor slabs, columns and
> cores taking on solid board-formed off-white concrete surfaces storey by
> storey, exposed rebar appearing at the roof. Wireframe lines fade out as solid
> geometry fills in. Constant orbit speed, no cuts.

### S4 — The skin (K3 → K4, 4s)
> Continuous slow orbit around a bare concrete tower frame as the facade
> assembles from the base upward — glass curtain wall panels, champagne-bronze
> mullions, white balcony fascias and travertine podium cladding appearing floor
> by floor until the building is complete. Landscaping fills in at the base in
> the final moment. Constant orbit speed, single unbroken take.

### S5 — The reveal (K4 → K5, 4s)
> Smooth continuous crane-up and pull-back from a finished residential tower,
> the camera rising and retreating at a constant rate to reveal the full site —
> pool deck, gardens, driveway, granite outcrops, lake and distant city skyline
> coming into frame from the edges. The tower stays right of centre throughout.
> No speed ramp, no cut, one unbroken aerial move.

### S6 — Into the residence (K5 → K6, 3s)
> Fast smooth push-in from a wide aerial of a residential tower toward one
> specific upper-floor balcony, the frame closing steadily until the balcony
> glazing, balustrade and terrace furniture fill the view. Constant acceleration-
> free speed, dead straight approach, no roll, no cuts.

### S7 — Through the glass (K6 → K7, 4s)
> Continuous forward push through an open balcony sliding door into a bright
> luxury apartment living room, the camera passing the glass line and settling
> into the room as the interior resolves — oak joinery, linen sofas, stone table,
> lake view behind. Smooth constant speed, no cut at the glass, single take.

**Optional S8 — Interiors (K7 → K8, 4s):** slow lateral dolly from the living
room through to the master bedroom, one unbroken move.

---

# PART 3 — Production

## Tools

| Tool | Notes |
|---|---|
| **Kling 2.x** | Best start+end frame control. Creativity **low (0.2–0.3)** — high creativity re-invents the building mid-clip. |
| **Runway Gen-4** | Start + end keyframe, camera motion set explicitly (`orbit right, slow` / `crane up, slow`). Motion brush off. |
| **Veo 3** | First+last frame supported. Add "one continuous camera move, constant speed, no audio". Strongest at holding geometry. |
| **Luma / Hailuo** | Usable for S1 and S7 (simple pushes); weaker on the orbits. |

## Fallbacks if a segment fights you

- **S2 fails** (the plan→3D lift): drop the tilt. Keep the camera top-down and
  extrude straight up into an axonometric wireframe, then let S3 handle the
  rotation into perspective. Less dramatic, far more reliable.
- **Any orbit drifts:** shorten it. Two 2s clips with an extra keyframe between
  beats a wandering 4s one.
- **Building identity slips:** regenerate the *keyframe*, not the video. The
  clips are only as consistent as the frames bracketing them.

## Joining the clips

Generators rarely land the last frame exactly on the target, so trim and
crossfade a few frames at each join — invisible under a scrub:

```bash
# Concatenate with a 4-frame crossfade at each join
ffmpeg -i s1.mp4 -i s2.mp4 -filter_complex \
  "[0][1]xfade=transition=fade:duration=0.17:offset=2.83" -pix_fmt yuv420p join12.mp4
```

Or, if the joins land clean, a straight concat:

```bash
printf "file 's1.mp4'\nfile 's2.mp4'\nfile 's3.mp4'\nfile 's4.mp4'\nfile 's5.mp4'\nfile 's6.mp4'\nfile 's7.mp4'\n" > list.txt
ffmpeg -f concat -safe 0 -i list.txt -c copy media/hero/hero.mp4
```

## Wiring it into the site

```bash
./scripts/hero-frames.sh media/hero/hero.mp4 160 1600
```

Then in `src/lib/media.ts` set `HERO_FRAME_COUNT = 180`.

**Scroll budget.** ~100vh of scroll per 4–5s of footage feels natural. At ~25s
that means the hero section wants to grow from its current `h-[240vh]` to about
**`h-[560vh]`** in `src/components/Hero.tsx`. 180 frames at 1600px lands around
7–9 MB.

**Beat windows.** `BEATS` in `Hero.tsx` currently has 3 entries mapped to the old
3-act footage. With 7 segments the copy should re-cut to match — roughly:

| Beat | Scroll window | Segment |
|---|---|---|
| 01 The Drawing | 0.00 – 0.24 | S1–S2 |
| 02 The Structure | 0.24 – 0.48 | S3–S4 |
| 03 The Address | 0.48 – 0.72 | S5 |
| 04 The Interior | 0.72 – 1.00 | S6–S7 |

Every `at` array must still start at 0 and end at 1 — see the comment in
`Hero.tsx` for why.

---

# AS SHIPPED (2026-09-08)

Final chain is **K1 → K2 → K3 → K4 → K6 → K7** — K0 (desk), K1.5 and K5 (wide
aerial) were dropped. Five clips, 4.06s each, joined with 0.25s crossfades:

| Clip | Move |
|---|---|
| s1 | flat plan → wireframe tower |
| s2 | wireframe → concrete frame |
| s3 | frame → finished tower |
| s4 | tower → balcony |
| s5 | balcony → interior |

Sources live in `media/hero/` (not `public/` — the site scrubs frames, the
videos never ship). Rebuild:

```bash
ffmpeg -y -i media/hero/s1.mp4 -i media/hero/s2.mp4 -i media/hero/s3.mp4 -i media/hero/s4.mp4 -i media/hero/s5.mp4 \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.25:offset=3.814[a];[a][2:v]xfade=transition=fade:duration=0.25:offset=7.628[b];[b][3:v]xfade=transition=fade:duration=0.25:offset=11.442[c];[c][4:v]xfade=transition=fade:duration=0.25:offset=15.256,scale=1920:1080,format=yuv420p" \
  -an -c:v libx264 -preset slow -crf 18 -r 24 media/hero/hero.mp4
./scripts/hero-frames.sh media/hero/hero.mp4 160 1600
```

Homepage stills in `public/images/story/` are frames pulled from the same
master (`ffmpeg -ss <t> -i media/hero/hero.mp4 -frames:v 1 ...`).
