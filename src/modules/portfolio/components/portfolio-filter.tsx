"use client";

import { motion } from "framer-motion";

type Props = {
  active: string;
  setActive: (val: string) => void;
};

const filters = ["All", "Website", "Mobile App", "SEO", "Branding"];

export default function PortfolioFilter({ active, setActive }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {filters.map((item) => {
        const isActive = active === item;

        return (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`
              relative px-5 py-2 text-sm rounded-full
              transition-all duration-300
              ${
                isActive
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }
            `}
          >
            {/* 🔥 BACKGROUND ANIMATION */}
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="
                  absolute inset-0
                  bg-green-600
                  rounded-full
                  shadow-[0_8px_25px_rgba(34,197,94,0.4)]
                "
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            {/* TEXT */}
            <span className="relative z-10">
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}