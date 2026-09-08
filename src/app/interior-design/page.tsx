import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Interior Design Services in Hyderabad | IPR Architects",
  description: "Luxury interior design for homes, villas and offices in Hyderabad. Bespoke furniture, custom millwork, lighting design and complete fit-out by IPR Architects. Book a free consultation today.",
  keywords: ["interior designers Hyderabad", "luxury interior design Hyderabad", "home interior Hyderabad", "villa interior design Telangana", "best interior designers Hyderabad", "office interior design Hyderabad"],
  alternates: { canonical: "/interior-design" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior Design — IPR Architects Hyderabad",
  description: "Bespoke interior design services for luxury residences, villas, and commercial spaces in Hyderabad — from concept mood boards to complete fit-out.",
  provider: { "@type": "ArchitectFirm", name: "IPR Architects", url: "https://iprarchitects.in" },
  areaServed: "Hyderabad, Telangana",
  serviceType: "Interior Design",
};

export default function InteriorDesignPage() {
  return (
    <ServiceLayout
      source="interior-design"
      hero={{
        image: "/images/renders/interior-living-2.webp",
        heading: "Interiors That\nReflect You",
        sub: "Bespoke spaces designed around how you live, entertain, and rest — not off-the-shelf catalogues.",
      }}
      intro={{
        heading: "Interior Design in Hyderabad",
        body: "Our interior design team treats each project as a blank canvas. We begin with a deep dive into your lifestyle, aesthetic preferences and functional requirements — then translate them into photorealistic 3D designs before a single item is ordered. From master suites and modular kitchens to home theatres and children's rooms, every space receives the same level of consideration.",
      }}
      features={[
        { title: "3D Mood Boards & Renders", desc: "See every room in photorealistic detail before any purchase or installation." },
        { title: "Bespoke Furniture Design", desc: "Custom millwork, beds, wardrobes and storage designed specifically for your space." },
        { title: "Material & Finish Curation", desc: "Curated selection of stone, wood, fabric, metal and glass for every surface." },
        { title: "Lighting Design", desc: "Layered ambient, task and accent lighting to transform every mood and hour." },
        { title: "Complete Fit-Out", desc: "We manage all procurement, fabrication and installation — end to end." },
        { title: "Post-Occupancy Snagging", desc: "A final walkthrough to resolve every detail before you move in." },
      ]}
      gallery={[
        { src: "/images/renders/interior-master-bedroom.webp", alt: "Luxury master bedroom interior design Hyderabad" },
        { src: "/images/renders/interior-tv-wall.webp", alt: "Custom TV feature wall interior design" },
        { src: "/images/renders/interior-living.webp", alt: "Modern living room interior Hyderabad" },
        { src: "/images/renders/interior-drawing-room.webp", alt: "Drawing room interior design" },
        { src: "/images/renders/interior-kids-1.webp", alt: "Children bedroom design Hyderabad" },
        { src: "/images/renders/interior-kids-2.webp", alt: "Kids room interior design" },
      ]}
      offerings={[
        "Space planning and furniture layout",
        "3D renders and mood boards for all rooms",
        "Custom wardrobes, beds and storage units",
        "Modular kitchen design and fit-out",
        "False ceiling design with lighting integration",
        "Flooring selection and installation co-ordination",
        "Wall cladding — stone, wood panelling, wallpapers",
        "Curtains, blinds and soft furnishings",
        "Sanitaryware and bathroom design",
        "Home theatre and AV integration",
        "Décor, art and accessory styling",
        "Complete material procurement and vendor management",
      ]}
      process={[
        { step: "01", title: "Style Discovery", desc: "We map your aesthetic preferences, lifestyle and room-by-room requirements." },
        { step: "02", title: "Concept & 3D Design", desc: "Room-by-room 3D renders shared for your feedback and approval." },
        { step: "03", title: "Material Selection", desc: "Physical material samples presented at our studio or your site." },
        { step: "04", title: "Fit-Out & Handover", desc: "We manage all fabrication, procurement and installation to the approved design." },
      ]}
      faq={[
        { q: "What is the cost of interior design in Hyderabad?", a: "Interior design costs depend on scope, finishes, and materials. A fully fitted 3BHK typically ranges from ₹15–40 Lakhs; luxury projects can go significantly higher. We provide a detailed quote after the design is finalised." },
        { q: "How long does interior design and fit-out take?", a: "Design phase takes 3–4 weeks. Fit-out for a full home typically takes 8–14 weeks depending on custom fabrication timelines." },
        { q: "Can I see my interiors in 3D before committing?", a: "Yes — we provide photorealistic 3D renders of every room. No material is ordered until you are completely happy with the design." },
        { q: "Do you design both residential and commercial interiors?", a: "Yes. We design homes, villas, apartments, offices, retail spaces and hospitality interiors across Hyderabad." },
      ]}
      schema={SCHEMA}
    />
  );
}
