/** Curated image collections from the supplied website folder. */
export interface Project {
  slug: string;
  title: string;
  services: string[];
  image: string;
  subs: string[];
  blurb: string;
}

export const PROJECTS: Project[] = [
  {
    "slug": "courtyard-villa",
    "title": "The Courtyard Villa",
    "services": [
      "Architecture",
      "Construction",
      "Landscaping"
    ],
    "image": "/images/portfolio/pool-pavilion.webp",
    "subs": [
      "/images/portfolio/villa-arrival.webp",
      "/images/portfolio/courtyard-pendants.webp",
      "/images/portfolio/pool-courtyard.webp",
      "/images/portfolio/villa-at-dusk.webp",
      "/images/portfolio/pool-evening.webp",
      "/images/portfolio/pool-deck.webp",
      "/images/portfolio/water-garden.webp",
      "/images/portfolio/garden-arrival.webp"
    ],
    "blurb": "A low-slung home wrapped around water. Deep rooflines, open terraces and planted edges make the garden part of every room."
  },
  {
    "slug": "residential-architecture",
    "title": "Residential Architecture",
    "services": [
      "Architecture",
      "Construction"
    ],
    "image": "/images/portfolio/cantilever-residence.webp",
    "subs": [
      "/images/portfolio/terraced-residences.webp",
      "/images/portfolio/villa-avenue.webp"
    ],
    "blurb": "Sculpted contemporary elevations, planted terraces and generous entrances explore arrival, proportion and the spaces between homes."
  },
  {
    "slug": "urban-architecture",
    "title": "Urban Architecture",
    "services": [
      "Architecture",
      "Construction"
    ],
    "image": "/images/portfolio/urban-residence.webp",
    "subs": [],
    "blurb": "Layered facades, shaded balconies and strong street presence bring a considered rhythm to larger buildings."
  },
  {
    "slug": "landscape",
    "title": "Gardens After Hours",
    "services": [
      "Landscaping"
    ],
    "image": "/images/portfolio/resort-landscape.webp",
    "subs": [
      "/images/portfolio/night-garden.webp"
    ],
    "blurb": "Water, planting and warm pools of light create places to pause, from quiet courtyards to gardens designed for gathering."
  },
  {
    "slug": "living-spaces",
    "title": "The Art of Living",
    "services": [
      "Interior Design"
    ],
    "image": "/images/portfolio/contemporary-salon.webp",
    "subs": [
      "/images/portfolio/garden-lounge.webp",
      "/images/portfolio/panoramic-lounge.webp",
      "/images/portfolio/sculptural-lounge.webp"
    ],
    "blurb": "Rich timber, textured stone and generous seating. Living spaces composed around conversation and comfort."
  },
  {
    "slug": "soft-interiors",
    "title": "Light & Softness",
    "services": [
      "Interior Design"
    ],
    "image": "/images/portfolio/sunlit-lounge.webp",
    "subs": [
      "/images/portfolio/rose-salon.webp",
      "/images/portfolio/chandelier-lounge.webp",
      "/images/portfolio/drawing-room.webp",
      "/images/portfolio/marble-living.webp",
      "/images/portfolio/marble-tv-wall.webp"
    ],
    "blurb": "A lighter palette of warm neutrals, soft fabrics and polished details, shaped by natural light."
  },
  {
    "slug": "bedrooms",
    "title": "Private Retreats",
    "services": [
      "Interior Design"
    ],
    "image": "/images/portfolio/classic-suite.webp",
    "subs": [
      "/images/portfolio/sculpted-bedroom.webp",
      "/images/portfolio/tailored-bedroom.webp",
      "/images/portfolio/warm-bedroom.webp",
      "/images/portfolio/timber-bedroom.webp",
      "/images/portfolio/charcoal-suite.webp",
      "/images/portfolio/stone-suite.webp"
    ],
    "blurb": "Bedrooms that balance quiet materials with thoughtful storage, layered lighting and a sense of retreat."
  },
  {
    "slug": "private-cinema",
    "title": "The Private Cinema",
    "services": [
      "Interior Design"
    ],
    "image": "/images/portfolio/private-cinema.webp",
    "subs": [
      "/images/portfolio/cinema-screen.webp",
      "/images/portfolio/cinema-seating.webp",
      "/images/portfolio/cinema-panelling.webp",
      "/images/portfolio/cinema-lighting.webp"
    ],
    "blurb": "Deep reclining seats, timber panelling and low, atmospheric light turn a room into a cinema experience."
  },
  {
    "slug": "study-media",
    "title": "Work & Unwind",
    "services": [
      "Interior Design"
    ],
    "image": "/images/portfolio/executive-study.webp",
    "subs": [
      "/images/portfolio/media-wall.webp",
      "/images/portfolio/media-lounge.webp"
    ],
    "blurb": "Considered joinery gives work, collections and entertainment a place of their own."
  }
];
