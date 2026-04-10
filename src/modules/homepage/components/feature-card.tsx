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
        bg-white/70 backdrop-blur-xl
        border border-white/40

        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
        transition-all duration-300
      "
    >
      {/* 🔥 GLOW */}
      <div className="
        absolute -top-10 -left-10 w-32 h-32
        bg-green-200/30 blur-2xl rounded-full
        opacity-0 group-hover:opacity-100
        transition
      " />

      <div className="relative z-10">

        {/* ICON */}
        <div className="
          w-10 h-10 flex items-center justify-center
          rounded-lg bg-green-100 text-green-600
          mb-4
          group-hover:scale-110 transition
        ">
          <CheckCircle2 size={18} />
        </div>

        {/* TITLE */}
        <h3 className="
          font-semibold text-gray-900
          group-hover:text-green-600 transition
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {desc}
        </p>

      </div>
    </Card>
  );
}