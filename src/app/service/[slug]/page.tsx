import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* 🔥 AUTO METADATA */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  const url = `https://ditelaga.digital/service/${slug}`;

  return {
    title: service.title,
    description: service.subtitle,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: service.title,
      description: service.subtitle,
      url,
      siteName: "Ditelaga Creative Digital",
      locale: "id_ID",
      type: "website",
    },
  };
}

/* 🔥 AUTO PAGE */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  const Component = service.component;

  return <Component />;
}