export const LANGUAGES = ["de", "en"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "de";

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as readonly string[]).includes(value);
}

/**
 * All site copy lives here so that German and English stay in lockstep.
 *
 * Facts come from the Artemis Civil Systems executive summary (July 2026) and
 * the ARGUS platform architecture document (August 2026). Nothing is invented —
 * where a personal detail is missing it is left blank rather than filled in.
 */
const de = {
  meta: {
    localeTag: "de_DE",
    htmlLang: "de",
    switchLabel: "Sprache wechseln",
    switchTo: "English",
  },

  nav: {
    home: "Startseite",
    what: "Was wir tun",
    collection: "Datenerfassung",
    insights: "Auswertung",
    roadmap: "Roadmap",
    team: "Team",
    news: "News",
    argus: "ARGUS",
    contact: "Kontakt",
    menu: "Menü öffnen",
    close: "Menü schließen",
    skip: "Zum Inhalt springen",
  },

  hero: {
    eyebrow: "Artemis Civil Systems",
    slogan: "Dem Wald eine Stimme geben.",
    lead: "Wir entwickeln Systeme, die Wildtiere und ihre Lebensräume vor Ort beobachten — und aus den Messwerten ein verständliches Bild davon machen, wie sich ein Lebensraum verändert.",
    primaryCta: "Was wir tun",
    secondaryCta: "ARGUS kennenlernen",
    imageAlt:
      "Weiter Blick über einen dichten Wald, dahinter ein Flusstal und Berge unter hohem, hellem Himmel",
  },

  /* 1 — Wildlife & Environmental Monitoring */
  what: {
    eyebrow: "Wildlife & Environmental Monitoring",
    title: "Wir machen Lebensräume messbar.",
    lead: "Artemis Civil Systems erfasst, verarbeitet und erschließt Umwelt- und Wildtierdaten. Unser Ziel ist eine belastbare Datengrundlage, mit der sich Veränderungen in einem Lebensraum früh erkennen und über die Zeit vergleichen lassen.",
    pillars: [
      {
        title: "Monitoring",
        body: "Wildtiere und Lebensräume systematisch beobachten — wiederholbar, nachvollziehbar und eindeutig einem Ort zugeordnet.",
      },
      {
        title: "Datenerfassung",
        body: "Messwerte dort erheben, wo sie entstehen: im Bestand, unter dem Kronendach, statt nur aus der Distanz.",
      },
      {
        title: "Auswertung",
        body: "Aus einzelnen Messungen Karten, Zeitverläufe und nachvollziehbare Hinweise auf Veränderung machen.",
      },
      {
        title: "Systeme",
        body: "Die Technik dahinter entwickeln wir selbst — offen für weitere Erfassungswege, nicht gebunden an ein einzelnes Gerät.",
      },
    ],
    note: "ARGUS ist dabei eines unserer Werkzeuge zur Datenerfassung — nicht der Zweck des Unternehmens.",
  },

  value: {
    eyebrow: "Warum das zählt",
    title: "Ein Lebensraum ist mehr als seine Fläche.",
    lead: "Wald ist Lebensraum, Klimapuffer, Wasserspeicher und Rückzugsort zugleich — oft alles auf derselben Fläche. Wer ihn erhalten will, muss wissen, wie es ihm geht.",
    photoAlt:
      "Drei Menschen wandern auf einem schmalen Pfad durch einen hellen, frühlingsgrünen Laubwald",
    items: [
      {
        title: "Lebensraum und Biodiversität",
        body: "Vom Moos am Wegrand bis zur Krone: ein dicht verwobenes Netz aus Pflanzen, Pilzen, Insekten und Tieren. Viele Arten kommen ausschließlich hier vor.",
      },
      {
        title: "Klima und Umwelt",
        body: "Wälder speichern Kohlenstoff, kühlen ihre Umgebung, filtern Luft und halten Wasser in der Landschaft. Ihre Wirkung reicht weit über die eigene Fläche hinaus.",
      },
      {
        title: "Gesundheit und Erholung",
        body: "Ein Spaziergang zwischen Bäumen senkt nachweislich Stress. Für viele Menschen ist der Wald der nächstgelegene Ort, an dem der Alltag leiser wird.",
      },
      {
        title: "Persönliche Bedeutung",
        body: "Buden bauen, Pilze suchen, der erste Schnee zwischen den Stämmen: für die meisten von uns hängen die frühesten Erinnerungen an einem Stück Wald.",
      },
    ],
  },

  threats: {
    eyebrow: "Was sich verändert",
    title: "Lebensräume verändern sich schneller, als wir hinsehen können.",
    lead: "Trockenheit, Hitze, Schädlinge und Extremwetter können den Zustand eines Bestands innerhalb weniger Saisons verändern. Das Schwierige daran: Die meisten dieser Veränderungen fangen klein an.",
    items: [
      {
        title: "Trockenheit",
        body: "Längere Trockenphasen und veränderte Niederschlagsmuster setzen die Wasserversorgung der Bestände unter Druck.",
      },
      {
        title: "Waldbrände",
        body: "Trockenes Material am Boden und heiße Sommer erhöhen die Wahrscheinlichkeit, dass aus einem Funken ein Feuer wird.",
      },
      {
        title: "Schädlinge",
        body: "Geschwächte Bäume sind anfälliger. Befall breitet sich häufig aus, bevor er von außen sichtbar wird.",
      },
      {
        title: "Sturmschäden",
        body: "Extremwetter hinterlässt Lücken im Bestand — und diese Lücken verändern Licht, Wind und Feuchte für alles, was übrig bleibt.",
      },
      {
        title: "Verlust von Biodiversität",
        body: "Fällt ein Teil des Gefüges aus, verschiebt sich das Gleichgewicht. Artenvielfalt geht meist leise verloren, nicht plötzlich.",
      },
    ],
    outro:
      "Nichts davon ist aussichtslos. Je früher eine Veränderung auffällt, desto mehr Möglichkeiten bleiben — und genau dort setzen wir an.",
  },

  /* 2 — Data Collection */
  collection: {
    eyebrow: "Datenerfassung",
    title: "Daten entstehen dort, wo der Lebensraum ist.",
    lead: "Über Lebensräume gibt es bereits viele Daten. Der Bereich unter den Baumkronen bleibt dabei aber meist außen vor — und genau dort spielt sich das Leben ab, das wir verstehen wollen.",
    gapTitle: "Die fehlende Ebene",
    gap: [
      { title: "Satelliten", body: "liefern Übersichten über große Flächen — aber aus großer Distanz." },
      { title: "Drohnen", body: "zeigen vor allem das Kronendach, also die oberste Schicht." },
      { title: "Feste Sensoren", body: "messen laufend, aber nur an einzelnen Punkten." },
      { title: "Begehungen", body: "sind unverzichtbar und genau — brauchen aber viel Zeit." },
    ],
    gapOutro:
      "Was fehlt, ist eine Methode, die bodennahe Daten entlang derselben Wege regelmäßig erfasst und vergleichbar macht. Genau diese Lücke füllen wir.",
    whatTitle: "Was wir erfassen",
    what: [
      { label: "Bild", value: "Georeferenzierte Aufnahmen des Bestands" },
      { label: "Akustik", value: "Tonaufnahmen unter dem Kronendach" },
      { label: "Mikroklima", value: "Temperatur, Luftfeuchte und Luftdruck" },
      { label: "Luftqualität", value: "VOC-Index, Gaswiderstand, CO₂ und Feinstaub" },
      { label: "Licht", value: "Helligkeit als Lux-Wert" },
      { label: "Position", value: "GNSS, IMU und Fahrzeug-Odometrie" },
    ],
  },

  /* 3 — Data Analysis / Insights */
  insights: {
    eyebrow: "Auswertung",
    title: "Aus Messwerten wird ein Bild.",
    lead: "Einzelne Messungen sagen wenig. Erst wenn sie räumlich zugeordnet, über die Zeit verglichen und mit ihrer Herkunft dokumentiert sind, entsteht daraus etwas, auf das man eine Entscheidung stützen kann.",
    items: [
      {
        title: "Räumlich zugeordnet",
        body: "Jede Messung gehört zu einem konkreten Ort, nicht zu einer ungefähren Fläche.",
      },
      {
        title: "Über die Zeit vergleichbar",
        body: "Dieselben Wege, wiederholt erfasst — so werden Veränderungen sichtbar statt nur Momentaufnahmen.",
      },
      {
        title: "Herkunft dokumentiert",
        body: "Woher ein Wert stammt und wie belastbar er ist, bleibt nachvollziehbar. Das gehört zur Aussage dazu.",
      },
      {
        title: "Verständlich aufbereitet",
        body: "Karten und Zeitverläufe statt Rohdatentabellen — damit die Ergebnisse auch nutzbar sind.",
      },
    ],
    platformTitle: "ATHENE",
    platformExpansion: "Analytical Tool for Holistic Environmental Network Evaluation",
    platformBody:
      "Unsere Daten- und Analyseplattform. Sie ordnet jede Messung räumlich zu, dokumentiert Herkunft und Aussagekraft der Daten und macht Veränderungen über die Zeit vergleichbar.",
    disclaimer:
      "Unsere Daten ersetzen keine fachliche Entscheidung. Sie sollen sie besser machen.",
  },

  /* 4/5 — Technology, with ARGUS as one instrument */
  technology: {
    eyebrow: "Technologie",
    title: "Die Systeme dahinter bauen wir selbst.",
    lead: "Damit Daten vergleichbar werden, muss die Erfassung verlässlich sein. Deshalb entwickeln wir die Systeme dafür selbst — offen angelegt, damit weitere Erfassungswege hinzukommen können, ohne dass die Auswertung dahinter neu entworfen werden muss.",
    argusTitle: "ARGUS",
    argusRole: "Mobile Datenerfassung",
    argusBody:
      "Unsere derzeit eingesetzte Plattform zur Datenerfassung. ARGUS fährt auf bestehenden, freigegebenen Wegen und erfasst die Messwerte direkt vor Ort — ohne neue Wege anzulegen und ohne den Bestand zu stören.",
    argusPoints: [
      "Nutzt vorhandene Wege statt neuer Trassen",
      "Erfasst Messwerte unter dem Kronendach",
      "Ordnet jede Messung eindeutig einem Ort zu",
      "Wiederholbar, damit Veränderungen vergleichbar werden",
    ],
    argusCta: "ARGUS kennenlernen",
    argusImageAlt:
      "ARGUS steht auf dem Laub eines Waldbodens, im Hintergrund grüne Bäume",
    openTitle: "Bewusst offen angelegt",
    openBody:
      "ARGUS ist ein Weg, Daten zu erheben — nicht der einzige. Die Auswertung ist von der Erfassung getrennt, sodass weitere Quellen und Verfahren ergänzt werden können, wenn eine Fragestellung das verlangt.",
  },

  roadmap: {
    eyebrow: "Roadmap",
    title: "Wohin wir unterwegs sind.",
    lead: "Unsere Entwicklung läuft in aufeinander aufbauenden Stufen. Die folgenden Angaben stammen aus unserer internen Planung; wo ein Zeitraum noch offen ist, steht er bewusst unscharf.",
    status: { done: "Abgeschlossen", current: "Aktuell", planned: "Geplant" },
    milestones: {
      "argus-i": {
        period: "",
        title: "ARGUS I",
        body: "Der erste funktionsfähige Prototyp. Mit ihm wurden Fahrtechnik, Sensorik und Datenerfassung grundsätzlich erprobt.",
      },
      "argus-ii": {
        period: "",
        title: "ARGUS II",
        body: "Die zweite Entwicklungsstufe ist modularer aufgebaut, mit überarbeiteter Mechanik, Energieversorgung, Sensorik und Rechenleistung.",
      },
      feldtests: {
        period: "Restjahr 2026",
        title: "Technische Feldtests",
        body: "Fahrzeug, Sensorik, Datenpipeline und Einsatzablauf werden im realen Bestand geprüft.",
      },
      pilot: {
        period: "Saison 2027",
        title: "Begleiteter Pilotbetrieb",
        body: "Flächen befahren, Ergebnisse in ATHENE bereitstellen und den Nutzen gemeinsam mit Partnern prüfen.",
      },
      angebot: {
        period: "Ab 2027/2028",
        title: "Standardisiertes Angebot",
        body: "Ein einheitliches Jahresangebot mit regelmäßigen Erhebungen, abgeleitet aus dem nachgewiesenen Bedarf.",
      },
    },
    disclaimer:
      "Ein vollständig autonomer Regelbetrieb wird derzeit ausdrücklich noch nicht beansprucht.",
  },

  team: {
    eyebrow: "Wer wir sind",
    title: "Meet our Team",
    lead: "Wir sind drei duale Wirtschaftsinformatikstudenten aus Stuttgart. Jeder von uns hat einen etwas anderen persönlichen Bezug zum Wald. Was uns verbindet, ist die Motivation, etwas zu seinem langfristigen Erhalt beizutragen.",
    award: "Finalist · Samsung Solve for Tomorrow 2026",
    groupPhotoAlt:
      "Simon, Marc und Selina im Studio, alle in dunklen Poloshirts mit dem Artemis-Logo",
    profileCta: "Profil ansehen",
    backToTeam: "Zurück zum Team",
    roleLabel: "Rolle",
    members: {
      simon: {
        name: "Simon Pulvermüller",
        role: "Technical Lead",
        short: "Verantwortet die technische Architektur und die Entwicklungsplanung.",
        body: "Simon verantwortet bei Artemis Civil Systems die technische Architektur und die Entwicklungsplanung. Sein Schwerpunkt liegt auf Vehicle & Edge Systems: Mechanik, Elektronik, Embedded-Software und die Datenverarbeitung direkt am Gerät.",
        /* Persönlicher Waldbezug — bitte selbst ergänzen. Bleibt sonst ungenutzt. */
        personal: "",
        photoAlt: "Porträt von Simon Pulvermüller",
      },
      marc: {
        name: "Marc Abdel Rahman",
        role: "Operations & Finance",
        short: "Kümmert sich um Einsatzplanung, Prozesse, Finanzierung und Wachstum.",
        body: "Marc verantwortet Einsatzplanung, Prozesse, Finanzierung und Wachstum. Inhaltlich liegt sein Schwerpunkt auf Platform & Customer Product: Gebiete, Missionen, zentrale Datenhaltung, Karten und Auswertungen.",
        personal: "",
        photoAlt: "Porträt von Marc Abdel Rahman",
      },
      selina: {
        name: "Selina Schüßler",
        role: "Public, Customer & Internal Relations",
        short: "Verantwortet Positionierung, Kundenbeziehungen und Kommunikation.",
        body: "Selina verantwortet Positionierung, Kundenbeziehungen, Kommunikation und die interne Abstimmung. Sie sorgt dafür, dass das, was technisch entsteht, auch außerhalb des Teams verständlich bleibt.",
        personal: "",
        photoAlt: "Porträt von Selina Schüßler",
      },
    },
  },

  news: {
    eyebrow: "Aktuelles",
    title: "News",
    lead: "Entwicklungen, Meilensteine und Einblicke aus unserer Arbeit.",
    readMore: "Weiterlesen",
    published: "Veröffentlicht am",
    empty: "Aktuell sind keine Beiträge veröffentlicht.",
    backToNews: "Zurück zur Übersicht",
    latestTitle: "Aktuelles",
    latestCta: "Alle News ansehen",
    followTitle: "Folge Artemis Civil Systems",
    followLead:
      "Laufende Einblicke in Entwicklung, Feldeinsätze und Team gibt es auf unseren Kanälen.",
    socialsMissing:
      "Unsere Social-Media-Kanäle werden hier ergänzt, sobald sie verlinkt sind.",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Schreib uns.",
    lead: "Fragen zu unserer Arbeit, zu unseren Daten oder zu einer möglichen Zusammenarbeit? Wir freuen uns über jede Nachricht.",
    emailLabel: "E-Mail",
    location: "Stuttgart, Deutschland",
  },

  footer: {
    tagline:
      "Systeme zur Erfassung und Auswertung von Wildtier- und Umweltdaten.",
    columnsTitle: { site: "Seite", project: "Projekt", legal: "Rechtliches" },
    imprint: "Impressum",
    rights: "Alle Rechte vorbehalten.",
    followUs: "Folgen",
  },

  argus: {
    back: "Zurück zur Startseite",
    eyebrow: "Datenerfassung",
    title: "ARGUS",
    expansion: "Autonomous Reconnaissance Ground Utilization System",
    lead: "ARGUS ist unsere derzeit eingesetzte Plattform zur Datenerfassung: ein Bodenfahrzeug, das auf freigegebenen Wegen fährt und dort georeferenzierte Bilddaten sowie Klima-, Luft-, Licht- und Audiodaten unter dem Kronendach erfasst.",
    contextTitle: "Ein Werkzeug, nicht der Zweck",
    contextBody:
      "ARGUS ist ein Instrument innerhalb des größeren Artemis-Ökosystems. Der Kern unserer Arbeit ist die Datengrundlage: erfassen, auswerten, vergleichbar machen. ARGUS ist der Weg, auf dem diese Daten heute entstehen — die Auswertung ist bewusst davon getrennt, damit weitere Erfassungswege ergänzt werden können.",
    heroImageAlt:
      "ARGUS von vorn auf einem schmalen Waldweg, umgeben von dichtem Grün",
    flowTitle: "Von der Fahrt zur Erkenntnis",
    flow: [
      { step: "01", title: "Planung", body: "Gebiet, freigegebene Wege, Fragestellung und Zeitraum werden gemeinsam festgelegt." },
      { step: "02", title: "Befahrung", body: "ARGUS fährt die vereinbarten Wege ab. Sicherheit, Genehmigungen und Einsatzfähigkeit werden vorher geprüft." },
      { step: "03", title: "Auswertung", body: "ATHENE ordnet die Daten räumlich zu, dokumentiert Herkunft und Confidence und bereitet sie verständlich auf." },
      { step: "04", title: "Bereitstellung", body: "Die Ergebnisse werden als Karten und zeitliche Vergleiche bereitgestellt — auf Wunsch mit den Rohdaten." },
    ],
    architectureTitle: "Aufbau",
    architectureLead:
      "ARGUS ist kein einzelner, fest konfigurierter Roboter, sondern ein Baukasten. Welche Hardware tatsächlich verbaut wird, entscheidet die Mission — Gelände, Messziel und Einsatzdauer. Das System besteht aus drei Hauptbaugruppen.",
    architecture: [
      {
        no: "01",
        name: "Head Node",
        tagline: "Wahrnehmung, Daten und Rechenleistung",
        body: "Die Head Node interpretiert die Umgebung, führt Missionslogik und Analysemodelle aus, speichert die Messdaten und bindet die wissenschaftliche Sensorik ein.",
        features: [
          "Kameramodule für Navigation und Vegetationsaufnahmen",
          "Lokalisierung über GNSS, IMU und Odometrie",
          "Onboard-Speicher für Bild-, Audio- und Messdaten",
          "Rechenleistung für Vorverarbeitung und Analyse direkt am Fahrzeug",
        ],
      },
      {
        no: "02",
        name: "Vehicle Control Node",
        tagline: "Echtzeitsteuerung, Telemetrie und Sicherheit",
        body: "Die VCN ist die deterministische Verbindung zwischen Head Node und Fahrzeug. Sie übersetzt abstrakte Fahrbefehle in konkrete Aktuatorbefehle und hält die Sicherheitsfunktionen bewusst außerhalb der Analysesoftware.",
        features: [
          "Echtzeitsteuerung von Motoren und Aktuatorik",
          "Telemetrie zu Energie, Temperatur und Systemzustand",
          "Stromversorgung und geregelte Spannungsebenen",
          "Watchdog, Not-Halt und definierte sichere Zustände",
        ],
      },
      {
        no: "03",
        name: "Mobility Platform",
        tagline: "Die physische Plattform",
        body: "Die Mobility Platform bringt ARGUS über den Weg. Sie umfasst Antriebsstrang, Struktur, Energieversorgung, Fahrwerk und Odometrie und kann je nach Einsatz als Rad-, Ketten- oder Laufplattform ausgeführt werden.",
        features: [
          "Geländegängiges Fahrwerk mit Federung",
          "Hauptenergieversorgung inklusive Batteriemanagement",
          "Radencoder und Bewegungssensorik",
          "Standardisierte Aufnahme für Head Node und Payloads",
        ],
      },
    ],
    sensorTitle: "Was ARGUS misst",
    sensorLead:
      "Die Atmospheric Sensor Payload erfasst die Umgebungsbedingungen unter dem Kronendach. Weitere wissenschaftliche Module lassen sich über eine standardisierte Schnittstelle ergänzen.",
    sensors: [
      { label: "Mikroklima", value: "Lufttemperatur · Luftfeuchte · Luftdruck" },
      { label: "Luftqualität", value: "VOC-Index · Gaswiderstand · CO₂ · Feinstaub" },
      { label: "Lichtumgebung", value: "Helligkeit als Lux-Wert" },
      { label: "Bild", value: "Georeferenzierte RGB-Aufnahmen des Bestands" },
      { label: "Audio", value: "Akustik unter dem Kronendach" },
      { label: "Position", value: "GNSS, IMU und Fahrzeug-Odometrie" },
    ],
    statusTitle: "Entwicklungsstand",
    statusLead:
      "ARGUS entsteht in aufeinander aufbauenden Entwicklungsstufen. Wir beanspruchen ausdrücklich noch keinen vollständig autonomen Regelbetrieb.",
    status: [
      { label: "ARGUS I", state: "Abgeschlossen", body: "Der erste funktionsfähige Prototyp. Mit ihm haben wir Fahrtechnik, Sensorik und Datenerfassung grundsätzlich erprobt." },
      { label: "ARGUS II", state: "Aktuell", body: "Die zweite Stufe ist modularer aufgebaut und hat eine überarbeitete Mechanik, Energieversorgung, Sensorik und Rechenleistung." },
      { label: "Feldtests", state: "Als Nächstes", body: "Zuverlässigkeit und Einsatz im realen Bestand werden geprüft: Fahrzeug, Sensorik, Datenpipeline und Ablauf." },
    ],
    galleryTitle: "ARGUS II im Detail",
    galleryLead: "Aufnahmen unseres aktuellen Systems. Zieh am Bild, um das Fahrzeug zu drehen.",
    turntableLabel: "ARGUS II drehen — 360-Grad-Ansicht",
    turntableHint: "Ziehen zum Drehen",
    ctaTitle: "Fragen zum System?",
    ctaBody: "Ob Forstbetrieb, Forschung oder einfach Interesse an dem, was wir bauen — schreib uns gern.",
    ctaButton: "Kontakt aufnehmen",
  },

  impressum: {
    title: "Impressum",
    sections: {
      provider: "Angaben gemäß § 5 DDG",
      providerBody: "Anschrift und weitere Pflichtangaben werden vor Veröffentlichung ergänzt.",
      contact: "Kontakt",
      responsible: "Verantwortlich für den Inhalt",
      responsibleBody: "Verantwortliche Person im Sinne des § 18 Abs. 2 MStV wird ergänzt, sofern journalistisch-redaktionelle Inhalte angeboten werden.",
      trademark: "Markenhinweis",
      liability: "Haftung für Inhalte",
      liabilityBody: "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nur im Rahmen der gesetzlichen Vorgaben. Bei Bekanntwerden konkreter Rechtsverletzungen entfernen wir entsprechende Inhalte umgehend.",
      links: "Haftung für Links",
      linksBody: "Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist der jeweilige Anbieter oder Betreiber der verlinkten Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir entsprechende Links umgehend.",
      copyright: "Urheberrecht",
      copyrightBody: "Die auf dieser Website erstellten Inhalte, Texte, Bilder, Grafiken und sonstigen Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts bedürfen der Zustimmung der jeweiligen Rechteinhaber.",
      dispute: "Verbraucherstreitbeilegung",
      disputeBody: "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern keine gesetzliche Pflicht besteht.",
    },
  },
};

