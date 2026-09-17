"use client";

import Link from "next/link";
import ForestScene from "../illustrations/ForestScene";
import { useT } from "../LanguageProvider";

export default function Hero() {
  const t = useT();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <ForestScene className="absolute inset-0 h-full w-full" />

      {/* Light wash behind the headline so the type stays readable over the
          illustration without darkening the overall impression. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[72%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(252,251,247,0.93) 0%, rgba(252,251,247,0.78) 42%, rgba(252,251,247,0) 100%)",
        }}
      />

      <div className="site-shell relative z-10 pb-40 pt-32 text-center md:pb-48">
        <p className="text-xs font-semibold uppercase tracking-widest2 text-forest-700/80">
          {t.hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.08] text-forest-950 sm:text-6xl lg:text-7xl">
          {t.hero.slogan}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-bark-700 md:text-lg">
          {t.hero.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/argus"
            className="rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-forest-700"
          >
            {t.hero.primaryCta}
          </Link>
          <Link
            href="#was-wir-tun"
            className="rounded-full border border-forest-900/20 bg-paper/70 px-7 py-3.5 text-sm font-semibold text-forest-900 transition-colors hover:border-forest-900/40 hover:bg-paper"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Placeholder note — replaced together with the illustration once own
          photography is available. */}
      <p className="absolute inset-x-0 bottom-4 z-10 mx-auto max-w-md px-6 text-center text-[0.68rem] leading-snug text-forest-950/40">
        {t.hero.imageCaption}
      </p>
    </section>
  );
}
