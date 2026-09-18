import { cn } from "@/lib/utils";

/**
 * Sweeping curved edge between two sections.
 *
 * The curve belongs to the section it sits in and is painted in that section's
 * own background colour, so it reads as that section's edge bowing into its
 * neighbour rather than as a shape floating between them. Pass the fill as a
 * text-* class; the path uses currentColor.
 *
 *   <section className="relative bg-paper">
 *     <SectionCurve fill="text-paper" />
 *
 * `place="bottom"` is for the case the top variant cannot cover: a neighbour
 * with a background image or `overflow-hidden`, which would clip a curve of its
 * own. There the previous section reaches down instead.
 */
export default function SectionCurve({
  fill,
  place = "top",
  flip = false,
  className,
}: {
  fill: string;
  place?: "top" | "bottom";
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 z-10 leading-[0]",
        place === "top" ? "bottom-full" : "top-full",
        fill,
        className
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn(
          "block h-8 w-full sm:h-14 lg:h-[84px]",
          place === "bottom" && "rotate-180",
          flip && "-scale-x-100"
        )}
      >
        <path d="M0,120 V54 C286,2 648,112 1440,32 V120 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
