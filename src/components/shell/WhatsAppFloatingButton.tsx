"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_PREFILLED } from "@/lib/site-config";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_LINK_PREFILLED}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with me on WhatsApp"
      aria-label="Chat with me on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
