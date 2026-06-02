import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_INTAKE_URL = "http://localhost:8003";
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

function intakeBaseUrl() {
  return (
    process.env.INTAKE_API_URL ||
    process.env.INTAKE_INTERNAL_URL ||
    process.env.RAILWAY_INTAKE_URL ||
    DEFAULT_INTAKE_URL
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
    process.env.INTAKE_API_KEY ||
    process.env.INTERNAL_API_KEY ||
    process.env.POSEIDON_API_KEY;
  if (serviceKey) {
    headers.set("authorization", `Bearer ${serviceKey}`);
    headers.set("x-internal-api-key", serviceKey);
  }
  return headers;
}

export async function POST(req: NextRequest) {
  const target = new URL("/api/v1/intake/parse-document", intakeBaseUrl());

  const upstream = await fetch(target, {
    method: "POST",
    headers: forwardHeaders(req),
    body: await req.arrayBuffer(),
    cache: "no-store",
  }).catch((error) => {
    console.error("SPEAR Intake bridge failed", error);
    return null;
  });

  if (!upstream) {
    return NextResponse.json({ error: "Intake backend unavailable" }, { status: 502 });
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
