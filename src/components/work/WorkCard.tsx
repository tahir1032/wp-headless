import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import type { CaseStudy } from "@/types";

export default function WorkCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { slug, title, excerpt, featuredImage, platform, date, tags } = caseStudy;

  return (
    <Link
      href={`/work/${slug}`}
      className="group flex h-full flex-col gap-5 rounded-section border border-line bg-white p-3 transition-colors hover:border-brand"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-panel bg-line">
        {featuredImage ? (
          // WordPress media can come from any host, so a plain <img> avoids next/image remotePatterns config.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={featuredImage}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <LogoMark className="size-12 opacity-30" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 px-2 pb-3">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="text-brand">{platform}</span>
          <span className="text-muted">{date}</span>
        </div>
        <h2 className="flex items-start justify-between gap-4 text-xl leading-snug font-medium text-ink">
          {title}
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={1.5}
            className="mt-1 size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </h2>
        {excerpt && <p className="line-clamp-3 text-sm leading-[21px] text-body">{excerpt}</p>}
        {tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.slice(0, 3).map((tag) => (
              <li key={tag} className="rounded-full border border-line px-3 py-1.5 text-xs leading-none font-medium text-body">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
