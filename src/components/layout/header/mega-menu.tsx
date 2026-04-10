"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { menu } from "@/config/menu";
import { iconMap } from "@/lib/icon-map";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* 🔥 Trigger */}
      <button
        className={cn(
          "flex items-center gap-1 text-[15px] font-medium transition",
          open ? "text-green-600" : "text-gray-600 hover:text-green-600"
        )}
      >
        Services
        <ChevronDown
          size={16}
          className={cn("transition duration-300", open && "rotate-180")}
        />
      </button>

      {/* 🔥 BRIDGE */}
      {open && <div className="absolute top-full left-0 w-full h-6" />}

      {/* 🔥 DROPDOWN */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[900px] z-50",
          "transition-all duration-300 origin-top",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-8">

          {/* 🔥 GRID */}
          <div className="grid grid-cols-3 gap-8">
            {menu.map((group, i) => (
              <MenuGroup
                key={i}
                title={group.label}
                bordered={i !== 0}
              >
                {group.items.map((item, j) => {
                  const Icon =
                    iconMap[item.icon as keyof typeof iconMap];

                  return (
                    <MenuItem
                      key={j}
                      icon={<Icon size={18} />}
                      title={item.title}
                      desc={item.desc}
                    />
                  );
                })}
              </MenuGroup>
            ))}
          </div>

          {/* 🔥 CTA */}
          <div className="mt-8 flex items-center justify-between bg-green-50 rounded-xl p-4">
            <div>
              <p className="text-sm font-medium text-gray-800">
                Bingung pilih layanan?
              </p>
              <p className="text-xs text-gray-500">
                Konsultasi gratis dengan tim kami
              </p>
            </div>

            <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Konsultasi
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function MenuGroup({
  title,
  children,
  bordered = false,
}: {
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <div className={cn(bordered && "border-l pl-6")}>
      <p className="text-sm font-semibold text-gray-900 mb-4">
        {title}
      </p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MenuItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
      <div className="text-green-600 group-hover:scale-110 transition">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition">
          {title}
        </p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}