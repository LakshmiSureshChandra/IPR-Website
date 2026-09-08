"use client";

import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/components/Analytics";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink("floating-button")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating-button")}
      aria-label="Chat with IPR Architects on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center rounded-full border border-white/10 bg-foreground text-background shadow-[0_18px_50px_-20px_rgba(17,17,16,0.7)] transition-transform duration-300 hover:scale-[1.04]"
    >
      <span className="flex size-14 items-center justify-center">
        <MessageCircle className="size-6 text-[#25D366]" />
      </span>
      <span className="hidden items-center whitespace-nowrap pr-6 text-[13px] font-medium group-hover:flex">
        Chat on WhatsApp
      </span>
    </a>
  );
}
