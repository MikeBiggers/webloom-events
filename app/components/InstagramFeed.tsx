"use client";

import Image from "next/image";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function InstagramFeed() {
  const { lang } = useLang();
  const t = translations[lang].gallery;

  return (
    <section id="gallery" className="py-24 px-6 bg-ivory reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-bark text-balance" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
          <p className="mt-6 text-bark-light text-base max-w-xl mx-auto text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="relative rounded-2xl overflow-hidden bg-bark shadow-lg">
            <video
              src="/instagram/Video1.mp4"
              className="w-full h-full object-cover max-h-[520px]"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/instagram/Event1.jpg", alt: "Outdoor reception with fairy lights" },
              { src: "/instagram/Event2.jpg", alt: "Bride and groom with floral arch" },
              { src: "/instagram/Event4.jpg", alt: "Castle venue table setting" },
              { src: "/instagram/Event6.jpg", alt: "Botanical bridal accessory" },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md mb-10">
          <Image src="/instagram/Event5.jpg" alt="Botanical garden table with moss candelabras" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-bark/20" />
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/webloomevents/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border border-bloom text-bloom px-8 py-3 rounded-full hover:bg-bloom hover:text-ivory transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            <InstagramIcon size={16} />
            {t.followBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
