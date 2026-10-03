import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const attending = body.attending;

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { ok: false, error: "Please enter your full name." },
        { status: 400 },
      );
    }

    if (attending !== "yes" && attending !== "no") {
      return NextResponse.json(
        { ok: false, error: "Please select your attendance." },
        { status: 400 },
      );
    }

    const res = await fetch(process.env.APPS_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name,
        attending,
        secret: process.env.APPS_SCRIPT_SECRET,
      }),
      redirect: "follow",
    });

    const result = await res.json();

    if (!result.ok) {
      throw new Error(result.error || "Failed to save RSVP");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
