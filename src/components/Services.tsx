import { services } from "@/lib/data";

const iconMap = {
  wordpress: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6" />
    </svg>
  ),
  ghl: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  api: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  hosting: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
};

const colorMap = {
  wordpress: "text-emerald-400 bg-emerald-500/10",
  ghl: "text-orange-400 bg-orange-500/10",
  api: "text-purple-400 bg-purple-500/10",
  hosting: "text-blue-400 bg-blue-500/10",
};

export function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          What I do
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Services built for results
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-white/5 bg-[#111916] p-8 transition-colors hover:border-emerald-500/20 hover:bg-[#141f1a]"
            >
              <div
                className={`inline-flex rounded-xl p-3 ${colorMap[service.icon]}`}
              >
                {iconMap[service.icon]}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
