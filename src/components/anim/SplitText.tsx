"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { cn } from "@/lib/utils";

/**
 * Word-by-word rise from behind a mask, driven by anime.js.
 *
 * The words ship as real text in the markup and are only hidden once JS runs,
 * so crawlers and no-JS visitors still get the heading. useLayoutEffect does the
 * hiding before paint to avoid a flash of fully-visible text.
 */
export default function SplitText({
  text,
  className,
  style,
  as: Tag = "span",
  delay = 0,
  stagger: step = 55,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.querySelectorAll<HTMLElement>("[data-word]").forEach((w) => {
      w.style.opacity = "0";
      w.style.transform = "translateY(110%)";
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        animate(words, {
          y: ["110%", "0%"],
          opacity: [0, 1],
          duration: 900,
          delay: stagger(step, { start: delay }),
          ease: "out(3)",
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, step]);

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          // The mask is what makes words rise from behind an edge. Padding
          // compensates so descenders are not clipped by the overflow.
          className={cn("inline-flex overflow-hidden pb-[0.12em] align-bottom", i > 0 && "ml-[0.25em]")}
        >
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
