"use client";

import Reveal from "../Reveal";
import Photo from "../Photo";
import { useT } from "../LanguageProvider";
import {
  IconHabitat,
  IconClimate,
  IconHealth,
  IconMemory,
} from "../illustrations/Icons";

const icons = [IconHabitat, IconClimate, IconHealth, IconMemory];

export default function Value() {
  const t = useT();

  return (
    <section id="wert" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="site-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.value.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.value.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.value.lead}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <figure className="mt-12 overflow-hidden rounded-3xl">
            <Photo
              id="waldErholung"
              alt={t.value.photoAlt}
              sizes="(min-width: 1024px) 78rem, 100vw"
              className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[380px]"
            />
          </figure>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {t.value.items.map((item, i) => {
            const Icon = icons[i] ?? IconHabitat;
            return (
              <Reveal key={item.title} delay={(i % 2) * 90}>
                <div className="flex gap-5">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
                    <Icon className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-forest-900">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-bark-700">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
