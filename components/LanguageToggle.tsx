"use client";

import { useLanguage } from "./LanguageProvider";
import { LANGUAGES } from "@/lib/i18n";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-forest-900/15 bg-paper/70 p-0.5 ${className}`}
      role="group"
      aria-label={t.meta.switchLabel}
    >
      {LANGUAGES.map((code) => {
        const active = code === language;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
              active
                ? "bg-forest-800 text-paper"
                : "text-forest-900/55 hover:text-forest-900"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
