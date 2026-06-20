"use client";

import Image from "next/image";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";
import BeeSvg from "./BeeSvg";

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
        {/* Logo lockup with bees orbiting the wording */}
        <div className="logo-lockup mx-auto mb-8">
          <BeeSvg className="logo-bee logo-bee--1" size={68} id="1" />
          <BeeSvg className="logo-bee logo-bee--2" size={50} id="2" />
          <h1
            className="leading-[0.92] text-ivory [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            <span className="block text-6xl md:text-8xl font-medium tracking-[0.06em]">WE</span>
            <span className="block text-6xl md:text-8xl font-medium tracking-[0.06em]">BLOOM</span>
            <span className="block text-6xl md:text-8xl font-medium tracking-[0.06em]">EVENTS</span>
          </h1>
          <p
            className="lockup-tagline mt-4 text-[0.65rem] md:text-xs tracking-[0.4em] uppercase text-champagne-light"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            {t.tagline}
          </p>
        </div>

        <p
          className="italic text-2xl md:text-3xl text-petal mb-9 [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {t.line1} {t.line2}
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
