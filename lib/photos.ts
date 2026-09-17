/**
 * Photo manifest.
 *
 * Every photograph used on the site is registered here together with where it
 * came from and under which licence it may be used. `needsLicenceReview: true`
 * means the licence has NOT been confirmed yet — those images must be cleared
 * (or replaced) before the site goes live. See public/images/photos/README.md.
 */

export type Provenance = {
  /** Where the file came from, in plain words. */
  origin: string;
  /** Licence or usage right, or "ungeprüft" when not yet established. */
  licence: string;
  /** Credit line to render under the image, when one is required. */
  credit?: string;
  /** Blocks go-live until someone confirms the licence. */
  needsLicenceReview: boolean;
};

export type Photo = {
  /** Path without the width suffix or extension. */
  base: string;
  /** Available rendered widths, ascending. */
  widths: number[];
  /** Intrinsic size of the largest variant, for aspect-ratio reservation. */
  width: number;
  height: number;
  provenance: Provenance;
};

const OWN_MATERIAL: Provenance = {
  origin: "Eigenes Material (Artemis Civil Systems)",
  licence: "Eigene Aufnahme — uneingeschränkt nutzbar",
  needsLicenceReview: false,
};

/** Supplied by the team; source and licence still to be confirmed. */
function unverified(note: string): Provenance {
  return {
    origin: `Vom Team bereitgestellt — ${note}`,
    licence: "ungeprüft",
    needsLicenceReview: true,
  };
}

export const photos = {
  waldHero: {
    base: "/images/photos/wald-hero",
    widths: [800, 1200, 1600],
    width: 1600,
    height: 1200,
    provenance: unverified("Nadelwald mit Bergkulisse"),
  },
  waldErholung: {
    base: "/images/photos/wald-erholung",
    widths: [800, 1196],
    width: 1196,
    height: 798,
    provenance: unverified("Wanderer im Laubwald"),
  },
  argusWaldFront: {
    base: "/images/photos/argus-wald-front",
    widths: [800, 1200],
    width: 1200,
    height: 1600,
    provenance: OWN_MATERIAL,
  },
  argusWaldSeite: {
    base: "/images/photos/argus-wald-seite",
    widths: [800, 1200, 1600],
    width: 1600,
    height: 1200,
    provenance: OWN_MATERIAL,
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

/** Images still awaiting a licence check — surfaced by `npm run check:photos`. */
export function photosNeedingLicenceReview(): PhotoId[] {
  return (Object.keys(photos) as PhotoId[]).filter(
    (id) => photos[id].provenance.needsLicenceReview
  );
}
