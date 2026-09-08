import type { Metadata } from "next";
import RevealImage from "@/components/anim/RevealImage";
import SplitText from "@/components/anim/SplitText";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/projects";

// ponytail: one route replaces three near-identical page files
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | IPR Architects Portfolio`,
    description: `Case study: ${project.description.slice(0, 150)}… View renders, design details and project highlights.`,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const details = [
    { label: "Location", value: project.location },
    { label: "Type", value: project.type },
    { label: "Area", value: project.area },
    { label: "Year", value: project.year },
    { label: "Services", value: project.services.join(", ") },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex h-[78vh] min-h-[520px] items-end overflow-hidden bg-foreground">
        <RevealImage src={project.heroImage} alt={project.title} sizes="100vw" className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-3" /> Back to Projects
          </Link>
          <div className="mb-5 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <Badge key={s} variant="light">{s}</Badge>
            ))}
          </div>
          <h1 className="display-wide max-w-3xl text-white" style={{ fontSize: "clamp(1.8rem, 4.4vw, 3.6rem)" }}>
            {project.title}
          </h1>
          <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-white/65">
            {project.location} · {project.year} · {project.area}
          </p>
        </div>
      </section>

      {/* ── BRIEF ── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-3 lg:gap-20 lg:px-10">
          <Reveal>
            <div className="lg:col-span-2">
              <p className="eyebrow mb-6 text-accent-ink">Project Brief</p>
              <SplitText as="h2" text="The Vision" className="font-display text-3xl leading-tight lg:text-[2.5rem]" />
              <p className="mt-7 text-base leading-[1.85] text-muted-foreground">{project.description}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-fit border border-border bg-paper p-8">
              <p className="eyebrow mb-6 text-accent-ink">Details</p>
              {details.map((d) => (
                <div key={d.label} className="flex justify-between gap-6 border-b border-border py-3.5 last:border-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{d.label}</span>
                  <span className="max-w-[60%] text-right text-xs">{d.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mb-12">
              <p className="eyebrow mb-6 text-accent-ink">The Work</p>
              <SplitText as="h2" text="Project Gallery" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }} />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {project.images.map((img, i) => (
              <Reveal key={img.src + i} delay={(i % 3) * 0.06}>
                <div className={`relative w-full overflow-hidden ${i === 0 ? "col-span-2 aspect-video" : "aspect-[4/3]"}`}>
                  <RevealImage src={img.src} alt={img.alt} sizes="(max-width: 1024px) 50vw, 33vw" className="absolute inset-0" imageClassName="transition-transform duration-[1.1s] ease-out hover:scale-[1.05]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow mb-6 text-accent-ink">Key Features</p>
                <SplitText as="h2" text="Project Highlights" className="font-display text-3xl leading-tight lg:text-[2.5rem]" />
                <ul className="mt-10 divide-y divide-border border-y border-border">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-4 py-4 text-sm text-muted-foreground">
                      <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <RevealImage src={project.images[1]?.src || project.heroImage} alt={project.title} sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-paper-2 py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <SplitText as="h2" text="Have a project in mind?" className="display-wide text-white" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)" }} />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/65">
            Tell us about your vision and we&apos;ll design something extraordinary together.
          </p>
          <div className="mt-10">
            <CTAButton source="projects" label="Discuss Your Project" size="lg" variant="light" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
