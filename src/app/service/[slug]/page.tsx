import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ========================= */
/* 🔥 AUTO METADATA */
/* ========================= */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return {};

  const url = `https://ditelaga.digital/service/${params.slug}`;

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
      images: [
        {
          url: `https://ditelaga.digital${service.ogImage}`,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.subtitle,
      images: [`https://ditelaga.digital${service.ogImage}`],
    },
  };
}

/* ========================= */
/* 🔥 PAGE */
/* ========================= */
export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  const Component = service.component;

  return <Component />;
}