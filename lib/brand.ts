/**
 * Brand assets and outbound links.
 *
 * Social profiles are intentionally empty until the real URLs are supplied.
 * `socialLinks()` only returns entries that actually have a URL, so nothing
 * renders as a dead link — add a `url` and the icon appears everywhere at once
 * (footer, news page, contact block).
 */

export type SocialPlatform = "linkedin" | "instagram" | "youtube" | "github";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  /** TODO: Echte Profil-URL eintragen. Leer = Link wird nirgends gerendert. */
  url: string;
};

/** Company-wide profiles. */
export const social: SocialLink[] = [
  { platform: "linkedin", label: "LinkedIn", url: "" },
  { platform: "instagram", label: "Instagram", url: "" },
  { platform: "youtube", label: "YouTube", url: "" },
];

export function socialLinks(links: SocialLink[] = social): SocialLink[] {
  return links.filter((l) => l.url.trim().length > 0);
}

export const brand = {
  logoMark: "/images/brand/logo-mark",
  logoMarkWidths: [96, 256, 512],
  logoFull: "/images/brand/logo-full",
  logoFullWidths: [320, 600],
};
