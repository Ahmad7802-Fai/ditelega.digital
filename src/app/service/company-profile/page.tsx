// src/app/services/company-profile/page.tsx

import CompanyProfileSection from "@/modules/services/company-profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Website Company Profile",

  description:
    "Jasa pembuatan website company profile profesional, modern, cepat, dan SEO friendly untuk meningkatkan kredibilitas dan penjualan bisnis Anda.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/services/company-profile",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Jasa Website Company Profile Profesional",
    description:
      "Bangun website company profile yang meningkatkan kepercayaan dan penjualan bisnis Anda.",
    url: "https://ditelaga.digital/services/company-profile",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-company-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Website Company Profile",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa Website Company Profile Profesional",
    description:
      "Website modern, cepat, dan SEO friendly untuk bisnis Anda.",
    images: ["https://ditelaga.digital/og-company-profile.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CompanyProfileSection />;
}