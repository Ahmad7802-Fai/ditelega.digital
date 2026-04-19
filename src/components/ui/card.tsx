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
        "group relative rounded-3xl transition-all duration-500 overflow-hidden",

        // 🔥 PADDING (LEBIH LEGA DI HERO)
        padding && "p-6 md:p-8 lg:p-10",

        // 🔥 DEFAULT
        variant === "default" &&
          `
          bg-white
          border border-gray-100
          shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        `,

        // 🔥 ELEVATED
        variant === "elevated" &&
          `
          bg-white
          border border-gray-100
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
        `,

        // 🔥 GLASS (🔥 FIX UTAMA DI SINI)
        variant === "glass" &&
          `
          backdrop-blur-2xl
          bg-white/10
          border border-white/20
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
        `,

        // 🔥 HOVER
        hover &&
          `
          hover:-translate-y-2
          hover:shadow-[0_40px_120px_rgba(0,0,0,0.4)]
        `,

        className
      )}
    >
      {/* 🔥 GLOW EFFECT */}
      <div
        className="
        pointer-events-none
        absolute inset-0
        rounded-3xl
        bg-gradient-to-br from-white/20 via-transparent to-transparent
        opacity-0
        transition duration-500
        group-hover:opacity-100
      "
      />

      {children}
    </div>
  );
}