export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 30%, rgba(74,222,128,0.14), rgba(11,13,16,0) 60%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-signal-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-16 pt-32 md:grid-cols-2 md:px-10 md:pt-28">
        {/* Left: copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-500" />
            <span className="font-mono text-[11px] tracking-widest2 text-ink-300">
              MOBILE UMWELTDATENERFASSUNG
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sehen, was
            <br />
            <span className="gradient-signal text-glow">
              Satelliten übersehen.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-300 md:text-lg">
            Artemis Civil Systems entwickelt ARGUS II: ein modulares,
            unbemanntes Bodenfahrzeug für lokale Umwelt-, Klima- und
            Infrastrukturdaten in Wald- und Naturflächen.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#platform"
              className="rounded-full bg-signal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400"
            >
              System ansehen
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Kontakt aufnehmen
            </a>
          </div>

          {/* stat row */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { v: "6,6 Mrd.", k: "Euro Extremwetterschäden/Jahr" },
              { v: "75%", k: "Bäume mit Schäden" },
              { v: "11,5 Mio.", k: "Hektar Waldfläche in Deutschland" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-2xl font-bold text-white md:text-3xl">
                  {s.v}
                </dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-400">
                  {s.k}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: product hero image */}
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/5 blur-2xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/frames/frame-0001.webp"
            alt="ARGUS II modulares unbemanntes Bodenfahrzeug"
            className="relative z-10 mx-auto w-full max-w-xl rounded-2xl border border-white/10 shadow-2xl"
            loading="eager"
          />
          <div className="absolute right-4 top-4 z-20 rounded-lg border border-white/10 bg-ink-950/70 px-3 py-2 backdrop-blur">
            <p className="font-mono text-[10px] tracking-widest text-signal-400">
              SYSTEM
            </p>
            <p className="text-sm font-semibold text-white">ARGUS II</p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest2 text-ink-400">
            SCROLL
          </span>
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20">
            <span className="mt-1.5 h-1.5 w-1.5 animate-scroll-dot rounded-full bg-signal-500" />
          </span>
        </div>
      </div>
    </section>
  );
}
