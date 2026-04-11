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
    <Card
      padding={false}
      hover={false}
      className={cn(
        "relative text-left p-8 transition-all duration-500 rounded-2xl",

        // NON-HIGHLIGHT
        !isHighlight &&
          "bg-white border border-gray-200 opacity-80 scale-95",

        // HIGHLIGHT
        isHighlight &&
          "bg-white border border-green-200 scale-[1.08] -translate-y-3 z-20 shadow-[0_40px_120px_rgba(34,197,94,0.35)]"
      )}
    >
      {/* GLOW */}
      {isHighlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-transparent to-green-300/30 blur-2xl opacity-70" />
      )}

      {/* BADGE */}
      {isHighlight && (
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-4 py-1.5 rounded-full shadow-lg z-30">
          Best Seller
        </div>
      )}

      <div className="relative z-10">
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {desc}
        </p>

        {/* PRICE */}
        <div className="mt-6 flex items-end gap-2">
          <p className="text-4xl font-bold text-gray-900">
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
        <div className="mt-8">
          <Button
            variant={isHighlight ? "primary" : "secondary"}
            className={cn(
              "w-full",
              isHighlight &&
                "shadow-[0_10px_40px_rgba(34,197,94,0.4)]"
            )}
          >
            Pilih Paket →
          </Button>
        </div>
      </div>
    </Card>
  );
}