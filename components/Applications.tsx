import Reveal from "./Reveal";

const apps = [
  {
    title: "Kommunen",
    body: "Lokale Lagebilder für Klimaanpassung, Gefahrenprävention, Planung, Kontrolle und Reporting.",
    icon: "M12 2c1 4 4 6 4 10a4 4 0 1 1-8 0c0-4 3-6 4-10z",
  },
  {
    title: "Forschung",
    body: "Wiederholbare Vor-Ort-Daten für Analyse, Vergleich und langfristige Beobachtung von Wald- und Naturflächen.",
    icon: "M3 15c2 0 3-1.5 4.5-1.5S10 15 12 15s3-1.5 4.5-1.5S19 15 21 15M3 19c2 0 3-1.5 4.5-1.5S10 19 12 19s3-1.5 4.5-1.5S19 19 21 19",
  },
  {
    title: "Forstwirtschaft & Naturschutz",
    body: "Räumlich differenzierte Messdaten als Grundlage für Waldschutz, Umweltplanung und Naturschutzentscheidungen.",
    icon: "M3 20h18M6 20l4-9 4 5 2-4 2 8",
  },
  {
    title: "Bürgerbeteiligung",
    body: "Verständliche lokale Daten, damit Umweltveränderungen nachvollziehbarer und Beteiligung konkreter werden.",
    icon: "M12 2l3 6 6 .5-4.5 4 1.5 6-6-3.5-6 3.5 1.5-6L3 8.5 9 8z",
  },
  {
    title: "Bildung",
    body: "Lokale Umweltdaten für Lernen, Orientierung und Vermittlung von Klima- und Naturzusammenhängen.",
    icon: "M4 8h12a3 3 0 1 0-3-3M4 12h16M4 16h10a3 3 0 1 1-3 3",
  },
  {
    title: "Tourismus",
    body: "Datenbasierte Naturerlebnisse, Orientierung und Kommunikation für Standorte in Wald- und Naturräumen.",
    icon: "M12 3v18M12 8c-3 0-5-2-6-4 3 0 5 1 6 3M12 8c3 0 5-2 6-4-3 0-5 1-6 3",
  },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative border-t border-white/5 bg-ink-950 py-24 md:py-32"
    >
      <div className="site-shell relative">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
            ◆&nbsp;&nbsp;ANWENDUNGSFELDER
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Lokale Daten werden zu realem Nutzen.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-colors hover:border-signal-500/40">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-signal-500/30 bg-signal-500/10 text-signal-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden
                  >
                    <path d={a.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
