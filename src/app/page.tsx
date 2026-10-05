import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Bottleneck from "@/components/home/Bottleneck";
import Foundation from "@/components/home/Foundation";
import Workflow from "@/components/home/Workflow";
import Toolkit from "@/components/home/Toolkit";
import Audience from "@/components/home/Audience";
import HumanDirection from "@/components/home/HumanDirection";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/contact/ContactSection";
import ClosingInvitation from "@/components/home/ClosingInvitation";

export const metadata: Metadata = {
  title: { absolute: "Tahir Hafeez — Web Development for Ambitious Teams" },
  description:
    "WordPress sites, WooCommerce stores, GoHighLevel automation, API integration, and hosting support. Start a conversation — I respond to every message personally within 24 hours.",
  keywords: [
    "web developer for hire",
    "custom WordPress development",
    "WooCommerce developer",
    "GoHighLevel specialist",
    "GHL automation developer",
    "WordPress plugin developer",
    "headless WordPress Next.js",
    "freelance web developer",
  ],
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Bottleneck />
      <Foundation />
      <Workflow />
      <Toolkit />
      <Audience />
      <HumanDirection />
      <Faq />
      <ContactSection />
      <ClosingInvitation />
    </>
  );
}
