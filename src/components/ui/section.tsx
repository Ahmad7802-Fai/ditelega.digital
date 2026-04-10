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
        "relative w-full",

        // spacing system
        size === "sm" && "py-16",
        size === "md" && "py-24",
        size === "lg" && "py-32",

        // background variants
        background === "default" && "bg-white",
        background === "muted" && "bg-gray-50",
        background === "gradient" &&
          "bg-gradient-to-b from-white to-green-50",
        background === "dark" && "bg-gray-900 text-white",

        className
      )}
    >
      {/* TOP DIVIDER */}
      {divider && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      )}

      {children}
    </section>
  );
}