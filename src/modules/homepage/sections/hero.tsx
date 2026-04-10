"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components";

export default function Hero() {
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glassRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const posX = (x / rect.width) * 100;
      const posY = (y / rect.height) * 100;

      el.style.setProperty("--x", `${posX}%`);
      el.style.setProperty("--y", `${posY}%`);
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center">

        {/* 🔥 BACKGROUND WRAPPER (YANG DI-CLIP) */}
        <div className="absolute inset-0 overflow-hidden">

            <Image
            src="/hero.webp"
            alt="Hero"
            fill
            className="object-cover"
            priority
            />

            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* GLOW */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

        </div>

        {/* 🔥 CONTENT (TIDAK KE-CLIP) */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
            <div className="flex items-center min-h-[90vh]">


          {/* 🔥 GLASS */}
          <div
            ref={glassRef}
            className="
              relative max-w-[520px]
              rounded-3xl p-8 md:p-10
              overflow-hidden

              backdrop-blur-2xl
              bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.08]

              border border-white/10
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            "
            style={{
              background:
                "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.25), transparent 40%)",
            }}
          >
            {/* LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-30" />

            {/* CONTENT */}
            <div className="relative z-10 text-white">

              {/* TITLE */}
              <h1 className="
                text-[42px] md:text-[64px]
                leading-[1.05]
                tracking-[-0.02em]
                font-semibold
              ">
                Solusi Digital Untuk{" "}
                <span className="text-green-400">
                  Pertumbuhan Bisnis
                </span>
              </h1>

              {/* DESC */}
              <p className="
                mt-6
                text-[16px] md:text-[18px]
                leading-[1.7]
                text-white/80
              ">
                Website profesional & digital strategy untuk membantu bisnis Anda berkembang lebih cepat.
              </p>

              {/* BUTTON */}
              <div className="mt-8 flex gap-4">
                <Button className="
                  px-7 py-3.5
                  rounded-xl
                  text-[15px] font-medium
                  shadow-[0_10px_30px_rgba(34,197,94,0.35)]
                  hover:scale-[1.03]
                  transition
                ">
                  Konsultasi Gratis
                </Button>

                <button className="
                  px-7 py-3.5
                  rounded-xl
                  border border-white/20
                  text-white/90 text-[15px]

                  backdrop-blur-md
                  hover:bg-white/10
                  transition
                ">
                  Lihat Portfolio
                </button>
              </div>

              {/* TRUST */}
              <div className="
                mt-10
                flex items-center gap-6
                text-[13px]
                text-white/60
                tracking-wide
              ">
                <span>Dipercaya 100+ bisnis</span>
                <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                <span>Garansi hasil</span>
              </div>

            </div>
          </div>

          {/* 🔥 FLOATING UI */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block">

            {/* CARD 1 */}
            <div className="
              absolute top-[-120px] right-[80px]
              w-[220px]
              bg-white/90 backdrop-blur-md
              rounded-2xl p-4
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              rotate-[-8deg]
              animate-[float_6s_ease-in-out_infinite]
            ">
              <p className="text-sm font-semibold text-gray-800">Dashboard</p>
              <p className="text-xs text-gray-500 mt-1">Analytics & Growth</p>
              <div className="mt-3 h-20 bg-gradient-to-r from-green-200 to-green-400 rounded-lg"></div>
            </div>

            {/* CARD 2 */}
            <div className="
              relative z-10
              w-[260px]
              bg-white
              rounded-2xl p-5
              shadow-[0_30px_80px_rgba(0,0,0,0.2)]
              animate-[float_5s_ease-in-out_infinite]
            ">
              <p className="text-sm font-semibold text-gray-800">UI Preview</p>
              <div className="mt-3 h-32 bg-gray-100 rounded-lg"></div>
            </div>

            {/* CARD 3 */}
            <div className="
              absolute bottom-[-100px] right-[40px]
              w-[200px]
              bg-white/90 backdrop-blur-md
              rounded-2xl p-4
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              rotate-[10deg]
              animate-[float_7s_ease-in-out_infinite]
            ">
              <p className="text-sm font-semibold text-gray-800">Marketing</p>
              <p className="text-xs text-gray-500 mt-1">Ads & SEO</p>
              <div className="mt-3 h-16 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}