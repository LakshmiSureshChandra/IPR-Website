"use client";

import { useState } from "react";
import { LeadSource, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { trackLead } from "@/components/Analytics";
import { Send, Check } from "lucide-react";
import { Input, Textarea, Select, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SERVICES = [
  "Architecture",
  "Construction",
  "Interior Design",
  "Landscaping",
  "Full Design-Build (All Services)",
  "Other / Not Sure",
];

const BUDGETS = ["Under ₹30 Lakhs", "₹30L – ₹75L", "₹75L – ₹1.5 Cr", "₹1.5 Cr – ₹3 Cr", "₹3 Cr – ₹5 Cr", "₹5 Cr+"];

interface Props {
  source: LeadSource;
  defaultService?: string;
}

export default function LeadForm({ source, defaultService }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService || "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    trackLead(form.service || source);

    const msg = encodeURIComponent(
      `Hi IPR Architects! I'd like to get in touch.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email || "—"}\n` +
        `Service: ${form.service}\n` +
        `Budget: ${form.budget || "—"}\n` +
        `Message: ${form.message || "—"}\n\n` +
        `[Source: ${source}]`
    );

    await new Promise((r) => setTimeout(r, 500));
    setStatus("sent");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  if (status === "sent") {
    return (
      <div className="border border-accent/30 bg-paper p-12 text-center">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-accent/12">
          <Check className="size-6 text-accent-ink" />
        </div>
        <h3 className="font-display text-2xl">WhatsApp is opening…</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your details are pre-filled. Send the message and our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="lf-name">Your Name *</Label>
          <Input id="lf-name" required value={form.name} onChange={set("name")} placeholder="Ravi Kumar" />
        </div>
        <div>
          <Label htmlFor="lf-phone">Phone Number *</Label>
          <Input id="lf-phone" required type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
        </div>
      </div>

      <div>
        <Label htmlFor="lf-email">Email Address</Label>
        <Input id="lf-email" type="email" value={form.email} onChange={set("email")} placeholder="ravi@email.com" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="lf-service">Service Needed *</Label>
          <Select id="lf-service" required value={form.service} onChange={set("service")}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="lf-budget">Approximate Budget</Label>
          <Select id="lf-budget" value={form.budget} onChange={set("budget")}>
            <option value="">Select budget range…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="lf-msg">Brief Message</Label>
        <Textarea
          id="lf-msg"
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us about your project — location, plot size, requirements…"
        />
      </div>

      <Button type="submit" variant="accent" size="lg" disabled={status === "sending"} className="w-full">
        {status === "sending" ? (
          "Opening WhatsApp…"
        ) : (
          <>
            <Send /> Get Free Consultation
          </>
        )}
      </Button>
    </form>
  );
}
