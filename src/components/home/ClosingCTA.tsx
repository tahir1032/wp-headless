"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SpotlightCard from "@/components/ui/SpotlightCard";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Send,
  Zap,
} from "lucide-react";
import { WHATSAPP_LINK_PREFILLED, CONTACT_EMAIL } from "@/lib/site-config";

const PROJECT_TYPES = [
  { id: "wp", label: "WordPress / WooCommerce Store", estTime: "2-3 Weeks", badge: "Custom Code" },
  { id: "ghl", label: "GoHighLevel Funnel & Automation", estTime: "1-2 Weeks", badge: "Turnkey CRM" },
  { id: "headless", label: "Headless Next.js + WP", estTime: "3-4 Weeks", badge: "100/100 Speed" },
  { id: "speed", label: "Core Web Vitals & Optimization", estTime: "3-5 Days", badge: "Speed Boost" },
];

const TIMELINES = [
  { id: "urgent", label: "Immediate (Within 7-14 Days)" },
  { id: "standard", label: "Standard (Next 3-4 Weeks)" },
  { id: "exploring", label: "Planning / Q3 Roadmap" },
];

export default function ClosingCTA() {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[0]);

  const customWhatsAppMessage = `Hi Tahir, I'm interested in a ${selectedType.label} with a timeline of ${selectedTimeline.label}. Let's discuss!`;
  const whatsappUrl = `https://wa.me/923027263808?text=${encodeURIComponent(customWhatsAppMessage)}`;

  return (
    <Section className="relative py-24 sm:py-32 bg-[#080d19] border-t border-white/10 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Badge variant="emerald" beacon className="mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Direct Client Onboarding</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your <span className="text-gradient-cyan">Web & Funnel Engine</span>?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Book a no-obligation 15-minute strategy call or send a direct message on WhatsApp to discuss technical specs, project turnaround, and exact pricing.
            </p>

            <div className="mt-8 space-y-3 w-full max-w-md">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Direct communication with Tahir (No agency middleman)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>100% clean code guarantee & post-launch support</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Fast response SLA (&lt; 2 hours during active sprints)</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/contact-us" size="lg" variant="primary" className="w-full sm:w-auto">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>Schedule Strategy Call</span>
              </Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="glow"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400 mr-1.5" />
                <span>Instant WhatsApp Chat</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Scope Estimator Widget */}
          <div className="lg:col-span-6">
            <SpotlightCard className="p-6 sm:p-8 border-white/15 shadow-[0_0_40px_rgba(6,182,212,0.15)] bg-slate-950/90">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Interactive Project Blueprint
                  </span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono">
                  LIVE ESTIMATOR
                </span>
              </div>

              {/* Step 1: Project Type */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-slate-300 mb-2.5 block">
                  1. Select Primary Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                        selectedType.id === type.id
                          ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="font-semibold">{type.label}</div>
                      <div className="text-[10px] text-cyan-400 font-mono mt-1">
                        {type.badge}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Target Timeline */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-slate-300 mb-2.5 block">
                  2. Select Target Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {TIMELINES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTimeline(t)}
                      className={`p-2.5 rounded-xl text-center border transition-all text-xs cursor-pointer ${
                        selectedTimeline.id === t.id
                          ? "bg-cyan-500/15 border-cyan-400 text-white font-medium"
                          : "bg-white/[0.02] border-white/10 text-slate-400 hover:bg-white/5"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Box */}
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs text-slate-300">Estimated Turnaround:</span>
                  </div>
                  <span className="text-sm font-bold text-cyan-300 font-mono">
                    {selectedType.estTime}
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Blueprint CTA */}
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                variant="primary"
                className="w-full text-xs font-bold"
              >
                <span>Launch Project with This Blueprint</span>
                <Send className="h-3.5 w-3.5 ml-1" />
              </Button>
            </SpotlightCard>
          </div>
        </div>
      </Container>
    </Section>
  );
}
