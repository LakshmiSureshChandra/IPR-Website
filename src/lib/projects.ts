export interface Project {
  slug: string;
  title: string;
  location: string;
  type: string;
  services: string[];
  year: string;
  area: string;
  heroImage: string;
  images: { src: string; alt: string }[];
  description: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "jubilee-hills-villa",
    title: "Luxury Villa — Jubilee Hills",
    location: "Jubilee Hills, Hyderabad",
    type: "Residential",
    services: ["Architecture", "Construction", "Interior Design"],
    year: "2025",
    area: "5,200 sqft",
    heroImage: "/images/renders/arch-exterior-2.webp",
    images: [
      { src: "/images/renders/arch-exterior-2.webp", alt: "Jubilee Hills villa exterior" },
      { src: "/images/renders/interior-living-2.webp", alt: "Villa living room interior" },
      { src: "/images/renders/project-2-detail.webp", alt: "Kitchen and crockery unit detail" },
      { src: "/images/renders/interior-master-bedroom.webp", alt: "Master bedroom" },
      { src: "/images/renders/interior-room-2.webp", alt: "Living area" },
      { src: "/images/renders/interior-drawing-room.webp", alt: "Drawing room" },
    ],
    description: "A sprawling 5,200 sqft luxury villa in the heart of Jubilee Hills — designed for a family that demanded both grandeur and intimacy. The brief called for a home that would feel luxurious without being ostentatious, contemporary without abandoning warmth.",
    highlights: ["G+2 residential villa", "Double-height entry foyer", "Private pool and landscaped garden", "Home theatre and gym", "Smart home automation", "Vastu-compliant layout"],
  },
  {
    slug: "gachibowli-villa",
    title: "Modern Villa — Gachibowli",
    location: "Gachibowli, Hyderabad",
    type: "Residential",
    services: ["Architecture", "Landscaping"],
    year: "2024",
    area: "3,800 sqft",
    heroImage: "/images/renders/arch-exterior-3.webp",
    images: [
      { src: "/images/renders/arch-exterior-3.webp", alt: "Gachibowli villa exterior" },
      { src: "/images/renders/project-2-interior.webp", alt: "Home study and work nook" },
      { src: "/images/renders/interior-room-3.webp", alt: "Dining and pantry detail" },
      { src: "/images/renders/hero-courtyard.webp", alt: "Courtyard and landscaping" },
      { src: "/images/renders/arch-exterior-4.webp", alt: "Garden and entrance lighting" },
      { src: "/images/renders/project-3-site.webp", alt: "Landscaped entrance" },
    ],
    description: "A clean, contemporary residence in Gachibowli designed for a tech executive couple. The design language is minimal — large spans of concrete, glass, and natural stone — with a landscaped courtyard at the centre that brings light and air into every room.",
    highlights: ["Contemporary minimalist design", "Central courtyard concept", "Infinity pool", "Extensive landscaping", "100% GHMC compliant", "Energy-efficient design"],
  },
  {
    slug: "banjara-hills-residence",
    title: "Boutique Residence — Banjara Hills",
    location: "Banjara Hills, Hyderabad",
    type: "Residential",
    services: ["Architecture", "Construction", "Interior Design", "Landscaping"],
    year: "2025",
    area: "4,500 sqft",
    heroImage: "/images/renders/hero-villa-night.webp",
    images: [
      { src: "/images/renders/hero-villa-night.webp", alt: "Banjara Hills residence night view" },
      { src: "/images/renders/arch-exterior-2.webp", alt: "Exterior architecture" },
      { src: "/images/renders/interior-drawing-room.webp", alt: "Drawing room" },
      { src: "/images/renders/interior-kids-1.webp", alt: "Children's bedroom with study" },
      { src: "/images/renders/hero-courtyard.webp", alt: "Landscaped outdoor spaces" },
      { src: "/images/renders/interior-master-bedroom.webp", alt: "Master suite" },
    ],
    description: "IPR's most comprehensive commission to date — a full design-build spanning architecture, interiors, construction and landscaping for a Banjara Hills family home. Delivered in 18 months from concept to handover.",
    highlights: ["Full design-build package", "4 bedrooms + staff quarters", "Cinema room", "Rooftop terrace", "Award-winning landscaping", "Delivered in 18 months"],
  },
];
