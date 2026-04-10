import { Card } from "@/components";
import { Star } from "lucide-react";

type Props = {
  name: string;
  role: string;
  message: string;
};

export default function TestimonialCard({
  name,
  role,
  message,
}: Props) {
  return (
    <Card
      className="
        group relative overflow-hidden
        bg-white/70 backdrop-blur-xl
        border border-white/40

        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        transition-all duration-300
      "
    >
      {/* 🔥 GLOW */}
      <div className="
        absolute -bottom-10 -right-10 w-32 h-32
        bg-green-200/30 blur-2xl rounded-full
        opacity-0 group-hover:opacity-100
        transition
      " />

      <div className="relative z-10">

        {/* ⭐ RATING */}
        <div className="flex gap-1 text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        {/* 💬 MESSAGE */}
        <p className="text-gray-600 text-sm leading-relaxed">
          “{message}”
        </p>

        {/* 👤 USER */}
        <div className="flex items-center gap-3 mt-6">
          <div className="
            w-10 h-10 rounded-full
            bg-gradient-to-br from-green-400 to-green-600
            text-white flex items-center justify-center
            text-sm font-semibold
          ">
            {name.charAt(0)}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              {name}
            </p>
            <p className="text-xs text-gray-500">
              {role}
            </p>
          </div>
        </div>

      </div>
    </Card>
  );
}