#!/usr/bin/env bash
# Turn the hero video into the numbered frame sequence the scroll hero scrubs.
#
#   ./scripts/hero-frames.sh media/hero/hero.mp4
#   ./scripts/hero-frames.sh media/hero/hero.mp4 320 1440
#   ./scripts/hero-frames.sh media/hero/hero.mp4 320 1024 public/images/hero-sm
#
# Scroll-scrubbing a real <video> by setting currentTime is unreliable on iOS
# Safari and stutters on Android, so we scrub a canvas over pre-decoded frames
# instead. Re-run this whenever the source video changes.
set -euo pipefail

SRC="${1:-media/hero/hero.mp4}"
COUNT="${2:-120}"
WIDTH="${3:-1600}"
OUT="${4:-public/images/hero}"

command -v ffmpeg >/dev/null || { echo "ffmpeg not found (brew install ffmpeg)" >&2; exit 1; }
[ -f "$SRC" ] || { echo "no such video: $SRC" >&2; exit 1; }

DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SRC")
FPS=$(awk -v c="$COUNT" -v d="$DUR" 'BEGIN { printf "%.6f", c / d }')

rm -rf "$OUT"
mkdir -p "$OUT"
# -f image2 is required: without it ffmpeg picks the animated-webp muxer from
# the .webp extension and writes one giant animated file instead of a sequence.
ffmpeg -v error -i "$SRC" \
  -vf "fps=${FPS},scale=${WIDTH}:-2:flags=lanczos" \
  -frames:v "$COUNT" -fps_mode passthrough \
  -f image2 -c:v libwebp -q:v 56 \
  "$OUT/frame_%03d.webp"

ACTUAL=$(find "$OUT" -name 'frame_*.webp' | wc -l | tr -d ' ')
echo "$ACTUAL frames → $OUT ($(du -sh "$OUT" | cut -f1))"
echo "Set HERO_FRAME_COUNT in src/lib/media.ts to $ACTUAL"
echo "(phones load the -sm set; regenerate both when the film changes)"
