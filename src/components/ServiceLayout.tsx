import RevealImage from "@/components/anim/RevealImage";
import SplitText from "@/components/anim/SplitText";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import { LeadSource } from "@/lib/whatsapp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceLayoutProps {
  source: LeadSource;
  hero: { image: string; heading: string; sub: string };
  intro: { heading: string; body: string };
  features: { title: string; desc: string }[];
  gallery: { src: string; alt: string; span?: boolean }[];
  offerings: string[];
  process?: { step: string; title: string; desc: string }[];
  faq?: { q: string; a: string }[];
  schema: object;
}

const SERVICE_LABEL: Partial<Record<LeadSource, string>> = {
  architecture: "Architecture",
  construction: "Construction",
  "interior-design": "Interior Design",
  landscaping: "Landscaping",
};

export default function ServiceLayout({
  source,
  hero,
  intro,
  features,
  gallery,
  offerings,
  process = [],
  faq = [],
  schema,
}: ServiceLayoutProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="relative flex h-[78vh] min-h-[520px] items-end overflow-hidden bg-foreground">
        <RevealImage src={hero.image} alt={hero.heading} sizes="100vw" className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
          <p className="eyebrow mb-6 text-white/70">{SERVICE_LABEL[source] ?? "Service"}</p>
          <h1 className="display-wide max-w-3xl whitespace-pre-line text-white" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            {hero.heading}
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-relaxed text-white/80">{hero.sub}</p>
          <div className="mt-10">
            <CTAButton source={source} label="Get Free Consultation" size="lg" />
          </div>
        </div>
      </section>

      {/* ── INTRO + FEATURES ── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow mb-6 text-accent-ink">Overview</p>
                <h2 className="font-display text-3xl leading-[1.25] lg:text-[2.5rem]">{intro.heading}</h2>
                <p className="mt-7 text-base leading-[1.85] text-muted-foreground">{intro.body}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <CTAButton source={source} label="Start Your Project" />
                  <CTAButton source={source} label="View Portfolio" variant="outline" icon="arrow" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.slice(0, 4).map((f) => (
                  <div key={f.title} className="rounded-[1.25rem] border border-border/80 bg-card p-7">
                    <div className="mb-4 h-px w-8 bg-accent" />
                    <h4 className="font-display text-base">{f.title}</h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mb-12">
              <p className="eyebrow mb-6 text-accent-ink">Our Work</p>
              <SplitText as="h2" text="Selected Projects" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }} />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src + i} delay={(i % 3) * 0.06}>
                <div className={`relative w-full overflow-hidden rounded-[1.25rem] ${g.span ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <RevealImage src={g.src} alt={g.alt} sizes="(max-width: 1024px) 50vw, 33vw" className="absolute inset-0" imageClassName="transition-transform duration-[1.1s] ease-out hover:scale-[1.05]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERINGS + FORM ── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="eyebrow mb-6 text-accent-ink">What&apos;s Included</p>
                <SplitText as="h2" text="Everything under one roof" className="font-display text-3xl leading-[1.25] lg:text-[2.5rem]" />
                <ul className="mt-10 divide-y divide-border border-y border-border">
                  {offerings.map((o) => (
                    <li key={o} className="flex items-start gap-4 py-4 text-sm text-muted-foreground">
                      <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="bg-paper">
                <CardContent className="p-8 lg:p-10">
                  <p className="eyebrow mb-5 text-accent-ink">Start Today</p>
                  <h3 className="mb-8 font-display text-2xl">Tell us about your project</h3>
                  <LeadForm source={source} defaultService={SERVICE_LABEL[source]} />
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      {process.length > 0 && (
        <section className="bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="mb-14">
                <p className="eyebrow mb-6 text-accent-ink">Our Process</p>
                <SplitText as="h2" text="How We Work" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }} />
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.07}>
                  <div className="h-full rounded-[1.25rem] border border-border/80 bg-card p-8">
                    <div className="numeral text-4xl text-accent/35">{p.step}</div>
                    <h4 className="mt-5 font-display text-lg">{p.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faq.length > 0 && (
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="mb-10">
                <p className="eyebrow mb-6 text-accent-ink">FAQ</p>
                <SplitText as="h2" text="Common Questions" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }} />
              </div>
            </Reveal>
            <Accordion type="single" collapsible className="border-t border-border">
              {faq.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section className="bg-paper-2 py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="eyebrow mb-6 text-accent-ink">Next step</p>
          <SplitText as="h2" text="Ready to get started?" className="display-wide" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)" }} />
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A free consultation, no obligations — just a conversation about what you want to build.
          </p>
          <div className="mt-10">
            <CTAButton source={source} label="Chat on WhatsApp" size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
