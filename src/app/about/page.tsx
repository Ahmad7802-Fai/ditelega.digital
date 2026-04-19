// src/app/about/page.tsx
import AboutSection from "@/modules/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",

  description:
    "Ditelaga Creative Digital adalah agency yang membantu bisnis berkembang melalui website, branding, dan digital marketing.",

  /* 🔥 WAJIB biar URL konsisten */
  alternates: {
    canonical: "https://ditelaga.digital/about",
  },

  /* 🔥 OPEN GRAPH (biar share beda dari homepage) */
  openGraph: {
    title: "Tentang Ditelaga Creative Digital",
    description:
      "Kenali lebih dekat Ditelaga Digital sebagai partner pertumbuhan bisnis Anda.",
    url: "https://ditelaga.digital/about",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-about.jpg", // 👉 beda image = lebih keren
        width: 1200,
        height: 630,
        alt: "Tentang Ditelaga Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Tentang Ditelaga Creative Digital",
    description:
      "Agency digital yang membantu bisnis berkembang melalui strategi modern.",
    images: ["https://ditelaga.digital/og-about.jpg"],
  },
};

export default function AboutPage() {
  return <AboutSection />;
}