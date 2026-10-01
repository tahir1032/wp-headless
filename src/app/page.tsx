import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import AutomationVisualizer from "@/components/home/AutomationVisualizer";
import RecentWork from "@/components/home/RecentWork";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import ClosingCTA from "@/components/home/ClosingCTA";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tahir Hafeez — Senior Web Developer & GoHighLevel Architect",
  description:
    "Senior Web Developer and GoHighLevel Specialist with 5+ years of experience. Custom WordPress & WooCommerce development, high-converting GHL funnels, and automated pipeline workflows for clients worldwide.",
  keywords: [
    "web developer for hire",
    "GoHighLevel specialist",
    "GoHighLevel automation developer",
    "custom WordPress development",
    "WordPress plugin developer",
    "GHL funnel setup",
    "WooCommerce developer",
    "headless WordPress Next.js",
    "freelance web developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tahir Hafeez | Senior Web Developer & GHL Architect",
    description:
      "5+ years. 80+ projects. Custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems delivered for clients across the US, UK, AU, ZA, and UAE.",
  },
  twitter: {
    title: "Tahir Hafeez | Senior Web Developer & GHL Architect",
    description:
      "5+ years. 80+ projects. Custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems delivered for clients across the US, UK, AU, ZA, and UAE.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <AutomationVisualizer />
      <RecentWork />
      <Process />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
