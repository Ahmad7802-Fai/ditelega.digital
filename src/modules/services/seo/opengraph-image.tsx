import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Jasa SEO Ranking Halaman 1 Google",
    subtitle: "Traffic Naik • Leads Masuk Setiap Hari",
  });
}