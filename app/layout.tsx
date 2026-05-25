import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { LanguageProvider } from "./lib/LanguageContext";
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
  title: "We Bloom Events | Bespoke Event Decoration",
  description:
    "We Bloom Events creates breathtaking floral and event decoration for weddings, corporate events, and private celebrations. Enquire today.",
  openGraph: {
    title: "We Bloom Events | Bespoke Event Decoration",
    description:
      "Breathtaking floral and event decoration for weddings, corporate events, and private celebrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
