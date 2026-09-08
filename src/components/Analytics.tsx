"use client";
// TODO: Replace placeholder IDs before go-live
// GA4_ID: G-XXXXXXXXXX | META_PIXEL_ID: XXXXXXXXXXXXXXXX | GOOGLE_ADS_ID: AW-XXXXXXXXXX
import Script from "next/script";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";

export default function Analytics() {
  if (!GA4_ID && !META_PIXEL_ID) return null;

  return (
    <>
      {GA4_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', { send_page_view: true });
            ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
          `}</Script>
        </>
      )}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${META_PIXEL_ID}');fbq('track','PageView');
        `}</Script>
      )}
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    fbq: (...args: unknown[]) => void;
    gtag: (...args: unknown[]) => void;
  }
}

export function trackLead(service?: string) {
  if (typeof window === "undefined") return;
  if (window.fbq) window.fbq("track", "Lead", { content_name: service || "general" });
  if (window.gtag) {
    window.gtag("event", "generate_lead", { event_category: "lead", event_label: service });
    if (GOOGLE_ADS_ID) window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/CONVERSION_LABEL` });
  }
}

export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;
  if (window.fbq) window.fbq("track", "Contact", { content_name: source });
  if (window.gtag) window.gtag("event", "whatsapp_click", { event_category: "engagement", event_label: source });
}
