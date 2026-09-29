"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import Photo from "../Photo";
import { useT } from "../LanguageProvider";
import { team } from "@/lib/team";

export default function Team() {
  const t = useT();

  return (
    <section
      id="team"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-paper-100 py-24 md:py-32"
    >
      <div className="site-shell relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.team.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.team.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.team.lead}
          </p>
        </Reveal>

        {/* Group portrait: wide crop on desktop, taller crop on phones so the
            three of them stay recognisable instead of shrinking to a strip. */}
        <Reveal delay={80}>
          {/* Shown at the photograph's own 3:2 ratio, so nothing is cropped and
              the group stays centred exactly as it was shot. */}
          <figure className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl bg-paper-200">
            <Photo
              id="teamGroup"
              alt={t.team.groupPhotoAlt}
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="aspect-[3/2] w-full object-cover object-center"
            />
          </figure>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {team.map((member, i) => {
            const copy = t.team.members[member.key];
            return (
              <Reveal key={member.slug} delay={i * 90}>
                <li className="h-full">
                  <Link
                    href={`/team/${member.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest-900/10 bg-paper transition-colors hover:border-forest-500"
                  >
                    <Photo
                      id={member.photo}
                      alt={copy.photoAlt}
                      sizes="(min-width: 768px) 24rem, 100vw"
                      className="aspect-[4/5] w-full object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-semibold text-forest-950">
                        {copy.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-forest-600">
                        {copy.role}
                      </p>
                      <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-bark-700">
                        {copy.short}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 group-hover:text-forest-600">
                        {t.team.profileCta}
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 10h11M11 5l5 5-5 5" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
