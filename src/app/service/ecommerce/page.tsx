// src/app/services/ecommerce/page.tsx

import type { Metadata } from "next";
import EcommerceModule from "@/modules/services/ecommerce";

export const metadata: Metadata = {
  title: "Jasa Website E-Commerce",

  description:
    "Jasa pembuatan website e-commerce profesional, cepat, dan SEO friendly untuk meningkatkan omzet bisnis Anda secara signifikan.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/services/ecommerce",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Jasa Website E-Commerce Profesional",
    description:
      "Bangun toko online yang siap jualan, cepat, dan menghasilkan omzet untuk bisnis Anda.",
    url: "https://ditelaga.digital/services/ecommerce",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-ecommerce.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Website E-Commerce",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Jasa Website E-Commerce Profesional",
    description:
      "Website toko online yang siap meningkatkan omzet bisnis Anda.",
    images: ["https://ditelaga.digital/og-ecommerce.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <EcommerceModule />;
}