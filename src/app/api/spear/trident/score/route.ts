import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_TRIDENT_URL = "http://localhost:8002";
const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
  "content-length",
]);

function tridentBaseUrl() {
  return (
    process.env.TRIDENT_API_URL ||
    process.env.TRIDENT_INTERNAL_URL ||
    process.env.RAILWAY_TRIDENT_URL ||
    DEFAULT_TRIDENT_URL
  ).replace(/\/$/, "");
}

function forwardHeaders(req: NextRequest) {
  const headers = new Headers();
  req.headers.forEach((value, key) => {
    if (!HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  const serviceKey =
    process.env.TRIDENT_API_KEY ||
    process.env.INTERNAL_API_KEY ||
    process.env.POSEIDON_API_KEY;
  if (serviceKey) {
    headers.set("authorization", `Bearer ${serviceKey}`);
    headers.set("x-internal-api-key", serviceKey);
  }
  headers.set("content-type", "application/json");
  return headers;
}

export async function POST(req: NextRequest) {
  const target = new URL("/api/v1/trident/score", tridentBaseUrl());

  const upstream = await fetch(target, {
    method: "POST",
    headers: forwardHeaders(req),
    body: await req.text(),
    cache: "no-store",
  }).catch((error) => {
    console.error("SPEAR Trident bridge failed", error);
    return null;
  });

  if (!upstream) {
    return NextResponse.json({ error: "Trident backend unavailable" }, { status: 502 });
  }

  const responseHeaders = new Headers();
  upstream.headers.forEach((value, key) => {
    if (!HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
      responseHeaders.set(key, value);
    }
  });

  return new NextResponse(await upstream.arrayBuffer(), {
    status: upstream.status,
    headers: responseHeaders,
  });
}

