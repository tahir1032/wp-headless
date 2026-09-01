import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppCard from "@/components/contact/WhatsAppCard";
import EmailCard from "@/components/contact/EmailCard";
import AvailabilityBadge from "@/components/contact/AvailabilityBadge";
import { LINKEDIN_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Tahir Hafeez — Hire a Web & GHL Developer",
  description:
    "Get in touch with Tahir Hafeez — Web developer and GoHighLevel specialist. Discuss your project, get a fixed-price quote, and receive a response within 24 hours.",
  keywords: [
    "hire web developer",
    "contact WordPress freelancer",
    "GoHighLevel developer for hire",
    "web developer quote",
    "WooCommerce developer contact",
    "hire GHL specialist",
    "freelance web developer contact",
  ],
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Hire Tahir Hafeez | Web & GHL Developer",
    description:
      "Ready to build? Contact Tahir Hafeez for custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems. Fixed-price quotes. Response within 24 hours.",
  },
  twitter: {
    title: "Hire Tahir Hafeez | Web & GHL Developer",
    description:
      "Ready to build? Contact Tahir Hafeez for custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems. Fixed-price quotes. Response within 24 hours.",
  },
};

const CURSOR_IMAGES = Array.from({ length: 10 }, (_, i) => `/images/image-scroll/${i + 1}.webp`);

const TRUST_SIGNALS = [
  "80+ projects delivered worldwide",
  "Clients in the US, UK, Australia, South Africa & UAE",
  "5+ years of WordPress. 3+ years of GoHighLevel.",
  "Available Worldwide — Remote",
];

const OBJECTION_KILLERS = [
  "No sales pitch. Just an honest conversation.",
  "No commitment required. First conversation is always free.",
  "I respond to every message within 24 hours — personally.",
];

export default function ContactUsPage() {
  return (
    <>
      <section className="pt-14 hero relative flex items-center justify-center w-full lg:h-180 md:h-90 max-sm:h-65 max-lg:pb-14 max-sm:pb-20 overflow-hidden">
        <div className="container-full">
          <h2 className="2xl:text-13xl lg:text-[120px]/25 md:text-7xxxl/10 sm:text-7xl/10 text-4xl/2 font-bold cursor-default text-center lg:max-w-294 max-w-170">
            Let&apos;s
            <span className="animate-float inline-block">
              <svg className="inline-block max-2xl:w-40 max-xl:w-30 max-lg:w-20 max-sm:w-15" width="170" height="146" viewBox="0 0 170 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.9984 7.99999L109.398 8C138.118 8 161.398 31.2808 161.398 60.0003C161.398 88.7187 138.118 112.001 109.398 112.001L98.9984 112.001C91.8185 112.001 85.9984 117.821 85.9984 125.001L85.9984 138C32.0618 103.684 8.33643 95.0309 8.00234 60.7406C8.00006 60.4946 7.99844 60.2479 7.99844 60.0002C7.99844 31.2812 31.2792 7.99999 59.9984 7.99999Z" stroke="#999999" strokeWidth="16" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M109.66 46.9993L97.1802 46.9993" stroke="#999999" strokeWidth="16" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M73.2578 46.9993L60.7778 46.9993" stroke="#999999" strokeWidth="16" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M60.2602 73L109.66 73" stroke="#999999" strokeWidth="16" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Discuss Your Project
          </h2>
          {CURSOR_IMAGES.map((src) => (
            <img
              key={src}
              className="cursor-picture absolute opacity-0 rounded-lg w-45 h-55 object-contain pointer-events-none scale-[0.8]"
              src={src}
              loading="lazy"
              alt="img"
            />
          ))}
        </div>
      </section>

      <div className="img-scroll-wrap overflow-hidden h-25">
        <img src="/images/contect.webp" alt="img" className="size-full object-cover" loading="lazy" />
      </div>

      <section>
        <div className="container-fluid">
          <div className="text-center pt-15 pb-10 max-w-200 mx-auto">
            <AvailabilityBadge />
            <p className="text-lg text-mediumgray mt-5">
              Whether you need a WordPress site, a WooCommerce store, a GHL automation system, or just an
              honest second opinion on your current setup — reach out. I respond to every message
              personally, within 24 hours.
            </p>
            <p className="text-sm text-mediumgray mt-3.75">
              No sales pitch. No automated replies. Just a real conversation with someone who knows their
              stuff.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-7.5 pb-15">
            <div className="lg:col-span-7 col-span-12">
              <div className="bg-cleangray rounded-md p-7.5 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2.5">Tell me about your project</h2>
                <p className="text-base text-mediumgray mb-7.5">
                  Fill in the details below and I&apos;ll come back to you within 24 hours with a clear
                  plan and an honest quote.
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-5 col-span-12 flex flex-col gap-5">
              <WhatsAppCard />
              <EmailCard />
            </div>
          </div>

          <div className="border-t border-lightgray py-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
            {TRUST_SIGNALS.map((line) => (
              <span key={line} className="text-sm text-mediumgray flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-primary"></i>
                {line}
              </span>
            ))}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium flex items-center gap-2 hover:underline">
              <i className="fa-brands fa-linkedin"></i>
              Connect on LinkedIn
            </a>
          </div>

          <div className="pb-15 flex flex-wrap items-center justify-center gap-x-7.5 gap-y-2 text-center">
            {OBJECTION_KILLERS.map((line) => (
              <span key={line} className="text-sm italic text-softgray">{line}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
