// src/app/services/landing-page/page.tsx

import type { Metadata } from "next";
import LandingPageModule from "@/modules/services/landing-page";

export const metadata: Metadata = {
  title: "Jasa Landing Page Premium",

  description:
    "Jasa pembuatan landing page profesional, cepat, dan high-converting untuk meningkatkan leads dan penjualan bisnis Anda.",

  /* 🔥 FIX URL */
  alternates: {
    canonical: "https://ditelaga.digital/services/landing-page",
  },

  /* 🔥 OPEN GRAPH (WAJIB ABSOLUTE) */
  openGraph: {
    title: "Jasa Landing Page Premium",
    description:
      "Landing page high-converting untuk Google Ads & Meta Ads.",
    url: "https://ditelaga.digital/services/landing-page",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-landing.jpg", // 🔥 FIX
        width: 1200,
        height: 630,
        alt: "Jasa Landing Page Premium",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa Landing Page Premium",
    description:
      "Landing page cepat & optimal untuk meningkatkan conversion bisnis.",
    images: ["https://ditelaga.digital/og-landing.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <LandingPageModule />;
}