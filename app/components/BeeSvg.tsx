// A detailed bumblebee. Wings carry the `wing` class so globals.css can flap
// them; the parent element handles the orbit. Gradient ids are suffixed with
// `id` so multiple bees on the page don't collide. Decorative only.
export default function BeeSvg({
  className = "",
  size = 56,
  id = "a",
}: {
  className?: string;
  size?: number;
  id?: string;
}) {
  return (
    <span className={className} aria-hidden="true">
      <svg
        width={size}
        height={(size * 44) / 64}
        viewBox="0 0 64 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`body-${id}`} x1="0" y1="14" x2="0" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F4C055" />
            <stop offset="1" stopColor="#CC8A2C" />
          </linearGradient>
          <radialGradient id={`thorax-${id}`} cx="0.4" cy="0.35" r="0.8">
            <stop offset="0" stopColor="#5a4427" />
            <stop offset="1" stopColor="#1e1812" />
          </radialGradient>
          <linearGradient id={`wing-${id}`} x1="40" y1="18" x2="14" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#cfe0ec" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* legs */}
        <g stroke="#1c1813" strokeWidth="1.3" strokeLinecap="round" fill="none">
          <path d="M44 32 q2 7 -1 10" />
          <path d="M36 33 q0 7 -4 10" />
          <path d="M27 33 q-2 7 -6 9" />
        </g>

        {/* wings (behind the body) */}
        <path className="wing wing--back" d="M38 18 Q27 5 15 11 Q25 18 38 19 Z" fill={`url(#wing-${id})`} stroke="#bcd2e2" strokeWidth="0.5" opacity="0.8" />
        <path className="wing" d="M41 17 Q27 -2 11 6 Q23 15 41 18 Z" fill={`url(#wing-${id})`} stroke="#bcd2e2" strokeWidth="0.5" />

        {/* abdomen with bands */}
        <ellipse cx="23" cy="25" rx="18" ry="11" fill={`url(#body-${id})`} />
        <path d="M5.5 23 q-3 2 0 4 q3 1 5 -1 q-1 -2 -5 -3 Z" fill="#2a2018" />
        <g fill="#241c14">
          <path d="M14 15.5 q4 9.5 0 19 q-3 -1 -4.5 -2 q3 -7.5 0 -15 q1.5 -1.2 4.5 -2 Z" />
          <path d="M25 14.2 q4.2 10.8 0 21.6 q-2.6 -0.3 -4.4 -0.9 q3.4 -9.9 0 -19.8 q1.8 -0.6 4.4 -0.9 Z" />
        </g>

        {/* thorax (fuzzy) */}
        <ellipse cx="40" cy="24" rx="9.5" ry="10.5" fill={`url(#thorax-${id})`} />

        {/* head */}
        <circle cx="51" cy="24" r="6.6" fill="#201912" />
        <ellipse cx="52.5" cy="22" rx="1.5" ry="2.1" fill="#5b4a32" />

        {/* antennae */}
        <g stroke="#201912" strokeWidth="1.2" strokeLinecap="round" fill="none">
          <path d="M55 20 Q60 14 62 15" />
          <path d="M55 23 Q61 19 63 21" />
        </g>
      </svg>
    </span>
  );
}
