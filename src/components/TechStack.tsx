import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          Tech stack
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Tools I work with daily
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {techStack.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/5 bg-[#111916] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-emerald-500/20 hover:text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
