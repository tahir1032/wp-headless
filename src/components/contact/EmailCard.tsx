import { CONTACT_EMAIL } from "@/lib/site-config";

export default function EmailCard() {
  return (
    <div className="rounded-sm bg-shadegray p-7.5 h-full">
      <span className="text-sm text-mediumgray font-medium uppercase block mb-2.5">Prefer email?</span>
      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2.5">
        <i className="fa-solid fa-envelope text-primary"></i>
        Send me an email
      </h3>
      <p className="text-base font-light text-softgray mb-3">
        For detailed project briefs, formal enquiries, or if you&apos;d like to attach documents — email is the way to go. I read and respond to every email personally.
      </p>
      <p className="text-sm text-primary font-medium mb-5">📬 Response within 24 hours</p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="inline-flex items-center gap-2.5 bg-primary text-white py-3 px-5.5 rounded-full group overflow-hidden mb-5"
      >
        <span className="font-medium">Send an Email</span>
        <span className="overflow-hidden inline-flex items-center justify-center">
          <svg className="group-hover:animate-toTopFromBottom" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 17V7H7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
      <p className="text-sm text-mediumgray">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary duration-300">{CONTACT_EMAIL}</a>
      </p>
    </div>
  );
}
