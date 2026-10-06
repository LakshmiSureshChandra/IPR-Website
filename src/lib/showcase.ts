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
    "text": "Water, stone and deep shaded terraces, composed as one continuous living space.",
    "services": "Architecture \u00b7 Landscape",
    "image": "/images/portfolio/pool-pavilion.webp"
  },
  {
    "title": "Gardens After Hours",
    "tag": "Landscape",
    "text": "A garden that comes alive at dusk, with layers of planting, water and warm light.",
    "services": "Landscaping",
    "image": "/images/portfolio/resort-landscape.webp"
  },
  {
    "title": "The Art of Living",
    "tag": "Interior",
    "text": "Warm timber and richly textured stone frame a generous, contemporary salon.",
    "services": "Interior Design",
    "image": "/images/portfolio/contemporary-salon.webp"
  },
  {
    "title": "Urban Architecture",
    "tag": "Architecture",
    "text": "Shaded balconies and a layered facade bring a human scale to the city.",
    "services": "Architecture \u00b7 Construction",
    "image": "/images/portfolio/urban-residence.webp"
  },
  {
    "title": "Light & Softness",
    "tag": "Interior",
    "text": "Natural light, tactile fabrics and a quiet palette make room for everyday life.",
    "services": "Interior Design",
    "image": "/images/portfolio/sunlit-lounge.webp"
  },
  {
    "title": "The Private Cinema",
    "tag": "Interior",
    "text": "An intimate cinema in timber and leather, with every light carefully placed.",
    "services": "Interior Design",
    "image": "/images/portfolio/private-cinema.webp"
  },
  {
    "title": "Private Retreats",
    "tag": "Interior",
    "text": "A restful suite with tailored joinery, warm finishes and soft, layered light.",
    "services": "Interior Design",
    "image": "/images/portfolio/classic-suite.webp"
  }
];
