import type { Metadata } from "next";
import SplitText from "@/components/anim/SplitText";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact IPR Architects | Free Consultation — Hyderabad",
  description:
    "Contact IPR Architects for architecture, interior design, construction and landscaping services in Hyderabad. Call, WhatsApp or fill in the form for a free consultation.",
  alternates: { canonical: "/contact" },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact IPR Architects",
  url: "https://iprarchitects.in/contact",
  mainEntity: {
    "@type": "ArchitectFirm",
    name: "IPR Architects",
    telephone: "+91-7989072745",
    email: "contact@iprarchitects.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Plot No 22, Nallagandla Bypass Rd, beside Cafe Coffee Day, opp. South Park Apartments",
      addressLocality: "Serilingampalle (M), Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500019",
      addressCountry: "IN",
    },
  },
};

const SERVICE_LINKS = [
  { label: "Architecture", source: "architecture" },
  { label: "Construction", source: "construction" },
  { label: "Interior Design", source: "interior-design" },
  { label: "Landscaping", source: "landscaping" },
] as const;

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── HEADER ── */}
      <section className="border-b border-border bg-background pb-16 pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow mb-6 text-accent-ink">Reach Out</p>
          <SplitText as="h1" text="Let's create together" className="display-wide" style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)" }} />
          <p className="mt-7 max-w-xl text-base leading-[1.85] text-muted-foreground">
            Tell us about your project — we&apos;ll respond within 24 hours with an initial assessment and next steps.
          </p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Form */}
            <div>
              <SplitText as="h2" text="Send us a message" className="mb-8 font-display text-2xl" />
              <LeadForm source="contact" />
            </div>

            {/* Details */}
            <div className="space-y-10">
              <div className="border border-[#25D366]/30 bg-[#25D366]/6 p-7">
                <h3 className="flex items-center gap-2.5 text-sm font-medium">
                  <MessageCircle className="size-4 text-[#1da851]" /> WhatsApp — fastest response
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Chat directly with our team. We typically respond within 1–2 hours during business hours.
                </p>
                <Button asChild size="sm" className="mt-6 bg-[#25D366] text-white hover:bg-[#1da851]">
                  <a href={getWhatsAppLink("contact")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="divide-y divide-border border-y border-border">
                <ContactRow icon={<Phone className="size-4 text-accent" />} label="Phone">
                  <a href="tel:+917989072745" className="transition-colors hover:text-accent-ink">
                    +91 79890 72745
                  </a>
                </ContactRow>

                <ContactRow icon={<Mail className="size-4 text-accent" />} label="Email">
                  <a href="mailto:contact@iprarchitects.com" className="transition-colors hover:text-accent-ink">
                    contact@iprarchitects.com
                  </a>
                </ContactRow>

                <ContactRow icon={<MapPin className="size-4 text-accent" />} label="Office">
                  <address className="not-italic leading-relaxed">
                    IPR Architects
                    <br />
                    2nd Floor, Plot No 22, Nallagandla Bypass Rd,
                    <br />
                    beside Cafe Coffee Day, opp. South Park Apartments,
                    <br />
                    Serilingampalle (M), Hyderabad, Telangana 500019
                  </address>
                  <a
                    href="https://maps.app.goo.gl/DWz5cCPHHdDdDEkN9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[10px] uppercase tracking-[0.22em] text-accent-ink hover:underline"
                  >
                    Get Directions →
                  </a>
                </ContactRow>

                <ContactRow icon={<Clock className="size-4 text-accent" />} label="Working Hours">
                  Monday – Saturday: 10:00 AM – 7:00 PM
                  <span className="mt-1 block text-xs text-muted-foreground">Sunday by appointment</span>
                </ContactRow>
              </div>

              <div>
                <h3 className="eyebrow mb-5 text-accent-ink">Consult for a specific service</h3>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICE_LINKS.map((s) => (
                    <Button key={s.label} asChild variant="outline" size="sm">
                      <a href={getWhatsAppLink(s.source)} target="_blank" rel="noopener noreferrer">
                        {s.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="h-96 border-t border-border">
        <iframe
          src="https://www.google.com/maps?q=2nd+Floor,+Plot+No+22,+Nallagandla+Bypass+Rd,+beside+Cafe+Coffee+Day,+opp.+South+Park+Apartments,+Serilingampalle,+Hyderabad,+Telangana+500019&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(85%) contrast(95%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IPR Architects Office — Nallagandla, Hyderabad"
        />
      </section>

      <Footer />
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-6">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>
        <div className="mb-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
