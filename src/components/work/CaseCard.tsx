type CaseCardProps = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  href: string;
  last?: boolean;
};

export default function CaseCard({ title, date, category, tags, image, href, last }: CaseCardProps) {
  return (
    <article
      className={`service py-7.5 2xl:pl-15 pl-5 pr-5${last ? " !border-0" : ""}`}
      data-category={category}
    >
      <div className="left relative">
        <div className="flex items-center justify-between gap-5 max-md:mb-5">
          <h2 className="title flex-1 max-w-150 max-sm:text-xl">{title}</h2>
          <span className="xl:text-base text-sm text-mediumgray block">{date}</span>
        </div>
        <div className="tags absolute flex justify-between left-0 right-0 md:bottom-10">
          <div className="flex flex-wrap items-center gap-2.5">
            {tags.map((tag) => (
              <span key={tag} className="p-2.5 rounded-full bg-cleangray text-black text-base font-normal h-7.75 flex items-center justify-center">
                {tag}
              </span>
            ))}
          </div>
          <a href={href} aria-label="View Work Details" className="flex items-center justify-center overflow-hidden bg-secondary rounded-sm size-9.5 group/second">
            <svg className="group-hover/second:animate-toTopFromBottom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 12.75L12.75 5.25" stroke="#FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.75 12.75V5.25H5.25" stroke="#FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div className="right relative">
        <a href={href} aria-label="View Work Details" className="flex absolute right-0 items-center justify-center overflow-hidden bg-minimalgray rounded-sm md:-bottom-1 bottom-5 size-9.5 group/second">
          <svg className="group-hover/second:animate-toTopFromBottom" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 12.75L12.75 5.25" stroke="#111111" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.75 12.75V5.25H5.25" stroke="#111111" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="image-wrap relative z-1 max-md:pt-15 max-sm:pt-20">
          <img className="rounded" src={image} alt="img" loading="lazy" />
        </div>
      </div>
    </article>
  );
}
