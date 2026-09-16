"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** Matches the last animation to finish in globals.css: 1.35s delay + 0.75s. */
const TOTAL_MS = 2100;

/**
 * Light-theme opening wipe. Kept short on purpose — a splash screen that
 * outstays its welcome reads as slow, not premium.
 *
 * The animation itself lives in CSS (see "Intro wipe" in globals.css). React
 * only unmounts the overlay once it has finished; it deliberately does not
 * drive the timing, because a JS-driven entrance cannot start until hydration
 * and left the screen blank on refresh.
 */
export default function IntroAnimation() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Reduced motion hides the overlay in CSS; unmount it immediately so it
    // never sits in the tree swallowing the first paint.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDone(true), reduced ? 0 : TOTAL_MS);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    // pointer-events-none: the splash is not interactive, and blocking clicks
    // for two seconds is worse than letting an early one through.
    <div className="intro-root pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      {/* Paper panels split apart. 51vh each so they overlap at the seam
          rather than risking a hairline gap on viewports that round oddly. */}
      <div className="intro-panel-up absolute inset-x-0 top-0 z-[2] h-[51vh] bg-background" />
      <div className="intro-panel-down absolute inset-x-0 bottom-0 z-[2] h-[51vh] bg-background" />

      <div className="intro-content absolute inset-0 z-[3] flex flex-col items-center justify-center">
        <span className="intro-sweep absolute inset-x-0 top-1/2 h-px" />

        <span className="intro-logo">
          <Image
            src="/images/logo/logo-mark.png"
            alt="IPR Architects"
            width={64}
            height={64}
            priority
            className="object-contain"
          />
        </span>

        <div className="intro-word mt-5 flex items-center gap-4">
          <span className="h-px w-9 bg-accent/50" />
          <span className="text-[10px] font-light uppercase tracking-[0.38em] text-accent-ink">Architects</span>
          <span className="h-px w-9 bg-accent/50" />
        </div>

        <p className="intro-coord mt-3 text-[9px] uppercase tracking-[0.5em] text-muted-foreground">
          Hyderabad · 17°26′N 78°28′E
        </p>
      </div>
    </div>
  );
}
