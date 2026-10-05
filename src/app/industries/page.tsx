import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import ButtonLink from "@/components/ui/ButtonLink";
import { GHL_INDUSTRIES, WORDPRESS_INDUSTRIES, type Industry } from "@/lib/industries-data";
import { CONTACT_PATH } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industries — WordPress & GoHighLevel for Every Niche",
  description:
    "WordPress websites and GoHighLevel systems built across 26+ industries — e-commerce, healthcare, real estate, education, coaching, agencies, and more.",
  keywords: [
    "web developer by industry",
    "GoHighLevel by industry",
    "industry-specific WordPress development",
    "GHL for coaches",
    "WordPress for real estate",
    "WordPress for healthcare",
  ],
  alternates: { canonical: "/industries" },
};

function IndustryGroup({ label, heading, industries }: { label: string; heading: string; industries: Industry[] }) {
  return (
    <div className="flex flex-col gap-10">
      <SectionIntro label={label} heading={heading} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex flex-col gap-4 rounded-section border border-line bg-white p-5 sm:p-6.25">
            <Icon aria-hidden="true" strokeWidth={1.5} className="size-6 text-brand" />
            <h3 className="text-xl leading-tight font-medium text-ink">{title}</h3>
            <p className="text-sm leading-[21px] text-body">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-10 pb-20 lg:pt-15 lg:pb-25">
        <Container className="flex flex-col gap-10">
          <SectionIntro
            as="h1"
            label="Industries"
            heading="Whatever your industry — I’ve built it."
            description="5 years. 80+ projects. From solo coaches and e-commerce brands to healthcare providers and real estate platforms — websites and systems that perform, convert, and grow your business."
          />
          <ButtonLink href={CONTACT_PATH} className="self-start">
            Start a Conversation
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-line py-20 lg:py-25">
        <Container>
          <IndustryGroup label="WordPress & WooCommerce" heading="Every kind of WordPress build" industries={WORDPRESS_INDUSTRIES} />
        </Container>
      </section>

      <section className="py-20 lg:py-25">
        <Container>
          <IndustryGroup label="GoHighLevel CRM & automation" heading="Every kind of GoHighLevel system" industries={GHL_INDUSTRIES} />
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-col gap-6 rounded-section bg-line p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-15">
            <div className="flex max-w-[700px] flex-col gap-3">
              <h2 className="t-title text-ink">Don’t see your industry? It doesn’t matter.</h2>
              <p className="text-base leading-[26px] text-body">
                Every project starts the same way — a conversation about what you’re building.
              </p>
            </div>
            <ButtonLink href={CONTACT_PATH} variant="secondary">
              Tell me about it
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
