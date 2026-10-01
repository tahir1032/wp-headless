import Container from "@/components/ui/Container";
import Link from "next/link";
import { Mail } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Services",
    links: [
      { href: "/work", label: "Web Development" },
      { href: "/work", label: "GoHighLevel" },
      { href: "/work", label: "WordPress" },
      { href: "/work", label: "Custom Integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Portfolio" },
      { href: "/contact-us", label: "Contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    href: "mailto:tahir.hafeez.dev@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/tahirhafeezofficial",
    label: "LinkedIn",
    icon: Mail, // Placeholder - will use text or external SVG
  },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-semibold">
              Tahir Hafeez
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              WordPress & GoHighLevel specialist with 5+ years of experience.
              Building custom web solutions for clients worldwide.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Tahir Hafeez. All rights reserved. Remote —
            Worldwide
          </p>
        </div>
      </Container>
    </footer>
  );
}
