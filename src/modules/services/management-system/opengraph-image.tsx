import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Sistem Digital untuk Otomatisasi Bisnis",
    subtitle: "Lebih Efisien • Lebih Cepat • Lebih Profit",
  });
}