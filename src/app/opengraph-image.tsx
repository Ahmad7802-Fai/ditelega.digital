import { generateOG } from "@/lib/og/template";
import { ogData } from "@/lib/og/data";
import { headers } from "next/headers";

export const runtime = "edge";

export default async function Image() {
  const headersList = await headers(); // ✅ FIX

  const url =
    headersList.get("x-url") ||
    headersList.get("referer") ||
    "";

  const pathname = url
    .replace("https://ditelaga.digital", "")
    .split("?")[0];

  const data = ogData[pathname as keyof typeof ogData];

  if (!data) {
    return generateOG({
      title: "Ditelaga Creative Digital",
      subtitle: "Website • SEO • Ads • Social Media",
    });
  }

  return generateOG(data);
}