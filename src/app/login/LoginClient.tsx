"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginClient() {
  const [email, setEmail] = useState("admin@strykefox.com");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) {
      router.push("/spear/cases");
    } else {
      setError("Invalid credentials.");
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 400,
        padding: "48px 40px",
        border: "1px solid #E2E8F0",
        borderRadius: 8,
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}>

        {/* Logo */}
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "'Rajdhani', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#0F172A",
            letterSpacing: "0.04em",
          }}>
            SPEAR
          </div>
          <div style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            color: "#06B6D4",
            textTransform: "uppercase" as const,
            marginTop: 2,
          }}>
            StrykeFox Medical
          </div>
        </div>

        <h1 style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#0F172A",
          marginBottom: 6,
        }}>
          Sign in
        </h1>
        <p style={{
          fontSize: 13,
          color: "#64748B",
          marginBottom: 28,
        }}>
          Operator access to the execution platform.
        </p>

        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <div style={{ marginBottom: 16 }}>
            <label style={{
              display: "block",
              fontSize: 12,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 6,
              letterSpacing: "0.02em",
            }}>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #CBD5E1",
                borderRadius: 6,
                fontSize: 14,
                color: "#0F172A",
                background: "#FFFFFF",
                outline: "none",
                boxSizing: "border-box" as const,
              }}
            />
          </div>

          {/* PASSWORD */}
          <div style={{ marginBottom: 24 }}>
            <label style={{
              display: "block",
              fontSize: 12,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 6,
              letterSpacing: "0.02em",
            }}>
              Password
            </label>
            <div style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #CBD5E1",
              borderRadius: 6,
              background: "#FFFFFF",
              padding: "10px 12px",
            }}>
              <input
                type={showPw ? "text" : "password"}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  color: "#0F172A",
                  background: "transparent",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#94A3B8",
                  fontSize: 12,
                  padding: 0,
                }}
              >
                {showPw ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {error && (
            <p style={{
              fontSize: 12,
              color: "#EF4444",
              marginBottom: 14,
              padding: "8px 12px",
              background: "#FEF2F2",
              borderRadius: 4,
            }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "11px 0",
              background: loading ? "#94A3B8" : "#0F172A",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.04em",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Signing in..." : "Sign in →"}
          </button>
        </form>
      </div>
    </div>
  );
}
