import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F2D6D8 0%, #FAF7F2 45%, #EAD9B0 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#C17F87" }}
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "#C9A96E" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-10 blur-2xl"
        style={{ background: "#8FAF8C" }}
      />

      {/* Floral SVG accent */}
      <svg
        className="absolute top-8 left-8 opacity-20 hidden md:block"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="8" fill="#C17F87" />
        <ellipse cx="60" cy="35" rx="8" ry="18" fill="#C17F87" opacity="0.6" />
        <ellipse cx="60" cy="85" rx="8" ry="18" fill="#C17F87" opacity="0.6" />
        <ellipse cx="35" cy="60" rx="18" ry="8" fill="#C17F87" opacity="0.6" />
        <ellipse cx="85" cy="60" rx="18" ry="8" fill="#C17F87" opacity="0.6" />
        <ellipse cx="41" cy="41" rx="8" ry="18" fill="#C9A96E" opacity="0.4" transform="rotate(45 41 41)" />
        <ellipse cx="79" cy="79" rx="8" ry="18" fill="#C9A96E" opacity="0.4" transform="rotate(45 79 79)" />
        <ellipse cx="79" cy="41" rx="8" ry="18" fill="#C9A96E" opacity="0.4" transform="rotate(-45 79 41)" />
        <ellipse cx="41" cy="79" rx="8" ry="18" fill="#C9A96E" opacity="0.4" transform="rotate(-45 41 79)" />
      </svg>

      <svg
        className="absolute bottom-16 right-10 opacity-15 hidden md:block"
        width="90"
        height="90"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="8" fill="#8FAF8C" />
        <ellipse cx="60" cy="35" rx="8" ry="18" fill="#8FAF8C" opacity="0.6" />
        <ellipse cx="60" cy="85" rx="8" ry="18" fill="#8FAF8C" opacity="0.6" />
        <ellipse cx="35" cy="60" rx="18" ry="8" fill="#8FAF8C" opacity="0.6" />
        <ellipse cx="85" cy="60" rx="18" ry="8" fill="#8FAF8C" opacity="0.6" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-sm tracking-[0.35em] uppercase mb-6 text-bloom"
          style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
        >
          Bespoke Event Decoration
        </p>

        <h1
          className="text-6xl md:text-8xl font-light italic mb-6 leading-tight text-bark"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Where Every
          <br />
          <span className="text-bloom">Moment Blooms</span>
        </h1>

        <p
          className="text-lg md:text-xl font-light text-bark-light max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
        >
          We create breathtaking floral and event decoration for weddings,
          corporate events, and private celebrations — tailored to your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-bloom text-ivory text-sm tracking-widest uppercase rounded-full hover:bg-bloom-dark transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            Enquire Now
          </a>
          <a
            href="#gallery"
            className="px-8 py-3.5 border border-bloom text-bloom text-sm tracking-widest uppercase rounded-full hover:bg-petal transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-bark-light/60 hover:text-bloom transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
