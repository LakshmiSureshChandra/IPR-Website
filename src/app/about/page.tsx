import type { Metadata } from "next";
import RevealImage from "@/components/anim/RevealImage";
import SplitText from "@/components/anim/SplitText";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import SectionCurve from "@/components/SectionCurve";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About us",
  description:
    "IPR Architects started in Hyderabad in 2020. We do architecture, construction, interior design and landscaping with one team.",
  alternates: { canonical: "/about" },
};

const STATS = [
  { v: "6", l: "Years" },
  { v: "4", l: "Services" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[70vh] min-h-[440px] items-end overflow-hidden bg-foreground">
        <RevealImage src="/images/portfolio/villa-avenue.webp" alt="A villa designed and built by IPR Architects" sizes="100vw" className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <p className="eyebrow mb-6 text-white/70">About</p>
          <SplitText as="h1" text="A design-build studio in Hyderabad" className="display-wide max-w-3xl text-white" style={{ fontSize: "clamp(1.8rem, 4.4vw, 3.6rem)" }} />
        </div>
      </section>

      {/* STORY */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow mb-6 text-accent-ink">Our story</p>
                <SplitText as="h2" text="Who we are" className="font-display text-3xl leading-tight lg:text-[2.5rem]" />
                <div className="mt-7 space-y-5 text-base leading-[1.85] text-muted-foreground">
                  <p>
                    IPR Architects was founded in Hyderabad in 2020. We design, build, furnish and landscape homes and
                    commercial buildings.
                  </p>
                  <p>
                    Architecture, construction, interiors and landscaping all sit with one team, so you talk to the
                    same people from the first drawing to handover.
                  </p>
                  <p>
                    If you have a plot or an idea, send us a message on WhatsApp and we will talk it through.
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
                  <RevealImage src="/images/portfolio/garden-lounge.webp" alt="A lounge designed by IPR Architects" sizes="(max-width: 1024px) 100vw, 50vw" className="absolute inset-0" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="grid gap-4 px-4 sm:grid-cols-3">
          {[
            { src: "/images/portfolio/cantilever-residence.webp", alt: "Architecture project by IPR" },
            { src: "/images/portfolio/rose-salon.webp", alt: "Interior design project by IPR" },
            { src: "/images/portfolio/resort-landscape.webp", alt: "Landscape project by IPR" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] w-full overflow-hidden">
              <RevealImage src={img.src} alt={img.alt} sizes="(max-width: 640px) 100vw, 33vw" className="absolute inset-0" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-paper-2 py-24 text-center">
        <SectionCurve fill="text-paper-2" />
        <div className="mx-auto max-w-2xl px-6">
          <SplitText as="h2" text="Get in touch" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)" }} />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Send us your plot details or a few lines about what you want built, and we will reply on WhatsApp.
          </p>
          <div className="mt-10">
            <CTAButton source="home" label="Message us" size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
