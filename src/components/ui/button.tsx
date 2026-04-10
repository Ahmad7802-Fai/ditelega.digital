import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        // base
        "inline-flex items-center justify-center gap-2 font-medium transition-all rounded-xl",
        "focus:outline-none focus:ring-2 focus:ring-green-500/40",
        "disabled:opacity-50 disabled:pointer-events-none",

        // size
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-[15px]",
        size === "lg" && "px-7 py-3.5 text-[16px]",

        // variant
        variant === "primary" &&
          "bg-green-600 text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] hover:scale-[1.03] hover:bg-green-700",

        variant === "secondary" &&
          "border border-white/20 text-white/90 backdrop-blur-md hover:bg-white/10",

        variant === "ghost" &&
          "text-gray-700 hover:bg-gray-100",

        className
      )}
      {...props}
    >
      {/* LEFT ICON */}
      {leftIcon && !loading && (
        <span className="flex items-center">{leftIcon}</span>
      )}

      {/* LOADING */}
      {loading ? (
        <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
      ) : (
        children
      )}

      {/* RIGHT ICON */}
      {rightIcon && !loading && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </button>
  );
}