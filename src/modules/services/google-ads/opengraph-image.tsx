import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Jasa Google Ads",
    subtitle: "Iklan Profit • Bukan Boncos",
  });
}