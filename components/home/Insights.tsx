"use client";

import Reveal from "../Reveal";
import { useT } from "../LanguageProvider";
import { LeafMark } from "../illustrations/Icons";

export default function Insights() {
  const t = useT();

  return (
    <section id="auswertung" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="site-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.insights.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.insights.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.insights.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {t.insights.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 90}>
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2 w-2 flex-none rounded-full bg-forest-500"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-bark-700">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 rounded-3xl bg-forest-100 p-8 md:p-12">
            <LeafMark className="h-7 w-7 text-forest-600" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-forest-950 md:text-3xl">
              {t.insights.platformTitle}
            </h3>
            <p className="mt-2 font-display text-sm italic text-forest-700">
              {t.insights.platformExpansion}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bark-700">
              {t.insights.platformBody}
            </p>
            <p className="mt-6 text-[0.93rem] font-medium text-forest-800">
              {t.insights.disclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
