import ServicesShowcase from "@/components/shell/ServicesShowcase";

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
  { text: "Modern design with strong attention to detail", delay: "bounceInDown" },
  { text: "Clear communication and transparent workflow", delay: "bounceInLeft" },
  { text: "Strong creative vision backed by technical expertise", delay: "bounceInRight" },
  { text: "Dedicated support from strategy to launch", delay: "bounceInUp" },
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
                Meet the Studio
              </h1>
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
              <div className="flex items-center wrapper overflow-hidden border-l mt-5 border-primary pl-4.75">
                <p className="introline text-lg font-normal text-black">
                  We are a creative digital studio building purposeful brands, websites, and experiences that help businesses grow. Our team blends design, technology, and strategy to craft work that feels modern, meaningful, and built for real-world impact.
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

      <div className="2xl:pt-30 lg:pt-20 pt-5">
        <div className="container-full px-5">
          <div className="grid grid-cols-12 gap-x-4 gap-y-9.75">
            <div className="2xl:col-span-4 col-span-12">
              <div className="wrapper overflow-hidden border-l border-primary sm:px-10 p-5 sm:py-7.5">
                <span className="text-xl text-softgray block mb-1.25">Our Mission</span>
                <p className="introline 4xl:text-3xl sm:text-2xxl text-xl font-light text-primary block">
                  To turn ideas into powerful digital experiences through thoughtful design, seamless development, and creative storytelling.
                </p>
              </div>
            </div>
            <div className="2xl:col-span-4 lg:col-span-6 col-span-12">
              <div className="relative overflow-hidden size-full dz-hover-item">
                <a className="dz-hover-img rounded-2lg relative size-full" data-displacement="/images/studio/3.webp" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img className="rounded size-full object-cover" src="/images/studio/3.webp" alt="img" loading="lazy" />
                </a>
              </div>
            </div>
            <div className="2xl:col-span-4 lg:col-span-6 col-span-12">
              <div className="wrapper overflow-hidden border-l border-primary sm:px-10 p-5 py-7.5">
                <span className="text-xl text-softgray block mb-1.25">Our Promise</span>
                <p className="introline 4xl:text-3xl sm:text-2xxl text-xl font-light text-primary block">
                  We don&apos;t just create visuals — We build digital experiences that elevate brands and inspire audiences.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="relative overflow-hidden size-full dz-hover-item">
                <a className="dz-hover-img rounded-2lg relative size-full" data-displacement="/images/studio/4.webp" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img className="rounded size-full object-cover" src="/images/studio/4.webp" alt="img" loading="lazy" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="wrapper overflow-hidden border-l border-primary sm:px-10 p-5 sm:py-7.5">
                <span className="text-xl text-softgray block mb-1.25">Our Approach</span>
                <p className="introline 4xl:text-3xl sm:text-2xxl text-xl font-light text-primary block">
                  We combine curiosity, creativity, and technical expertise to deliver work that not only looks beautiful but also drives results. Every project is shaped through research, collaboration, and a deep understanding of client goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="2xl:py-50 py-20">
        <div className="container">
          <div className="pxl-heading-scroll-effect">
            <h2 className="2xl:text-8xl lg:text-7xxxl/25 md:text-7xl/25 sm:text-5xl/20 text-4xl/15 font-semibold capitalize text-center mb-12.5 heading-text">
              Why Clients Choose Us
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
