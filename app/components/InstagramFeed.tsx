"use client";

import { useEffect } from "react";

const posts = [
  { shortcode: "DTm6fAOjFVm", type: "reel",  label: "Wedding decoration reel" },
  { shortcode: "DMLcT-pNcR0", type: "video", label: "Event decoration video" },
  { shortcode: "DL2ogHsNdPv", type: "photo", label: "Event decoration" },
  { shortcode: "DWjxtRFjnNC", type: "photo", label: "Floral styling" },
  { shortcode: "DQ9IcXZCEkY", type: "photo", label: "Event setup" },
  { shortcode: "DL2t0B0trO_", type: "photo", label: "Decoration details" },
];

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script once
    if (document.getElementById("instagram-embed-script")) return;
    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="instagram" className="py-24 px-6 bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.35em] uppercase mb-4 text-bloom"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            Follow Our Journey
          </p>
          <h2
            className="text-5xl md:text-6xl font-light italic text-bark"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            As Seen on Instagram
          </h2>
          <div className="w-16 h-px bg-champagne mx-auto mt-6" />
          <p
            className="mt-6 text-bark-light text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
          >
            Real events, real moments — follow{" "}
            <a
              href="https://www.instagram.com/webloomevents/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bloom hover:underline"
            >
              @webloomevents
            </a>{" "}
            for daily inspiration.
          </p>
        </div>

        {/* Videos row */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {posts
            .filter((p) => p.type === "reel" || p.type === "video")
            .map((post) => (
              <div
                key={post.shortcode}
                className="rounded-2xl overflow-hidden shadow-md border border-petal"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/${post.type === "reel" ? "reel" : "p"}/${post.shortcode}/`}
                  data-instgrm-version="14"
                  style={{ margin: 0, width: "100%", minWidth: "100%" }}
                >
                  <a
                    href={`https://www.instagram.com/${post.type === "reel" ? "reel" : "p"}/${post.shortcode}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-64 bg-petal text-bloom text-sm tracking-wide"
                    style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
                  >
                    View on Instagram →
                  </a>
                </blockquote>
              </div>
            ))}
        </div>

        {/* Photos row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts
            .filter((p) => p.type === "photo")
            .map((post) => (
              <div
                key={post.shortcode}
                className="rounded-2xl overflow-hidden shadow-md border border-petal"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/p/${post.shortcode}/`}
                  data-instgrm-version="14"
                  style={{ margin: 0, width: "100%", minWidth: "100%" }}
                >
                  <a
                    href={`https://www.instagram.com/p/${post.shortcode}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-52 bg-petal text-bloom text-sm tracking-wide"
                    style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
                  >
                    View on Instagram →
                  </a>
                </blockquote>
              </div>
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
            Follow @webloomevents
          </a>
        </div>
      </div>
    </section>
  );
}
