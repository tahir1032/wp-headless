import CaseCard from "@/components/work/CaseCard";
import { getCaseStudies } from "@/lib/wordpress";
import { fallbackWorkItems, fallbackFilters } from "@/lib/fallback-data";

export const revalidate = 3600;

export default async function WorkPage() {
  const fetched = await getCaseStudies(100);
  const workItems = fetched.length > 0 ? fetched : fallbackWorkItems;

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
          <div className="grid grid-cols-12">
            <div className="2xl:col-span-2 col-span-12">
              <div className="pt-10 px-5 site-filters">
                <span className="text-sm text-mediumgray font-medium block mb-5">Filter</span>
                <ul className="filters max-2xl:flex max-2xl:justify-center max-2xl:gap-1.25 max-2xl:flex-wrap">
                  {fallbackFilters.map((f) => (
                    <li
                      key={f.filter}
                      data-filter={f.filter}
                      className="filter-btn py-2.5 px-5 text-primary bg-cleangray text-sm hover:bg-primary hover:text-white duration-500 rounded-full table mb-1.25"
                    >
                      <button type="button">{f.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="2xl:col-span-10 col-span-12 border-l border-lightgray services" id="services">
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
      </div>
    </>
  );
}
