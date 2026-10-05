import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { CONTACT_EMAIL, CONTACT_PATH, LINKEDIN_URL, WHATSAPP_LINK_PREFILLED } from "@/lib/site-config";

const LINK_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "Studio", href: "/studio" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Start a Conversation", href: CONTACT_PATH },
      { label: "WhatsApp", href: WHATSAPP_LINK_PREFILLED, external: true },
      { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: true },
      { label: "LinkedIn", href: LINKEDIN_URL, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: CONTACT_PATH },
      { label: "FAQs", href: "/#faq" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="pt-15 pb-10">
      <Container className="flex flex-col gap-15">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-[420px] flex-col gap-5">
            <Logo />
            <p className="text-base leading-[26px] text-body">
              WordPress, WooCommerce, and GoHighLevel development for growing businesses.
              <br />
              Built for what&apos;s next.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-25">
            {LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex min-w-[150px] flex-col gap-4">
                <p className="text-sm font-medium text-ink">{group.title}</p>
                <ul className="flex flex-col gap-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-body transition-colors hover:text-brand"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sm text-body transition-colors hover:text-brand">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <hr className="border-line" />
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">© {new Date().getFullYear()} Tahir Hafeez. All rights reserved.</p>
            <a href="#top" className="inline-flex items-center gap-3 text-xs text-brand">
              Big ideas start here.
              <ArrowUp aria-hidden="true" strokeWidth={1.5} className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
