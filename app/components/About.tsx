import Image from "next/image";
import { Flower2, Award, Users } from "lucide-react";

const stats = [
  { icon: Flower2, value: "500+", label: "Events Decorated" },
  { icon: Award, value: "5★", label: "Client Satisfaction" },
  { icon: Users, value: "100%", label: "Bespoke Designs" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/bloom-about/800/1000"
                alt="We Bloom Events team creating a floral arrangement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-petal w-48">
              <p
                className="text-4xl font-light italic text-bloom"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
              >
                5+
              </p>
              <p
                className="text-xs tracking-wide text-bark-light uppercase mt-1"
                style={{
                  fontFamily: "var(--font-jost), system-ui, sans-serif",
                }}
              >
                Years of creating memories
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p
              className="text-sm tracking-[0.35em] uppercase mb-4 text-bloom"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              Our Story
            </p>
            <h2
              className="text-5xl md:text-6xl font-light italic text-bark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Passion for Beautiful Moments
            </h2>
            <div className="w-16 h-px bg-champagne mb-8" />

            <p
              className="text-bark-light leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              We Bloom Events was founded with a single belief — that every
              celebration deserves to be extraordinary. We are a passionate team
              of florists and event stylists dedicated to transforming spaces
              into breathtaking environments that tell your story.
            </p>
            <p
              className="text-bark-light leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              From the very first consultation to the final petal being placed,
              we work closely with you to ensure every detail is perfect. No two
              events are alike — and we wouldn&apos;t have it any other way.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon size={22} className="text-bloom mx-auto mb-2" />
                    <p
                      className="text-2xl font-light italic text-bark"
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs tracking-wide text-bark-light uppercase mt-1"
                      style={{
                        fontFamily: "var(--font-jost), system-ui, sans-serif",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3.5 bg-bloom text-ivory text-sm tracking-widest uppercase rounded-full hover:bg-bloom-dark transition-colors duration-300"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
