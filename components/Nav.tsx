"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#platform", label: "System" },
  { href: "#modules", label: "Technologie" },
  { href: "#applications", label: "Anwendungen" },
  { href: "#specs", label: "Status" },
  { href: "#contact", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="site-shell flex items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-signal-500/60" />
            <span className="absolute h-3.5 w-3.5 rounded-full border border-signal-500/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-signal-500 transition-transform group-hover:scale-125" />
          </span>
          <span className="text-sm font-bold tracking-widest text-white">
            ARGUS
            <span className="ml-1.5 font-mono text-[10px] font-medium tracking-widest2 text-ink-400">
              BY ARTEMIS
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-signal-500 px-4 py-1.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400"
          >
            Kontakt
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="site-shell flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-signal-500 px-4 py-2 text-center text-sm font-semibold text-ink-950"
          >
            Kontakt
          </a>
        </div>
      </div>
    </header>
  );
}
