import CaseCard from "@/components/work/CaseCard";
import ServicesShowcase from "@/components/shell/ServicesShowcase";

const TAGS = ["Meta Ads", "Google Ads", "CRO", "Analytics"];

const RECENT_WORK = [
  { title: "Content Strategy Blueprint", category: "branding", image: "/images/work/services/1.webp" },
  { title: "Ecommerce Conversion Boost", category: "design", image: "/images/work/services/2.webp" },
  { title: "SEO Visibility Enhancement", category: "development", image: "/images/work/services/3.webp" },
  { title: "Creative Branding Refresh", category: "mobile-apps", image: "/images/work/services/4.webp" },
  { title: "Customer Engagement Program", category: "branding", image: "/images/work/services/5.webp" },
];

const CURSOR_IMAGES = Array.from({ length: 10 }, (_, i) => `/images/image-scroll/${i + 1}.webp`);

export default function Home() {
  return (
    <>
      <section className="pt-14 after:absolute after:h-px after:w-full after:bg-lightgray after:rotate-[45deg] after:-translate-x-1/2 after:top-1/2 after:left-1/2 after:-z-1 before:absolute before:h-px before:w-full before:bg-lightgray before:rotate-[-45deg] before:-translate-x-1/2 before:top-1/2 before:left-1/2 before:-z-1 hero relative flex items-center justify-center w-full xl:h-180 lg:h-100 md:h-80 sm:h-70 h-50 overflow-hidden">
        <div className="container-full">
          <h1 className="dust-text cursor-default flex items-center justify-center max-xl:relative">Amara</h1>
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

      <div className="video-section relative w-full 2xl:h-200 lg:h-145 sm:h-100 h-70 overflow-hidden after:absolute after:bg-black/40 after:inset-0 after:z-1">
        <video id="bgVideo" className="bg-video absolute top-0 left-0 size-full object-cover z-1" autoPlay muted loop>
          <source id="videoSource" src="/video/video1.mp4" type="video/mp4" />
        </video>
        <div className="thumbnails absolute flex items-center justify-center top-1/2 left-1/2 -translate-1/2 4xl:gap-25 3xl:gap-10 gap-5 z-2">
          <button className="border-4 border-white/20 rounded-md thumb" data-video="/video/video1.mp4" aria-label="Play Video 1">
            <img src="/images/thumbs/thumb1.webp" className="object-cover rounded-md duration-500 hover:scale-[1.1]" alt="img" loading="lazy" />
          </button>

          <button
            data-type="youtube"
            aria-label="Play YouTube Video"
            data-src="https://www.youtube.com/embed/tVphpcFHGaI"
            className="2xl:w-75 xl:w-60 lg:w-50 sm:w-40 w-15 2xl:min-w-75 xl:min-w-60 lg:min-w-50 sm:min-w-40 min-w-15 2xl:mx-20 xl:mx-10 rounded-full overflow-hidden wow fadeInUp cursor-pointer flex items-center justify-center"
            data-wow-delay="0.5s"
          >
            <span className="flex justify-center items-center 2xl:size-75 xl:size-60 lg:size-50 md:size-40 sm:size-25 size-15 rounded-full animate-rotate text-center text-row word-rotate-box bg-white/10 backdrop-blur-[20px] after:content-[''] after:absolute after:top-0 after:left-0 after:size-full after:-z-1 after:rounded-full after:border after:border-white/40">
              <svg className="block animate-rotate [animation-direction:reverse] badge__emoji z-1" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.26496 0.440985C1.46185 -0.593307 0 0.253997 0 2.33198V17.6666C0 19.7466 1.46185 20.5928 3.26496 19.5595L16.6682 11.8729C18.4719 10.8382 18.4719 9.16191 16.6682 8.1275L3.26496 0.440985Z" fill="#fff" />
              </svg>
            </span>
          </button>

          <button className="border-4 border-white/20 rounded-md thumb" data-video="/video/video2.mp4" aria-label="Play Video 2">
            <img src="/images/thumbs/thumb2.webp" className="object-cover rounded-md duration-500 hover:scale-[1.1]" alt="img" loading="lazy" />
          </button>
        </div>
      </div>

      <div className="portfolio relative">
        <div className="container-full">
          <div className="flex items-center relative after:absolute after:inset-0 after:w-0 hover:after:w-full after:bg-shadegray after:duration-500 after:-z-1">
            <div className="4xl:w-[calc(17%_+_17px)] 3xl:w-[calc(20%_+_36px)] 2xl:w-[calc(23%_+_47px)] w-full 2xl:border-r border-lightgray">
              <a href="/work" className="text-sm text-primary bg-shadegray font-medium sm:py-10 sm:pl-5 p-5 uppercase cursor-pointer sm:h-26 group flex items-center max-w-50">
                Recent work
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="var(--primary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 17V7H7" stroke="var(--primary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="lg:w-[calc(83%_-_14px)] w-full">
              <a className="float-right pr-5 sm:py-10 py-5">©2015-26</a>
            </div>
          </div>
          <div className="grid grid-cols-12 border-y border-lightgray">
            <div className="col-span-12 2xl:ml-85 border-l border-lightgray">
              <div className="pxl-heading-scroll-effect border-b border-lightgray">
                <p className="4xl:text-4xxl lg:text-3xl md:text-2xxxl text-2xxl text-subtlegray 4xl:pt-15 4xl:pl-15 4xl:pb-24.25 lg:py-10 py-5 lg:pl-10 pl-5 font-semibold heading-text">
                  At Amara, we know your time is precious, and that&apos;s why we prioritize simplicity and efficiency. Our team has the expertise and creativity to handle everything from research and planning to custom design and development, freeing you from the burden of micromanagement.
                </p>
              </div>
              <div className="lg:col-span-10 col-span-12 services" id="services">
                {RECENT_WORK.map((item, i) => (
                  <CaseCard
                    key={item.title}
                    title={item.title}
                    date="03 Jan 2026"
                    category={item.category}
                    tags={TAGS}
                    image={item.image}
                    href="/work"
                    last={i === RECENT_WORK.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="img-section 3xl:py-60 xl:py-30 md:py-20 max-sm:h-91.25 max-sm:-top-25">
        <div className="relative">
          <h2 className="xl:text-250 lg:text-[150px] sm:text-8xl text-7xxxl absolute top-65 left-1/2 -translate-1/2 z-10 zoom-text">STUDIO</h2>
          <svg className="w-full h-139" width="1921" viewBox="0 0 1921 556" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_rocket_main)">
              <path
                id="img-path"
                d="M0 555.5H955C1114 555.5 1237.5 414.5 1237.5 278C1237.5 119.5 1091 0.5 960 0.5C816 0.5 682.5 132.5 682.5 278C682.5 423.5 818 555.5 966 555.5H1921"
                strokeOpacity="0.2"
                strokeDasharray="5 5"
              />
            </g>
            <defs>
              <clipPath id="clip0_rocket_main">
                <rect width="1921" height="556" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div id="img-container" className="absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none h-full w-150 !-z-1"></div>
        </div>
      </section>

      <ServicesShowcase />

      <section className="2xl:pt-10 lg:pt-30 pt-15 overflow-hidden">
        <div className="container-fluid">
          <div className="grid grid-cols-12 items-center max-xl:flex max-xl:flex-col-reverse">
            <div className="xl:col-span-9 col-span-12">
              <h3 className="big-number font-bold leading-none 4xl:-ml-10 md:-ml-7 2xl:-mb-45 xl:-mb-38 md:-mb-22 sm:-mb-13 -mb-10">180</h3>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="pxl-heading-scroll-effect">
                <p className="4xl:text-4xxl/12.5 2xl:text-3xl sm:text-2xxxl text-2xl font-medium text-lightgray heading-text xl:mb-35 mb-20 max-xl:text-center max-w-94.75">
                  Proven expertise with more than <br /> 180 successfully delivered projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
