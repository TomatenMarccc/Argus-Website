"use client";

import Link from "next/link";
import Photo from "../Photo";
import { useT } from "../LanguageProvider";

export default function Hero() {
  const t = useT();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper"
    >
      <Photo
        id="waldHero"
        alt={t.hero.imageAlt}
        sizes="100vw"
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Light wash so the headline stays readable while the picture keeps its
          brightness — the brief asks for a positive, never gloomy impression. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[78%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(252,251,247,0.97) 0%, rgba(252,251,247,0.93) 46%, rgba(252,251,247,0.82) 68%, rgba(252,251,247,0.35) 86%, rgba(252,251,247,0) 100%)",
        }}
      />

      <div className="site-shell relative z-10 pb-44 pt-32 text-center md:pb-52">
        <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-700">
          {t.hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.08] text-forest-950 sm:text-6xl lg:text-7xl">
          {t.hero.slogan}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-bark-900 md:text-lg">
          {t.hero.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#was-wir-tun"
            className="rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-forest-700"
          >
            {t.hero.primaryCta}
          </Link>
          <Link
            href="/argus"
            className="rounded-full border border-forest-900/25 bg-paper/85 px-7 py-3.5 text-sm font-semibold text-forest-900 backdrop-blur-sm transition-colors hover:border-forest-900/45 hover:bg-paper"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
