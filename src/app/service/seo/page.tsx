// src/app/services/seo/page.tsx

import type { Metadata } from "next";
import SeoModule from "@/modules/services/seo";

export const metadata: Metadata = {
  title: "Jasa SEO Profesional",

  description:
    "Jasa SEO profesional untuk meningkatkan ranking Google, traffic organik, dan penjualan bisnis Anda secara konsisten.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/service/seo",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Jasa SEO Profesional",
    description:
      "Optimasi SEO untuk meningkatkan ranking Google dan mendatangkan traffic berkualitas.",
    url: "https://ditelaga.digital/service/seo",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-seo.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa SEO Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa SEO Profesional",
    description:
      "Naikkan ranking Google dan traffic bisnis Anda dengan strategi SEO yang tepat.",
    images: ["https://ditelaga.digital/og-seo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SeoModule />;
}