// Single source of truth for the production URL. Change here if the domain differs.
export const SITE_URL = "https://webloomevents.com";
export const SITE_NAME = "We Bloom Events";

// WhatsApp business number in international format, digits only (no +).
export const WHATSAPP_NUMBER = "34624667927";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
