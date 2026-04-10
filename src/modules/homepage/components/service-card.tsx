import { Card } from "@/components";
import { ArrowUpRight } from "lucide-react";
import { iconMap } from "@/lib/icon-map";

type Props = {
  title: string;
  desc: string;
  icon: keyof typeof iconMap;
};

export default function ServiceCard({
  title,
  desc,
  icon,
}: Props) {
  const Icon = iconMap[icon];

  return (
    <Card
      className="
        group relative overflow-hidden
        border border-white/40
        bg-white/70 backdrop-blur-xl

        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]
        transition-all duration-300
      "
    >
      {/* 🔥 GLOW BACKGROUND */}
      <div className="
        absolute -top-10 -right-10 w-40 h-40
        bg-green-200/30 blur-3xl rounded-full
        opacity-0 group-hover:opacity-100
        transition
      " />

      {/* 🔥 CONTENT */}
      <div className="relative z-10">

        {/* ICON */}
        <div
          className="
            w-12 h-12 rounded-xl
            bg-gradient-to-br from-green-100 to-green-200
            text-green-600
            flex items-center justify-center
            mb-5
            shadow-inner
            group-hover:scale-110
            transition
          "
        >
          <Icon size={20} />
        </div>

        {/* TITLE */}
        <h3 className="
          text-lg font-semibold text-gray-900
          group-hover:text-green-600 transition
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          {desc}
        </p>

        {/* CTA */}
        <div className="
          mt-6 flex items-center gap-1
          text-sm font-medium text-green-600
        ">
          Pelajari lebih lanjut
          <ArrowUpRight
            size={16}
            className="
              transition
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

      </div>
    </Card>
  );
}