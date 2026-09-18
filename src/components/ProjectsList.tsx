"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import RevealImage from "@/components/anim/RevealImage";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

/* Must match the strings used in each project's `services`. */
const SERVICE_FILTERS = ["Architecture", "Construction", "Interior Design", "Landscaping"] as const;

export default function ProjectsList() {
  const [active, setActive] = useState<string>("All");

  const shown = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.services.includes(active))),
    [active]
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5">
        {["All", ...SERVICE_FILTERS].map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={on}
              className={cn(
                "rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors duration-300",
                on
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      {/* Keyed on the filter so the list fades rather than snapping between
          sets — RevealImage only animates once per mount, and the key gives
          every image a fresh one. */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4"
      >
        {shown.map((p, i) => {
          // Rows alternate sides. On a phone everything stacks in source order,
          // so the main photo always leads.
          const mirrored = i % 2 === 1;
          return (
            <article
              key={p.slug}
              className="grid items-center gap-10 border-t border-border py-14 first:border-t-0 lg:grid-cols-12 lg:gap-14 lg:py-20"
            >
              <div className={cn("lg:col-span-7", mirrored ? "lg:order-2" : "lg:order-1")}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-paper">
                  <RevealImage
                    src={p.image}
                    alt={p.title}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="absolute inset-0"
                    imageClassName="transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div className={cn("lg:col-span-5", mirrored ? "lg:order-1" : "lg:order-2")}>
                <span className="numeral text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl leading-snug lg:text-[1.75rem]">
                  {p.title}
                </h2>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.location} · {p.year} · {p.area}
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">{p.blurb}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                {/* flex-1 rather than a fixed column count: rows carry two or
                    three of these depending on what the project has. */}
                <div className="mt-8 flex gap-3">
                  {p.subs.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] flex-1 overflow-hidden rounded-xl bg-paper"
                    >
                      <RevealImage
                        src={src}
                        alt=""
                        sizes="(max-width: 1024px) 33vw, 15vw"
                        className="absolute inset-0"
                        imageClassName="transition-transform duration-[1.2s] ease-out hover:scale-[1.06]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
    </>
  );
}
