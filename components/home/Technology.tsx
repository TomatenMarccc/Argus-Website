"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import Photo from "../Photo";
import { useT } from "../LanguageProvider";

/**
 * Technology block. ARGUS appears here as one instrument among the systems the
 * company builds — deliberately after monitoring, collection and analysis, so
 * the hardware never reads as the purpose of the business.
 */
export default function Technology() {
  const t = useT();

  return (
    <section
      id="technologie"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-paper-100 py-24 md:py-32"
    >
      <div className="site-shell relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.technology.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.technology.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.technology.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              {t.technology.argusRole}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-forest-950">
              {t.technology.argusTitle}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-bark-700">
              {t.technology.argusBody}
            </p>

            <ul className="mt-7 space-y-3">
              {t.technology.argusPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.95rem] text-bark-700">
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-1 h-4 w-4 flex-none text-forest-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m4 10.5 4 4 8-9" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/argus"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-forest-700"
            >
              {t.technology.argusCta}
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10h11M11 5l5 5-5 5" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-3xl">
              <Photo
                id="argusWaldSeite"
                alt={t.technology.argusImageAlt}
                sizes="(min-width: 1024px) 38rem, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 rounded-3xl border border-forest-900/10 bg-paper p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold text-forest-950">
              {t.technology.openTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-[0.97rem] leading-relaxed text-bark-700">
              {t.technology.openBody}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
