export const LANGUAGES = ["de", "en"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "de";

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as readonly string[]).includes(value);
}

/**
 * All site copy lives here so that German and English stay in lockstep.
 * Facts are taken from the Artemis Civil Systems executive summary and the
 * ARGUS platform architecture document — nothing here is invented.
 */
const de = {
  meta: {
    localeTag: "de_DE",
    htmlLang: "de",
    switchLabel: "Sprache wechseln",
    switchTo: "English",
    home: {
      title: "Artemis Civil Systems — Dem Wald eine Stimme geben",
      description:
        "Artemis Civil Systems erfasst lokale Umweltdaten unter dem Kronendach, um Veränderungen im Wald früh sichtbar zu machen.",
    },
    argus: {
      title: "ARGUS — unser mobiles Messsystem",
      description:
        "ARGUS ist das Bodenfahrzeug von Artemis Civil Systems. Es fährt auf freigegebenen Waldwegen und erfasst georeferenzierte Umwelt- und Bilddaten.",
    },
    impressum: {
      title: "Impressum",
      description: "Impressum und Kontaktangaben von Artemis Civil Systems.",
    },
  },

  nav: {
    home: "Startseite",
    value: "Der Wald",
    threats: "Bedrohungen",
    mission: "Was wir tun",
    team: "Wer wir sind",
    argus: "ARGUS",
    contact: "Kontakt",
    menu: "Menü öffnen",
    close: "Menü schließen",
    skip: "Zum Inhalt springen",
  },

  hero: {
    eyebrow: "Artemis Civil Systems",
    slogan: "Dem Wald eine Stimme geben.",
    lead: "Wir sammeln lokale Daten dort, wo der Wald tatsächlich lebt — unter dem Kronendach. Damit Veränderungen sichtbar werden, solange man noch etwas tun kann.",
    primaryCta: "ARGUS kennenlernen",
    secondaryCta: "Was wir tun",
    scroll: "Weiterlesen",
    imageCaption:
      "Platzhalter-Illustration — hier steht später ein eigenes Foto eines Misch- oder Laubwalds.",
  },

  value: {
    eyebrow: "Der Wert des Waldes",
    title: "Warum der Wald zählt.",
    lead: "Der Wald ist weit mehr als Holz und Fläche. Er ist Lebensraum, Klimapuffer, Wasserspeicher und Rückzugsort — oft alles gleichzeitig, auf derselben Fläche.",
    items: [
      {
        title: "Lebensraum und Biodiversität",
        body: "Vom Moos am Wegrand bis zur Krone: Ein Wald ist ein dicht verwobenes Netz aus Pflanzen, Pilzen, Insekten und Tieren. Viele Arten kommen ausschließlich hier vor.",
      },
      {
        title: "Klima und Umwelt",
        body: "Wälder speichern Kohlenstoff, kühlen ihre Umgebung, filtern Luft und halten Wasser in der Landschaft. Sie wirken weit über ihre eigenen Grenzen hinaus.",
      },
      {
        title: "Gesundheit und Erholung",
        body: "Ein Spaziergang zwischen Bäumen senkt nachweislich Stress. Der Wald ist für viele Menschen der nächstgelegene Ort, an dem der Alltag leiser wird.",
      },
      {
        title: "Persönliche Bedeutung",
        body: "Buden bauen, Pilze suchen, der erste Schnee zwischen den Stämmen: Für die meisten von uns hängen die frühesten Erinnerungen an einem Stück Wald.",
      },
    ],
  },

  threats: {
    eyebrow: "Was sich verändert",
    title: "Der Wald verändert sich schneller, als wir hinsehen können.",
    lead: "Der Zustand eines Waldes kann sich durch Trockenheit, Hitze, Schädlinge und Extremwetter innerhalb weniger Saisons verändern. Das Schwierige daran: Die meisten dieser Veränderungen fangen klein an.",
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

  mission: {
    eyebrow: "Was wir tun",
    title: "Wir hören dem Wald dort zu, wo er lebt.",
    lead: "Artemis Civil Systems erfasst lokale Umweltdaten direkt im Bestand: Klima, Luft, Licht, Bild und Ton unter dem Kronendach, eindeutig einem Ort zugeordnet und regelmäßig wiederholt. So entsteht ein Bild davon, wie sich ein Wald tatsächlich verändert — nicht nur, wie er von oben aussieht.",
    gapTitle: "Die fehlende Ebene",
    gapLead:
      "Über den Wald gibt es bereits viele Daten. Der Bereich unter den Baumkronen bleibt dabei aber meist außen vor.",
    gap: [
      {
        title: "Satelliten",
        body: "liefern Übersichten über große Flächen — aber aus großer Distanz.",
      },
      {
        title: "Drohnen",
        body: "zeigen vor allem das Kronendach, also die oberste Schicht.",
      },
      {
        title: "Feste Sensoren",
        body: "messen laufend, aber nur an einzelnen Punkten.",
      },
      {
        title: "Begehungen",
        body: "sind unverzichtbar und genau — brauchen aber viel Zeit.",
      },
    ],
    gapOutro:
      "Was fehlt, ist eine Methode, die bodennahe Daten entlang derselben Wege regelmäßig erfasst und vergleichbar macht. Genau diese Lücke füllen wir.",
    whyTitle: "Warum wir das machen",
    whyBody:
      "Für unsere Gesundheit, für die Umwelt — und dafür, dass die Generationen nach uns im Wald genauso schöne Erinnerungen sammeln können wie wir. Unsere Daten ersetzen keine forstliche Entscheidung. Sie sollen sie besser machen.",
  },

  team: {
    eyebrow: "Wer wir sind",
    title: "Drei Studenten und ein ziemlich großes Anliegen.",
    lead: "Wir sind drei duale Wirtschaftsinformatikstudenten aus Stuttgart. Jeder von uns hat einen etwas anderen persönlichen Bezug zum Wald. Was uns verbindet, ist die Motivation, etwas zu seinem langfristigen Erhalt beizutragen.",
    award: "Finalist · Samsung Solve for Tomorrow 2026",
    members: [
      {
        name: "Simon Pulvermüller",
        role: "Technical Lead",
        body: "Verantwortet die technische Architektur und die Entwicklungsplanung von ARGUS.",
        /* Persönlicher Waldbezug — bitte selbst ergänzen, dann erscheint er automatisch. */
        personal: "",
      },
      {
        name: "Marc Abdel Rahman",
        role: "Operations & Finance",
        body: "Kümmert sich um Einsatzplanung, Prozesse, Finanzierung und Wachstum.",
        personal: "",
      },
      {
        name: "Selina Schüßler",
        role: "Public, Customer & Internal Relations",
        body: "Verantwortet Positionierung, Kundenbeziehungen, Kommunikation und interne Abstimmung.",
        personal: "",
      },
    ],
  },

  argusTeaser: {
    eyebrow: "Wie wir die Daten sammeln",
    title: "Das ist ARGUS.",
    lead: "ARGUS ist unser mobiles Messsystem. Es fährt auf bestehenden, freigegebenen Waldwegen und erfasst die Daten direkt vor Ort — ohne neue Wege anzulegen und ohne den Bestand zu stören.",
    points: [
      "Nutzt vorhandene Waldwege statt neuer Trassen",
      "Erfasst Messwerte unter dem Kronendach",
      "Ordnet jede Messung eindeutig einem Ort zu",
      "Wiederholbar, damit Veränderungen vergleichbar werden",
    ],
    cta: "ARGUS kennenlernen",
    imageAlt: "ARGUS — mobiles Messsystem von Artemis Civil Systems, Frontansicht",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Schreib uns.",
    lead: "Fragen zu unserer Arbeit, zu ARGUS oder zu einer möglichen Zusammenarbeit? Wir freuen uns über jede Nachricht.",
    emailLabel: "E-Mail",
    location: "Stuttgart, Deutschland",
  },

  footer: {
    tagline:
      "Lokale Umweltdaten aus dem Wald — erfasst, wo sie entstehen.",
    columnsTitle: {
      site: "Seite",
      project: "Projekt",
      legal: "Rechtliches",
    },
    imprint: "Impressum",
    rights: "Alle Rechte vorbehalten.",
  },

  argus: {
    back: "Zurück zur Startseite",
    eyebrow: "Das System",
    title: "ARGUS",
    expansion: "Autonomous Reconnaissance Ground Utilization System",
    lead: "ARGUS ist ein Bodenfahrzeug, das auf freigegebenen Waldwegen fährt und dort georeferenzierte Bilddaten sowie Klima-, Luft-, Licht- und Audiodaten unter dem Kronendach erfasst.",
    principleTitle: "Das Prinzip",
    principleBody:
      "Nicht der Roboter ist das Ergebnis, sondern die Daten. ARGUS erfasst sie im Wald — ausgewertet, verglichen und dargestellt werden sie anschließend in unserer Analyseplattform ATHENE. Dort entstehen aus einzelnen Fahrten Karten, Zeitverläufe und nachvollziehbare Hinweise auf Veränderungen.",
    athene: {
      title: "ATHENE",
      expansion: "Analytical Tool for Holistic Environmental Network Evaluation",
      body: "Unsere Daten- und Analyseplattform. Sie ordnet jede Messung räumlich zu, dokumentiert Herkunft und Aussagekraft der Daten und macht Veränderungen über die Zeit vergleichbar.",
    },
    flowTitle: "Von der Fahrt zur Erkenntnis",
    flow: [
      {
        step: "01",
        title: "Planung",
        body: "Gebiet, freigegebene Wege, Fragestellung und Zeitraum werden gemeinsam festgelegt.",
      },
      {
        step: "02",
        title: "Befahrung",
        body: "ARGUS fährt die vereinbarten Waldwege ab. Sicherheit, Genehmigungen und Einsatzfähigkeit werden vorher geprüft.",
      },
      {
        step: "03",
        title: "Auswertung",
        body: "ATHENE ordnet die Daten räumlich zu, dokumentiert Herkunft und Confidence und bereitet sie verständlich auf.",
      },
      {
        step: "04",
        title: "Bereitstellung",
        body: "Die Ergebnisse werden als Karten und zeitliche Vergleiche bereitgestellt — auf Wunsch zusammen mit den Rohdaten.",
      },
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
        body: "Die Mobility Platform bringt ARGUS über den Waldweg. Sie umfasst Antriebsstrang, Struktur, Energieversorgung, Fahrwerk und Odometrie und kann je nach Einsatz als Rad-, Ketten- oder Laufplattform ausgeführt werden.",
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
      {
        label: "ARGUS I",
        state: "Abgeschlossen",
        body: "Der erste funktionsfähige Prototyp. Mit ihm haben wir Fahrtechnik, Sensorik und Datenerfassung grundsätzlich erprobt.",
      },
      {
        label: "ARGUS II",
        state: "Aktuell",
        body: "Die zweite Stufe ist modularer aufgebaut und hat eine überarbeitete Mechanik, Energieversorgung, Sensorik und Rechenleistung.",
      },
      {
        label: "Feldtests",
        state: "Als Nächstes",
        body: "Zuverlässigkeit und Einsatz im realen Waldbestand werden geprüft: Fahrzeug, Sensorik, Datenpipeline und Ablauf.",
      },
    ],
    galleryTitle: "ARGUS II im Detail",
    galleryLead: "Aufnahmen unseres aktuellen Systems. Zieh am Bild, um das Fahrzeug zu drehen.",
    turntableLabel: "ARGUS II drehen — 360-Grad-Ansicht",
    turntableHint: "Ziehen zum Drehen",
    ctaTitle: "Fragen zum System?",
    ctaBody:
      "Ob Forstbetrieb, Forschung oder einfach Interesse an dem, was wir bauen — schreib uns gern.",
    ctaButton: "Kontakt aufnehmen",
  },

  impressum: {
    title: "Impressum",
    sections: {
      provider: "Angaben gemäß § 5 DDG",
      providerBody:
        "Anschrift und weitere Pflichtangaben werden vor Veröffentlichung ergänzt.",
      contact: "Kontakt",
      responsible: "Verantwortlich für den Inhalt",
      responsibleBody:
        "Verantwortliche Person im Sinne des § 18 Abs. 2 MStV wird ergänzt, sofern journalistisch-redaktionelle Inhalte angeboten werden.",
      trademark: "Markenhinweis",
      liability: "Haftung für Inhalte",
      liabilityBody:
        "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nur im Rahmen der gesetzlichen Vorgaben. Bei Bekanntwerden konkreter Rechtsverletzungen entfernen wir entsprechende Inhalte umgehend.",
      links: "Haftung für Links",
      linksBody:
        "Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist der jeweilige Anbieter oder Betreiber der verlinkten Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir entsprechende Links umgehend.",
      copyright: "Urheberrecht",
      copyrightBody:
        "Die auf dieser Website erstellten Inhalte, Texte, Bilder, Grafiken und sonstigen Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts bedürfen der Zustimmung der jeweiligen Rechteinhaber.",
      dispute: "Verbraucherstreitbeilegung",
      disputeBody:
        "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern keine gesetzliche Pflicht besteht.",
    },
  },
};

export type Dictionary = typeof de;

/** Deep-readonly-compatible mirror of `de`. Shapes must match exactly. */
const en: Dictionary = {
  meta: {
    localeTag: "en_GB",
    htmlLang: "en",
    switchLabel: "Change language",
    switchTo: "Deutsch",
    home: {
      title: "Artemis Civil Systems — Giving the forest a voice",
      description:
        "Artemis Civil Systems collects local environmental data beneath the forest canopy so that change becomes visible early.",
    },
    argus: {
      title: "ARGUS — our mobile sensing system",
      description:
        "ARGUS is the ground vehicle built by Artemis Civil Systems. It travels approved forest tracks and records georeferenced environmental and image data.",
    },
    impressum: {
      title: "Legal notice",
      description: "Legal notice and contact details for Artemis Civil Systems.",
    },
  },

  nav: {
    home: "Home",
    value: "The forest",
    threats: "Pressures",
    mission: "What we do",
    team: "Who we are",
    argus: "ARGUS",
    contact: "Contact",
    menu: "Open menu",
    close: "Close menu",
    skip: "Skip to content",
  },

  hero: {
    eyebrow: "Artemis Civil Systems",
    slogan: "Giving the forest a voice.",
    lead: "We gather local data where the forest actually lives — beneath the canopy. So that change becomes visible while there is still time to act.",
    primaryCta: "Meet ARGUS",
    secondaryCta: "What we do",
    scroll: "Read on",
    imageCaption:
      "Placeholder illustration — our own photograph of a mixed or deciduous forest will go here.",
  },

  value: {
    eyebrow: "Why forests matter",
    title: "What a forest is worth.",
    lead: "A forest is far more than timber and surface area. It is habitat, climate buffer, water store and refuge — often all at once, on the very same ground.",
    items: [
      {
        title: "Habitat and biodiversity",
        body: "From the moss at the path's edge to the canopy, a forest is a densely woven network of plants, fungi, insects and animals. Many species live nowhere else.",
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
    title: "Forests change faster than we can look.",
    lead: "Drought, heat, pests and extreme weather can change the condition of a forest within a few seasons. The difficult part: most of these changes start small.",
    items: [
      {
        title: "Drought",
        body: "Longer dry spells and shifting rainfall patterns put the water supply of entire stands under pressure.",
      },
      {
        title: "Wildfire",
        body: "Dry material on the ground and hot summers raise the odds that a single spark becomes a fire.",
      },
      {
        title: "Pests",
        body: "Weakened trees are more vulnerable. Infestations often spread before anything is visible from the outside.",
      },
      {
        title: "Storm damage",
        body: "Extreme weather leaves gaps in the stand — and those gaps change light, wind and moisture for everything left standing.",
      },
      {
        title: "Loss of biodiversity",
        body: "When one part of the fabric drops out, the balance shifts. Species diversity is usually lost quietly rather than suddenly.",
      },
    ],
    outro:
      "None of this is hopeless. The earlier a change is noticed, the more options remain — and that is exactly where our work begins.",
  },

  mission: {
    eyebrow: "What we do",
    title: "We listen to the forest where it lives.",
    lead: "Artemis Civil Systems records local environmental data directly within the stand: climate, air, light, image and sound beneath the canopy, each reading tied to a precise location and repeated over time. That builds a picture of how a forest is actually changing — not just how it looks from above.",
    gapTitle: "The missing layer",
    gapLead:
      "There is already a great deal of data about forests. The space beneath the canopy, however, is usually left out.",
    gap: [
      {
        title: "Satellites",
        body: "give an overview of large areas — but from a great distance.",
      },
      {
        title: "Drones",
        body: "mostly capture the canopy, meaning the topmost layer.",
      },
      {
        title: "Fixed sensors",
        body: "measure continuously, but only at individual points.",
      },
      {
        title: "Field surveys",
        body: "are indispensable and precise — but take a great deal of time.",
      },
    ],
    gapOutro:
      "What is missing is a method that records ground-level data along the same tracks regularly and makes it comparable. That is the gap we fill.",
    whyTitle: "Why we do it",
    whyBody:
      "For our health, for the environment — and so that the generations after us can build the same kind of memories in the forest that we did. Our data does not replace a forestry decision. It is meant to make it a better one.",
  },

  team: {
    eyebrow: "Who we are",
    title: "Three students and one rather large concern.",
    lead: "We are three work-study business informatics students from Stuttgart. Each of us has a slightly different personal connection to the forest. What we share is the motivation to contribute something to its long-term survival.",
    award: "Finalist · Samsung Solve for Tomorrow 2026",
    members: [
      {
        name: "Simon Pulvermüller",
        role: "Technical Lead",
        body: "Responsible for the technical architecture and development planning of ARGUS.",
        personal: "",
      },
      {
        name: "Marc Abdel Rahman",
        role: "Operations & Finance",
        body: "Looks after deployment planning, processes, funding and growth.",
        personal: "",
      },
      {
        name: "Selina Schüßler",
        role: "Public, Customer & Internal Relations",
        body: "Responsible for positioning, customer relationships, communication and internal coordination.",
        personal: "",
      },
    ],
  },

  argusTeaser: {
    eyebrow: "How we collect the data",
    title: "This is ARGUS.",
    lead: "ARGUS is our mobile sensing system. It travels existing, approved forest tracks and records the data on site — without cutting new routes and without disturbing the stand.",
    points: [
      "Uses existing forest tracks rather than new routes",
      "Records readings beneath the canopy",
      "Ties every measurement to a precise location",
      "Repeatable, so that change becomes comparable",
    ],
    cta: "Meet ARGUS",
    imageAlt: "ARGUS — mobile sensing system by Artemis Civil Systems, front view",
  },

  contact: {
    eyebrow: "Contact",
    title: "Get in touch.",
    lead: "Questions about our work, about ARGUS, or about working together? We are glad to hear from you.",
    emailLabel: "Email",
    location: "Stuttgart, Germany",
  },

  footer: {
    tagline: "Local environmental data from the forest — recorded where it arises.",
    columnsTitle: {
      site: "Site",
      project: "Project",
      legal: "Legal",
    },
    imprint: "Legal notice",
    rights: "All rights reserved.",
  },

  argus: {
    back: "Back to home",
    eyebrow: "The system",
    title: "ARGUS",
    expansion: "Autonomous Reconnaissance Ground Utilization System",
    lead: "ARGUS is a ground vehicle that travels approved forest tracks, recording georeferenced image data along with climate, air, light and audio readings beneath the canopy.",
    principleTitle: "The principle",
    principleBody:
      "The robot is not the result — the data is. ARGUS records it in the forest; the analysis, comparison and presentation then happen in our platform ATHENE. There, individual runs turn into maps, time series and traceable indications of change.",
    athene: {
      title: "ATHENE",
      expansion: "Analytical Tool for Holistic Environmental Network Evaluation",
      body: "Our data and analysis platform. It places every measurement spatially, documents the origin and confidence of the data, and makes change comparable over time.",
    },
    flowTitle: "From a run to an insight",
    flow: [
      {
        step: "01",
        title: "Planning",
        body: "Area, approved tracks, the question to answer and the time frame are agreed together.",
      },
      {
        step: "02",
        title: "Survey run",
        body: "ARGUS covers the agreed forest tracks. Safety, permits and readiness are checked beforehand.",
      },
      {
        step: "03",
        title: "Analysis",
        body: "ATHENE places the data spatially, documents origin and confidence, and prepares it so it can be understood.",
      },
      {
        step: "04",
        title: "Delivery",
        body: "Results are provided as maps and time comparisons — together with the raw data on request.",
      },
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
        body: "The mobility platform carries ARGUS along the forest track. It covers drivetrain, structure, power supply, suspension and odometry, and can be built as a wheeled, tracked or legged system depending on the deployment.",
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
      {
        label: "ARGUS I",
        state: "Complete",
        body: "The first working prototype. With it we tested the fundamentals of driving, sensing and data capture.",
      },
      {
        label: "ARGUS II",
        state: "Current",
        body: "The second stage is more modular, with reworked mechanics, power supply, sensors and compute.",
      },
      {
        label: "Field tests",
        state: "Next",
        body: "Reliability and real deployment in the forest are being tested: vehicle, sensors, data pipeline and procedure.",
      },
    ],
    galleryTitle: "ARGUS II up close",
    galleryLead: "Photographs of our current system. Drag the image to rotate the vehicle.",
    turntableLabel: "Rotate ARGUS II — 360 degree view",
    turntableHint: "Drag to rotate",
    ctaTitle: "Questions about the system?",
    ctaBody:
      "Whether you manage forest, work in research, or are simply curious about what we are building — do get in touch.",
    ctaButton: "Contact us",
  },

  impressum: {
    title: "Legal notice",
    sections: {
      provider: "Information pursuant to § 5 DDG",
      providerBody:
        "The postal address and remaining mandatory details will be added before publication.",
      contact: "Contact",
      responsible: "Responsible for content",
      responsibleBody:
        "The person responsible under § 18 (2) MStV will be named should journalistic or editorial content be offered.",
      trademark: "Trademark notice",
      liability: "Liability for content",
      liabilityBody:
        "As a service provider we are responsible for our own content on these pages under general law. We are not obliged to monitor transmitted or stored third-party information beyond what the law requires. Where we become aware of a specific infringement, we remove the content concerned without delay.",
      links: "Liability for links",
      linksBody:
        "This website may contain links to external third-party websites over whose content we have no influence. The respective provider or operator of the linked pages is responsible for that content. Where we become aware of infringements, we remove the links concerned without delay.",
      copyright: "Copyright",
      copyrightBody:
        "The content, texts, images, graphics and other works created on this website are subject to German copyright law. Reproduction, adaptation, distribution or any other use beyond the limits of copyright requires the consent of the respective rights holders.",
      dispute: "Consumer dispute resolution",
      disputeBody:
        "We are neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration body unless legally required to do so.",
    },
  },
};

export const dictionaries: Record<Language, Dictionary> = { de, en };

export function getDictionary(language: Language): Dictionary {
  return dictionaries[language] ?? dictionaries[DEFAULT_LANGUAGE];
}
