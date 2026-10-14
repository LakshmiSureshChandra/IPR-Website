/**
 * Slides for the "Architectural narratives" showcase on the home page.
 *
 * To change a slide, edit its image, title and text together. Cards are 3:4, so a
 * landscape picture is centre-cropped; set `focus` (a CSS object-position such as
 * "30% 50%") to move the crop. Keep an odd number of slides: five show at a time,
 * and the odd count lets the hidden ones wrap round without being seen.
 */
export interface Slide {
  title: string;
  /** Short label shown under the title on the side cards. */
  tag: string;
  text: string;
  /** Services involved, shown on the centre card. */
  services: string;
  image: string;
  focus?: string;
}

export const SLIDES: Slide[] = [
  {
    title: "The Courtyard Villa",
    tag: "Residence",
    text: "A villa built around a pool, with deep roofs and open terraces.",
    services: "Architecture · Landscape",
    image: "/images/portfolio/pool-pavilion.webp",
  },
  {
    title: "Cantilever Residence",
    tag: "Residence",
    text: "A two-storey house in timber, stone and glass, with the upper floor reaching out over the entrance.",
    services: "Architecture · Construction",
    image: "/images/portfolio/cantilever-residence.webp",
  },
  {
    title: "Urban Architecture",
    tag: "Architecture",
    text: "A layered facade with shaded balconies for a city street.",
    services: "Architecture · Construction",
    image: "/images/portfolio/urban-residence.webp",
  },
  {
    title: "Landscape",
    tag: "Landscape",
    text: "A garden lit for the evening, with planting, water and low lights.",
    services: "Landscaping",
    image: "/images/portfolio/resort-landscape.webp",
  },
  {
    title: "Terraced Residences",
    tag: "Residence",
    text: "Terraced homes with planted balconies and generous entrances.",
    services: "Architecture · Construction",
    image: "/images/portfolio/terraced-residences.webp",
  },
  {
    title: "Villa at Dusk",
    tag: "Residence",
    text: "A villa seen at dusk, with a lit path, low bollard lights and planting along the walls.",
    services: "Architecture · Landscape",
    image: "/images/portfolio/villa-at-dusk.webp",
  },
  {
    title: "Pool Courtyard",
    tag: "Residence",
    text: "A low house opening onto a courtyard pool, lit for the night.",
    services: "Architecture · Landscape",
    image: "/images/portfolio/pool-courtyard.webp",
  },
];
