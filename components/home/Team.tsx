"use client";

import Reveal from "../Reveal";
import { useT } from "../LanguageProvider";

/** Initials avatar — a stand-in until the team supplies portraits. */
function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <span
      aria-hidden="true"
      className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-forest-200 font-display text-lg font-semibold text-forest-800"
    >
      {initials}
    </span>
  );
}

export default function Team() {
  const t = useT();

  return (
    <section
      id="wer-wir-sind"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-paper-100 py-24 md:py-32"
    >
      <div className="site-shell relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.team.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.team.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.team.lead}
          </p>

          <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-100 px-4 py-2 text-xs font-semibold text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {t.team.award}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-forest-900/10 bg-paper p-6">
                <div className="flex items-center gap-4">
                  <Initials name={m.name} />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold leading-tight text-forest-900">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-forest-600">
                      {m.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[0.93rem] leading-relaxed text-bark-700">
                  {m.body}
                </p>

                {/* Rendered only once a personal note is filled in in lib/i18n.ts. */}
                {m.personal && (
                  <p className="mt-4 border-t border-forest-900/10 pt-4 font-display text-[0.95rem] italic leading-relaxed text-forest-800">
                    {m.personal}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
