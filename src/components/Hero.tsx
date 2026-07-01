import { siteSettings } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {siteSettings.availableForProjects && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new projects
          </div>
        )}

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          WordPress &amp; GHL Expert who{" "}
          <span className="text-emerald-400">ships fast</span>, builds right.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          I help businesses get powerful websites, automated funnels, and seamless
          integrations — without the headache. 5 years of hands-on experience across
          WordPress, GoHighLevel, Webflow, and beyond.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="w-full rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-400 sm:w-auto"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-white/5 sm:w-auto"
          >
            Let&apos;s talk
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:grid-cols-4">
          {[
            { value: siteSettings.yearsExperience, label: "Years experience" },
            { value: siteSettings.projectsDelivered, label: "Projects delivered" },
            { value: siteSettings.clientSatisfaction, label: "Client satisfaction" },
            { value: "WP • GHL • Webflow", label: "Platforms mastered" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
