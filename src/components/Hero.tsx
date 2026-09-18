"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_FRAME_COUNT, HERO_SMALL_BREAKPOINT, heroFrame } from "@/lib/media";
import { getWhatsAppLink } from "@/lib/whatsapp";

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
        <Actions />
      </div>
    </motion.div>
  );
}

function Masthead({ progress }: { progress: MotionValue<number> }) {
  // Scale only, anchored bottom-left. It used to drift up 60px as well, but the
  // CTA row underneath does not move, so that drift just opened a widening gap
  // between them — 48px at rest, 108px by the end of the scrub. Scaling from
  // the bottom edge keeps the masthead a fixed distance above the buttons.
  const scale = useTransform(progress, [0, 0.2, 1], [1, 0.78, 0.78]);
  return (
    <motion.div style={{ scale, transformOrigin: "left bottom" }}>
      <p className="eyebrow mb-5 text-white/70 lg:mb-7 lg:text-accent-ink">Hyderabad</p>
      <h1 className="font-display leading-[0.92] tracking-[-0.01em] text-white lg:text-foreground" style={{ fontSize: "clamp(2.5rem, 5.4vw, 5.25rem)" }}>
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

function Actions() {
  return (
    // Kept to one row on a phone — two size-lg pills overflow 390px, and the
    // wrap pushes the whole copy block up out of the scrim.
    <div className="mt-10 flex flex-wrap gap-2.5 lg:mt-12 lg:gap-3">
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

/* Plain scrub progress. It used to carry one tick per beat; with the beats
   gone there are no chapters left for it to index. */
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
      </div>
    </motion.div>
  );
}
