"use client";

import { Section, Container, Heading, Button } from "@/components";
import PortfolioGrid from "./components/portfolio-grid";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <Section
      className="
        relative overflow-hidden
        pt-32 pb-28
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-10
        w-[700px] h-[700px]
        bg-green-300/20 blur-[160px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* ========================= */}
        {/* 🔥 HEADING */}
        {/* ========================= */}
        <Heading
          title="Portfolio"
          highlight="Kami"
          subtitle="Bukan sekadar desain, tapi hasil nyata untuk bisnis klien kami."
          align="center"
        />

        {/* 🔥 TRUST LINE */}
        <p className="mt-4 text-center text-sm text-gray-400">
          Setiap project dirancang untuk meningkatkan leads, omzet, dan brand value
        </p>

        {/* ========================= */}
        {/* 🔥 TRUST STATS (BARU) */}
        {/* ========================= */}
        <div className="
          mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center
        ">
          {[
            { value: "200+", label: "Project Selesai" },
            { value: "+120%", label: "Rata-rata Growth" },
            { value: "100+", label: "Klien Puas" },
            { value: "4.9⭐", label: "Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl
                bg-white
                border border-gray-100
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              "
            >
              <h3 className="text-2xl font-bold text-green-600">
                {item.value}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* 🔥 GRID (PUNYA LO) */}
        {/* ========================= */}
        <div className="mt-16">
          <PortfolioGrid />
        </div>

        {/* ========================= */}
        {/* 🔥 CTA (CLOSING) */}
        {/* ========================= */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold">
            Mau Hasil Seperti Ini?
          </h2>

          <p className="text-gray-600 mt-3">
            Kami siap bantu bisnis Anda berkembang dengan strategi yang terbukti berhasil.
          </p>

          <Link href="/contact">
            <Button
              className="
                mt-6
                px-8 py-4
                bg-gradient-to-r
                from-green-500 to-emerald-600
                shadow-[0_0_30px_rgba(34,197,94,0.5)]
                hover:scale-[1.03]
                transition
              "
            >
              🚀 Konsultasi Gratis
            </Button>
          </Link>
        </div>

      </Container>
    </Section>
  );
}