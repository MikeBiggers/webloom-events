import type { Metadata } from "next";
import { LanguageProvider } from "./lib/LanguageContext";
import Sections from "./components/Sections";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "es-ES": "/es",
      "x-default": "/",
    },
  },
};

export default function Home() {
  return (
    <LanguageProvider initialLang="en">
      <Sections />
    </LanguageProvider>
  );
}
