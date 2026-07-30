export type Platform = "WordPress" | "GHL" | "Webflow" | "Wix" | string;

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface GalleryImage {
  id: number;
  url: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  date: string;
  platform: Platform;
  clientType: string;
  clientName: string;
  problem: string;
  solution: string;
  metrics: CaseStudyMetric[];
  gallery: GalleryImage[];
  categorySlug: string;
  categoryLabel: string;
  tags: string[];
  excerpt?: string;
  featuredImage?: string;
}
