/**
 * Hero media config.
 *
 * The hero is a canvas scrubbed over a pre-decoded frame sequence, not a
 * <video>. After replacing the source video, regenerate the frames:
 *
 *   ./scripts/hero-frames.sh media/hero/hero.mp4 320 1440
 *
 * then set HERO_FRAME_COUNT to whatever the script prints. That is the only
 * code change a new hero video needs.
 */

export const HERO_FRAME_COUNT = 320;
export const HERO_FRAME_DIR = "/images/hero";

export const heroFrame = (i: number) =>
  `${HERO_FRAME_DIR}/frame_${String(i + 1).padStart(3, "0")}.webp`;
