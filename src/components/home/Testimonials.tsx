"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Star, Quote, Sparkles, CheckCircle } from "lucide-react";

const REVIEWS = [
  {
    author: "David Miller",
    role: "Agency Founder",
    location: "Austin, Texas, USA",
    flag: "🇺🇸",
    project: "GoHighLevel Multi-Tier Funnel & WordPress Portal",
    rating: 5,
    text: "Tahir is our secret weapon for all technical builds. He completely rewired our GoHighLevel workflows and connected them with our WordPress membership site. Response times dropped from 2 hours to 30 seconds. Highly recommend!",
  },
  {
    author: "James Thornton",
    role: "Director of E-Commerce",
    location: "London, UK",
    flag: "🇬🇧",
    project: "Custom WooCommerce Checkout & Speed Optimization",
    rating: 5,
    text: "Our WooCommerce store was bleeding mobile conversions due to slow checkout scripts. Tahir rebuilt our theme cleanly with custom PHP and ACF. Our mobile checkout speed is now under 0.5s and sales are up 38%.",
  },
  {
    author: "Sarah Lindqvist",
    role: "Marketing Director",
    location: "Sydney, Australia",
    flag: "🇦🇺",
    project: "Headless WordPress & Next.js Re-Architecture",
    rating: 5,
    text: "Working with Tahir was effortless. He has a rare blend of deep WordPress backend mastery and bleeding-edge modern frontend skills. Delivered on time and exceeded our Core Web Vitals targets.",
  },
];

export default function Testimonials() {
  return (
    <Section className="relative py-24 sm:py-32 bg-[#060911] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-cyan-500/5 blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <Badge variant="emerald" beacon className="mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Client Praise & Social Proof</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by <span className="text-gradient-cyan">Global Founders</span> & Agencies
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Hear from business leaders who scaled their conversions with custom WordPress engineering and GoHighLevel systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full p-6 sm:p-8 flex flex-col justify-between border-white/10 hover:border-cyan-500/40">
                <div>
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-white/10" />
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{review.author}</span>
                        <CheckCircle className="h-3.5 w-3.5 text-cyan-400 inline" />
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {review.role} • {review.location} {review.flag}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-[10px] text-cyan-300/80 font-mono bg-cyan-500/5 px-2.5 py-1 rounded-lg border border-cyan-500/10">
                    Project: {review.project}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
