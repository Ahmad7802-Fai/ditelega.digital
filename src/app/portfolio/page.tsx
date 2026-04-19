// src/app/portfolio/page.tsx

import PortfolioSection from "@/modules/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",

  description:
    "Lihat portfolio Ditelaga Digital: website, SEO, dan digital marketing yang membantu bisnis berkembang dan meningkatkan omset.",

  alternates: {
    canonical: "https://ditelaga.digital/portfolio",
  },

  openGraph: {
    title: "Portfolio Ditelaga Digital",
    description:
      "Project website dan digital marketing yang telah kami kerjakan untuk berbagai bisnis.",
    url: "https://ditelaga.digital/portfolio",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Ditelaga Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio Ditelaga Digital",
    description:
      "Website, SEO, dan Ads yang terbukti meningkatkan bisnis klien.",
    images: ["https://ditelaga.digital/og-portfolio.jpg"],
  },
};

export default function PortfolioPage() {
  return <PortfolioSection />;
}