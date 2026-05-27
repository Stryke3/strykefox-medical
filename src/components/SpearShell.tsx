"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const NAV = [
  { label: "Cases",     href: "/spear/cases"      },
  { label: "Intake",    href: "/spear/intake"     },
  { label: "Trident",   href: "/spear/trident"    },
  { label: "Poseidon",  href: "/spear/poseidon"   },
  { label: "Revenue",   href: "/spear/revenue"    },
  { label: "Settings",  href: "/spear/settings"   },
];

export default function SpearShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#F8FAFC",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>

      {/* SIDEBAR */}
      <div style={{
        width: 200,
        minWidth: 200,
        background: "#FFFFFF",
        borderRight: "1px solid #E2E8F0",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 50,
      }}>
        {/* Brand */}
        <div style={{
          padding: "20px 20px 16px",
          borderBottom: "1px solid #E2E8F0",
        }}>
          <div style={{
            fontWeight: 800,
            fontSize: 15,
            color: "#0F172A",
            letterSpacing: "0.06em",
          }}>
            SPEAR
          </div>
          <div style={{
            fontSize: 9,
            letterSpacing: "0.18em",
            color: "#06B6D4",
            textTransform: "uppercase" as const,
            marginTop: 2,
          }}>
            StrykeFox Medical
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map(({ label, href }) => {
            const active = path === href || path.startsWith(href + "/");
            return (
              <Link key={href} href={href} style={{
                display: "block",
                padding: "8px 12px",
                borderRadius: 5,
                background: active ? "#F0FDFF" : "transparent",
                color: active ? "#06B6D4" : "#475569",
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                textDecoration: "none",
                borderLeft: active ? "2px solid #06B6D4" : "2px solid transparent",
              }}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Sign out */}
        <div style={{ padding: "12px 10px", borderTop: "1px solid #E2E8F0" }}>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            style={{
              width: "100%",
              padding: "8px 12px",
              background: "transparent",
              border: "none",
              borderRadius: 5,
              color: "#94A3B8",
              fontSize: 13,
              cursor: "pointer",
              textAlign: "left" as const,
            }}
          >
            Sign out
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{
        marginLeft: 200,
        flex: 1,
        padding: "32px 40px",
        minHeight: "100vh",
        background: "#F8FAFC",
      }}>
        {children}
      </div>
    </div>
  );
}
