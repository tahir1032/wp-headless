import { ArrowUpRight, Flag, Layers, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";

const AUDIENCES = [
  {
    icon: Lightbulb,
    role: "The founder",
    description: "Make your vision part of the project—not another item you never get to.",
    useCases: ["Build a founder-led vision", "Explain what you’re building", "Turn your expertise into a project"],
  },
  {
    icon: Layers,
    role: "The lean marketing team",
    description: "Give your web development a connected process, even when the team is small and the priorities are not.",
    useCases: ["Create a focused project plan", "Build across your key systems", "Keep launches and development aligned"],
  },
  {
    icon: Flag,
    role: "The first marketing hire",
    description: "Put a foundation under the work. Build a system you can own, refine, and grow with.",
    useCases: ["Capture the project context", "Bring structure to scattered ideas", "Develop a repeatable cadence"],
  },
];

export default function Audience() {
  return (
    <section className="bg-line py-20 lg:py-25">
      <Container className="flex flex-col gap-10">
        <SectionIntro
          label="Built for ambitious teams"
          heading={
            <>
              For the team
              <br />
              wearing every hat.
            </>
          }
          description="Whether web development is your job or one of your many jobs, I help you give it a clear direction."
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {AUDIENCES.map(({ icon: Icon, role, description, useCases }) => (
            <li key={role} className="flex flex-col gap-6.25 rounded-section bg-white p-5 sm:p-7.5">
              <Icon aria-hidden="true" strokeWidth={1.5} className="size-7.5 text-brand" />
              <h3 className="t-title tracking-[-0.7px] text-ink">{role}</h3>
              <p className="text-base leading-[26px] text-body">{description}</p>
              <hr className="mt-auto border-line" />
              <ul className="flex flex-col gap-3">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3 text-sm leading-[21px] text-body">
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-3.5 shrink-0 text-brand" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
