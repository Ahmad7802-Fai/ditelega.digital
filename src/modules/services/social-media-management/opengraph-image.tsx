import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Kelola Sosial Media Jadi Mesin Penjualan",
    subtitle: "Konten Konsisten • Branding Kuat • Engagement Naik",
  });
}