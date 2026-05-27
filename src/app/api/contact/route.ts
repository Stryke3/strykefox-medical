import { NextResponse } from "next/server";

const SPINE_KEYWORDS = [
  "implant","implants","spine","spinal","orthopedic","surgical device",
  "instrument","ex-im","exim","export","import","stryke-pac","strykepac",
  "nsi","northstar","north star","latam","panama","tka","knee implant",
  "device distribution","international","biologics supply",
];
const PRESS_KEYWORDS = [
  "press","media","interview","speaking","advisory","author",
  "book","candor","collateral damage","architect of leverage",
  "adam stryker","adam w stryker","personal","publishing",
];

function resolveRecipient(subject: string, inquiryType: string, message: string): string {
  const hay = `${subject} ${inquiryType} ${message}`.toLowerCase();
  if (PRESS_KEYWORDS.some(k => hay.includes(k))) return "press@adamwstryker.com";
  if (SPINE_KEYWORDS.some(k => hay.includes(k))) return "spine@strykefox.com";
  return "patients@strykefox.com";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.website) return NextResponse.json({ success: true }); // honeypot
    const { name="", email="", phone="", subject="", inquiryType="", message="", source="strykefox.com" } = body;
    if (!name || !email) return NextResponse.json({ error: "Name and email required." }, { status: 400 });

    const recipient = resolveRecipient(subject, inquiryType, message);
    const routeLabel = recipient === "spine@strykefox.com" ? "[NSI/IMPLANT]"
      : recipient === "press@adamwstryker.com" ? "[PRESS/MEDIA]" : "[PATIENT INQUIRY]";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "StrykeFox Medical <noreply@strykefox.com>",
        to: [recipient],
        reply_to: email,
        subject: `${routeLabel} ${subject || inquiryType || "New Inquiry"} — ${source}`,
        html: `<div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;">
          <h2 style="color:#060B14;border-bottom:2px solid #06B6D4;padding-bottom:8px;">${routeLabel} New Inquiry</h2>
          <p><strong>Source:</strong> ${source}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType || "—"}</p>
          <p><strong>Subject:</strong> ${subject || "—"}</p>
          <p><strong>Message:</strong> ${message || "—"}</p>
          <p style="color:#06B6D4;font-weight:bold;">Routed To: ${recipient}</p>
        </div>`,
      }),
    });
    if (!res.ok) return NextResponse.json({ error: "Mail delivery failed." }, { status: 500 });
    return NextResponse.json({ success: true, routed_to: recipient });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
