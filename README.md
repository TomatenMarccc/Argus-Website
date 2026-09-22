# Artemis Civil Systems — Website

Unternehmenswebsite von **Artemis Civil Systems**, gebaut mit **Next.js 14 (App
Router) + TypeScript + Tailwind CSS**.

## Positionierung

Die Website stellt **Wildlife & Environmental Monitoring** in den Mittelpunkt,
nicht eine einzelne Hardwareplattform. Die inhaltliche Hierarchie der
Startseite folgt bewusst dieser Reihenfolge:

1. Monitoring von Wildtieren und Lebensräumen
2. Datenerfassung
3. Auswertung und Erkenntnisse (ATHENE)
4. Technologie / Systeme
5. **ARGUS** — als derzeit eingesetztes Werkzeug zur Datenerfassung

ARGUS bleibt prominent sichtbar, erscheint aber überall als Instrument
innerhalb des größeren Ökosystems, nie als Unternehmenszweck.

Alle inhaltlichen Aussagen stammen aus der Executive Summary (Juli 2026) und
dem ARGUS Platform Architecture Dokument (August 2026).

## Tech-Stack

- **Next.js 14** App Router, React 18
- **TypeScript** — `npx tsc --noEmit` muss sauber durchlaufen
- **Tailwind CSS**
- Keine zusätzlichen Runtime-Dependencies (auch Supabase wird über `fetch`
  angesprochen, nicht über einen Client)

## Loslegen

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktionsbuild
npm start
```

## Projektstruktur

```
app/
  page.tsx                  # Startseite (Hierarchie s. o.)
  argus/page.tsx            # ARGUS-Detailseite
  news/page.tsx             # News-Übersicht
  news/[slug]/page.tsx      # Einzelner Beitrag
  team/[slug]/page.tsx      # Team-Profil (/team/sally -> /team/selina)
  impressum/page.tsx
  admin/                    # interner Bereich, nicht in der Navigation
  api/                      # Session, News-CRUD, Bild-Upload
  icon.png apple-icon.png   # Favicon aus dem offiziellen Logo
components/
  home/                     # Hero, What, Value, Threats, Collection,
                            # Insights, Technology, RoadmapSection, Team,
                            # LatestNews
  news/ team/ admin/        # jeweilige Bereichskomponenten
  Photo.tsx SocialLinks.tsx Logo.tsx Nav.tsx Footer.tsx …
lib/
  i18n.ts                   # ALLE Texte, deutsch und englisch
  photos.ts                 # Bild-Manifest inkl. Herkunft und Lizenz
  team.ts roadmap.ts brand.ts
  news/                     # Typen, Validierung, Stores
  admin/auth.ts             # serverseitige Session
