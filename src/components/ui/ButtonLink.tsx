import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "border-brand bg-brand text-white hover:bg-[#0000c4]",
  secondary: "border-line bg-white text-ink hover:border-ink",
  inverse: "border-white bg-white text-brand hover:bg-white/90",
};

const SIZES = {
  sm: "h-10 gap-5 px-5 text-sm",
  md: "h-12.5 gap-5 px-6.25 text-base",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  external?: boolean;
  className?: string;
};

export const buttonClasses = (variant: keyof typeof VARIANTS = "primary", size: keyof typeof SIZES = "md") =>
  cn(
    "group inline-flex shrink-0 items-center justify-center rounded-full border leading-none font-medium transition-colors",
    VARIANTS[variant],
    SIZES[size],
  );

export function ButtonArrow() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      strokeWidth={1.5}
      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  );
}

export default function ButtonLink({ href, children, variant = "primary", size = "md", external, className }: Props) {
  const classes = cn(buttonClasses(variant, size), className);

  // Plain <a> for mailto:/tel: and other sites; only http(s) links open in a new tab.
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
        <ButtonArrow />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ButtonArrow />
    </Link>
  );
}
