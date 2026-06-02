import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_RAILWAY_CORE_URL = "https://poseidon-core-production.up.railway.app";
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

function coreBaseUrl() {
  return (
    process.env.POSEIDON_API_URL ||
    process.env.CORE_API_URL ||
    process.env.RAILWAY_POSEIDON_CORE_URL ||
    DEFAULT_RAILWAY_CORE_URL
  ).replace(/\/$/, "");
}

function forwardHeaders(req: NextRequest) {
  const headers = new Headers();
  req.headers.forEach((value, key) => {
    if (!HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });
  const serviceKey = process.env.POSEIDON_API_KEY || process.env.INTERNAL_API_KEY;
  if (serviceKey && !headers.has("authorization")) {
    headers.set("authorization", `Bearer ${serviceKey}`);
  }
  return headers;
}

async function proxy(req: NextRequest, context: { params: { path: string[] } }) {
  const path = context.params.path.join("/");
  const target = new URL(`/api/v1/${path}`, coreBaseUrl());
  target.search = req.nextUrl.search;

  const upstream = await fetch(target, {
    method: req.method,
    headers: forwardHeaders(req),
    body: req.method === "GET" || req.method === "HEAD" ? undefined : await req.arrayBuffer(),
    cache: "no-store",
  }).catch((error) => {
    console.error("SPEAR bridge failed", error);
    return null;
  });

  if (!upstream) {
    return NextResponse.json({ error: "Poseidon backend unavailable" }, { status: 502 });
  }

  const responseHeaders = new Headers();
  upstream.headers.forEach((value, key) => {
    if (!HOP_BY_HOP_HEADERS.has(key.toLowerCase())) {
      responseHeaders.set(key, value);
    }
  });
  responseHeaders.set("Access-Control-Allow-Origin", req.headers.get("origin") || "https://strykefox.com");
  responseHeaders.set("Access-Control-Allow-Credentials", "true");

  return new NextResponse(await upstream.arrayBuffer(), {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": req.headers.get("origin") || "https://strykefox.com",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Authorization,Content-Type,X-Internal-API-Key,X-Requested-With",
    },
  });
}

export { proxy as DELETE, proxy as GET, proxy as PATCH, proxy as POST, proxy as PUT };
