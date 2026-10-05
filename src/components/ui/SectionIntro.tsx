import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  heading: React.ReactNode;
  description?: React.ReactNode;
  inverse?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

/** Label + large heading on the left, supporting copy bottom-aligned on the right. */
export default function SectionIntro({ label, heading, description, inverse, as: Heading = "h2", className }: Props) {
  return (
    <div className={cn("flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-25", className)}>
      <div className="flex max-w-[800px] flex-col gap-5">
        <SectionLabel inverse={inverse}>{label}</SectionLabel>
        <Heading className={cn("t-heading text-balance", inverse ? "text-white" : "text-ink")}>{heading}</Heading>
      </div>
      {description && (
        <p className={cn("t-lead max-w-[470px] shrink-0 lg:w-[385px] xl:w-[470px]", inverse ? "text-white" : "text-body")}>
          {description}
        </p>
      )}
    </div>
  );
}
