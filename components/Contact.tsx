import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-green opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(74,222,128,0.12), rgba(7,8,10,0) 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 text-signal-500">
            ◆&nbsp;&nbsp;GET IN TOUCH
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Put ARGUS on the ground for your mission.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 md:text-lg">
            Tell us what you need to observe and measure. We&apos;ll help you spec
            a platform, run a pilot, and get verified environmental data flowing.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            action="mailto:hello@arguscivil.systems"
            method="post"
            encType="text/plain"
            className="mx-auto mt-10 grid max-w-xl gap-3 text-left sm:grid-cols-2"
          >
            <input
              required
              name="name"
              placeholder="Name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Work email"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60"
            />
            <input
              name="organisation"
              placeholder="Organisation"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60 sm:col-span-2"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="What do you need to measure?"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-400 outline-none transition-colors focus:border-signal-500/60 sm:col-span-2"
            />
            <button
              type="submit"
              className="rounded-full bg-signal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-400 sm:col-span-2"
            >
              Request a demo
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
