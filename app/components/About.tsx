"use client";

import Image from "next/image";
import { Flower2, Award, Users } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

const statIcons = [Flower2, Award, Users];

export default function About() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 px-6 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/instagram/Event2.jpg"
                alt="A bride and groom beneath a floral arch styled by We Bloom Events in Valencia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-petal w-48">
              <p className="text-4xl font-light italic text-bloom" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                {t.accentValue}
              </p>
              <p className="text-xs tracking-wide text-bark-light uppercase mt-1" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {t.accentLabel}
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-sm tracking-[0.35em] uppercase mb-4 text-bloom" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.label}
            </p>
            <h2 className="text-5xl md:text-6xl font-light italic text-bark mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              {t.heading}
            </h2>
            <div className="w-16 h-px bg-champagne mb-8" />

            <p className="text-bark-light leading-relaxed mb-5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.para1}
            </p>
            <p className="text-bark-light leading-relaxed mb-5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.para2}
            </p>
            <p className="text-bark-light leading-relaxed mb-10" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.para3}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {t.stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div key={stat.label} className="text-center">
                    <Icon size={22} className="text-bloom mx-auto mb-2" />
                    <p className="text-2xl font-light italic text-bark" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      {stat.value}
                    </p>
                    <p className="text-xs tracking-wide text-bark-light uppercase mt-1" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="inline-block px-8 py-3.5 bg-bloom text-ivory text-sm tracking-widest uppercase rounded-full hover:bg-bloom-dark transition-colors duration-300" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
