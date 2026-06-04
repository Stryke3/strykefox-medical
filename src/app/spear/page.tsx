"use client"
import { useState } from "react"

export default function SpearLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

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

  return (
    <main className="spear-login-shell">
      <a href="/" className="spear-login-back">
        ← STRYKEFOX MEDICAL
      </a>

      <section className="spear-login-card" aria-labelledby="spear-login-title">
        <div className="spear-login-heading">
          <div className="spear-login-eyebrow">
          EXECUTION INTELLIGENCE
          </div>
          <h1 id="spear-login-title">
          SPEAR
          </h1>
          <p className="spear-login-stack">
          POSEIDON / TRIDENT / ARIES
          </p>
          <p className="spear-login-copy">
          Dashboard access for the healthcare execution OS.
          </p>
        </div>

        <div className="spear-login-modules" aria-label="SPEAR modules">
          {["POSEIDON CORE", "TRIDENT AI", "ARIES DEPLOY"].map((label) => (
            <div key={label}>
              <span />
              <p>{label}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleLogin} className="spear-login-form">
        <div>
          <label>EMAIL</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="operator@strykefox.com"
          />
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="secure password"
          />
        </div>

        {error && (
          <p className="spear-login-error">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "ROUTING..." : "CONTINUE TO DASHBOARD →"}
        </button>
        </form>

        <p className="spear-login-footnote">
        AUTHORIZED PERSONNEL ONLY · ENCRYPTED SESSION · INTERNAL
        </p>
      </section>
    </main>
  )
}
