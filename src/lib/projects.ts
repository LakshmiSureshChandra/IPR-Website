/** Projects shown on the portfolio page. */
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
    "blurb": "A low villa built around a pool, with deep roofs, open terraces and planting right up to the house."
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
    "blurb": "Contemporary houses with planted terraces and generous entrances."
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
    "blurb": "A layered facade with shaded balconies, built for a busy street."
  },
  {
    "slug": "landscape",
    "title": "Landscape",
    "services": [
      "Landscaping"
    ],
    "image": "/images/portfolio/resort-landscape.webp",
    "subs": [
      "/images/portfolio/night-garden.webp"
    ],
    "blurb": "Courtyards and gardens with water, planting and soft lighting for the evening."
  },
  {
    "slug": "living-spaces",
    "title": "Living Spaces",
    "services": [
      "Interior Design"
    ],
    "image": "/images/portfolio/contemporary-salon.webp",
    "subs": [
      "/images/portfolio/garden-lounge.webp",
      "/images/portfolio/panoramic-lounge.webp",
      "/images/portfolio/sculptural-lounge.webp"
    ],
    "blurb": "Living rooms in timber and stone with plenty of seating."
  },
  {
    "slug": "soft-interiors",
    "title": "Lounges and Drawing Rooms",
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
    "blurb": "Lighter rooms with warm neutrals, soft fabrics and a lot of daylight."
  },
  {
    "slug": "bedrooms",
    "title": "Bedrooms",
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
    "blurb": "Bedroom suites with fitted storage and layered lighting."
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
    "blurb": "A home cinema with deep recliners, timber panelling and low lighting."
  },
  {
    "slug": "study-media",
    "title": "Study and Media Room",
    "services": [
      "Interior Design"
    ],
    "image": "/images/portfolio/executive-study.webp",
    "subs": [
      "/images/portfolio/media-wall.webp",
      "/images/portfolio/media-lounge.webp"
    ],
    "blurb": "A study and media room with fitted joinery for books, collections and the TV."
  }
];
