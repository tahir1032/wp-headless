import type { Industry } from "@/lib/industries-data";

export default function IndustryCard({ icon, title, description }: Industry) {
  return (
    <div className="rounded-sm bg-shadegray p-6 h-full">
      <span className="bg-primary size-13.75 rounded-full flex items-center justify-center mb-5">
        <i className={`fa-solid ${icon} text-white text-xl`}></i>
      </span>
      <h3 className="text-lg font-semibold mb-2.5">{title}</h3>
      <p className="text-base font-light text-softgray">{description}</p>
    </div>
  );
}
