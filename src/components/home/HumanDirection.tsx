import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

const PRINCIPLES = ["Editable plans", "Your expertise", "Your approval"];

export default function HumanDirection() {
  return (
    <section className="py-20 lg:py-25">
      <Container className="grid items-center gap-12 lg:grid-cols-[640fr_620fr] lg:gap-15">
        <div className="relative rounded-section bg-line p-4 pb-4 sm:p-10 sm:pb-8">
          <div className="flex flex-col gap-5 rounded-panel bg-white p-5 sm:p-7.5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-ink">A project only you can build</p>
              <Tag>In review</Tag>
            </div>
            <hr className="border-line" />
            <p className="text-lg leading-[28.8px] text-ink sm:text-xl">
              We started with a simple question:
              <br />
              what if small teams didn’t have to choose between building the product and building the website?
            </p>
            <p className="text-xs text-muted">Add your perspective. Make the final call.</p>
          </div>

          <div className="mt-4 ml-auto flex max-w-[325px] flex-col gap-3 rounded-panel bg-ink p-5 sm:-mt-6 sm:mr-[-20px]">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex size-6.25 items-center justify-center rounded-full bg-white text-xs text-ink">TH</span>
              <p className="text-sm font-medium text-white">Tahir · Your team</p>
            </div>
            <p className="text-sm leading-[21px] text-white">
              This is our angle. Let’s add the story behind the first prototype.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6.25">
          <SectionLabel>Human direction</SectionLabel>
          <h2 className="t-heading text-ink">
            You build it.
            <br />I make it matter.
          </h2>
          <p className="t-lead text-body">
            I help with the heavy lifting. Your judgment, original thinking, and real-world expertise give the project
            its value. Review the work. Challenge the plan. Keep the final say.
          </p>
          <ul className="flex flex-wrap gap-x-7.5 gap-y-3 pt-2.5">
            {PRINCIPLES.map((principle) => (
              <li key={principle} className="flex items-center gap-2.5 text-sm text-body">
                <Check aria-hidden="true" strokeWidth={1.5} className="size-4 text-brand" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
