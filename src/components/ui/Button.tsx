"use client";

import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow" | "emerald";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      className,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden group";

    const variants = {
      primary:
        "bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 text-white dark:text-slate-950 font-semibold shadow-[0_2px_10px_rgba(8,145,178,0.25)] hover:shadow-[0_4px_20px_rgba(8,145,178,0.4)] hover:brightness-105 active:scale-[0.98]",
      glow:
        "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/40 shadow-sm hover:bg-cyan-100 dark:hover:bg-cyan-500/20 active:scale-[0.98]",
      emerald:
        "bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-white dark:text-slate-950 font-semibold shadow-md hover:brightness-105 active:scale-[0.98]",
      secondary:
        "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 active:scale-[0.98]",
      outline:
        "border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 active:scale-[0.98]",
      ghost:
        "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2",
      lg: "text-base px-7 py-3.5 rounded-xl gap-2.5",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes} target={target} rel={rel}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
