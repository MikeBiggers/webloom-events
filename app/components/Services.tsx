import { Heart, Briefcase, Star } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    subtitle: "Your perfect day, beautifully adorned",
    description:
      "From intimate ceremonies to grand receptions, we design and deliver stunning floral arrangements, table centrepieces, archways, and full venue decoration that bring your wedding vision to life.",
    features: [
      "Ceremony floral arches",
      "Table centrepieces",
      "Bridal bouquets",
      "Venue dressing",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    subtitle: "Impress clients and inspire teams",
    description:
      "Elevate your brand at product launches, gala dinners, conferences, and networking events with sophisticated decoration that leaves a lasting impression on every guest.",
    features: [
      "Brand-aligned styling",
      "Stage & backdrop décor",
      "Table settings",
      "Reception displays",
    ],
  },
  {
    icon: Star,
    title: "Private Celebrations",
    subtitle: "Make every milestone magical",
    description:
      "Birthdays, anniversaries, baby showers, and more — we transform any space into something truly special. No occasion is too intimate or too grand; every detail gets the same love and attention.",
    features: [
      "Balloon installations",
      "Themed decoration",
      "Flower walls",
      "Personalised details",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.35em] uppercase mb-4 text-bloom"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            What We Offer
          </p>
          <h2
            className="text-5xl md:text-6xl font-light italic text-bark"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Our Services
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 border border-petal hover:border-bloom hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-petal flex items-center justify-center mb-6 group-hover:bg-bloom transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-bloom group-hover:text-ivory transition-colors duration-300"
                  />
                </div>

                <h3
                  className="text-3xl font-light italic text-bark mb-1"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm text-champagne tracking-wide mb-4"
                  style={{
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                  }}
                >
                  {service.subtitle}
                </p>

                <p
                  className="text-bark-light text-sm leading-relaxed mb-6"
                  style={{
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                  }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-bark-light"
                      style={{
                        fontFamily: "var(--font-jost), system-ui, sans-serif",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
