import { WHATSAPP_LINK_PREFILLED } from "@/lib/site-config";

export default function WhatsAppCard() {
  return (
    <div className="rounded-sm bg-shadegray p-7.5 h-full">
      <span className="text-sm text-mediumgray font-medium uppercase block mb-2.5">Prefer to chat directly?</span>
      <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2.5">
        <i className="fa-brands fa-whatsapp text-[#25D366]"></i>
        Message me on WhatsApp
      </h3>
      <p className="text-base font-light text-softgray mb-3">
        For quick questions, project discussions, or if you just want a fast answer — WhatsApp is the best way to reach me directly. I respond to every message personally.
      </p>
      <p className="text-sm text-primary font-medium mb-5">⚡ Typically replies within a few hours</p>
      <a
        href={WHATSAPP_LINK_PREFILLED}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-primary text-white py-3 px-5.5 rounded-full group overflow-hidden mb-5"
      >
        <span className="font-medium">Chat on WhatsApp</span>
        <span className="overflow-hidden inline-flex items-center justify-center">
          <svg className="group-hover:animate-toTopFromBottom" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 17V7H7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
      <p className="text-sm text-mediumgray">Available Monday to Saturday · Typically replies same day</p>
    </div>
  );
}
