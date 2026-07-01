export type Platform = "WordPress" | "GHL" | "Webflow" | "Wix" | string;

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  platform: Platform;
  clientType: string;
  problem: string;
  solution: string;
  metrics: CaseStudyMetric[];
  excerpt?: string;
  featuredImage?: string;
}

export interface SiteSettings {
  availableForProjects: boolean;
  yearsExperience: string;
  projectsDelivered: string;
  clientSatisfaction: string;
  platformsCount: string;
  bookingUrl: string;
  contactEmail: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "wordpress" | "ghl" | "api" | "hosting";
}
