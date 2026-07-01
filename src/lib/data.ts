import type { CaseStudy, Service, SiteSettings } from "@/types";

export const siteSettings: SiteSettings = {
  availableForProjects: true,
  yearsExperience: "5+",
  projectsDelivered: "80+",
  clientSatisfaction: "100%",
  platformsCount: "3",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "#contact",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@tahirhafeez.com",
};

export const services: Service[] = [
  {
    id: "wordpress",
    title: "WordPress Development",
    description:
      "Custom themes, plugins, and high-performance sites using Elementor, WPBakery, Avada, Zion, and more.",
    icon: "wordpress",
  },
  {
    id: "ghl",
    title: "GHL Funnels & Automation",
    description:
      "Sales funnels, email campaigns, payment flows, courses, and full GoHighLevel setup that converts.",
    icon: "ghl",
  },
  {
    id: "api",
    title: "API & Plugin Integration",
    description:
      "3rd party APIs, custom plugin development, CRM connections, and seamless data sync between platforms.",
    icon: "api",
  },
  {
    id: "hosting",
    title: "Hosting & DevOps",
    description:
      "cPanel management, DNS configuration, SSL setup, migrations, and speed optimization.",
    icon: "hosting",
  },
];

export const techStack: string[] = [
  "WordPress",
  "GoHighLevel",
  "Elementor Pro",
  "WPBakery",
  "Avada",
  "Zion Builder",
  "Webflow",
  "Wix",
  "WooCommerce",
  "PHP",
  "JavaScript",
  "REST APIs",
  "cPanel",
  "DNS / SSL",
  "GHL Automations",
  "Zapier",
];

export const fallbackCaseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "coaching-business-ghl-funnel",
    title: "Coaching Business — Full Funnel Automation",
    platform: "GHL",
    clientType: "Coaching Business",
    problem:
      "Manual lead follow-ups were slow — prospects waited up to 2 days for a response, killing conversions.",
    solution:
      "Built a complete GHL funnel with automated email sequences, SMS follow-ups, and payment integration.",
    metrics: [
      { label: "Lead response", value: "2 days → Instant" },
      { label: "Conversion", value: "+40%" },
    ],
  },
  {
    id: 2,
    slug: "ecommerce-wordpress-rebuild",
    title: "E-commerce Brand — Site Rebuild",
    platform: "WordPress",
    clientType: "E-commerce Brand",
    problem:
      "Slow, outdated WordPress site with poor mobile experience and high bounce rate.",
    solution:
      "Full rebuild with Elementor Pro, custom WooCommerce tweaks, and performance optimization.",
    metrics: [
      { label: "Load time", value: "-65%" },
      { label: "Bounce rate", value: "-28%" },
    ],
  },
  {
    id: 3,
    slug: "saas-webflow-landing",
    title: "SaaS Startup — Landing Page + Integrations",
    platform: "Webflow",
    clientType: "SaaS Startup",
    problem:
      "Needed a high-converting landing page with live API integrations to their CRM.",
    solution:
      "Designed and built in Webflow with Zapier + custom API hooks for real-time lead sync.",
    metrics: [
      { label: "Manual data entry", value: "0" },
      { label: "CTA clicks", value: "+55%" },
    ],
  },
];

export const socialLinks = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com",
  upwork: process.env.NEXT_PUBLIC_UPWORK_URL ?? "https://upwork.com",
  fiverr: process.env.NEXT_PUBLIC_FIVERR_URL ?? "https://fiverr.com",
  clutch: process.env.NEXT_PUBLIC_CLUTCH_URL ?? "https://clutch.co",
};
