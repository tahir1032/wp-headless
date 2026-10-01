"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import SpotlightCard from "@/components/ui/SpotlightCard";
import {
  Search,
  Code2,
  Workflow,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture Blueprint",
    icon: Search,
    description:
      "We dissect your existing site bottlenecks, conversion leaks, and CRM workflows to map out an exact technical blueprint.",
    deliverables: ["Tech Stack Audit", "Data Model Schema", "Conversion Roadmap"],
  },
  {
    step: "02",
    title: "Rapid Clean-Code Engineering",
    icon: Code2,
    description:
      "Bespoke WordPress theme/plugin coding or Headless Next.js development. Zero page builder bloat, optimized PHP 8.3 & React.",
    deliverables: ["Custom WP Theme/Plugin", "100% Responsive UI", "Sub-second TTFB"],
  },
  {
    step: "03",
    title: "GHL & Webhook Automation Wiring",
    icon: Workflow,
    description:
      "We connect webhooks, lead forms, SMS sequences, calendars, and payment gateways into an automated GoHighLevel engine.",
    deliverables: ["GHL Multi-Tier Funnel", "Twilio 2-Way SMS", "Calendar Sync"],
  },
  {
    step: "04",
    title: "100/100 Optimization & Launch",
    icon: Rocket,
    description:
      "Rigorous cross-browser QA, Core Web Vitals performance tuning, enterprise DNS setup, and post-launch maintenance.",
    deliverables: ["100/100 Lighthouse", "Zero Downtime Deploy", "30-Day Guarantee"],
  },
];

export default function Process() {
  return (
    <Section className="relative py-20 sm:py-28 bg-slate-50/70 dark:bg-[#080d19] border-t border-slate-200/90 dark:border-white/10 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <Badge variant="cyan" beacon className="mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Execution Methodology</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable, Transparent <span className="text-gradient-cyan">4-Step Process</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From technical discovery to flawless automated delivery with zero guesswork.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <SpotlightCard className="h-full p-6 sm:p-7 flex flex-col justify-between group border-slate-200/90 dark:border-white/10 hover:border-cyan-500/50">
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-mono group-hover:text-cyan-600 dark:group-hover:text-cyan-400/40 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="mt-6 space-y-2 pt-4 border-t border-slate-200 dark:border-white/10">
                      {step.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 text-[10px] text-slate-500 dark:text-slate-500 font-mono font-bold uppercase tracking-wider">
                    PHASE {step.step} DELIVERABLE
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
              Have an urgent timeline or existing site needing an overhaul?
            </span>
          </div>
          <Link
            href="/contact-us"
            className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>Request Fast-Track Assessment</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
