import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { SITE_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const DEFAULT_DESCRIPTION =
  "Web developer and GoHighLevel specialist with 5+ years of experience. Custom WordPress sites, WooCommerce stores, GHL automation systems, API integration, and hosting support for growing businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Tahir Hafeez",
    default: "Tahir Hafeez — Web Development for Ambitious Teams",
  },
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Tahir Hafeez",
    title: "Tahir Hafeez — Web Development for Ambitious Teams",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahir Hafeez — Web Development for Ambitious Teams",
    description: DEFAULT_DESCRIPTION,
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Tahir Hafeez",
  url: SITE_URL,
  jobTitle: "Web Developer & GoHighLevel Specialist",
  description:
    "Web developer and GoHighLevel specialist with 5+ years of experience delivering custom WordPress sites, WooCommerce stores, plugin development, and GHL automation systems for clients worldwide.",
  email: CONTACT_EMAIL,
  telephone: "+923027263808",
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "WordPress Development",
    "WooCommerce",
    "GoHighLevel",
    "GHL Automation",
    "Plugin Development",
    "REST API",
    "Headless WordPress",
    "Next.js",
    "React",
    "PHP",
    "Core Web Vitals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
