"use client";

import Image from "next/image";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

// Real work shown per service. The corporate/private cards use styling shots
// without a bridal couple so they read honestly as decoration capability.
const serviceImages = [
  { src: "/instagram/Event2.jpg", alt: "Floral arch at a wedding ceremony" },
  { src: "/instagram/Event4.jpg", alt: "Elegant table setting at a castle venue" },
  { src: "/instagram/Event3.jpg", alt: "Candlelit table with a floral runner" },
];

export default function Services() {
  const { lang } = useLang();
  const t = translations[lang].services;

  return (
    <section id="services" className="py-24 px-6 bg-ivory reveal">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-light text-bark text-balance" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((service, i) => {
            const img = serviceImages[i];
            return (
              <article key={service.title} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-light italic text-bark mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-champagne tracking-wide mb-4" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                  {service.subtitle}
                </p>
                <p className="text-bark-light text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                  {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-bark-light" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
