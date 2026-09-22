import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import SkipLink from "@/components/SkipLink";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TeamProfile from "@/components/team/TeamProfile";
import { getTeamMember, resolveTeamSlug, team, teamSlugs } from "@/lib/team";
import { dictionaries } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site-url";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return teamSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const member = getTeamMember(params.slug);
  if (!member) return { title: "Team" };

  const copy = dictionaries.de.team.members[member.key];
  return {
    title: `${copy.name} — ${copy.role}`,
    description: copy.short,
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: {
      title: `${copy.name} — ${copy.role} | Artemis Civil Systems`,
      description: copy.short,
      type: "profile",
      url: `/team/${member.slug}`,
    },
  };
}

export default function TeamMemberPage({ params }: Props) {
  const member = getTeamMember(params.slug);
  if (!member) notFound();

  /* Keep alternative spellings (e.g. /team/sally) on one canonical URL. */
  const canonical = resolveTeamSlug(params.slug);
  if (canonical !== params.slug) redirect(`/team/${canonical}`);

  const siteUrl = getSiteUrl();
  const copy = dictionaries.de.team.members[member.key];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: copy.name,
    jobTitle: copy.role,
    worksFor: { "@id": new URL("/#organization", siteUrl).toString() },
    url: new URL(`/team/${member.slug}`, siteUrl).toString(),
  };

  const others = team.filter((m) => m.slug !== member.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SkipLink />
      <Nav />
      <main id="inhalt" className="relative w-full">
        <TeamProfile member={member} others={others} />
      </main>
      <Footer />
    </>
  );
}
