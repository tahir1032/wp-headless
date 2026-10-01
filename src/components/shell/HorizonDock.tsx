"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  Mail,
  ArrowUp,
} from "lucide-react";
import {
  WHATSAPP_LINK_PREFILLED,
  CONTACT_EMAIL,
  LINKEDIN_URL,
} from "@/lib/site-config";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "next/link";

// Custom LinkedIn SVG Icon
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function HorizonDock() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const DOCK_ITEMS = [
    {
      id: "calendar",
      label: "Book Strategy Call",
      icon: Calendar,
      href: "/contact-us",
      isInternal: true,
      color: "text-cyan-700 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/20",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Direct",
      icon: MessageCircle,
      href: WHATSAPP_LINK_PREFILLED,
      isInternal: false,
      color: "text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/20",
    },
    {
      id: "email",
      label: "Send Email",
      icon: Mail,
      href: `mailto:${CONTACT_EMAIL}`,
      isInternal: false,
      color: "text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/20",
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      icon: LinkedInIcon,
      href: LINKEDIN_URL,
      isInternal: false,
      color: "text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-500/20",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1.5 p-2 rounded-2xl bg-white/90 dark:bg-[#090e1c]/85 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      >
        <ThemeToggle className="h-10 w-10 sm:h-11 sm:w-11" />

        <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-0.5" />

        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredIcon === item.id;

          const buttonContent = (
            <div
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 transition-all duration-200 hover:scale-110 active:scale-95 ${item.color}`}
            >
              <Icon className="h-5 w-5" />

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-950 border border-slate-800 dark:border-white/15 text-[11px] font-medium text-white whitespace-nowrap shadow-xl pointer-events-none"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );

          if (item.isInternal) {
            return (
              <Link key={item.id} href={item.href} aria-label={item.label}>
                {buttonContent}
              </Link>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              {buttonContent}
            </a>
          );
        })}

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <>
            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-1" />
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
