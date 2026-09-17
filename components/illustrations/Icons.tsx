/**
 * Line icons drawn by hand for the value, pressure and "missing layer" blocks.
 * Deliberately sketch-like rather than photographic — the PR brief asks for the
 * pressures in particular not to read as dramatic imagery.
 */

type IconProps = { className?: string };

function Frame({
  className = "",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* ---------- Why the forest matters ---------- */

export function IconHabitat(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M24 42V24" />
      <path d="M24 30c-6 0-10-4-11-9 5 0 9 2 11 6" />
      <path d="M24 24c6-1 10-5 11-10-5 0-10 3-11 7" />
      <path d="M12 42h24" />
      <circle cx="33" cy="33" r="3.2" />
      <path d="M14 36c1.6-2.4 4-2.4 5.6 0" />
    </Frame>
  );
}

export function IconClimate(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="17" cy="16" r="6" />
      <path d="M17 6v2M17 24v2M7 16h2M25 16h2M10 9l1.4 1.4M22.6 21.6L24 23M24 9l-1.4 1.4M11.4 21.6L10 23" />
      <path d="M20 36h14a5 5 0 0 0 0-10 7 7 0 0 0-13-2 5 5 0 0 0-1 12Z" />
      <path d="M16 41h5M26 41h6" />
    </Frame>
  );
}

export function IconHealth(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M24 41c9-6 14-12 14-19a7 7 0 0 0-14-3 7 7 0 0 0-14 3c0 7 5 13 14 19Z" />
      <path d="M17 22h4l2-4 3 8 2-4h3" />
    </Frame>
  );
}

export function IconMemory(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M8 40c4-10 10-16 18-19" />
      <path d="M26 21c7-3 12-2 14 1-2 5-7 8-14 7-1-4 0-6 0-8Z" />
      <path d="M18 31c-4-4-5-9-3-13 4 1 7 4 8 8" />
      <path d="M6 43h36" />
    </Frame>
  );
}

/* ---------- What is changing ---------- */

export function IconDrought(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M24 6c5 7 8 11 8 15a8 8 0 0 1-16 0c0-4 3-8 8-15Z" />
      <path d="M8 36h8M20 36h8M32 36h8" />
      <path d="M12 42h9M25 42h11" />
    </Frame>
  );
}

export function IconFire(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M24 42c-7 0-12-4-12-11 0-6 5-9 6-15 4 3 5 6 5 9 2-2 3-5 2-9 6 3 11 9 11 15 0 7-5 11-12 11Z" />
      <path d="M24 42c-3 0-5-2-5-5s2-4 3-7c2 2 3 4 3 6 1-1 1-2 1-4 2 2 3 4 3 5 0 3-2 5-5 5Z" />
    </Frame>
  );
}

export function IconPest(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M32 14c4 3 6 8 5 13-1 7-7 12-14 11-6-1-10-6-10-12" />
      <path d="M13 26c0-7 6-13 13-13h6" />
      <path d="M22 20c2 3 2 7 0 10s-6 4-9 3" />
      <circle cx="30" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="25" cy="33" r="1.2" fill="currentColor" stroke="none" />
    </Frame>
  );
}

export function IconStorm(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M6 16h20a5 5 0 1 0-5-5" />
      <path d="M6 24h26a5 5 0 1 1-5 5" />
      <path d="M6 32h14" />
      <path d="M30 40l-6-6 8-2-6-6" />
    </Frame>
  );
}

export function IconBiodiversity(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M10 42V28" />
      <path d="M10 33c-3-1-5-3-5-6 3 0 5 1 5 3" />
      <path d="M10 30c3-1 5-4 5-7-3 0-5 2-5 4" />
      <path d="M24 42V22" />
      <path d="M24 27c-4-1-6-4-6-8 4 0 6 2 6 5" />
      <path d="M38 42V32" />
      <path d="M38 36c-2-1-3-2-3-4" />
      <path d="M4 42h40" />
      <path d="M31 16l1.6 3.4L36 21l-3.4 1.6L31 26l-1.6-3.4L26 21l3.4-1.6Z" />
    </Frame>
  );
}

/* ---------- The missing layer ---------- */

export function IconSatellite(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="20" y="16" width="8" height="12" rx="1.5" />
      <path d="M20 19l-9-3 3 9 6-2ZM28 19l9-3-3 9-6-2Z" />
      <path d="M24 28v6" />
      <path d="M17 41c2-4 4-6 7-6s5 2 7 6" />
    </Frame>
  );
}

export function IconDrone(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="19" y="17" width="10" height="7" rx="2" />
      <path d="M19 19l-8-6M29 19l8-6M19 23l-8 6M29 23l8 6" />
      <path d="M7 11h8M33 11h8M7 31h8M33 31h8" />
      <path d="M24 24v5" />
      <path d="M14 42q10-6 20 0" />
    </Frame>
  );
}

export function IconSensor(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M24 42V20" />
      <circle cx="24" cy="15" r="4" />
      <path d="M31 8a10 10 0 0 1 0 14M17 8a10 10 0 0 0 0 14" />
      <path d="M14 42h20" />
      <path d="M20 42v-6h8v6" />
    </Frame>
  );
}

export function IconSurvey(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M18 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M18 14v10l-5 8M18 24l6 5 2 10" />
      <path d="M13 32l-3 9" />
      <path d="M18 17l7 3 5-4" />
    </Frame>
  );
}

/* ---------- Small decorative marks ---------- */

export function LeafMark({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M20 4c0 9-5 14-12 14-1.6 0-3-.3-4-.8C5 9.6 10.8 4.6 20 4Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M4 21C7 14 12 9.5 18 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
