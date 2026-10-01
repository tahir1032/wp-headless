"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  TrendingUp,
  X,
  CheckCircle2,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getCaseStudies } from "@/lib/wordpress";
import type { CaseStudy } from "@/types";

const CURATED_SHOWCASE = [
  {
    id: 101,
    slug: "nexus-woocommerce-headless",
    title: "Nexus Global • High-Volume WooCommerce & Headless Store",
    platform: "WordPress",
    category: "WordPress & WooCommerce",
    clientType: "E-Commerce Brand (US)",
    excerpt:
      "Engineered custom WooCommerce checkout flow and ACF Pro product engine, cutting cart abandonment by 34% and scaling to $1.2M annual GMV.",
    metrics: [
      { label: "Conversion Lift", value: "+34%" },
      { label: "Load Speed", value: "0.45s" },
      { label: "Annual GMV", value: "$1.2M+" },
    ],
    tags: ["WooCommerce", "Custom Theme", "Stripe API", "ACF Pro"],
    problem:
      "The client's previous store was sluggish (4.2s load time), with broken mobile checkouts and high plugin bloat.",
    solution:
      "Rebuilt from scratch with clean PHP 8.3 theme, streamlined AJAX cart, custom database queries, and optimized CDN caching.",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    clientFlag: "🇺🇸",
  },
  {
    id: 102,
    slug: "apex-ghl-agency-funnel",
    title: "Apex Growth • 8-Figure GHL Automated Funnel Machine",
    platform: "GHL",
    category: "GoHighLevel Funnels",
    clientType: "B2B Marketing Agency (UK)",
    excerpt:
      "Architected an end-to-end GoHighLevel funnel with automated 2-way SMS follow-up, smart pipeline routing, and calendar self-booking.",
    metrics: [
      { label: "Lead Response", value: "< 28s" },
      { label: "Booked Calls", value: "+340%" },
      { label: "Show-Up Rate", value: "88%" },
    ],
    tags: ["GoHighLevel", "SMS Automations", "Webhooks", "Calendar Sync"],
    problem:
      "Agency was losing 60% of inbound leads due to slow manual follow-ups and uncoordinated calendar bookings.",
    solution:
      "Designed a custom multi-step qualifier funnel connected via instant webhooks to a 5-touchpoint automated SMS/email sequence.",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    clientFlag: "🇬🇧",
  },
  {
    id: 103,
    slug: "aurora-headless-nextjs-wp",
    title: "Aurora Cloud • Headless WordPress & Next.js Platform",
    platform: "WordPress",
    category: "Headless Next.js",
    clientType: "SaaS Enterprise (Australia)",
    excerpt:
      "Decoupled WordPress CMS backend with Next.js 16 frontend on Vercel Edge, achieving a perfect 100/100 Google Lighthouse score.",
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Organic Traffic", value: "+210%" },
      { label: "Server Cost", value: "-45%" },
    ],
    tags: ["Next.js 16", "Headless WP", "GraphQL", "Tailwind CSS"],
    problem:
      "Enterprise content team required standard WordPress editorial workflows but needed ultra-fast global frontend delivery.",
    solution:
      "Implemented headless WordPress with WPGraphQL, ISR incremental generation, and ultra-responsive modern UI components.",
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    clientFlag: "🇦🇺",
  },
];

const CATEGORIES = [
  "All Projects",
  "WordPress & WooCommerce",
  "GoHighLevel Funnels",
  "Headless Next.js",
];

export default function RecentWork() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [selectedStudy, setSelectedStudy] = useState<any | null>(null);

  const filteredProjects =
    activeTab === "All Projects"
      ? CURATED_SHOWCASE
      : CURATED_SHOWCASE.filter((p) => p.category === activeTab);

  return (
    <Section className="relative py-24 sm:py-32 bg-[#060911]">
      <Container>
        {/* Header with Title and Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Badge variant="cyan" beacon className="mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Proven Business Results</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected <span className="text-gradient-cyan">Work & Case Studies</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
              Real client engagements delivering tangible conversion growth, sub-second speeds, and automated pipeline execution.
            </p>
          </div>

          <Button href="/work" variant="glow" size="sm" className="hidden sm:flex self-start md:self-auto">
            <span>View All 80+ Projects</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "text-slate-950 font-semibold"
                    : "text-slate-300 hover:text-white bg-white/5 border border-white/10"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeWorkTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 -z-10 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SpotlightCard className="h-full flex flex-col justify-between group overflow-hidden border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                  <div>
                    {/* Project Image Banner */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={project.featuredImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-80" />

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white flex items-center gap-1.5">
                          <span>{project.clientFlag}</span>
                          <span>{project.clientType}</span>
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-[11px] font-bold text-cyan-300 font-mono">
                          {project.platform}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                        {project.excerpt}
                      </p>

                      {/* Key Metrics Row */}
                      <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center p-2 rounded-lg bg-white/[0.02]">
                            <div className="text-sm font-extrabold text-cyan-400">
                              {m.value}
                            </div>
                            <div className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => setSelectedStudy(project)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-white/10 text-xs font-semibold text-white hover:text-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Quick View Architecture</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {selectedStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedStudy(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-[#0c1322] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="cyan">{selectedStudy.category}</Badge>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedStudy.clientFlag} {selectedStudy.clientType}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedStudy.title}
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                  {selectedStudy.metrics.map((m: any) => (
                    <div key={m.label} className="text-center">
                      <div className="text-xl font-black text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                      Problem
                    </h4>
                    <p className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                      {selectedStudy.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                      Engineering Solution
                    </h4>
                    <p className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                      {selectedStudy.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <Button
                    href="/contact-us"
                    variant="primary"
                    size="md"
                    className="w-full text-xs"
                    onClick={() => setSelectedStudy(null)}
                  >
                    Build A Similar Solution
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
