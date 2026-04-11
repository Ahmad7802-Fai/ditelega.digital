import type { Metadata } from "next";
import EcommerceModule from "@/modules/services/ecommerce";

export const metadata: Metadata = {
  title: "Jasa Website E-Commerce",
  description:
    "Jasa pembuatan website e-commerce profesional untuk meningkatkan omzet bisnis Anda.",
};

export default function Page() {
  return <EcommerceModule />;
}