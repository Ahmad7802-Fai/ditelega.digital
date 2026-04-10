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
          "font-semibold tracking-tight",

          // size system
          size === "sm" && "text-2xl md:text-3xl",
          size === "md" && "text-3xl md:text-4xl",
          size === "lg" && "text-4xl md:text-5xl leading-[1.1]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className="text-green-600">{highlight}</span>
        )}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-gray-500 leading-relaxed",

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