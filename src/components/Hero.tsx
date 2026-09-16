"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_FRAME_COUNT, HERO_SMALL_BREAKPOINT, heroFrame } from "@/lib/media";
import { getWhatsAppLink } from "@/lib/whatsapp";

/* The footage is five 4s clips joined with short crossfades, so each beat owns
   ~0.2 of the scrub: plan → wireframe → concrete frame → finished tower →
   balcony → interior. `at` is scroll stops, `fade` the opacity at each.

   Two rules, both learned the hard way:
   - every stop stays inside [0,1], or framer-motion's WAAPI path throws on the
     offsets;
   - every range starts at 0 and ends at 1. A range that stops short does not
     hold its last value past the end — it reads back wrong, which showed up as
     copy fading out and then reappearing at the bottom of the scrub. */
const BEATS = [
  // Beat 0 sits over the finished-tower still at rest; the film rewinds to the
  // drawing as soon as the scroll starts.
  { at: [0, 0.04, 0.09, 1], fade: [1, 1, 0, 0], num: "—", title: "Drawing to door", body: "One lakeside residence, drawn, engineered, built and furnished by a single studio. Scroll to watch it happen." },
  { at: [0, 0.09, 0.13, 0.15, 0.2, 1], fade: [0, 0, 1, 1, 0, 0], num: "01", title: "The Drawing", body: "Every home begins as a line on paper. Ours begin with a walk of the plot." },
  { at: [0, 0.2, 0.25, 0.34, 0.39, 1], fade: [0, 0, 1, 1, 0, 0], num: "02", title: "The Structure", body: "Engineered in-house, approved by GHMC, built to stand for generations." },
  { at: [0, 0.39, 0.44, 0.54, 0.59, 1], fade: [0, 0, 1, 1, 0, 0], num: "03", title: "The Address", body: "Travertine, bronze and glass — the elevation we drew is the one you get." },
  { at: [0, 0.59, 0.64, 0.74, 0.79, 1], fade: [0, 0, 1, 1, 0, 0], num: "04", title: "The Residence", body: "Pool, terrace and garden finished before the keys are cut." },
  { at: [0, 0.79, 0.84, 1], fade: [0, 0, 1, 1], num: "05", title: "The Interior", body: "Joinery, stone and light, resolved down to the last switch." },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    // z-0 matters: the rest of the page is lifted above this and slides over
    // the pin, so the last stretch of the scrub is never a dead hold.
    // ~19s of footage at roughly 100vh per 4s of scrub.
    <section ref={ref} className="relative z-0 h-[500vh] bg-background">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <FrameCanvas progress={scrollYProgress} />
        <RestStill progress={scrollYProgress} />

        {/* Kept deliberately thin so the footage shows its real colour. Just
            enough lift under the copy column on wide screens, and a base fade
            on narrow ones where the text spans the whole frame. */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden bg-gradient-to-r from-background/55 via-background/10 to-transparent lg:block" />
        {/* Mobile runs white type over a warm-dark gradient instead of ink type
            over a white one. Ink needs ~85% white behind it to be legible on
            this pale footage, which hides the building; white type over 40%
            dark reads just as well and you can still see through it. The top
            two-thirds of the frame stay completely untouched. */}
        <div className="hero-scrim-mobile pointer-events-none absolute inset-0 z-10" />

        {/* Dissolve into the next section — the hero bottom edge IS the page
            background, so there is no seam to notice when the pin releases. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-32 bg-gradient-to-t from-background to-transparent lg:block" />

        <Copy progress={scrollYProgress} />

        <ProgressRail progress={scrollYProgress} />
      </div>
    </section>
  );
}

/* ── Canvas scrub ──────────────────────────────────────────────────────
   Setting currentTime on a <video> is the obvious approach and it stutters
   badly on iOS Safari, so this draws a decoded frame sequence instead.
──────────────────────────────────────────────────────────────────────── */
function FrameCanvas({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useRef<(HTMLImageElement | null)[]>([]);
  const target = useRef(0);
  const schedule = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Phones get the lighter frame set. Decided in an effect, never during
    // render, so the server markup does not depend on viewport width.
    const small = window.innerWidth < HERO_SMALL_BREAKPOINT;

    const imgs: (HTMLImageElement | null)[] = Array(HERO_FRAME_COUNT).fill(null);
    frames.current = imgs;

    // Layout reads are cached. Touching clientWidth inside the draw forces a
    // style recalc on every scroll event, which is exactly the wrong thing to
    // do while a sticky element is moving.
    let cw = 0, ch = 0, dpr = 1;
    const measure = () => {
      cw = canvas.clientWidth;
      ch = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    };

    let raf = 0;
    const paint = () => {
      raf = 0;
      if (!cw || !ch) return;

      const idx = Math.round(Math.max(0, Math.min(1, target.current)) * (HERO_FRAME_COUNT - 1));

      // Nearest already-decoded frame, so scrubbing never shows a blank canvas.
      let img: HTMLImageElement | null = null;
      for (let d = 0; d <= HERO_FRAME_COUNT; d++) {
        const a = imgs[idx - d];
        if (a?.complete && a.naturalWidth) { img = a; break; }
        const b = imgs[idx + d];
        if (b?.complete && b.naturalWidth) { img = b; break; }
      }
      if (!img) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Cover-fit, but anchored right of centre: the tower lives in the right
      // two-thirds of every frame and the copy owns the left, so when a portrait
      // viewport has to crop it should give up the calm left edge, not the building.
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      const dh = ir > cr ? ch : cw / ir;
      const dw = ir > cr ? ch * ir : cw;
      const dx = ir > cr ? (cw - dw) * 0.7 : 0;
      ctx.drawImage(img, dx, (ch - dh) / 2, dw, dh);
    };

    // Coalesce to one paint per animation frame. Scroll and touch events can
    // outpace the compositor, and every extra paint here is a full redraw.
    const request = () => { if (!raf) raf = requestAnimationFrame(paint); };
    schedule.current = request;

    const load = (i: number) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = heroFrame(i, small);
      img.onload = () => { imgs[i] = img; request(); };
    };

    // First frame eagerly so the hero paints immediately. The rest load
    // coarse-to-fine — every 16th frame, then every 8th, 4th, 2nd, then the
    // remainder — so an early scrub already has even coverage across the whole
    // sequence instead of a dense start and nothing past it.
    measure();
    load(0);
    const order: number[] = [];
    const seen = new Set<number>([0]);
    for (const step of [16, 8, 4, 2, 1]) {
      for (let i = step; i < HERO_FRAME_COUNT; i += step) {
        if (!seen.has(i)) { seen.add(i); order.push(i); }
      }
    }
    let n = 0;
    let pumpRaf = 0;
    const pump = () => {
      for (let k = 0; k < 8 && n < order.length; k++, n++) load(order[n]);
      if (n < order.length) pumpRaf = requestAnimationFrame(pump);
    };
    pumpRaf = requestAnimationFrame(pump);

    const onResize = () => { measure(); request(); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(pumpRaf);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      schedule.current = () => {};
      // Drop the decoded bitmaps rather than leaving 320 of them pinned.
      for (const img of imgs) if (img) img.src = "";
    };
  }, []);

  useMotionValueEvent(progress, "change", (p) => {
    target.current = p;
    schedule.current();
  });

  return <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />;
}

/* The finished building is what a visitor should meet first — the film then
   rewinds to the drawing. A real <Image> so it is the LCP, not a canvas that
   waits on frame 0. */
function RestStill({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.03, 0.09, 1], [1, 1, 0, 0]);
  const scale = useTransform(progress, [0, 0.09, 1], [1, 1.04, 1.04]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 z-[5]">
      <Image
        src="/images/hero-still.webp"
        alt="Lakeside residential tower designed and built by IPR Architects"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
    </motion.div>
  );
}

