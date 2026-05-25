"use client";

import { Heart, Briefcase, Star } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

const icons = [Heart, Briefcase, Star];

export default function Services() {
  const { lang } = useLang();
  const t = translations[lang].services;

  return (
    <section id="services" className="py-24 px-6 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.35em] uppercase mb-4 text-bloom" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.label}
          </p>
          <h2 className="text-5xl md:text-6xl font-light italic text-bark" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={service.title} className="group bg-white rounded-2xl p-8 border border-petal hover:border-bloom hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-petal flex items-center justify-center mb-6 group-hover:bg-bloom transition-colors duration-300">
                  <Icon size={20} className="text-bloom group-hover:text-ivory transition-colors duration-300" />
                </div>
                <h3 className="text-3xl font-light italic text-bark mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-champagne tracking-wide mb-4" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                  {service.subtitle}
                </p>
                <p className="text-bark-light text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-bark-light" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
