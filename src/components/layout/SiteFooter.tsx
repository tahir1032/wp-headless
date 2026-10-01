import Container from "@/components/ui/Container";
import Link from "next/link";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import {
  CONTACT_EMAIL,
  LINKEDIN_URL,
  WHATSAPP_LINK_PREFILLED,
} from "@/lib/site-config";

// LinkedIn SVG
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

const FOOTER_NAV = [
  {
    title: "Specializations",
    links: [
      { href: "/work", label: "Custom WordPress & ACF Pro" },
      { href: "/work", label: "GoHighLevel Funnels & CRM" },
      { href: "/work", label: "WooCommerce Custom Stores" },
      { href: "/work", label: "Headless Next.js & React" },
      { href: "/work", label: "Core Web Vitals Optimization" },
    ],
  },
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/work", label: "Case Studies" },
      { href: "/about", label: "Studio & About" },
      { href: "/contact-us", label: "Book Strategy Call" },
    ],
  },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/90 dark:border-white/10 bg-slate-100/70 dark:bg-[#04060d] pb-28 pt-16 lg:pt-20 overflow-hidden text-slate-600 dark:text-slate-400">
      <Container className="relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-slate-200 dark:border-white/10 w-full">
          {/* Brand & Mission (Span 5) */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white group"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 text-white font-black text-xs shadow-md">
                TH
              </span>
              <span>
                Tahir Hafeez<span className="text-cyan-600 dark:text-cyan-400">.dev</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Senior Web Developer & GoHighLevel Architect with 5+ years of track record engineering high-converting WordPress systems and automated revenue funnels for global clients.
            </p>

            {/* Status & Availability Badge */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1.5 rounded-xl w-fit font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Client Engagements</span>
            </div>
          </div>

          {/* Nav Columns (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_NAV.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-300 flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Direct Channels */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
                Connect
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={WHATSAPP_LINK_PREFILLED}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5"
                  >
                    <Mail className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Direct Email</span>
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1.5"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Tahir Hafeez. All rights reserved. Remote — USA, UK, AU, UAE & Global.
          </p>
          <div className="flex items-center gap-2">
            <span>Engineered with Next.js & Framer Motion</span>
            <span>•</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-medium">100/100 Core Web Vitals</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
