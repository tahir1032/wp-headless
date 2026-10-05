import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import WorkCard from "@/components/work/WorkCard";
import ClosingInvitation from "@/components/home/ClosingInvitation";
import { getCaseStudies } from "@/lib/wordpress";
import { CONTACT_PATH } from "@/lib/site-config";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Work — WordPress, WooCommerce & GHL Projects",
  description:
    "Selected WordPress, WooCommerce, and GoHighLevel projects by Tahir Hafeez — custom sites, online stores, funnels, plugins, and API integrations for clients worldwide.",
  keywords: [
    "WordPress development portfolio",
    "GoHighLevel projects",
    "WooCommerce store examples",
    "WordPress plugin development examples",
    "GHL funnel examples",
  ],
  alternates: { canonical: "/work" },
};

export default async function WorkPage() {
  const caseStudies = await getCaseStudies(100);

  return (
    <>
      <section className="pt-10 lg:pt-15">
        <Container className="flex flex-col gap-12 lg:gap-15">
          <SectionIntro
            as="h1"
            label="Selected work"
            heading="Real projects. Real clients. Real results."
            description="80+ projects delivered across WordPress, WooCommerce, and GoHighLevel — for teams in the US, UK, Australia, South Africa, and the UAE."
          />

          {caseStudies.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <li key={caseStudy.slug}>
                  <WorkCard caseStudy={caseStudy} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-section bg-line p-10 text-center lg:p-15">
              <p className="t-lead text-body">
                Case studies are being prepared. Check back soon or{" "}
                <Link href={CONTACT_PATH} className="text-brand underline underline-offset-4">
                  start a conversation
                </Link>{" "}
                about your project.
              </p>
            </div>
          )}
        </Container>
      </section>

      <ClosingInvitation />
    </>
  );
}
