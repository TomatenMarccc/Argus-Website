/**
 * Cross-section of the layers environmental data comes from.
 *
 * All layers are drawn with equal weight — none is singled out as "ours" or as
 * a gap, because the point of the section is that they belong together.
 */
export default function CanopyDiagram() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-auto w-full"
      role="img"
      aria-label="Schnittbild eines Waldes mit den Ebenen, auf denen Umweltdaten entstehen: Satellit und Drohne über dem Kronendach, feste Sensoren, Messungen am Boden und Begehungen darunter"
    >
      <defs>
        <linearGradient id="cd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7FAF4" />
          <stop offset="100%" stopColor="#E7F3EC" />
        </linearGradient>
      </defs>

      <rect width="420" height="320" rx="18" fill="url(#cd-sky)" />

      {/* Satellite — highest layer */}
      <g transform="translate(58 30)">
        <rect x="-7" y="-7" width="14" height="14" rx="2" fill="#B5AC9D" />
        <path d="M-7 -4l-11 -4 4 11 7 -3ZM7 -4l11 -4 -4 11 -7 -3Z" fill="#CBC3B4" />
      </g>

      {/* Drone */}
      <g transform="translate(300 52)" fill="none" stroke="#9A9184" strokeWidth="2" strokeLinecap="round">
        <rect x="-8" y="-4" width="16" height="8" rx="2" fill="#B5AC9D" stroke="none" />
        <path d="M-8 -3l-9 -6M8 -3l9 -6" />
        <path d="M-21 -10h8M13 -10h8" />
      </g>

      {/* Sight lines from above, equal weight */}
      <g stroke="#9A9184" strokeWidth="1.3" strokeDasharray="3 5" fill="none">
        <path d="M58 44v72" />
        <path d="M300 62v54" />
      </g>

      {/* Canopy */}
      <path
        d="M10 138c40-30 62 6 96-14s52 12 92-6 62 16 100-4 70 4 112-6v54H10Z"
        fill="#8CC199"
        opacity="0.85"
      />

      {/* Trunks */}
      {[58, 112, 168, 224, 280, 340, 392].map((x, i) => (
        <rect
          key={x}
          x={x - 4}
          y={166 + (i % 2) * 6}
          width="8"
          height={100 - (i % 2) * 6}
          rx="3"
          fill="#7E8F72"
          opacity="0.75"
        />
      ))}

      {/* Fixed sensor mast — continuous readings at one point */}
      <g transform="translate(142 200)" stroke="#5A5140" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M0 66V6" />
        <circle cx="0" cy="2" r="3.6" fill="#5A5140" stroke="none" />
        <path d="M6 -4a8 8 0 0 1 0 12M-6 -4a8 8 0 0 0 0 12" strokeWidth="1.6" />
      </g>

      {/* Ground */}
      <path d="M10 266h400v36a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8Z" fill="#D6CAAC" />

      {/* Ground-level track with measurement points */}
      <path
        d="M56 252h300"
        stroke="#2E5C3D"
        strokeWidth="1.6"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      <g fill="#2E5C3D">
        <circle cx="86" cy="252" r="3.6" />
        <circle cx="166" cy="252" r="3.6" />
        <circle cx="246" cy="252" r="3.6" />
        <circle cx="326" cy="252" r="3.6" />
      </g>

      {/* Field survey — a person on the same ground */}
      <g transform="translate(372 226)" stroke="#5A5140" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <circle cx="0" cy="2" r="3.4" fill="#5A5140" stroke="none" />
        <path d="M0 6v9M0 15l-4 9M0 15l5 9M-5 10h10" />
      </g>
    </svg>
  );
}
