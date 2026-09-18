/**
 * Every project the studio shows, in one list.
 *
 * There are no per-project pages any more, so this carries only what a card in
 * the portfolio grid displays. `services` drives the filter on /projects, and
 * its values must match SERVICE_FILTERS there.
 */
export interface Project {
  slug: string;
  title: string;
  location: string;
  services: string[];
  year: string;
  area: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "jubilee-hills-villa",
    title: "Luxury Villa — Jubilee Hills",
    location: "Jubilee Hills, Hyderabad",
    services: ["Architecture", "Construction", "Interior Design"],
    year: "2025",
    area: "5,200 sqft",
    image: "/images/renders/arch-exterior-2.webp",
  },
  {
    slug: "banjara-hills-residence",
    title: "Boutique Residence — Banjara Hills",
    location: "Banjara Hills, Hyderabad",
    services: ["Architecture", "Construction", "Interior Design", "Landscaping"],
    year: "2025",
    area: "4,500 sqft",
    image: "/images/renders/hero-villa-night.webp",
  },
  {
    slug: "gachibowli-villa",
    title: "Modern Villa — Gachibowli",
    location: "Gachibowli, Hyderabad",
    services: ["Architecture", "Landscaping"],
    year: "2024",
    area: "3,800 sqft",
    image: "/images/renders/arch-exterior-3.webp",
  },
  {
    slug: "poolside-villa",
    title: "Villa with Infinity Pool — Kokapet",
    location: "Kokapet, Hyderabad",
    services: ["Architecture", "Construction", "Landscaping"],
    year: "2025",
    area: "6,000 sqft",
    image: "/images/renders/arch-exterior-4.webp",
  },
  {
    slug: "hitech-commercial",
    title: "Commercial Tower — Hi-Tech City",
    location: "Hi-Tech City, Hyderabad",
    services: ["Architecture", "Construction"],
    year: "2023",
    area: "18,000 sqft",
    image: "/images/renders/arch-commercial-tower.webp",
  },
  {
    slug: "courtyard-villa",
    title: "Private Courtyard Villa",
    location: "Nanakramguda, Hyderabad",
    services: ["Architecture", "Landscaping"],
    year: "2024",
    area: "3,200 sqft",
    image: "/images/renders/hero-courtyard.webp",
  },
  {
    slug: "kondapur-apartment",
    title: "Premium Apartment — Kondapur",
    location: "Kondapur, Hyderabad",
    services: ["Interior Design"],
    year: "2024",
    area: "2,100 sqft",
    image: "/images/renders/interior-tv-wall.webp",
  },
  {
    slug: "children-suite",
    title: "Family Residence — Manikonda",
    location: "Manikonda, Hyderabad",
    services: ["Interior Design"],
    year: "2025",
    area: "2,800 sqft",
    image: "/images/renders/interior-kids-2.webp",
  },
];
