import { Check, CircleCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonLink from "@/components/ui/ButtonLink";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_EMAIL, WHATSAPP_LINK_PREFILLED } from "@/lib/site-config";

const REASSURANCES = [
  "No sales pitch. Just an honest conversation.",
  "No commitment required. First conversation is always free.",
  "I respond to every message within 24 hours — personally.",
  "Not sure about budget? That’s fine — let’s talk scope first.",
  "If I’m not the right fit, I’ll tell you straight — and point you in the right direction.",
];

function ContactCard({
  label,
  heading,
  description,
  status,
  children,
}: {
  label: string;
  heading: string;
  description: string;
  status: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-section border border-line bg-white p-5 sm:p-7.5">
      <SectionLabel>{label}</SectionLabel>
      <h3 className="t-title text-ink">{heading}</h3>
      <p className="text-base leading-[26px] text-body">{description}</p>
      <p className="flex w-full items-center gap-2.5 rounded-[7px] bg-line p-3 text-sm text-ink">
        <CircleCheck aria-hidden="true" strokeWidth={1.5} className="size-4 shrink-0 text-brand" />
        {status}
      </p>
      {children}
    </div>
  );
}

export default function ContactSection({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="contact" className="bg-line py-20 lg:py-25">
      <Container className="flex flex-col gap-12 lg:gap-15">
        <SectionIntro
          as={isPage ? "h1" : "h2"}
          label="Let’s work together"
          heading="Got a project in mind? Let’s talk."
          description="Pick whatever’s easiest — the form, WhatsApp, or email. Every message gets a personal reply, never an automated one."
        />

        <div className="grid items-start gap-5 lg:grid-cols-[760fr_420fr]">
          <ContactForm />

          <div className="flex flex-col gap-5">
            <ContactCard
              label="Prefer to chat directly?"
              heading="Message me on WhatsApp"
              description="For quick questions, project discussions, or if you just want a fast answer — WhatsApp is the best way to reach me directly. I respond to every message personally."
              status="Typically replies within a few hours"
            >
              <ButtonLink href={WHATSAPP_LINK_PREFILLED} external>
                Chat on WhatsApp
              </ButtonLink>
              <p className="text-sm leading-[21px] text-muted">
                Available Monday to Saturday · Typically replies same day
              </p>
            </ContactCard>

            <ContactCard
              label="Prefer email?"
              heading="Send me an email"
              description="For detailed project briefs, formal enquiries, or if you’d like to attach documents — email is the way to go. I read and respond to every email personally."
              status="Response within 24 hours"
            >
              <p className="text-lg leading-none font-medium break-all text-ink">{CONTACT_EMAIL}</p>
              <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary" external>
                Send an Email
              </ButtonLink>
            </ContactCard>
          </div>
        </div>

        <ul className="flex flex-col gap-4 lg:gap-5">
          {REASSURANCES.map((line) => (
            <li key={line} className="flex items-start gap-3 text-base leading-snug text-body">
              <Check aria-hidden="true" strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-brand" />
              {line}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
