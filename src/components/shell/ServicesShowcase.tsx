const SERVICES = [
  {
    letter: "D",
    bg: "bg-nearwhite",
    speed: "1.40",
    title: (
      <>
        Web Design <br />& Digital Identity
      </>
    ),
    desc: "We craft modern digital identities with thoughtful design that strengthens brand presence effectively.",
    items: ["Web Design", "Brand Identity", "Art Direction"],
  },
  {
    letter: "W",
    bg: "bg-aliceblue",
    speed: "1.80",
    title: (
      <>
        Web Development &amp; <br />Interactive Experiences
      </>
    ),
    desc: "We build fast, scalable websites with seamless interactions that enhance overall user engagement.",
    items: ["Frontend Development", "Webflow Development", "Custom Interactions"],
  },
  {
    letter: "M",
    bg: "bg-peach",
    speed: "1.20",
    title: (
      <>
        Mobile Apps <br />& Product Design
      </>
    ),
    desc: "We design intuitive mobile products that deliver smooth, engaging, and user-focused experiences.",
    items: ["UX Design", "Application UI", "Prototyping"],
  },
  {
    letter: "B",
    bg: "bg-nearwhite",
    speed: "1.80",
    title: (
      <>
        Branding, Motion <br />& 3D Content
      </>
    ),
    desc: "We create expressive visuals, motion elements, and 3D content that elevate brand storytelling.",
    items: ["Motion Design", "3D Illustration", "Sound Design"],
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
                We&apos;re a digital design studio that&apos;s all about breaking the mold! We don&apos;t do boring websites or ordinary apps - we specialize in crafting the wildest, most unconventional digital experiences out there.
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
