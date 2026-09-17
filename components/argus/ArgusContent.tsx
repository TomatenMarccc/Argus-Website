"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import Photo from "../Photo";
import Turntable from "./Turntable";
import { useT } from "../LanguageProvider";
import { LeafMark } from "../illustrations/Icons";

export default function ArgusContent() {
  const t = useT();

  return (
    <>
      {/* ---------- Intro ---------- */}
      <section className="relative overflow-hidden bg-paper-100 pb-20 pt-32 md:pb-28 md:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(70% 55% at 75% 10%, rgba(203,231,213,0.75), rgba(246,244,236,0) 70%)",
          }}
        />
        <div className="site-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-forest-600 transition-colors hover:text-forest-800"
            >
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
                <path d="M16 10H5M9 5l-5 5 5 5" />
              </svg>
              {t.argus.back}
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-forest-600">
              {t.argus.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-none text-forest-950 md:text-7xl">
              {t.argus.title}
            </h1>
            <p className="mt-3 font-display text-base italic text-forest-700 md:text-lg">
              {t.argus.expansion}
            </p>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-bark-700 md:text-lg">
              {t.argus.lead}
            </p>
          </div>

          <figure className="overflow-hidden rounded-3xl">
            <Photo
              id="argusWaldFront"
              alt={t.argus.heroImageAlt}
              sizes="(min-width: 1024px) 34rem, 100vw"
              priority
              className="h-full max-h-[34rem] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Principle + ATHENE ---------- */}
      <section className="bg-paper py-24 md:py-28">
        <div className="site-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              {t.argus.principleTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-bark-700 md:text-lg">
              {t.argus.principleBody}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-forest-900/10 bg-forest-100 p-8">
              <LeafMark className="h-7 w-7 text-forest-600" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-forest-950">
                {t.argus.athene.title}
              </h3>
              <p className="mt-2 font-display text-sm italic text-forest-700">
                {t.argus.athene.expansion}
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-bark-700">
                {t.argus.athene.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Flow ---------- */}
      <section className="paper-grain relative overflow-hidden bg-paper-100 py-24 md:py-28">
        <div className="site-shell relative">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              {t.argus.flowTitle}
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.argus.flow.map((step, i) => (
              <Reveal key={step.step} delay={(i % 4) * 80}>
                <li className="h-full rounded-2xl border border-forest-900/10 bg-paper p-6">
                  <span className="font-display text-3xl font-semibold text-forest-300">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-forest-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-bark-700">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Architecture ---------- */}
      <section className="bg-paper py-24 md:py-28">
        <div className="site-shell">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              {t.argus.architectureTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bark-700 md:text-lg">
              {t.argus.architectureLead}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.argus.architecture.map((mod, i) => (
              <Reveal key={mod.name} delay={i * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-forest-900/10 bg-paper-100 p-7">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-sm font-semibold text-forest-600">
                      {mod.no}
                    </span>
                    <span className="h-px w-10 bg-forest-900/15" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-forest-950">
                    {mod.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-forest-600">
                    {mod.tagline}
                  </p>
                  <p className="mt-4 text-[0.93rem] leading-relaxed text-bark-700">
                    {mod.body}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-forest-900/10 pt-5">
                    {mod.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[0.9rem] text-bark-700"
                      >
                        <span className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-forest-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sensors + turntable ---------- */}
      <section className="bg-forest-100 py-24 md:py-28">
        <div className="site-shell grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              {t.argus.sensorTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-bark-700">
              {t.argus.sensorLead}
            </p>

            <dl className="mt-8 divide-y divide-forest-900/10 rounded-2xl border border-forest-900/10 bg-paper">
              {t.argus.sensors.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-forest-900">
                    {s.label}
                  </dt>
                  <dd className="text-sm text-bark-700 sm:text-right">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="font-display text-xl font-semibold text-forest-950">
              {t.argus.galleryTitle}
            </h3>
            <p className="mt-2 text-[0.93rem] text-bark-700">
              {t.argus.galleryLead}
            </p>
            <div className="mt-6">
              <Turntable
                label={t.argus.turntableLabel}
                hint={t.argus.turntableHint}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Status ---------- */}
      <section className="bg-paper py-24 md:py-28">
        <div className="site-shell">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              {t.argus.statusTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bark-700">
              {t.argus.statusLead}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.argus.status.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <article className="h-full rounded-2xl border border-forest-900/10 bg-paper-100 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-forest-950">
                      {s.label}
                    </h3>
                    <span className="rounded-full bg-forest-200 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-forest-800">
                      {s.state}
                    </span>
                  </div>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-bark-700">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-paper pb-24 md:pb-28">
        <div className="site-shell">
          <Reveal>
            <div className="rounded-3xl bg-forest-800 p-10 text-center text-paper md:p-14">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                {t.argus.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/75">
                {t.argus.ctaBody}
              </p>
              <Link
                href="/#kontakt"
                className="mt-8 inline-block rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-forest-900 transition-transform hover:scale-[1.02]"
              >
                {t.argus.ctaButton}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
