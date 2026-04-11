import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
  hover?: boolean;
  padding?: boolean;
};

export function Card({
  children,
  className,
  variant = "default",
  hover = true,
  padding = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl transition-all duration-500 overflow-hidden",

        // 🔥 PADDING
        padding && "p-5 md:p-6 lg:p-7",

        // 🔥 DEFAULT (LEBIH HALUS)
        variant === "default" &&
          `
          bg-white
          border border-gray-100
          shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        `,

        // 🔥 ELEVATED (DEPTH NAIK)
        variant === "elevated" &&
          `
          bg-white
          border border-gray-100
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
        `,

        // 🔥 GLASS (UPGRADE BESAR)
        variant === "glass" &&
          `
          backdrop-blur-2xl
          bg-white/60
          border border-white/40
          shadow-[0_30px_100px_rgba(0,0,0,0.15)]
        `,

        // 🔥 HOVER PREMIUM
        hover &&
          `
          hover:-translate-y-2
          hover:shadow-[0_40px_120px_rgba(0,0,0,0.12)]
        `,

        className
      )}
    >
      {/* 🔥 SUBTLE GLOW (BIAR MAHAL) */}
      <div className="
        pointer-events-none
        absolute inset-0
        rounded-3xl
        bg-gradient-to-br from-white/40 via-transparent to-transparent
        opacity-0
        transition
        group-hover:opacity-100
      " />

      {children}
    </div>
  );
}