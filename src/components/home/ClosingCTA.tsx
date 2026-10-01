"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  return (
    <Section className="bg-primary text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Let's discuss how I can help bring your vision to life with custom
            web development and automation solutions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact-us"
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="/work"
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
