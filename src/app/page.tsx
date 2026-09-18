import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/anim/SplitText";
import RevealImage from "@/components/anim/RevealImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title:
    "IPR Architects | Luxury Architecture, Interiors & Construction in Hyderabad",
  alternates: { canonical: "/" },
};

/* The four disciplines, in the order the hero film tells them — each card is a
   still from the same sequence, so the section reads as the film continuing. */
const SERVICES = [
  {
    n: "01",
    title: "Architecture",
    desc: "Concept, approvals and working drawings — the plan that everything else is built from.",
    href: "/architecture",
    image: "/images/story/plan.webp",
  },
  {
    n: "02",
    title: "Construction",
    desc: "Turnkey delivery with in-house engineering, fixed-cost contracts and on-time handover.",
    href: "/construction",
    image: "/images/story/structure.webp",
  },
  {
    n: "03",
    title: "Landscaping",
    desc: "Pool, terrace, garden and boulder — the site composed with the same rigour as the building.",
    href: "/landscaping",
    image: "/images/story/tower.webp",
  },
  {
    n: "04",
    title: "Interior Design",
    desc: "Joinery, stone and light — every surface specified before the first wall goes up.",
    href: "/interior-design",
    image: "/images/story/interior.webp",
  },
];

/* Each card sits a little lower than the last — a cascade across the row. */
const PROJECT_STEP = ["", "lg:mt-6", "lg:mt-12", "lg:mt-[4.5rem]"];

const APPROACH_STATS = [
  { value: "18", label: "Months, concept to keys" },
  { value: "4", label: "Disciplines, one team" },
  { value: "24/7", label: "Project manager access" },
];

const PROJECTS = [
  {
    title: "Villa — Jubilee Hills",
    type: "Design · Build · Interiors",
    image: "/images/renders/arch-exterior-2.webp",
    slug: "jubilee-hills-villa",
  },
  {
    title: "Villa — Gachibowli",
    type: "Architecture · Landscape",
    image: "/images/renders/arch-exterior-3.webp",
    slug: "gachibowli-villa",
  },
  {
    title: "Residence — Banjara Hills",
    type: "Full Design-Build",
    image: "/images/renders/hero-villa-night.webp",
    slug: "banjara-hills-residence",
  },
];

const INTERIORS = [
  {
    src: "/images/renders/interior-drawing-room.webp",
    alt: "Drawing room interior, Hyderabad residence",
  },
  {
    src: "/images/renders/project-2-exterior.webp",
    alt: "Master bedroom interior design",
  },
  {
    src: "/images/renders/interior-room-3.webp",
    alt: "Dining and pantry design",
  },
  {
    src: "/images/renders/project-2-interior.webp",
    alt: "Home study and work nook",
  },
];

