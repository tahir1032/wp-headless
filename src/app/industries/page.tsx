import type { Metadata } from "next";
import IndustryCard from "@/components/industries/IndustryCard";
import ServicesShowcase from "@/components/shell/ServicesShowcase";
import WhatsAppCard from "@/components/contact/WhatsAppCard";
import EmailCard from "@/components/contact/EmailCard";
import BannerCTAButton from "@/components/shell/BannerCTAButton";
import { WORDPRESS_INDUSTRIES, GHL_INDUSTRIES } from "@/lib/industries-data";

export const metadata: Metadata = {
  title: "Industries — WordPress & GoHighLevel Across Every Niche",
  description:
    "Tahir Hafeez builds WordPress websites and GoHighLevel systems across 26+ industries — e-commerce, healthcare, real estate, education, coaching, agencies, and more.",
  keywords: [
    "web developer by industry",
    "GoHighLevel by industry",
    "industry-specific WordPress development",
    "GHL for coaches",
    "WordPress for real estate",
    "WordPress for healthcare",
  ],
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — Tahir Hafeez | WordPress & GHL Across Every Niche",
    description:
      "WordPress websites and GoHighLevel systems built across 26+ industries — whatever your niche, the goal is a system that performs, converts, and grows your business.",
  },
  twitter: {
    title: "Industries — Tahir Hafeez | WordPress & GHL Across Every Niche",
    description:
      "WordPress websites and GoHighLevel systems built across 26+ industries — whatever your niche, the goal is a system that performs, converts, and grows your business.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-25.5 z-1 overflow-hidden relative">
        <div
          aria-hidden="true"
          className="absolute -z-1 pointer-events-none xl:size-111.75 sm:size-100 size-80 bg-contain bg-no-repeat right-[-300px] xl:top-40 top-25 animate-moveRotate"
          style={{ backgroundImage: "url(/images/Group.webp)" }}
        />
        <div className="container-fluid">
          <h1 className="font-bold 4xl:text-[160px] 2xl:text-[120px] xl:text-8xl lg:text-7xxxl md:text-5xl sm:text-4xxxl text-3xl leading-none mb-5 2xl:max-w-293.75 xl:max-w-250 lg:max-w-200 max-w-160 max-sm:text-center">
            Whatever your industry — I&apos;ve built it.
          </h1>
          <p className="text-lg sm:text-xl font-normal text-mediumgray mb-8 max-w-200 max-sm:text-center max-sm:mx-auto">
            5 years. 80+ projects. I work with businesses across every industry — from solo coaches and
            e-commerce brands to healthcare providers, real estate platforms, and enterprise-level
            companies — building websites and systems that perform, convert, and grow your business,
            whatever your niche.
          </p>
          <div className="mb-12.5 max-sm:text-center">
            <BannerCTAButton />
          </div>
        </div>
      </section>

      <div className="border-t border-lightgray">
        <div className="container-fluid py-20">
          <span className="text-sm text-mediumgray font-medium uppercase block mb-2.5">WordPress Development</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Every kind of WordPress build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORDPRESS_INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-lightgray">
        <div className="container-fluid py-20">
          <span className="text-sm text-mediumgray font-medium uppercase block mb-2.5">GoHighLevel CRM & Automation</span>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Every kind of GoHighLevel system</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GHL_INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </div>

      <ServicesShowcase />

      <section className="border-t border-lightgray py-25">
        <div className="container-fluid">
          <div className="text-center max-w-175 mx-auto mb-15">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-5">Don&apos;t see your industry? It doesn&apos;t matter.</h2>
            <p className="text-base sm:text-lg text-mediumgray">
              Every project starts the same way — a conversation about what you&apos;re building. Reach
              out however&apos;s easiest for you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="rounded-sm bg-shadegray p-7.5 h-full flex flex-col">
              <span className="text-sm text-mediumgray font-medium uppercase block mb-2.5">Fill out a form</span>
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2.5">
                <i className="fa-solid fa-envelope-open-text text-primary"></i>
                Contact Form
              </h3>
              <p className="text-base font-light text-softgray mb-5 flex-1">
                Tell me about your project in detail and I&apos;ll respond within 24 hours with a clear
                plan and an honest quote.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2.5 bg-primary text-white py-3 px-5.5 rounded-full group overflow-hidden self-start"
              >
                <span className="font-medium">Go to Contact Form</span>
                <span className="overflow-hidden inline-flex items-center justify-center">
                  <svg className="group-hover:animate-toTopFromBottom" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 17V7H7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
            <WhatsAppCard />
            <EmailCard />
          </div>
        </div>
      </section>
    </>
  );
}
