import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import ClosingInvitation from "@/components/home/ClosingInvitation";
import { getAdjacentCaseStudies, getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/wordpress";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  if (!caseStudy) {
    return {};
  }

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    alternates: { canonical: `/work/${slug}` },
    openGraph: caseStudy.featuredImage ? { images: [caseStudy.featuredImage] } : undefined,
  };
}

/* eslint-disable @next/next/no-img-element -- WordPress media can come from any host. */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { prev, next } = await getAdjacentCaseStudies(slug);
  const gallery = caseStudy.gallery.map((image) => image.url).filter((url) => url !== caseStudy.featuredImage);

  const facts = [
    { label: "Platform", value: caseStudy.platform },
    { label: "Client", value: caseStudy.clientName },
    { label: "Client type", value: caseStudy.clientType },
    { label: "Published", value: caseStudy.date },
  ].filter((fact) => fact.value);

  return (
    <>
      <article className="pt-10 lg:pt-15">
        <Container className="flex flex-col gap-12 lg:gap-15">
          <div className="flex flex-col gap-8">
            <Link href="/work" className="inline-flex items-center gap-2 self-start text-sm font-medium text-body hover:text-brand">
              <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-4" />
              All work
            </Link>

            <div className="flex flex-col gap-5">
              {caseStudy.categoryLabel && <SectionLabel>{caseStudy.categoryLabel}</SectionLabel>}
              <h1 className="t-display max-w-[1000px] text-balance text-ink">{caseStudy.title}</h1>
            </div>

            <dl className="grid grid-cols-2 gap-6 border-y border-line py-6 md:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-2">
                  <dt className="text-xs text-muted">{fact.label}</dt>
                  <dd className="text-base font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {caseStudy.featuredImage && (
            <div className="overflow-hidden rounded-section bg-line">
              <img src={caseStudy.featuredImage} alt={caseStudy.title} className="w-full" />
            </div>
          )}

          <div className="grid gap-12 lg:grid-cols-[420fr_800fr] lg:gap-25">
            <aside className="flex flex-col gap-5">
              {caseStudy.excerpt && <p className="t-lead text-body">{caseStudy.excerpt}</p>}
              {caseStudy.tags.length > 0 && (
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-muted">Techniques &amp; tools</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            <div className="flex flex-col gap-12">
              {caseStudy.problem && (
                <section className="flex flex-col gap-4">
                  <h2 className="t-title text-ink">The challenge</h2>
                  <div className="richtext" dangerouslySetInnerHTML={{ __html: caseStudy.problem }} />
                </section>
              )}
              {caseStudy.solution && (
                <section className="flex flex-col gap-4">
                  <h2 className="t-title text-ink">The solution</h2>
                  <div className="richtext" dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
                </section>
              )}
            </div>
          </div>

          {gallery.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              {gallery.map((url, index) => (
                <div key={url} className="overflow-hidden rounded-section bg-line">
                  <img src={url} alt={`${caseStudy.title} — image ${index + 1}`} loading="lazy" className="w-full" />
                </div>
              ))}
            </div>
          )}

          <nav aria-label="More case studies" className="flex items-center justify-between gap-6 border-t border-line pt-8">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="group flex max-w-[45%] flex-col gap-1">
                <span className="inline-flex items-center gap-2 text-xs text-muted">
                  <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-4" />
                  Previous
                </span>
                <span className="text-base font-medium text-ink group-hover:text-brand">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/work/${next.slug}`} className="group flex max-w-[45%] flex-col items-end gap-1 text-right">
                <span className="inline-flex items-center gap-2 text-xs text-muted">
                  Next
                  <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
                </span>
                <span className="text-base font-medium text-ink group-hover:text-brand">{next.title}</span>
              </Link>
            )}
          </nav>
        </Container>
      </article>

      <ClosingInvitation />
    </>
  );
}
