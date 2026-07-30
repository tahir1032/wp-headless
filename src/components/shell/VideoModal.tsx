export default function VideoModal() {
  return (
    <div id="videoDialog" className="dialog hidden fixed z-9999 left-0 top-0 size-full overflow-auto bg-black/80 items-center justify-center h-screen">
      <div className="dialog-content m-auto md:p-12.5 rounded-lg md:w-[80%] max-w-300 relative max-md:h-400 overflow-hidden">
        <span id="closeBtn" className="close absolute top-0 right-0 text-white/80 text-2xxl font-bold cursor-pointer size-10 flex items-center justify-center">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div id="videoContainer"></div>
      </div>
    </div>
  );
}
