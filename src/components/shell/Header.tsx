export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-98 site-header">
      <div className="main-bar-wraper">
        <div className="container-fluid">
          <div className="flex items-center justify-between py-3.75 sm:px-5 max-xl:flex-row-reverse">
            <div className="flex items-center gap-1.25 max-xl:flex-row-reverse">
              <a className="menu-btn bg-cleangray hover:bg-primary duration-500 py-2.75 px-3.75 rounded-full cursor-pointer flex items-center justify-center group xl:hidden">
                <span className="space-y-1.5 flex flex-col items-end">
                  <span className="group-hover:bg-white bg-black block h-px w-8.25 group-hover:w-6.25 duration-300"></span>
                  <span className="group-hover:bg-white bg-black block h-px w-6.25 group-hover:w-8.25 duration-300"></span>
                </span>
              </a>
              <button
                className="extra-right-btn right-btn bg-cleangray xl:hover:bg-primary xl:duration-500 xl:py-2.75 xl:px-3.75 xl:rounded-full cursor-pointer xl:flex items-center xl:justify-center group"
                type="button"
                aria-label="Toggle drawer"
              >
                <span className="space-y-1.5 flex flex-col items-end max-xl:hidden">
                  <span className="group-hover:bg-white bg-black block h-px w-8.25 duration-200 max-lg:hidden"></span>
                  <span className="group-hover:bg-white bg-black block h-px w-8.25 duration-200 max-lg:hidden"></span>
                </span>
              </button>
              <a href="mailto:info@Dexigzone.com" className="py-1.5 px-3.75 text-sm text-primary bg-cleangray rounded-full max-md:hidden">
                Info@Dexigzone.com
              </a>
              <a href="tel:+9 256 309 077" className="py-1.5 px-3.75 text-sm text-primary bg-cleangray rounded-full max-md:hidden">
                +9 256 309 077
              </a>
            </div>
            <div>
              <a href="/" className="text-base text-logo">@Amara</a>
            </div>
            <div className="header-nav navbar-collapse full-sidenav custom-scroll">
              <ul className="nav navbar xl:flex items-center gap-1.25">
                <li className="xl:hidden">
                  <a href="/" className="text-2xl text-logo text-white p-5">@Amara</a>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="sub-menu-down">
                  <a
                    href="/work"
                    className="relative xl:!pr-8 xl:after:content-['\f107'] xl:after:font-['fontawesome'] xl:after:top-1 xl:after:right-3 xl:after:absolute xl:after:ml-1.25 xl:hover:after:rotate-[180deg] xl:after:duration-500"
                  >
                    Work
                    <i className="fas fa-chevron-right xl:!hidden !block !leading-5 text-center text-xs text-white float-end duration-500"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/work" className="relative"><span>Work</span></a>
                    </li>
                    <li>
                      <a href="/studio" className="relative"><span>Studio</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/studio">Studio</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
              <div className="xl:hidden block max-xl:p-5 text-center mt-auto">
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
          </div>
        </div>
      </div>
    </header>
  );
}
