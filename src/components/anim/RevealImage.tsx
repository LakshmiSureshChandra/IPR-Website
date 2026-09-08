"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Architectural image reveal: the frame unmasks upward while the picture
 * settles back from a slight over-scale. Two layers, because animating the mask
 * and the image together just looks like a fade.
 */
export default function RevealImage({
  src,
  alt,
  sizes = "100vw",
  className,
  imageClassName,
  priority,
  delay = 0,
  hover = true,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={cn("relative overflow-hidden bg-paper", className)}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px 10% 0px" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px 10% 0px" }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            hover && "transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]",
            imageClassName
          )}
        />
      </motion.div>
    </motion.div>
  );
}
