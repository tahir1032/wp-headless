import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK, LINKEDIN_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Tahir Hafeez — Hire a WordPress & GHL Developer",
  description:
    "Get in touch with Tahir Hafeez — WordPress developer and GoHighLevel specialist. Discuss your project, get a fixed-price quote, and receive a response within 24 hours.",
  keywords: [
    "hire WordPress developer",
    "contact WordPress freelancer",
    "GoHighLevel developer for hire",
    "WordPress developer quote",
    "WooCommerce developer contact",
    "hire GHL specialist",
    "freelance WordPress developer contact",
  ],
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Hire Tahir Hafeez | WordPress & GHL Developer",
    description:
      "Ready to build? Contact Tahir Hafeez for custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems. Fixed-price quotes. Response within 24 hours.",
  },
  twitter: {
    title: "Hire Tahir Hafeez | WordPress & GHL Developer",
    description:
      "Ready to build? Contact Tahir Hafeez for custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems. Fixed-price quotes. Response within 24 hours.",
  },
};

const CURSOR_IMAGES = Array.from({ length: 10 }, (_, i) => `/images/image-scroll/${i + 1}.webp`);

const SOCIAL_LINKS = [{ label: "LinkedIn", href: LINKEDIN_URL }];

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
        <div className="container-full">
          <div className="grid grid-cols-12">
            <div className="xl:col-span-2 col-span-12 border-r border-lightgray">
              <div className="px-5 pt-15 flex xl:items-center flex-wrap max-xl:justify-between gap-15">
                <div className="xl:w-[60%] sm:w-[21%] w-full">
                  <h3 className="text-sm font-normal uppercase text-mediumgray pb-2 border-b border-lightgray mb-5 inline-block">Contact Us</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-base text-primary font-medium block mb-2"><span className="link-hover">{CONTACT_EMAIL}</span></a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-base text-primary font-medium block"><span className="link-hover">{WHATSAPP_DISPLAY}</span></a>
                </div>
                <div className="xl:w-[60%] sm:w-[21%] w-full">
                  <h3 className="text-sm font-normal uppercase text-mediumgray pb-2 border-b border-lightgray mb-5 inline-block">location</h3>
                  <a className="text-base text-primary font-medium block mb-3"><span className="link-hover">Available Worldwide — Remote</span></a>
                </div>
                <div className="xl:w-[60%] sm:w-[21%] w-full">
                  <h3 className="text-sm font-normal uppercase text-mediumgray pb-2 border-b border-lightgray mb-5 inline-block">Social</h3>
                  {SOCIAL_LINKS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-base text-primary font-medium mb-2 group flex items-center">
                      {s.label}
                      <span className="size-8.75 ml-1.25 flex items-center justify-center rounded-full bg-primary -translate-x-full rotate-[-360deg] opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden group/second duration-500">
                        <svg className="group-hover/second:animate-toTopFromBottom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.25 12.75L12.75 5.25" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5.25 5.25H12.75V12.75" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="xl:col-span-10 col-span-12">
              <div className="sm:pt-20 pt-10 lg:px-10 px-2 pb-18.75">
                <div className="pxl-heading-scroll-effect">
                  <h2 className="lg:text-5xl md:text-4xxxl sm:text-4xl text-3xl font-medium max-w-196 heading-text mb-5">
                    We&apos;re excited to learn more about your project.
                  </h2>
                </div>
                <p className="text-lg text-mediumgray mb-12.5 max-w-150">
                  Share what you&apos;re building and I&apos;ll respond within 24 hours with a clear plan and an honest quote.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
