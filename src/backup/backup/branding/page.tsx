import BrandingModule from "@/modules/services/branding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Branding Profesional & Brand Identity | Ditelaga Digital",
  description:
    "Bangun brand yang kuat, konsisten, dan dipercaya dengan jasa branding profesional.",

  keywords: [
    "jasa branding",
    "brand identity",
    "jasa desain logo",
  ],
};

export default function Page() {
  return <BrandingModule />;
}