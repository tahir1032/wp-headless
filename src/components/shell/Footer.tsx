"use client";

export default function Footer() {
  return (
    <footer className="bg-snowwhite lg:pt-37 pt-15 overflow-hidden relative z-1 footer site-footer">
      <div className="container-full px-5">
        <div className="flex max-xl:flex-wrap">
          <div className="xl:w-1/2 w-full 4xl:pl-40 2xl:pl-15 lg:pl-10 max-xl:mb-20 max-xl:mb-15">
            <h4 className="sm:text-3xl text-2xxl font-medium mb-10">Subscribe to<br /> Our Newsletter</h4>
            <div className="relative w-full lg:max-w-113.75 subscribe-form">
              <form className="dzSubscribe" onSubmit={(e) => e.preventDefault()}>
                <div className="dzSubscribeMsg"></div>
                <label htmlFor="subscribeEmail" className="sr-only">Email address</label>
                <input
                  name="dzEmail"
                  required
                  type="email"
                  id="subscribeEmail"
                  className="relative flex flex-wrap tems-stretch h-13.75 w-full border-b border-primary pr-8"
                  placeholder="Email address"
                />
                <button aria-label="Subscribe" type="submit" className="absolute bottom-0 -translate-y-1/2 right-0 group overflow-hidden cursor-pointer">
                  <svg aria-hidden="true" className="group-hover:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#111111" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 17V7H7" stroke="#111111" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:1/2 w-full 4xl:pl-40 xl:pl-15 lg:pl-10">
            <div className="sm:flex xl:justify-center justify-between 2xl:gap-50 md:gap-30 gap-25 xl:pb-25 pb-15">
              <div className="max-sm:mb-12">
                <h5 className="text-xl font-semibold text-black pb-2 border-b border-lightgray mb-5 inline-block">Contact Us</h5>
                <a href="mailto:info@Dexigzone.com" className="text-base text-gray block mb-3 relative hover:text-primary duration-500"><span className="link-hover">info@Dexigzone.com</span></a>
                <a href="tel:+1456123789" className="text-base text-gray block relative hover:text-primary duration-500"><span className="link-hover">+1 9 256 309 077</span></a>
              </div>
              <div className="max-sm:mb-12">
                <h5 className="text-xl font-semibold text-black pb-2 border-b border-lightgray mb-5 inline-block">Company</h5>
                <a href="/work" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Work</span></a>
                <a href="/studio" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Studio</span></a>
                <a href="/contact-us" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Contact</span></a>
              </div>
              <div className="relative">
                <h5 className="text-xl font-semibold text-black pb-2 border-b border-lightgray mb-5 inline-block">Social Media</h5>
                <a href="https://www.instagram.com/dexignzone" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Instagram</span></a>
                <a href="https://www.x.com" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">x</span></a>
                <a href="https://www.linkedin.com" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Linkedin</span></a>
                <a href="https://clutch.co/profile/w3itexperts" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Clutch</span></a>
                <a href="https://dribbble.com/dexignzone" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Dribbble</span></a>
              </div>
            </div>
            <div className="relative">
              <h5 className="4xl:text-[240px] 3xl:text-[220px] 2xl:text-[195px] xl:text-[160px] lg:text-[195px] md:text-[162px] sm:text-[115px] text-[64px] leading-none font-normal whitespace-nowrap 2xl:tracking-[-20px] md:tracking-[-15px] sm:tracking-[-10px] tracking-[-5px] border-b border-lightgray inline-block">
                Let&apos;s discuss
              </h5>
              <a href="/contact-us" className="bg-primary 3xl:size-20 md:size-15 sm:size-10 size-8 rounded-full border-4 border-snowwhite absolute 2xl:top-15 xl:top-10 lg:top-15 md:top-10 sm:top-8 top-4 4xl:right-35 2xl:right-30 xl:right-23 lg:right-35 md:right-25 sm:right-22 right-15 flex items-center justify-center overflow-hidden group">
                <svg className="group-hover:animate-toTopFromBottom" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 17V7H7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="!text-gray text-base font-normal py-7.5 flex sm:justify-between justify-center max-sm:text-center flex-wrap">
                <a className="block text-primary" href="/">© Amara</a>
                <p className="copyright-text">
                  © <span className="current-year">{new Date().getFullYear()}</span> <a href="/" className="text-primary font-medium border-b">Amara</a> All Rights Reserved Copyright
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -z-1 2xl:top-60 top-68 -left-27.5 4xl:size-226 2xl:size-190 size-165 bg-white rounded-full flex items-center justify-center max-xl:hidden">
          <div className="flex items-center justify-center gap-10 relative 4xl:top-10 top-15">
            <img src="/images/svg/eyes.svg" className="4xl:max-w-159.5 max-w-100" alt="img" loading="lazy" />
            <div className="center eye left rounded-full absolute 2xl:top-28.75 top-21.25 right-15">
              <svg className="rounded-full overflow-visible iris" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#111111" />
                <circle className="pupil" cx="30" cy="30" r="5" fill="white" />
              </svg>
            </div>
            <div className="center eye right rounded-full absolute 2xl:top-28.75 top-21.25 left-20">
              <svg className="rounded-full overflow-visible iris" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#111111" />
                <circle className="pupil" cx="30" cy="30" r="5" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
