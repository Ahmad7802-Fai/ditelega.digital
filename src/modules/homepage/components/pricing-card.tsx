import { Card, Button } from "@/components";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  price: string;
  desc: string;
  features: string[];
  index?: number;
};

export default function PricingCard({
  title,
  price,
  desc,
  features,
  index = 0,
}: Props) {
  const isHighlight = index === 1;

  return (
    <div className="relative">

      <Card
        padding={false}
        hover={false}
        className={cn(
          `
          relative text-left p-8 rounded-2xl
          transition-all duration-500
          overflow-visible
          `,

          // NORMAL
          !isHighlight &&
            "bg-white border border-gray-200",

          // 🔥 HIGHLIGHT (CLEAN PREMIUM)
          isHighlight &&
            `
            bg-green-50
            border-2 border-green-500

            scale-[1.03]
            -translate-y-2
            z-20

            shadow-none
            `
        )}
      >
        {/* 🔥 BADGE (FIX POSISI) */}
        {isHighlight && (
          <div
            className="
              absolute -top-5 left-1/2 -translate-x-1/2
              bg-green-600 text-white text-xs
              px-4 py-1.5 rounded-full
              shadow-[0_8px_20px_rgba(0,0,0,0.12)]
              z-30
              whitespace-nowrap
            "
          >
            🔥 Paling Laris
          </div>
        )}

        {/* CONTENT */}
        <div className="relative z-10">

          {/* TITLE */}
          <h3
            className={cn(
              "text-lg font-semibold",
              isHighlight ? "text-green-700" : "text-gray-900"
            )}
          >
            {title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            {desc}
          </p>

          {/* PRICE */}
          <div className="mt-6 flex items-end gap-2">
            <p
              className={cn(
                "text-4xl font-bold tracking-tight",
                isHighlight ? "text-green-600" : "text-gray-900"
              )}
            >
              {price}
            </p>
            <span className="text-sm text-gray-500 mb-1">
              / paket
            </span>
          </div>

          {/* FEATURES */}
          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check size={16} className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          {/* CTA */}
            <div className="mt-8">
              <a
                href={`https://wa.me/628177922952?text=${encodeURIComponent(
                  `Halo, saya tertarik dengan paket ${title} (${price}). Bisa konsultasi lebih lanjut?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={isHighlight ? "primary" : "secondary"}
                  className={cn(
                    "w-full text-sm font-medium rounded-xl",
                    isHighlight &&
                      "bg-green-600 hover:bg-green-700 text-white shadow-md"
                  )}
                >
                  Pesan Sekarang
                </Button>
              </a>
            </div>

        </div>
      </Card>
    </div>
  );
}