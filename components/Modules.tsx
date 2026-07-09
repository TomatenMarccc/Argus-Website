import Reveal from "./Reveal";
import { modules } from "@/lib/modules";

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative border-t border-white/5 bg-ink-900 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="site-shell relative">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
            ◆&nbsp;&nbsp;TECHNOLOGIE
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Vom Satellitenbild zur lokalen Realität.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 md:text-lg">
            ARGUS II verbindet Head Node, Sensor-Payload, Middleware und Chassis
            zu einer mobilen Plattform für Umwelt-, Klima- und
            Infrastrukturmonitoring vor Ort.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 80}>
              <article
                id={m.id}
                className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/40 hover:bg-ink-800"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-signal-500">
                    {m.no}
                  </span>
                  <span className="h-px w-12 bg-white/10 transition-colors group-hover:bg-signal-500/50" />
                </div>

                <h3 className="text-xl font-semibold text-white">{m.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-signal-500/80">
                  {m.tagline}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                  {m.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-ink-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-signal-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal delay={160}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-signal-500/30 bg-gradient-to-br from-signal-600/15 to-ink-800/40 p-6">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Nächste Entwicklungsphase
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">
                  Fokus: vollständige Off-Grid-Fähigkeit, stabile
                  Datenerfassung im Gelände, strukturierte Speicherung und
                  erste Analyseansichten.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-signal-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400"
              >
                Interesse mitteilen
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
