export const WHATSAPP_NUMBER = "917989072745";

export type LeadSource =
  | "home"
  | "architecture"
  | "construction"
  | "interior-design"
  | "landscaping"
  | "projects"
  | "contact"
  | "floating-button";

const MESSAGES: Record<LeadSource, string> = {
  home:             "Hi IPR Architects! I found your website and I'm interested in your design services. Could we schedule a consultation?",
  architecture:     "Hi IPR Architects! I'm interested in Architectural Design for my project in Hyderabad. Can we discuss further?",
  construction:     "Hi IPR Architects! I'm looking for Construction services for my project. Please get in touch with me.",
  "interior-design":"Hi IPR Architects! I'm interested in Interior Design services. Looking forward to hearing from you.",
  landscaping:      "Hi IPR Architects! I'd like to explore Landscaping options for my property. Please contact me.",
  projects:         "Hi IPR Architects! I saw your portfolio and I'm impressed. I'd like to discuss a project.",
  contact:          "Hi IPR Architects! I'd like to get in touch about your services.",
  "floating-button":"Hi IPR Architects! I'm interested in your services. Can we connect?",
};

export function getWhatsAppLink(source: LeadSource): string {
  const msg = encodeURIComponent(MESSAGES[source]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
