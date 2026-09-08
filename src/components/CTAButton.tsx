"use client";

import { getWhatsAppLink, LeadSource } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/components/Analytics";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface Props {
  source: LeadSource;
  label?: string;
  variant?: "accent" | "outline" | "light" | "ghost" | "default";
  size?: "sm" | "default" | "lg";
  icon?: "whatsapp" | "arrow" | "none";
  className?: string;
}

export default function CTAButton({
  source,
  label = "Get Free Consultation",
  variant = "accent",
  size = "default",
  icon = "whatsapp",
  className,
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={getWhatsAppLink(source)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(source)}
      >
        {icon === "whatsapp" && <MessageCircle />}
        {label}
        {icon === "arrow" && <ArrowRight />}
      </a>
    </Button>
  );
}
