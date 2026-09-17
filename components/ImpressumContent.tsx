"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { company } from "@/lib/company";

export default function ImpressumContent() {
  const { language, t } = useLanguage();
  const s = t.impressum.sections;

  const blocks: Array<{ heading: string; body: React.ReactNode }> = [
    {
      heading: s.provider,
      body: (
        <>
          {company.name}
          <br />
          {s.providerBody}
        </>
      ),
    },
    {
      heading: s.contact,
      body: (
        <>
          {t.contact.emailLabel}:{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-forest-800 underline underline-offset-2 transition-colors hover:text-forest-600"
          >
            {company.email}
          </a>
        </>
      ),
    },
    { heading: s.responsible, body: s.responsibleBody },
    {
      heading: s.trademark,
      body:
        language === "de" ? company.wordmarkNotice : company.wordmarkNoticeEn,
    },
    { heading: s.liability, body: s.liabilityBody },
    { heading: s.links, body: s.linksBody },
    { heading: s.copyright, body: s.copyrightBody },
    { heading: s.dispute, body: s.disputeBody },
  ];

  return (
    <section className="bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="site-shell">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-widest2 text-forest-600 transition-colors hover:text-forest-800"
        >
          {t.argus.back}
        </Link>

        <h1 className="mt-8 font-display text-4xl font-semibold text-forest-950 md:text-6xl">
          {t.impressum.title}
        </h1>

        <div className="mt-12 max-w-3xl space-y-8 rounded-3xl border border-forest-900/10 bg-paper-100 p-7 md:p-10">
          {blocks.map((block) => (
            <section key={block.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-widest2 text-forest-600">
                {block.heading}
              </h2>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-bark-700">
                {block.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
