import type { Metadata } from "next";
import LandingPageModule from "@/modules/services/landing-page";

export const metadata: Metadata = {
  title: "Jasa Landing Page Premium",
  description:
    "Landing page profesional untuk meningkatkan konversi bisnis. Cocok untuk Google Ads & Meta Ads.",
  openGraph: {
    title: "Jasa Landing Page Premium",
    description:
      "Optimalkan konversi bisnis dengan landing page modern & cepat.",
    url: "https://ditelaga.digital/service/landing-page",
    siteName: "Ditelaga Digital",
    images: [
      {
        url: "/og-landing.jpg", // taruh di public
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return <LandingPageModule />;
}