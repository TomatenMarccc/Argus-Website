import Reveal from "./Reveal";
import { company } from "@/lib/company";

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

      <div className="site-shell relative text-center">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
            ◆&nbsp;&nbsp;KONTAKT
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Kontakt.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg">
            Fragen zu ARGUS II, Kooperationen oder Einsatzfeldern können direkt
            an Artemis Civil Systems gerichtet werden.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-xl text-left">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Kontakt
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                {company.name}
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-white transition-colors hover:text-signal-400"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
