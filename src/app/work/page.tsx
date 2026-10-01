import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import WorkCard from "@/components/work/WorkCard";
import ClosingCTA from "@/components/home/ClosingCTA";
import { getCaseStudies } from "@/lib/wordpress";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Work & Portfolio — Tahir Hafeez WordPress & GHL Projects",
  description:
    "Browse 80+ WordPress and GoHighLevel projects by Tahir Hafeez — including custom WordPress development, WooCommerce stores, GHL funnels, plugin development, and API integration work for clients worldwide.",
  keywords: [
    "WordPress development portfolio",
    "GoHighLevel projects",
    "WooCommerce store examples",
    "WordPress plugin development examples",
    "GHL funnel examples",
    "hire web developer",
    "WordPress freelancer portfolio",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Portfolio — Tahir Hafeez | WordPress & GHL Projects",
    description:
      "Custom WordPress sites, WooCommerce stores, GoHighLevel funnels, and automation systems. Real projects. Real clients. Real results across healthcare, e-commerce, real estate, and more.",
  },
  twitter: {
    title: "Portfolio — Tahir Hafeez | WordPress & GHL Projects",
    description:
      "Custom WordPress sites, WooCommerce stores, GoHighLevel funnels, and automation systems. Real projects. Real clients. Real results across healthcare, e-commerce, real estate, and more.",
  },
};

export default async function WorkPage() {
  const workItems = await getCaseStudies(100);

  return (
    <>
      <Section className="pt-24 pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Work & Portfolio
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              80+ projects delivered across WordPress, GoHighLevel, and custom
              web development — for clients worldwide.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-0 pb-16">
        <Container>
          {workItems.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {workItems.map((item) => (
                <WorkCard
                  key={item.slug}
                  title={item.title}
                  excerpt={item.excerpt}
                  slug={item.slug}
                  featuredImage={item.featuredImage}
                  categories={item.tags}
                  date={item.date}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted p-16 text-center">
              <p className="text-lg text-muted-foreground">
                Case studies are being prepared. Check back soon or{" "}
                <a
                  href="/contact-us"
                  className="font-medium text-primary hover:underline"
                >
                  contact me
                </a>{" "}
                to discuss your project.
              </p>
            </div>
          )}
        </Container>
      </Section>

      <ClosingCTA />
    </>
  );
}
