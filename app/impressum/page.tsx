import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Impressum — Artemis Civil Systems",
  description: "Impressum und Kontaktangaben von Artemis Civil Systems.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-ink-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="site-shell relative">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500 transition-colors hover:text-signal-400"
          >
            Zurück zur Startseite
          </Link>

          <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">
            Impressum
          </h1>

          <div className="mt-12 space-y-8 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 lg:max-w-5xl">
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                {company.name}
                <br />
                Anschrift und weitere Pflichtangaben werden vor Veröffentlichung
                ergänzt.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Kontakt
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                E-Mail:{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-white transition-colors hover:text-signal-400"
                >
                  {company.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Verantwortlich für den Inhalt
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Verantwortliche Person im Sinne des § 18 Abs. 2 MStV wird
                ergänzt, sofern journalistisch-redaktionelle Inhalte angeboten
                werden.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Markenhinweis
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                {company.wordmarkNotice}
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Haftung für Inhalte
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Eine
                Verpflichtung zur Überwachung übermittelter oder gespeicherter
                fremder Informationen besteht nur im Rahmen der gesetzlichen
                Vorgaben. Bei Bekanntwerden konkreter Rechtsverletzungen
                entfernen wir entsprechende Inhalte umgehend.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Haftung für Links
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Diese Website kann Links zu externen Websites Dritter enthalten,
                auf deren Inhalte wir keinen Einfluss haben. Für diese fremden
                Inhalte ist der jeweilige Anbieter oder Betreiber der verlinkten
                Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
                entfernen wir entsprechende Links umgehend.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Urheberrecht
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Die auf dieser Website erstellten Inhalte, Texte, Bilder,
                Grafiken und sonstigen Werke unterliegen dem deutschen
                Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder
                sonstige Nutzung außerhalb der Grenzen des Urheberrechts
                bedürfen der Zustimmung der jeweiligen Rechteinhaber.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                Verbraucherstreitbeilegung
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Wir sind nicht verpflichtet und nicht bereit, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen, sofern keine gesetzliche Pflicht besteht.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
