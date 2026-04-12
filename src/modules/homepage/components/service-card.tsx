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
        rounded-2xl

        border border-white/30
        bg-white/60 backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(0,0,0,0.06)]

        hover:-translate-y-2
        hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)]
        transition-all duration-500 ease-out
      "
    >
      {/* 🔥 SOFT GLOW */}
      <div className="
        absolute -top-16 -right-16 w-56 h-56
        bg-green-300/20 blur-3xl rounded-full
        opacity-0 group-hover:opacity-100
        transition duration-500
      " />

      {/* 🔥 BORDER GLOW */}
      <div className="
        absolute inset-0 rounded-2xl
        border border-transparent
        group-hover:border-green-200/60
        transition
      " />

      <div className="relative z-10 p-6">

        {/* ICON */}
        <div
          className="
            w-12 h-12 rounded-xl
            bg-gradient-to-br from-green-100 to-green-200
            text-green-600

            flex items-center justify-center
            mb-6

            shadow-[inset_0_1px_4px_rgba(255,255,255,0.6)]
            group-hover:scale-110
            group-hover:rotate-3
            transition duration-300
          "
        >
          <Icon size={20} />
        </div>

        {/* TITLE */}
        <h3 className="
          text-lg font-semibold text-gray-900
          tracking-tight
          group-hover:text-green-600
          transition
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="
          mt-3 text-gray-500 text-sm leading-relaxed
        ">
          {desc}
        </p>

        {/* CTA */}
        <div className="
          mt-6 flex items-center gap-2
          text-sm font-medium text-green-600
          opacity-80 group-hover:opacity-100
          transition
        ">
          Pelajari lebih lanjut
          <ArrowUpRight
            size={16}
            className="
              transition duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

      </div>
    </Card>
  );
}