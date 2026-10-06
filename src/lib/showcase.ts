export interface Slide {
  title: string;
  tag: string;
  text: string;
  services: string;
  image: string;
  focus?: string;
}

export const SLIDES: Slide[] = [
  {
    "title": "The Courtyard Villa",
    "tag": "Residence",
    "text": "A villa built around a pool, with deep roofs and open terraces.",
    "services": "Architecture \u00b7 Landscape",
    "image": "/images/portfolio/pool-pavilion.webp"
  },
  {
    "title": "Landscape",
    "tag": "Landscape",
    "text": "A garden lit for the evening, with planting, water and low lights.",
    "services": "Landscaping",
    "image": "/images/portfolio/resort-landscape.webp"
  },
  {
    "title": "Living Room",
    "tag": "Interior",
    "text": "A living room in timber and stone with plenty of seating.",
    "services": "Interior Design",
    "image": "/images/portfolio/contemporary-salon.webp"
  },
  {
    "title": "Urban Architecture",
    "tag": "Architecture",
    "text": "A layered facade with shaded balconies for a city street.",
    "services": "Architecture \u00b7 Construction",
    "image": "/images/portfolio/urban-residence.webp"
  },
  {
    "title": "Lounge",
    "tag": "Interior",
    "text": "A lounge with soft fabrics and a lot of natural light.",
    "services": "Interior Design",
    "image": "/images/portfolio/sunlit-lounge.webp"
  },
  {
    "title": "The Private Cinema",
    "tag": "Interior",
    "text": "A home cinema with leather recliners and timber panelling.",
    "services": "Interior Design",
    "image": "/images/portfolio/private-cinema.webp"
  },
  {
    "title": "Bedroom",
    "tag": "Interior",
    "text": "A bedroom suite with fitted joinery and soft lighting.",
    "services": "Interior Design",
    "image": "/images/portfolio/classic-suite.webp"
  }
];
