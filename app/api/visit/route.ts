import { createClient } from "redis";
import { NextResponse } from "next/server";

// Global client to reuse connection in serverless
let redisClient: ReturnType<typeof createClient> | null = null;

async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL || process.env.STORAGE_URL || process.env.KV_URL
    });
    
    redisClient.on("error", (err) => console.error("Redis Client Error", err));
    
    await redisClient.connect();
  }
  return redisClient;
}

export async function GET() {
  try {
    const client = await getRedisClient();
    
    // Increment the visit counter
    const count = await client.incr("portfolio_visits");
    
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Redis Error:", error);
    return NextResponse.json({ 
      count: null, 
      error: "Connection failed. Please ensure REDIS_URL is set in Vercel.",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

export async function POST() {
  try {
    const client = await getRedisClient();
    const count = await client.get("portfolio_visits");
    return NextResponse.json({ count: parseInt(count || "0") });
  } catch (error) {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
