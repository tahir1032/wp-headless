"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import TiltCard from "@/components/ui/TiltCard";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const HIGHLIGHTS = [
  "Custom WordPress Themes & Plugins",
  "GoHighLevel Funnels & Automation",
  "100/100 Core Web Vitals Guaranteed",
  "Sub-Second TTFB Architecture",
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"code" | "metrics" | "stack">("code");

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex items-center bg-grid-pattern">
      {/* Dynamic Ambient Aurora Glows */}
      <div className="aurora-glow-1 -top-24 -left-20 animate-pulse opacity-40" />
      <div className="aurora-glow-2 top-1/3 -right-24 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Kinetic Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Beacon */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="cyan" beacon className="px-3.5 py-1.5 text-xs sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>WordPress Architect & GoHighLevel Specialist</span>
              </Badge>
            </motion.div>

            {/* Kinetic Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Engineering High-Converting{" "}
              <span className="text-gradient-cyan">WordPress Sites</span> &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-400">
                Automated GHL Funnels
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              5+ years crafting bespoke e-commerce engines, tailored plugins, and
              bulletproof GoHighLevel client-acquisition pipelines for agencies and
              high-growth brands worldwide.
            </motion.p>

            {/* Bullet Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full"
            >
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button href="/work" size="lg" variant="primary" className="w-full sm:w-auto">
                <span>Explore Case Studies</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/contact-us"
                size="lg"
                variant="glow"
                className="w-full sm:w-auto"
              >
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>Book Strategy Call</span>
              </Button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">80+</div>
                <div className="text-xs text-slate-400 mt-0.5">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">99.8%</div>
                <div className="text-xs text-slate-400 mt-0.5">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">&lt; 2h</div>
                <div className="text-xs text-slate-400 mt-0.5">Average Response</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Developer HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <TiltCard maxRotation={10} className="p-1 border-white/15 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
              {/* HUD Header Bar */}
              <div className="p-4 bg-slate-950/80 border-b border-white/10 flex items-center justify-between rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">tahir-stack.config.ts</span>
                </div>

                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
                      activeTab === "code"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Terminal className="h-3 w-3 inline mr-1" />
                    Pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
                      activeTab === "metrics"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <TrendingUp className="h-3 w-3 inline mr-1" />
                    Scores
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
                      activeTab === "stack"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Layers className="h-3 w-3 inline mr-1" />
                    Ecosystem
                  </button>
                </div>
              </div>

              {/* HUD Content Area */}
              <div className="p-5 bg-[#090f1d]/90 font-mono text-xs text-slate-300 min-h-[300px] flex flex-col justify-between">
                {activeTab === "code" && (
                  <div className="space-y-3">
                    <div className="text-slate-500 text-[11px]">// Automated WordPress ➔ GHL Ingestion Engine</div>
                    <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 space-y-1.5 text-[11px]">
                      <div>
                        <span className="text-purple-400">const</span> <span className="text-cyan-300">architect</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">cms:</span> <span className="text-emerald-300">"Headless WordPress + ACF Pro"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">funnelEngine:</span> <span className="text-emerald-300">"GoHighLevel V2 Automation"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">performance:</span> <span className="text-cyan-400">100</span>, <span className="text-slate-500">// Lighthouse Core Web Vitals</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">leadSyncSpeed:</span> <span className="text-amber-300">"&lt; 350ms webhook trigger"</span>,
                      </div>
                      <div>&#125;;</div>
                    </div>

                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-cyan-300 font-sans font-medium text-xs">
                          Live Webhook Listening on Port 443
                        </span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono">STATUS: 200 OK</span>
                    </div>
                  </div>
                )}

                {activeTab === "metrics" && (
                  <div className="space-y-3">
                    <div className="text-slate-400 text-xs font-sans font-medium mb-1">
                      Performance & Efficiency Benchmark
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/40 p-3 rounded-xl border border-white/10 text-center">
                        <div className="text-2xl font-bold text-emerald-400">100/100</div>
                        <div className="text-[10px] text-slate-400 mt-1 font-sans">PageSpeed Desktop</div>
                      </div>
                      <div className="bg-black/40 p-3 rounded-xl border border-white/10 text-center">
                        <div className="text-2xl font-bold text-cyan-400">98/100</div>
                        <div className="text-[10px] text-slate-400 mt-1 font-sans">PageSpeed Mobile</div>
                      </div>
                    </div>

                    <div className="bg-black/40 p-3 rounded-xl border border-white/10 space-y-2">
                      <div className="flex justify-between text-xs font-sans">
                        <span className="text-slate-400">Conversion Rate Uplift</span>
                        <span className="text-emerald-400 font-bold">+340%</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-2.5">
                    <div className="text-slate-400 text-xs font-sans font-medium">
                      Core Specialized Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "WordPress",
                        "WooCommerce",
                        "GoHighLevel",
                        "Next.js 16",
                        "React 19",
                        "Tailwind CSS",
                        "PHP 8.3",
                        "REST / GraphQL APIs",
                        "Zapier & Make",
                        "Stripe / PayPal",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-sans"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* HUD Footer Status */}
                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Tahir Hafeez • Verified Specialist</span>
                  </div>
                  <Link
                    href="/contact-us"
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                  >
                    Hire Specialist &rarr;
                  </Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
