import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const wordpressUrl = process.env.WORDPRESS_API_URL;
  if (!wordpressUrl) {
    return NextResponse.json(
      { success: false, message: "Newsletter signup is not configured." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(`${wordpressUrl}/wp-json/th/v1/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const json = await res.json();
    return NextResponse.json(json, { status: res.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Could not reach the server. Please try again later." },
      { status: 502 },
    );
  }
}
