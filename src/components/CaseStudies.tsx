import type { CaseStudy } from "@/types";

const platformColors: Record<string, string> = {
  GHL: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  WordPress: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Webflow: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Wix: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section id="work" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          Case studies
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Real problems, real results
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.length === 0 ? (
            <p className="col-span-full text-center text-zinc-500">
              Case studies coming soon — add them in WordPress at cms.tahirhafeez.com
            </p>
          ) : (
            caseStudies.map((study) => (
            <article
              key={study.id}
              className="flex flex-col rounded-2xl border border-white/5 bg-[#111916] p-8 transition-colors hover:border-emerald-500/20"
            >
              <span
                className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium ${
                  platformColors[study.platform] ??
                  "border-zinc-700 bg-zinc-800 text-zinc-300"
                }`}
              >
                {study.platform}
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                {study.title}
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-400">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Problem
                  </p>
                  <p>{study.problem}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Solution
                  </p>
                  <p>{study.solution}</p>
                </div>
              </div>

              {study.metrics.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {study.metrics.map((metric) => (
                    <span
                      key={`${study.id}-${metric.label}`}
                      className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400"
                    >
                      {metric.label}: {metric.value}
                    </span>
                  ))}
                </div>
              )}
            </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
