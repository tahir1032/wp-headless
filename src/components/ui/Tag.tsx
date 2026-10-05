import { cn } from "@/lib/utils";

export default function Tag({ children, active, className }: { children: React.ReactNode; active?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs leading-none font-medium",
        active ? "border-brand bg-brand text-white" : "border-line bg-white text-body",
        className,
      )}
    >
      {children}
    </span>
  );
}
