"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  category: string;
  image: string;
};

export default function PortfolioCard({
  title,
  category,
  image,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="
        relative overflow-hidden rounded-2xl
        bg-black
      ">
        {/* 🔥 IMAGE */}
        <div className="relative h-[240px]">
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
        </div>

        {/* 🔥 GRADIENT OVERLAY */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/20 to-transparent
          opacity-80
        " />

        {/* 🔥 CONTENT FLOAT */}
        <div className="
          absolute bottom-0 left-0 right-0
          p-5 text-white
          translate-y-4 group-hover:translate-y-0
          transition
        ">
          <span className="
            text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full
          ">
            {category}
          </span>

          <h3 className="mt-3 font-semibold text-lg leading-snug">
            {title}
          </h3>
        </div>

        {/* 🔥 HOVER BUTTON */}
        <div className="
          absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition
        ">
          <div className="
            px-5 py-2 bg-white text-black text-sm rounded-full
            shadow-lg
            scale-90 group-hover:scale-100
            transition
          ">
            View Project →
          </div>
        </div>
      </div>
    </motion.div>
  );
}