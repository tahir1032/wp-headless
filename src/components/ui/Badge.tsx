"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "emerald" | "purple" | "outline";
  beacon?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "cyan",
  beacon = false,
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white border-white/15",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    purple: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.15)]",
    outline: "bg-transparent text-slate-300 border-white/15",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {beacon && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              variant === "emerald" ? "bg-emerald-400" : "bg-cyan-400"
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              variant === "emerald" ? "bg-emerald-500" : "bg-cyan-500"
            )}
          />
        </span>
      )}
      {children}
    </div>
  );
}
