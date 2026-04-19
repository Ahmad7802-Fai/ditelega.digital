import { generateOG } from "@/lib/og/template";
import { services } from "@/lib/services";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return generateOG({
    title: service.title,
    subtitle: service.subtitle,
  });
}