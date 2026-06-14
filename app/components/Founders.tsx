"use client";

import Image from "next/image";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

const photos = [
  { src: "/team/owner-a.jpg", alt: "Andra, co-founder and event stylist at We Bloom Events" },
  { src: "/team/owner-b.jpg", alt: "Ana, co-founder and event stylist at We Bloom Events" },
];

export default function Founders() {
  const { lang } = useLang();
  const t = translations[lang].founders;

  return (
    <section id="founders" className="py-24 px-6 bg-ivory-dark reveal">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-bark text-balance" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
          <p className="mt-6 text-bark-light text-base max-w-xl mx-auto text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.subheading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 md:gap-14">
          {t.members.map((m, i) => (
            <article key={m.name} className="flex flex-col items-center text-center">
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden mb-6 ring-1 ring-petal">
                <Image
                  src={photos[i].src}
                  alt={photos[i].alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 176px, 208px"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-light italic text-bark" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                {m.name}
              </h3>
              <p className="text-sm text-champagne tracking-wide mt-1 mb-4" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {m.role}
              </p>
              <p className="text-bark-light text-sm leading-relaxed max-w-sm text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
