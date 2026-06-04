type Metric = {
  label: string;
  value: string;
  tone?: string;
};

type Row = {
  left: string;
  right: string;
  meta: string;
  status: string;
};

type SpearModuleSurfaceProps = {
  title: string;
  eyebrow: string;
  body: string;
  metrics: Metric[];
  rows: Row[];
  primaryAction: string;
};

export default function SpearModuleSurface({
  title,
  eyebrow,
  body,
  metrics,
  rows,
  primaryAction,
}: SpearModuleSurfaceProps) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-start", marginBottom: 28 }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.16em", color: "#06B6D4", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
            {eyebrow}
          </p>
          <h1 style={{ fontSize: 30, lineHeight: 1.05, fontWeight: 800, color: "#0F172A", marginBottom: 10 }}>
            {title}
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: "#64748B", maxWidth: 720 }}>
            {body}
          </p>
        </div>
        <button style={{
          flexShrink: 0,
          border: "none",
          borderRadius: 8,
          background: "#0F172A",
          color: "#FFFFFF",
          padding: "11px 16px",
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
        }}>
          {primaryAction}
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, marginBottom: 24 }}>
        {metrics.map((metric) => (
          <div key={metric.label} style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 12,
            padding: 18,
          }}>
            <p style={{ fontSize: 11, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
              {metric.label}
            </p>
            <p style={{ fontSize: 26, fontWeight: 800, color: metric.tone || "#0F172A" }}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        overflow: "hidden",
      }}>
        {rows.map((row, index) => (
          <div key={`${row.left}-${row.right}`} style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr auto",
            gap: 16,
            alignItems: "center",
            padding: "16px 18px",
            borderTop: index === 0 ? "none" : "1px solid #E2E8F0",
          }}>
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>{row.left}</p>
              <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 3 }}>{row.meta}</p>
            </div>
            <p style={{ fontSize: 13, color: "#475569" }}>{row.right}</p>
            <span style={{
              display: "inline-flex",
              width: "fit-content",
              borderRadius: 999,
              background: "#F0FDFF",
              color: "#0891B2",
              padding: "5px 9px",
              fontSize: 11,
              fontWeight: 700,
            }}>
              {row.status}
            </span>
            <a href="#" style={{ fontSize: 12, color: "#2563EB", fontWeight: 700, textDecoration: "none" }}>Open</a>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          div[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="1.2fr 1fr 1fr auto"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
