/**
 * Every project the studio shows, in one list.
 *
 * There are no per-project pages; /projects renders each of these as a full
 * row. `services` drives the filter there and its values must match
 * SERVICE_FILTERS. `subs` are the smaller supporting shots beside the copy —
 * two or three each, and every render in the library is used exactly once.
 */
export interface Project {
  slug: string;
  title: string;
  location: string;
  services: string[];
  year: string;
  area: string;
  image: string;
  subs: string[];
  blurb: string;
}

const R = "/images/renders";

export const PROJECTS: Project[] = [
  {
    slug: "jubilee-hills-villa",
    title: "Luxury Villa — Jubilee Hills",
    location: "Jubilee Hills, Hyderabad",
    services: ["Architecture", "Construction", "Interior Design"],
    year: "2025",
    area: "5,200 sqft",
    image: `${R}/arch-exterior-2.webp`,
    subs: [`${R}/interior-living-2.webp`, `${R}/interior-master-bedroom.webp`, `${R}/project-1-detail.webp`],
    blurb:
      "A sprawling villa in the heart of Jubilee Hills, for a family that wanted both grandeur and intimacy — luxurious without being ostentatious, contemporary without abandoning warmth.",
  },
  {
    slug: "banjara-hills-residence",
    title: "Boutique Residence — Banjara Hills",
    location: "Banjara Hills, Hyderabad",
    services: ["Architecture", "Construction", "Interior Design", "Landscaping"],
    year: "2025",
    area: "4,500 sqft",
    image: `${R}/hero-villa-night.webp`,
    subs: [`${R}/interior-drawing-room.webp`, `${R}/landscape-garden.webp`, `${R}/project-1-interior.webp`],
    blurb:
      "Our most comprehensive commission to date — a full design-build spanning architecture, interiors, construction and landscaping, delivered in eighteen months from concept to handover.",
  },
  {
    slug: "gachibowli-villa",
    title: "Modern Villa — Gachibowli",
    location: "Gachibowli, Hyderabad",
    services: ["Architecture", "Landscaping"],
    year: "2024",
    area: "3,800 sqft",
    image: `${R}/arch-exterior-3.webp`,
    subs: [`${R}/hero-courtyard.webp`, `${R}/landscape-2.webp`, `${R}/project-2-interior.webp`],
    blurb:
      "A clean, contemporary residence for a tech executive couple. Minimal throughout — long spans of concrete, glass and natural stone — around a landscaped courtyard that brings light and air into every room.",
  },
  {
    slug: "poolside-villa",
    title: "Villa with Infinity Pool — Kokapet",
    location: "Kokapet, Hyderabad",
    services: ["Architecture", "Construction", "Landscaping"],
    year: "2025",
    area: "6,000 sqft",
    image: `${R}/arch-exterior-4.webp`,
    subs: [`${R}/landscape-3.webp`, `${R}/landscape-4.webp`, `${R}/project-2-exterior.webp`],
    blurb:
      "Six thousand square feet planned around its infinity pool, with the architecture, the build and the landscape all drawn and delivered by the same team.",
  },
  {
    slug: "hitech-commercial",
    title: "Commercial Tower — Hi-Tech City",
    location: "Hi-Tech City, Hyderabad",
    services: ["Architecture", "Construction"],
    year: "2023",
    area: "18,000 sqft",
    image: `${R}/arch-commercial-tower.webp`,
    subs: [`${R}/arch-commercial-2.webp`, `${R}/project-3-exterior.webp`, `${R}/project-3-site.webp`],
    blurb:
      "Eighteen thousand square feet of commercial space taken from first concept through structure, approvals and handover.",
  },
  {
    slug: "courtyard-villa",
    title: "Private Courtyard Villa",
    location: "Nanakramguda, Hyderabad",
    services: ["Architecture", "Landscaping"],
    year: "2024",
    area: "3,200 sqft",
    image: `${R}/project-1-exterior.webp`,
    subs: [`${R}/project-2-detail.webp`, `${R}/project-3-interior.webp`],
    blurb:
      "A residence planned around a central courtyard, with the landscape drawn alongside the architecture rather than added to it afterwards.",
  },
  {
    slug: "kondapur-apartment",
    title: "Premium Apartment — Kondapur",
    location: "Kondapur, Hyderabad",
    services: ["Interior Design"],
    year: "2024",
    area: "2,100 sqft",
    image: `${R}/interior-tv-wall.webp`,
    subs: [`${R}/interior-room-2.webp`, `${R}/interior-room-3.webp`, `${R}/interior-living.webp`],
    blurb:
      "An apartment fitted out end to end — joinery, lighting, stone and soft furnishing all specified during design rather than after handover.",
  },
  {
    slug: "children-suite",
    title: "Family Residence — Manikonda",
    location: "Manikonda, Hyderabad",
    services: ["Interior Design"],
    year: "2025",
    area: "2,800 sqft",
    image: `${R}/interior-kids-2.webp`,
    subs: [`${R}/interior-kids-1.webp`, `${R}/interior-material-board.webp`],
    blurb:
      "Interiors planned room by room around how the family actually lives, down to the children's study and storage.",
  },
];
