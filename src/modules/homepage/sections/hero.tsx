"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components";

export default function Hero() {
  const glassRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glassRef.current;
    const bg = bgRef.current;
    if (!el) return;

    let autoX = 50;
    let autoY = 50;

    const update = (x: number, y: number) => {
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };

    // AUTO GLOW
    const interval = setInterval(() => {
      autoX += (Math.random() - 0.5) * 8;
      autoY += (Math.random() - 0.5) * 8;

      autoX = Math.max(20, Math.min(80, autoX));
      autoY = Math.max(20, Math.min(80, autoY));

      update(autoX, autoY);
    }, 1200);

    // MOUSE PARALLAX
    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      update(x, y);

      if (bg) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        bg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    };

    // TOUCH
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      const rect = el.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;

      update(x, y);
    };

    el.addEventListener("mousemove", handleMouse);
    el.addEventListener("touchmove", handleTouch);

    return () => {
      clearInterval(interval);
      el.removeEventListener("mousemove", handleMouse);
      el.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-500"
      >
        <Image
          src="/hero.webp"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* GLOW */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-full px-5 sm:px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 items-center gap-12 min-h-[90vh]">

          {/* LEFT */}
          <div className="flex justify-center lg:justify-start">
            <div
              ref={glassRef}
              className="
                w-full max-w-[520px]
                rounded-3xl
                p-6 sm:p-8 md:p-10
                backdrop-blur-2xl
                border border-white/10
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              "
              style={{
                background:
                  "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.25), rgba(255,255,255,0.05) 40%)",
              }}
            >
              <div className="text-white text-center lg:text-left">

                <h1 className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  leading-tight font-semibold
                ">
                  Solusi Digital Untuk{" "}
                  <span className="text-green-400">
                    Pertumbuhan Bisnis
                  </span>
                </h1>

                <p className="
                  mt-5 text-sm sm:text-base md:text-lg
                  text-white/80 leading-relaxed
                ">
                  Website profesional & digital strategy untuk membantu bisnis Anda berkembang lebih cepat.
                </p>

                <div className="
                  mt-8 flex flex-col sm:flex-row gap-4
                  justify-center lg:justify-start
                ">
                  <Button>
                    Konsultasi Gratis
                  </Button>

                  <button className="
                    px-6 py-3
                    border border-white/20
                    rounded-xl text-white
                    hover:bg-white/10 transition
                  ">
                    Lihat Portfolio
                  </button>
                </div>

                <div className="
                  mt-8 flex flex-col sm:flex-row
                  items-center gap-2 sm:gap-6
                  text-xs sm:text-sm text-white/60
                ">
                  <span>✔️ Dipercaya 100+ bisnis</span>
                  <span className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></span>
                  <span>✔️ Garansi hasil</span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT FLOATING UI */}
          <div className="relative hidden lg:block">
            <div className="relative w-[400px] h-[400px]">

              {/* CARD 1 */}
              <div className="
                absolute top-0 right-10
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
                absolute top-[110px] left-[40px]
                z-10
                w-[260px]
                bg-white rounded-2xl p-5
                shadow-[0_30px_80px_rgba(0,0,0,0.2)]
                animate-[float_5s_ease-in-out_infinite]
              ">
                <p className="text-sm font-semibold text-gray-800">UI Preview</p>
                <div className="mt-3 h-32 bg-gray-100 rounded-lg"></div>
              </div>

              {/* CARD 3 */}
              <div className="
                absolute bottom-0 right-0
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
      </div>
    </section>
  );
}