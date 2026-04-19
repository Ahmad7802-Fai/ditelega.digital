// src/app/services/video-ads/page.tsx

import type { Metadata } from "next";
import VideoAdsModule from "@/modules/services/video-ads";

export const metadata: Metadata = {
  title: "Jasa Video Ads",

  description:
    "Jasa pembuatan video ads profesional untuk meningkatkan konversi iklan, engagement, dan penjualan bisnis Anda.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/service/video-ads",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Jasa Video Ads Profesional",
    description:
      "Video iklan yang menarik perhatian dan meningkatkan conversion bisnis Anda.",
    url: "https://ditelaga.digital/service/video-ads",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-video-ads.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Video Ads",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa Video Ads Profesional",
    description:
      "Video iklan yang siap meningkatkan engagement dan penjualan.",
    images: ["https://ditelaga.digital/og-video-ads.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <VideoAdsModule />;
}