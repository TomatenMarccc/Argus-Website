import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-green opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(74,222,128,0.12), rgba(7,8,10,0) 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
            ◆&nbsp;&nbsp;KONTAKT
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Von der Vision zum Prototyp.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg">
            ARGUS I ist für Dezember 2025 eingeordnet, ARGUS II für Juni 2026.
            Der nachste Schritt ist die Validierung stabiler Datenerfassung
            unter realen Bedingungen.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            method="post"
            encType="text/plain"
            className="mx-auto mt-10 grid max-w-xl gap-3 text-left sm:grid-cols-2"
          >
            <input
              required
              name="name"
              placeholder="Name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="E-Mail"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60"
            />
            <input
              name="organisation"
              placeholder="Organisation"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60 sm:col-span-2"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Wofür interessieren Sie sich?"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60 sm:col-span-2"
            />
            <button
              type="submit"
              className="rounded-full bg-signal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400 sm:col-span-2"
            >
              Interesse mitteilen
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
