"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  desc: string;
  index: number;
};

export default function ProcessCard({ title, desc, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="relative group text-center"
    >
      {/* 🔥 STEP CIRCLE */}
      <div className="
        relative z-10 mx-auto mb-6
        w-14 h-14 rounded-full

        bg-white border border-gray-200
        flex items-center justify-center

        text-sm font-semibold text-green-600

        shadow-lg
        group-hover:scale-110
        transition
      ">
        {index + 1}
      </div>

      {/* 🔥 CARD */}
      <div className="
        relative p-6 rounded-2xl

        bg-white/80 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_80px_rgba(0,0,0,0.06)]

        hover:-translate-y-4
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.12)]

        transition-all duration-500
      ">

        {/* GLOW */}
        <div className="
          absolute -top-8 -right-8 w-24 h-24
          bg-green-300/30 blur-2xl rounded-full
          opacity-0 group-hover:opacity-100
          transition
        " />

        <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {desc}
        </p>

      </div>
    </motion.div>
  );
}