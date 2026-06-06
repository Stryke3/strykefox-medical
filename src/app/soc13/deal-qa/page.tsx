import SoC13DealQA from "@/components/soc13/SoC13DealQA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoC13 — Deal Quality Assessment",
  robots: { index: false, follow: false },
};

export default function DealQAPage() {
  return (
    <main className="soc13-deal-qa-page">
      <SoC13DealQA />
    </main>
  );
}
