"use client";

import Reveal from "../Reveal";
import { useT } from "../LanguageProvider";
import { IconSatellite, IconSensor, IconHabitat, IconClimate } from "../illustrations/Icons";

const icons = [IconHabitat, IconSensor, IconClimate, IconSatellite];

/** Lead block: what the company actually does, before any hardware is named. */
export default function What() {
  const t = useT();

  return (
    <section id="was-wir-tun" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="site-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.what.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.what.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.what.lead}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.what.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? IconHabitat;
            return (
              <Reveal key={pillar.title} delay={(i % 4) * 80}>
                <li className="h-full rounded-2xl border border-forest-900/10 bg-paper-100 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-xs font-semibold text-forest-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-forest-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-bark-700">
                    {pillar.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal>
          <p className="mt-10 border-l-2 border-amber-500 pl-5 text-[0.97rem] leading-relaxed text-forest-900">
            {t.what.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
