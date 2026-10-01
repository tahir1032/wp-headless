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
    default:
      "bg-slate-100 text-slate-800 border-slate-200 dark:bg-white/10 dark:text-white dark:border-white/15",
    cyan: "bg-cyan-50 text-cyan-800 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30 shadow-sm",
    emerald:
      "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30 shadow-sm",
    purple:
      "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/30 shadow-sm",
    outline:
      "bg-transparent text-slate-700 border-slate-300 dark:text-slate-300 dark:border-white/15",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md transition-all duration-200",
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
              variant === "emerald"
                ? "bg-emerald-500"
                : "bg-cyan-500"
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              variant === "emerald"
                ? "bg-emerald-600 dark:bg-emerald-400"
                : "bg-cyan-600 dark:bg-cyan-400"
            )}
          />
        </span>
      )}
      {children}
    </div>
  );
}
