import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Architecture Services in Hyderabad | IPR Architects",
  description: "Award-winning architectural design for villas, bungalows and commercial spaces in Hyderabad. GHMC/HMDA approved plans, 3D visualisation, structural drawings. Call IPR Architects today.",
  keywords: ["architects in Hyderabad", "architectural design Hyderabad", "villa architect Hyderabad", "GHMC approved architects", "luxury home design Hyderabad", "best architects Telangana"],
  alternates: { canonical: "/architecture" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Architectural Design — IPR Architects Hyderabad",
  description: "Full-scope architectural design services: concept, approvals, working drawings, and 3D visualisation for residential and commercial projects in Hyderabad.",
  provider: { "@type": "ArchitectFirm", name: "IPR Architects", url: "https://iprarchitects.in" },
  areaServed: "Hyderabad, Telangana",
  serviceType: "Architectural Design",
};

export default function ArchitecturePage() {
  return (
    <ServiceLayout
      source="architecture"
      hero={{
        image: "/images/renders/arch-commercial-tower.webp",
        heading: "Architecture That\nStands Apart",
        sub: "From bold contemporary villas to understated luxury residences — we design buildings that are as beautiful to live in as they are to look at.",
      }}
      intro={{
        heading: "Architectural Design in Hyderabad",
        body: "IPR Architects delivers end-to-end architectural services for residential and commercial projects across Hyderabad and Telangana. We handle everything from initial concept and GHMC/HMDA approvals to construction documents and site supervision — giving you one accountable partner from blank paper to finished building.",
      }}
      features={[
        { title: "Concept & Schematic Design", desc: "Vision-led concept development translated into buildable, cost-aware schemes." },
        { title: "GHMC / HMDA Approvals", desc: "We manage all regulatory submissions and approval follow-ups so you don't have to." },
        { title: "Structural Engineering", desc: "In-house structural team ensuring structural integrity and material efficiency." },
        { title: "3D Visualisation", desc: "Photorealistic renders of exteriors, elevations and key views before any work begins." },
        { title: "Site Supervision", desc: "Regular site visits and quality checks to ensure construction matches drawings." },
        { title: "Vastu Compliance", desc: "Designs that respect Vastu principles without compromising aesthetic vision." },
      ]}
      gallery={[
        { src: "/images/renders/arch-commercial-tower.webp", alt: "Commercial tower architecture Hyderabad" },
        { src: "/images/renders/arch-commercial-2.webp", alt: "Modern commercial architecture" },
        { src: "/images/renders/arch-exterior-2.webp", alt: "Contemporary villa exterior design" },
        { src: "/images/renders/arch-exterior-3.webp", alt: "Luxury residence exterior" },
        { src: "/images/renders/arch-exterior-4.webp", alt: "Villa architectural render" },
        { src: "/images/renders/project-1-exterior.webp", alt: "IPR project — residential architecture" },
      ]}
      offerings={[
        "Concept design and schematic studies",
        "Detailed architectural drawings (GA, sections, elevations)",
        "3D renders and virtual walkthroughs",
        "GHMC / HMDA / RERA submission drawings",
        "Structural design co-ordination",
        "MEP (electrical, plumbing) co-ordination",
        "Vastu-compliant planning",
        "Interior design integration",
        "Construction document sets",
        "Site supervision and quality audits",
      ]}
      process={[
        { step: "01", title: "Brief & Site Analysis", desc: "We study your plot, orientation, bye-laws and vision to set design parameters." },
        { step: "02", title: "Concept Design", desc: "2–3 design options presented as floor plans and 3D mass models." },
        { step: "03", title: "Design Development", desc: "Chosen option refined into detailed drawings, materials and elevations." },
        { step: "04", title: "Approval Drawings", desc: "GHMC/HMDA-compliant drawings submitted and tracked by our team." },
      ]}
      faq={[
        { q: "How long does the architectural design process take?", a: "Concept design typically takes 2–3 weeks. Full working drawings and approvals can take 6–10 weeks depending on plot complexity and regulatory timelines." },
        { q: "Do you handle GHMC and HMDA approvals?", a: "Yes. We prepare all regulatory drawings and manage the approval process on your behalf, including follow-ups." },
        { q: "Can I see my home in 3D before construction?", a: "Absolutely. We provide photorealistic 3D renders and virtual walkthroughs of all major spaces before finalising any drawings." },
        { q: "Do you work on both residential and commercial projects?", a: "Yes — we handle everything from individual villas and bungalows to multi-storey commercial buildings and apartment complexes." },
      ]}
      schema={SCHEMA}
    />
  );
}
