"use client";

import { useT } from "./LanguageProvider";

export default function SkipLink() {
  const t = useT();
  return (
    <a href="#inhalt" className="skip-link">
      {t.nav.skip}
    </a>
  );
}
