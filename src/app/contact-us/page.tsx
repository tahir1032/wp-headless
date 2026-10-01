import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_LINK_PREFILLED, WHATSAPP_DISPLAY, LINKEDIN_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Tahir Hafeez — Hire a Web & GHL Developer",
  description:
    "Get in touch with Tahir Hafeez — Web developer and GoHighLevel specialist. Discuss your project, get a fixed-price quote, and receive a response within 24 hours.",
  keywords: [
    "hire web developer",
    "contact WordPress freelancer",
    "GoHighLevel developer for hire",
    "web developer quote",
    "WooCommerce developer contact",
    "hire GHL specialist",
    "freelance web developer contact",
  ],
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Hire Tahir Hafeez | Web & GHL Developer",
    description:
      "Ready to build? Contact Tahir Hafeez for custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems. Fixed-price quotes. Response within 24 hours.",
  },
  twitter: {
    title: "Hire Tahir Hafeez | Web & GHL Developer",
    description:
      "Ready to build? Contact Tahir Hafeez for custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems. Fixed-price quotes. Response within 24 hours.",
  },
};

const TRUST_SIGNALS = [
  "80+ projects delivered worldwide",
  "Clients in the US, UK, Australia, South Africa & UAE",
  "5+ years of WordPress, 3+ years of GoHighLevel",
  "Available worldwide — Remote",
];

export default function ContactUsPage() {
  return (
    <>
      <Section className="pt-24 pb-16">
        <Container size="narrow">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let's Discuss Your Project
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you need a WordPress site, a WooCommerce store, a GHL automation system, or just an honest second opinion — reach out. I respond to every message personally within 24 hours.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-0 pb-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <h2 className="mb-2 text-2xl font-semibold text-foreground">
                  Tell me about your project
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Fill in the details below and I'll come back to you within 24 hours with a clear plan and an honest quote.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <a
                href={WHATSAPP_LINK_PREFILLED}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366]/10">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  WhatsApp
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fastest way to reach me. I'm typically online during business hours.
                </p>
                <p className="mt-3 font-medium text-primary group-hover:underline">
                  {WHATSAPP_DISPLAY}
                </p>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer email? Send me a message and I'll respond within 24 hours.
                </p>
                <p className="mt-3 font-medium text-primary group-hover:underline">
                  {CONTACT_EMAIL}
                </p>
              </a>

              {/* Location Card */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Location
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Remote — Worldwide
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Working with clients across the US, UK, Australia, South Africa, UAE, and beyond.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Signals */}
      <Section className="border-t border-border bg-muted py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{signal}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
