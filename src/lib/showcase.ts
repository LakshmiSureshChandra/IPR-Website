/**
 * Slides for the spatial showcase on the home page.
 *
 * Placeholder imagery: swap `image` for any picture, ideally landscape or
 * portrait at 1400px or more on the long edge. Cards are 3:4, so a landscape
 * render is centre-cropped; set `focus` (a CSS object-position, e.g. "30% 50%")
 * to move the crop. Titles and copy describe the current pictures, so change
 * them together with the image.
 *
 * Keep an odd number of slides: the coverflow shows five at a time and the odd
 * count is what lets the hidden ones wrap round invisibly.
 */
export interface Slide {
  title: string;
  /** Short category shown under the title on the side cards. */
  tag: string;
  text: string;
  /** Disciplines involved, shown on the centre card. */
  services: string;
  image: string;
  focus?: string;
}

const R = "/images/renders";

export const SLIDES: Slide[] = [
  {
    title: "Poolside Villa",
    tag: "Residence",
    text: "A single-storey villa drawn around its pool, with the architecture, the build and the landscape all delivered by one team.",
    services: "Architecture · Construction",
    image: `${R}/arch-exterior-2.webp`,
  },
  {
    title: "Garden Courtyard",
    tag: "Landscape",
    text: "Planting, water and stone composed with the same rigour as the building around them.",
    services: "Landscaping · Architecture",
    image: `${R}/arch-exterior-3.webp`,
  },
  {
    title: "Living Room",
    tag: "Interior",
    text: "Joinery, lighting and soft furnishing specified during design, not after handover.",
    services: "Interior Design",
    image: `${R}/interior-living-2.webp`,
    focus: "42% 50%",
  },
  {
    title: "Commercial Facade",
    tag: "Commercial",
    text: "A lit, layered facade taken from first concept through structure, approvals and handover.",
    services: "Architecture · Construction",
    image: `${R}/arch-commercial-tower.webp`,
  },
  {
    title: "Drawing Room",
    tag: "Interior",
    text: "A terrazzo feature wall and quiet joinery, chosen and costed before the first wall went up.",
    services: "Interior Design",
    image: `${R}/interior-drawing-room.webp`,
    focus: "30% 50%",
  },
  {
    title: "Entrance Courtyard",
    tag: "Landscape",
    text: "An arrival that sets the tone: pale stone underfoot, warm light overhead, planting to either side.",
    services: "Landscaping · Construction",
    image: `${R}/hero-courtyard.webp`,
  },
  {
    title: "Master Suite",
    tag: "Interior",
    text: "Soft layers, low light and storage that disappears, planned around how the family actually lives.",
    services: "Interior Design",
    image: `${R}/interior-master-bedroom.webp`,
  },
];
