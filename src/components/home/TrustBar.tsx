"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Award, Users, Globe } from "lucide-react";

const STATS = [
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "80+",
    label: "Projects Delivered",
  },
  {
    icon: Globe,
    value: "Global",
    label: "Client Base",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-muted py-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
