import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import {
  generateServiceMetadata,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/seo";
import type { Metadata } from "next";
import Script from "next/script";

/* ========================= */
/* 🔥 METADATA */
/* ========================= */

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {

  const service = services.find((s) => s.slug === params.slug);

  if (!service) return {};

  return generateServiceMetadata(service);
}

/* ========================= */
/* 🔥 PAGE */
/* ========================= */

export default function Page(
  { params }: { params: { slug: string } }
) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  const Component = service.component;

  const schema = generateServiceSchema(service);
  const faqSchema = generateFAQSchema(service);

  return (
    <>
      {/* ========================= */}
      {/* 🔥 SERVICE SCHEMA */}
      {/* ========================= */}
      <Script
        id={`schema-service-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ========================= */}
      {/* 🔥 FAQ SCHEMA (AUTO) */}
      {/* ========================= */}
      {faqSchema && (
        <Script
          id={`schema-faq-${service.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* ========================= */}
      {/* 🔥 MAIN CONTENT */}
      {/* ========================= */}
      <Component />

      {/* ========================= */}
      {/* 🔥 INTERNAL LINKING AUTO */}
      {/* ========================= */}
      {service.related && (
        <section className="py-16 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Layanan digital lainnya:
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-green-600 font-medium">
            {service.related.map((slug) => {
              const item = services.find((s) => s.slug === slug);
              if (!item) return null;

              return (
                <a
                  key={slug}
                  href={`/service/${slug}`}
                  className="hover:underline"
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}