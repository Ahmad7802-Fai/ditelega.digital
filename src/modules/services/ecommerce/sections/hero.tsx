import { Section, Container } from "@/components";
import Link from "next/link";

export default function Hero() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya tertarik membuat website e-commerce untuk bisnis saya.
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative py-36 text-center overflow-hidden
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
        bg-green-400/20 blur-[120px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            🚀 Solusi Toko Online Modern
          </span>
        </div>

        {/* TITLE */}
        <h1 className="
          text-4xl md:text-6xl font-semibold
          tracking-tight leading-tight
        ">
          Jasa Pembuatan{" "}
          <span className="text-green-600">
            Website E-Commerce
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 mt-6
          max-w-2xl mx-auto
          leading-relaxed
        ">
          Bangun toko online modern, cepat, dan terpercaya untuk meningkatkan
          omzet bisnis Anda secara signifikan.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* PRIMARY */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4 rounded-xl

              bg-green-600 text-white font-medium

              shadow-[0_10px_40px_rgba(34,197,94,0.4)]

              hover:bg-green-500
              hover:shadow-[0_20px_80px_rgba(34,197,94,0.6)]
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
          <span>✔ SEO Ready</span>
          <span>✔ Siap Iklan</span>
        </div>

      </Container>
    </Section>
  );
}