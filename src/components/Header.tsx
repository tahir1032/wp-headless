import Link from "next/link";
import { siteSettings } from "@/lib/data";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0f0d]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Tahir<span className="text-emerald-400">Hafeez</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={siteSettings.bookingUrl}
          className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-emerald-400"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
