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
        // 🔥 BASE
        "relative inline-flex items-center justify-center gap-2 font-medium rounded-xl",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-green-500/40",
        "disabled:opacity-50 disabled:pointer-events-none",
        "active:scale-[0.97]",

        // 🔥 SIZE
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-[15px]",
        size === "lg" && "px-7 py-3.5 text-[16px]",

        // 🔥 PRIMARY (UPGRADE BESAR DI SINI)
        variant === "primary" &&
          `
          bg-gradient-to-r from-green-600 to-emerald-500
          text-white

          shadow-[0_15px_50px_rgba(34,197,94,0.35)]
          
          before:absolute before:inset-0
          before:rounded-xl
          before:bg-white/20
          before:opacity-0
          before:transition

          hover:shadow-[0_25px_70px_rgba(34,197,94,0.45)]
          hover:-translate-y-[1px]
          hover:before:opacity-100
        `,

        // 🔥 SECONDARY (GLASS STYLE)
        variant === "secondary" &&
          `
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-white

          hover:bg-white/20
          hover:border-white/40
        `,

        // 🔥 GHOST
        variant === "ghost" &&
          `
          text-gray-700
          hover:bg-gray-100
        `,

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
        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      ) : (
        <span className="relative z-10">{children}</span>
      )}

      {/* RIGHT ICON */}
      {rightIcon && !loading && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </button>
  );
}