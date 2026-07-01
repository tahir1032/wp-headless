import { socialLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          &copy; {year} Tahir Hafeez. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: socialLinks.linkedin },
            { label: "Upwork", href: socialLinks.upwork },
            { label: "Fiverr", href: socialLinks.fiverr },
            { label: "Clutch", href: socialLinks.clutch },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
