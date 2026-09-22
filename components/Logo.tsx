import { brand } from "@/lib/brand";

/**
 * Official Artemis Civil Systems mark. The artwork is gold on black, so it sits
 * in its own dark tile rather than being recoloured — the original file is used
 * as supplied, never a redrawn copy.
 */
export default function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  const srcSet = brand.logoMarkWidths
    .map((w) => `${brand.logoMark}-${w}.webp ${w}w`)
    .join(", ");

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${brand.logoMark}-256.webp`}
        srcSet={srcSet}
        sizes="40px"
        alt=""
        width={256}
        height={256}
        aria-hidden="true"
        className="h-10 w-10 flex-none rounded-xl bg-[#0a0a0a] object-contain"
      />
      {showWordmark && (
        <span className="font-display text-[0.95rem] font-semibold leading-tight tracking-tight">
          Artemis
          <span className="block font-sans text-[0.62rem] font-medium uppercase tracking-widest2 opacity-60">
            Civil Systems
          </span>
        </span>
      )}
    </span>
  );
}
