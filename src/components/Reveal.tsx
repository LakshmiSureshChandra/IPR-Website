"use client";
import { motion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Fires slightly BEFORE the element reaches the viewport. A negative
      // margin here (the usual default) makes content pop in late, which reads
      // as a stutter when scrolling fast past the hero.
      viewport={{ once: true, margin: "0px 0px 12% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
