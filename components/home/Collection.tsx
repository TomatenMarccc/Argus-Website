"use client";

import Reveal from "../Reveal";
import { useT } from "../LanguageProvider";
import { IconSatellite, IconDrone, IconSensor, IconSurvey } from "../illustrations/Icons";
import CanopyDiagram from "../illustrations/CanopyDiagram";

const gapIcons = [IconSatellite, IconDrone, IconSensor, IconSurvey];

export default function Collection() {
  const t = useT();

  return (
    <section
      id="datenerfassung"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-paper-100 py-24 md:py-32"
    >
      <div className="site-shell relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.collection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.collection.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.collection.lead}
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-forest-900 md:text-3xl">
              {t.collection.gapTitle}
            </h3>
            <dl className="mt-7 space-y-4">
              {t.collection.gap.map((g, i) => {
                const Icon = gapIcons[i] ?? IconSatellite;
                return (
                  <div key={g.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-paper text-forest-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="text-[0.95rem] leading-relaxed">
                      <dt className="inline font-semibold text-forest-900">{g.title} </dt>
                      <dd className="inline text-bark-700">{g.body}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
            <p className="mt-8 border-l-2 border-forest-500 pl-5 text-[0.97rem] leading-relaxed text-forest-900">
              {t.collection.gapOutro}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <CanopyDiagram />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold text-forest-900">
              {t.collection.whatTitle}
            </h3>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-forest-900/10 bg-forest-900/10 sm:grid-cols-2 lg:grid-cols-3">
              {t.collection.what.map((item) => (
                <div key={item.label} className="bg-paper p-5">
                  <dt className="text-sm font-semibold text-forest-900">{item.label}</dt>
                  <dd className="mt-1 text-[0.9rem] leading-relaxed text-bark-700">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
