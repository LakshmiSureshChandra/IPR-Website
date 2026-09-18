import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const SERVICES = [
  { label: "Architecture", href: "/architecture" },
  { label: "Construction", href: "/construction" },
  { label: "Interior Design", href: "/interior-design" },
  { label: "Landscaping", href: "/landscaping" },
];

const COMPANY = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Closing invitation — the last thing on every page is a way in. */}
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <h2 className="font-display leading-[0.98] tracking-[-0.02em]" style={{ fontSize: "clamp(2rem, 3.9vw, 3.6rem)" }}>
            Let&apos;s draw
            <br />
            <span className="italic font-normal">something worth building.</span>
          </h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" variant="light">
              <a href={getWhatsAppLink("contact")} target="_blank" rel="noopener noreferrer">
                Start a project <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-background hover:bg-white/10">
              <a href="tel:+917989072745">+91 79890 72745</a>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Image src="/images/logo/logo-gold.png" alt="IPR Architects" width={220} height={220} className="mb-6 h-16 w-auto object-contain" />
            <p className="max-w-xs text-sm leading-relaxed text-background/55">
              Hyderabad&apos;s design-build studio. Architecture, interiors, construction and landscape under one roof.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-6 text-background/45">Services</p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-background/75 transition-colors hover:text-background">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6 text-background/45">Studio</p>
            <ul className="space-y-3">
              {COMPANY.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-background/75 transition-colors hover:text-background">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-background/75 transition-colors hover:text-background">
                  Instagram <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6 text-background/45">Visit</p>
            <address className="text-sm not-italic leading-relaxed text-background/75">
              2nd Floor, Plot No 22
              <br />
              Nallagandla Bypass Rd
              <br />
              Serilingampalle, Hyderabad 500019
            </address>
            <a href="mailto:contact@iprarchitects.com" className="mt-4 block text-sm text-background/75 transition-colors hover:text-background">
              contact@iprarchitects.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 text-xs text-background/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} IPR Architects</p>
          <p>Architecture · Interiors · Landscape · Construction</p>
        </div>
      </div>
    </footer>
  );
}
