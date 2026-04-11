"use client";

import { Section, Container } from "@/components";
import { useRef } from "react";

export default function Solution() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `
      rotateX(${y * -12}deg)
      rotateY(${x * 12}deg)
      scale(1.04)
    `;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <Section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute right-0 top-0
        w-[700px] h-[700px]
        bg-green-300/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}
          <div>

            {/* BADGE */}
            <span className="
              inline-block px-4 py-1.5 rounded-full
              bg-green-100 text-green-700 text-xs font-medium mb-6
            ">
              Custom Solution
            </span>

            {/* TITLE */}
            <h2 className="
              text-3xl md:text-4xl font-semibold tracking-tight leading-tight
            ">
              Solusi yang Disesuaikan{" "}
              <span className="text-green-600">
                dengan Bisnis Anda
              </span>
            </h2>

            {/* DESC */}
            <p className="text-gray-600 mt-5 max-w-md leading-relaxed">
              Kami membangun sistem sesuai proses bisnis Anda.
              Tidak template, full custom, scalable, dan siap berkembang.
            </p>

            {/* LIST */}
            <ul className="mt-8 space-y-4">
              {[
                "Analisa kebutuhan bisnis secara mendalam",
                "Desain UI/UX sesuai workflow tim",
                "Implementasi & training tim",
                "Support & maintenance berkelanjutan",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="
                    w-5 h-5 rounded-full bg-green-600 text-white text-xs
                    flex items-center justify-center mt-[2px]
                    shadow
                    group-hover:scale-110
                    transition
                  ">
                    ✓
                  </span>
                  <p className="text-sm text-gray-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="relative perspective-[1400px]"
            onMouseMove={handleMove}
            onMouseLeave={reset}
          >

            {/* 🔥 GLOW BELAKANG */}
            <div className="
              absolute -top-16 -right-16 w-64 h-64
              bg-green-400/30 blur-[120px] rounded-full
            " />

            {/* 🔥 CARD */}
            <div
              ref={ref}
              className="
                relative transition-transform duration-300
                rounded-3xl overflow-hidden

                bg-white/80 backdrop-blur-xl
                border border-white/40

                shadow-[0_50px_140px_rgba(0,0,0,0.18)]
              "
            >

              {/* 🔥 LIGHT REFLECTION */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-white/40 via-transparent to-transparent
                opacity-60 pointer-events-none
              " />

              {/* CONTENT */}
              <div className="p-6 space-y-5">

                {/* HEADER */}
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded w-2/3" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="h-16 bg-green-200 rounded-xl shadow-inner" />
                  <div className="h-16 bg-gray-100 rounded-xl" />
                  <div className="h-16 bg-gray-100 rounded-xl" />
                </div>

                {/* 🔥 CHART */}
                <div className="
                  h-32 bg-gradient-to-r from-green-100 to-green-50
                  rounded-xl flex items-end p-3 gap-1
                ">
                  {[40, 60, 30, 80, 55, 70].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-full bg-green-400 rounded"
                    />
                  ))}
                </div>

                {/* TABLE */}
                <div className="space-y-2 mt-4">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                  <div className="h-3 bg-gray-200 rounded w-4/6" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}