"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, Brain, Columns3, Folder, House, Search, type LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import ButtonLink from "@/components/ui/ButtonLink";
import Tag from "@/components/ui/Tag";
import { CONTACT_PATH } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Filter = "all" | "wordpress" | "woocommerce" | "ghl" | "api-hosting" | "other";

const FILTERS: { id: Filter; label: string; icon: LucideIcon }[] = [
  { id: "all", label: "Overview", icon: House },
  { id: "wordpress", label: "WordPress sites", icon: Brain },
  { id: "woocommerce", label: "WooCommerce stores", icon: Columns3 },
  { id: "ghl", label: "GHL automation", icon: Folder },
  { id: "api-hosting", label: "API & Hosting", icon: Folder },
  { id: "other", label: "Other", icon: Folder },
];

type Service = { topic: string; title: string; format: string; focus: string; filter: Filter };

const STAGES: { name: string; services: Service[] }[] = [
  {
    name: "Core services",
    services: [
      {
        topic: "WordPress sites",
        title: "Custom WordPress sites for growing teams",
        format: "Build, launch, and maintain",
        focus: "Fast turnaround",
        filter: "wordpress",
      },
      {
        topic: "WooCommerce stores",
        title: "WooCommerce stores that convert",
        format: "Setup, optimization, and support",
        focus: "Commerce focused",
        filter: "woocommerce",
      },
      {
        topic: "GHL automation",
        title: "GHL automation systems",
        format: "Setup and workflow automation",
        focus: "Workflow focused",
        filter: "ghl",
      },
    ],
  },
  {
    name: "Supporting services",
    services: [
      {
        topic: "API",
        title: "API integration and custom endpoints",
        format: "Connect systems and data",
        focus: "Technical integration",
        filter: "api-hosting",
      },
      {
        topic: "Hosting",
        title: "Reliable hosting and performance support",
        format: "Keep your site fast and secure",
        focus: "Performance focused",
        filter: "api-hosting",
      },
      {
        topic: "Other",
        title: "Other web development needs",
        format: "Custom scope and guidance",
        focus: "Flexible scope",
        filter: "other",
      },
    ],
  },
];

const CONTEXT_NEEDED = [
  "What you’re building",
  "The problem you’re solving",
  "Any details that will help me understand scope",
];

export default function ServicesWorkspace() {
  const [filter, setFilter] = useState<Filter>("all");
  const activeLabel = FILTERS.find((item) => item.id === filter)?.label;

  return (
    <div id="services" className="flex flex-col gap-4 rounded-section bg-line p-2.5 sm:p-5">
      <div className="overflow-hidden rounded-panel bg-white">
        {/* Toolbar */}
        <div className="flex h-12.5 items-center justify-between gap-4 border-b border-line px-4 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <LogoMark className="size-5" />
            <p className="truncate text-sm font-medium text-ink">Tahir Hafeez / Web development services</p>
          </div>
          <div aria-hidden="true" className="hidden items-center gap-5 sm:flex">
            <Search strokeWidth={1.5} className="size-4 text-ink" />
            <span className="text-xs text-body">Tahir Hafeez</span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-52 shrink-0 flex-col gap-2.5 border-r border-line p-5 lg:flex">
            <p className="text-xs text-muted">Services</p>
            <ul className="flex flex-col gap-2.5">
              {FILTERS.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setFilter(id)}
                    aria-pressed={filter === id}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-2.5 rounded-[7px] p-2.5 text-left text-sm leading-tight transition-colors",
                      filter === id ? "bg-line text-brand" : "text-body hover:bg-line/50",
                    )}
                  >
                    <Icon aria-hidden="true" strokeWidth={1.5} className={cn("size-4 shrink-0", filter === id ? "text-brand" : "text-muted")} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-15">
              <p className="text-xs text-muted">Current focus</p>
              <p className="text-sm leading-[21px] text-ink">WordPress sites, WooCommerce stores, and GHL automation systems.</p>
              <Link href="/studio#services" className="text-xs text-brand hover:underline">
                View services ↗
              </Link>
            </div>
          </aside>

          {/* Services board */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 p-4 sm:p-6.25">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl leading-tight font-medium text-ink lg:text-[29px]">Services built around your goals</h2>
              <ButtonLink href={CONTACT_PATH} size="sm" className="self-start sm:self-auto">
                Start a Conversation
              </ButtonLink>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Tag active>Services</Tag>
              <Tag>{filter === "all" ? "All services" : activeLabel}</Tag>
              <span className="text-xs text-muted">Web development services</span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {STAGES.map((stage) => (
                <div key={stage.name} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between py-1.5">
                    <h3 className="text-sm font-medium text-body">{stage.name}</h3>
                    <span className="text-xs text-muted">{String(stage.services.length).padStart(2, "0")}</span>
                  </div>
                  {stage.services.map((service) => {
                    const dimmed = filter !== "all" && service.filter !== filter;
                    return (
                      <article
                        key={service.title}
                        className={cn(
                          "flex flex-col gap-3 rounded-card border border-line bg-white p-4 transition-opacity",
                          dimmed && "opacity-35",
                        )}
                      >
                        <p className="text-xs text-brand">{service.topic}</p>
                        <h4 className="text-base leading-[21px] font-medium text-ink">{service.title}</h4>
                        <p className="text-xs text-muted">{service.format}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-body">{service.focus}</span>
                          <span aria-hidden="true" className="inline-flex size-6 items-center justify-center rounded-full bg-line text-[11px] text-body">
                            TH
                          </span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Assistant */}
          <aside className="hidden w-65 shrink-0 flex-col gap-5 border-l border-line p-5 xl:flex">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-5" />
              <p className="text-base font-medium text-ink">Tahir Hafeez</p>
            </div>
            <p className="text-sm leading-[21px] text-body">
              Let’s turn your project into a clear plan with a realistic timeline and honest quote.
            </p>
            <div className="flex flex-col gap-3 rounded-card bg-line p-4">
              <p className="text-xs text-brand">What I’ll need to know</p>
              <ul className="flex flex-col gap-3">
                {CONTEXT_NEEDED.map((item) => (
                  <li key={item} className="text-sm leading-[21px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm leading-[21px] text-body">
              Suggested next step: fill out the contact form and I’ll come back with a clear plan and honest quote.
            </p>
            <Link
              href={CONTACT_PATH}
              className="flex items-center justify-between gap-3 rounded-card border border-line p-3 text-xs text-muted transition-colors hover:border-brand"
            >
              Ask Tahir about your project…
              <ArrowUp aria-hidden="true" strokeWidth={1.5} className="size-4 text-brand" />
            </Link>
          </aside>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-1.25 sm:flex-row sm:justify-between">
        <p className="text-xs text-body">One conversation. From first brief to final plan.</p>
        <p className="text-xs text-muted">Illustrative services workspace</p>
      </div>
    </div>
  );
}
