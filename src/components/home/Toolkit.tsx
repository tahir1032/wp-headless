import { ArrowDown, ArrowRight, ArrowUpRight, Compass, FileText, FolderOpen, Link2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Tag from "@/components/ui/Tag";
import { LogoMark } from "@/components/ui/Logo";

const OUTPUTS = ["A WordPress site", "A WooCommerce store", "A GHL automation system"];

export default function Toolkit() {
  return (
    <section className="pb-20 lg:pb-25">
      <Container className="flex flex-col gap-10">
        <SectionIntro
          label="More than a developer"
          heading={
            <>
              All the pieces.
              <br />
              One web development engine.
            </>
          }
          description="Connect the thinking behind your project with the work that brings it to life."
        />

        <div className="grid gap-5 lg:grid-cols-[8fr_5fr]">
          {/* A plan with direction */}
          <div className="flex flex-col gap-6.25 overflow-hidden rounded-section bg-line px-5 pt-5 sm:px-7.5 sm:pt-7.5">
            <div className="flex flex-col gap-2.5">
              <h3 className="t-title text-ink">A plan with direction.</h3>
              <p className="text-base leading-[26px] text-body">
                Move from a clear brief to a realistic plan. Shape the scope, sharpen the requirements, and keep your
                goals in the room.
              </p>
            </div>
            <div className="flex flex-col gap-5 rounded-t-panel bg-white p-5 sm:p-6.25">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted">Project brief / Draft</p>
                <div aria-hidden="true" className="flex items-center gap-5 text-sm text-body">
                  <span className="font-semibold">B</span>
                  <span className="italic">I</span>
                  <Link2 strokeWidth={1.5} className="size-3.5" />
                </div>
              </div>
              <hr className="border-line" />
              <p className="text-2xl leading-[1.5] font-medium tracking-[-0.5px] text-ink lg:text-[29px]">
                A WordPress site with a clear plan
              </p>
              <p className="text-base leading-[26px] text-body">
                The hardest part of web development isn’t finding the right code. It’s connecting what you know about
                your business with what your audience needs to see.
              </p>
              <p className="flex items-center gap-2.5 rounded-[7px] bg-line p-3 text-sm text-brand">
                <LogoMark className="size-4" />
                Make the scope more specific to your audience
              </p>
            </div>
          </div>

          {/* One project, more ways in */}
          <div className="flex flex-col gap-6.25 rounded-section bg-brand p-5 text-white sm:p-7.5">
            <div className="flex flex-col gap-2.5">
              <h3 className="t-title">One project. More ways in.</h3>
              <p className="text-base leading-[26px]">
                Adapt a strong project into the systems your team actually uses—without losing the thread.
              </p>
            </div>
            <p className="flex items-center gap-3 rounded-card bg-white p-5 text-base leading-none font-medium text-ink">
              <FileText aria-hidden="true" strokeWidth={1.5} className="size-5 shrink-0 text-brand" />
              Your project requirements
            </p>
            <ArrowDown aria-hidden="true" strokeWidth={1.5} className="mx-auto size-5" />
            <ul className="flex flex-col gap-2.5">
              {OUTPUTS.map((output) => (
                <li key={output} className="flex items-center justify-between text-base">
                  {output}
                  <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-section border border-line bg-white p-5 sm:p-7.5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="t-title text-ink">A reason behind every build.</h3>
              <Compass aria-hidden="true" strokeWidth={1.5} className="size-6 shrink-0 text-brand" />
            </div>
            <p className="text-base leading-[26px] text-body">
              Build around project themes, not random ideas. Keep the audience and the business goal visible from the
              start.
            </p>
            <div className="flex flex-wrap gap-3">
              <Tag>WordPress sites</Tag>
              <Tag>WooCommerce stores</Tag>
              <Tag>GHL automation</Tag>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-section border border-line bg-white p-5 sm:p-7.5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="t-title text-ink">A home for the whole process.</h3>
              <FolderOpen aria-hidden="true" strokeWidth={1.5} className="size-6 shrink-0 text-brand" />
            </div>
            <p className="text-base leading-[26px] text-body">
              Keep ideas, briefs, and decisions together. Pick up where you left off instead of piecing the project
              back together.
            </p>
            <div className="flex items-center gap-3">
              <Tag>Brief</Tag>
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 text-muted" />
              <Tag>Plan</Tag>
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 text-muted" />
              <Tag active>Build</Tag>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted">Previews are illustrative.</p>
      </Container>
    </section>
  );
}
