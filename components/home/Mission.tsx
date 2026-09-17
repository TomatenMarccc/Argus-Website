"use client";

import Reveal from "../Reveal";
import { useT } from "../LanguageProvider";
import {
  IconSatellite,
  IconDrone,
  IconSensor,
  IconSurvey,
  LeafMark,
} from "../illustrations/Icons";

const gapIcons = [IconSatellite, IconDrone, IconSensor, IconSurvey];

/** Cross-section: the layers other methods see, and the one we work in. */
function CanopyDiagram() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="h-auto w-full"
      role="img"
      aria-label="Schnittbild eines Waldes: Satelliten und Drohnen erfassen das Kronendach, unsere Messungen finden darunter am Boden statt"
    >
      <defs>
        <linearGradient id="cd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7FAF4" />
          <stop offset="100%" stopColor="#E7F3EC" />
        </linearGradient>
      </defs>

      <rect width="420" height="300" rx="18" fill="url(#cd-sky)" />

      {/* Canopy band */}
      <path
        d="M10 128c40-30 62 6 96-14s52 12 92-6 62 16 100-4 70 4 112-6v52H10Z"
        fill="#8CC199"
        opacity="0.85"
      />

      {/* Trunks reaching down into the layer we measure. */}
      {[58, 112, 168, 224, 280, 340, 392].map((x, i) => (
        <rect
          key={x}
          x={x - 4}
          y={150 + (i % 2) * 6}
          width="8"
          height={96 - (i % 2) * 6}
          rx="3"
          fill="#7E8F72"
          opacity="0.75"
        />
      ))}

      {/* Ground */}
      <path d="M10 246h400v36a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8Z" fill="#D6CAAC" />

      {/* Above-canopy observers */}
      <g fill="none" stroke="#6B6255" strokeWidth="1.5" strokeDasharray="3 4">
        <path d="M64 34v72" />
        <path d="M300 52v54" />
      </g>
      <circle cx="64" cy="26" r="9" fill="#B5AC9D" />
      <circle cx="300" cy="44" r="9" fill="#B5AC9D" />

      {/* Our measurement layer */}
      <rect
        x="24"
        y="188"
        width="372"
        height="54"
        rx="12"
        fill="#3D7A50"
        opacity="0.12"
        stroke="#3D7A50"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <g fill="#2E5C3D">
        <circle cx="96" cy="215" r="4" />
        <circle cx="176" cy="215" r="4" />
        <circle cx="256" cy="215" r="4" />
        <circle cx="336" cy="215" r="4" />
      </g>
      <path
        d="M96 215h240"
        stroke="#2E5C3D"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Mission() {
  const t = useT();

  return (
    <section id="was-wir-tun" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="site-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
            {t.mission.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-forest-950 md:text-5xl">
            {t.mission.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
            {t.mission.lead}
          </p>
        </Reveal>

        {/* The gap we fill */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-forest-900 md:text-3xl">
              {t.mission.gapTitle}
            </h3>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-bark-700">
              {t.mission.gapLead}
            </p>

            <dl className="mt-8 space-y-4">
              {t.mission.gap.map((g, i) => {
                const Icon = gapIcons[i] ?? IconSatellite;
                return (
                  <div key={g.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-paper-100 text-forest-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="text-[0.95rem] leading-relaxed">
                      <dt className="inline font-semibold text-forest-900">
                        {g.title}{" "}
                      </dt>
                      <dd className="inline text-bark-700">{g.body}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <p className="mt-8 border-l-2 border-forest-500 pl-5 text-[0.97rem] leading-relaxed text-forest-900">
              {t.mission.gapOutro}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <CanopyDiagram />
          </Reveal>
        </div>

        {/* Why */}
        <Reveal>
          <div className="mt-20 rounded-3xl bg-forest-100 p-8 md:p-12">
            <LeafMark className="h-7 w-7 text-forest-600" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-forest-950 md:text-3xl">
              {t.mission.whyTitle}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
              {t.mission.whyBody}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
