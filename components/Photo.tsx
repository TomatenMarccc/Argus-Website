import { photos, type PhotoId } from "@/lib/photos";

type Props = {
  id: PhotoId;
  alt: string;
  /** Matches the CSS `sizes` attribute — tells the browser which width to pick. */
  sizes?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders a manifest-registered photo as a responsive <img>.
 *
 * Plain <img> rather than next/image on purpose: the site is fully static and
 * the variants are pre-rendered at build time, so there is no image optimiser
 * to run and no server needed to host one.
 */
export default function Photo({
  id,
  alt,
  sizes = "100vw",
  className = "",
  priority = false,
}: Props) {
  const photo = photos[id];
  const srcSet = photo.widths
    .map((w) => `${photo.base}-${w}.webp ${w}w`)
    .join(", ");
  const largest = photo.widths[photo.widths.length - 1];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${photo.base}-${largest}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={photo.width}
      height={photo.height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );
}
