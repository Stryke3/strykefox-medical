const ENV_ALIASES: Record<string, string[]> = {
  POSEIDON_API_URL: ["CORE_API_URL"],
}

function isDisallowedHost(value: string) {
  return /(^|:\/\/)(localhost|127\.0\.0\.1)(:|\/|$)/i.test(value)
}

function isProductionRuntime() {
  return (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PHASE !== "phase-production-build"
  )
}

export function getRequiredEnv(name: string): string {
  const candidates = [name, ...(ENV_ALIASES[name] || [])]
  for (const candidate of candidates) {
    const value = process.env[candidate]?.trim()
    if (value) return value
  }
  throw new Error(`Missing required environment variable: ${candidates.join(" or ")}`)
}

export function getServiceBaseUrl(name: string): string {
  const value = getRequiredEnv(name).replace(/\/$/, "")
  if (isProductionRuntime() && isDisallowedHost(value)) {
    throw new Error(`Environment variable ${name} cannot use localhost in production.`)
  }
  return value
}
