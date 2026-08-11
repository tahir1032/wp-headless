"use client";

import { useState, type FormEvent } from "react";

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

export function useNewsletterSubscribe() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this (visually hidden field below).
    if (data.get("website")) {
      setStatus({ state: "success", message: "Thanks for subscribing!" });
      form.reset();
      return;
    }

    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("dzEmail") }),
      });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus({ state: "success", message: json.message || "Thanks for subscribing!" });
        form.reset();
      } else {
        setStatus({ state: "error", message: json.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  }

  return { status, handleSubmit };
}
