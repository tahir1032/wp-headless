import { ArrowRight, FileText, MessagesSquare, Shuffle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const PROBLEMS = [
  {
    icon: FileText,
    title: "The blank brief tax",
    description: "A good idea still needs a clear brief, a realistic scope, and the time to turn it into a buildable plan.",
  },
  {
    icon: MessagesSquare,
    title: "Context on repeat",
    description: "Your requirements get lost between disconnected tools, one-off briefs, and scattered documents.",
  },
  {
    icon: Shuffle,
    title: "Development without a system",
    description: "A burst of fixes isn’t a strategy. Your team needs a repeatable way to keep the project moving.",
  },
];

export default function Bottleneck() {
  return (
    <section className="bg-ink py-20 lg:py-25">
      <Container className="flex flex-col gap-12 lg:gap-15">
        <SectionIntro
          inverse
          label="The web development reality"
          heading={
            <>
              Web development shouldn’t be <br className="hidden lg:block" />
              your next bottleneck.
            </>
          }
          description="You’re building the business. Your website and systems should help tell that story—not become another business to run."
        />

        <ol className="grid gap-10 md:grid-cols-3 lg:gap-7.5">
          {PROBLEMS.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="flex flex-col gap-5 border-t border-body pt-5">
              <div className="flex items-center justify-between text-line">
                <span className="text-sm">{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" strokeWidth={1.5} className="size-5" />
              </div>
              <h3 className="t-title text-white">{title}</h3>
              <p className="text-base leading-[26px] text-line">{description}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3 rounded-panel bg-body px-6.25 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg leading-snug text-line">Less starting from scratch.</p>
          <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-5 rotate-90 text-white sm:rotate-0" />
          <p className="text-lg leading-snug font-medium text-white">More building on what makes your project, your project.</p>
        </div>
      </Container>
    </section>
  );
}
