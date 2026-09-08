import type { Metadata } from "next";
import { Archivo, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import SmoothScroll from "@/components/SmoothScroll";
import IntroAnimation from "@/components/IntroAnimation";

/* Display: high-contrast Didone. Optical sizing keeps the hairlines from
   vanishing at small sizes and lets them get dramatic at hero scale. */
const bodoni = Bodoni_Moda({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

/* Body/UI: sturdy grotesque. No hairline weights anywhere. */
const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IPR Architects | Luxury Architecture, Interiors & Construction in Hyderabad",
    template: "%s | IPR Architects Hyderabad",
  },
  description:
    "IPR Architects — Hyderabad's premier design-build firm offering end-to-end Architecture, Interior Design, Construction & Landscaping. Villas, bungalows, commercial spaces. Contact us for a free consultation.",
  keywords: [
    "architects in Hyderabad",
    "interior designers Hyderabad",
    "villa construction Hyderabad",
    "luxury home design Hyderabad",
    "architecture firm Hyderabad",
    "landscaping Hyderabad",
    "IPR Architects",
    "best architects Telangana",
    "home construction Hyderabad",
  ],
  authors: [{ name: "IPR Architects" }],
  creator: "IPR Architects",
  metadataBase: new URL("https://iprarchitects.in"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://iprarchitects.in",
    siteName: "IPR Architects",
    title: "IPR Architects | Luxury Architecture, Interiors & Construction in Hyderabad",
    description:
      "End-to-end design-build: Architecture, Interior Design, Construction & Landscaping. Hyderabad's choice for luxury residences and commercial spaces.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "IPR Architects — Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPR Architects Hyderabad",
    description: "Architecture | Interiors | Landscaping | Construction — Hyderabad",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${archivo.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <IntroAnimation />
        <Analytics />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
