import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tahir Hafeez | WordPress & GHL Expert",
  description:
    "WordPress and GoHighLevel specialist. Websites, funnels, automations, and integrations that ship fast and convert.",
  keywords: [
    "WordPress developer",
    "GoHighLevel expert",
    "GHL funnels",
    "Elementor",
    "web developer",
  ],
  openGraph: {
    title: "Tahir Hafeez | WordPress & GHL Expert",
    description:
      "Websites, funnels, and automations built by a specialist who ships fast.",
    url: "https://tahirhafeez.com",
    siteName: "Tahir Hafeez",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0a0f0d] font-sans text-zinc-100 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
