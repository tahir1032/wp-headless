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
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden group";

    const variants = {
      primary:
        "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:brightness-110 active:scale-[0.98]",
      glow:
        "bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-[0.98]",
      emerald:
        "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:brightness-110 active:scale-[0.98]",
      secondary:
        "bg-white/10 text-white border border-white/15 backdrop-blur-md hover:bg-white/20 hover:border-white/30 active:scale-[0.98]",
      outline:
        "border border-white/20 text-slate-200 hover:bg-white/10 hover:border-white/40 hover:text-white active:scale-[0.98]",
      ghost:
        "text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
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
