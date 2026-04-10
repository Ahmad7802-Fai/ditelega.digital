"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItemProps = {
  label: string;
  href: string;
};

export function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative text-[15px] font-medium transition-colors duration-300 group",

        active
          ? "text-green-600"
          : "text-gray-600 hover:text-green-600"
      )}
    >
      {label}

      {/* 🔥 UNDERLINE */}
      <span
        className={cn(
          "absolute left-0 -bottom-1 h-[2px] transition-all duration-300",

          active
            ? "w-full bg-green-600"
            : "w-0 bg-green-600 group-hover:w-full"
        )}
      />
    </Link>
  );
}