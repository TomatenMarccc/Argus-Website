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
 * Modules are ordered top-to-bottom exactly as the UGV separates in the
 * scroll sequence — from the observation head down to the mobility platform.
 * Copy is a plausible first draft for ARGUS Civil Systems; edit freely.
 */
export const modules: Module[] = [
  {
    id: "sensor-head",
    no: "01",
    name: "Observation & Sensor Head",
    tagline: "See, measure, verify",
    description:
      "A gimbal-stabilised sensor turret carrying EO/IR optics, a multispectral camera and a modular air-quality probe. Redundant antennas keep telemetry live even in cluttered terrain, streaming georeferenced observations back to base in real time.",
    features: [
      "EO/IR gimbal · 30× stabilised zoom",
      "Multispectral & thermal imaging",
      "PM2.5 / PM10 · CO₂ · NOₓ · VOC probes",
      "Dual-band MIMO antenna array",
    ],
    yPct: 0.2,
    side: "left",
  },
  {
    id: "compute-core",
    no: "02",
    name: "Edge Compute & Autonomy Core",
    tagline: "Decisions at the edge",
    description:
      "The autonomy layer fuses sensor, LiDAR and GNSS data on a ruggedised edge-AI board. On-board perception handles path planning, obstacle avoidance and anomaly detection without a network — so the platform keeps working where connectivity does not.",
    features: [
      "Edge-AI SoC · on-device inference",
      "Sensor fusion: LiDAR + GNSS/RTK + IMU",
      "Autonomous waypoint & area survey",
      "Encrypted store-and-forward telemetry",
    ],
    yPct: 0.4,
    side: "right",
  },
  {
    id: "payload-bay",
    no: "03",
    name: "Power & Payload Bay",
    tagline: "Endurance you can plan around",
    description:
      "A sealed, thermally-managed bay houses the hot-swappable battery pack and the powered payload interface. Active cooling and an IP67 enclosure let ARGUS operate through dust, rain and heat while third-party instruments dock through a standard rail.",
    features: [
      "Hot-swap battery · 12 h field endurance",
      "IP67 sealed, actively cooled enclosure",
      "Standardised powered payload rail",
      "Live power & thermal health monitoring",
    ],
    yPct: 0.56,
    side: "left",
  },
  {
    id: "actuation",
    no: "04",
    name: "Drive & Actuation Layer",
    tagline: "Torque, precisely placed",
    description:
      "Independent brushless drive units deliver the torque for steep grades and soft ground, with closed-loop control at each wheel. The layer isolates the powertrain from the payload, so vibration and heat never reach the sensitive instruments above.",
    features: [
      "4× independent brushless drive units",
      "Per-wheel closed-loop traction control",
      "Vibration-isolated from payload bay",
      "Regenerative braking on descent",
    ],
    yPct: 0.7,
    side: "right",
  },
  {
    id: "mobility",
    no: "05",
    name: "All-Terrain Mobility Platform",
    tagline: "Anywhere the data is",
    description:
      "A long-travel independent suspension on aggressive all-terrain tyres carries ARGUS across forest floor, mine tailings, wetlands and disaster sites. Low ground pressure protects fragile ground while keeping the sensor head level and steady.",
    features: [
      "Long-travel independent suspension",
      "All-terrain tyres · low ground pressure",
      "≈35° climb · 0.3 m obstacle clearance",
      "Amphibious-rated drivetrain seals",
    ],
    yPct: 0.84,
    side: "left",
  },
];
