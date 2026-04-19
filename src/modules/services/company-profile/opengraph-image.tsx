import { generateOG } from "@/lib/og/template";

export const runtime = "edge";

export default function Image() {
  return generateOG({
    title: "Jasa Website Company Profile Profesional",
    subtitle: "Website Premium • Branding Kuat • Siap Closing",
  });
}