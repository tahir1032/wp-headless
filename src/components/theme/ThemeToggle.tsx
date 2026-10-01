"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark and Light mode"
      title={`Switch to ${isDark ? "Light" : "Dark"} theme`}
      className={`relative flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-white/10 text-amber-300 hover:bg-white/15 border border-white/10"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 shadow-sm"
      } ${className || ""}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="h-4 w-4 text-amber-400" />
        ) : (
          <Moon className="h-4 w-4 text-slate-700" />
        )}
      </motion.div>
    </button>
  );
}
