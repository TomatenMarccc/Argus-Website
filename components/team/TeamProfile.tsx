"use client";

import Link from "next/link";
import Photo from "../Photo";
import SocialLinks from "../SocialLinks";
import { useT } from "../LanguageProvider";
import { socialLinks } from "@/lib/brand";
import type { TeamMember } from "@/lib/team";

export default function TeamProfile({
  member,
  others,
}: {
  member: TeamMember;
  others: TeamMember[];
}) {
  const t = useT();
  const copy = t.team.members[member.key];
  const personalLinks = socialLinks(member.links);

  return (
    <>
      <section className="bg-paper-100 pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="site-shell">
          <Link
            href="/#team"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-forest-600 transition-colors hover:text-forest-800"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 10H5M9 5l-5 5 5 5" />
            </svg>
            {t.team.backToTeam}
          </Link>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <figure className="overflow-hidden rounded-3xl bg-paper-200 lg:sticky lg:top-28">
              <Photo
                id={member.photo}
                alt={copy.photoAlt}
                sizes="(min-width: 1024px) 28rem, 100vw"
                priority
                className="max-h-[32rem] w-full object-cover object-top sm:max-h-[38rem]"
              />
            </figure>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
                {t.team.roleLabel}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-forest-950 md:text-6xl">
                {copy.name}
              </h1>
              <p className="mt-3 font-display text-lg italic text-forest-700 md:text-xl">
                {copy.role}
              </p>

              <p className="mt-8 text-base leading-relaxed text-bark-700 md:text-lg">
                {copy.body}
              </p>

              {/* Rendered only once a personal note is filled in in lib/i18n.ts. */}
              {copy.personal && (
                <p className="mt-6 border-l-2 border-forest-500 pl-5 font-display text-[1.05rem] italic leading-relaxed text-forest-800">
                  {copy.personal}
                </p>
              )}

              {personalLinks.length > 0 && (
                <div className="mt-9">
                  <h2 className="text-xs font-semibold uppercase tracking-widest2 text-forest-900/45">
                    {t.footer.followUs}
                  </h2>
                  <SocialLinks className="mt-3" links={member.links} size="sm" />
                </div>
              )}

              <p className="mt-9 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-100 px-4 py-2 text-xs font-semibold text-amber-700">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {t.team.award}
              </p>

              <div className="mt-10 rounded-2xl border border-forest-900/10 bg-paper p-6">
                <h2 className="font-display text-lg font-semibold text-forest-950">
                  {t.contact.title}
                </h2>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-bark-700">
                  {t.contact.lead}
                </p>
                <Link
                  href="/#kontakt"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 hover:text-forest-600"
                >
                  {t.nav.contact}
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 10h11M11 5l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="site-shell">
          <h2 className="font-display text-2xl font-semibold text-forest-950">
            {t.team.title}
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {others.map((other) => {
              const otherCopy = t.team.members[other.key];
              return (
                <li key={other.slug}>
                  <Link
                    href={`/team/${other.slug}`}
                    className="group flex items-center gap-5 rounded-2xl border border-forest-900/10 bg-paper-100 p-4 transition-colors hover:border-forest-500"
                  >
                    <Photo
                      id={other.photo}
                      alt=""
                      sizes="80px"
                      className="h-20 w-20 flex-none rounded-xl object-cover object-top"
                    />
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-semibold text-forest-950">
                        {otherCopy.name}
                      </span>
                      <span className="mt-0.5 block text-xs font-semibold uppercase tracking-wider text-forest-600">
                        {otherCopy.role}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
