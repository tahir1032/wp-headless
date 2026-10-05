import { cn } from "@/lib/utils";

export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-15", className)}>{children}</div>;
}
