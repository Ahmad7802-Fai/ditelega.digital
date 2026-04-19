import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Jasa Branding Profesional",
    subtitle: "Brand Lebih Kuat • Lebih Diingat • Lebih Dipercaya",
  });
}