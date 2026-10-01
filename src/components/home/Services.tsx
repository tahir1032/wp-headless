"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Code, Zap, Plug, Server } from "lucide-react";

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom frontend and backend solutions using React, Next.js, and modern web technologies.",
  },
  {
    icon: Zap,
    title: "GoHighLevel",
    description:
      "Complete GHL setup, funnel building, automation workflows, and CRM customization.",
  },
  {
    icon: Plug,
    title: "WordPress & Plugins",
    description:
      "Custom WordPress development, WooCommerce stores, plugin creation, and theme customization.",
  },
  {
    icon: Server,
    title: "Integrations & Hosting",
    description:
      "API integrations, headless CMS setup, cPanel management, and DNS configuration.",
  },
];

export default function Services() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Full-stack development expertise focused on WordPress, GoHighLevel,
            and custom integrations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
