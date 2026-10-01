"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  Globe,
  ArrowRight,
  Send,
  Zap,
  MessageSquare,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

const PIPELINE_NODES = [
  {
    id: "capture",
    step: "01",
    title: "Lead Ingestion",
    subtitle: "Custom WordPress / Headless Frontend",
    icon: Globe,
    badge: "Sub-Second Trigger",
    description:
      "A high-converting custom landing page captures visitor data with zero form lag, validating inputs in real-time.",
    tech: ["WordPress ACF Form", "REST API", "Instant Client Validation"],
    metric: "0.2s Form Submit Time",
  },
  {
    id: "webhook",
    step: "02",
    title: "Webhook Dispatch",
    subtitle: "Secure Webhook / API Layer",
    icon: Send,
    badge: "Payload Encrypted",
    description:
      "Secure JSON payload is dispatched instantaneously via custom Webhook or Zapier/Make to your GoHighLevel sub-account.",
    tech: ["HMAC Verification", "Webhook Endpoint", "Sub-Account Router"],
    metric: "100% Delivery Guarantee",
  },
  {
    id: "ghl",
    step: "03",
    title: "GHL Automation Engine",
    subtitle: "GoHighLevel Multi-Branch Workflow",
    icon: Zap,
    badge: "Smart Decision Tree",
    description:
      "GHL assigns pipeline stages, tags the contact, and launches dynamic conditional branches based on lead intent.",
    tech: ["Lead Tagging", "Pipeline Automation", "Smart Trigger Logic"],
    metric: "< 15s Lead Assignment",
  },
  {
    id: "nurture",
    step: "04",
    title: "Instant Multi-Channel Nurture",
    subtitle: "SMS • Email • WhatsApp Alerts",
    icon: MessageSquare,
    badge: "Automated Followup",
    description:
      "Personalized SMS and rich email sequence fires within 30 seconds, catching hot leads while their purchase intent is peak.",
    tech: ["Twilio SMS Integration", "HTML Email Sequences", "WhatsApp API"],
    metric: "+340% Higher Response Rate",
  },
  {
    id: "convert",
    step: "05",
    title: "Calendar Booking & Revenue",
    subtitle: "Automated Appointment & Stripe Checkout",
    icon: CalendarCheck,
    badge: "Revenue Closed",
    description:
      "Leads self-schedule directly into your synced calendar, receive reminder SMS, and pay consultation deposit effortlessly.",
    tech: ["GHL Calendar 2-Way Sync", "Stripe Invoice", "CRM Stage Update"],
    metric: "82% Show-Up Rate",
  },
];

export default function AutomationVisualizer() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("ghl");
  const activeNode =
    PIPELINE_NODES.find((n) => n.id === selectedNodeId) || PIPELINE_NODES[2];

  return (
    <section className="relative py-20 sm:py-28 bg-slate-50/70 dark:bg-[#080d19] border-y border-slate-200/90 dark:border-white/10 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Badge variant="emerald" beacon className="mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Architecture Visualizer</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How The <span className="text-gradient-cyan">WordPress + GHL</span> Engine Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Click each step below to inspect how leads flow seamlessly from your WordPress site into GoHighLevel automated revenue machines.
          </p>
        </div>

        {/* Pipeline Stepper Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10 w-full">
          {PIPELINE_NODES.map((node) => {
            const isSelected = node.id === selectedNodeId;
            const Icon = node.icon;

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`relative p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-white dark:bg-cyan-500/10 border-cyan-500 text-slate-950 dark:text-white shadow-md dark:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-100/60 dark:hover:bg-white/[0.04] shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold">
                      STEP {node.step}
                    </span>
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                    )}
                  </div>
                  <div
                    className={`h-9 w-9 rounded-lg flex items-center justify-center mb-3 ${
                      isSelected
                        ? "bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-sm"
                        : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {node.title}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium">
                  {node.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Deep Dive HUD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-slate-200/90 dark:border-white/15 bg-white dark:bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-lg dark:shadow-2xl w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider">
                    Pipeline Phase {activeNode.step}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{activeNode.subtitle}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {activeNode.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-6">
                  {activeNode.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-2">Built With:</span>
                  {activeNode.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-1 font-semibold">
                    PERFORMANCE IMPACT
                  </div>
                  <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
                    {activeNode.metric}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  <Button
                    href="/contact-us"
                    size="sm"
                    variant="primary"
                    className="w-full text-xs font-bold"
                  >
                    Implement This Workflow
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
