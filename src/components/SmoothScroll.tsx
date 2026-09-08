"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  /* Land at the top on refresh.
     Browsers restore the previous scroll offset on reload, which on the home
     page drops you into the middle of the hero's build sequence. Opting out of
     scrollRestoration is what actually prevents it — a scrollTo alone races the
     browser's own restore and loses. This component lives in the root layout and
     mounts once per full page load, so client-side navigations are unaffected.
     A #hash in the URL is a deliberate target and still wins. */
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
