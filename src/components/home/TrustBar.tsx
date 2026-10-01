"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { Award, Zap, ShieldCheck, Globe, Star, Sparkles } from "lucide-react";

const TECH_ITEMS = [
  { name: "WordPress VIP & Custom", tag: "CMS Core" },
  { name: "GoHighLevel (GHL)", tag: "Automation CRM" },
  { name: "WooCommerce Engine", tag: "E-Commerce" },
  { name: "Next.js 16 & React 19", tag: "Headless" },
  { name: "Custom PHP 8.3 & REST", tag: "Backend" },
  { name: "Zapier & Make.com", tag: "Integrations" },
  { name: "Stripe & PayPal APIs", tag: "Payments" },
  { name: "Tailwind CSS v4", tag: "Styling" },
  { name: "ACF Pro & Custom Post Types", tag: "Data Models" },
  { name: "Webhook Sub-system", tag: "Realtime" },
];

const CLIENT_COUNTRIES = [
  { flag: "🇺🇸", country: "United States" },
  { flag: "🇬🇧", country: "United Kingdom" },
  { flag: "🇦🇺", country: "Australia" },
  { flag: "🇦🇪", country: "United Arab Emirates" },
  { flag: "🇿🇦", country: "South Africa" },
  { flag: "🇨🇦", country: "Canada" },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-white/10 bg-[#070b16]/90 py-10 overflow-hidden">
      {/* Background glow strip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-12 bg-cyan-500/5 blur-2xl pointer-events-none" />

      <Container>
        {/* Trust Credibility Stat Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">5+ Years</div>
              <div className="text-xs text-slate-400">Senior Track Record</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">80+ Projects</div>
              <div className="text-xs text-slate-400">Delivered Globally</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Star className="h-5 w-5" fill="currentColor" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">5.0 Star</div>
              <div className="text-xs text-slate-400">Client Rating</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">6+ Countries</div>
              <div className="text-xs text-slate-400">US, UK, AU, UAE & More</div>
            </div>
          </div>
        </div>

        {/* Marquee Row 1: Technologies */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Battle-Tested Technologies & Tooling
            </span>
          </div>

          <InfiniteMarquee speed={30} direction="left">
            {TECH_ITEMS.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all cursor-default"
              >
                <span className="text-xs font-semibold text-slate-200">{item.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-mono">
                  {item.tag}
                </span>
              </div>
            ))}
          </InfiniteMarquee>

          {/* Marquee Row 2: Client Locations */}
          <InfiniteMarquee speed={35} direction="right">
            {CLIENT_COUNTRIES.map((item) => (
              <div
                key={item.country}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-xs text-slate-300"
              >
                <span className="text-sm">{item.flag}</span>
                <span>Delivered for Clients in {item.country}</span>
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </Container>
    </section>
  );
}
