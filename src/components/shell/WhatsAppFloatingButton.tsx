import { WHATSAPP_LINK_PREFILLED } from "@/lib/site-config";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_LINK_PREFILLED}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with me on WhatsApp"
      aria-label="Chat with me on WhatsApp"
      className="fixed z-90 left-5 bottom-5 size-15 rounded-full bg-[#25D366] shadow-shadow-card flex items-center justify-center hover:scale-110 duration-300"
    >
      <i className="fa-brands fa-whatsapp text-white text-3xl"></i>
    </a>
  );
}
