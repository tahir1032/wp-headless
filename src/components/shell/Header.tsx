import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK, LINKEDIN_URL } from "@/lib/site-config";

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
              <a href={`mailto:${CONTACT_EMAIL}`} className="py-1.5 px-3.75 text-sm text-primary bg-cleangray rounded-full max-md:hidden">
                {CONTACT_EMAIL}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="py-1.5 px-3.75 text-sm text-primary bg-cleangray rounded-full max-md:hidden">
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div>
              <a href="/" className="text-base text-logo">@Tahir</a>
            </div>
            <div className="header-nav navbar-collapse full-sidenav custom-scroll">
              <ul className="nav navbar xl:flex items-center gap-1.25">
                <li className="xl:hidden">
                  <a href="/" className="text-2xl text-logo text-white p-5">@Tahir</a>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/work">Work</a>
                </li>
                <li>
                  <a href="/developer">Developer</a>
                </li>
                <li>
                  <a href="/industries">Industries</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
              <div className="xl:hidden block max-xl:p-5 text-center mt-auto">
                <ul>
                  <li className="inline-block mx-0.5">
                    <a className="rounded-full size-10 !leading-10 border border-white/10 text-center text-white fab fa-linkedin-in" target="_blank" rel="noopener noreferrer" href={LINKEDIN_URL}></a>
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
