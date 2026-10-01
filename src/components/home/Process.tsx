"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Search, Hammer, Rocket, HeadphonesIcon } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understanding your goals, requirements, and technical needs to plan the perfect solution.",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "Developing your project with clean code, modern best practices, and regular progress updates.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploying your solution with thorough testing, optimization, and performance tuning.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description:
      "Ongoing maintenance, updates, and technical support to keep everything running smoothly.",
  },
];

export default function Process() {
  return (
    <Section className="bg-muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How I Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A straightforward, collaborative approach to delivering your project
            on time.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-1/2 top-6 hidden h-0.5 w-full bg-border lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
