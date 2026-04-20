import type { Metadata } from "next";
import { ServiceItem } from "./services";

export function generateServiceMetadata(service: ServiceItem): Metadata {
  const url = `https://ditelaga.digital/service/${service.slug}`;
  const image = `https://ditelaga.digital${service.ogImage}`;

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
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.subtitle,
      images: [image],
    },
  };
}