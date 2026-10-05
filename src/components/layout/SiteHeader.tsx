"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import ButtonLink from "@/components/ui/ButtonLink";
import { CONTACT_PATH, NAV_LINKS } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-6 lg:h-25">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-ink",
                    isActive(pathname, link.href) ? "text-ink" : "text-body",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={CONTACT_PATH} size="sm">
            Start a Conversation
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={cn(
                  "rounded-[7px] px-3 py-3 text-base font-medium",
                  isActive(pathname, link.href) ? "bg-line text-ink" : "text-body",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3" onClick={() => setOpen(false)}>
              <ButtonLink href={CONTACT_PATH} className="w-full">
                Start a Conversation
              </ButtonLink>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
