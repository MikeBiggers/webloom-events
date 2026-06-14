"use client";

import Image from "next/image";
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
      {/* A soft pool of shade behind the text so the photo can stay vivid
          while the light heading stays legible over a bright reception. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, rgba(44,44,44,0.62) 0%, rgba(44,44,44,0.42) 55%, rgba(44,44,44,0.3) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-7 text-champagne-light"
          style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
        >
          {t.label}
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-light mb-7 leading-[1.05] text-ivory text-balance [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {t.line1} <span className="italic text-petal">{t.line2}</span>
        </h1>
        <p
          className="text-base md:text-lg font-light text-ivory/90 max-w-xl mx-auto mb-10 leading-relaxed text-pretty"
          style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
        >
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-9 py-4 bg-bloom text-ivory text-sm tracking-widest uppercase rounded-full hover:bg-bloom-dark transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            {t.cta1}
          </a>
          <a
            href="#gallery"
            className="px-9 py-4 border border-ivory/70 text-ivory text-sm tracking-widest uppercase rounded-full hover:bg-ivory/10 transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            {t.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
