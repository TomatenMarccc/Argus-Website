export type Module = {
  id: string;
  no: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  /** Vertical center of this module in the exploded frame, as a fraction of height. */
  yPct: number;
  /** Which side the callout appears on in the pinned view. */
  side: "left" | "right";
};

/**
 * Modules are ordered top-to-bottom for the exploded scroll sequence.
 * Content follows the ARGUS II pitch deck and executive summary.
 */
export const modules: Module[] = [
  {
    id: "head-node",
    no: "01",
    name: "Head Node",
    tagline: "Erfassen, vorverarbeiten, analysieren",
    description:
      "Die Head Node stellt die Onboard-Rechenleistung für Datenerfassung, Vorverarbeitung und KI-Analyse bereit. Sie bildet den modularen Sensorkopf von ARGUS II.",
    features: [
      "Raspberry-Pi-basierte Datenverarbeitung",
      "Vorverarbeitung lokaler Messdaten",
      "Vorbereitet für KI-Analyse",
      "Video, Akustik und Kontextdaten",
    ],
    yPct: 0.24,
    side: "left",
  },
  {
    id: "sensor-payload",
    no: "02",
    name: "Atmospheric Sensor Payload",
    tagline: "Mikroklima und Luftqualität",
    description:
      "Der Sensor-Payload erfasst lokale Umweltwerte für präzise Waldanalysen. Dazu zählen Mikroklima, Luftqualität, Lichtumgebung und georeferenzierte Kontextdaten.",
    features: [
      "Lufttemperatur, Luftfeuchtigkeit, Luftdruck",
      "VOC-Index, Gaswiderstand, CO2, Feinstaub",
      "Helligkeit und Lux-Werte",
      "GPS-Position, Video und Akustik",
    ],
    yPct: 0.4,
    side: "right",
  },
  {
    id: "middleware",
    no: "03",
    name: "Middleware",
    tagline: "Steuerung, Telemetrie, Energie",
    description:
      "Die Middleware koordiniert Sensoren, Aktoren und Kommunikation als zentrale Verbindung zwischen Head Node und Chassis.",
    features: [
      "Steuerung der Systemkomponenten",
      "Telemetrie und Systemdaten",
      "Energieüberwachung",
      "Schnittstelle zwischen Head Node und Chassis",
    ],
    yPct: 0.56,
    side: "left",
  },
  {
    id: "chassis",
    no: "04",
    name: "Chassis",
    tagline: "Geländeplattform für lokale Messung",
    description:
      "Das geländegängige UGV-Chassis ist die physische Plattform für lokale Umweltmessung und Beobachtung in Wald- und Naturflächen.",
    features: [
      "Modulares, unbemanntes Bodenfahrzeug",
      "Trägerplattform für Mess- und Beobachtungssysteme",
      "Prototypische Fahrzeugplattform",
      "Vorbereitet für zusätzliche Sensoren und Funkmodule",
    ],
    yPct: 0.74,
    side: "right",
  },
];
