import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80",
    alt: "Wedding reception floral decoration",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop&q=80",
    alt: "Floral table centrepiece",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop&q=80",
    alt: "Wedding table setting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=600&h=800&fit=crop&q=80",
    alt: "Bridal bouquet",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-432f7b1728d2?w=800&h=400&fit=crop&q=80",
    alt: "Corporate event decoration",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1561587575-abeb783a5dbd?w=600&h=400&fit=crop&q=80",
    alt: "Celebration party decoration",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-ivory-dark">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.35em] uppercase mb-4 text-bloom"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            Our Portfolio
          </p>
          <h2
            className="text-5xl md:text-6xl font-light italic text-bark"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Recent Events
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
          <p
            className="mt-6 text-bark-light text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            Every event is unique. Here&apos;s a glimpse of the magic we&apos;ve
            created for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/25 transition-all duration-300 flex items-end p-4">
                <p
                  className="text-ivory text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 tracking-wide"
                  style={{
                    fontFamily: "var(--font-jost), system-ui, sans-serif",
                  }}
                >
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/webloomevents/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border border-bloom text-bloom px-8 py-3 rounded-full hover:bg-bloom hover:text-ivory transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
