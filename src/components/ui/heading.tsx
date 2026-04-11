import { cn } from "@/lib/utils";

type HeadingProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Heading({
  title,
  highlight,
  subtitle,
  align = "center",
  size = "md",
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {/* TITLE */}
      <h2
        className={cn(
          "font-semibold tracking-tight text-gray-900",

          // 🔥 RESPONSIVE SIZE SYSTEM
          size === "sm" && "text-2xl sm:text-3xl",
          size === "md" && "text-3xl sm:text-4xl md:text-5xl",
          size === "lg" && "text-4xl sm:text-5xl md:text-6xl leading-[1.1]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span
            className="
              relative inline-block
              text-green-600
            "
          >
            {highlight}

            {/* 🔥 UNDERLINE GLOW */}
            <span className="
              absolute left-0 bottom-1 w-full h-[6px]
              bg-green-200/60
              blur-sm
              -z-10
            " />
          </span>
        )}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-gray-500 leading-relaxed",

            // 🔥 SIZE + MAX WIDTH
            "max-w-lg",
            align === "center" && "mx-auto",

            size === "sm" && "text-sm",
            size === "md" && "text-base",
            size === "lg" && "text-lg"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}