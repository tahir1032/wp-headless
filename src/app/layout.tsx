import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppFloatingButton from "@/components/shell/WhatsAppFloatingButton";
import { SITE_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site-config";

const DEFAULT_DESCRIPTION =
  "Web developer and GoHighLevel specialist with 5 years of professional experience. Custom frontend and backend development, WordPress, WooCommerce, GHL funnels, and automation systems — delivered for clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Tahir Hafeez",
    default: "Tahir Hafeez — Web Developer & GoHighLevel Specialist",
  },
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Tahir Hafeez",
    title: "Tahir Hafeez — Web Developer & GoHighLevel Specialist",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahir Hafeez — Web Developer & GoHighLevel Specialist",
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Tahir Hafeez",
  url: SITE_URL,
  jobTitle: "Web Developer & GoHighLevel Specialist",
  description:
    "Web developer and GoHighLevel specialist with 5 years of experience delivering custom WordPress sites, WooCommerce stores, plugin development, and GHL automation systems for clients worldwide.",
  email: CONTACT_EMAIL,
  telephone: "+923027263808",
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "Frontend Development",
    "Backend Development",
    "React",
    "Next.js",
    "PHP",
    "JavaScript",
    "HTML5",
    "CSS3",
    "WordPress Development",
    "GoHighLevel",
    "WooCommerce",
    "Plugin Development",
    "Theme Customization",
    "REST API",
    "Headless WordPress",
    "GHL Automation",
    "cPanel",
    "DNS Management",
    "Core Web Vitals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body className="selection:bg-primary selection:text-white" suppressHydrationWarning>
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
