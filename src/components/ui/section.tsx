import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  background?: "default" | "muted" | "gradient" | "dark";
  divider?: boolean;
};

export function Section({
  children,
  className,
  size = "md",
  background = "default",
  divider = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",

        // 🔥 RESPONSIVE SPACING (INI KUNCI)
        size === "sm" && "py-12 md:py-16 lg:py-20",
        size === "md" && "py-16 md:py-24 lg:py-32",
        size === "lg" && "py-20 md:py-32 lg:py-40",

        // 🔥 BACKGROUND SYSTEM
        background === "default" && "bg-white",
        background === "muted" && "bg-gray-50",

        background === "gradient" &&
          "bg-gradient-to-b from-white via-green-50/40 to-white",

        background === "dark" &&
          "bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white",

        className
      )}
    >
      {/* 🔥 GLOW EFFECT (PREMIUM BANGET) */}
      {background === "gradient" && (
        <div className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2 top-0
          w-[800px] h-[800px]
          bg-green-400/20 blur-[160px]
          rounded-full
        " />
      )}

      {/* 🔥 DIVIDER */}
      {divider && (
        <div className="
          absolute top-0 left-0 w-full h-px
          bg-gradient-to-r from-transparent via-gray-200 to-transparent
        " />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}