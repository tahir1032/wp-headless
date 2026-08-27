export default function BannerCTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/contact-us"
      className={`inline-flex items-center gap-2.5 bg-primary text-white py-3 px-5.5 rounded-full group overflow-hidden ${className}`}
    >
      <span className="font-medium text-sm sm:text-base">Start a Conversation</span>
      <span className="overflow-hidden inline-flex items-center justify-center">
        <svg className="group-hover:animate-toTopFromBottom" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 17V7H7" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
