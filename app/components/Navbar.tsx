"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLang } from "../lib/LanguageContext";
import translations from "../lib/translations";

export default function Navbar() {
  const { lang } = useLang();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.home, href: "#hero" },
    { label: t.services, href: "#services" },
    { label: t.gallery, href: "#gallery" },
    { label: t.about, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the dark photo hero the bar is transparent and needs light text;
  // once scrolled onto the ivory bar it switches to dark text.
  const light = !scrolled;
  const brandCls = light ? "text-ivory" : "text-bloom";
  const linkCls = light ? "text-ivory/90 hover:text-ivory" : "text-bark-light hover:text-bloom";
  const langActive = light ? "text-ivory font-medium" : "text-bloom font-medium";
  const langInactive = light ? "text-ivory/70 hover:text-ivory" : "text-bark-light hover:text-bloom";
  const dividerCls = light ? "text-ivory/40" : "text-bark-light/40";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className={`font-heading text-2xl font-light tracking-widest transition-colors duration-300 ${brandCls}`}
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          We Bloom Events
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${linkCls}`}
                style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Language switcher — navigates between indexable routes */}
          <li className="flex items-center gap-1 text-sm tracking-widest" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            <Link
              href="/"
              hrefLang="en"
              className={`uppercase transition-colors duration-200 ${lang === "en" ? langActive : langInactive}`}
            >
              EN
            </Link>
            <span className={dividerCls}>|</span>
            <Link
              href="/es"
              hrefLang="es"
              className={`uppercase transition-colors duration-200 ${lang === "es" ? langActive : langInactive}`}
            >
              ES
            </Link>
          </li>

          <li>
            <a
              href="#contact"
              className="text-sm tracking-widest uppercase px-5 py-2.5 bg-bloom text-ivory hover:bg-bloom-dark transition-colors duration-200 rounded-full"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              {t.enquire}
            </a>
          </li>
        </ul>

        {/* Mobile: language switcher + hamburger always visible */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm tracking-widest" style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
            <Link
              href="/"
              hrefLang="en"
              className={`uppercase transition-colors duration-200 ${lang === "en" ? langActive : langInactive}`}
            >
              EN
            </Link>
            <span className={dividerCls}>|</span>
            <Link
              href="/es"
              hrefLang="es"
              className={`uppercase transition-colors duration-200 ${lang === "es" ? langActive : langInactive}`}
            >
              ES
            </Link>
          </div>
          <button
            className={`p-1 transition-colors duration-300 ${light ? "text-ivory" : "text-bark"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-petal px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-bark-light hover:text-bloom transition-colors"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase text-center px-5 py-3 bg-bloom text-ivory hover:bg-bloom-dark transition-colors rounded-full"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            {t.enquire}
          </a>
        </div>
      )}
    </header>
  );
}
