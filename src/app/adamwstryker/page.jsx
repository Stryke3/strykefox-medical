import VaultPage from "./VaultPage";

export const metadata = {
  title: "Adam W. Stryker | Healthcare Operator, Investor & Systems Architect",
  description:
    "Adam W. Stryker — healthcare operator, investor, and systems architect. Founder of StrykeFox Medical and Egeiro Holdings. Inc. 5000. Top 300 Healthcare Executives. Author of Candor Through Fire.",
  keywords: [
    "Adam Stryker",
    "Adam W. Stryker",
    "healthcare operator",
    "StrykeFox Medical founder",
    "Egeiro Holdings",
    "Candor Through Fire",
    "healthcare investor",
    "medical platform architect",
  ],
  openGraph: {
    title: "Adam W. Stryker | Healthcare Operator, Investor & Systems Architect",
    description:
      "Founder of StrykeFox Medical and Egeiro Holdings. Inc. 5000. Top 300 Healthcare Executives.",
    url: "https://www.strykefox.com/adamwstryker",
    siteName: "StrykeFox Medical",
    type: "profile",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Adam W. Stryker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam W. Stryker | Healthcare Operator, Investor & Systems Architect",
    description:
      "Founder of StrykeFox Medical and Egeiro Holdings. Inc. 5000. Top 300 Healthcare Executives.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://www.strykefox.com/adamwstryker" },
};

export default function Page() {
  return <VaultPage />;
}
