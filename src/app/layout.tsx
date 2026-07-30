import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/shell/Preloader";
import Header from "@/components/shell/Header";
import ContactSidebar from "@/components/shell/ContactSidebar";
import Footer from "@/components/shell/Footer";
import VideoModal from "@/components/shell/VideoModal";
import ScrollTopButton from "@/components/shell/ScrollTopButton";
import VendorScripts from "@/components/shell/VendorScripts";

export const metadata: Metadata = {
  title: "Tahir Hafeez | Portfolio",
  description:
    "Tahir Hafeez is a WordPress and GoHighLevel specialist building fast, scalable websites and case-study-driven digital experiences.",
  icons: {
    icon: "/images/favicon.webp",
  },
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

        <VendorScripts />
      </body>
    </html>
  );
}