/* ── Overlay pieces ───────────────────────────────────────────────────── */

/* Clears out BEFORE the incoming page reaches it. The overlap starts biting at
   roughly 0.96 of the scrub (hero 500vh, next block pulled up 20vh), so this has
   to be finished by then — otherwise the rising section slices the CTA row and
   leaves a stray brass sliver on screen. */
function Copy({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.9, 0.96, 1], [1, 1, 0, 0]);
  const y = useTransform(progress, [0, 0.9, 0.96, 1], [0, 0, -40, -40]);

  return (
    // Centred, not bottom-anchored. pt clears the fixed navbar so the optical
    // centre lands in the space below it rather than the raw viewport middle.
    <motion.div style={{ opacity, y }} className="hero-shadow relative z-20 flex h-full flex-col justify-end lg:justify-center">
      <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-24 lg:px-10 lg:pb-16">
        <Masthead progress={progress} />
        <Beats progress={progress} />
        <Actions />
      </div>
    </motion.div>
  );
}

function Masthead({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -60]);
  const scale = useTransform(progress, [0, 0.2, 1], [1, 0.78, 0.78]);
  // On a phone the masthead clears out once the film starts. The brand is
  // established at rest, and dropping it hands the scrub most of the screen
  // instead of asking a gradient to carry big type over bright footage.
  //
  // Desktop cancels the fade in CSS rather than by branching this range:
  // useTransform captures its ranges on first render, so a value derived from
  // a matchMedia state that resolves after mount never reaches it.
  const opacity = useTransform(progress, [0, 0.07, 0.13, 1], [1, 1, 0, 0]);

  return (
    <motion.div className="hero-masthead" style={{ y, scale, opacity, transformOrigin: "left bottom" }}>
      <p className="eyebrow mb-5 text-white/70 lg:mb-7 lg:text-accent-ink">Hyderabad · Est. 2012</p>
      <h1 className="font-display leading-[0.92] tracking-[-0.01em] text-white lg:text-foreground" style={{ fontSize: "clamp(2.5rem, 8.2vw, 7.4rem)" }}>
        IPR
        <br />
        <span className="italic font-normal">Architects</span>
      </h1>
      <p className="mt-6 hidden text-[10px] uppercase tracking-[0.34em] text-muted-foreground lg:block">
        Architecture · Interiors · Landscape · Construction
      </p>
    </motion.div>
  );
}

