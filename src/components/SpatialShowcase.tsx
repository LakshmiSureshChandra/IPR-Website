"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";
import { SLIDES } from "@/lib/showcase";
import { cn } from "@/lib/utils";

const N = SLIDES.length;

/* Where a card sits for a given offset from the active one. x is a percentage
   of the card's own width, so the whole fan scales with the card instead of
   needing a breakpoint.

   The tilt is the unusual part: the outer edges come TOWARD the viewer, so the
   row reads as a shallow concave wall around you rather than a Cover Flow
   rolodex. For CSS that means rotateY is positive on the left cards (their
   inner edge recedes) and negative on the right. */
function slot(d: number) {
  const a = Math.abs(d);
  const s = Math.sign(d);
  if (a === 0) return { x: "0%", y: 0, scale: 1, rotateY: 0, opacity: 1 };
  if (a === 1) return { x: `${s * 60}%`, y: 0, scale: 0.86, rotateY: -s * 14, opacity: 1 };
  if (a === 2) return { x: `${s * 104}%`, y: 0, scale: 0.72, rotateY: -s * 20, opacity: 1 };
  // Parked off to the side and invisible. With an odd slide count the card that
  // wraps from one side to the other does so while at opacity 0 at both ends.
  return { x: `${s * 128}%`, y: 0, scale: 0.6, rotateY: -s * 24, opacity: 0 };
}

/** Signed distance from the active slide, wrapped into [-N/2, N/2]. */
function offsetOf(i: number, active: number) {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

export default function SpatialShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const [active, setActive] = useState(0);
  const [settled, setSettled] = useState(false);

  // Entrance fires once.
  const entered = useInView(stageRef, { once: true, amount: 0.25 });

  const go = useCallback((i: number) => setActive(((i % N) + N) % N), []);
  const next = useCallback(() => setActive((a) => (a + 1) % N), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + N) % N), []);

  // The fan-out is staggered by distance from the centre. Once it has played,
  // that stagger has to go, or every later move would lag on the outer cards.
  useEffect(() => {
    if (!entered) return;
    const t = setTimeout(() => setSettled(true), 1700);
    return () => clearTimeout(t);
  }, [entered]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  return (
    // overflow-x-clip, not hidden: the side cards bleed to the viewport edge on a
    // phone and must not widen the page, but hidden would also clip vertically
    // and take the section curves and card shadows with it.
    <div
      className="relative overflow-x-clip"
      onKeyDown={onKeyDown}
    >
      {/* A soft glow behind the stage lifts the cards from the background. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] h-[70%] w-[min(900px,120%)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,255,255,0.85),rgba(255,255,255,0)_100%)]"
      />

      <div className="relative">
        {/* ── Stage ─────────────────────────────────────────────────────── */}
        <motion.div
          ref={stageRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Selected work"
          onPanEnd={(_, info) => {
            // A horizontal flick moves one slide. Vertical flicks fall through to
            // the page, which is what touch-action: pan-y is for.
            if (Math.abs(info.offset.x) < 50 || Math.abs(info.offset.x) < Math.abs(info.offset.y)) return;
            if (info.offset.x < 0) next();
            else prev();
          }}
          style={{ touchAction: "pan-y" }}
          className="mt-2"
        >
          <div
            className="relative mx-auto aspect-[3/4] w-[min(78vw,340px)] sm:w-[min(60vw,380px)] lg:w-[400px]"
            style={{ perspective: 1600 }}
          >
            {/* The floor the cards stand on. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-7 left-1/2 h-10 w-[80%] -translate-x-1/2 rounded-[50%] bg-foreground/30 blur-2xl"
            />

            {SLIDES.map((s, i) => {
              const d = offsetOf(i, active);
              const isActive = d === 0;
              const hidden = Math.abs(d) > 2;
              const target = slot(d);

              return (
                <motion.div
                  key={s.image}
                  initial={{ x: "0%", y: 36, scale: 0.8, rotateY: 0, opacity: 0 }}
                  animate={entered ? target : undefined}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 150,
                          damping: 24,
                          delay: settled ? 0 : Math.abs(d) * 0.1,
                        }
                  }
                  style={{ zIndex: 10 - Math.abs(d), willChange: "transform, opacity" }}
                  aria-hidden={hidden || undefined}
                  className="absolute inset-0 overflow-hidden rounded-[1.75rem] bg-paper-2 shadow-[0_44px_80px_-44px_rgba(17,17,16,0.6)] ring-1 ring-white/50"
                >
                  <Image
                    src={s.image}
                    alt={isActive ? `${s.title}, ${s.tag.toLowerCase()} by IPR Architects` : ""}
                    fill
                    sizes="(max-width: 768px) 78vw, 400px"
                    className="object-cover"
                    style={{ objectPosition: s.focus }}
                    draggable={false}
                  />

                  {/* Side cards recede: the further out, the darker. */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 bg-foreground"
                    initial={false}
                    animate={{ opacity: d === 0 ? 0 : Math.abs(d) === 1 ? 0.14 : 0.3 }}
                    transition={reduced ? { duration: 0 } : { duration: 0.6 }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 via-45% to-transparent to-75%"
                  />

                  {/* Small caption on the side cards. */}
                  <AnimatePresence initial={false}>
                    {!isActive && !hidden && (
                      <motion.div
                        key="small"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.15 } }}
                        exit={{ opacity: 0, transition: { duration: 0.12 } }}
                        // Hug the outer edge. The inner half of every side card is
                        // tucked behind its neighbour, so a caption set bottom-left
                        // on the right-hand cards was almost entirely hidden.
                        className={cn("absolute inset-x-0 bottom-0 p-5 text-white", d > 0 && "text-right")}
                      >
                        <p className="font-display text-lg leading-tight">{s.title}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/70">{s.tag}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Full caption on the centre card. */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="big"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
                        exit={{ opacity: 0, transition: { duration: 0.12 } }}
                        className="absolute inset-0 text-white"
                      >
                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                          <div className="flex items-baseline justify-between gap-4">
                            <h3 className="font-display text-2xl leading-tight sm:text-[1.75rem]">{s.title}</h3>
                            <span className="numeral shrink-0 text-xs text-white/70">
                              {i + 1} / {N}
                            </span>
                          </div>
                          <p className="mt-3 line-clamp-3 text-[13px] leading-[1.65] text-white/80">{s.text}</p>
                          <p className="mt-4 flex items-center gap-2 text-[12px] text-white/90">
                            <MapPin className="size-3.5 shrink-0" aria-hidden />
                            Hyderabad, Telangana
                          </p>
                          <p className="mt-1 pl-[1.375rem] text-[10px] uppercase tracking-[0.18em] text-white/60">
                            {s.services}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Anything but the centre card is one big button back to it.
                      It is not nested in the centre card's own controls, which is
                      why the centre card does not get one. */}
                  {!isActive && (
                    <button
                      type="button"
                      onClick={() => go(i)}
                      tabIndex={hidden ? -1 : 0}
                      aria-label={`Show ${s.title}`}
                      className="absolute inset-0 z-20 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Dots. Each is a 24px target around a 6px mark. */}
        <div className="mt-14 flex items-center justify-center">
          {SLIDES.map((s, i) => (
            <button
              key={s.image}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={i === active || undefined}
              className="group flex h-6 items-center justify-center px-1"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-500",
                  i === active ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25 group-hover:bg-foreground/50"
                )}
              />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