const TESTIMONIALS = [
  {
    name: "Venkata Reddy",
    project: "Villa, Jubilee Hills",
    text: "The renders matched the finished home exactly — no surprises. The detail is extraordinary.",
  },
  {
    name: "Priya Sharma",
    project: "Interiors, Gachibowli",
    text: "From concept to keys, effortless. Friends can't believe we live in a house this beautiful.",
  },
  {
    name: "Rajesh Patel",
    project: "Office, Hi-Tech City",
    text: "Worth every rupee. They genuinely over-delivered, and on time.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ArchitectFirm",
  name: "IPR Architects",
  description:
    "Hyderabad's premier design-build firm — Architecture, Interior Design, Construction, Landscaping.",
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
            across the tower. The hero's own bottom fade cannot help — that one
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
                  <p className="eyebrow mb-6 text-accent-ink">Drawing to Door</p>
                  <SplitText
                    as="h2"
                    text="One studio, four disciplines"
                    className="display-wide"
                    style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                  />
                </div>
                <p className="max-w-xl text-base leading-[1.85] text-muted-foreground lg:pt-3">
                  The film above is how every IPR project actually runs — the
                  same team draws the plan, pours the frame, plants the garden
                  and fits the joinery. Nothing is handed off.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, i) => (
                <Reveal key={s.href} delay={i * 0.07}>
                  <Link
                    href={s.href}
                    className="group block h-full overflow-hidden rounded-[1.5rem] border border-border/80 bg-card transition-[box-shadow,transform,border-color] duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_30px_60px_-40px_rgba(17,17,16,0.35)]"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[1.5rem]">
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
                      <h3 className="mt-3 font-display text-xl transition-colors group-hover:text-accent-ink">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                        Explore <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── WELCOME ─────────────────────────────────────────────── */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                <div>
                  <p className="eyebrow mb-6 text-accent-ink">Welcome</p>
                  <SplitText
                    as="h2"
                    text="Welcome to IPR Architects"
                    className="display-wide text-foreground"
                    style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.9rem)" }}
                  />
                </div>
                <div className="space-y-6 lg:pt-4">
                  <p className="text-base leading-[1.85] text-muted-foreground">
                    For six years we have designed and built in Hyderabad —
                    high-rise residences, private villas and commercial
                    landmarks — for clients who wanted one firm to answer for
                    all of it. Architecture, structure, interiors and landscape
                    are drawn by the same studio, priced by the same team and
                    delivered by the same project manager.
                  </p>
                  <p className="text-base leading-[1.85] text-muted-foreground">
                    Nothing gets handed off. Nothing gets lost between the
                    drawing and the wall.
                  </p>
                  <Button asChild variant="ghost" className="px-0">
                    <Link href="/about">
                      Our Story <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mt-16 aspect-[16/7] w-full overflow-hidden rounded-[2rem] lg:mt-20">
                <RevealImage
                  src="/images/renders/hero-courtyard.webp"
                  alt="IPR Architects — landscaped residential entrance in Hyderabad"
                  sizes="100vw"
                  className="absolute inset-0"
                  imageClassName=""
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── APPROACH ────────────────────────────────────────────── */}
        {/* No photograph here on purpose. The only render that fitted the slot
            was a cool grey-and-mustard interior that fought the warm travertine
            palette everywhere else, and this sits between a full-width image
            above and four project cards below — the page can afford one quiet
            beat. The numerals carry it instead. */}
        <section className="bg-foreground py-24 text-background lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                <div>
                  <p className="eyebrow mb-6 text-background/55">Our Approach</p>
                  <SplitText
                    as="h2"
                    text="Beyond a building"
                    className="display-wide"
                    style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                  />
                </div>
                <p className="max-w-xl text-base leading-[1.85] text-background/65 lg:pt-3">
                  Most firms hand you off — architect to contractor to
                  decorator, each one blaming the last. We keep every discipline
                  in the building, so the person who drew your elevation is the
                  person who signs off on the finish that lands on it.
                </p>
              </div>
            </Reveal>

            {/* Warm white, not the bronze accent: at 7d6a4f on near-black it
                went muddy rather than gold. */}
            <Reveal delay={0.1}>
              <div className="mt-16 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 lg:mt-20">
                {APPROACH_STATS.map((s) => (
                  <div key={s.label} className="px-4 py-8 first:pl-0 lg:px-9 lg:py-11">
                    <div className="numeral text-4xl lg:text-6xl">{s.value}</div>
                    <div className="mt-3 text-[10px] uppercase leading-relaxed tracking-[0.2em] text-background/45">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SIGNATURE PROJECTS ──────────────────────────────────── */}
        <section className="bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                <div>
                  <p className="eyebrow mb-6 text-accent-ink">Selected Work</p>
                  <SplitText
                    as="h2"
                    text="Signature Projects"
                    className="display-wide"
                    style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                  />
                </div>
                <p className="max-w-xl text-base leading-[1.85] text-muted-foreground lg:pt-3">
                  Three homes drawn, engineered, built and furnished end to end.
                  Each one was handed over by the same team that put the first
                  line on paper.
                </p>
              </div>
            </Reveal>

            {/* Four across, so the cards sit at the same scale as the interiors
                strip below. That section zigzags; this one steps down instead,
                so the two read as different compositions rather than one
                repeated twice. */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.07}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`group block ${PROJECT_STEP[i]}`}
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-background">
                      <RevealImage
                        src={p.image}
                        alt={p.title}
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="absolute inset-0"
                        imageClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 pt-14">
                        {/* The discipline list cannot fit a half-width phone
                            card without being clipped, and a pill that wraps to
                            three lines looks worse than none. The title carries
                            it there. */}
                        <Badge
                          variant="light"
                          className="mb-2.5 hidden text-[9px] tracking-[0.12em] sm:inline-flex"
                        >
                          {p.type}
                        </Badge>
                        <h3 className="font-display text-base leading-snug text-white">
                          {p.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}

              {/* Only three projects have case studies, so the fourth cell is
                  the way through to the rest rather than a card that 404s. It
                  also replaces the button that used to sit in the header. */}
              <Reveal delay={0.21}>
                <Link href="/projects" className="group block lg:mt-[4.5rem]">
                  <div className="flex aspect-[4/5] w-full flex-col justify-between rounded-[1.25rem] border border-border bg-background p-5 transition-colors duration-500 group-hover:border-foreground/25">
                    <span>
                      <span className="numeral block text-4xl text-accent">50+</span>
                      <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Projects delivered
                      </span>
                    </span>
                    <span>
                      <span className="block font-display text-base leading-snug">
                        Every project, in one place
                      </span>
                      <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium">
                        All projects
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── INTERIORS GALLERY ───────────────────────────────────── */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                <div>
                  <p className="eyebrow mb-6 text-accent-ink">Inside</p>
                  <SplitText
                    as="h2"
                    text="Interiors, Resolved"
                    className="display-wide"
                    style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                  />
                </div>
                <p className="max-w-xl text-base leading-[1.85] text-muted-foreground lg:pt-3">
                  Joinery, lighting, stone and soft furnishing specified during
                  design — not after handover. Every material you see was
                  selected, costed and approved before the first wall went up.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {INTERIORS.map((img, i) => (
                <Reveal key={img.src} delay={i * 0.06}>
                  <div
                    className={`relative w-full overflow-hidden rounded-[1.25rem] ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] lg:mt-10"}`}
                  >
                    <RevealImage
                      src={img.src}
                      alt={img.alt}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="absolute inset-0"
                      imageClassName="transition-transform duration-[1.1s] ease-out hover:scale-[1.05]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY — full-bleed still from the hero film ───────── */}
        <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-foreground">
          <RevealImage
            src="/images/story/balcony.webp"
            alt="Balcony of the lakeside residence — travertine, bronze and glass"
            sizes="100vw"
            className="absolute inset-0"
            hover={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
            <Reveal>
              <p className="eyebrow mb-9 text-accent">The IPR Difference</p>
              <p
                className="max-w-3xl font-display leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.7rem, 3.8vw, 3.4rem)" }}
              >
                One team, one vision, one accountable partner — from the first
                <span className="italic"> line on paper </span>
                to the last light switch.
              </p>
              <div className="mt-12">
                <CTAButton
                  source="home"
                  label="Talk to Our Architects"
                  variant="light"
                  icon="arrow"
                  size="lg"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────────── */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-14 text-center">
                <p className="eyebrow mb-6 text-accent-ink">Clients</p>
                <SplitText
                  as="h2"
                  text="Trusted by fifty families"
                  className="display-wide"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                />
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="mb-5 text-xs tracking-[0.3em] text-accent">
                        ★★★★★
                      </div>
                      <p className="font-display text-lg leading-relaxed">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="mt-7 border-t border-border pt-5">
                        <div className="text-sm font-medium">{t.name}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {t.project}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEAD FORM ───────────────────────────────────────────── */}
        <section
          id="consult"
          className="border-t border-border bg-paper py-24 lg:py-32"
        >
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mb-12 text-center">
                <p className="eyebrow mb-6 text-accent-ink">Begin</p>
                <SplitText
                  as="h2"
                  text="Tell us what you want to build"
                  className="display-wide"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                />
                <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Share your brief — we respond within 24 hours. No commitment,
                  just a conversation about your vision.
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
