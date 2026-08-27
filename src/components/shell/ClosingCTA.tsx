type ClosingCTAProps = {
  heading: string;
  subtext?: string;
  buttonLabel?: string;
};

export default function ClosingCTA({ heading, subtext, buttonLabel = "Start a Conversation" }: ClosingCTAProps) {
  return (
    <section className="border-t border-lightgray py-25 text-center">
      <div className="container-fluid">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-7.5 max-w-175 mx-auto">{heading}</h2>
        {subtext && <p className="text-base sm:text-lg text-mediumgray max-w-150 mx-auto mb-7.5">{subtext}</p>}
        <a
          href="/contact-us"
          className="inline-flex items-center gap-2.5 bg-primary text-white py-4 px-6.25 rounded-full group overflow-hidden"
        >
          <span className="font-medium">{buttonLabel}</span>
          <span className="overflow-hidden inline-flex items-center justify-center">
            <svg className="group-hover:animate-toTopFromBottom" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 17V7H7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
