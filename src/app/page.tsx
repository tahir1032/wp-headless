import { About, ContactCTA } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { getCaseStudies } from "@/lib/wordpress";

export const revalidate = 3600;

export default async function Home() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <Hero />
      <Services />
      <CaseStudies caseStudies={caseStudies} />
      <TechStack />
      <About />
      <ContactCTA />
    </>
  );
}
