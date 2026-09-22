"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useT } from "./LanguageProvider";
import { company } from "@/lib/company";

export default function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Absolute hrefs so the same nav works from /argus and /impressum too. */
  const links = [
    { href: "/#was-wir-tun", label: t.nav.what },
    { href: "/#datenerfassung", label: t.nav.collection },
    { href: "/#roadmap", label: t.nav.roadmap },
    { href: "/#team", label: t.nav.team },
    { href: "/news", label: t.nav.news },
    { href: "/argus", label: t.nav.argus },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-forest-900/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="site-shell flex items-center justify-between py-3.5">
        <Link
          href="/"
          className="text-forest-900 transition-opacity hover:opacity-75"
          onClick={() => setOpen(false)}
        >
          <Logo />
          <span className="sr-only">{company.name}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-forest-900/70 transition-colors hover:text-forest-800"
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle />
          <Link
            href="/#kontakt"
            className="rounded-full bg-forest-800 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-forest-700"
          >
            {t.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/15 text-forest-900"
          >
            <span className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-forest-900/10 bg-paper/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="site-shell flex flex-col gap-1 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base font-medium text-forest-900/80 hover:text-forest-800"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-forest-800 px-4 py-3 text-center text-sm font-semibold text-paper"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
