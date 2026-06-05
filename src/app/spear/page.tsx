"use client"
import { useState } from "react"

export default function SpearLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [focusedField, setFocusedField] = useState<"email" | "password" | null>(null)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("https://api.strykefox.com/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      if (res.ok) {
        const data = await res.json()
        if (data.access_token) {
          localStorage.setItem("poseidon_token", data.access_token)
          window.location.href = "https://dashboard.strykefox.com"
        } else {
          setError("Authentication failed. Check credentials.")
        }
      } else {
        setError("Invalid credentials or service unavailable.")
      }
    } catch {
      setError("Unable to reach SPEAR. Check connection.")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (field: "email" | "password"): React.CSSProperties => ({
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${focusedField === field ? "rgba(100,180,255,0.6)" : "rgba(255,255,255,0.15)"}`,
    borderRadius: 8,
    color: "#fff",
    padding: "12px 16px",
    font: "inherit",
    outline: "none",
  })

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        background: "#000",
        fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
      }}
    >
      <img
        src="/images/spear1.png"
        alt="Trident Intelligence SPEAR"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div
        aria-labelledby="spear-login-title"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 420,
          maxWidth: "calc(100vw - 40px)",
          boxSizing: "border-box",
          background: "rgba(5, 7, 11, 0.45)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 16,
          padding: "clamp(32px, 7vw, 48px) clamp(24px, 6vw, 40px)",
          boxShadow: "0 8px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "0.68rem",
              fontWeight: 900,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
          EXECUTION INTELLIGENCE
          </div>
          <h1
            id="spear-login-title"
            style={{
              margin: "0 0 10px",
              color: "#fff",
              fontSize: "clamp(2.5rem, 10vw, 4.15rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: 0,
            }}
          >
          SPEAR
          </h1>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.68rem",
              fontWeight: 900,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
          POSEIDON / TRIDENT / ARIES
          </p>
          <p
            style={{
              margin: "16px auto 0",
              maxWidth: 340,
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.94rem",
              lineHeight: 1.55,
            }}
          >
          Dashboard access for the healthcare execution OS.
          </p>
        </div>

        <div
          aria-label="SPEAR modules"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 12,
            marginBottom: 28,
          }}
        >
          {["POSEIDON CORE", "TRIDENT AI", "ARIES DEPLOY"].map((label) => (
            <div key={label} style={{ display: "grid", justifyItems: "center", gap: 8, minWidth: 0, textAlign: "center" }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#64b4ff",
                  boxShadow: "0 0 12px rgba(100,180,255,0.72)",
                }}
              />
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.62)",
                  fontSize: "0.58rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={handleLogin} style={{ display: "grid", gap: 16 }}>
        <div>
          <label
            style={{
              display: "block",
              marginBottom: 8,
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.68rem",
              fontWeight: 900,
              letterSpacing: "0.14em",
            }}
          >
            EMAIL
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            required
            placeholder="operator@strykefox.com"
            style={inputStyle("email")}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              marginBottom: 8,
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.68rem",
              fontWeight: 900,
              letterSpacing: "0.14em",
            }}
          >
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField(null)}
            required
            placeholder="secure password"
            style={inputStyle("password")}
          />
        </div>

        {error && (
          <p style={{ margin: 0, color: "#fca5a5", fontSize: "0.82rem", textAlign: "center" }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            minHeight: 50,
            border: 0,
            borderRadius: 8,
            background: loading ? "rgba(37,99,235,0.55)" : "#2563eb",
            color: "#fff",
            fontSize: "0.76rem",
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "ROUTING..." : "CONTINUE TO DASHBOARD →"}
        </button>
        </form>

        <p
          style={{
            margin: "28px 0 0",
            color: "rgba(255,255,255,0.62)",
            fontSize: "0.66rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textAlign: "center",
          }}
        >
        AUTHORIZED PERSONNEL ONLY · ENCRYPTED SESSION · INTERNAL
        </p>
      </div>
    </div>
  )
}
