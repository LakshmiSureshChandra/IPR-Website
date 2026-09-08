import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Landscaping Services in Hyderabad | IPR Architects",
  description: "Premium landscape design for villas, residences and commercial properties in Hyderabad. Gardens, pools, courtyards, driveways and outdoor lighting by IPR Architects.",
  keywords: ["landscaping Hyderabad", "landscape design Hyderabad", "garden design Hyderabad", "swimming pool design Hyderabad", "outdoor design Telangana", "villa landscaping Hyderabad"],
  alternates: { canonical: "/landscaping" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landscape Design — IPR Architects Hyderabad",
  description: "Premium landscape architecture for residential and commercial properties in Hyderabad — gardens, pools, courtyards, driveways and outdoor lighting.",
  provider: { "@type": "ArchitectFirm", name: "IPR Architects", url: "https://iprarchitects.in" },
  areaServed: "Hyderabad, Telangana",
  serviceType: "Landscape Design",
};

export default function LandscapingPage() {
  return (
    <ServiceLayout
      source="landscaping"
      hero={{
        image: "/images/renders/hero-courtyard.webp",
        heading: "Outdoor Spaces as\nConsidered as the Interior",
        sub: "Gardens, pools, courtyards and driveways designed with the same precision and artistry as the architecture they surround.",
      }}
      intro={{
        heading: "Landscape Design in Hyderabad",
        body: "The most extraordinary homes in Hyderabad have one thing in common: the outdoor spaces are as designed as the rooms inside. IPR's landscape team creates outdoor environments that extend your living space — from entrance driveways and formal gardens to pool decks and shaded courtyards — using plants, water, light and materials that thrive in Telangana's climate.",
      }}
      features={[
        { title: "Master Landscape Plan", desc: "A cohesive plan integrating all outdoor zones — garden, pool, parking, paths and seating." },
        { title: "Swimming Pool Design", desc: "Custom pool shapes, infinity edges, water features and deck design." },
        { title: "Plant Selection", desc: "Climate-appropriate planting plans with low-maintenance species suited to Hyderabad's conditions." },
        { title: "Outdoor Lighting", desc: "Architectural lighting that transforms the property at night — uplights, path lights, pool lighting." },
        { title: "Hardscaping", desc: "Driveways, paths, compound walls, pergolas, seating areas and paved terraces." },
        { title: "Water Features", desc: "Fountains, cascades, reflecting pools and water walls designed as landscape centrepieces." },
      ]}
      gallery={[
        { src: "/images/renders/hero-courtyard.webp", alt: "Luxury courtyard landscaping Hyderabad" },
        { src: "/images/renders/arch-exterior-3.webp", alt: "Villa pool and garden landscape design" },
        { src: "/images/renders/arch-exterior-2.webp", alt: "Outdoor pool and water feature design" },
        { src: "/images/renders/arch-exterior-4.webp", alt: "Landscape lighting and entrance steps" },
        { src: "/images/renders/project-3-site.webp", alt: "Formal garden landscape Hyderabad" },
        { src: "/images/renders/hero-villa-night.webp", alt: "Night landscape lighting — luxury villa" },
      ]}
      offerings={[
        "Master landscape plan for the full plot",
        "Swimming pool design — shape, finish, equipment",
        "Infinity pool and water feature design",
        "Formal and informal garden planting plans",
        "Driveway and entrance design",
        "Compound wall and boundary design",
        "Pergola, gazebo and outdoor seating design",
        "Outdoor kitchen and barbecue areas",
        "Lawn and turf areas",
        "Irrigation system design and installation",
        "Outdoor lighting — architectural and functional",
        "Plant procurement and soft landscaping execution",
      ]}
      process={[
        { step: "01", title: "Site Survey", desc: "We study your plot — levels, drainage, sun orientation and existing features." },
        { step: "02", title: "Concept Plan", desc: "A master landscape plan presented with 3D renders of key zones." },
        { step: "03", title: "Detail Design", desc: "Hardscaping details, plant lists, lighting drawings and irrigation plans." },
        { step: "04", title: "Execution", desc: "Phased implementation with landscaping teams co-ordinated alongside the construction schedule." },
      ]}
      faq={[
        { q: "Can landscaping be done after the house is built?", a: "Yes — though integrating landscape design early in the project allows us to plan drainage, utility runs and structural supports (like pergola footings) more efficiently." },
        { q: "What plants work well in Hyderabad's climate?", a: "We specify climate-appropriate species — bougainvillea, frangipani, areca palms, ixora, and native trees — that thrive with minimal water once established." },
        { q: "Do you design and build swimming pools?", a: "Yes. We handle pool design, structural drawings, equipment selection and execution as part of the landscape package or as a standalone commission." },
        { q: "How long does landscape design and installation take?", a: "Design typically takes 2–3 weeks. Installation (hardscaping + planting) for a standard villa plot takes 6–12 weeks depending on scope." },
      ]}
      schema={SCHEMA}
    />
  );
}
