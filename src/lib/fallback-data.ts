import type { CaseStudy } from "@/types";

/**
 * Amara template demo content, shown when WordPress has no published case
 * studies yet (matches CONNECT.md's documented "shows sample case studies"
 * state) so the site never renders an empty grid.
 */

const TAGS = ["Meta Ads", "Google Ads", "CRO", "Analytics"];

function makeFallback(
  title: string,
  slug: string,
  categorySlug: string,
  categoryLabel: string,
  image: string,
): CaseStudy {
  return {
    id: 0,
    slug,
    title,
    date: "03 Jan 2026",
    platform: "WordPress",
    clientType: "",
    clientName: "NovaTech Solutions",
    problem:
      "A complete digital marketing overhaul designed to increase brand visibility, improve lead quality, and build a scalable online growth system.",
    solution:
      "We developed a full-funnel strategy—revamping their brand identity, optimizing their website for conversions, and launching a multi-channel marketing campaign across SEO, social media, and performance ads.",
    metrics: [],
    gallery: [1, 2, 3, 4, 5].map((n) => ({ id: n, url: `/images/work/${n}.webp` })),
    categorySlug,
    categoryLabel,
    tags: TAGS,
    featuredImage: image,
  };
}

export const fallbackRecentWork: CaseStudy[] = [
  makeFallback("Content Strategy Blueprint", "content-strategy-blueprint", "branding", "Branding", "/images/work/services/1.webp"),
  makeFallback("Ecommerce Conversion Boost", "ecommerce-conversion-boost", "design", "Web Design", "/images/work/services/2.webp"),
  makeFallback("SEO Visibility Enhancement", "seo-visibility-enhancement", "development", "Web Development", "/images/work/services/3.webp"),
  makeFallback("Creative Branding Refresh", "creative-branding-refresh", "mobile-apps", "Mobile Apps", "/images/work/services/4.webp"),
  makeFallback("Customer Engagement Program", "customer-engagement-program", "branding", "Branding", "/images/work/services/5.webp"),
];

export const fallbackWorkItems: CaseStudy[] = [
  makeFallback("Digital Growth Accelerator", "digital-growth-accelerator", "branding", "Branding", "/images/work/services/1.webp"),
  makeFallback("Ecommerce Conversion Boost", "ecommerce-conversion-boost", "design", "Web Design", "/images/work/services/2.webp"),
  makeFallback("Brand Identity Revamp", "brand-identity-revamp", "development", "Web Development", "/images/work/services/3.webp"),
  makeFallback("Social Media Expansion", "social-media-expansion", "mobile-apps", "Mobile Apps", "/images/work/services/4.webp"),
  makeFallback("Lead Generation Engine", "lead-generation-engine", "branding", "Branding", "/images/work/services/5.webp"),
  makeFallback("Performance Marketing Upgrade", "performance-marketing-upgrade", "ux-design", "UI/UX Design", "/images/work/services/6.webp"),
  makeFallback("Content Strategy Blueprint", "content-strategy-blueprint", "marketing", "Digital Marketing", "/images/work/services/7.webp"),
  makeFallback("SEO Visibility Enhancement", "seo-visibility-enhancement", "3d-design", "3D Design", "/images/work/services/8.webp"),
  makeFallback("Creative Branding Refresh", "creative-branding-refresh", "branding", "Branding", "/images/work/services/9.webp"),
  makeFallback("Customer Engagement Program", "customer-engagement-program", "development", "Web Development", "/images/work/services/10.webp"),
];

export const fallbackFilters = [
  { filter: "all", label: "All Work" },
  { filter: "design", label: "Web Design" },
  { filter: "development", label: "Web Development" },
  { filter: "mobile-apps", label: "Mobile Apps" },
  { filter: "branding", label: "Branding" },
  { filter: "ux-design", label: "UI/UX Design" },
  { filter: "marketing", label: "Digital Marketing" },
  { filter: "graphics", label: "Motion Graphics" },
  { filter: "3d-design", label: "3D Design" },
];
