import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonLink from "@/components/ui/ButtonLink";
import { LogoMark } from "@/components/ui/Logo";
import { CONTACT_PATH } from "@/lib/site-config";

export default function ClosingInvitation() {
  return (
    <section className="pt-15">
      <Container>
        <div className="flex items-center justify-between gap-10 overflow-hidden rounded-section bg-brand p-6 text-white sm:p-10 lg:p-15">
          <div className="flex max-w-[870px] flex-col gap-6.25">
            <SectionLabel inverse>Your next chapter</SectionLabel>
            <h2 className="t-display">
              You have something
              <br />
              worth saying.
            </h2>
            <p className="t-lead max-w-[620px]">
              Let’s build the engine behind it. Tell me how your business thinks, creates, and grows — and I’ll show you
              how the website and systems can keep up.
            </p>
            <div className="flex flex-wrap items-center gap-x-6.25 gap-y-4 pt-2">
              <ButtonLink href={CONTACT_PATH} variant="inverse">
                Start a Conversation
              </ButtonLink>
              <p className="text-sm">First conversation is always free.</p>
            </div>
          </div>

          <div aria-hidden="true" className="relative hidden size-[290px] shrink-0 lg:block">
            <span className="absolute inset-0 rounded-full border border-white/70" />
            <span className="absolute inset-[25px] rounded-full border border-white/70" />
            <span className="absolute top-[30px] left-[40px] size-3.5 rounded-full bg-white" />
            <LogoMark className="absolute inset-[70px] size-[150px] text-white" />
          </div>
        </div>
      </Container>
    </section>
  );
}
