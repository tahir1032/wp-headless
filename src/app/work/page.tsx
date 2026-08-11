import CaseCard from "@/components/work/CaseCard";
import { getCaseStudies } from "@/lib/wordpress";

export const revalidate = 3600;

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
          <h1 className="font-bold 4xl:text-[160px] 2xl:text-[120px] xl:text-8xl lg:text-7xxxl md:text-5xl sm:text-4xxxl text-3xl leading-none mb-20 2xl:max-w-293.75 xl:max-w-250 lg:max-w-200 max-w-160 max-sm:text-center">
            Building Brands Through Design
          </h1>
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
    </>
  );
}
