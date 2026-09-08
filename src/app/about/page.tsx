import type { Metadata } from "next";
import RevealImage from "@/components/anim/RevealImage";
import SplitText from "@/components/anim/SplitText";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About IPR Architects | Luxury Design-Build Firm in Hyderabad",
  description:
    "IPR Architects — Hyderabad's premier integrated design-build firm. 12+ years, 150+ projects, 4 disciplines under one roof. Meet the team behind the city's finest residences.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Design Excellence", desc: "Every project begins with an obsessive study of brief, site and context. Good-looking is not enough — it must be right." },
  { title: "Craft & Quality", desc: "We specify and supervise material selection and workmanship. The gap between drawing and building is where most firms fail. We close it." },
  { title: "Client Partnership", desc: "Your vision is the starting point. We challenge, refine and elevate it — but we never override it. Your home must feel like yours." },
  { title: "Honest Timelines", desc: "We don't quote timelines we can't meet. If something changes, you know first. Transparency is non-negotiable." },
];

const MILESTONES = [
  { year: "2012", event: "IPR Architects founded in Hyderabad by a team of JNTU and SPA alumni." },
  { year: "2015", event: "Expanded from architecture into full-scope interior design, adding an in-house ID studio." },
  { year: "2018", event: "Construction division launched — becoming a true end-to-end design-build firm." },
  { year: "2020", event: "Landscaping practice established. First full design-build project including all four disciplines delivered." },
  { year: "2023", event: "100th project milestone. First commercial high-rise completed in Hi-Tech City." },
  { year: "2025", event: "150+ projects completed. Team expanded with specialist structural and MEP engineers in-house." },
];

const STATS = [
  { v: "150+", l: "Projects" },
  { v: "12+", l: "Years" },
  { v: "500+", l: "Happy Clients" },
  { v: "4", l: "Disciplines" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex h-[70vh] min-h-[440px] items-end overflow-hidden bg-foreground">
        <RevealImage src="/images/renders/project-2-exterior.webp" alt="IPR Architects — Hyderabad design-build studio" sizes="100vw" className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <p className="eyebrow mb-6 text-white/70">About</p>
          <SplitText as="h1" text="Architecture as a calling, not a service" className="display-wide max-w-3xl text-white" style={{ fontSize: "clamp(1.8rem, 4.4vw, 3.6rem)" }} />
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow mb-6 text-accent-ink">Our Story</p>
                <SplitText as="h2" text="Built on one belief" className="font-display text-3xl leading-tight lg:text-[2.5rem]" />
                <div className="mt-7 space-y-5 text-base leading-[1.85] text-muted-foreground">
                  <p>
                    IPR Architects was founded in Hyderabad in 2012 by a group of architects who believed the city
                    deserved a firm with no upper limit — one that could take a client from a blank plot to a furnished,
                    landscaped home without ever passing the baton to a third party.
                  </p>
                  <p>
                    Over 12 years and 150+ projects, that belief has proved itself. Our clients — from IT executives and
                    NRIs to industrialists — return to us for their next home, and refer us to their family, because we
                    deliver what we promise.
                  </p>
                  <p>
                    Today, IPR operates four integrated practices — Architecture, Construction, Interior Design and
                    Landscaping — under one roof, each led by a specialist and co-ordinated by a single project manager
                    assigned to every client.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <div className="grid grid-cols-2 gap-px bg-border">
                  {STATS.map((s) => (
                    <div key={s.l} className="bg-background p-8 text-center">
                      <div className="numeral text-4xl text-accent-ink">{s.v}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-6 aspect-video w-full overflow-hidden">
                  <RevealImage src="/images/renders/interior-living.webp" alt="IPR Architects interior work" sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mb-14">
              <p className="eyebrow mb-6 text-accent-ink">What We Stand For</p>
              <SplitText as="h2" text="Our Values" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }} />
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <Card className="h-full bg-background">
                  <CardContent className="p-8">
                    <div className="mb-5 h-px w-8 bg-accent" />
                    <h3 className="font-display text-xl">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="mb-14">
              <p className="eyebrow mb-6 text-accent-ink">History</p>
              <SplitText as="h2" text="12 Years of Growth" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }} />
            </div>
          </Reveal>
          <div className="border-l border-border">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <div className="relative flex gap-8 pb-10 pl-8">
                  <span className="absolute -left-[3px] top-2 size-[5px] rounded-full bg-accent" />
                  <div className="numeral w-14 shrink-0 text-lg text-accent-ink">{m.year}</div>
                  <p className="pt-1 text-sm leading-relaxed text-muted-foreground">{m.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-paper py-4">
        <div className="grid grid-cols-3 gap-4 px-4">
          {[
            { src: "/images/renders/arch-exterior-3.webp", alt: "Architecture project by IPR" },
            { src: "/images/renders/interior-drawing-room.webp", alt: "Interior design project by IPR" },
            { src: "/images/renders/landscape-3.webp", alt: "Landscape design project by IPR" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] w-full overflow-hidden">
              <RevealImage src={img.src} alt={img.alt} sizes="33vw" className="absolute inset-0" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-paper-2 py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <SplitText as="h2" text="Work with us" className="display-wide text-white" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)" }} />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/65">
            Ready to build something extraordinary in Hyderabad? Let&apos;s start with a conversation.
          </p>
          <div className="mt-10">
            <CTAButton source="home" label="Get in Touch" size="lg" variant="light" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
