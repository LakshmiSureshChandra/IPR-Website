import type { Metadata } from "next";
import SplitText from "@/components/anim/SplitText";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import Reveal from "@/components/Reveal";
import SectionCurve from "@/components/SectionCurve";

export const metadata: Metadata = {
  title: "Portfolio — Architecture, Interiors & Construction Projects in Hyderabad | IPR Architects",
  description:
    "Explore IPR Architects' portfolio of luxury villas, residences and commercial spaces across Hyderabad — architecture, interior design, construction and landscaping, filterable by discipline.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-background pb-14 pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <p className="eyebrow mb-6 text-accent-ink">Portfolio</p>
              <SplitText
                as="h1"
                text="Every project"
                className="display-wide"
                style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)" }}
              />
            </div>
            <p className="max-w-xl text-base leading-[1.85] text-muted-foreground lg:pt-3">
              50+ delivered across Hyderabad, from intimate apartments to sprawling
              villas and commercial landmarks. Filter by the discipline you need —
              most of these ran on more than one.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ProjectsGrid />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-paper py-24 text-center">
        <SectionCurve fill="text-paper" />
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <SplitText
              as="h2"
              text="Your project could be next"
              className="display-wide"
              style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}
            />
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Share your brief and let&apos;s create something remarkable together in Hyderabad.
            </p>
            <div className="mt-10">
              <CTAButton source="projects" label="Start a Conversation" size="lg" />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
