import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SITE_URL, SITE_NAME } from "./lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "We Bloom Events | Wedding & Event Florist in Valencia",
  description:
    "Bespoke floral design and event decoration in Valencia, Spain — weddings, corporate events, and private celebrations. A boutique studio crafting every detail by hand. Enquire today.",
  keywords: [
    "wedding florist Valencia",
    "event decoration Valencia",
    "floristería bodas Valencia",
    "decoración de eventos Valencia",
    "wedding flowers Spain",
    "corporate event styling Valencia",
    "We Bloom Events",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "We Bloom Events | Wedding & Event Florist in Valencia",
    description:
      "Bespoke floral design and event decoration in Valencia — weddings, corporate events, and private celebrations.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    alternateLocale: "es_ES",
    type: "website",
    images: [
      {
        // TODO: replace with a dedicated 1200×630 share image when available
        url: "/instagram/Event1.jpg",
        alt: "An outdoor wedding reception with fairy lights styled by We Bloom Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Bloom Events | Wedding & Event Florist in Valencia",
    description:
      "Bespoke floral design and event decoration in Valencia — weddings, corporate events, and private celebrations.",
    images: ["/instagram/Event1.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Bespoke floral design and event decoration in Valencia, Spain — weddings, corporate events, and private celebrations.",
  url: SITE_URL,
  image: `${SITE_URL}/instagram/Event1.jpg`,
  email: "webloomevents.vlc@gmail.com",
  telephone: "+34624667927",
  areaServed: { "@type": "AdministrativeArea", name: "Valencia Province, Spain" },
  address: { "@type": "PostalAddress", addressRegion: "Valencia", addressCountry: "ES" },
  sameAs: ["https://www.instagram.com/webloomevents/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
