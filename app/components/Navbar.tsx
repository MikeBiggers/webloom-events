"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          className="font-heading text-2xl font-light tracking-widest text-bloom"
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
                className="text-sm tracking-widest uppercase text-bark-light hover:text-bloom transition-colors duration-200"
                style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm tracking-widest uppercase px-5 py-2.5 bg-bloom text-ivory hover:bg-bloom-dark transition-colors duration-200 rounded-full"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              Enquire
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-bark p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
