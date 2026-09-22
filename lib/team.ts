import type { PhotoId } from "./photos";
import type { SocialLink } from "./brand";

/**
 * Team roster.
 *
 * Names, roles and slugs are factual. Biographies live in `lib/i18n.ts` so they
 * stay bilingual; personal social links are empty until supplied and are simply
 * not rendered while blank.
 */
export type TeamMember = {
  slug: string;
  name: string;
  /** Stable key into the bilingual copy in lib/i18n.ts → team.members. */
  key: "simon" | "marc" | "selina";
  photo: PhotoId;
  links: SocialLink[];
};

export const team: TeamMember[] = [
  {
    slug: "simon",
    name: "Simon Pulvermüller",
    key: "simon",
    photo: "simon",
    links: [{ platform: "linkedin", label: "LinkedIn", url: "" }],
  },
  {
    slug: "marc",
    name: "Marc Abdel Rahman",
    key: "marc",
    photo: "marc",
    links: [{ platform: "linkedin", label: "LinkedIn", url: "" }],
  },
  {
    slug: "selina",
    name: "Selina Schüßler",
    key: "selina",
    photo: "selina",
    links: [{ platform: "linkedin", label: "LinkedIn", url: "" }],
  },
];

/** Alternative spellings that should still resolve, e.g. /team/sally. */
const ALIASES: Record<string, string> = { sally: "selina" };

export function resolveTeamSlug(slug: string): string {
  return ALIASES[slug.toLowerCase()] ?? slug.toLowerCase();
}

export function getTeamMember(slug: string): TeamMember | undefined {
  const resolved = resolveTeamSlug(slug);
  return team.find((m) => m.slug === resolved);
}

export const teamSlugs = team.map((m) => m.slug);
