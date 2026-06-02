import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ServiceCheck = {
  name: string;
  target: string;
  ok: boolean;
  status: number | null;
  detail?: unknown;
};

const DEFAULTS = {
  core: "http://localhost:8001",
  trident: "http://localhost:8002",
  intake: "http://localhost:8003",
};

function serviceBaseUrl(primary: string, aliases: string[], fallback: string) {
  for (const key of [primary, ...aliases]) {
    const value = process.env[key]?.trim();
    if (value) return value.replace(/\/$/, "");
  }
  return fallback;
}

function internalHeaders() {
  const headers = new Headers();
  const serviceKey =
    process.env.INTERNAL_API_KEY ||
    process.env.POSEIDON_API_KEY ||
    process.env.TRIDENT_API_KEY ||
    process.env.INTAKE_API_KEY;
  if (serviceKey) {
    headers.set("authorization", `Bearer ${serviceKey}`);
    headers.set("x-internal-api-key", serviceKey);
  }
  return headers;
}

async function checkService(name: string, target: string, path = "/health"): Promise<ServiceCheck> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(`${target}${path}`, {
      method: "GET",
      headers: internalHeaders(),
      cache: "no-store",
      signal: controller.signal,
    });
    let detail: unknown = null;
    try {
      detail = await res.json();
    } catch {
      detail = null;
    }
    return { name, target, ok: res.ok, status: res.status, detail };
  } catch (error) {
    return {
      name,
      target,
      ok: false,
      status: null,
      detail: error instanceof Error ? error.message : "unreachable",
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  const services = {
    core: serviceBaseUrl("CORE_API_URL", ["POSEIDON_API_URL", "RAILWAY_POSEIDON_CORE_URL"], DEFAULTS.core),
    trident: serviceBaseUrl("TRIDENT_API_URL", ["TRIDENT_INTERNAL_URL", "RAILWAY_TRIDENT_URL"], DEFAULTS.trident),
    intake: serviceBaseUrl("INTAKE_API_URL", ["INTAKE_INTERNAL_URL", "RAILWAY_INTAKE_URL"], DEFAULTS.intake),
  };

  const [core, trident, intake] = await Promise.all([
    checkService("core", services.core),
    checkService("trident", services.trident),
    checkService("intake", services.intake),
  ]);
  const checks = { core, trident, intake };
  const ready = Object.values(checks).every((service) => service.ok);

  return NextResponse.json(
    {
      ready,
      target: services.core,
      services: checks,
    },
    { status: ready ? 200 : 207 },
  );
}
