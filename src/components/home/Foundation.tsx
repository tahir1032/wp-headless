import { ArrowDown, Check, CircleCheck, FileText, Pencil } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { LogoMark } from "@/components/ui/Logo";

const BENEFITS = ["What you’re building", "The problem you’re solving", "Any details that will help me understand scope"];

const SOURCES = ["Project brief.pdf", "Requirements notes", "Technical notes"];

export default function Foundation() {
  return (
    <section className="py-20 lg:py-25">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,480px)_minmax(0,780px)] lg:justify-between lg:gap-15">
        <div className="flex flex-col gap-6.25">
          <SectionLabel>First, your foundation</SectionLabel>
          <h2 className="t-heading text-ink">
            Your business.
            <br />
            Not just
            <br />
            another brief.
          </h2>
          <p className="t-lead text-body">
            Good web development starts with context. Give me your goals, audience, and requirements so every new
            project has somewhere to start.
          </p>
          <ul className="flex flex-col gap-4 pt-2.5">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-base leading-snug text-body">
                <Check aria-hidden="true" strokeWidth={1.5} className="size-4 shrink-0 text-brand" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 rounded-section bg-line p-4 sm:p-10">
          <ul className="grid gap-3 sm:grid-cols-3">
            {SOURCES.map((source) => (
              <li key={source} className="flex items-center gap-2.5 rounded-card bg-white p-3 text-xs leading-[21px] text-body">
                <FileText aria-hidden="true" strokeWidth={1.5} className="size-4 shrink-0 text-muted" />
                {source}
              </li>
            ))}
          </ul>

          <ArrowDown aria-hidden="true" strokeWidth={1.5} className="mx-auto size-5 text-brand" />

          <div className="flex flex-col gap-5 rounded-panel bg-white p-5 sm:p-7.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <LogoMark className="size-6" />
                <p className="text-lg font-medium text-ink sm:text-xl">Your project, in focus</p>
              </div>
              <Pencil aria-hidden="true" strokeWidth={1.5} className="size-4 text-muted" />
            </div>
            <hr className="border-line" />
            <p className="text-xs text-muted">What we’re building</p>
            <p className="text-lg leading-[1.45] font-medium text-ink sm:text-xl">
              A WordPress site, WooCommerce store, GHL automation system, or custom web development project with a
              clear plan and realistic timeline.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-7.5">
              <div className="flex flex-col gap-2.5">
                <p className="text-xs text-muted">What you need</p>
                <p className="text-sm leading-[21px] text-body">
                  WordPress sites, WooCommerce stores, GHL automation systems, API integration, hosting, and other web
                  development needs.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-xs text-muted">How we work</p>
                <p className="text-sm leading-[21px] text-body">
                  Clear brief, realistic scope, and a personal response within 24 hours.
                </p>
              </div>
            </div>
            <p className="flex items-center gap-2.5 rounded-[7px] bg-line p-3 text-sm text-ink">
              <CircleCheck aria-hidden="true" strokeWidth={1.5} className="size-4 shrink-0 text-brand" />
              Ready to guide your next project
            </p>
          </div>

          <p className="text-xs text-muted">Illustrative project profile</p>
        </div>
      </Container>
    </section>
  );
}
