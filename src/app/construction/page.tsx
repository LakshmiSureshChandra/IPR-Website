import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Construction Services in Hyderabad | IPR Architects",
  description: "Turnkey construction services for villas, bungalows and commercial buildings in Hyderabad. Quality construction, on-time delivery, transparent pricing. IPR Architects — trusted builders in Telangana.",
  keywords: ["construction company Hyderabad", "villa construction Hyderabad", "home builders Hyderabad", "turnkey construction Telangana", "best construction company Hyderabad", "building contractor Hyderabad"],
  alternates: { canonical: "/construction" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Turnkey Construction — IPR Architects Hyderabad",
  description: "Complete turnkey construction for residential and commercial projects in Hyderabad — from foundation to finishing, with in-house teams and transparent milestone pricing.",
  provider: { "@type": "ArchitectFirm", name: "IPR Architects", url: "https://iprarchitects.in" },
  areaServed: "Hyderabad, Telangana",
  serviceType: "Construction",
};

export default function ConstructionPage() {
  return (
    <ServiceLayout
      source="construction"
      hero={{
        image: "/images/renders/arch-exterior-2.webp",
        heading: "Built to Last.\nDelivered on Time.",
        sub: "Turnkey construction with zero compromise on quality, structural integrity, or your timeline — backed by in-house engineering and site management.",
      }}
      intro={{
        heading: "Construction Services in Hyderabad",
        body: "IPR Architects operates a fully integrated construction division — not a contractor network. Our in-house civil engineers, site supervisors and skilled trades deliver every project to the same standard as the architectural drawings that precede them. Fixed-cost contracts, milestone payments, and weekly progress reports are standard. No surprises.",
      }}
      features={[
        { title: "Turnkey Delivery", desc: "We handle everything — civil, structural, MEP, finishes — under one contract and one point of contact." },
        { title: "Fixed-Cost Contracts", desc: "Transparent itemised BOQ with no hidden escalations. Milestone-based payment schedule." },
        { title: "In-House Teams", desc: "Our own civil engineers and site supervisors — not outsourced labour — on site every day." },
        { title: "Quality Materials", desc: "Grade-A structural materials, vetted suppliers, and third-party quality inspections at key stages." },
        { title: "On-Time Track Record", desc: "95%+ on-time delivery rate across 50+ projects. Penalty clauses available in contract." },
        { title: "Progress Reporting", desc: "Weekly photo reports, milestone sign-offs, and dedicated WhatsApp project channels." },
      ]}
      gallery={[
        { src: "/images/renders/arch-exterior-2.webp", alt: "Luxury villa construction Hyderabad" },
        { src: "/images/renders/arch-exterior-4.webp", alt: "Residential construction project" },
        { src: "/images/renders/hero-villa-night.webp", alt: "Completed residence, Hyderabad" },
        { src: "/images/renders/arch-commercial-tower.webp", alt: "Commercial building construction" },
        { src: "/images/renders/arch-exterior-3.webp", alt: "Villa construction completed" },
        { src: "/images/renders/project-1-detail.webp", alt: "Construction detail and finishing" },
      ]}
      offerings={[
        "Foundation and structural works (RCC, steel)",
        "Masonry and brickwork",
        "RCC framing and slab casting",
        "Waterproofing — terrace, basement, wet areas",
        "External and internal plastering",
        "Flooring — marble, granite, vitrified, hardwood",
        "Doors, windows and glazing",
        "Electrical and plumbing works (MEP)",
        "Ceiling works — false ceilings, cornices",
        "External elevation cladding and façade works",
        "Painting — interior and exterior",
        "Compound wall and gate construction",
      ]}
      process={[
        { step: "01", title: "BOQ & Estimation", desc: "Detailed bill of quantities with material specifications and itemised costs — no ambiguity." },
        { step: "02", title: "Contract & Schedule", desc: "Fixed-cost contract signed with a milestone timeline and penalty clause." },
        { step: "03", title: "Site Execution", desc: "Our teams begin work stage-by-stage with quality checks at every milestone." },
        { step: "04", title: "Handover", desc: "Final walkthrough, punch-list resolution, and 1-year defect liability period." },
      ]}
      faq={[
        { q: "What is your cost per sqft for construction in Hyderabad?", a: "Rates vary by specification — ranging from ₹1,800/sqft (standard) to ₹3,500+/sqft (luxury finishes). We provide a detailed BOQ after understanding your requirements." },
        { q: "Do you offer fixed-price contracts?", a: "Yes. We provide fixed-cost contracts with itemised BOQs. Variations are possible only if the client requests scope changes, and these are always priced and approved in writing first." },
        { q: "How long does it take to build a 4BHK villa in Hyderabad?", a: "A typical 3,000–4,000 sqft villa takes 12–18 months from foundation to handover, depending on finishes and any regulatory delays." },
        { q: "Do you handle approvals along with construction?", a: "Yes — our architectural team handles all GHMC/HMDA approvals, and the construction team takes over seamlessly once they're in hand." },
      ]}
      schema={SCHEMA}
    />
  );
}
