import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import RecentWork from "@/components/home/RecentWork";
import Process from "@/components/home/Process";
import ClosingCTA from "@/components/home/ClosingCTA";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tahir Hafeez — Web Developer & GoHighLevel Specialist",
  description:
    "Web developer and GoHighLevel specialist with 5 years of experience. Custom WordPress themes, plugin development, WooCommerce stores, GHL funnels, and automation systems for clients worldwide.",
  keywords: [
    "web developer for hire",
    "GoHighLevel specialist",
    "custom WordPress development",
    "WordPress plugin developer",
    "GHL funnel setup",
    "WooCommerce developer",
    "headless WordPress Next.js",
    "freelance web developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tahir Hafeez | Web Developer & GHL Specialist",
    description:
      "5 years. 80+ projects. Custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems delivered for clients across the US, UK, AU, ZA, and UAE.",
  },
  twitter: {
    title: "Tahir Hafeez | Web Developer & GHL Specialist",
    description:
      "5 years. 80+ projects. Custom WordPress development, WooCommerce stores, GoHighLevel funnels, and automation systems delivered for clients across the US, UK, AU, ZA, and UAE.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <RecentWork />
      <Process />
      <ClosingCTA />
    </>
  );
}
