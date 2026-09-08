"use client";

import { FormEvent, useMemo, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const attribution = useMemo(() => {
    if (typeof window === "undefined") return {};
    const p = new URLSearchParams(window.location.search);
    return {
      source: p.get("utm_source") || p.get("source") || "direct",
      medium: p.get("utm_medium") || "",
      campaign: p.get("utm_campaign") || "",
      content: p.get("utm_content") || "",
      referrer: document.referrer || "",
      landing_page: window.location.pathname + window.location.search,
    };
  }, []);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), ...attribution }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not join the list.");
      setState("success");
      setMessage("You’re on the founding list. We’ll be in touch when private beta opens.");
      setEmail("");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Could not join the list.");
    }
  }

  return (
    <form className="mx-auto mt-8 max-w-2xl" onSubmit={submit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="waitlist-email">Email address</label>
        <input
          id="waitlist-email"
          className="email-input min-w-0 flex-1"
          type="email"
          required
          autoComplete="email"
          placeholder="you@yourshop.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="primary-button whitespace-nowrap" disabled={state === "loading"} type="submit">
          {state === "loading" ? "Joining…" : "Join early access"}
          <span aria-hidden>→</span>
        </button>
      </div>
      <p className={state === "error" ? "mt-3 text-sm text-red-300/80" : "mt-3 text-sm text-white/34"}>
        {message || "Founding-list members get first access to the private beta."}
      </p>
    </form>
  );
}
