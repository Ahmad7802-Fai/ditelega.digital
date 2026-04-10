import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
  hover?: boolean;
  padding?: boolean; // 🔥 NEW
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
        "relative rounded-2xl transition-all duration-300 overflow-hidden",

        // 🔥 PADDING (OPTIONAL)
        padding && "p-5 md:p-6 lg:p-7",

        // DEFAULT
        variant === "default" &&
          "bg-white border border-gray-100",

        // ELEVATED
        variant === "elevated" &&
          "bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]",

        // GLASS
        variant === "glass" &&
          "backdrop-blur-xl bg-white/10 border border-white/20 text-white",

        // 🔥 HOVER (OPTIONAL)
        hover &&
          "hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]",

        className
      )}
    >
      {children}
    </div>
  );
}