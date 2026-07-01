import { siteSettings } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          About
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          One developer. Full stack delivery.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          I&apos;m Tahir Hafeez — a WordPress and GoHighLevel specialist with 5+
          years building websites, funnels, and automations for businesses that need
          things done right the first time. From Elementor and custom plugins to GHL
          payment flows and email campaigns, I handle the full journey: build, launch,
          and support.
        </p>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-500/20 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)] px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to build something that works?
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Let&apos;s talk about your project — whether it&apos;s a WordPress site, GHL
          funnel, or full automation setup.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={siteSettings.bookingUrl}
            className="w-full rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-400 sm:w-auto"
          >
            Book a free call
          </a>
          <a
            href={`mailto:${siteSettings.contactEmail}`}
            className="w-full rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-white/5 sm:w-auto"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
