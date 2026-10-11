"use client";

import { useT } from "./LanguageProvider";

/**
 * Skip link.
 *
 * It is only revealed for keyboard users (`:focus-visible` in globals.css), and
 * activating it hands focus to the content and drops it again, so the link does
 * not stay parked on screen afterwards — which is what made it look stuck.
 */
export default function SkipLink() {
  const t = useT();

  function onActivate(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("inhalt");
    if (!target) return;

    event.preventDefault();
    /* main carries tabIndex={-1}, so it can take focus without being tabbable. */
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: "auto", block: "start" });
    event.currentTarget.blur();
  }

  return (
    <a href="#inhalt" className="skip-link" onClick={onActivate}>
      {t.nav.skip}
    </a>
  );
}
