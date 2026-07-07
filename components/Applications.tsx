import Reveal from "./Reveal";

const apps = [
  {
    title: "Forestry & Biodiversity",
    body: "Autonomous transects through woodland to log canopy health, species activity and micro-climate — repeatably, without trampling sensitive ground.",
    icon: "M12 2c1 4 4 6 4 10a4 4 0 1 1-8 0c0-4 3-6 4-10z",
  },
  {
    title: "Water & Wetlands",
    body: "Amphibious-rated drivetrain reaches shorelines and marshes to sample turbidity, temperature and runoff where boats and drones can't stay put.",
    icon: "M3 15c2 0 3-1.5 4.5-1.5S10 15 12 15s3-1.5 4.5-1.5S19 15 21 15M3 19c2 0 3-1.5 4.5-1.5S10 19 12 19s3-1.5 4.5-1.5S19 19 21 19",
  },
  {
    title: "Mining & Tailings",
    body: "Continuous patrol of tailings dams and pit walls with dust, gas and ground-movement sensing — early warning without putting people on unstable ground.",
    icon: "M3 20h18M6 20l4-9 4 5 2-4 2 8",
  },
  {
    title: "Disaster Response",
    body: "First eyes into fire, flood and chemical incidents. Maps hazards, samples air and streams a live picture to command while responders stay back.",
    icon: "M12 2l3 6 6 .5-4.5 4 1.5 6-6-3.5-6 3.5 1.5-6L3 8.5 9 8z",
  },
  {
    title: "Air Quality & Emissions",
    body: "Mobile reference-grade monitoring across industrial sites and city corridors — mapping PM, CO₂ and NOₓ at street level, not just at fixed stations.",
    icon: "M4 8h12a3 3 0 1 0-3-3M4 12h16M4 16h10a3 3 0 1 1-3 3",
  },
  {
    title: "Precision Agriculture",
    body: "Row-by-row soil, moisture and crop-stress readings feed variable-rate decisions, cutting inputs while protecting the land it drives across.",
    icon: "M12 3v18M12 8c-3 0-5-2-6-4 3 0 5 1 6 3M12 8c3 0 5-2 6-4-3 0-5 1-6 3",
  },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative border-t border-white/5 bg-ink-950 py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
            ◆&nbsp;&nbsp;WHERE ARGUS WORKS
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Built for the field, not the lab.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition-colors hover:border-signal-500/40">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-signal-500/30 bg-signal-500/10 text-signal-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden
                  >
                    <path d={a.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
