"use client";

import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* 🔥 INSTAGRAM */}
      <a
        href="https://www.instagram.com/ditelaga.idn/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-2
          bg-white/90 backdrop-blur-xl
          px-4 py-2 rounded-full
          shadow-[0_10px_30px_rgba(0,0,0,0.1)]
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]
          transition-all duration-300
        "
      >
        {/* 🔥 SVG INSTAGRAM (NO ERROR) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#ig-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:scale-110 transition"
        >
          <defs>
            <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f58529" />
              <stop offset="50%" stopColor="#dd2a7b" />
              <stop offset="100%" stopColor="#8134af" />
            </linearGradient>
          </defs>

          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1" />
        </svg>

        <span className="text-sm text-gray-700 hidden md:inline">
          Instagram
        </span>
      </a>

      {/* 🔥 WHATSAPP */}
      <a
        href={`https://wa.me/6281779229522?text=${encodeURIComponent(
          "Halo kak, saya tertarik dengan layanan Ditelaga Digital. Bisa konsultasi?"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-2
          bg-green-600 text-white
          px-5 py-3 rounded-full
          shadow-[0_15px_40px_rgba(34,197,94,0.4)]
          hover:bg-green-700
          hover:shadow-[0_20px_60px_rgba(34,197,94,0.5)]
          transition-all duration-300
        "
      >
        <MessageCircle
          size={20}
          className="group-hover:scale-110 transition"
        />
        <span className="text-sm font-medium hidden md:inline">
          Konsultasi Gratis
        </span>
      </a>

    </div>
  );
}