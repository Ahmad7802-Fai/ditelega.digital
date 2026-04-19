import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Website Toko Online Siap Jualan",
    subtitle: "Order Masuk Otomatis • Omset Naik",
  });
}