"use client";

import { useState, type FormEvent } from "react";

const SERVICE_GROUPS = [
  {
    label: "WordPress",
    options: [
      "Custom WordPress Website Development",
      "WordPress Theme Development & Customization",
      "WordPress Plugin Development",
      "WordPress Plugin Customization",
      "Gutenberg Block Development",
      "Advanced Custom Fields (ACF) Implementation",
      "WordPress REST API Development",
      "Headless WordPress (Next.js / React)",
    ],
  },
  {
    label: "WooCommerce & E-commerce",
    options: [
      "WooCommerce Store Setup & Configuration",
      "WooCommerce Payment Gateway Integration",
      "WooCommerce Custom Add-ons & Extensions",
      "WooCommerce Performance Optimization",
    ],
  },
  {
    label: "GoHighLevel (GHL)",
    options: [
      "GoHighLevel Funnel Setup & Optimization",
      "GHL Email & SMS Automation Campaigns",
      "GHL Landing Pages & Website Builder",
      "GHL Payment Integration & Course Setup",
      "GHL CRM Pipeline & Workflow Automation",
    ],
  },
  {
    label: "API & Integrations",
    options: [
      "Third-Party API Integration",
      "CRM Integration (HubSpot / Mailchimp / ActiveCampaign)",
      "Zapier / Webhook Automation",
      "Payment Gateway Integration",
    ],
  },
  {
    label: "Other Platforms",
    options: ["Webflow Development", "Wix Development"],
  },
  {
    label: "Hosting & Tech",
    options: [
      "Website Speed & Core Web Vitals Optimization",
      "Hosting Setup, cPanel & DNS Management",
      "SSL, Security Hardening & Backups",
      "Website Migration",
      "WordPress Maintenance & Support",
    ],
  },
];

const OTHER_SERVICE_OPTION = "Other / Not Sure Yet — Let's Talk";

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this (visually hidden field below).
    if (data.get("website")) {
      setStatus({ state: "success", message: "Thanks! Your message has been sent." });
      form.reset();
      return;
    }

    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("dzName"),
          email: data.get("dzEmail"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("dzMessage"),
        }),
      });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus({ state: "success", message: json.message || "Thanks! Your message has been sent." });
        form.reset();
      } else {
        setStatus({ state: "error", message: json.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  }

  return (
    <form className="dz-form" onSubmit={handleSubmit}>
      {/* Honeypot field - hidden from real users, left blank by them */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status.state !== "idle" && (
        <div className="dzFormMsg">
          <div className={`alert dz-alert ${status.state === "success" ? "alert-success" : status.state === "error" ? "alert-danger" : ""}`}>
            {status.state === "sending" ? "Sending..." : status.message}
          </div>
        </div>
      )}

      <div className="row">
        <div className="sm:w-1/2 w-full">
          <div className="mb-7.5 sm:py-5.75 sm:px-11.25 p-5 bg-cleangray rounded-md">
            <label htmlFor="fullname" className="block text-mediumgray font-normal text-base">Name</label>
            <input required type="text" name="dzName" id="fullname" placeholder="Jon Davin" className="text-lg placeholder:text-primary text-primary w-full" />
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="mb-7.5 sm:py-5.75 sm:px-11.25 p-5 bg-cleangray rounded-md">
            <label htmlFor="emailaddress" className="block text-mediumgray font-normal text-base">Email Address</label>
            <input required autoComplete="email" type="email" name="dzEmail" id="emailaddress" placeholder="you@example.com" className="text-lg placeholder:text-primary text-primary w-full" />
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="mb-7.5 sm:py-5.75 sm:px-11.25 p-5 bg-cleangray rounded-md">
            <label htmlFor="inputPhone" className="block text-mediumgray font-normal text-base">Phone Number</label>
            <input
              name="phone"
              type="tel"
              id="inputPhone"
              placeholder="Phone Number"
              required
              maxLength={10}
              inputMode="numeric"
              autoComplete="tel"
              aria-label="Phone Number"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").slice(0, 10);
              }}
              className="text-lg placeholder:text-primary text-primary w-full"
            />
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="relative custom-select mb-7.5 sm:py-5.75 sm:px-11.25 p-5 bg-cleangray rounded-md">
            <div data-label="Service">
              <label htmlFor="sortingSelect" className="sr-only">Service</label>
              <select required name="service" defaultValue="" className="dynamic-select w-full" id="sortingSelect">
                <option value="" disabled>Service</option>
                {SERVICE_GROUPS.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </optgroup>
                ))}
                <option value={OTHER_SERVICE_OPTION}>{OTHER_SERVICE_OPTION}</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mb-10 sm:py-5.75 sm:px-11.25 p-5 bg-cleangray rounded-md">
            <label htmlFor="message" className="block text-mediumgray font-normal text-base">Message</label>
            <textarea required placeholder="Write here" name="dzMessage" id="message" className="text-lg placeholder:text-textgray text-primary min-h-50 h-full w-full"></textarea>
          </div>
        </div>
        <div className="w-full">
          <button
            aria-label="Submit"
            type="submit"
            disabled={status.state === "sending"}
            className="bg-primary py-4 px-6.25 text-white rounded-full flex group cursor-pointer disabled:opacity-60"
          >
            <span className="font-medium">{status.state === "sending" ? "Sending..." : "Submit Now"}</span>
            <span className="overflow-hidden ml-2.5 inline-flex items-center justify-center">
              <svg className="group-hover:animate-toTopFromBottom" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83337 14.1667L14.1667 5.83334" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.83337 5.83334H14.1667V14.1667" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
