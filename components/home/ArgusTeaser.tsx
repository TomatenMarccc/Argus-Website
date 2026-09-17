"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import Photo from "../Photo";
import { useT } from "../LanguageProvider";

export default function ArgusTeaser() {
  const t = useT();

  return (
    <section id="argus" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="site-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
              {t.argusTeaser.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
              {t.argusTeaser.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-bark-700 md:text-lg">
              {t.argusTeaser.lead}
            </p>

            <ul className="mt-8 space-y-3">
              {t.argusTeaser.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[0.95rem] text-bark-700"
                >
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
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-forest-700"
            >
              {t.argusTeaser.cta}
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
                alt={t.argusTeaser.imageAlt}
                sizes="(min-width: 1024px) 38rem, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
