import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    version: "vNext",
    image: "https://v0-cast-personality-analyzer.vercel.app/og.png",
    buttons: [
      { label: "Analyze My Casts", action: "post" }
    ]
  });
}

