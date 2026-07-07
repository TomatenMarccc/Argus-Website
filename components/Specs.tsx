import Reveal from "./Reveal";

const groups = [
  {
    label: "Mobility",
    rows: [
      ["Drive", "4× independent brushless, all-wheel"],
      ["Suspension", "Long-travel independent"],
      ["Max grade", "≈ 35°"],
      ["Top speed", "12 km/h"],
    ],
  },
  {
    label: "Endurance & Power",
    rows: [
      ["Battery", "Hot-swappable Li-ion pack"],
      ["Runtime", "Up to 12 h (mission dependent)"],
      ["Charging", "Fast-charge · field-swap"],
      ["Protection", "IP67 sealed enclosure"],
    ],
  },
  {
    label: "Sensing & Autonomy",
    rows: [
      ["Perception", "LiDAR + EO/IR + GNSS/RTK + IMU"],
      ["Compute", "On-board edge-AI, offline capable"],
      ["Air quality", "PM2.5 · PM10 · CO₂ · NOₓ · VOC"],
      ["Comms", "Dual-band MIMO · mesh · LTE/5G"],
    ],
  },
  {
    label: "Physical",
    rows: [
      ["Operating temp", "−20 °C to +55 °C"],
      ["Payload rail", "Standardised, powered"],
      ["Data", "Encrypted store-and-forward"],
      ["Fleet", "Multi-unit coordination"],
    ],
  },
];

export default function Specs() {
  return (
    <section
      id="specs"
      className="relative border-t border-white/5 bg-ink-900 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
              ◆&nbsp;&nbsp;TECHNICAL SPECIFICATION
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              ARGUS AR‑1
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300">
              A field-hardened platform engineered to keep measuring when the
              conditions get difficult. Full datasheet available on request.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-studio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/frames/frame-0044.webp"
                alt="ARGUS AR-1 UGV, side profile"
                className="w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Spec table */}
          <div className="space-y-8">
            {groups.map((g, i) => (
              <Reveal key={g.label} delay={i * 60}>
                <div>
                  <h3 className="mb-3 font-mono text-[11px] uppercase tracking-widest2 text-signal-500">
                    {g.label}
                  </h3>
                  <dl className="divide-y divide-white/5 rounded-xl border border-white/10 bg-ink-800/40">
                    {g.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-4 px-4 py-3"
                      >
                        <dt className="text-sm text-ink-400">{k}</dt>
                        <dd className="text-right text-sm font-medium text-white">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
