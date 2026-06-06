"use client";

import { useState } from "react";

const CRITERIA = [
  {
    id: 1,
    code: "FIN",
    label: "Financial Quality",
    description: "Revenue trajectory, gross margin stability, EBITDA defensibility, and absence of hockey-stick projections.",
    questions: [
      "Are 3 years of historical financials available and internally consistent?",
      "Is EBITDA margin stable or improving YoY?",
      "Does revenue growth reflect organic drivers vs. one-time events?",
      "Are projections within +/-20% of historical run-rate trajectory?",
    ],
  },
  {
    id: 2,
    code: "NRM",
    label: "Normalization & Add-Backs",
    description: "Quality and defensibility of EBITDA adjustments. Add-back dependency is a red flag.",
    questions: [
      "What % of normalized EBITDA derives from add-backs?",
      "Are add-backs one-time, documented, and verifiable?",
      "Does adjusted EBITDA differ materially from stated EBITDA?",
      "Can each add-back survive lender scrutiny?",
    ],
  },
  {
    id: 3,
    code: "VAL",
    label: "Valuation & Entry Multiple",
    description: "Entry multiple relative to sector comps, DSCR coverage at ask price, and MOIC/IRR viability.",
    questions: [
      "What is the entry multiple on TTM EBITDA?",
      "Does DSCR exceed 1.25x at ask price with senior debt?",
      "Is there a credible path to 2.0x+ MOIC at exit?",
      "Is the ask price defensible relative to sector comps?",
    ],
  },
  {
    id: 4,
    code: "STR",
    label: "Deal Structure",
    description: "Asset vs. stock sale, earnout mechanics, rollover equity alignment, and collateral position.",
    questions: [
      "Is the structure asset or stock sale, and is it optimal for risk allocation?",
      "Is there seller rollover or earnout creating post-close alignment?",
      "Is collateral fully specified and first-priority?",
      "Are there hidden liabilities or contingent obligations in the structure?",
    ],
  },
  {
    id: 5,
    code: "CAP",
    label: "Capital Structure & Financing",
    description: "Debt capacity, lender appetite, sources & uses integrity, and equity check sizing.",
    questions: [
      "Has a committed financing source been identified?",
      "Is the equity contribution defensible relative to deal size?",
      "Does the sources & uses balance with no unsupported line items?",
      "Is the debt service covenant achievable under a downside scenario?",
    ],
  },
  {
    id: 6,
    code: "REV",
    label: "Revenue Durability",
    description: "Customer concentration, contract vs. at-will revenue, payer mix, and churn risk.",
    questions: [
      "Is any single customer >20% of revenue?",
      "What % of revenue is contracted vs. at-will or relationship-dependent?",
      "Is the payer or customer mix stable and diversifiable?",
      "Has revenue been stress-tested for loss of top 2 customers?",
    ],
  },
  {
    id: 7,
    code: "OPS",
    label: "Operational Infrastructure",
    description: "Systems, staffing depth, process documentation, and ability to operate post-seller exit.",
    questions: [
      "Is there documented operational process independent of the owner(s)?",
      "Are key systems transferable and functional?",
      "Can the business operate at 80%+ capacity without the seller in 90 days?",
      "Are staffing levels appropriate for revenue scale?",
    ],
  },
  {
    id: 8,
    code: "KEY",
    label: "Key Person & Transition Risk",
    description: "Seller dependency, management depth, and transition services adequacy.",
    questions: [
      "How much revenue or relationship capital is tied to the seller personally?",
      "Is there a second-tier management layer capable of continuity?",
      "Is a TSA structured with adequate duration and scope?",
      "Are key employee retention mechanisms in place pre-close?",
    ],
  },
  {
    id: 9,
    code: "REG",
    label: "Regulatory & Compliance",
    description: "Licensing, CPOM constraints, billing compliance, and sector-specific regulatory exposure.",
    questions: [
      "Are all required licenses, certifications, and accreditations current?",
      "Are there CPOM, anti-kickback, or Stark Law constraints on the structure?",
      "Is the billing and coding history clean with no known audits or recoupments?",
      "Are there open regulatory investigations, consent decrees, or corrective action plans?",
    ],
  },
  {
    id: 10,
    code: "LGL",
    label: "Legal & Litigation Exposure",
    description: "Pending litigation, IP ownership, contract assignability, and indemnification architecture.",
    questions: [
      "Are there any pending or threatened legal actions material to value?",
      "Is litigation exposure fully carved out or indemnified in the deal structure?",
      "Are key contracts assignable without consent or with manageable consent requirements?",
      "Is IP ownership clean and not dependent on departing personnel?",
    ],
  },
  {
    id: 11,
    code: "MKT",
    label: "Market & Competitive Position",
    description: "TAM, competitive moat, reimbursement or pricing risk, and defensibility of market position.",
    questions: [
      "Does the business operate in a growing or stable addressable market?",
      "Is there a defensible competitive position?",
      "Is pricing or reimbursement subject to near-term compression risk?",
      "Are there new entrants or substitutes that threaten the revenue model?",
    ],
  },
  {
    id: 12,
    code: "STG",
    label: "Strategic Fit & Platform Value",
    description: "Alignment with SoC13/DAC/SFM platform thesis, bolt-on potential, and optionality created.",
    questions: [
      "Does this asset extend or compound an existing platform capability?",
      "Can SFM or an affiliated entity serve as an operating/purchasing arm post-close?",
      "Are there identifiable bolt-on or tuck-in targets in the same vertical?",
      "Does the deal create optionality that exceeds the standalone financial return?",
    ],
  },
  {
    id: 13,
    code: "CIM",
    label: "CIM & Broker Credibility",
    description: "Quality, consistency, and transparency of deal materials. CIM credibility issues are signal, not noise.",
    questions: [
      "Are financials in the CIM internally consistent with no reconciliation gaps?",
      "Are there copy-paste errors, mismatched figures, or unsupported claims?",
      "Is the broker representing the deal credibly and responsively?",
      "Has the seller's narrative been validated against actual financial data?",
    ],
  },
];

