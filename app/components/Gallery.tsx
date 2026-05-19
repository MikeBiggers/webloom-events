import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/__vggaw2Nzk?w=800&h=600&fit=crop&q=80",
    alt: "Outdoor wedding arch with flowers",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/3J-n9VVDCYw?w=600&h=400&fit=crop&q=80",
    alt: "Floral centrepiece table setting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/s-erZ7110cA?w=600&h=400&fit=crop&q=80",
    alt: "Wedding dining tables with floral arrangements",
    span: "",
  },
  {
    src: "https://images.unsplash.com/kdlfXY9rvZA?w=600&h=800&fit=crop&q=80",
    alt: "Wedding arch with flowers and greenery",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/M9SZZbp_FJk?w=800&h=400&fit=crop&q=80",
    alt: "Wedding table with flowers and greenery",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/-OAYZjLwnnc?w=600&h=400&fit=crop&q=80",
    alt: "Outdoor table setting with floral centrepieces",
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
