/** Cross-section: the layers other methods see, and the one we work in. */
export default function CanopyDiagram() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="h-auto w-full"
      role="img"
      aria-label="Schnittbild eines Waldes: Satelliten und Drohnen erfassen das Kronendach, unsere Messungen finden darunter am Boden statt"
    >
      <defs>
        <linearGradient id="cd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7FAF4" />
          <stop offset="100%" stopColor="#E7F3EC" />
        </linearGradient>
      </defs>

      <rect width="420" height="300" rx="18" fill="url(#cd-sky)" />

      {/* Canopy band */}
      <path
        d="M10 128c40-30 62 6 96-14s52 12 92-6 62 16 100-4 70 4 112-6v52H10Z"
        fill="#8CC199"
        opacity="0.85"
      />

      {/* Trunks reaching down into the layer we measure. */}
      {[58, 112, 168, 224, 280, 340, 392].map((x, i) => (
        <rect
          key={x}
          x={x - 4}
          y={150 + (i % 2) * 6}
          width="8"
          height={96 - (i % 2) * 6}
          rx="3"
          fill="#7E8F72"
          opacity="0.75"
        />
      ))}

      {/* Ground */}
      <path d="M10 246h400v36a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8Z" fill="#D6CAAC" />

      {/* Above-canopy observers */}
      <g fill="none" stroke="#6B6255" strokeWidth="1.5" strokeDasharray="3 4">
        <path d="M64 34v72" />
        <path d="M300 52v54" />
      </g>
      <circle cx="64" cy="26" r="9" fill="#B5AC9D" />
      <circle cx="300" cy="44" r="9" fill="#B5AC9D" />

      {/* Our measurement layer */}
      <rect
        x="24"
        y="188"
        width="372"
        height="54"
        rx="12"
        fill="#3D7A50"
        opacity="0.12"
        stroke="#3D7A50"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <g fill="#2E5C3D">
        <circle cx="96" cy="215" r="4" />
        <circle cx="176" cy="215" r="4" />
        <circle cx="256" cy="215" r="4" />
        <circle cx="336" cy="215" r="4" />
      </g>
      <path
        d="M96 215h240"
        stroke="#2E5C3D"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
    </svg>
  );
}
