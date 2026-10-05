import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonLink from "@/components/ui/ButtonLink";
import { CONTACT_PATH } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="py-25 lg:py-40">
      <Container className="flex flex-col items-start gap-6.25">
        <SectionLabel>404</SectionLabel>
        <h1 className="t-display max-w-[800px] text-ink">This page doesn’t exist — but your project can.</h1>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href={CONTACT_PATH} variant="secondary">
            Start a Conversation
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
