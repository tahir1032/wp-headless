export default function ScrollTopButton() {
  return (
    <button
      id="scrollProgress"
      title="Scroll to top"
      className="fixed z-1 right-5 bottom-5 size-10 rounded-full bg-secondary shadow-shadow-card cursor-pointer opacity-0 pointer-events-none duration-500 flex items-center justify-center"
    >
      <span className="icon text-xs relative z-1"><i className="fa-solid fa-chevron-up text-white"></i></span>
      <svg className="absolute top-0 left-0 -rotate-90" width="40" height="40">
        <circle
          cx="20"
          cy="20"
          r="17"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="100.53"
          strokeDashoffset="100.53"
        ></circle>
      </svg>
    </button>
  );
}
