"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

/* Must match the strings used in each project's `services`. */
const SERVICE_FILTERS = ["Architecture", "Construction", "Interior Design", "Landscaping"] as const;

export default function ProjectsList() {
  const [active, setActive] = useState<string>("All");
  const [selectedImages, setSelectedImages] = useState<Record<string, string>>({});

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
        {shown.length} {shown.length === 1 ? "collection" : "collections"}
      </p>

      {/* Keep each collection's image selection when changing filters. */}
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
          const images = [p.image, ...p.subs];
          const selected = selectedImages[p.slug] ?? p.image;
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="scroll-mt-28 grid items-start gap-10 border-t border-border py-14 first:border-t-0 lg:grid-cols-12 lg:gap-14 lg:py-20"
            >
              <div className={cn("min-w-0 lg:col-span-7", mirrored ? "lg:order-2" : "lg:order-1")}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-paper-2">
                  <Image
                    src={selected}
                    alt={`${p.title} — view ${images.indexOf(selected) + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain"
                  />
                </div>
                <div role="group" aria-label={`${p.title} image selection`} className="mt-4 flex gap-3 overflow-x-auto p-1 pb-3">
                  {images.map((src, imageIndex) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setSelectedImages((current) => ({ ...current, [p.slug]: src }))}
                      aria-label={`Show ${p.title} view ${imageIndex + 1}`}
                      aria-pressed={selected === src}
                      className={cn(
                        "relative aspect-[4/3] w-24 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-paper-2 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:w-28",
                        selected === src ? "ring-2 ring-accent ring-offset-2 ring-offset-paper" : "opacity-65 hover:opacity-100"
                      )}
                    >
                      <Image src={src} alt="" fill sizes="112px" className="object-contain" />
                    </button>
                  ))}
                </div>
              </div>

              <div className={cn("lg:col-span-5", mirrored ? "lg:order-1" : "lg:order-2")}>
                <span className="numeral text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl leading-snug lg:text-[1.75rem]">
                  {p.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">{p.blurb}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <Badge key={s}>{s}</Badge>
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
