// src/app/services/social-media-management/page.tsx

import type { Metadata } from "next";
import SocialMediaManagementModule from "@/modules/services/social-media-management";

export const metadata: Metadata = {
  title: "Jasa Social Media Management Profesional",

  description:
    "Jasa social media management profesional untuk meningkatkan branding, engagement, dan penjualan bisnis Anda melalui strategi konten yang efektif.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/services/social-media-management",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Jasa Social Media Management Profesional",
    description:
      "Kelola Instagram & TikTok bisnis Anda dengan strategi konten yang menghasilkan engagement dan penjualan.",
    url: "https://ditelaga.digital/services/social-media-management",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-social-media.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Social Media Management",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa Social Media Management Profesional",
    description:
      "Tingkatkan engagement dan penjualan melalui social media.",
    images: ["https://ditelaga.digital/og-social-media.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SocialMediaManagementModule />;
}