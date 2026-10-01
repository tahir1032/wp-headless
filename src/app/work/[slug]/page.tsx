import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudySlugs, getAdjacentCaseStudies } from "@/lib/wordpress";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { prev, next } = await getAdjacentCaseStudies(slug);
  const galleryImages =
    caseStudy.gallery.length > 0
      ? caseStudy.gallery.map((g) => g.url)
      : caseStudy.featuredImage
      ? [caseStudy.featuredImage]
      : [];

  return (
    <>
      <Section className="pt-24 pb-16">
        <Container size="narrow">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Button href="/work" variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {caseStudy.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {caseStudy.date}
                </div>
              )}
              {caseStudy.clientName && (
                <div className="flex items-center gap-2">
                  <span>Client:</span>
                  <span className="font-medium text-primary">
                    {caseStudy.clientName}
                  </span>
                </div>
              )}
            </div>

            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          {caseStudy.featuredImage && (
            <div className="mb-12 overflow-hidden rounded-2xl">
              <img
                src={caseStudy.featuredImage}
                alt={caseStudy.title}
                className="w-full"
              />
            </div>
          )}

          {/* Problem / Overview */}
          {caseStudy.problem && (
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Overview
              </h2>
              <div
                className="prose prose-lg max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: caseStudy.problem }}
              />
            </div>
          )}

          {/* Solution */}
          {caseStudy.solution && (
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Solution
              </h2>
              <div
                className="prose prose-lg max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
              />
            </div>
          )}

          {/* Gallery */}
          {galleryImages.length > 1 && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                Gallery
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {galleryImages.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl bg-muted"
                  >
                    <img
                      src={image}
                      alt={`${caseStudy.title} - Image ${index + 2}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
            {prev ? (
              <Button href={`/work/${prev.slug}`} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Button>
            ) : (
              <div />
            )}
            {next ? (
              <Button href={`/work/${next.slug}`} variant="outline">
                Next Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
