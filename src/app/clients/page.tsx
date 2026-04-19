// src/app/clients/page.tsx

import ClientsSection from "@/modules/clients";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klien Kami",

  description:
    "Dipercaya oleh berbagai bisnis dari berbagai industri, Ditelaga Digital telah membantu klien berkembang melalui website dan digital marketing.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/clients",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Klien Ditelaga Creative Digital",
    description:
      "Lihat berbagai bisnis yang telah berkembang bersama Ditelaga Digital.",
    url: "https://ditelaga.digital/clients",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-clients.jpg",
        width: 1200,
        height: 630,
        alt: "Klien Ditelaga Creative Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Klien Ditelaga Creative Digital",
    description:
      "Dipercaya oleh berbagai bisnis untuk berkembang melalui digital strategy.",
    images: ["https://ditelaga.digital/og-clients.jpg"],
  },
};

export default function ClientsPage() {
  return <ClientsSection />;
}