export type Dictionary = typeof de;

/** English mirror of `de`. The shape must match exactly, or the build fails. */
const en: Dictionary = {
  meta: {
    localeTag: "en_GB",
    htmlLang: "en",
    switchLabel: "Change language",
    switchTo: "Deutsch",
  },

  nav: {
    home: "Home",
    what: "What we do",
    collection: "Data collection",
    insights: "Analysis",
    roadmap: "Roadmap",
    team: "Team",
    news: "News",
    argus: "ARGUS",
    contact: "Contact",
    menu: "Open menu",
    close: "Close menu",
    skip: "Skip to content",
  },

  hero: {
    eyebrow: "Artemis Civil Systems",
    slogan: "Giving the forest a voice.",
    lead: "We build systems that observe wildlife and their habitats on the ground — and turn the readings into a clear picture of how a habitat is changing.",
    primaryCta: "What we do",
    secondaryCta: "Meet ARGUS",
    imageAlt:
      "A wide view across dense forest towards a river valley and mountains under a high, bright sky",
  },

  what: {
    eyebrow: "Wildlife & Environmental Monitoring",
    title: "We make habitats measurable.",
    lead: "Artemis Civil Systems records, processes and opens up environmental and wildlife data. Our aim is a dependable body of data that makes change in a habitat visible early and comparable over time.",
    pillars: [
      {
        title: "Monitoring",
        body: "Observing wildlife and habitats systematically — repeatable, traceable and tied to a precise location.",
      },
      {
        title: "Data collection",
        body: "Taking readings where they arise: within the stand, beneath the canopy, rather than only from a distance.",
      },
      {
        title: "Analysis",
        body: "Turning individual readings into maps, time series and traceable indications of change.",
      },
      {
        title: "Systems",
        body: "We build the technology behind it ourselves — open to further collection methods, not tied to a single device.",
      },
    ],
    note: "ARGUS is one of our data collection tools in this — not the purpose of the company.",
  },

  value: {
    eyebrow: "Why it matters",
    title: "A habitat is more than its area.",
    lead: "Forest is habitat, climate buffer, water store and refuge all at once — often on the very same ground. Preserving it means knowing how it is doing.",
    photoAlt:
      "Three people walking a narrow path through a bright, spring-green deciduous wood",
    items: [
      {
        title: "Habitat and biodiversity",
        body: "From the moss at the path's edge to the canopy: a densely woven network of plants, fungi, insects and animals. Many species live nowhere else.",
      },
      {
        title: "Climate and environment",
        body: "Forests store carbon, cool their surroundings, filter air and hold water in the landscape. Their effect reaches well beyond their own boundaries.",
      },
      {
        title: "Health and recreation",
        body: "A walk among trees measurably lowers stress. For many people the forest is the nearest place where everyday life gets quieter.",
      },
      {
        title: "Personal meaning",
        body: "Building dens, hunting for mushrooms, the first snow between the trunks: for most of us, the earliest memories are tied to a patch of woodland.",
      },
    ],
  },

  threats: {
    eyebrow: "What is changing",
    title: "Habitats change faster than we can look.",
    lead: "Drought, heat, pests and extreme weather can change the condition of a stand within a few seasons. The difficult part: most of these changes start small.",
    items: [
      { title: "Drought", body: "Longer dry spells and shifting rainfall patterns put the water supply of entire stands under pressure." },
      { title: "Wildfire", body: "Dry material on the ground and hot summers raise the odds that a single spark becomes a fire." },
      { title: "Pests", body: "Weakened trees are more vulnerable. Infestations often spread before anything is visible from the outside." },
      { title: "Storm damage", body: "Extreme weather leaves gaps in the stand — and those gaps change light, wind and moisture for everything left standing." },
      { title: "Loss of biodiversity", body: "When one part of the fabric drops out, the balance shifts. Species diversity is usually lost quietly rather than suddenly." },
    ],
    outro:
      "None of this is hopeless. The earlier a change is noticed, the more options remain — and that is exactly where our work begins.",
  },

  collection: {
    eyebrow: "Data collection",
    title: "Data arises where the habitat is.",
    lead: "There is already a great deal of data about habitats. The space beneath the canopy, however, is usually left out — and that is precisely where the life we want to understand happens.",
    gapTitle: "The missing layer",
    gap: [
      { title: "Satellites", body: "give an overview of large areas — but from a great distance." },
      { title: "Drones", body: "mostly capture the canopy, meaning the topmost layer." },
      { title: "Fixed sensors", body: "measure continuously, but only at individual points." },
      { title: "Field surveys", body: "are indispensable and precise — but take a great deal of time." },
    ],
    gapOutro:
      "What is missing is a method that records ground-level data along the same routes regularly and makes it comparable. That is the gap we fill.",
    whatTitle: "What we record",
    what: [
      { label: "Imagery", value: "Georeferenced captures of the stand" },
      { label: "Acoustics", value: "Audio recordings beneath the canopy" },
      { label: "Microclimate", value: "Temperature, humidity and air pressure" },
      { label: "Air quality", value: "VOC index, gas resistance, CO₂ and particulates" },
      { label: "Light", value: "Brightness in lux" },
      { label: "Position", value: "GNSS, IMU and vehicle odometry" },
    ],
  },

  insights: {
    eyebrow: "Analysis",
    title: "Readings become a picture.",
    lead: "Individual measurements say little. Only once they are placed spatially, compared over time and documented with their origin do they become something a decision can rest on.",
    items: [
      { title: "Placed spatially", body: "Every measurement belongs to a specific location, not to an approximate area." },
      { title: "Comparable over time", body: "The same routes, recorded repeatedly — so change becomes visible rather than just snapshots." },
      { title: "Origin documented", body: "Where a value came from and how dependable it is stays traceable. That is part of the statement." },
      { title: "Prepared to be understood", body: "Maps and time series rather than raw data tables — so the results can actually be used." },
    ],
    platformTitle: "ATHENE",
    platformExpansion: "Analytical Tool for Holistic Environmental Network Evaluation",
    platformBody:
      "Our data and analysis platform. It places every measurement spatially, documents the origin and confidence of the data, and makes change comparable over time.",
    disclaimer: "Our data does not replace expert judgement. It is meant to improve it.",
  },

  technology: {
    eyebrow: "Technology",
    title: "We build the systems behind it ourselves.",
    lead: "For data to be comparable, collection has to be dependable. So we build the systems for it ourselves — laid out openly, so that further collection methods can be added without redesigning the analysis behind them.",
    argusTitle: "ARGUS",
    argusRole: "Mobile data collection",
    argusBody:
      "Our currently deployed data collection platform. ARGUS travels existing, approved routes and records readings on site — without cutting new routes and without disturbing the stand.",
    argusPoints: [
      "Uses existing routes rather than new tracks",
      "Records readings beneath the canopy",
      "Ties every measurement to a precise location",
      "Repeatable, so that change becomes comparable",
    ],
    argusCta: "Meet ARGUS",
    argusImageAlt: "ARGUS standing on the leaf litter of a forest floor, green trees behind it",
    openTitle: "Deliberately open",
    openBody:
      "ARGUS is one way of collecting data — not the only one. Analysis is kept separate from collection, so further sources and methods can be added when a question calls for it.",
  },

  roadmap: {
    eyebrow: "Roadmap",
    title: "Where we are heading.",
    lead: "Our development runs in successive stages. The following comes from our internal planning; where a period is still open, it is deliberately left vague.",
    status: { done: "Complete", current: "Current", planned: "Planned" },
    milestones: {
      "argus-i": {
        period: "",
        title: "ARGUS I",
        body: "The first working prototype. With it we tested the fundamentals of driving, sensing and data capture.",
      },
      "argus-ii": {
        period: "",
        title: "ARGUS II",
        body: "The second development stage is more modular, with reworked mechanics, power supply, sensors and compute.",
      },
      feldtests: {
        period: "Remainder of 2026",
        title: "Technical field tests",
        body: "Vehicle, sensors, data pipeline and procedure are tested in a real stand.",
      },
      pilot: {
        period: "2027 season",
        title: "Supported pilot operation",
        body: "Covering sites, providing results in ATHENE and establishing the value together with partners.",
      },
      angebot: {
        period: "From 2027/2028",
        title: "Standardised offering",
        body: "A consistent annual offering with regular surveys, derived from demonstrated demand.",
      },
    },
    disclaimer:
      "Fully autonomous routine operation is explicitly not claimed at this stage.",
  },

  team: {
    eyebrow: "Who we are",
    title: "Meet our Team",
    lead: "We are three work-study business informatics students from Stuttgart. Each of us has a slightly different personal connection to the forest. What we share is the motivation to contribute something to its long-term survival.",
    award: "Finalist · Samsung Solve for Tomorrow 2026",
    groupPhotoAlt:
      "Simon, Marc and Selina in the studio, all wearing dark polo shirts with the Artemis logo",
    profileCta: "View profile",
    backToTeam: "Back to the team",
    roleLabel: "Role",
    members: {
      simon: {
        name: "Simon Pulvermüller",
        role: "Technical Lead",
        short: "Responsible for the technical architecture and development planning.",
        body: "Simon is responsible for the technical architecture and development planning at Artemis Civil Systems. His focus is vehicle and edge systems: mechanics, electronics, embedded software and the data processing that happens on the device itself.",
        personal: "",
        photoAlt: "Portrait of Simon Pulvermüller",
      },
      marc: {
        name: "Marc Abdel Rahman",
        role: "Operations & Finance",
        short: "Looks after deployment planning, processes, funding and growth.",
        body: "Marc is responsible for deployment planning, processes, funding and growth. His focus is the platform and customer product: sites, missions, central data, maps and analysis.",
        personal: "",
        photoAlt: "Portrait of Marc Abdel Rahman",
      },
      selina: {
        name: "Selina Schüßler",
        role: "Public, Customer & Internal Relations",
        short: "Responsible for positioning, customer relationships and communication.",
        body: "Selina is responsible for positioning, customer relationships, communication and internal coordination. She makes sure that what is built technically stays understandable outside the team.",
        personal: "",
        photoAlt: "Portrait of Selina Schüßler",
      },
    },
  },

  news: {
    eyebrow: "Latest",
    title: "News",
    lead: "Developments, milestones and glimpses of our work.",
    readMore: "Read more",
    published: "Published on",
    empty: "No posts are published at the moment.",
    backToNews: "Back to all news",
    latestTitle: "Latest news",
    latestCta: "See all news",
    followTitle: "Follow Artemis Civil Systems",
    followLead:
      "Ongoing glimpses of development, field work and the team are on our channels.",
    socialsMissing: "Our social channels will appear here once they are linked.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Get in touch.",
    lead: "Questions about our work, our data, or working together? We are glad to hear from you.",
    emailLabel: "Email",
    location: "Stuttgart, Germany",
  },

  footer: {
    tagline: "Systems for recording and analysing wildlife and environmental data.",
    columnsTitle: { site: "Site", project: "Project", legal: "Legal" },
    imprint: "Legal notice",
    rights: "All rights reserved.",
    followUs: "Follow",
  },

  argus: {
    back: "Back to home",
    eyebrow: "Data collection",
    title: "ARGUS",
    expansion: "Autonomous Reconnaissance Ground Utilization System",
    lead: "ARGUS is our currently deployed data collection platform: a ground vehicle that travels approved routes, recording georeferenced image data along with climate, air, light and audio readings beneath the canopy.",
    contextTitle: "A tool, not the purpose",
    contextBody:
      "ARGUS is one instrument within the wider Artemis ecosystem. The core of our work is the data itself: recording it, analysing it, making it comparable. ARGUS is how that data arises today — analysis is deliberately kept separate, so further collection methods can be added.",
    heroImageAlt: "ARGUS seen head-on along a narrow forest track, surrounded by dense green",
    flowTitle: "From a run to an insight",
    flow: [
      { step: "01", title: "Planning", body: "Area, approved routes, the question to answer and the time frame are agreed together." },
      { step: "02", title: "Survey run", body: "ARGUS covers the agreed routes. Safety, permits and readiness are checked beforehand." },
      { step: "03", title: "Analysis", body: "ATHENE places the data spatially, documents origin and confidence, and prepares it so it can be understood." },
      { step: "04", title: "Delivery", body: "Results are provided as maps and time comparisons — with the raw data on request." },
    ],
    architectureTitle: "How it is built",
    architectureLead:
      "ARGUS is not a single, fixed robot but a modular kit. The mission decides which hardware is actually fitted — terrain, measurement goal and duration. The system is made up of three main assemblies.",
    architecture: [
      {
        no: "01",
        name: "Head Node",
        tagline: "Perception, data and compute",
        body: "The head node interprets the surroundings, runs mission logic and analysis models, stores the measurement data and integrates the scientific sensors.",
        features: [
          "Camera modules for navigation and vegetation imagery",
          "Localisation via GNSS, IMU and odometry",
          "Onboard storage for image, audio and sensor data",
          "Compute for pre-processing and analysis on the vehicle itself",
        ],
      },
      {
        no: "02",
        name: "Vehicle Control Node",
        tagline: "Real-time control, telemetry and safety",
        body: "The VCN is the deterministic link between head node and vehicle. It translates abstract driving commands into concrete actuator commands and deliberately keeps safety functions outside the analysis software.",
        features: [
          "Real-time control of motors and actuators",
          "Telemetry for power, temperature and system state",
          "Power supply and regulated voltage rails",
          "Watchdog, emergency stop and defined safe states",
        ],
      },
      {
        no: "03",
        name: "Mobility Platform",
        tagline: "The physical platform",
        body: "The mobility platform carries ARGUS along the route. It covers drivetrain, structure, power supply, suspension and odometry, and can be built as a wheeled, tracked or legged system depending on the deployment.",
        features: [
          "All-terrain running gear with suspension",
          "Main power supply including battery management",
          "Wheel encoders and motion sensing",
          "Standardised mounting for head node and payloads",
        ],
      },
    ],
    sensorTitle: "What ARGUS measures",
    sensorLead:
      "The atmospheric sensor payload captures conditions beneath the canopy. Further scientific modules can be added through a standardised interface.",
    sensors: [
      { label: "Microclimate", value: "Air temperature · humidity · pressure" },
      { label: "Air quality", value: "VOC index · gas resistance · CO₂ · particulates" },
      { label: "Light", value: "Brightness in lux" },
      { label: "Imagery", value: "Georeferenced RGB captures of the stand" },
      { label: "Audio", value: "Acoustics beneath the canopy" },
      { label: "Position", value: "GNSS, IMU and vehicle odometry" },
    ],
    statusTitle: "Development status",
    statusLead:
      "ARGUS is being built in successive development stages. We explicitly do not yet claim fully autonomous routine operation.",
    status: [
      { label: "ARGUS I", state: "Complete", body: "The first working prototype. With it we tested the fundamentals of driving, sensing and data capture." },
      { label: "ARGUS II", state: "Current", body: "The second stage is more modular, with reworked mechanics, power supply, sensors and compute." },
      { label: "Field tests", state: "Next", body: "Reliability and real deployment are being tested: vehicle, sensors, data pipeline and procedure." },
    ],
    galleryTitle: "ARGUS II up close",
    galleryLead: "Photographs of our current system. Drag the image to rotate the vehicle.",
    turntableLabel: "Rotate ARGUS II — 360 degree view",
    turntableHint: "Drag to rotate",
    ctaTitle: "Questions about the system?",
    ctaBody: "Whether you manage land, work in research, or are simply curious about what we are building — do get in touch.",
    ctaButton: "Contact us",
  },

  impressum: {
    title: "Legal notice",
    sections: {
      provider: "Information pursuant to § 5 DDG",
      providerBody: "The postal address and remaining mandatory details will be added before publication.",
      contact: "Contact",
      responsible: "Responsible for content",
      responsibleBody: "The person responsible under § 18 (2) MStV will be named should journalistic or editorial content be offered.",
      trademark: "Trademark notice",
      liability: "Liability for content",
      liabilityBody: "As a service provider we are responsible for our own content on these pages under general law. We are not obliged to monitor transmitted or stored third-party information beyond what the law requires. Where we become aware of a specific infringement, we remove the content concerned without delay.",
      links: "Liability for links",
      linksBody: "This website may contain links to external third-party websites over whose content we have no influence. The respective provider or operator of the linked pages is responsible for that content. Where we become aware of infringements, we remove the links concerned without delay.",
      copyright: "Copyright",
      copyrightBody: "The content, texts, images, graphics and other works created on this website are subject to German copyright law. Reproduction, adaptation, distribution or any other use beyond the limits of copyright requires the consent of the respective rights holders.",
      dispute: "Consumer dispute resolution",
      disputeBody: "We are neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration body unless legally required to do so.",
    },
  },
};

export const dictionaries: Record<Language, Dictionary> = { de, en };

export function getDictionary(language: Language): Dictionary {
  return dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
}
