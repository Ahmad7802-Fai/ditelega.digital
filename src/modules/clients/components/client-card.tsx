"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  category: string;
  image: string;
  isHero?: boolean;
};

export default function ClientCard({
  title,
  category,
  image,
  isHero = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="
          relative rounded-3xl overflow-hidden
          bg-white border border-gray-200

          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)]

          hover:-translate-y-2
          hover:scale-[1.01]

          transition-all duration-500 ease-out
        "
      >
        {/* 🔥 IMAGE */}
        <div
          className={`
            relative overflow-hidden
            ${isHero ? "h-[320px]" : "h-[220px]"}
          `}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              scale-100 group-hover:scale-110
              transition duration-700 ease-out
            "
          />

          {/* 🔥 DARK OVERLAY */}
          <div className="
            absolute inset-0
            bg-gradient-to-t from-black/60 via-black/10 to-transparent
            opacity-0 group-hover:opacity-100
            transition duration-500
          " />

          {/* 🔥 TOP LIGHT */}
          <div className="
            absolute inset-0
            bg-gradient-to-b from-white/20 via-transparent to-transparent
            opacity-60
          " />
        </div>

        {/* 🔥 CONTENT */}
        <div className="p-6">
          <h3 className="
            font-semibold text-gray-900 text-[16px]
            leading-snug
            group-hover:text-green-600
            transition
          ">
            {title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {category}
          </p>
        </div>

        {/* 🔥 BADGE FLOAT */}
        <div className="
          absolute top-4 left-4
          text-xs px-3 py-1.5
          bg-white/90 backdrop-blur-md
          rounded-full
          shadow-[0_5px_20px_rgba(0,0,0,0.1)]
        ">
          {category}
        </div>

        {/* 🔥 HOVER CTA */}
        <div className="
          absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition
        ">
          <div className="
            px-5 py-2
            bg-white text-gray-900 text-sm
            rounded-full
            shadow-lg

            scale-90 group-hover:scale-100
            transition
          ">
            Lihat Detail →
          </div>
        </div>
      </div>
    </motion.div>
  );
}