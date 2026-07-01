import { fallbackCaseStudies } from "@/lib/data";
import type { CaseStudy, CaseStudyMetric } from "@/types";

const WP_API_URL = process.env.WORDPRESS_API_URL;
const REVALIDATE_SECONDS = Number(process.env.REVALIDATE_SECONDS ?? 3600);

interface WPCaseStudyMeta {
  platform?: string;
  client_type?: string;
  problem?: string;
  solution?: string;
  metrics?: CaseStudyMetric[];
}

interface WPCaseStudyItem {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  th_meta?: WPCaseStudyMeta;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function mapCaseStudy(item: WPCaseStudyItem): CaseStudy {
  const meta = item.th_meta ?? {};

  return {
    id: item.id,
    slug: item.slug,
    title: stripHtml(item.title.rendered),
    platform: meta.platform ?? "WordPress",
    clientType: meta.client_type ?? "",
    problem: meta.problem ?? "",
    solution: meta.solution ?? "",
    metrics: Array.isArray(meta.metrics) ? meta.metrics : [],
    excerpt: item.excerpt ? stripHtml(item.excerpt.rendered) : undefined,
    featuredImage: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  };
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!WP_API_URL) {
    return fallbackCaseStudies;
  }

  try {
    const url = new URL("/wp-json/wp/v2/case_study", WP_API_URL);
    url.searchParams.set("per_page", "20");
    url.searchParams.set("_embed", "1");

    const response = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = (await response.json()) as WPCaseStudyItem[];

    if (!Array.isArray(data) || data.length === 0) {
      return WP_API_URL ? [] : fallbackCaseStudies;
    }

    return data.map(mapCaseStudy);
  } catch (error) {
    console.error("Failed to fetch case studies from WordPress:", error);
    return WP_API_URL ? [] : fallbackCaseStudies;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  if (!WP_API_URL) {
    return fallbackCaseStudies.find((item) => item.slug === slug) ?? null;
  }

  try {
    const url = new URL("/wp-json/wp/v2/case_study", WP_API_URL);
    url.searchParams.set("slug", slug);
    url.searchParams.set("_embed", "1");

    const response = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = (await response.json()) as WPCaseStudyItem[];
    if (!data.length) return null;

    return mapCaseStudy(data[0]);
  } catch (error) {
    console.error(`Failed to fetch case study "${slug}":`, error);
    return fallbackCaseStudies.find((item) => item.slug === slug) ?? null;
  }
}
