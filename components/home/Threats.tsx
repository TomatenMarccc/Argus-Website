"use client";

import Reveal from "../Reveal";
import { useT } from "../LanguageProvider";
import {
  IconDrought,
  IconFire,
  IconPest,
  IconStorm,
  IconBiodiversity,
} from "../illustrations/Icons";

const icons = [IconDrought, IconFire, IconPest, IconStorm, IconBiodiversity];

export default function Threats() {
  const t = useT();

  return (
    <section
      id="bedrohungen"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-paper-100 py-24 md:py-32"
    >
      <div className="site-shell relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-amber-600">
            {t.threats.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.threats.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.threats.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.threats.items.map((item, i) => {
            const Icon = icons[i] ?? IconDrought;
            return (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <article className="h-full rounded-2xl border border-forest-900/10 bg-paper p-6 transition-colors hover:border-amber-500/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-forest-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-bark-700">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}

          {/* The closing note sits in the grid so the row never ends ragged. */}
          <Reveal delay={160}>
            <div className="flex h-full items-center rounded-2xl bg-forest-800 p-6 text-paper">
              <p className="font-display text-lg leading-snug">
                {t.threats.outro}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