function Beats({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="relative mt-7 h-32 max-w-md lg:mt-10">
      {BEATS.map((b) => (
        <Beat key={b.num} progress={progress} {...b} />
      ))}
    </div>
  );
}

function Beat({
  progress,
  at,
  fade,
  num,
  title,
  body,
}: {
  progress: MotionValue<number>;
  at: number[];
  fade: number[];
  num: string;
  title: string;
  body: string;
}) {
  const opacity = useTransform(progress, at, fade);
  const y = useTransform(progress, [0, at[1], at[at.length - 2], 1], [14, 14, -14, -14]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      <div className="flex items-baseline gap-4">
        <span className="numeral text-sm text-white/60 lg:text-accent">{num}</span>
        <h2 className="font-display text-2xl italic text-white lg:text-[2.1rem] lg:text-foreground">{title}</h2>
      </div>
      <p className="mt-2.5 text-[13px] leading-relaxed text-white/80 lg:mt-3 lg:text-sm lg:text-muted-foreground">{body}</p>
    </motion.div>
  );
}

function Actions() {
  return (
    // Kept to one row on a phone — two size-lg pills overflow 390px, and the
    // wrap pushes the whole copy block up out of the scrim.
    <div className="mt-8 flex flex-wrap gap-2.5 lg:mt-9 lg:gap-3">
      <Button asChild size="lg" variant="accent" className="h-12 bg-background px-5 text-[12px] text-foreground hover:bg-white lg:h-14 lg:bg-foreground lg:px-8 lg:text-[14px] lg:text-background">
        <a href={getWhatsAppLink("home")} target="_blank" rel="noopener noreferrer">
          <MessageCircle /> Get Consultation
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="h-12 border-white/45 bg-white/10 px-5 text-[12px] text-white hover:bg-white hover:text-foreground lg:h-14 lg:border-foreground/15 lg:bg-background/50 lg:px-8 lg:text-[14px] lg:text-foreground">
        <Link href="/projects">
          Explore Projects <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}

/* One tick per beat, so the rail doubles as a chapter index. */
function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  const scaleY = useTransform(progress, [0, 1], [0, 1]);
  const opacity = useTransform(progress, [0, 0.9, 0.96, 1], [1, 1, 0, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:right-10 lg:block"
    >
      <div className="relative h-48 w-px bg-foreground/15">
        <motion.div style={{ scaleY, originY: 0 }} className="absolute inset-0 w-px bg-accent" />
        {BEATS.map((b, i) => (
          <span
            key={b.num}
            className="absolute -left-[3px] size-[7px] rounded-full border border-foreground/25 bg-background"
            style={{ top: `${(i / (BEATS.length - 1)) * 100}%`, transform: "translateY(-50%)" }}
          />
        ))}
      </div>
    </motion.div>
  );
}
