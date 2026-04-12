import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components";

type Props = {
  title: string;
  desc: string;
};

export default function FeatureCard({ title, desc }: Props) {
  return (
    <Card
      className="
        group relative overflow-hidden
        rounded-2xl

        bg-white/60 backdrop-blur-2xl
        border border-white/30

        shadow-[0_10px_40px_rgba(0,0,0,0.05)]

        hover:-translate-y-2
        hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]
        transition-all duration-500 ease-out
      "
    >
      {/* 🔥 GLOW */}
      <div className="
        absolute -top-16 -left-16 w-48 h-48
        bg-green-300/20 blur-3xl rounded-full
        opacity-0 group-hover:opacity-100
        transition duration-500
      " />

      {/* 🔥 BORDER EFFECT */}
      <div className="
        absolute inset-0 rounded-2xl
        border border-transparent
        group-hover:border-green-200/60
        transition
      " />

      <div className="relative z-10 p-6">

        {/* ICON */}
        <div className="
          w-11 h-11 flex items-center justify-center
          rounded-xl
          bg-gradient-to-br from-green-100 to-green-200
          text-green-600
          mb-5

          shadow-[inset_0_1px_4px_rgba(255,255,255,0.6)]
          group-hover:scale-110 group-hover:rotate-3
          transition duration-300
        ">
          <CheckCircle2 size={18} />
        </div>

        {/* TITLE */}
        <h3 className="
          text-base font-semibold text-gray-900
          tracking-tight
          group-hover:text-green-600
          transition
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="
          mt-3 text-sm text-gray-500
          leading-relaxed
        ">
          {desc}
        </p>

      </div>
    </Card>
  );
}