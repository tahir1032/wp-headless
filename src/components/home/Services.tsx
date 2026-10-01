"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Badge from "@/components/ui/Badge";
import {
  Code,
  Zap,
  Layers,
  Gauge,
  Workflow,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Bot,
  Database,
  Lock,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <Section className="relative py-20 sm:py-28 bg-white dark:bg-[#060911] overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <Badge variant="cyan" beacon className="mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Core Technical Specializations</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            High-Impact Engineering for{" "}
            <span className="text-gradient-cyan">WordPress & GoHighLevel</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From lightning-fast custom web development to automated client conversion funnels — engineered to scale your revenue.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {/* Bento Item 1: WordPress & WooCommerce Architecture (Col Span 7) */}
          <div className="md:col-span-7 w-full">
            <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Code className="h-6 w-6" />
                  </div>
                  <Badge variant="cyan" className="text-[11px]">
                    WordPress & WooCommerce
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  Custom WordPress & WooCommerce Development
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tailor-made themes, bespoke plugin architecture, and frictionless WooCommerce checkout systems. No page-builder bloat — pure, performant, clean-coded solutions.
                </p>

                {/* Technical Feature Badges */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300">
                    <ShoppingBag className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>WooCommerce Custom Stores</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300">
                    <Cpu className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Custom Plugin Development</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300">
                    <Database className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>ACF Pro & Custom Data Models</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300">
                    <Lock className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Enterprise Security Hardening</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">STACK: PHP 8.3 • JS • REST API</span>
                <Link
                  href="/contact-us"
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 group/link"
                >
                  <span>Discuss WordPress Project</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 2: GoHighLevel Automation & Funnels (Col Span 5) */}
          <div className="md:col-span-5 w-full">
            <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6" />
                  </div>
                  <Badge variant="emerald" className="text-[11px]">
                    GHL Architecture
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  GoHighLevel (GHL) Ecosystems
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  High-converting landing page funnels, automated SMS/Email workflows, multi-tier pipeline setups, and custom webhook automations.
                </p>

                {/* GHL Highlights */}
                <div className="mt-6 space-y-2.5">
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Workflow className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      Multi-Stage Lead Nurturing
                    </span>
                    <span className="text-[10px] bg-emerald-200/60 dark:bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 px-1.5 py-0.5 rounded font-mono font-bold">AUTOMATED</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Bot className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                      Calendar & Appointment Booking
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">2-WAY SYNC</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">GHL • Webhooks • CRM</span>
                <Link
                  href="/contact-us"
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1 group/link"
                >
                  <span>Build GHL Funnel</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 3: Headless Next.js & React (Col Span 4) */}
          <div className="md:col-span-4 w-full">
            <SpotlightCard className="h-full p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 mb-5">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  Headless Next.js & React
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Decoupled architectures combining WordPress backend power with Next.js edge performance and zero page-load latency.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                Next.js 16 • React 19 • Edge Cached
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 4: Webhooks, Zapier & API Integrations (Col Span 4) */}
          <div className="md:col-span-4 w-full">
            <SpotlightCard className="h-full p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 mb-5">
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  Custom API & Webhook Integrations
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Seamless data pipelines connecting Stripe, Zapier, Make.com, HubSpot, Twilio, and proprietary 3rd-party databases.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                Stripe • Zapier • Make • REST/GraphQL
              </div>
            </SpotlightCard>
          </div>

          {/* Bento Item 5: Speed Optimization & 100/100 Core Web Vitals (Col Span 4) */}
          <div className="md:col-span-4 w-full">
            <SpotlightCard className="h-full p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30 mb-5">
                  <Gauge className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  Core Web Vitals & Speed
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Transforming sluggish sites into sub-second powerhouses. Asset minification, caching hierarchies, and database optimization.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-amber-600 dark:text-amber-400 font-semibold">
                100/100 PageSpeed Guaranteed
              </div>
            </SpotlightCard>
          </div>
        </div>
      </Container>
    </Section>
  );
}
