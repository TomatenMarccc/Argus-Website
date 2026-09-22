# News-Inhalte

Diese JSON-Dateien sind der **Fallback-Speicher** für News. Sie werden gelesen,
solange keine Supabase-Zugangsdaten gesetzt sind (`SUPABASE_URL` und
`SUPABASE_SERVICE_ROLE_KEY`). Sobald Supabase konfiguriert ist, kommen die News
aus der Datenbank und diese Dateien werden ignoriert.

## Hinweis zu den beiden vorhandenen Beiträgen

Beide Einträge stützen sich inhaltlich auf interne Dokumente aus dem Google
Drive (Executive Summary Juli 2026, ARGUS Platform Architecture August 2026).
Nichts darin ist erfunden — **aber bitte vor der Veröffentlichung gegenlesen**:

- Die Veröffentlichungsdaten entsprechen dem Datum des jeweiligen Quelldokuments,
  nicht einem tatsächlichen Veröffentlichungszeitpunkt.
- Ob ihr diese Inhalte öffentlich kommunizieren wollt, ist eure Entscheidung.

Zum Entfernen genügt es, die Datei zu löschen; zum Zurückhalten `"status"` auf
`"draft"` setzen.

## Felder

`id`, `slug`, `title`, `excerpt`, `body`, `category`, `tags`, `coverImage`,
`images`, `publishedAt` (JJJJ-MM-TT), `status` (`draft` | `published`) sowie
optional `titleEn`, `excerptEn`, `bodyEn`. Fehlen die englischen Felder, zeigt
die englische Seite den deutschen Text.

Im `body` werden Leerzeilen zu Absätzen, `## ` zu Zwischenüberschriften und
`- ` zu Aufzählungen.
