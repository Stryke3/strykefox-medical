"use client";

const STAGES = [
  { id: "ocr",      label: "OCR",                 color: "#6366F1" },
  { id: "intake",   label: "Intake",               color: "#0EA5E9" },
  { id: "optimize", label: "Optimize",             color: "#06B6D4" },
  { id: "trident",  label: "Trident",              color: "#8B5CF6" },
  { id: "swo",      label: "SWO",                  color: "#F59E0B" },
  { id: "addendum", label: "Addendum",             color: "#F97316" },
  { id: "sign",     label: "Sign",                 color: "#10B981" },
  { id: "tebra",    label: "Receive Tebra Packet", color: "#06B6D4" },
  { id: "deploy",   label: "Deploy Order",         color: "#3B82F6" },
  { id: "bill",     label: "Bill",                 color: "#8B5CF6" },
  { id: "pod",      label: "POD",                  color: "#10B981" },
  { id: "close",    label: "Close",                color: "#64748B" },
];

const MOCK_CASES: { id: string; patient: string; stage: string; dob: string; payer: string }[] = [];

export default function PipelineView() {
  return (
    <div>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 32,
      }}>
        <div>
          <h1 style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#0F172A",
            marginBottom: 2,
          }}>
            Pipeline
          </h1>
          <p style={{ fontSize: 13, color: "#64748B" }}>
            Case execution workflow — OCR through Close
          </p>
        </div>
        <a href="/spear/intake" style={{
          padding: "9px 18px",
          background: "#0F172A",
          color: "#FFFFFF",
          borderRadius: 6,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}>
          + New Intake
        </a>
      </div>

      {/* Stage pipeline bar */}
      <div style={{
        display: "flex",
        gap: 0,
        marginBottom: 32,
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 8,
        overflow: "hidden",
      }}>
        {STAGES.map((stage, i) => (
          <div key={stage.id} style={{
            flex: 1,
            padding: "12px 8px",
            textAlign: "center" as const,
            borderRight: i < STAGES.length - 1 ? "1px solid #E2E8F0" : "none",
            background: "#FFFFFF",
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: stage.color,
              margin: "0 auto 6px",
            }} />
            <div style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#475569",
              letterSpacing: "0.04em",
              lineHeight: 1.3,
            }}>
              {stage.label}
            </div>
            <div style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#0F172A",
              marginTop: 4,
            }}>
              {MOCK_CASES.filter(c => c.stage === stage.id).length}
            </div>
          </div>
        ))}
      </div>

      {/* Case table */}
      <div style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 8,
        overflow: "hidden",
      }}>
        <div style={{
          padding: "16px 20px",
          borderBottom: "1px solid #E2E8F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>
            Active Cases
          </span>
          <span style={{ fontSize: 12, color: "#94A3B8" }}>
            {MOCK_CASES.length} total
          </span>
        </div>

        {/* Table header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1.5fr 1.5fr 1.5fr",
          padding: "10px 20px",
          background: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
        }}>
          {["Patient", "Stage", "Payer", "DOB"].map(h => (
            <div key={h} style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#64748B",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
            }}>
              {h}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {MOCK_CASES.length === 0 && (
          <div style={{
            padding: "48px 20px",
            textAlign: "center" as const,
            color: "#94A3B8",
            fontSize: 13,
          }}>
            No active cases. Start with{" "}
            <a href="/spear/intake" style={{ color: "#06B6D4", fontWeight: 600, textDecoration: "none" }}>
              New Intake
            </a>.
          </div>
        )}

        {/* Rows */}
        {MOCK_CASES.map((c, i) => (
          <div key={c.id} style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr 1.5fr 1.5fr",
            padding: "12px 20px",
            borderBottom: i < MOCK_CASES.length - 1 ? "1px solid #F1F5F9" : "none",
            cursor: "pointer",
          }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#0F172A" }}>{c.patient}</div>
            <div>
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                color: STAGES.find(s => s.id === c.stage)?.color || "#64748B",
                background: "#F8FAFC",
                padding: "2px 8px",
                borderRadius: 4,
              }}>
                {STAGES.find(s => s.id === c.stage)?.label || c.stage}
              </span>
            </div>
            <div style={{ fontSize: 13, color: "#475569" }}>{c.payer}</div>
            <div style={{ fontSize: 13, color: "#475569" }}>{c.dob}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
