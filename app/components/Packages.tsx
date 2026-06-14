"use client";

import { Check } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

export default function Packages() {
  const { lang } = useLang();
  const t = translations[lang].packages;

  return (
    <section id="packages" className="py-24 px-6 bg-ivory-dark reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-bark text-balance" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
          <p className="mt-6 text-bark-light text-base max-w-2xl mx-auto text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Two closed-price collections */}
          {t.items.map((pack) => (
            <article key={pack.name} className="flex flex-col bg-white rounded-2xl border border-petal p-8">
              <h3 className="text-3xl font-light italic text-bark" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                {pack.name}
              </h3>
              <p className="text-sm text-champagne tracking-wide mt-1 mb-5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {pack.style}
              </p>

              <p className="text-xs tracking-widest uppercase text-bark-light/70" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {t.closedPriceLabel}
              </p>
              <p className="text-4xl font-light text-bark mt-1 mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                {pack.price}
              </p>
              <p className="text-xs text-bark-light/70 mb-6" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {t.scope}
              </p>

              <p className="text-xs tracking-widest uppercase text-bark-light/70 mb-3" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {t.includesLabel}
              </p>
              <ul className="space-y-2 mb-8">
                {t.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-bark-light" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                    <Check size={16} className="text-leaf flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-auto text-center text-sm tracking-widest uppercase border border-bloom text-bloom px-6 py-3 rounded-full hover:bg-bloom hover:text-ivory transition-colors duration-300" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {t.cta}
              </a>
            </article>
          ))}

          {/* Bespoke / personalised quote */}
          <article className="flex flex-col bg-bloom text-ivory rounded-2xl p-8">
            <h3 className="text-3xl font-light italic" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              {t.bespoke.name}
            </h3>
            <p className="text-sm text-ivory/75 tracking-wide mt-1 mb-5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.bespoke.style}
            </p>
            <p className="text-3xl font-light mb-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              {t.bespoke.price}
            </p>
            <p className="text-sm text-ivory/85 leading-relaxed mb-8 text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.bespoke.description}
            </p>
            <a href="#contact" className="mt-auto text-center text-sm tracking-widest uppercase bg-ivory text-bloom px-6 py-3 rounded-full hover:bg-ivory/90 transition-colors duration-300" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
              {t.cta}
            </a>
          </article>
        </div>

        <p className="text-xs text-bark-light/70 max-w-2xl mx-auto text-center mt-10 leading-relaxed text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
          {t.excludesNote}
        </p>
      </div>
    </section>
  );
}
