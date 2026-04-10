"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components";
import { cn } from "@/lib/utils";

import { menu } from "@/config/menu";

export default function MobileMenu({ open }: { open: boolean }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div
      className={cn(
        "md:hidden overflow-hidden transition-all duration-300",
        open ? "max-h-[700px] border-t border-gray-100" : "max-h-0"
      )}
    >
      <div className="bg-white px-6 py-6 space-y-6">

        {/* 🔥 NAV LINKS */}
        <nav className="flex flex-col gap-4 text-[15px] font-medium text-gray-700">

          <NavLink label="Home" />

          {/* 🔥 SERVICES ACCORDION */}
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
                servicesOpen ? "max-h-[500px] mt-4" : "max-h-0"
              )}
            >
              <div className="space-y-4">

                {/* 🔥 LOOP MENU */}
                {menu.map((group, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-gray-900">
                      {group.label}
                    </p>

                    <div className="pl-3 border-l mt-2 space-y-2 text-sm text-gray-500">
                      {group.items.map((item, j) => (
                        <p
                          key={j}
                          className="hover:text-green-600 transition cursor-pointer"
                        >
                          {item.title}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <NavLink label="Portfolio" />
          <NavLink label="Clients" />
          <NavLink label="About" />
          <NavLink label="Contact" />

        </nav>

        {/* 🔥 CTA */}
        <div className="pt-4 border-t border-gray-100">
          <Button size="lg" className="w-full">
            Hubungi Kami
          </Button>
        </div>

      </div>
    </div>
  );
}

/* 🔥 NAV ITEM */
function NavLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="transition hover:text-green-600"
    >
      {label}
    </a>
  );
}