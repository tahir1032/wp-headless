"use client";

import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK, LINKEDIN_URL } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-snowwhite lg:pt-37 pt-15 overflow-hidden relative z-1 footer site-footer">
      <div className="container-full px-5">
        <div className="flex max-xl:flex-wrap">
          <div className="xl:w-1/2 w-full 4xl:pl-40 2xl:pl-15 lg:pl-10 max-xl:mb-20 max-xl:mb-15">
            <h4 className="sm:text-3xl text-2xxl font-medium mb-3">Stay in the loop</h4>
            <p className="text-base text-gray mb-10 max-w-100">
              Occasional insights on WordPress, GoHighLevel, and web strategy. No spam, ever.
            </p>
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
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-base text-gray block mb-3 relative hover:text-primary duration-500"><span className="link-hover">{CONTACT_EMAIL}</span></a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-base text-gray block relative hover:text-primary duration-500"><span className="link-hover">{WHATSAPP_DISPLAY}</span></a>
              </div>
              <div className="max-sm:mb-12">
                <h5 className="text-xl font-semibold text-black pb-2 border-b border-lightgray mb-5 inline-block">Company</h5>
                <a href="/work" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Work</span></a>
                <a href="/studio" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Studio</span></a>
                <a href="/contact-us" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Contact</span></a>
              </div>
              <div className="relative">
                <h5 className="text-xl font-semibold text-black pb-2 border-b border-lightgray mb-5 inline-block">Social Media</h5>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="block text-base text-gray mb-3 relative hover:text-primary duration-500"><span className="link-hover">Linkedin</span></a>
              </div>
            </div>
            <div className="relative">
              <h5 className="4xl:text-6xl 3xl:text-5xl 2xl:text-4xl xl:text-3xxl lg:text-4xl md:text-3xl sm:text-2xxl text-2xl font-medium leading-tight border-b border-lightgray inline-block pb-7.5 max-w-225">
                Ready to build something that actually works?
              </h5>
              <p className="text-base sm:text-lg text-gray max-w-175 mt-7.5">
                Whether it&apos;s a WordPress site, a WooCommerce store, a GHL automation system, or a full headless build — let&apos;s talk scope, timeline, and budget. No pressure.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2.5 bg-primary text-white py-4 px-6.25 rounded-full group overflow-hidden mt-7.5"
              >
                <span className="font-medium">Start a Conversation</span>
                <span className="overflow-hidden inline-flex items-center justify-center">
                  <svg className="group-hover:animate-toTopFromBottom" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 17V7H7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <div className="!text-gray text-base font-normal py-7.5 flex sm:justify-between justify-center max-sm:text-center flex-wrap">
                <a className="block text-primary" href="/">© Tahir Hafeez</a>
                <p className="copyright-text">
                  © <span className="current-year" suppressHydrationWarning>{new Date().getFullYear()}</span> <a href="/" className="text-primary font-medium border-b">Tahir Hafeez</a>. WordPress Developer &amp; GoHighLevel Specialist. All rights reserved.
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
