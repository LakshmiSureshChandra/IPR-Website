"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import RevealImage from "@/components/anim/RevealImage";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

/* Must match the strings used in each project's `services`. */
const SERVICE_FILTERS = ["Architecture", "Construction", "Interior Design", "Landscaping"] as const;

export default function ProjectsGrid() {
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

      {/* Keyed on the filter so the grid fades rather than snapping between
          sets. RevealImage only animates once per mount, and the key gives it
          a fresh one. */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
      >
        {shown.map((p, i) => (
          <article
            key={p.slug}
            /* Middle column rides lower, the same cascade the home page uses.
               Keyed off position rather than the data so it survives filtering. */
            className={cn("group", i % 3 === 1 && "lg:mt-14")}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-paper">
              <RevealImage
                src={p.image}
                alt={p.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0"
                imageClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
              />
            </div>

            <div className="pt-6">
              <div className="mb-3 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <h2 className="font-display text-xl leading-snug">{p.title}</h2>
              <p className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.location} · {p.year} · {p.area}
              </p>
            </div>
          </article>
        ))}
      </motion.div>
    </>
  );
}
