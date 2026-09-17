/** Wordmark lockup: a leaf inside a sensing arc — growth plus measurement. */
export default function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 flex-none"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          cx="16"
          cy="16"
          r="14.5"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <path
          d="M4.5 21A13.5 13.5 0 0 1 16 2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="1.5 3.5"
        />
        <path
          d="M24 8c0 8.5-4.8 13-11.4 13-1.5 0-2.9-.3-3.8-.8C9.6 13 15 8.6 24 8Z"
          fill="currentColor"
        />
        <path
          d="M8.5 25.5C11 19.5 15.5 15.4 21 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      {showWordmark && (
        <span className="font-display text-[0.95rem] font-semibold leading-tight tracking-tight">
          Artemis
          <span className="block text-[0.62rem] font-sans font-medium uppercase tracking-widest2 opacity-60">
            Civil Systems
          </span>
        </span>
      )}
    </span>
  );
}
