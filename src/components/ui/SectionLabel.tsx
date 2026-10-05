import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  inverse,
  className,
}: {
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("flex items-center gap-2.5 text-sm leading-[21px] font-medium", inverse ? "text-white" : "text-body", className)}>
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", inverse ? "bg-white" : "bg-brand")} />
      {children}
    </p>
  );
}
