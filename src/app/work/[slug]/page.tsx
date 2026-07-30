import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudySlugs, getAdjacentCaseStudies } from "@/lib/wordpress";
import { fallbackWorkItems, fallbackRecentWork } from "@/lib/fallback-data";
import type { CaseStudy } from "@/types";

export const revalidate = 3600;

const FALLBACK_ITEMS: CaseStudy[] = [...fallbackWorkItems, ...fallbackRecentWork];

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  if (slugs.length > 0) {
    return slugs.map((slug) => ({ slug }));
  }
  return FALLBACK_ITEMS.map((item) => ({ slug: item.slug }));
}

async function resolveCaseStudy(slug: string): Promise<CaseStudy | null> {
  const found = await getCaseStudyBySlug(slug);
  if (found) {
    return found;
  }
  return FALLBACK_ITEMS.find((item) => item.slug === slug) ?? null;
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await resolveCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const { prev, next } = await getAdjacentCaseStudies(slug);
  const galleryImages =
    caseStudy.gallery.length > 0
      ? caseStudy.gallery.map((g) => g.url)
      : [1, 2, 3, 4, 5].map((n) => `/images/work/${n}.webp`);

  const tags = caseStudy.tags.length > 0 ? caseStudy.tags : ["Meta Ads", "Google Ads", "CRO", "Analytics"];

  return (
    <section className="xl:pt-20 pt-30">
      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-5 pb-10">
          <div className="xl:col-span-4 col-span-12">
            <div className="my-sticky">
              <h2 className="4xl:text-5xl 2xl:text-4xxxl md:text-4xl text-3xl font-semibold">{caseStudy.title}</h2>
              <div className="flex items-center gap-2.5 max-xl:py-5">
                <span className="sm:text-base text-sm text-mediumgray">{caseStudy.date}</span>
                {caseStudy.clientName && (
                  <p className="sm:text-base text-sm text-primary">
                    <span className="text-base text-mediumgray">Client Name:</span> {caseStudy.clientName}
                  </p>
                )}
              </div>
              <div className="flex items-center sm:gap-2.5 gap-1.25 xl:mt-12.5 max-xl:pb-5">
                {tags.map((tag) => (
                  <span key={tag} className="p-2.5 rounded-full bg-cleangray text-black sm:text-base text-sm font-normal h-7.75 flex items-center justify-center">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="xl:col-span-8 col-span-12">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 dz-hover-item">
                <a className="dz-hover-img rounded-2lg relative size-full" data-displacement={galleryImages[0]} data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src={galleryImages[0]} className="w-full rounded-sm" alt="img" loading="lazy" />
                </a>
              </div>
              <div className="md:col-span-7 col-span-12 dz-hover-item">
                <a className="dz-hover-img rounded-2lg relative size-full" data-displacement={galleryImages[1] ?? galleryImages[0]} data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src={galleryImages[1] ?? galleryImages[0]} className="w-full rounded-sm" alt="img" loading="lazy" />
                </a>
              </div>
              <div className="md:col-span-5 col-span-12">
                <div className="rounded-sm bg-shadegray 2xl:py-12.5 2xl:px-10 p-5 h-full">
                  <h3 className="mb-3 4xl:text-4xl sm:text-2xxxl/10 text-2xxl">Overview</h3>
                  <p className="4xl:text-2xl text-xl font-light text-softgray">{caseStudy.problem}</p>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 dz-hover-item">
                <a className="dz-hover-img rounded-2lg relative size-full" data-displacement={galleryImages[2] ?? galleryImages[0]} data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src={galleryImages[2] ?? galleryImages[0]} className="w-full rounded-sm" alt="img" loading="lazy" />
                </a>
              </div>
              <div className="md:col-span-6 col-span-12 dz-hover-item">
                <a className="dz-hover-img rounded-2lg relative size-full" data-displacement={galleryImages[3] ?? galleryImages[0]} data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src={galleryImages[3] ?? galleryImages[0]} className="w-full rounded-sm" alt="img" loading="lazy" />
                </a>
              </div>
              <div className="lg:col-span-5 col-span-12">
                <div className="rounded-sm bg-shadegray 2xl:py-12.5 2xl:px-10 p-5 h-full">
                  <h3 className="mb-3 4xl:text-4xl sm:text-2xxxl/10 text-2xxl">Our Approach Solution</h3>
                  <p className="4xl:text-2xl text-xl font-light text-softgray">{caseStudy.solution}</p>
                </div>
              </div>
              <div className="lg:col-span-7 col-span-12 dz-hover-item">
                <a className="dz-hover-img rounded-2lg relative size-full" data-displacement={galleryImages[4] ?? galleryImages[0]} data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src={galleryImages[4] ?? galleryImages[0]} className="w-full rounded-sm" alt="img" loading="lazy" />
                </a>
              </div>
              <div className="md:col-span-7 col-span-12">
                <div className="flex items-center justify-center gap-5 2xl:py-47.5 py-20">
                  <div className="group relative">
                    <a href={prev ? `/work/${prev.slug}` : "/work"} className="xl:size-50 lg:size-40 size-30 bg-minimalgray/[0.96] rounded-full flex items-center justify-center duration-500 group-hover:bg-primary/[0.96] group/second overflow-hidden">
                      <svg viewBox="0 0 200 100" className="absolute -rotate-90 size-full lg:-left-5 md:-left-4 -left-3 top-0 text-black text-sm font-normal group-hover:fill-white duration-500 fill-primary">
                        <path id="curve-prev" d="M 20,80 A 80,80 0 0,1 180,80" fill="transparent"></path>
                        <text><textPath href="#curve-prev" startOffset="50%" textAnchor="middle">previous Project </textPath></text>
                      </svg>
                      <svg className="group-hover/second:animate-toRightFromLeft duration-500 max-sm:size-12.5" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover/second:stroke-white duration-500" d="M63.332 40H16.6654" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path className="group-hover/second:stroke-white duration-500" d="M40 16.6667L16.6667 40.0001L40 63.3334" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <img className="rounded-sm w-full opacity-0 invisible absolute -top-1/2 -left-1/2 -z-1 group-hover:opacity-100 group-hover:visible duration-500" src="/images/image-scroll/2.webp" alt="img" loading="lazy" />
                  </div>
                  <div className="group relative">
                    <a href={next ? `/work/${next.slug}` : "/work"} className="xl:size-50 lg:size-40 size-30 bg-minimalgray/[0.96] rounded-full flex items-center justify-center duration-500 group-hover:bg-primary/[0.96] group/second overflow-hidden">
                      <svg className="group-hover/second:animate-toLeftFromRight duration-500 max-sm:size-12.5" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover/second:stroke-white" d="M16.668 40H63.3346" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path className="group-hover/second:stroke-white" d="M40 16.6667L63.3333 40.0001L40 63.3334" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg viewBox="0 0 200 100" className="absolute rotate-90 size-full lg:-right-5 md:-right-4 -right-3 top-0 text-black text-sm font-normal group-hover:fill-white duration-500 fill-primary">
                        <path id="curve-next" d="M 20,80 A 80,80 0 0,1 180,80" fill="transparent"></path>
                        <text><textPath href="#curve-next" startOffset="50%" textAnchor="middle">Next Project </textPath></text>
                      </svg>
                    </a>
                    <img className="rounded-sm w-full opacity-0 invisible absolute -top-1/2 -right-1/2 -z-1 group-hover:opacity-100 group-hover:visible duration-500" src="/images/image-scroll/3.webp" alt="img" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
