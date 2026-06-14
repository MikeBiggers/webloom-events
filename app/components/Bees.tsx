// Decorative brand bees that drift across the page. No client logic needed —
// the motion is pure CSS (see globals.css) and is hidden under
// prefers-reduced-motion. Marked aria-hidden as it's purely decorative.
export default function Bees() {
  return (
    <div className="bee-layer" aria-hidden="true">
      <span className="bee bee--1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bee1.png" alt="" width={34} height={40} />
      </span>
      <span className="bee bee--2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bee1.png" alt="" width={24} height={29} />
      </span>
    </div>
  );
}
