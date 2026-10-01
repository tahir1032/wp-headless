"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_LINK_PREFILLED } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work & Case Studies" },
  { href: "/about", label: "Studio" },
  { href: "/contact-us", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 sm:pt-4 px-3 sm:px-6">
      <Container>
        <div
          className={`flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/90 dark:bg-[#080d1a]/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-white/70 dark:bg-[#080d1a]/60 backdrop-blur-md border border-slate-200/50 dark:border-white/5"
          }`}
        >
          {/* Logo & Status */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 text-white font-black text-xs shadow-md group-hover:scale-105 transition-transform">
                TH
              </span>
              <span>
                Tahir<span className="text-cyan-600 dark:text-cyan-400">.</span>dev
              </span>
            </Link>

            <div className="hidden lg:flex">
              <Badge variant="emerald" beacon className="text-[11px] py-0.5">
                Available for New Projects
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] p-1 rounded-xl">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-slate-950 dark:text-white font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 -z-10 shadow-sm dark:shadow-inner"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs + Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />
            <Button
              href={WHATSAPP_LINK_PREFILLED}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              className="text-xs"
            >
              WhatsApp
            </Button>
            <Button
              href="/contact-us"
              size="sm"
              variant="primary"
              className="text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Toggle & Mobile Theme Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <Button
              href="/contact-us"
              size="sm"
              variant="primary"
              className="text-xs px-2.5 py-1"
            >
              Hire Me
            </Button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-2xl p-5 md:hidden shadow-xl dark:shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="emerald" beacon className="text-xs">
                  Available for Projects
                </Badge>
              </div>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-2 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
                  <Button
                    href="/contact-us"
                    size="md"
                    variant="primary"
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule Strategy Call
                  </Button>
                  <Button
                    href={WHATSAPP_LINK_PREFILLED}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    variant="outline"
                    className="w-full"
                  >
                    Direct WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
