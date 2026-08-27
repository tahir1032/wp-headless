import type { Metadata } from "next";
import CaseCard from "@/components/work/CaseCard";
import BannerCTAButton from "@/components/shell/BannerCTAButton";
import ClosingCTA from "@/components/shell/ClosingCTA";
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
    "hire WordPress developer",
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
      <section className="pt-25.5 z-1 overflow-hidden relative">
        <div
          aria-hidden="true"
          className="absolute -z-1 pointer-events-none xl:size-111.75 sm:size-100 size-80 bg-contain bg-no-repeat right-[-300px] xl:top-40 top-25 animate-moveRotate"
          style={{ backgroundImage: "url(/images/Group.webp)" }}
        />
        <div className="container-fluid">
          <h1 className="font-bold 4xl:text-[160px] 2xl:text-[120px] xl:text-8xl lg:text-7xxxl md:text-5xl sm:text-4xxxl text-3xl leading-none mb-5 2xl:max-w-293.75 xl:max-w-250 lg:max-w-200 max-w-160 max-sm:text-center">
            Work That Speaks for Itself
          </h1>
          <p className="text-lg sm:text-xl font-normal text-mediumgray mb-8 max-sm:text-center">
            80+ projects. Multiple industries. Measurable outcomes.
          </p>
          <div className="mb-12.5 max-sm:text-center">
            <BannerCTAButton />
          </div>
        </div>
      </section>

      <div className="border-t border-lightgray">
        <div className="container-full">
          <div className="services" id="services">
            {workItems.map((item, i) => (
              <CaseCard
                key={item.slug}
                title={item.title}
                date={item.date}
                category={item.categorySlug || "branding"}
                tags={item.tags.length > 0 ? item.tags : ["Meta Ads", "Google Ads", "CRO", "Analytics"]}
                image={item.featuredImage || item.gallery[0]?.url || "/images/work/services/1.webp"}
                href={`/work/${item.slug}`}
                last={i === workItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      <ClosingCTA
        heading="Ready to see your project here next?"
        subtext="Every case study above started with a single conversation. Tell me what you're building and let's talk timeline, scope, and budget."
      />
    </>
  );
}
