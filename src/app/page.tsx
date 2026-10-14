import type { Metadata } from "next";

import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import SectionCurve from "@/components/SectionCurve";
import SpatialShowcase from "@/components/SpatialShowcase";
import SplitText from "@/components/anim/SplitText";
import RevealImage from "@/components/anim/RevealImage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* The four services, each shown with a project photo. */
const SERVICES = [
  {
    n: "01",
    title: "Architecture",
    desc: "Plans, elevations and the working drawings your builder needs.",
    id: "architecture",
    image: "/images/portfolio/cantilever-residence.webp",
  },
  {
    n: "02",
    title: "Construction",
    desc: "We build what we design, and run the site from foundation to handover.",
    id: "construction",
    image: "/images/portfolio/urban-residence.webp",
  },
  {
    n: "03",
    title: "Landscaping",
    desc: "Gardens, pools and courtyards planned together with the building.",
    id: "landscaping",
    image: "/images/portfolio/resort-landscape.webp",
  },
  {
    n: "04",
    title: "Interior Design",
    desc: "Furniture, joinery, lighting and finishes planned with the architecture.",
    id: "interior-design",
    image: "/images/portfolio/contemporary-salon.webp",
  },
];

const INTERIORS = [
  {
    src: "/images/portfolio/rose-salon.webp",
    alt: "Drawing room interior, Hyderabad residence",
  },
  {
    src: "/images/portfolio/classic-suite.webp",
    alt: "Master bedroom interior design",
  },
  {
    src: "/images/portfolio/executive-study.webp",
    alt: "Timber-lined executive study",
  },
  {
    src: "/images/portfolio/private-cinema.webp",
    alt: "Private cinema with leather recliners",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ArchitectFirm",
  name: "IPR Architects",
  description:
    "Design-build firm in Hyderabad doing architecture, interior design, construction and landscaping.",
  url: "https://iprarchitects.in",
  logo: "https://iprarchitects.in/images/logo/logo-gold.png",
  email: "contact@iprarchitects.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2nd Floor, Plot No 22, Nallagandla Bypass Rd, beside Cafe Coffee Day, opp. South Park Apartments",
    addressLocality: "Serilingampalle (M), Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500019",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Hyderabad" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <Hero />

      {/* Lifted above the pinned hero and pulled up over its last stretch, so
          the page is still advancing while the build sequence finishes. */}
      <div className="relative z-10 -mt-[20vh] bg-background">
        {/* This block is opaque, so its leading edge would slice straight
            across the tower. The hero's own bottom fade cannot help - that one
            is pinned to the viewport bottom, and this edge travels up past it.
            So the edge carries its own fade, riding directly above itself. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-48 h-48 bg-gradient-to-b from-transparent to-background"
        />

        {/* ── WHY CHOOSE / DISCIPLINES ────────────────────────────── */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-16 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                <div>
                  <p className="eyebrow mb-6 text-accent-ink">Services</p>
                  <SplitText
                    as="h2"
                    text="Four services, one team"
                    className="display-wide"
                    style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                  />
                </div>
                <p className="max-w-xl text-base leading-[1.85] text-muted-foreground lg:pt-3">
                  The film above shows how a project runs with us. The same
                  team draws the plans, builds the structure, lays out the
                  garden and fits out the interior.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.07}>
                  {/* Anchor targets, not links: the per-discipline pages are
                      gone, so the nav and footer scroll here instead.
                      scroll-mt clears the fixed navbar. */}
                  <div
                    id={s.id}
                    className="group h-full scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-border/80 bg-card transition-[box-shadow,transform,border-color] duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_30px_60px_-40px_rgba(17,17,16,0.35)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[1.5rem]">
                      <RevealImage
                        src={s.image}
                        alt={s.title}
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="absolute inset-0"
                        imageClassName="transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="p-7">
                      <span className="numeral text-xs tracking-[0.3em] text-accent">
                        {s.n}
                      </span>
                      <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURAL NARRATIVES ────────────────────────────── */}
        {/* The stage is full width on purpose: the side cards bleed to the
            viewport edge on a phone, so it cannot sit inside the padded
            container. The heading does, so it lines up with the sections around
            it. */}
        <section className="relative bg-paper py-24 lg:py-32">
          <SectionCurve fill="text-paper" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-14 lg:mb-16">
                <p className="eyebrow mb-6 text-accent-ink">Projects</p>
                <SplitText
                  as="h2"
                  text="Architectural narratives"
                  className="display-wide"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                />
              </div>
            </Reveal>
          </div>
          <SpatialShowcase />
        </section>

        {/* ── INTERIORS GALLERY ───────────────────────────────────── */}
        <section className="relative bg-background py-24 lg:py-32">
          <SectionCurve fill="text-background" flip />
          <SectionCurve fill="text-background" place="bottom" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-14">
                <p className="eyebrow mb-6 text-accent-ink">Interior design</p>
                <SplitText
                  as="h2"
                  text="Spatial experiences"
                  className="display-wide"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                />
              </div>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
              {INTERIORS.map((img, i) => (
                <Reveal key={img.src} delay={i * 0.06}>
                  <div
                    className={`relative w-full overflow-hidden rounded-[1.25rem] ${i % 2 === 0 ? "aspect-[4/3]" : "aspect-[4/3] lg:mt-12"}`}
                  >
                    <RevealImage
                      src={img.src}
                      alt={img.alt}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="absolute inset-0"
                      imageClassName="transition-transform duration-[1.1s] ease-out hover:scale-[1.05]"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{img.alt}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY - full-bleed garden at dusk ───────── */}
        <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-foreground">
          <RevealImage
            src="/images/portfolio/night-garden.webp"
            alt="Courtyard garden illuminated at night"
            sizes="100vw"
            className="absolute inset-0"
            hover={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
            <Reveal>
              <p
                className="max-w-3xl font-display leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.55rem, 3.1vw, 2.8rem)" }}
              >
                From the first line drawn to the final space lived in, we bring
                ideas into existence with clarity of vision and care in every
                detail.
              </p>
              <div className="mt-12">
                <CTAButton
                  source="home"
                  label="Message us"
                  variant="light"
                  icon="arrow"
                  size="lg"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── LEAD FORM ───────────────────────────────────────────── */}
        <section
          id="consult"
          className="relative bg-paper py-24 lg:py-32"
        >
          <SectionCurve fill="text-paper" flip />
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mb-12 text-center">
                <p className="eyebrow mb-6 text-accent-ink">Contact</p>
                <SplitText
                  as="h2"
                  text="Tell us what you want to build"
                  className="display-wide"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                />
                <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Send a few details about your plot or project and we will
                  reply on WhatsApp.
                </p>
              </div>
            </Reveal>
            <div className="rounded-[2rem] border border-border/80 bg-card p-8 lg:p-12">
              <LeadForm source="home" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
