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
        "w-full",

        // 🔥 RESPONSIVE PADDING (LEBIH HALUS)
        "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20",

        // 🔥 WIDTH SYSTEM
        size === "default" && "max-w-[1200px]",
        size === "wide" && "max-w-[1400px]",
        size === "narrow" && "max-w-[900px]",
        size === "full" && "max-w-full",

        // 🔥 CENTER
        center && "mx-auto",

        className
      )}
    >
      {children}
    </div>
  );
}