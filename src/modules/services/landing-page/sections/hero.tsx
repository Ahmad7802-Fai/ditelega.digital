import Link from "next/link";
import { Section, Container } from "@/components";

export default function Hero() {
  return (
    <Section
      className="
        relative py-36 text-center overflow-hidden
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[800px] h-[800px]
        bg-green-400/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="
          inline-flex items-center gap-2
          px-4 py-1.5 rounded-full
          bg-green-100 text-green-700 text-xs font-medium
          mb-6
        ">
          🚀 High Converting Landing Page
        </div>

        {/* HEADING */}
        <h1 className="
          text-4xl md:text-6xl lg:text-7xl
          font-semibold tracking-tight leading-tight
        ">
          Jasa Pembuatan{" "}
          <span className="
            text-green-600
            bg-gradient-to-r from-green-600 to-green-400
            bg-clip-text text-transparent
          ">
            Landing Page
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 mt-6 max-w-2xl mx-auto
          text-base md:text-lg leading-relaxed
        ">
          Optimalkan konversi bisnis Anda dengan landing page profesional
          yang cepat, modern, dan dirancang khusus untuk meningkatkan penjualan.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY */}
          <a
            href="https://wa.me/6281779229522"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4 rounded-xl

              bg-green-600 text-white font-medium

              shadow-[0_20px_80px_rgba(34,197,94,0.4)]

              hover:bg-green-500
              hover:shadow-[0_30px_100px_rgba(34,197,94,0.6)]
              hover:-translate-y-[2px]

              transition-all duration-300
            "
          >
            💬 Konsultasi Gratis
          </a>

          {/* SECONDARY */}
          <Link
            href="/portfolio"
            className="
                px-8 py-4 rounded-xl
                border border-gray-200
                bg-white/70 backdrop-blur

                text-gray-700 font-medium

                hover:bg-white
                hover:shadow-md
                hover:-translate-y-[2px]

                transition-all duration-300
            "
            >
            Lihat Portfolio
            </Link>

        </div>

        {/* TRUST */}
        <div className="
          mt-10 flex flex-wrap justify-center gap-6
          text-xs text-gray-500
        ">
          <span>✔ Mobile Friendly</span>
          <span>✔ Fast Loading</span>
          <span>✔ Siap Iklan</span>
        </div>

      </Container>
    </Section>
  );
}