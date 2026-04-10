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
        "px-6 md:px-12 lg:px-20",

        // width system
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[1400px]",
        size === "narrow" && "max-w-4xl",
        size === "full" && "max-w-full",

        // alignment
        center && "mx-auto",

        className
      )}
    >
      {children}
    </div>
  );
}