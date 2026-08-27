import type { Metadata } from "next";
import ServicesShowcase from "@/components/shell/ServicesShowcase";
import MissionPromiseApproach from "@/components/shell/MissionPromiseApproach";
import { WORDPRESS_INDUSTRIES, GHL_INDUSTRIES } from "@/lib/industries-data";

const INDUSTRY_TEASER = [
  ...WORDPRESS_INDUSTRIES.filter((i) =>
    ["E-Commerce & Retail", "Healthcare & Medical", "Real Estate & Property", "Digital, Tech & SaaS", "Business & Corporate", "Legal, Finance & Professional Services"].includes(i.title),
  ),
  ...GHL_INDUSTRIES.filter((i) => ["Coaches & Course Creators", "Marketing & Digital Agencies"].includes(i.title)),
];

export const metadata: Metadata = {
  title: "About Tahir Hafeez — WordPress Developer & GHL Expert",
  description:
    "Meet Tahir Hafeez — a WordPress developer and GoHighLevel specialist with 5 years of professional experience delivering custom websites, WooCommerce stores, plugin development, and GHL automation systems for clients worldwide.",
  keywords: [
    "WordPress developer about",
    "experienced WordPress developer",
    "GoHighLevel expert",
    "WordPress plugin developer for hire",
    "WooCommerce specialist",
    "freelance WordPress consultant",
    "WordPress developer portfolio",
  ],
  alternates: { canonical: "/developer" },
  openGraph: {
    title: "About Tahir Hafeez | WordPress & GoHighLevel Expert",
    description:
      "5 years of WordPress expertise. 80+ projects. Custom development, WooCommerce, plugin development, GHL funnels, and API integration — delivered with precision for clients across four continents.",
  },
  twitter: {
    title: "About Tahir Hafeez | WordPress & GoHighLevel Expert",
    description:
      "5 years of WordPress expertise. 80+ projects. Custom development, WooCommerce, plugin development, GHL funnels, and API integration — delivered with precision for clients across four continents.",
  },
};

const WHEEL_IMAGES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 10, 11, 20, 14, 1,
];

const CHECK_ICON = (
  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1594 0.0378643C13.0147 1.0701 9.00581 3.83073 5.30896 8.55982L3.12447 6.13526C2.78839 5.75117 2.16425 5.75117 1.82817 6.13526L0.2198 7.93567C-0.0922715 8.29575 -0.0682664 8.82388 0.267811 9.13595L5.21294 13.889C5.62104 14.2731 6.29319 14.1771 6.58126 13.673C9.22186 8.89589 12.0545 5.34308 16.8556 1.26214C17.4317 0.758029 16.9036 -0.20219 16.1594 0.0378643Z"
      fill="white"
    />
  </svg>
);

