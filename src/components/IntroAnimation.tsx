"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const ease = [0.76, 0, 0.24, 1] as const;

/**
 * Light-theme opening wipe. Kept short on purpose — a splash screen that
 * outstays its welcome reads as slow, not premium.
 */
export default function IntroAnimation() {
  const [phase, setPhase] = useState<"run" | "out" | "done">("run");

  useEffect(() => {
    // ponytail: reduced-motion skips the wipe by using a 0ms timer, not a
    // synchronous setState (which lints as a cascading render).
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = setTimeout(() => setPhase("out"), reduced ? 0 : 1500);
    const t2 = setTimeout(() => setPhase("done"), reduced ? 0 : 2350);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;
  const isOut = phase === "out";

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden" style={{ pointerEvents: isOut ? "none" : "all" }}>
      {/* Paper panels split apart */}
      <motion.div
        className="absolute inset-x-0 top-0 bg-background"
        style={{ height: "50vh", zIndex: 2 }}
        animate={isOut ? { y: "-100%" } : { y: 0 }}
        transition={isOut ? { duration: 0.85, ease } : {}}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-background"
        style={{ height: "50vh", zIndex: 2 }}
        animate={isOut ? { y: "100%" } : { y: 0 }}
        transition={isOut ? { duration: 0.85, ease } : {}}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 3 }}
        animate={isOut ? { opacity: 0 } : { opacity: 1 }}
        transition={isOut ? { duration: 0.25 } : {}}
      >
        {/* Drafting sweep */}
        <motion.div
          className="absolute inset-x-0"
          style={{
            top: "50%",
            height: "1px",
            transformOrigin: "left center",
            background: "linear-gradient(90deg, transparent, var(--accent) 45%, var(--accent) 55%, transparent)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.1, delay: 0.1, ease: "easeInOut", times: [0, 0.12, 0.8, 1] }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/images/logo/logo-mark.png" alt="IPR" width={64} height={64} priority className="object-contain" />
        </motion.div>

        <motion.div
          className="mt-5 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <span className="h-px w-9 bg-accent/50" />
          <span className="text-[10px] font-light uppercase tracking-[0.38em] text-accent-ink">Architects</span>
          <span className="h-px w-9 bg-accent/50" />
        </motion.div>

        <motion.p
          className="mt-3 text-[9px] uppercase tracking-[0.5em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Hyderabad · 17°26′N 78°28′E
        </motion.p>
      </motion.div>
    </div>
  );
}
