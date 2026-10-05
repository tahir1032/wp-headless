import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description:
    "Get in touch with Tahir Hafeez about WordPress, WooCommerce, or GoHighLevel work. Fixed-price quotes and a personal response within 24 hours.",
  keywords: [
    "hire web developer",
    "contact WordPress freelancer",
    "GoHighLevel developer for hire",
    "web developer quote",
    "WooCommerce developer contact",
  ],
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return <ContactSection isPage />;
}
