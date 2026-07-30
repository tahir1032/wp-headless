import type { CaseStudy, CaseStudyMetric, GalleryImage } from "@/types";

const WP_API_URL = process.env.WORDPRESS_API_URL;
const REVALIDATE_SECONDS = Number(process.env.REVALIDATE_SECONDS ?? 3600);

interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

interface WPCaseStudyMeta {
  platform?: string;
  client_type?: string;
  client_name?: string;
  problem?: string;
  solution?: string;
  metrics?: CaseStudyMetric[];
  gallery?: GalleryImage[];
}

interface WPCaseStudyItem {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  th_meta?: WPCaseStudyMeta;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: WPTerm[][];
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function mapCaseStudy(item: WPCaseStudyItem): CaseStudy {
  const meta = item.th_meta ?? {};
  const terms = (item._embedded?.["wp:term"] ?? []).flat();
  const category = terms.find((t) => t.taxonomy === "case_study_category");
  const tags = terms.filter((t) => t.taxonomy === "case_study_tag").map((t) => t.name);

  return {
    id: item.id,
    slug: item.slug,
    title: stripHtml(item.title.rendered),
    date: formatDate(item.date),
    platform: meta.platform ?? "WordPress",
    clientType: meta.client_type ?? "",
    clientName: meta.client_name ?? "",
    problem: meta.problem ?? "",
    solution: meta.solution ?? "",
    metrics: Array.isArray(meta.metrics) ? meta.metrics : [],
    gallery: Array.isArray(meta.gallery) ? meta.gallery : [],
    categorySlug: category?.slug ?? "",
    categoryLabel: category?.name ?? "",
    tags,
    excerpt: item.excerpt ? stripHtml(item.excerpt.rendered) : undefined,
    featuredImage: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  };
}

async function fetchCaseStudies(searchParams: Record<string, string>): Promise<WPCaseStudyItem[]> {
  if (!WP_API_URL) {
    return [];
  }

  const url = new URL("/wp-json/wp/v2/case_study", WP_API_URL);
  url.searchParams.set("_embed", "1");
  for (const [key, value] of Object.entries(searchParams)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    if (response.status === 404) {
      // case_study post type not registered yet (plugin not active) - treat as empty.
      return [];
    }
    throw new Error(`WordPress API error: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

export async function getCaseStudies(perPage = 20): Promise<CaseStudy[]> {
  try {
    const data = await fetchCaseStudies({
      per_page: String(perPage),
      orderby: "date",
      order: "desc",
    });
    return data.map(mapCaseStudy);
  } catch (error) {
    console.error("Failed to fetch case studies from WordPress:", error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const data = await fetchCaseStudies({ slug });
    if (!data.length) {
      return null;
    }
    return mapCaseStudy(data[0]);
  } catch (error) {
    console.error(`Failed to fetch case study "${slug}":`, error);
    return null;
  }
}

export async function getCaseStudySlugs(): Promise<string[]> {
  if (!WP_API_URL) {
    return [];
  }

  try {
    const url = new URL("/wp-json/wp/v2/case_study", WP_API_URL);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("_fields", "slug");

    const response = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as Array<{ slug: string }>;
    return data.map((item) => item.slug);
  } catch (error) {
    console.error("Failed to fetch case study slugs:", error);
    return [];
  }
}

export async function getAdjacentCaseStudies(
  currentSlug: string,
): Promise<{ prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null }> {
  if (!WP_API_URL) {
    return { prev: null, next: null };
  }

  try {
    const url = new URL("/wp-json/wp/v2/case_study", WP_API_URL);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("orderby", "date");
    url.searchParams.set("order", "desc");
    url.searchParams.set("_fields", "slug,title");

    const response = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) {
      return { prev: null, next: null };
    }

    const data = (await response.json()) as Array<{ slug: string; title: { rendered: string } }>;
    const index = data.findIndex((item) => item.slug === currentSlug);
    if (index === -1) {
      return { prev: null, next: null };
    }

    const prevItem = data[index - 1];
    const nextItem = data[index + 1];

    return {
      prev: prevItem ? { slug: prevItem.slug, title: stripHtml(prevItem.title.rendered) } : null,
      next: nextItem ? { slug: nextItem.slug, title: stripHtml(nextItem.title.rendered) } : null,
    };
  } catch (error) {
    console.error("Failed to fetch adjacent case studies:", error);
    return { prev: null, next: null };
  }
}
