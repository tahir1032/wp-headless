import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getCaseStudySlugs } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getCaseStudySlugs();

  const staticRoutes: MetadataRoute.Sitemap = ["", "/work", "/studio", "/industries", "/contact-us"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
