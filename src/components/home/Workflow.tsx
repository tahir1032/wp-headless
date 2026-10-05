import { ArrowUpRight, Compass, ScanText, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const STEPS = [
  {
    icon: ScanText,
    title: "Set the foundation",
    description: "Bring your goals, audience, and requirements into focus.",
    output: "Your project context",
  },
  {
    icon: Compass,
    title: "Find your direction",
    description: "Shape the scope and requirements that support your next priority.",
    output: "A focused project plan",
  },
  {
    icon: Sparkles,
    title: "Make it yours",
    description: "Build a plan with me. Add your expertise and refine the scope.",
    output: "A plan with a point of view",
  },
  {
    icon: ArrowUpRight,
    title: "Keep it moving",
    description: "Review, adapt, and organize what’s ready for your next step.",
    output: "Your next project, ready",
  },
];

export default function Workflow() {
  return (
    <section className="pb-20 lg:pb-25">
      <Container>
        <div className="flex flex-col gap-10 rounded-section bg-line p-5 sm:p-10 lg:p-15">
          <SectionIntro
            label="A repeatable workflow"
            heading={
              <>
                From “we should build” <br className="hidden lg:block" />
                to a plan you can act on.
              </>
            }
            description={
              <>
                One connected process.
                <br />
                You in the driver’s seat.
              </>
            }
          />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, description, output }, index) => (
              <li key={title} className="flex flex-col gap-5 rounded-panel bg-white p-5">
                <div className="flex items-center justify-between text-brand">
                  <span className="text-[29px] leading-none font-medium">{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" strokeWidth={1.5} className="size-6" />
                </div>
                <hr className="border-line" />
                <h3 className="text-xl leading-none font-medium text-ink">{title}</h3>
                <p className="text-base leading-[26px] text-body">{description}</p>
                <p className="mt-auto text-xs leading-[21px] text-brand">{output} ↗</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
