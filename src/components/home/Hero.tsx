"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              WordPress & GoHighLevel{" "}
              <span className="text-primary">Specialist</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground sm:text-xl"
          >
            Building custom web solutions with 5+ years of professional
            experience. From WordPress development to GoHighLevel automation —
            delivered for clients worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/work" size="lg" variant="primary">
              View Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="/contact-us" size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              Book a Call
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="h-[600px] w-[800px] rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
}