const CHOOSE_US = [
  {
    text: "5 years of deep WordPress expertise — custom theme and plugin development, WooCommerce, ACF, Gutenberg, REST API, headless builds, and performance engineering across 80+ live projects.",
    delay: "bounceInDown",
  },
  {
    text: "GoHighLevel authority most developers don't possess — full-stack GHL implementation including funnels, automation sequences, payment systems, course delivery, landing pages, and CRM pipeline architecture.",
    delay: "bounceInLeft",
  },
  {
    text: "Transparent, professional communication throughout — fixed-price proposals, clear milestones, no scope creep, and honest answers — so you always know exactly what you're getting and when.",
    delay: "bounceInRight",
  },
  {
    text: "A proven track record across industries and markets — healthcare, e-commerce, real estate, education, digital agencies, and AI consulting — delivering to clients in the US, UK, Australia, South Africa, and UAE.",
    delay: "bounceInUp",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="pt-30 lg:pb-25 pb-5">
        <div className="container-full lg:px-10 px-5">
          <div className="grid grid-cols-12">
            <div className="2xl:col-span-5 col-span-12">
              <h1
                className="4xl:text-13xl 3xl:text-10xl 2xl:text-[120px]/30 xl:text-8xl md:text-7xxxl sm:text-7xl/7.5 text-4xl/5 wow bounceInLeft max-xl:mb-10"
                data-wow-delay="2.5s"
              >
                Meet the Developer
              </h1>
              <p className="text-lg sm:text-xl font-normal text-mediumgray max-w-125 mt-5 wow bounceInLeft" data-wow-delay="2.7s">
                5 years of WordPress expertise. GoHighLevel authority. Delivering results for businesses worldwide.
              </p>
            </div>
            <div className="2xl:col-span-7 col-span-12">
              <div className="grid grid-cols-12 gap-5">
                <div className="md:col-span-4 col-span-12 dz-hover-item wow bounceInRight" data-wow-delay="3s">
                  <a className="dz-hover-img rounded-2lg relative size-full" data-displacement="/images/studio/1.webp" data-intensity="0.6" data-speedin="1" data-speedout="1">
                    <img className="rounded w-full h-77.5 object-cover" src="/images/studio/1.webp" alt="img" loading="lazy" />
                  </a>
                </div>
                <div className="md:col-span-8 col-span-12 dz-hover-item wow bounceInRight" data-wow-delay="2.3s">
                  <a className="dz-hover-img rounded-2lg relative size-full" data-displacement="/images/studio/2.webp" data-intensity="0.6" data-speedin="2" data-speedout="2">
                    <img className="rounded w-full h-77.5 object-cover" src="/images/studio/2.webp" alt="img" loading="lazy" />
                  </a>
                </div>
              </div>
              <div className="wrapper overflow-hidden border-l mt-5 border-primary pl-4.75 space-y-5">
                <p className="introline text-lg font-normal text-black">
                  I&apos;m Muhammad Tahir Hafeez — a WordPress developer and GoHighLevel specialist with 5 years of professional experience building websites and digital systems for businesses that take growth seriously.
                </p>
                <p className="introline text-lg font-normal text-black">
                  My work spans the full WordPress ecosystem: custom theme and plugin development from scratch, advanced WooCommerce stores with complex payment and shipping configurations, ACF-powered custom data structures, Gutenberg block development, REST API and third-party integrations, headless WordPress architectures, and rigorous performance and security optimization. On the GoHighLevel side, I architect complete business automation systems — sales funnels, multi-step email and SMS campaigns, payment collection, course platforms, landing pages, and CRM pipelines that eliminate manual work and accelerate revenue.
                </p>
                <p className="introline text-lg font-normal text-black">
                  My clients range from healthcare providers and e-commerce brands to digital agencies, real estate platforms, educational institutions, and AI consulting firms. What they share is a need for technical work delivered with precision, transparency, and accountability — every time.
                </p>
                <p className="introline text-lg font-normal text-black">
                  Every engagement begins with understanding your business goal — not picking a template. Clean code, honest timelines, fixed-price proposals, and post-launch support are not extras; they are the baseline. I communicate clearly, deliver on schedule, and build work that holds up under real-world conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="size-full overflow-hidden">
        <div>
          <img className="size-full object-cover" src="/images/studio.webp" alt="img" loading="lazy" />
        </div>
      </div>

      <MissionPromiseApproach />

      <section className="2xl:py-50 py-20">
        <div className="container">
          <div className="pxl-heading-scroll-effect">
            <h2 className="2xl:text-8xl lg:text-7xxxl/25 md:text-7xl/25 sm:text-5xl/20 text-4xl/15 font-semibold capitalize text-center mb-12.5 heading-text">
              Why Clients Choose Me
            </h2>
          </div>
          <ul className="flex flex-col items-center justify-center gap-3.75 sm:text-2xl text-base font-light">
            {CHOOSE_US.map((item) => (
              <li key={item.text} className={`py-2.5 sm:pr-7.5 pr-2.5 pl-2.5 bg-cleangray rounded-full flex items-center gap-2.5 wow ${item.delay}`} data-wow-delay="0.1s">
                <a className="sm:size-12.5 size-10 bg-primary flex items-center justify-center rounded-full">{CHECK_ICON}</a>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="pxl-heading-scroll-effect">
            <h2 className="2xl:text-8xl lg:text-7xxxl/25 md:text-7xl/25 sm:text-5xl/20 text-4xl/15 font-semibold capitalize text-center mb-12.5 heading-text">
              Industries I Work In
            </h2>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-3.75">
            {INDUSTRY_TEASER.map((industry) => (
              <li key={industry.title}>
                <a
                  href="/industries"
                  className="py-2.5 pr-5 pl-2.5 bg-cleangray rounded-full flex items-center gap-2.5 text-base font-light hover:bg-primary hover:text-white duration-500"
                >
                  <span className="size-9 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <i className={`fa-solid ${industry.icon} text-white text-sm`}></i>
                  </span>
                  {industry.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="slider-section bottom-0 w-full 4xl:h-150 sm:h-127 h-90 relative">
        <div className="wheel">
          {WHEEL_IMAGES.map((n, i) => (
            <div key={i} className="wheel__card">
              <img src={`/images/image-scroll/${n}.webp`} className="rounded-sm w-full h-auto" alt="img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <ServicesShowcase />
    </>
  );
}
