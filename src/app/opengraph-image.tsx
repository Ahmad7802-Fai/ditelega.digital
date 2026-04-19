import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Ditelaga Creative Digital",
    subtitle: "Website • SEO • Ads • Social Media",
  });
}