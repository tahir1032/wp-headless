import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" fill="currentColor" aria-hidden="true" className={cn("shrink-0 text-brand", className)}>
      <path d="M15 0L19 10L30 15L19 19L15 30L10 19L0 15L10 10Z" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="tahirhafeez.com home">
      <LogoMark className="size-6 lg:size-7.5" />
      <span className="text-[22px] leading-none font-semibold tracking-[-1.2px] text-ink lg:text-[29px] lg:tracking-[-1.5px]">
        tahirhafeez.com
      </span>
    </Link>
  );
}
