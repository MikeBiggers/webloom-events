import type { Metadata } from "next";
import { LanguageProvider } from "../lib/LanguageContext";
import Sections from "../components/Sections";
import { SITE_URL, SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "We Bloom Events | Floristería de Bodas y Eventos en Valencia",
  description:
    "Diseño floral y decoración de eventos a medida en Valencia, España — bodas, eventos corporativos y celebraciones privadas. Un estudio boutique que cuida cada detalle a mano. Consúltanos hoy.",
  alternates: {
    canonical: "/es",
    languages: {
      "en-GB": "/",
      "es-ES": "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "We Bloom Events | Floristería de Bodas y Eventos en Valencia",
    description:
      "Diseño floral y decoración de eventos a medida en Valencia — bodas, eventos corporativos y celebraciones privadas.",
    url: `${SITE_URL}/es`,
    siteName: SITE_NAME,
    locale: "es_ES",
    alternateLocale: "en_GB",
    type: "website",
    images: [
      {
        url: "/instagram/Event1.jpg",
        alt: "Una recepción de boda al aire libre decorada por We Bloom Events en Valencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Bloom Events | Floristería de Bodas y Eventos en Valencia",
    description:
      "Diseño floral y decoración de eventos a medida en Valencia — bodas, eventos corporativos y celebraciones privadas.",
    images: ["/instagram/Event1.jpg"],
  },
};

export default function HomeEs() {
  return (
    <LanguageProvider initialLang="es">
      <Sections />
    </LanguageProvider>
  );
}
