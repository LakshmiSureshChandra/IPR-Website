import type { Metadata } from "next";
import RevealImage from "@/components/anim/RevealImage";
import SplitText from "@/components/anim/SplitText";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio — Architecture, Interiors & Construction Projects in Hyderabad | IPR Architects",
  description:
    "Explore IPR Architects' portfolio of luxury villas, residences and commercial spaces across Hyderabad. Architecture, interior design, construction and landscaping case studies.",
  alternates: { canonical: "/projects" },
};

type Listing = {
  slug: string;
  title: string;
  location: string;
  services: string[];
  year: string;
  area: string;
  heroImage: string;
};

const ALL_PROJECTS: Listing[] = [
  ...PROJECTS,
  { slug: "kondapur-apartment", title: "Premium Apartment — Kondapur", location: "Kondapur, Hyderabad", services: ["Interior Design"], year: "2024", area: "2,100 sqft", heroImage: "/images/renders/interior-tv-wall.webp" },
  { slug: "hitech-commercial", title: "Commercial Tower — Hi-Tech City", location: "Hi-Tech City, Hyderabad", services: ["Architecture", "Construction"], year: "2023", area: "18,000 sqft", heroImage: "/images/renders/arch-commercial-tower.webp" },
  { slug: "courtyard-villa", title: "Private Courtyard Villa", location: "Nanakramguda, Hyderabad", services: ["Architecture", "Landscaping"], year: "2024", area: "3,200 sqft", heroImage: "/images/renders/hero-courtyard.webp" },
  { slug: "children-suite", title: "Family Residence — Manikonda", location: "Manikonda, Hyderabad", services: ["Interior Design"], year: "2025", area: "2,800 sqft", heroImage: "/images/renders/interior-kids-2.webp" },
  { slug: "poolside-villa", title: "Villa with Infinity Pool — Kokapet", location: "Kokapet, Hyderabad", services: ["Architecture", "Construction", "Landscaping"], year: "2025", area: "6,000 sqft", heroImage: "/images/renders/arch-exterior-3.webp" },
];

const HAS_CASE_STUDY = new Set(PROJECTS.map((p) => p.slug));

export default function ProjectsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="border-b border-border bg-background pb-16 pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow mb-6 text-accent-ink">Portfolio</p>
          <SplitText as="h1" text="Signature Projects" className="display-wide" style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)" }} />
          <p className="mt-7 max-w-xl text-base leading-[1.85] text-muted-foreground">
            50+ projects delivered across Hyderabad — from intimate apartments to sprawling villas and commercial
            landmarks.
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ALL_PROJECTS.map((p, i) => {
              const card = <ProjectCard project={p} large={i === 0} />;
              return (
                <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                  <div className={i === 0 ? "md:col-span-2" : ""}>
                    {HAS_CASE_STUDY.has(p.slug) ? (
                      <Link href={`/projects/${p.slug}`} className="block">{card}</Link>
                    ) : (
                      card
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-paper py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <SplitText as="h2" text="Your project could be next" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }} />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Share your brief and let&apos;s create something remarkable together in Hyderabad.
          </p>
          <div className="mt-10">
            <CTAButton source="projects" label="Start a Conversation" size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ProjectCard({ project: p, large }: { project: Listing; large?: boolean }) {
  return (
    <div className="group">
      <div className={`relative w-full overflow-hidden bg-paper ${large ? "aspect-video" : "aspect-[4/3]"}`}>
        <RevealImage src={p.heroImage} alt={p.title} sizes={large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} className="absolute inset-0" imageClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]" />
      </div>
      <div className="pt-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {p.services.map((s) => (
            <Badge key={s} variant="accent">{s}</Badge>
          ))}
        </div>
        <h3 className="font-display text-xl transition-colors group-hover:text-accent-ink">{p.title}</h3>
        <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {p.location} · {p.year} · {p.area}
        </p>
      </div>
    </div>
  );
}
