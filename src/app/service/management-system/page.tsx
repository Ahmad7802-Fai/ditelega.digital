// src/app/services/management-system/page.tsx

import type { Metadata } from "next";
import ManagementSystemModule from "@/modules/services/management-system";

export const metadata: Metadata = {
  title: "Jasa Sistem Manajemen Custom",

  description:
    "Jasa pembuatan sistem manajemen berbasis web untuk bisnis Anda. Otomatisasi operasional, efisiensi kerja, dan kontrol data dalam satu sistem terintegrasi.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/service/management-system",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Jasa Sistem Manajemen Custom",
    description:
      "Bangun sistem manajemen custom untuk meningkatkan efisiensi dan skalabilitas bisnis Anda.",
    url: "https://ditelaga.digital/service/management-system",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-management-system.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Sistem Manajemen",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa Sistem Manajemen Custom",
    description:
      "Solusi sistem internal untuk bisnis modern dan scalable.",
    images: ["https://ditelaga.digital/og-management-system.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ManagementSystemModule />;
}