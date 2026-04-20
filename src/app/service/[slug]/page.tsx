import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { generateServiceMetadata, generateServiceSchema } from "@/lib/seo";
import type { Metadata } from "next";
import Script from "next/script";

/* 🔥 METADATA */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return generateServiceMetadata(service);
}

/* 🔥 PAGE */
export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  const Component = service.component;

  const schema = generateServiceSchema(service);

  return (
    <>
      {/* 🔥 JSON-LD */}
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Component />
    </>
  );
}