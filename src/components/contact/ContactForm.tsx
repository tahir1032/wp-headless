"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ButtonArrow, buttonClasses } from "@/components/ui/ButtonLink";
import { LINKEDIN_URL } from "@/lib/site-config";

// Option values must match ALLOWED_SERVICES / ALLOWED_BUDGETS in the WordPress plugin (class-contact.php).
const SERVICE_GROUPS = [
  {
    label: "Web Development",
    options: [
      "Custom Website Development (Frontend & Backend)",
      "Frontend Development (React / Next.js / HTML / CSS)",
      "Backend Development (PHP / Node.js / APIs)",
      "Full-Stack Web Development",
      "Figma to Website / HTML / WordPress",
    ],
  },
  {
    label: "WordPress",
    options: [
      "WordPress Theme Development & Customization",
      "WordPress Plugin Development",
      "WordPress Plugin Customization",
      "Gutenberg Block Development",
      "Advanced Custom Fields (ACF) Implementation",
      "WordPress REST API Development",
      "Headless WordPress (Next.js / React)",
    ],
  },
  {
    label: "WooCommerce & E-commerce",
    options: [
      "WooCommerce Store Setup & Configuration",
      "WooCommerce Payment Gateway Integration",
      "WooCommerce Custom Add-ons & Extensions",
      "WooCommerce Performance Optimization",
    ],
  },
  {
    label: "GoHighLevel (GHL)",
    options: [
      "GoHighLevel Funnel Setup & Optimization",
      "GHL Email & SMS Automation Campaigns",
      "GHL Landing Pages & Website Builder",
      "GHL Payment Integration & Course Setup",
      "GHL CRM Pipeline & Workflow Automation",
    ],
  },
  {
    label: "API & Integrations",
    options: [
      "Third-Party API Integration",
      "CRM Integration (HubSpot / Mailchimp / ActiveCampaign)",
      "Zapier / Webhook Automation",
      "Payment Gateway Integration",
    ],
  },
  {
    label: "Other Platforms",
    options: ["Webflow Development", "Wix Development"],
  },
  {
    label: "Hosting & Tech",
    options: [
      "Website Speed & Core Web Vitals Optimization",
      "Hosting Setup, cPanel & DNS Management",
      "SSL, Security Hardening & Backups",
      "Website Migration",
      "WordPress Maintenance & Support",
    ],
  },
];

const OTHER_SERVICE_OPTION = "Other / Not Sure Yet — Let's Talk";

const BUDGET_OPTIONS = ["Under $500", "$500–$1,000", "$1,000–$3,000", "$3,000–$5,000", "$5,000+", "Not sure yet"];

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

const LABEL = "text-sm leading-none font-medium text-body";
const FIELD =
  "w-full rounded-card border border-line bg-white p-4 text-base leading-snug text-ink placeholder:text-muted transition-colors focus:border-brand focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this (visually hidden field below).
    if (data.get("website")) {
      setStatus({ state: "success" });
      form.reset();
      return;
    }

    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          budget: data.get("budget"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus({ state: "success" });
        form.reset();
      } else {
        setStatus({ state: "error", message: json.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  }

  if (status.state === "success") {
    return (
      <div role="status" className="flex flex-col gap-4 rounded-section bg-white p-6 sm:p-10">
        <SectionLabel>Message received</SectionLabel>
        <h3 className="t-title text-ink">Thank you — I’ll be in touch within 24 hours.</h3>
        <p className="text-base leading-[26px] text-body">
          While you wait, browse my{" "}
          <Link href="/work" className="text-brand underline underline-offset-4">
            recent work
          </Link>{" "}
          or connect with me on{" "}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4">
            LinkedIn
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6.25 rounded-section bg-white p-5 sm:p-10">
      <SectionLabel>Tell me about your project</SectionLabel>
      <p className="text-base leading-[26px] text-body">
        Fill in the details below and I’ll come back to you within 24 hours with a clear plan and an honest quote.
      </p>

      {/* Honeypot field: hidden from real users, left blank by them */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-name" className={LABEL}>
            Your name
          </label>
          <input required id="contact-name" name="name" type="text" autoComplete="name" placeholder="John Smith" className={FIELD} />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-email" className={LABEL}>
            Email address
          </label>
          <input
            required
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@yourbusiness.com"
            className={FIELD}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-phone" className={LABEL}>
            WhatsApp or phone (optional)
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            pattern="[0-9+()\- ]*"
            placeholder="+1 234 567 8900"
            className={FIELD}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-service" className={LABEL}>
            What do you need?
          </label>
          <div className="relative">
            <select required id="contact-service" name="service" defaultValue="" className={`${FIELD} appearance-none pr-11 invalid:text-muted`}>
              <option value="" disabled>
                Select a service...
              </option>
              {SERVICE_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
              <option value={OTHER_SERVICE_OPTION}>{OTHER_SERVICE_OPTION}</option>
            </select>
            <ChevronDown aria-hidden="true" strokeWidth={1.5} className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted" />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-message" className={LABEL}>
            Tell me about your project
          </label>
          <textarea
            required
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Describe what you’re building, what problem you’re trying to solve, and any details that will help me understand what you need. The more detail, the better my response."
            className={`${FIELD} min-h-40 resize-y leading-[26px]`}
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-budget" className={LABEL}>
            Rough budget range (optional)
          </label>
          <div className="relative">
            <select id="contact-budget" name="budget" defaultValue="" className={`${FIELD} appearance-none pr-11`}>
              <option value="">Select a range...</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" strokeWidth={1.5} className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted" />
          </div>
        </div>
      </div>

      {status.state === "error" && (
        <p role="alert" className="rounded-card border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {status.message}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6.25">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className={`${buttonClasses("primary")} cursor-pointer self-start disabled:cursor-wait disabled:opacity-60`}
        >
          {status.state === "sending" ? "Sending..." : "Send Message"}
          <ButtonArrow />
        </button>
        <p className="text-sm text-muted">I’ll reply within 24 hours. Your information is never shared.</p>
      </div>
    </form>
  );
}
