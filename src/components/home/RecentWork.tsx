"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { getCaseStudies } from "@/lib/wordpress";
import type { CaseStudy } from "@/types";

export default function RecentWork() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCaseStudies() {
      try {
        const studies = await getCaseStudies(3);
        setCaseStudies(studies);
      } catch (error) {
        console.error("Failed to load case studies:", error);
      } finally {
        setLoading(false);
      }
    }
    loadCaseStudies();
  }, []);

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Recent Work
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Selected projects showcasing custom development solutions.
            </p>
          </div>
          <Button href="/work" variant="ghost" className="hidden sm:flex">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {loading ? (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-80 animate-pulse rounded-2xl bg-muted"
              />
            ))}
          </div>
        ) : caseStudies.length > 0 ? (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  {study.featuredImage && (
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={study.featuredImage}
                        alt={study.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {study.tags.length > 0 && (
                      <div className="mb-2 flex flex-wrap gap-2">
                        {study.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
                      {study.title}
                    </h3>
                    {study.excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {study.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      View Case Study
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-2xl border border-dashed border-border bg-muted p-12 text-center"
          >
            <p className="text-lg text-muted-foreground">
              Case studies are being prepared. Check back soon or{" "}
              <Link href="/contact-us" className="font-medium text-primary hover:underline">
                contact me
              </Link>{" "}
              to discuss your project.
            </p>
          </motion.div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Button href="/work" variant="outline" className="w-full">
            View All Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
