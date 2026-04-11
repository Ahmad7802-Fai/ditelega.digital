import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
  center?: boolean;
};

export function Container({
  children,
  className,
  size = "default",
  center = true,
}: ContainerProps) {
  return (
    <div
      className={cn(
        // 🔥 BASE
        "w-full min-w-0",

        // 🔥 RESPONSIVE PADDING
        "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20",

        // 🔥 WIDTH SYSTEM (LEBIH STANDARD)
        size === "default" && "max-w-6xl",   // ~1152px
        size === "wide" && "max-w-7xl",      // ~1280px
        size === "narrow" && "max-w-3xl",    // ~768px
        size === "full" && "max-w-full",

        // 🔥 CENTERING
        center && "mx-auto",

        className
      )}
    >
      {children}
    </div>
  );
}