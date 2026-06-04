import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "StrykePac Ex-Im SA | StrykeFox Medical",
  description: "Compliant cross-border distribution for surgical technology, DME, biologics, and OR procurement.",
  alternates: {
    canonical: "https://strykefox.com/strykepac",
  },
};

export default function StrykePacPage() {
  return (
    <main className="strykepac-shell">
      <style>{`
        .strykepac-shell {
          min-height: 100vh;
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          background: #f8fafc;
          color: #07111f;
        }
        .strykepac-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          background: rgba(248,250,252,0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(7,17,31,0.08);
        }
        .strykepac-nav a {
          color: #07111f;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .strykepac-nav a:last-child {
          color: #2563eb;
          letter-spacing: 0.1em;
        }
        .strykepac-layout {
          min-height: 100vh;
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
        }
        .strykepac-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 8vw 72px;
        }
        .strykepac-eyebrow {
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          color: #2563eb;
          text-transform: uppercase;
          margin: 0 0 24px;
        }
        .strykepac-title {
          font-size: clamp(42px, 5vw, 76px);
          line-height: 0.98;
          letter-spacing: 0;
          font-weight: 900;
          margin: 0 0 28px;
          max-width: 760px;
        }
        .strykepac-body {
          font-size: 18px;
          line-height: 1.65;
          color: #526071;
          max-width: 620px;
          margin: 0;
        }
        .strykepac-principles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 52px;
          max-width: 720px;
        }
        .strykepac-principle {
          border-top: 2px solid #2563eb;
          padding-top: 14px;
        }
        .strykepac-principle h2 {
          font-size: 12px;
          letter-spacing: 0.12em;
          font-weight: 900;
          margin: 0 0 10px;
        }
        .strykepac-principle p {
          font-size: 13px;
          line-height: 1.55;
          color: #64748b;
          margin: 0;
        }
        .strykepac-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 3.5vw, 54px);
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(9,14,28,0.72) 54%, rgba(4,7,15,0.96) 100%),
            linear-gradient(135deg, #111827 0%, #090E1C 52%, #020617 100%);
          overflow: hidden;
        }
        .strykepac-visual::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 22%;
          z-index: 2;
          background: linear-gradient(270deg, rgba(255,255,255,0), rgba(255,255,255,0.82));
          pointer-events: none;
        }
        .strykepac-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.12)),
            radial-gradient(circle at center, rgba(255,255,255,0.08), rgba(255,255,255,0) 64%);
          pointer-events: none;
        }
        .strykepac-visual img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          max-width: 860px;
          max-height: 860px;
          object-fit: contain;
          opacity: 0.94;
          mix-blend-mode: screen;
          filter: saturate(1) contrast(1.03);
        }

        @media (max-width: 980px) {
          .strykepac-nav {
            height: auto;
            min-height: 64px;
            padding: 18px 22px;
          }
          .strykepac-layout {
            min-height: 100svh;
            display: flex;
            flex-direction: column-reverse;
          }
          .strykepac-copy {
            min-height: 54svh;
            padding: 42px 24px 64px;
          }
          .strykepac-visual {
            min-height: 46svh;
            padding: 16px;
          }
          .strykepac-visual::before {
            left: 0;
            right: 0;
            top: auto;
            bottom: 0;
            width: auto;
            height: 34%;
            background: linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.9));
          }
          .strykepac-title {
            font-size: clamp(34px, 11vw, 48px);
            margin-bottom: 22px;
          }
          .strykepac-body {
            font-size: 16px;
          }
          .strykepac-principles {
            grid-template-columns: 1fr;
            margin-top: 34px;
          }
        }

        @media (max-width: 560px) {
          .strykepac-copy {
            padding: 36px 20px 56px;
          }
          .strykepac-visual {
            min-height: 40svh;
            padding: 10px;
          }
          .strykepac-eyebrow {
            font-size: 10px;
            margin-bottom: 18px;
          }
          .strykepac-title {
            font-size: clamp(31px, 10.8vw, 42px);
          }
        }
      `}</style>

      <nav className="strykepac-nav">
        <a href="/">StrykeFox Medical</a>
        <a href="/contact">Contact</a>
      </nav>

      <section className="strykepac-layout">
        <div className="strykepac-copy">
          <p className="strykepac-eyebrow">Export & Import Infrastructure</p>
          <h1 className="strykepac-title">Surgical technology with global distribution discipline.</h1>
          <p className="strykepac-body">
            StrykePac Ex-Im SA supports compliant cross-border distribution for DME, biologics, and surgical technology. The model is built around documentation control, supplier coordination, and real OR procurement requirements.
          </p>

          <div className="strykepac-principles">
            {[
              ["CONTROL", "Documentation and movement records stay aligned from origin to destination."],
              ["COORDINATE", "Suppliers, logistics, and clinical demand move through one operating pathway."],
              ["DELIVER", "Built for regulated healthcare execution, not generic commodity shipping."],
            ].map(([label, body]) => (
              <div key={label} className="strykepac-principle">
                <h2>{label}</h2>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="strykepac-visual">
          <Image src="/images/strykepac.png" alt="StrykePac Ex-Im SA" width={900} height={900} priority />
        </div>
      </section>
    </main>
  );
}
