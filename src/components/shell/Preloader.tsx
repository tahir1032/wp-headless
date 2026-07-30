export default function Preloader() {
  return (
    <div
      className="preloader after:absolute after:h-px after:w-full after:bg-lightgray after:rotate-90 after:-translate-x-1/2 after:top-1/2 after:left-1/2 after:-z-1 before:absolute before:h-px before:w-full before:bg-lightgray before:rotate-180 before:-translate-x-1/2 before:top-1/2 before:left-1/2 before:-z-1"
      id="preloader"
    >
      <div className="image-stack">
        <img src="/images/preloader-img1.webp" className="active" alt="img" loading="lazy" />
        <img src="/images/preloader-img2.webp" alt="img" loading="lazy" />
        <img src="/images/preloader-img3.webp" alt="img" loading="lazy" />
        <div className="absolute -top-8 shimmer-text">
          <span className="lg:text-sm sm:text-[10px] text-[8px] text-medium uppercase">
            Loading, Please Wait
          </span>
          <span className="percent lg:text-sm sm:text-[10px] text-[8px] text-medium uppercase md:ml-5 sm:ml-0 ml-4">
            0%
          </span>
        </div>
      </div>
      <svg className="lg:size-135 sm:size-120 size-90" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="70" fill="#fff" />
        <path className="pie" fill="#fff" />
        <line className="start-line" stroke="#D9D9D9" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line className="end-line" stroke="#D9D9D9" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <circle
          cx="90"
          cy="90"
          r="70"
          fill="none"
          stroke="#D9D9D9"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
