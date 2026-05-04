import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Increment the visit counter
    // We use a simple key 'portfolio_visits'
    const count = await kv.incr("portfolio_visits");
    
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error updating visit count:", error);
    // Fallback if KV is not configured or fails
    return NextResponse.json({ count: null, error: "KV not configured" }, { status: 500 });
  }
}

export async function POST() {
  // We can also use POST to get the current count without incrementing
  try {
    const count = await kv.get("portfolio_visits");
    return NextResponse.json({ count: count || 0 });
  } catch (error) {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
