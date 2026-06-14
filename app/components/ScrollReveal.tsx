"use client";

import { useEffect } from "react";

// Enables the fade-up reveal defined in globals.css. Content is visible by
// default; this only opts in to the animation when JS runs and the user
// hasn't requested reduced motion, then reveals each section as it scrolls in.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("js-reveal");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: guarantee nothing stays hidden if the user never scrolls
    // (and so non-scrolling renderers/crawlers never ship a blank section).
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