const CYAN = "#06B6D4";
const DEEP_NAVY = "#060B14";
const GLASS_NAVY = "rgba(6, 11, 20, 0.8)";
const TEXT_PRIMARY = "#F6FBFF";
const TEXT_SECONDARY = "#A9B8C7";
const TEXT_MUTED = "#6F8192";
const SCORE_LABELS = ["", "Critical Risk", "High Risk", "Moderate Risk", "Acceptable", "Strong"];
const SCORE_COLORS = ["", "#EF4444", "#F97316", "#F59E0B", CYAN, "#22D3EE"];
const SCORE_BG = [
  "",
  "rgba(239, 68, 68, 0.12)",
  "rgba(249, 115, 22, 0.12)",
  "rgba(245, 158, 11, 0.12)",
  "rgba(6, 182, 212, 0.12)",
  "rgba(34, 211, 238, 0.14)",
];

export default function SoC13DealQA() {
  const [dealName, setDealName] = useState("");
  const [vehicle, setVehicle] = useState("SoC13");
  const [scores, setScores] = useState<Record<number, number>>({});
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [activeId, setActiveId] = useState<number | null>(null);

  const setScore = (id: number, val: number) => setScores((s) => ({ ...s, [id]: val }));
  const setNote = (id: number, val: string) => setNotes((n) => ({ ...n, [id]: val }));

  const totalScored = Object.keys(scores).length;
  const avgScore =
    totalScored > 0
      ? (Object.values(scores).reduce((a, b) => a + b, 0) / totalScored).toFixed(2)
      : null;

  const getVerdict = (avg: string | null) => {
    if (!avg) return null;
    const n = parseFloat(avg);
    if (n >= 4.5) return { label: "PROCEED - HIGH CONFIDENCE", color: "#22D3EE" };
    if (n >= 3.8) return { label: "PROCEED WITH CONDITIONS", color: CYAN };
    if (n >= 3.0) return { label: "CONDITIONAL - FURTHER DD REQUIRED", color: "#F59E0B" };
    if (n >= 2.0) return { label: "HIGH RISK - RESTRUCTURE OR PASS", color: "#F97316" };
    return { label: "PASS - DO NOT ADVANCE", color: "#EF4444" };
  };

  const verdict = getVerdict(avgScore);

  return (
    <div
      style={{
        minHeight: "100svh",
        background: DEEP_NAVY,
        color: TEXT_PRIMARY,
        fontFamily: "var(--font-inter), 'Inter', sans-serif",
        padding: "0",
      }}
    >
      <div
        style={{
          background: GLASS_NAVY,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${CYAN}`,
          padding: "32px 40px 24px",
          position: "relative",
          overflow: "clip",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(6,182,212,0.05) 40px, rgba(6,182,212,0.05) 41px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "linear-gradient(135deg, #06B6D4, #22D3EE)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "bold",
              color: DEEP_NAVY,
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              flexShrink: 0,
            }}
          >
            XIII
          </div>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "4px", color: CYAN, textTransform: "uppercase", marginBottom: "4px", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
              SoC13 Acquisition Intelligence
            </div>
            <div style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "1px", color: TEXT_PRIMARY, fontFamily: "var(--font-syne), 'Syne', sans-serif" }}>
              13-Point Deal Quality Assessment
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label style={{ fontSize: "10px", letterSpacing: "3px", color: CYAN, display: "block", marginBottom: "6px", textTransform: "uppercase", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
              Deal / Target Name
            </label>
            <input
              value={dealName}
              onChange={(e) => setDealName(e.target.value)}
              placeholder="e.g. Acme DME Corp"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.32)",
                color: TEXT_PRIMARY,
                padding: "8px 12px",
                fontSize: "14px",
                width: "100%",
                boxSizing: "border-box",
                fontFamily: "inherit",
                outline: "none",
              }}
            />
          </div>
          <div style={{ minWidth: "160px" }}>
            <label style={{ fontSize: "10px", letterSpacing: "3px", color: CYAN, display: "block", marginBottom: "6px", textTransform: "uppercase", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
              Vehicle
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.32)",
                color: TEXT_PRIMARY,
                padding: "8px 12px",
                fontSize: "14px",
                fontFamily: "inherit",
                outline: "none",
                width: "100%",
              }}
            >
              <option>SoC13</option>
              <option>Dark Alpha Capital</option>
              <option>SFM</option>
              <option>Other</option>
            </select>
          </div>
          <div style={{ minWidth: "160px" }}>
            <label style={{ fontSize: "10px", letterSpacing: "3px", color: CYAN, display: "block", marginBottom: "6px", textTransform: "uppercase", fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
              Date
            </label>
            <input
              type="date"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.32)",
                color: TEXT_PRIMARY,
                padding: "8px 12px",
                fontSize: "14px",
                fontFamily: "inherit",
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
                colorScheme: "dark",
              }}
            />
          </div>
        </div>
      </div>

      {totalScored > 0 && (
        <div
          style={{
            background: GLASS_NAVY,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(6,182,212,0.24)",
            padding: "16px 40px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: TEXT_MUTED, textTransform: "uppercase", marginBottom: "4px" }}>
              Criteria Scored
            </div>
            <div style={{ fontSize: "22px", color: CYAN, fontWeight: "bold", fontFamily: "var(--font-syne), 'Syne', sans-serif" }}>
              {totalScored} <span style={{ fontSize: "14px", color: TEXT_MUTED }}>/ 13</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: TEXT_MUTED, textTransform: "uppercase", marginBottom: "4px" }}>
              Composite Score
            </div>
            <div style={{ fontSize: "22px", color: TEXT_PRIMARY, fontWeight: "bold", fontFamily: "var(--font-syne), 'Syne', sans-serif" }}>
              {avgScore} <span style={{ fontSize: "14px", color: TEXT_MUTED }}>/ 5.00</span>
            </div>
          </div>
          {verdict && (
            <div style={{ background: `${verdict.color}18`, border: `1px solid ${verdict.color}55`, padding: "8px 20px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: TEXT_MUTED, textTransform: "uppercase", marginBottom: "2px" }}>
                Preliminary Verdict
              </div>
              <div style={{ fontSize: "13px", color: verdict.color, fontWeight: "bold", letterSpacing: "1px", fontFamily: "var(--font-syne), 'Syne', sans-serif" }}>{verdict.label}</div>
            </div>
          )}
        </div>
      )}

      <div style={{ padding: "24px 40px", maxWidth: "1100px" }}>
        {CRITERIA.map((c) => {
          const isOpen = activeId === c.id;
          const score = scores[c.id];
          const note = notes[c.id] || "";

          return (
            <div
              key={c.id}
              style={{
                marginBottom: "10px",
                border: `1px solid ${score ? SCORE_COLORS[score] + "66" : "rgba(6,182,212,0.18)"}`,
                background: score ? SCORE_BG[score] : GLASS_NAVY,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "all 0.2s ease",
              }}
            >
              <div
                onClick={() => setActiveId(isOpen ? null : c.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "14px 20px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    flexShrink: 0,
                    background: score ? SCORE_COLORS[score] : "rgba(6,182,212,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: score ? DEEP_NAVY : CYAN,
                    fontFamily: "monospace",
                  }}
                >
                  {String(c.id).padStart(2, "0")}
                </div>

                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "10px", letterSpacing: "3px", color: TEXT_MUTED, marginRight: "10px", fontFamily: "monospace" }}>{c.code}</span>
                  <span style={{ fontSize: "14px", color: TEXT_PRIMARY, fontWeight: "bold", fontFamily: "var(--font-syne), 'Syne', sans-serif" }}>{c.label}</span>
                  {!isOpen && <span style={{ fontSize: "12px", color: TEXT_MUTED, marginLeft: "12px" }}>{c.description.substring(0, 60)}...</span>}
                </div>

                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  {[1, 2, 3, 4, 5].map((v) => (
                    <div
                      key={v}
                      onClick={(e) => {
                        e.stopPropagation();
                        setScore(c.id, v);
                      }}
                      style={{
                        width: "28px",
                        height: "28px",
                        background: score === v ? SCORE_COLORS[v] : "rgba(255,255,255,0.05)",
                        border: `1px solid ${score === v ? SCORE_COLORS[v] : "rgba(6,182,212,0.34)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: score === v ? DEEP_NAVY : TEXT_SECONDARY,
                        transition: "all 0.15s",
                      }}
                    >
                      {v}
                    </div>
                  ))}
                </div>

                <div style={{ minWidth: "110px", textAlign: "right", fontSize: "11px", color: score ? SCORE_COLORS[score] : TEXT_MUTED, letterSpacing: "1px" }}>
                  {score ? SCORE_LABELS[score].toUpperCase() : "UNSCORED"}
                </div>

                <div style={{ color: TEXT_MUTED, fontSize: "12px", marginLeft: "8px" }}>{isOpen ? "▲" : "▼"}</div>
              </div>

              {isOpen && (
                <div style={{ padding: "0 20px 20px 64px", borderTop: "1px solid rgba(6,182,212,0.14)" }}>
                  <p style={{ fontSize: "13px", color: TEXT_SECONDARY, marginTop: "14px", marginBottom: "14px", fontStyle: "italic", lineHeight: "1.6" }}>{c.description}</p>
                  <div style={{ marginBottom: "14px" }}>
                    <div style={{ fontSize: "10px", letterSpacing: "3px", color: CYAN, marginBottom: "10px", textTransform: "uppercase" }}>
                      Diligence Checkpoints
                    </div>
                    {c.questions.map((q, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "7px", alignItems: "flex-start" }}>
                        <div style={{ color: CYAN, fontSize: "11px", marginTop: "2px", flexShrink: 0 }}>◆</div>
                        <div style={{ fontSize: "13px", color: TEXT_SECONDARY, lineHeight: "1.5" }}>{q}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", letterSpacing: "3px", color: CYAN, marginBottom: "8px", textTransform: "uppercase" }}>
                      Notes / Findings
                    </div>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(c.id, e.target.value)}
                      placeholder="Record key findings, red flags, or supporting data..."
                      rows={3}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "rgba(0,0,0,0.28)",
                        border: "1px solid rgba(6,182,212,0.28)",
                        color: TEXT_PRIMARY,
                        padding: "10px 12px",
                        fontSize: "13px",
                        fontFamily: "inherit",
                        resize: "vertical",
                        outline: "none",
                        lineHeight: "1.6",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ padding: "0 40px 20px" }}>
        <div style={{ background: GLASS_NAVY, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(6,182,212,0.18)", padding: "16px 24px", display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ fontSize: "10px", letterSpacing: "3px", color: CYAN, textTransform: "uppercase" }}>Score Scale</div>
          {[1, 2, 3, 4, 5].map((v) => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "18px", height: "18px", background: SCORE_COLORS[v] }} />
              <span style={{ fontSize: "12px", color: TEXT_SECONDARY }}>
                {v} - {SCORE_LABELS[v]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {totalScored === 13 && verdict && avgScore && (
        <div style={{ padding: "0 40px 40px" }}>
          <div style={{ background: `${verdict.color}12`, border: `2px solid ${verdict.color}`, padding: "24px 32px", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: verdict.color, textTransform: "uppercase", marginBottom: "8px" }}>
              Final Assessment - {dealName || "Unnamed Deal"} | {vehicle}
            </div>
            <div style={{ fontSize: "28px", color: verdict.color, fontWeight: "bold", letterSpacing: "2px", marginBottom: "12px", fontFamily: "var(--font-syne), 'Syne', sans-serif" }}>{verdict.label}</div>
            <div style={{ fontSize: "13px", color: TEXT_SECONDARY, lineHeight: "1.7" }}>
              Composite score: <strong style={{ color: TEXT_PRIMARY }}>{avgScore} / 5.00</strong> across all 13 criteria.
              {parseFloat(avgScore) < 3.0 && " Material risks identified across multiple dimensions. Do not advance without structural remediation."}
              {parseFloat(avgScore) >= 3.0 && parseFloat(avgScore) < 3.8 && " Conditional path forward. Key risks must be resolved or priced into structure before LOI."}
              {parseFloat(avgScore) >= 3.8 && " Deal quality supports advancement. Proceed to formal DD and LOI structuring."}
            </div>
          </div>
        </div>
      )}

      <div style={{ padding: "0 40px 40px", fontSize: "10px", color: TEXT_MUTED, letterSpacing: "2px", textTransform: "uppercase" }}>
        SoC13 Acquisition Intelligence - Confidential Internal Use Only
      </div>
    </div>
  );
}
