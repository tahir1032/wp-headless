"use client";

export default function ContactSidebar() {
  return (
    <>
      <button
        className="extra-right-btn z-97 relative xl:hidden right-btn bg-cleangray xl:hover:bg-primary xl:duration-500 xl:py-2.75 xl:px-3.75 xl:rounded-full cursor-pointer xl:flex items-center xl:justify-center group"
        type="button"
        aria-label="Toggle drawer"
      >
        <span className="uppercase fixed rotate-90 -translate-y-1/2 -left-8 bg-primary px-5 rounded-t-2lg text-white tracking-[2px] top-1/2">
          Info
        </span>
      </button>

      <div className="contact-sidebar md:p-12.5 p-5 fixed h-full md:w-118.75 w-77.75 z-99 bg-primary top-0 -left-[475px] !overflow-y-auto visible duration-500 flex items-center justify-center">
        <div className="flex flex-col h-full duration-500">
          <div className="mb-10">
            <a href="/" className="text-4xl text-logo text-white">@Tahir</a>
          </div>
          <p className="mb-10 text-white/50">
            We build fast, scalable websites with seamless interactions that enhance overall user engagement.
          </p>
          <h4 className="text-2xl font-media mb-5 text-white">Contact Us</h4>
          <ul className="contact-address mb-12.5">
            <li className="text-white/50">785 15h Street, Office 478 Berlin, De 81566</li>
            <li className="text-white/50">info@Dexigzone.com</li>
            <li className="text-white/50">+9 256 309 077</li>
          </ul>
          <h4 className="text-2xl font-media mb-5 text-white">Newsletter</h4>
          <div className="subscribe-form">
            <form className="dzSubscribe" onSubmit={(e) => e.preventDefault()}>
              <div className="dzSubscribeMsg"></div>
              <div className="form-group">
                <div className="input-group flex items-center border-b border-primary mb-5 relative">
                  <input
                    name="dzEmail"
                    required
                    type="email"
                    className="form-control p-1.25 pr-10 text-2sm font-normal text-white border-b border-white/10 h-12.5 w-full"
                    placeholder="Your Email Address"
                  />
                  <button aria-label="Subscribe" type="submit" className="absolute bottom-0 -translate-y-1/2 right-0 group overflow-hidden cursor-pointer">
                    <svg aria-hidden="true" className="group-hover:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="#FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 17V7H7" stroke="#FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="custom-control custom-checkbox flex mb-10 items-center">
                  <input type="checkbox" name="privacyConsent" required className="mr-2.5 size-1.125 border-2 border-primary m-1 bg-transparent" id="basic_checkbox_1" />
                  <label htmlFor="basic_checkbox_1" className="text-mediumgray text-2sm font-normal">
                    I Agree To The <span className="text-white font-medium border-b border-white">Privacy Policy</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <h4 className="text-2xl font-media mb-5 text-white">Follow Us</h4>
          <div className="dz-social-icon dz-hover-move style-2 mb-5">
            <ul>
              <li className="inline-block mx-0.5">
                <a className="rounded-full size-10 !leading-10 border border-white/10 text-center text-white fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone"></a>
              </li>
              <li className="inline-block mx-0.5">
                <a className="rounded-full size-10 !leading-10 border border-white/10 text-center text-white fa-brands fa-x-twitter" target="_blank" href="https://www.x.com"></a>
              </li>
              <li className="inline-block mx-0.5">
                <a className="rounded-full size-10 !leading-10 border border-white/10 text-center text-white fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/"></a>
              </li>
              <li className="inline-block mx-0.5">
                <a className="rounded-full size-10 !leading-10 border border-white/10 text-center text-white fab fa-instagram" target="_blank" href="https://www.instagram.com/dexignzone/"></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-close absolute top-5 right-10 z-99">
          <button className="flex gap-2.5">
            <i className="fa-solid fa-xmark text-2xl text-white"></i>
          </button>
        </div>
      </div>
    </>
  );
}
