"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/components/Analytics";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/* Three links is the whole site. The disciplines used to sit behind an "Our
   Craft" dropdown; with no page of their own to open, a menu that only scrolled
   the home page was not worth the weight. The footer still links to them. */
const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const linkClass =
  "text-[13px] font-medium tracking-[0.01em] text-foreground/70 outline-none transition-colors duration-200 hover:text-foreground focus-visible:text-foreground";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // The home hero is light footage, so only the bar background changes here —
  // type and logo keep their normal dark treatment over it.
  const atHomeTop = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6 lg:pt-5">
      {/* Floating capsule. Transparent over the hero, then a frosted pill once
          the page is moving — the bar never spans edge to edge. */}
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 transition-[background-color,border-color,box-shadow,height,backdrop-filter] duration-500 lg:px-7",
          atHomeTop
            ? "h-20 border border-transparent bg-transparent"
            : "h-16 border border-foreground/[0.07] bg-background/75 shadow-[0_18px_50px_-30px_rgba(17,17,16,0.45)] backdrop-blur-xl"
        )}
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label="IPR Architects — home">
          {/* The monogram art is square (1087x1087) with ~14% transparent
              padding top and bottom, so the declared box must be square too —
              a wordmark aspect here squashes it. */}
          <Image
            src="/images/logo/logo-gold.png"
            alt="IPR Architects"
            width={220}
            height={220}
            priority
            className={cn("w-auto object-contain transition-[height] duration-500", atHomeTop ? "h-16" : "h-12")}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(linkClass, pathname === l.href && "text-foreground")}
            >
              {l.label}
            </Link>
          ))}

          <Button asChild size="sm">
            <a
              href={getWhatsAppLink("home")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("navbar")}
            >
              Start a project <ArrowRight />
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-0">
            <SheetTitle className="sr-only">Menu</SheetTitle>

            <div className="border-b border-border px-6 py-6">
              <Image src="/images/logo/logo-gold.png" alt="IPR Architects" width={220} height={220} className="h-12 w-auto object-contain" />
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-px">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <Link href={l.href} className="block border-b border-border py-4 font-display text-2xl">
                        {l.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border px-6 py-6">
              <Button asChild className="w-full">
                <a
                  href={getWhatsAppLink("home")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { trackWhatsAppClick("navbar-mobile"); setMobileOpen(false); }}
                >
                  Start a project <ArrowRight />
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
