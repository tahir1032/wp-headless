"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Code, Database, Globe, Zap, ArrowRight } from "lucide-react";
import Process from "@/components/home/Process";
import ClosingCTA from "@/components/home/ClosingCTA";

const SKILLS = [
  {
    category: "Frontend",
    icon: Code,
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: Database,
    tools: ["PHP", "Node.js", "REST APIs", "MySQL", "WordPress Core"],
  },
  {
    category: "Platforms",
    icon: Globe,
    tools: ["WordPress", "WooCommerce", "GoHighLevel", "Webflow", "Headless CMS"],
  },
  {
    category: "Tools & Services",
    icon: Zap,
    tools: ["Git", "cPanel", "DNS Management", "Vercel", "GHL Automation"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                About Tahir
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                I'm a web developer and GoHighLevel specialist with 5+ years of
                professional experience building custom solutions for clients
                worldwide.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                My focus is on WordPress development, WooCommerce stores, GHL
                automation systems, and custom integrations that solve real
                business problems. No templates. No shortcuts. Just clean code
                and reliable results.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/work" size="lg" variant="primary">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button href="/contact-us" size="lg" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
                  <div className="h-full w-full rounded-full bg-primary"></div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-5xl font-bold text-foreground">5+</h3>
                      <p className="text-muted-foreground">Years Experience</p>
                    </div>
                    <div>
                      <h3 className="text-5xl font-bold text-foreground">80+</h3>
                      <p className="text-muted-foreground">Projects Delivered</p>
                    </div>
                    <div>
                      <h3 className="text-5xl font-bold text-foreground">26+</h3>
                      <p className="text-muted-foreground">Industries Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Skills & Tools */}
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
              Skills & Tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Technologies and platforms I work with daily.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-sm text-muted-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Process />

      {/* CTA */}
      <ClosingCTA />
    </>
  );
}
