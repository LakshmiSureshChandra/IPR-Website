/**
 * Hero media config.
 *
 * The hero is a canvas scrubbed over a pre-decoded frame sequence, not a
 * <video>. Two sets ship: the full-width one for desktop, and a lighter one
 * phones load instead — same frame count, so slow scrolling stays smooth, but
 * ~40% fewer bytes and far less image-decode pressure, which is what makes the
 * scrub stutter on a phone.
 *
 * After replacing the source video, regenerate BOTH:
 *
 *   ./scripts/hero-frames.sh media/hero/hero.mp4 320 1440
 *   ./scripts/hero-frames.sh media/hero/hero.mp4 320 1024 public/images/hero-sm
 *
 * then set HERO_FRAME_COUNT to whatever the script prints. That is the only
 * code change a new hero video needs.
 */

export const HERO_FRAME_COUNT = 320;
export const HERO_FRAME_DIR = "/images/hero";
export const HERO_FRAME_DIR_SM = "/images/hero-sm";

/** Below this viewport width the lighter frame set is used. */
export const HERO_SMALL_BREAKPOINT = 768;

export const heroFrame = (i: number, small = false) =>
  `${small ? HERO_FRAME_DIR_SM : HERO_FRAME_DIR}/frame_${String(i + 1).padStart(3, "0")}.webp`;
