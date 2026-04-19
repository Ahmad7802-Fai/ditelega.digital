"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";

export default function HeroHybrid() {
  const glassRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glassRef.current;
    const float = floatRef.current;

    if (!el || !float) return;

    let x = 50;
    let y = 50;

    // 🔥 AUTO GLOW
    const interval = setInterval(() => {
      x += (Math.random() - 0.5) * 6;
      y += (Math.random() - 0.5) * 6;

      x = Math.max(20, Math.min(80, x));
      y = Math.max(20, Math.min(80, y));

      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    }, 1200);

    // 🔥 PARALLAX FLOATING 3D
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const moveX = (e.clientX / innerWidth - 0.5) * 40;
      const moveY = (e.clientY / innerHeight - 0.5) * 40;

      float.style.transform = `
        translate(${moveX}px, ${moveY}px)
        translateY(-50%)
        rotateX(${moveY * -0.2}deg)
        rotateY(${moveX * 0.2}deg)
      `;

      float.style.boxShadow = `
        ${-moveX * 1.5}px ${20 + moveY * 2}px 120px rgba(0,0,0,0.6)
      `;
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-28 lg:pt-32 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.webp"
          alt="Hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[85vh] relative">

          {/* ================= LEFT ================= */}
          <div className="flex justify-center lg:justify-start">
            <div
              ref={glassRef}
              className="
                w-full max-w-[620px]
                rounded-3xl
                p-8 sm:p-10 md:p-12 lg:p-14
                backdrop-blur-2xl
                border border-white/10
                shadow-[0_30px_100px_rgba(0,0,0,0.4)]
              "
              style={{
                background:
                  "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.15), rgba(255,255,255,0.03) 45%)",
              }}
            >
              <div className="text-white">

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-semibold">
                  Naikkan Omset Bisnis
                  <br />
                  <span className="text-green-400">
                    Hingga 3x Lipat
                  </span>
                  <br />
                  dengan Website &
                  <br />
                  Digital Marketing
                </h1>

                <p className="mt-6 text-white/80 max-w-[520px]">
                  Kami bantu bisnis Anda mendapatkan lebih banyak leads,
                  closing, dan repeat customer secara konsisten.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      className="
                        px-6 py-3 rounded-xl text-white font-medium
                        bg-gradient-to-r from-green-400 via-emerald-500 to-green-500
                        shadow-[0_0_30px_rgba(34,197,94,0.5)]
                        hover:scale-[1.03] transition
                      "
                    >
                      🚀 Konsultasi Gratis
                    </Button>
                  </Link>

                  <Link href="/portfolio">
                    <button className="px-6 py-3 border border-white/20 rounded-xl text-white hover:bg-white/10">
                      Lihat Portfolio
                    </button>
                  </Link>
                </div>

                <p className="mt-4 text-green-400 text-xs">
                  🔥 Slot terbatas minggu ini
                </p>

              </div>
            </div>
          </div>

          {/* ================= RIGHT FLOATING 3D ================= */}
          <div className="relative hidden lg:block">

            {/* GLOW */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-green-500/20 blur-[120px] rounded-full" />

            {/* CARD */}
            <div
              ref={floatRef}
              className="
                absolute right-0 top-1/2 -translate-y-1/2
                w-[420px]
                rounded-3xl
                p-6 sm:p-8
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                transition-transform duration-200 ease-out
              "
            >

              <div className="relative w-full h-[160px] rounded-xl overflow-hidden">
                <Image
                  src="/hero.webp"
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6 text-white">
                <h2 className="text-2xl font-semibold">
                  Mau Leads Masuk Setiap Hari?
                </h2>

                <p className="text-sm text-white/70 mt-3">
                  Kami bantu setup sistem digital marketing yang menghasilkan
                  leads otomatis untuk bisnis Anda.
                </p>
              </div>

              <div className="mt-6">
                <Link href="/contact">
                  <Button className="
                    w-full
                    bg-gradient-to-r
                    from-green-400 to-emerald-500
                    shadow-[0_0_30px_rgba(34,197,94,0.6)]
                  ">
                    💬 Chat WhatsApp Sekarang
                  </Button>
                </Link>

                <p className="text-xs text-green-400 mt-3">
                  ⚡ Respon cepat (±5 menit)
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}