// src/app/contact/page.tsx

import ContactModule from "@/modules/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",

  description:
    "Konsultasi gratis bersama Ditelaga Digital. Kami siap membantu bisnis Anda berkembang melalui website, SEO, dan digital marketing.",

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital/contact",
  },

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Hubungi Ditelaga Creative Digital",
    description:
      "Diskusikan kebutuhan website dan digital marketing bisnis Anda bersama tim kami.",
    url: "https://ditelaga.digital/contact",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Hubungi Ditelaga Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Ditelaga Creative Digital",
    description:
      "Konsultasi gratis untuk website dan digital marketing bisnis Anda.",
    images: ["https://ditelaga.digital/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return <ContactModule />;
}