// src/app/services/google-ads/page.tsx

import type { Metadata } from "next";
import GoogleAdsModule from "@/modules/services/google-ads";

export const metadata: Metadata = {
  title: "Jasa Google Ads",

  description:
    "Jasa Google Ads profesional untuk meningkatkan leads, traffic, dan penjualan bisnis Anda secara cepat dan terukur.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/services/google-ads",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Jasa Google Ads Profesional",
    description:
      "Iklan Google Ads yang tepat sasaran untuk meningkatkan leads dan penjualan bisnis Anda.",
    url: "https://ditelaga.digital/services/google-ads",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-google-ads.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Google Ads",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa Google Ads Profesional",
    description:
      "Pasang iklan Google Ads yang menghasilkan leads dan penjualan.",
    images: ["https://ditelaga.digital/og-google-ads.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GoogleAdsModule />;
}