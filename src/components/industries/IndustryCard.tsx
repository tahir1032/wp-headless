import type { Industry } from "@/lib/industries-data";

export default function IndustryCard({ icon, title, description }: Industry) {
  return (
    <div className="rounded-sm bg-shadegray p-6 h-full">
      <div className="flex items-center gap-3.75 mb-3">
        <span className="bg-primary size-10 rounded-full flex items-center justify-center shrink-0">
          <i className={`fa-solid ${icon} text-white text-base`}></i>
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-base font-light text-softgray">{description}</p>
    </div>
  );
}
