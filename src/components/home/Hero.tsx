import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionLabel from "@/components/ui/SectionLabel";
import ServicesWorkspace from "@/components/home/ServicesWorkspace";
import { CONTACT_PATH } from "@/lib/site-config";

const DISCIPLINES = ["WordPress sites", "WooCommerce stores", "GHL automation", "API & Hosting"];

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-end lg:justify-between lg:py-15">
          <div className="flex max-w-[800px] flex-col gap-5">
            <SectionLabel>Web development for ambitious teams</SectionLabel>
            <h1 className="t-display text-ink">One conversation can change everything.</h1>
          </div>

          <div className="flex flex-col gap-6.25 pb-2.5 lg:w-[385px] lg:shrink-0">
            <p className="t-lead text-body">
              Whether you need a WordPress site, a WooCommerce store, a GHL automation system, or just an honest
              second opinion on your current setup — reach out. I respond to every message personally, within 24
              hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={CONTACT_PATH}>Start a Conversation</ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
            <p className="text-xs leading-normal text-muted">
              No sales pitch. No automated replies. Just a real conversation with someone who knows their stuff.
            </p>
          </div>
        </div>

        <ServicesWorkspace />

        <div className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-muted">Built around your web development workflow</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-12 lg:gap-x-25">
            {DISCIPLINES.map((discipline) => (
              <li key={discipline} className="flex items-center gap-2.5 text-base leading-none font-medium text-ink">
                <Plus aria-hidden="true" strokeWidth={1.5} className="size-3.5 text-brand" />
                {discipline}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