content/news/*.json         # News-Fallback ohne Datenbank
supabase/migrations/        # SQL-Schema für die News-Tabelle
```

## Inhalte pflegen

**Fast alle Texte liegen in `lib/i18n.ts`** — mit je einem `de`- und einem
`en`-Objekt identischer Form. TypeScript bricht den Build, wenn die beiden
auseinanderlaufen; eine deutsche Änderung muss also englisch nachgezogen werden.

- **Kontakt, Firmenname:** `lib/company.ts`
- **Team:** `lib/team.ts` (Slugs, Fotos, persönliche Links) und
  `lib/i18n.ts` → `team.members` (Namen, Rollen, Texte). Das Feld `personal`
  ist leer und wird erst gerendert, wenn es gefüllt ist.
- **Roadmap:** Reihenfolge und Status in `lib/roadmap.ts`, Texte in
  `lib/i18n.ts` → `roadmap.milestones`.
- **Social Media:** `lib/brand.ts`. Einträge ohne `url` werden **nirgends**
  gerendert — es entstehen also keine toten Links. Sobald eine URL eingetragen
  ist, erscheint das Icon automatisch in Footer, News-Seite und Kontaktblock.
- **Farben:** `tailwind.config.ts` — `paper`, `forest`, `amber`, `bark`.

## News

Die News-Quelle wird zur Laufzeit gewählt:

| Bedingung | Quelle | Schreibbar |
|---|---|---|
| `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` gesetzt | Supabase | ja |
| sonst | `content/news/*.json` | nein |

Die Website rendert in beiden Fällen. Ohne Datenbank zeigt der Admin-Bereich
einen deutlichen Hinweis, statt so zu tun, als ließe sich speichern.

### Supabase einrichten

1. `supabase/migrations/0001_news.sql` im Supabase-SQL-Editor ausführen. Das
   Skript legt Tabelle, Index, Trigger, RLS und den Storage-Bucket `news` an.
2. `SUPABASE_URL` und `SUPABASE_SERVICE_ROLE_KEY` in der Umgebung setzen.

Row Level Security bleibt aktiv, und es gibt **bewusst keine Policy** für
`anon`. Sämtliche Zugriffe laufen serverseitig über den Service-Role-Key, der
den Browser nie erreicht.

## Admin-Bereich

`/admin/news`, nicht in der Navigation verlinkt und in `robots.txt` gesperrt.

Der Login braucht zwei Umgebungsvariablen:

```
ADMIN_PASSWORD=…            # langes Passwort
ADMIN_SESSION_SECRET=…      # z. B. openssl rand -base64 48
```

Das Passwort wird serverseitig zeitkonstant verglichen; der Browser hält nur
ein HMAC-signiertes, `httpOnly`-Cookie. **Im Quelltext stehen keine
Zugangsdaten.** Fehlen die Variablen, meldet der Bereich sich als nicht
eingerichtet, statt einen Ersatz-Login anzubieten.

Vorlage aller Variablen: `.env.example`.

## Zweisprachigkeit

Deutsch ist Standard, Englisch über den Umschalter in der Navigation. Die
Auswahl liegt in `localStorage` und gilt über Reload und Seitenwechsel hinweg;
`<html lang>` wird mitgeführt. Die Browsersprache wird bewusst **nicht**
ausgewertet.

News-Beiträge haben optionale englische Felder. Fehlen sie, zeigt die englische
Seite den deutschen Text.

## Bilder

Alle Fotos sind in `lib/photos.ts` mit Herkunft und Lizenz registriert und
werden über `components/Photo.tsx` als responsives `srcset` aus vorab erzeugten
WebP-Varianten ausgeliefert. Dateien in `public/images/` bitte nicht direkt
referenzieren — nur über das Manifest, damit die Herkunft nachvollziehbar
bleibt.

Team- und ARGUS-Aufnahmen sind eigenes Material. **Die beiden Waldfotos auf der
Startseite sind noch nicht lizenzgeprüft** — siehe
`public/images/photos/README.md` und `photosNeedingLicenceReview()`.

Neue Varianten erzeugen: siehe Anleitung in `public/images/photos/README.md`.

## Barrierefreiheit

- Reveal-Animationen hängen an einer `.js`-Klasse, die vor dem ersten Paint
  gesetzt wird — ohne JavaScript ist nichts unsichtbar.
- `prefers-reduced-motion` schaltet Animationen und Smooth Scrolling ab.
- Skip-Link, sichtbare Fokuszustände, beschriftete Formularfelder,
  `aria-invalid` und `role="alert"` bei Validierungsfehlern.
- Der 360°-Viewer auf `/argus` ist per Tastatur über seinen Slider bedienbar.

## Geprüft

Typecheck und Produktionsbuild laufen sauber. Alle Seiten wurden auf Desktop
(1440), Tablet (820) und Mobile (390) auf horizontalen Overflow sowie
Konsolen-, Hydration- und Laufzeitfehler geprüft. Login, Session-Cookie,
Validierung, Abmelden und die Sprachumschaltung sind im Browser verifiziert.

**Nicht verifiziert:** der Supabase-Pfad (Schreiben, Bild-Upload). Dafür fehlen
Zugangsdaten und Netzwerkzugriff — er ist vollständig implementiert, aber vor
dem Produktiveinsatz einmal durchzutesten.
