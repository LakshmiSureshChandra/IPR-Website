import type { Metadata } from "next";
import SplitText from "@/components/anim/SplitText";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import ProjectsList from "@/components/ProjectsList";
import Reveal from "@/components/Reveal";
import SectionCurve from "@/components/SectionCurve";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Villas, apartments, interiors and landscape work by IPR Architects in Hyderabad. Filter by architecture, construction, interior design or landscaping.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-paper pb-14 pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <p className="eyebrow mb-6 text-accent-ink">Projects</p>
              <SplitText
                as="h1"
                text="Our projects"
                className="display-wide"
                style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)" }}
              />
            </div>
            <p className="max-w-xl text-base leading-[1.85] text-muted-foreground lg:pt-3">
              Architecture, interiors and landscape work from our studio. Use
              the filters to see one service at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="bg-paper pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ProjectsList />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-paper-2 py-24 text-center">
        <SectionCurve fill="text-paper-2" />
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <SplitText
              as="h2"
              text="Have a project in mind?"
              className="display-wide"
              style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}
            />
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Send us a message and tell us what you want to build.
            </p>
            <div className="mt-10">
              <CTAButton source="projects" label="Message us" size="lg" />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
