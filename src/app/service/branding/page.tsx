import BrandingModule from "@/modules/services/branding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Branding Profesional & Brand Identity | Ditelaga Digital",
  description:
    "Bangun brand yang kuat, konsisten, dan dipercaya dengan jasa branding profesional. Mulai dari logo, brand identity, hingga visual sosial media.",

  keywords: [
    "jasa branding",
    "brand identity",
    "jasa desain logo",
    "branding bisnis",
    "jasa logo profesional",
    "branding indonesia",
    "desain brand",
  ],

  openGraph: {
    title: "Jasa Branding Profesional - Ditelaga Digital",
    description:
      "Bangun brand yang lebih kuat, profesional, dan mudah diingat oleh pelanggan Anda.",
    url: "https://ditelaga.digital/service/branding",
    siteName: "Ditelaga Digital",
    images: [
      {
        url: "https://ditelaga.digital/og/branding.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Branding Ditelaga Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Branding Profesional",
    description:
      "Tingkatkan kepercayaan bisnis Anda dengan branding premium.",
    images: ["https://ditelaga.digital/og/branding.jpg"],
  },

  metadataBase: new URL("https://ditelaga.digital"),
};

export default function Page() {
  return <BrandingModule />;
}