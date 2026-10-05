import type { Metadata } from "next";
import { Check, Code, Plug, Server, Workflow } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import ButtonLink from "@/components/ui/ButtonLink";
import Tag from "@/components/ui/Tag";
import ClosingInvitation from "@/components/home/ClosingInvitation";
import { CONTACT_PATH } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Studio — Meet Tahir Hafeez",
  description:
    "Meet Tahir Hafeez — a web developer and GoHighLevel specialist with 5 years of experience delivering custom WordPress sites, WooCommerce stores, plugin development, and GHL automation systems for clients worldwide.",
  keywords: [
    "experienced web developer",
    "GoHighLevel expert",
    "WordPress plugin developer for hire",
    "WooCommerce specialist",
    "freelance WordPress consultant",
  ],
  alternates: { canonical: "/studio" },
};

const STATS = [
  { value: "5+", label: "Years building for the web" },
  { value: "80+", label: "Projects delivered" },
  { value: "5", label: "Countries served — US, UK, AU, ZA, UAE" },
];

const BIO = [
  "I’m Muhammad Tahir Hafeez — a web developer and GoHighLevel specialist with 5 years of professional experience building websites and digital systems for businesses that take growth seriously.",
  "My work spans the full stack: React and Next.js frontends, PHP and Node.js backends, WordPress themes and plugins built from scratch, WooCommerce stores with complex payment and shipping setups, ACF data structures, Gutenberg blocks, REST API integrations, headless WordPress, and performance and security work. On the GoHighLevel side, I build complete automation systems — funnels, email and SMS campaigns, payments, course platforms, and CRM pipelines that take manual work off your plate.",
  "My clients range from healthcare providers and e-commerce brands to digital agencies, real estate platforms, educational institutions, and AI consulting firms. What they share is a need for technical work delivered with precision, transparency, and accountability.",
  "Every engagement begins with your business goal — not a template. Clean code, honest timelines, fixed-price proposals, and post-launch support aren’t extras; they’re the baseline.",
];

const SERVICES = [
  {
    icon: Code,
    title: "Web development",
    description:
      "End-to-end development tailored to your business — custom frontends, backend systems, WordPress themes and plugins, WooCommerce stores, and headless builds. Built for speed, security, and long-term maintainability.",
    items: ["Frontend & backend development", "WordPress theme & plugin development", "WooCommerce stores, payments & add-ons"],
  },
  {
    icon: Workflow,
    title: "GoHighLevel systems",
    description:
      "GoHighLevel set up around your sales process — funnels, automated email and SMS, payment collection, course delivery, landing pages, and CRM pipelines that work around the clock.",
    items: ["Funnels & high-converting landing pages", "Email / SMS automation & campaigns", "GHL payments, courses & CRM pipelines"],
  },
  {
    icon: Plug,
    title: "API & plugin integration",
    description:
      "Connect your site to the platforms you already use — custom REST APIs, CRM connections, Zapier and webhook workflows, payment gateways, and headless WordPress for modern frontends.",
    items: ["REST API & webhook development", "HubSpot, Mailchimp & ActiveCampaign", "Headless WordPress with React / Next.js"],
  },
  {
    icon: Server,
    title: "Hosting & tech management",
    description:
      "Server and hosting management from setup to ongoing care — cPanel, DNS, SSL, Core Web Vitals, security hardening, database tuning, and migrations.",
    items: ["cPanel, DNS & SSL", "Speed, caching & Core Web Vitals", "Migrations, backups & security hardening"],
  },
];

const PRINCIPLES = [
  {
    title: "Mission",
    description:
      "Engineer web solutions that move businesses forward — not just satisfy a brief. Every system and integration serves one objective: measurable results for the client.",
  },
  {
    title: "Promise",
    description:
      "Clarity from day one. Fixed scope, fixed price, no hidden costs. Regular progress updates and post-launch support as standard. You’ll always know where your project stands.",
  },
  {
    title: "Approach",
    description:
      "Discovery before development. I learn your business, users, and goals first — then build to last. Every site is tested for speed, security, and Core Web Vitals before it goes live.",
  },
];

const TECH_STACK = [
  "WordPress",
  "WooCommerce",
  "GoHighLevel",
  "ACF",
  "Elementor Pro",
  "Divi",
  "Avada",
  "MemberPress",
  "LearnDash",
  "LearnPress",
  "WP Rocket",
  "Yoast SEO",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "PHP",
  "Node.js",
  "MySQL",
  "cPanel",
  "Cloudflare",
  "Git",
  "GitHub",
  "Figma",
];

export default function StudioPage() {
  return (
    <>
      <section className="pt-10 pb-20 lg:pt-15 lg:pb-25">
        <Container className="flex flex-col gap-12 lg:gap-15">
          <SectionIntro
            as="h1"
            label="Studio"
            heading="Meet the developer."
            description="WordPress expertise. GoHighLevel depth. One person accountable for your project from first brief to launch."
          />

          <div className="grid gap-12 lg:grid-cols-[420fr_800fr] lg:gap-25">
            <dl className="flex flex-col gap-5">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2 rounded-section bg-line p-6">
                  <dt className="order-2 text-sm text-body">{stat.label}</dt>
                  <dd className="t-display order-1 text-brand">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-5 border-l border-brand pl-5 sm:pl-7.5">
              {BIO.map((paragraph) => (
                <p key={paragraph} className="t-lead text-body first:text-ink">
                  {paragraph}
                </p>
              ))}
              <ButtonLink href={CONTACT_PATH} className="mt-3 self-start">
                Start a Conversation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="bg-line py-20 lg:py-25">
        <Container className="flex flex-col gap-10">
          <SectionIntro
            label="Services"
            heading="What I can build for you."
            description="Four disciplines, one point of contact. Pick one, or combine them into a single connected system."
          />
          <ul className="grid gap-5 md:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, description, items }) => (
              <li key={title} className="flex flex-col gap-5 rounded-section bg-white p-5 sm:p-7.5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="t-title text-ink">{title}</h3>
                  <Icon aria-hidden="true" strokeWidth={1.5} className="size-6 shrink-0 text-brand" />
                </div>
                <p className="text-base leading-[26px] text-body">{description}</p>
                <hr className="mt-auto border-line" />
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-body">
                      <Check aria-hidden="true" strokeWidth={1.5} className="size-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink py-20 lg:py-25">
        <Container className="flex flex-col gap-12 lg:gap-15">
          <SectionIntro inverse label="How I work" heading="Clear scope. Honest timelines. Work that holds up." />
          <ol className="grid gap-10 md:grid-cols-3 lg:gap-7.5">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className="flex flex-col gap-5 border-t border-body pt-5">
                <span className="text-sm text-line">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="t-title text-white">{principle.title}</h3>
                <p className="text-base leading-[26px] text-line">{principle.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pt-20 lg:pt-25">
        <Container className="flex flex-col gap-10">
          <SectionIntro
            label="Tech stack"
            heading="Tools I use every day."
            description="Chosen for reliability and long-term maintenance — not trends."
          />
          <ul className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <li key={tech}>
                <Tag className="px-4 py-2.5 text-sm">{tech}</Tag>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingInvitation />
    </>
  );
}
