"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components";
import { cn } from "@/lib/utils";
import { menu } from "@/config/menu";

export default function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);

  /* 🔥 LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[999] md:hidden",
        "transition duration-300",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >

      {/* 🔥 BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "absolute inset-0 bg-black/50 backdrop-blur-md transition",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* 🔥 PANEL */}
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[85%] max-w-[340px]",
          "bg-white/95 backdrop-blur-xl",
          "shadow-[0_30px_100px_rgba(0,0,0,0.25)]",
          "flex flex-col",

          "transform transition-all duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >

        {/* 🔥 HEADER */}
        <div className="flex items-center justify-between p-5 border-b">
          <p className="font-semibold text-gray-900">Menu</p>
          <button
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* 🔥 CONTENT SCROLL */}
        <div className="flex-1 overflow-y-auto px-6 py-6">

          <nav className="flex flex-col gap-5 text-[16px] font-medium text-gray-800">

            <NavLink label="Home" href="/" setOpen={setOpen} />

            {/* SERVICES */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  servicesOpen ? "max-h-[800px] mt-4" : "max-h-0"
                )}
              >
                <div className="space-y-5">

                  {menu.map((group, i) => (
                    <div key={i}>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {group.label}
                      </p>

                      <div className="mt-2 space-y-2">
                        {group.items.map((item, j) => (
                          <Link
                            key={j}
                            href={item.href || "#"}
                            onClick={() => setOpen(false)}
                            className="
                              block px-3 py-2 rounded-lg
                              hover:bg-green-50
                              hover:text-green-600
                              transition
                            "
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

            <NavLink label="Portfolio" href="/portfolio" setOpen={setOpen} />
            <NavLink label="Clients" href="/clients" setOpen={setOpen} />
            <NavLink label="About" href="/about" setOpen={setOpen} />
            <NavLink label="Contact" href="/contact" setOpen={setOpen} />

          </nav>

        </div>

        {/* 🔥 STICKY CTA */}
        <div className="
          p-5 border-t
          bg-white/80 backdrop-blur
        ">
          <Button size="lg" className="w-full">
            Konsultasi Gratis
          </Button>
        </div>

      </div>
    </div>
  );
}

/* 🔥 NAV LINK */
function NavLink({
  label,
  href,
  setOpen,
}: {
  label: string;
  href: string;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="
        px-2 py-2
        rounded-lg
        hover:bg-gray-100
        hover:text-green-600
        transition
      "
    >
      {label}
    </Link>
  );
}