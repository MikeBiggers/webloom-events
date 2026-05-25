"use client";

import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const linkHrefs = ["#services", "#gallery", "#about", "#contact"];

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bark text-ivory/80 py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-2xl font-light tracking-widest text-ivory mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            We Bloom Events
          </p>
          <p className="text-sm tracking-wide text-ivory/60">{t.tagline}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm tracking-widest uppercase text-ivory/60">
          {t.links.map((item, i) => (
            <a key={item} href={linkHrefs[i]} className="hover:text-champagne transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="https://www.instagram.com/webloomevents/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-ivory/60 hover:text-champagne transition-colors"
          aria-label="Instagram"
        >
          <InstagramIcon size={20} />
          <span className="hidden sm:inline">@webloomevents</span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-ivory/10 text-center text-xs tracking-wide text-ivory/40">
        &copy; {year} We Bloom Events. All rights reserved.
      </div>
    </footer>
  );
}
