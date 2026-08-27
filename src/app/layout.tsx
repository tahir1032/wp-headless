import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/shell/Preloader";
import Header from "@/components/shell/Header";
import ContactSidebar from "@/components/shell/ContactSidebar";
import Footer from "@/components/shell/Footer";
import VideoModal from "@/components/shell/VideoModal";
import ScrollTopButton from "@/components/shell/ScrollTopButton";
import WhatsAppFloatingButton from "@/components/shell/WhatsAppFloatingButton";
import VendorScripts from "@/components/shell/VendorScripts";
import { SITE_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site-config";

const DEFAULT_DESCRIPTION =
  "WordPress developer and GoHighLevel specialist with 5 years of professional experience. Custom WordPress themes, plugin development, WooCommerce stores, GHL funnels, and automation systems — delivered for clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Tahir Hafeez",
    default: "Tahir Hafeez — WordPress Developer & GoHighLevel Specialist",
  },
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Tahir Hafeez",
    title: "Tahir Hafeez — WordPress Developer & GoHighLevel Specialist",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahir Hafeez — WordPress Developer & GoHighLevel Specialist",
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
  jobTitle: "WordPress Developer & GoHighLevel Specialist",
  description:
    "WordPress developer and GoHighLevel specialist with 5 years of experience delivering custom WordPress sites, WooCommerce stores, plugin development, and GHL automation systems for clients worldwide.",
  email: CONTACT_EMAIL,
  telephone: "+923027263808",
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "WordPress Development",
    "GoHighLevel",
    "WooCommerce",
    "Plugin Development",
    "Theme Customization",
    "REST API",
    "Headless WordPress",
    "Next.js",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/icons/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/icons/line-awesome/css/line-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/icons/flaticon/flaticon.css" />
        <link rel="stylesheet" href="/vendor/animate/animate.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Afacad:ital,wght@0,400..700;1,400..700&family=Figtree:ital,wght@0,300..900;1,300..900&family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body className="selection:bg-primary selection:text-white" suppressHydrationWarning>
        <Preloader />

        <div className="page-wraper">
          <Header />
          <ContactSidebar />

          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="page-content">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </div>

        <VideoModal />
        <ScrollTopButton />
        <WhatsAppFloatingButton />

        <VendorScripts />
      </body>
    </html>
  );
}
