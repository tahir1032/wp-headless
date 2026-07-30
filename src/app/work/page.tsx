import CaseCard from "@/components/work/CaseCard";

const TAGS = ["Meta Ads", "Google Ads", "CRO", "Analytics"];

const FILTERS = [
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

const WORK_ITEMS = [
  { title: "Digital Growth Accelerator", category: "branding", image: "/images/work/services/1.webp" },
  { title: "Ecommerce Conversion Boost", category: "design", image: "/images/work/services/2.webp" },
  { title: "Brand Identity Revamp", category: "development", image: "/images/work/services/3.webp" },
  { title: "Social Media Expansion", category: "mobile-apps", image: "/images/work/services/4.webp" },
  { title: "Lead Generation Engine", category: "branding", image: "/images/work/services/5.webp" },
  { title: "Performance Marketing Upgrade", category: "ux-design", image: "/images/work/services/6.webp" },
  { title: "Content Strategy Blueprint", category: "marketing", image: "/images/work/services/7.webp" },
  { title: "SEO Visibility Enhancement", category: "3d-design", image: "/images/work/services/8.webp" },
  { title: "Creative Branding Refresh", category: "branding", image: "/images/work/services/9.webp" },
  { title: "Customer Engagement Program", category: "development", image: "/images/work/services/10.webp" },
  { title: "Content Strategy Blueprint", category: "branding", image: "/images/work/services/11.webp" },
  { title: "SEO Visibility Enhancement", category: "ux-design", image: "/images/work/services/12.webp" },
  { title: "Creative Branding Refresh", category: "graphics", image: "/images/work/services/13.webp" },
  { title: "Customer Engagement Program", category: "mobile-apps", image: "/images/work/services/14.webp" },
];

export default function WorkPage() {
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
                  {FILTERS.map((f) => (
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
              {WORK_ITEMS.map((item, i) => (
                <CaseCard
                  key={`${item.title}-${i}`}
                  title={item.title}
                  date="03 Jan 2026"
                  category={item.category}
                  tags={TAGS}
                  image={item.image}
                  href="/work"
                  last={i === WORK_ITEMS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
