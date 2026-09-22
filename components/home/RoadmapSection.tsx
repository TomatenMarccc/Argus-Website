"use client";

import Reveal from "../Reveal";
import { useT } from "../LanguageProvider";
import { roadmap, type MilestoneStatus } from "@/lib/roadmap";

const DOT: Record<MilestoneStatus, string> = {
  done: "bg-forest-600 border-forest-600",
  current: "bg-amber-500 border-amber-500",
  planned: "bg-paper border-forest-900/25",
};

const BADGE: Record<MilestoneStatus, string> = {
  done: "bg-forest-200 text-forest-800",
  current: "bg-amber-100 text-amber-700",
  planned: "bg-paper-200 text-bark-700",
};

/**
 * Horizontal rail on desktop, vertical timeline on mobile — the same markup,
 * so there is only one source of truth for the milestones.
 */
export default function RoadmapSection() {
  const t = useT();

  return (
    <section id="roadmap" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="site-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.roadmap.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.roadmap.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.roadmap.lead}
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-5">
          {/* The rail: vertical on small screens, horizontal from lg up. */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-forest-900/15 lg:left-0 lg:right-0 lg:top-[7px] lg:bottom-auto lg:h-px lg:w-auto"
          />

          {roadmap.map((milestone, i) => {
            const copy = t.roadmap.milestones[milestone.id as keyof typeof t.roadmap.milestones];
            return (
              <Reveal key={milestone.id} delay={(i % 5) * 70}>
                <li className="relative pl-8 lg:pl-0 lg:pt-8">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 lg:top-0 ${DOT[milestone.status]}`}
                  />
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider ${BADGE[milestone.status]}`}
                  >
                    {t.roadmap.status[milestone.status]}
                  </span>
                  {copy.period && (
                    <p className="mt-3 font-display text-sm font-semibold text-forest-600">
                      {copy.period}
                    </p>
                  )}
                  <h3 className="mt-3 font-display text-lg font-semibold text-forest-950">
                    {copy.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-bark-700">
                    {copy.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal>
          <p className="mt-12 text-sm text-bark-500">{t.roadmap.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
