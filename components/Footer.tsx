"use client";

import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { useT } from "./LanguageProvider";
import { company } from "@/lib/company";
import { socialLinks } from "@/lib/brand";

export default function Footer() {
  const t = useT();
  const hasSocials = socialLinks().length > 0;

  const columns = [
    {
      title: t.footer.columnsTitle.site,
      links: [
        { label: t.nav.what, href: "/#was-wir-tun" },
        { label: t.nav.collection, href: "/#datenerfassung" },
        { label: t.nav.insights, href: "/#auswertung" },
        { label: t.nav.roadmap, href: "/#roadmap" },
      ],
    },
    {
      title: t.footer.columnsTitle.project,
      links: [
        { label: t.nav.argus, href: "/argus" },
        { label: t.nav.team, href: "/#team" },
        { label: t.nav.news, href: "/news" },
        { label: t.nav.contact, href: "/#kontakt" },
      ],
    },
    {
      title: t.footer.columnsTitle.legal,
      links: [{ label: t.footer.imprint, href: "/impressum" }],
    },
  ];

  return (
    <footer className="border-t border-forest-900/10 bg-forest-100">
      <div className="site-shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-forest-900" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-forest-900/65">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-forest-900/65">{t.contact.location}</p>

            {hasSocials && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest2 text-forest-900/45">
                  {t.footer.followUs}
                </h4>
                <SocialLinks className="mt-3" size="sm" />
              </div>
            )}
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest2 text-forest-900/45">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label + l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-forest-900/75 transition-colors hover:text-forest-700"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-forest-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-forest-900/50">
            © {new Date().getFullYear()} {company.name}. {t.footer.rights}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="text-xs text-forest-900/60 transition-colors hover:text-forest-700"
          >
            {company.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
