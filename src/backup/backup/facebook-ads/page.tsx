import FacebookAdsModule from "@/modules/services/facebook-ads";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Facebook & Instagram Ads Profesional | Ditelaga Digital",
  description:
    "Tingkatkan leads & penjualan dengan jasa Facebook Ads berbasis data. Targeting presisi, optimasi harian, dan fokus ROI.",

  keywords: [
    "facebook ads",
    "instagram ads",
    "jasa iklan facebook",
    "jasa iklan instagram",
    "fb ads indonesia",
    "iklan meta ads",
  ],

  openGraph: {
    title: "Jasa Facebook & Instagram Ads Profesional",
    description:
      "Scale bisnis Anda dengan strategi Facebook Ads yang terukur & berbasis data.",
    url: "https://ditelaga.digital/service/facebook-ads",
    siteName: "Ditelaga Digital",
    images: [
      {
        url: "https://ditelaga.digital/og/facebook-ads.jpg",
        width: 1200,
        height: 630,
        alt: "Facebook Ads Ditelaga Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Facebook & Instagram Ads Profesional",
    description:
      "Dapatkan lebih banyak leads & sales dengan strategi iklan berbasis data.",
    images: ["https://ditelaga.digital/og/facebook-ads.jpg"],
  },

  metadataBase: new URL("https://ditelaga.digital"),
};

export default function Page() {
  return <FacebookAdsModule />;
}