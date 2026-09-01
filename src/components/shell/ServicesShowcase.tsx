const SERVICES = [
  {
    letter: "W",
    bg: "bg-nearwhite",
    speed: "1.40",
    title: (
      <>
        Web <br />Development
      </>
    ),
    desc: "End-to-end web development tailored to your business — custom frontend interfaces, backend systems, WordPress theme and plugin development, WooCommerce stores, REST API integrations, and headless builds. Every project built for speed, security, and long-term maintainability.",
    items: ["Frontend & Backend Development", "WordPress Theme & Plugin Development", "WooCommerce — Stores, Payments & Add-ons"],
  },
  {
    letter: "G",
    bg: "bg-aliceblue",
    speed: "1.80",
    title: (
      <>
        GoHighLevel (GHL) <br />Systems
      </>
    ),
    desc: "Full GoHighLevel setup built around your sales process — funnels, automated email and SMS campaigns, payment collection, course delivery, landing pages, and CRM pipelines. Systems that work for you around the clock.",
    items: ["Sales Funnels & High-Converting Landing Pages", "Email / SMS Automation & Campaign Management", "GHL Payments, Courses & CRM Pipelines"],
  },
  {
    letter: "A",
    bg: "bg-peach",
    speed: "1.20",
    title: (
      <>
        API & Plugin <br />Integration
      </>
    ),
    desc: "Connect your WordPress site to any third-party platform. Custom REST API integrations, CRM connections, Zapier and webhook workflows, payment gateway setup, and headless WordPress for modern frontend stacks.",
    items: ["REST API & Webhook Development", "CRM Integration — HubSpot, Mailchimp, ActiveCampaign", "Headless WordPress with React / Next.js"],
  },
  {
    letter: "H",
    bg: "bg-nearwhite",
    speed: "1.80",
    title: (
      <>
        Hosting & Tech <br />Management
      </>
    ),
    desc: "Complete server and hosting management from setup to ongoing maintenance — cPanel, DNS, SSL, Core Web Vitals optimization, security hardening, database tuning, and site migrations.",
    items: ["cPanel, DNS Configuration & SSL", "Speed, Caching & Core Web Vitals Optimization", "Migrations, Backups & Security Hardening"],
  },
];

export default function ServicesShowcase() {
  return (
    <div className="relative z-1 content-inner-2 sticky-content-section top-gradient visiting-card 4xl:h-250 3xl:h-190 2xl:h-140 max-md:bg-white">
      <div className="container-full">
        <div className="sticky-content max-sm:pt-0 overflow-hidden">
          <div className="dz-marquee style-1 !sticky top-0">
            <div className="max-w-275.25 mx-auto text-center pxl-heading-scroll-effect relative">
              <p className="4xl:text-4xxl lg:text-3xl md:text-2xxxl sm:text-2xxl text-2xl font-medium text-lightgray heading-text">
                We build websites that generate leads, automate businesses, and grow authority online.
              </p>
            </div>
            <div className="des-text-moving-area black-bg-4">
              <div className="des-text-moving-top moving-text max-sm:w-300">
                <div className="des-text-item wrapper-text flex items-center justify-center text-center lg:gap-20 gap-10">
                  <span className="text-black relative 3xl:text-370 xl:text-[270px] md:text-[200px] text-[120px] whitespace-normal uppercase font-bold">Our</span>
                  <span className="text-black relative 3xl:text-370 xl:text-[270px] md:text-[200px] text-[120px] whitespace-normal uppercase font-bold">Services</span>
                  <span className="text-black relative 3xl:text-370 xl:text-[270px] md:text-[200px] text-[120px] whitespace-normal uppercase font-bold">Our</span>
                  <span className="text-black relative 3xl:text-370 xl:text-[270px] md:text-[200px] text-[120px] whitespace-normal uppercase font-bold">Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full relative 2xl:-top-100 z-1 content-over px-5">
        <div className="flex items-center max-2xl:flex-wrap max-2xl:justify-center 4xl:gap-35 xl:gap-15 gap-5 max-2xl:py-10">
          {SERVICES.map((service, i) => (
            <div key={i} className="md:w-[41.65%] w-full max-2xl:!transform-none" data-speed={service.speed}>
              <div className={`3xl:p-10 p-5 rounded-2lg ${service.bg}`}>
                <div className="flex items-center mb-6.25">
                  <span className="bg-primary size-13.75 rounded-full text-white flex items-center justify-center font-bold text-3xl mr-3.75">
                    {service.letter}
                  </span>
                  <h3 className="text-xl">{service.title}</h3>
                </div>
                <p className="pb-3.75 border-b border-lightgray">{service.desc}</p>
                <ul className="py-4 mb-5">
                  {service.items.map((item) => (
                    <li key={item} className="text-base font-normal text-gray relative flex items-center mb-2.5">
                      <span className="bg-primary rounded-full size-[16px] mr-3.75 flex items-center justify-center">
                        <i className="fa-solid fa-check text-white text-[10px]"></i>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/studio" className="site-button butn-bg-shape">Get in Touch</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
