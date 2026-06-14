"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

type Category = "weddings" | "corporate" | "private";

type GalleryItem = {
  src: string;
  alt: string;
  category: Category;
};

// All current work is genuine wedding work, so it's tagged honestly. Add
// items with category "corporate" / "private" and the filter tabs below
// appear automatically — no other change needed.
const items: GalleryItem[] = [
  { src: "/instagram/Event1.jpg", alt: "Outdoor reception with fairy lights and round tables", category: "weddings" },
  { src: "/instagram/Event2.jpg", alt: "Bride and groom beneath a floral arch", category: "weddings" },
  { src: "/instagram/Event5.jpg", alt: "Botanical garden table with moss candelabras", category: "weddings" },
  { src: "/instagram/Event4.jpg", alt: "Castle venue table setting", category: "weddings" },
  { src: "/instagram/Event3.jpg", alt: "Candlelit table with a deep floral runner", category: "weddings" },
  { src: "/instagram/Event6.jpg", alt: "Botanical bridal accessory close-up", category: "weddings" },
];

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

  const presentCategories = Array.from(new Set(items.map((i) => i.category)));
  const showTabs = presentCategories.length > 1;

  const [filter, setFilter] = useState<"all" | Category>("all");
  const visible = filter === "all" ? items : items.filter((i) => i.category === filter);

  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % visible.length)), [visible.length]);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)), [visible.length]);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  const tabBtn = (key: "all" | Category, label: string) => (
    <button
      key={key}
      onClick={() => { setFilter(key); }}
      className={`text-xs tracking-widest uppercase pb-1 border-b transition-colors duration-200 ${
        filter === key ? "text-bloom border-bloom" : "text-bark-light border-transparent hover:text-bloom"
      }`}
      style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
    >
      {label}
    </button>
  );

  return (
    <section id="gallery" className="py-24 px-6 bg-ivory reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-bark text-balance" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
          <p className="mt-6 text-bark-light text-base max-w-xl mx-auto text-pretty" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            {t.description}
          </p>
        </div>

        {showTabs && (
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {tabBtn("all", t.categories.all)}
            {presentCategories.map((c) => tabBtn(c, t.categories[c]))}
          </div>
        )}

        {/* Featured video */}
        <div className="relative rounded-2xl overflow-hidden bg-bark shadow-lg mb-6">
          <video
            src="/instagram/Video1.mp4"
            className="w-full object-cover max-h-[560px]"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>

        {/* Masonry photo grid */}
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {visible.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActive(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl"
              aria-label={item.alt}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-bark/0 group-hover:bg-bark/15 transition-colors duration-300" />
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
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

      {/* Lightbox */}
      {active !== null && visible[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bark/90 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={visible[active].alt}
        >
          <button
            onClick={close}
            aria-label={t.lightboxClose}
            className="absolute top-5 right-5 text-ivory/80 hover:text-ivory transition-colors"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={t.lightboxPrev}
            className="absolute left-3 md:left-6 text-ivory/80 hover:text-ivory transition-colors p-2"
          >
            <ChevronLeft size={36} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={visible[active].src}
            alt={visible[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={t.lightboxNext}
            className="absolute right-3 md:right-6 text-ivory/80 hover:text-ivory transition-colors p-2"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
