/**
 * Hand-built forest illustration used as the hero placeholder.
 *
 * Everything is drawn from deterministic arrays — no randomness, so server and
 * client markup match, and no generated photography. When real photographs of a
 * mixed or deciduous forest are available, this component is the only thing
 * that needs swapping out.
 */

type TreeProps = {
  x: number;
  scale: number;
  fill: string;
  trunk: string;
  variant?: "broadleaf" | "conifer";
};

function Tree({ x, scale, fill, trunk, variant = "broadleaf" }: TreeProps) {
  return (
    <g transform={`translate(${x} 0) scale(${scale})`}>
      {/* Tapered trunk with two low branches. */}
      <path
        d="M -6 0 C -6 -46 -8 -72 -5 -104 L 5 -104 C 8 -72 6 -46 6 0 Z"
        fill={trunk}
      />
      <path
        d="M -4 -74 C -16 -84 -24 -96 -30 -110"
        stroke={trunk}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 4 -86 C 15 -95 22 -104 29 -116"
        stroke={trunk}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {variant === "broadleaf" ? (
        /* Crown built from overlapping blobs so the outline stays irregular. */
        <g fill={fill}>
          <ellipse cx="0" cy="-146" rx="56" ry="50" />
          <ellipse cx="-42" cy="-118" rx="38" ry="33" />
          <ellipse cx="42" cy="-122" rx="36" ry="32" />
          <ellipse cx="-20" cy="-182" rx="36" ry="31" />
          <ellipse cx="24" cy="-178" rx="33" ry="29" />
          <ellipse cx="0" cy="-118" rx="46" ry="30" />
        </g>
      ) : (
        <g fill={fill}>
          <path d="M 0 -210 L 34 -138 L -34 -138 Z" />
          <path d="M 0 -172 L 42 -92 L -42 -92 Z" />
          <path d="M 0 -132 L 50 -44 L -50 -44 Z" />
        </g>
      )}
    </g>
  );
}

/** x-offset, scale, conifer? — tuned by hand for an uneven, natural rhythm. */
const FAR: Array<[number, number, boolean]> = [
  [40, 0.62, false],
  [150, 0.5, true],
  [255, 0.66, false],
  [370, 0.54, false],
  [470, 0.6, true],
  [585, 0.5, false],
  [700, 0.64, false],
  [820, 0.52, true],
  [930, 0.6, false],
  [1045, 0.55, false],
  [1160, 0.64, true],
  [1270, 0.5, false],
  [1385, 0.6, false],
];

const MID: Array<[number, number, boolean]> = [
  [-20, 0.88, false],
  [125, 0.74, true],
  [270, 0.92, false],
  [430, 0.8, false],
  [610, 0.86, true],
  [800, 0.78, false],
  [980, 0.9, false],
  [1150, 0.76, true],
  [1320, 0.88, false],
  [1450, 0.8, false],
];

const NEAR: Array<[number, number, boolean]> = [
  [-40, 1.28, false],
  [210, 1.1, false],
  [1240, 1.16, false],
  [1470, 1.3, false],
];

export default function ForestScene({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 820"
      className={className}
      role="img"
      aria-label="Illustration eines lichten Mischwalds mit einem Weg, der zwischen den Bäumen verläuft"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="fs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4F7EF" />
          <stop offset="55%" stopColor="#E9F2E6" />
          <stop offset="100%" stopColor="#DCEBDC" />
        </linearGradient>
        <radialGradient id="fs-sun" cx="0.68" cy="0.12" r="0.55">
          <stop offset="0%" stopColor="#FBEFC8" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#F6EFD6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F6EFD6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fs-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CFE2CC" />
          <stop offset="100%" stopColor="#B9D4B8" />
        </linearGradient>
        <linearGradient id="fs-path" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4DCC6" />
          <stop offset="100%" stopColor="#D6CAAC" />
        </linearGradient>
        <linearGradient id="fs-ray" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#FFF8E2" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#FFF8E2" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1440" height="820" fill="url(#fs-sky)" />
      <rect width="1440" height="820" fill="url(#fs-sun)" />

      {/* Distant haze band so the far treeline reads as further away. */}
      <rect y="380" width="1440" height="200" fill="#EAF2E7" opacity="0.7" />

      {/* Far treeline */}
      <g transform="translate(0 560)" opacity="0.55">
        {FAR.map(([x, s, conifer], i) => (
          <Tree
            key={`far-${i}`}
            x={x}
            scale={s}
            fill="#B4D3B9"
            trunk="#A8C0A8"
            variant={conifer ? "conifer" : "broadleaf"}
          />
        ))}
      </g>

      {/* Forest floor */}
      <path d="M 0 555 Q 360 535 720 552 T 1440 545 V 820 H 0 Z" fill="url(#fs-floor)" />

      {/* The track ARGUS would actually drive, receding into the stand. */}
      <path
        d="M 700 556 C 676 636 612 716 470 820 L 900 820 C 812 716 772 636 760 556 Z"
        fill="url(#fs-path)"
      />
      <path
        d="M 700 556 C 676 636 612 716 470 820"
        stroke="#C6B893"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M 760 556 C 772 636 812 716 900 820"
        stroke="#C6B893"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />

      {/* Mid treeline */}
      <g transform="translate(0 600)">
        {MID.map(([x, s, conifer], i) => (
          <Tree
            key={`mid-${i}`}
            x={x}
            scale={s}
            fill="#8CC199"
            trunk="#7E8F72"
            variant={conifer ? "conifer" : "broadleaf"}
          />
        ))}
      </g>

      {/* Shafts of light between the trunks. */}
      <g opacity="0.55">
        <path d="M 880 0 L 1010 0 L 760 820 L 610 820 Z" fill="url(#fs-ray)" />
        <path d="M 1120 0 L 1190 0 L 1010 820 L 930 820 Z" fill="url(#fs-ray)" />
        <path d="M 430 0 L 500 0 L 300 820 L 210 820 Z" fill="url(#fs-ray)" />
      </g>

      {/* Undergrowth */}
      <g fill="#7FB68D" opacity="0.85">
        <ellipse cx="120" cy="700" rx="140" ry="42" />
        <ellipse cx="1330" cy="690" rx="150" ry="46" />
        <ellipse cx="410" cy="660" rx="90" ry="28" />
        <ellipse cx="1030" cy="655" rx="80" ry="26" />
      </g>

      {/* Near trees, framing the view */}
      <g transform="translate(0 780)">
        {NEAR.map(([x, s, conifer], i) => (
          <Tree
            key={`near-${i}`}
            x={x}
            scale={s}
            fill="#4F9A66"
            trunk="#5A5140"
            variant={conifer ? "conifer" : "broadleaf"}
          />
        ))}
      </g>

      {/* Ferns in the very foreground. */}
      <g stroke="#3D7A50" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M 300 820 C 300 780 288 756 268 738" />
        <path d="M 300 820 C 300 784 314 758 336 742" />
        <path d="M 1110 820 C 1110 782 1098 758 1078 740" />
        <path d="M 1110 820 C 1110 786 1124 760 1146 744" />
      </g>
    </svg>
  );
}
