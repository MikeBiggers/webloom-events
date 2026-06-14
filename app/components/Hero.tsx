"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/instagram/Event1.jpg"
        alt="An outdoor wedding reception styled with fairy lights and floral centrepieces by We Bloom Events in Valencia"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Ivory scrim keeps the dark heading legible while the photo shows through */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/85 via-ivory/65 to-ivory/85" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.35em] uppercase mb-6 text-bloom" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
          {t.label}
        </p>
        <h1 className="text-6xl md:text-8xl font-light italic mb-6 leading-tight text-bark" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          {t.line1}
          <br />
          <span className="text-bloom">{t.line2}</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-bark-light max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-3.5 bg-bloom text-ivory text-sm tracking-widest uppercase rounded-full hover:bg-bloom-dark transition-colors duration-300" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.cta1}
          </a>
          <a href="#gallery" className="px-8 py-3.5 border border-bloom text-bloom text-sm tracking-widest uppercase rounded-full hover:bg-petal transition-colors duration-300" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.cta2}
          </a>
        </div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-bark-light/60 hover:text-bloom transition-colors animate-bounce" aria-label="Scroll down">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
