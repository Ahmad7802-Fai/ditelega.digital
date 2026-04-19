import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Landing Page Premium",
    subtitle: "Conversion Tinggi • Siap Iklan",
  });
}