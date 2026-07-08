import Reveal from "./Reveal";

const groups = [
  {
    label: "Projektüberblick",
    rows: [
      ["Projekt", "Artemis Civil Systems"],
      ["System", "ARGUS II"],
      ["Typ", "Modulares, unbemanntes Bodenfahrzeug"],
      ["Stand", "22. Juni 2026"],
    ],
  },
  {
    label: "Anwendungsfeld",
    rows: [
      ["Fokus", "Lokales Umwelt-, Klima- und Infrastrukturmonitoring"],
      ["Flächen", "Wald- und Naturflächen"],
      ["Zielnutzer", "Forschung · Kommunen · Forstwirtschaft"],
      ["Weitere Nutzer", "Umweltplanung · Naturschutz"],
    ],
  },
  {
    label: "Sensorik",
    rows: [
      ["Mikroklima", "Lufttemperatur · Luftfeuchtigkeit · Luftdruck"],
      ["Luftqualität", "VOC-Index · Gaswiderstand · CO₂ · Feinstaub"],
      ["Lichtumgebung", "Helligkeit · Lux"],
      ["Kontext", "GPS-Position · Video · Akustik"],
    ],
  },
  {
    label: "Entwicklungsstand",
    rows: [
      ["Plattform", "Prototypische Fahrzeugplattform"],
      ["Daten", "Strukturierte Erfassung lokaler Messwerte"],
      ["Verarbeitung", "Raspberry-Pi-basierte Datenverarbeitung"],
      ["Nachster Fokus", "Off-Grid · Validierung · Analyseansichten"],
    ],
  },
];

export default function Specs() {
  return (
    <section
      id="specs"
      className="relative border-t border-white/5 bg-ink-900 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
              ◆&nbsp;&nbsp;PROJEKTSTATUS
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              ARGUS II
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300">
              Aktueller Prototyp mit modularer Sensorik, Telemetrie,
              Middleware und Datenverarbeitung für lokale Messdaten in Wald-
              und Naturflächen.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-studio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/frames/frame-0044.webp"
                alt="ARGUS II UGV Seitenansicht"
                className="w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Spec table */}
          <div className="space-y-8">
            {groups.map((g, i) => (
              <Reveal key={g.label} delay={i * 60}>
                <div>
                  <h3 className="mb-3 font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                    {g.label}
                  </h3>
                  <dl className="divide-y divide-white/5 rounded-xl border border-white/10 bg-ink-800/40">
                    {g.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-4 px-4 py-3"
                      >
                        <dt className="text-sm text-ink-400">{k}</dt>
                        <dd className="text-right text-sm font-medium text-white">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
