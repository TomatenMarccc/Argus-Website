"use client";

import Reveal from "./Reveal";
import { useT } from "./LanguageProvider";
import { LeafMark } from "./illustrations/Icons";
import SocialLinks from "./SocialLinks";
import { company } from "@/lib/company";

export default function Contact() {
  const t = useT();

  return (
    <section
      id="kontakt"
      className="relative scroll-mt-24 overflow-hidden bg-forest-800 py-24 text-paper md:py-32"
    >
      {/* Soft canopy shapes so the darkest band on the page still feels alive. */}
      <svg
        viewBox="0 0 1440 400"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full opacity-[0.13]"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 400V220c120-40 200 20 320-10s180-70 300-50 200 90 330 60 300-80 490-40v220Z"
          fill="#CBE7D5"
        />
      </svg>

      <div className="site-shell relative text-center">
        <Reveal>
          <LeafMark className="mx-auto h-8 w-8 text-forest-300" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest2 text-forest-300">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
            {t.contact.lead}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={`mailto:${company.email}`}
            className="mt-10 inline-block break-all rounded-full bg-paper px-7 py-4 font-display text-lg font-semibold text-forest-900 transition-transform hover:scale-[1.02] md:text-xl"
          >
            {company.email}
          </a>
          <p className="mt-6 text-sm text-paper/60">{t.contact.location}</p>
          <SocialLinks className="mt-7 justify-center" tone="dark" />
        </Reveal>
      </div>
    </section>
  );
}
