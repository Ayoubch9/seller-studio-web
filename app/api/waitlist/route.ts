import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceKey) {
      return NextResponse.json(
        {
          error:
            "Waitlist storage is not configured yet. Add the Supabase environment variables from .env.example.",
        },
        { status: 503 }
      );
    }

    const payload = {
      email,
      source: clean(body.source, 80) || "direct",
      medium: clean(body.medium, 80),
      campaign: clean(body.campaign, 120),
      content: clean(body.content, 120),
      referrer: clean(body.referrer, 500),
      landing_page: clean(body.landing_page, 500),
      status: "waiting",
    };

    const response = await fetch(`${url}/rest/v1/waitlist_signups`, {
      method: "POST",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Supabase waitlist error:", detail);

      return NextResponse.json(
        { error: "We could not save your signup. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}

function clean(value: unknown, max: number) {
  return typeof value === "string"
    ? value.trim().slice(0, max) || null
    : null;
}