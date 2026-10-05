import { Minus, Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonLink from "@/components/ui/ButtonLink";
import { CONTACT_PATH } from "@/lib/site-config";

const FAQS = [
  {
    question: "What is Tahir Hafeez?",
    answer:
      "Tahir Hafeez is a web development business. It brings WordPress sites, WooCommerce stores, GHL automation systems, and other web development needs together, so your team can move from an idea to a project with a clear purpose. You bring the expertise and make the final call.",
  },
  {
    question: "How is this different from a general web developer?",
    answer:
      "You work with one specialist from first brief to launch — no hand-offs, no account managers. I focus on WordPress, WooCommerce, and GoHighLevel, so the site and the automation behind it are planned together instead of patched together later. Every project comes with a fixed-price proposal and clear milestones.",
  },
  {
    question: "Can I use my existing project materials?",
    answer:
      "Yes, and you should. Briefs, Figma files, brand guidelines, an existing site, or a list of what isn’t working today all help. The more context you share, the faster we get to a realistic scope and an honest quote.",
  },
  {
    question: "What kinds of projects can I work on?",
    answer:
      "Custom WordPress sites, theme and plugin development, WooCommerce stores, GoHighLevel funnels and CRM automation, API and webhook integrations, speed and security work, migrations, and ongoing maintenance. If it’s outside that list, ask — I’ll tell you straight if I’m not the right fit.",
  },
  {
    question: "Do I still need to review developer work?",
    answer:
      "You stay in control. You get progress updates at each milestone and a staging link to review before anything goes live. Nothing launches without your approval, and you own everything that gets built.",
  },
  {
    question: "How do I know if Tahir Hafeez fits my team?",
    answer:
      "Start a conversation. The first one is always free, and there’s no commitment. Tell me what you’re building and I’ll come back within 24 hours with a clear plan — or point you to someone better suited.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="pb-20 lg:pb-25">
      <Container>
        <div className="grid gap-12 border-t border-line pt-20 lg:grid-cols-[420fr_800fr] lg:gap-25 lg:pt-25">
          <div className="flex flex-col items-start gap-6.25">
            <SectionLabel>A little more clarity</SectionLabel>
            <h2 className="t-heading text-ink">
              Good questions.
              <br />
              Clear answers.
            </h2>
            <p className="t-lead text-body">
              Want to talk about your workflow?
              <br />
              Let’s walk through it together.
            </p>
            <ButtonLink href={CONTACT_PATH} variant="secondary">
              Start a Conversation
            </ButtonLink>
          </div>

          <div>
            {FAQS.map((faq, index) => (
              <details key={faq.question} name="faq" open={index === 0} className="group border-b border-line py-6.25">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-7.5 text-lg leading-[28.8px] font-medium text-ink transition-colors group-open:text-brand hover:text-brand sm:text-xl [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <Plus aria-hidden="true" strokeWidth={1.5} className="mt-1 size-5 shrink-0 text-brand group-open:hidden" />
                  <Minus aria-hidden="true" strokeWidth={1.5} className="mt-1 hidden size-5 shrink-0 text-brand group-open:block" />
                </summary>
                <p className="pt-4 text-base leading-[26px] text-body">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
