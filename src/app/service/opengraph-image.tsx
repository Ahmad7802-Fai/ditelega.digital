import { generateOG } from "@/lib/og/template";

export const runtime = "edge";
export const contentType = "image/png";

export default function Image() {
  return generateOG({
    title: "Layanan Ditelaga Digital",
    subtitle: "Website • SEO • Ads • Branding",
  });
}