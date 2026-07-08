const cols = [
  {
    title: "System",
    links: [
      { label: "Systemübersicht", href: "#platform" },
      { label: "Technologie", href: "#modules" },
      { label: "Projektstatus", href: "#specs" },
    ],
  },
  {
    title: "Nutzung",
    links: [
      { label: "Anwendungen", href: "#applications" },
      { label: "Kommunen", href: "#applications" },
      { label: "Forschung", href: "#applications" },
    ],
  },
  {
    title: "Projekt",
    links: [
      { label: "Kontakt", href: "#contact" },
      { label: "Entwicklungsphase", href: "#contact" },
      { label: "ARGUS II", href: "#specs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-signal-500/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-signal-500" />
              </span>
              <span className="text-sm font-bold tracking-widest text-white">
                ARGUS
                <span className="ml-1.5 font-mono text-[10px] font-medium tracking-widest2 text-ink-400">
                  BY ARTEMIS
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Mobile, geländegängige Messsysteme für lokale Umweltveränderungen
              in Wald- und Naturflächen.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-widest2 text-ink-400">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-300 transition-colors hover:text-signal-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-mono text-[11px] tracking-widest text-ink-500">
            © {new Date().getFullYear()} ARTEMIS CIVIL SYSTEMS
          </p>
          <p className="font-mono text-[11px] tracking-widest text-ink-500">
            MOBILE UMWELTDATENERFASSUNG · ARGUS II
          </p>
        </div>
      </div>
    </footer>
  );
}
