"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

export default function Faq() {
  const { lang } = useLang();
  const t = translations[lang].faq;
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="py-24 px-6 bg-ivory reveal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-bark text-balance" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
        </div>

        <dl className="divide-y divide-petal border-t border-b border-petal">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className="text-lg text-bark group-hover:text-bloom transition-colors" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 text-bloom">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-bark-light text-sm leading-relaxed text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                      {item.a}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
