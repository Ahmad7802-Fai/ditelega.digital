"use client";

import { Section, Container, Button } from "@/components";

export default function CTA() {
  const handleWhatsApp = () => {
    const message =
      "Halo, saya tertarik konsultasi website & digital marketing untuk bisnis saya.";
    const url = `https://wa.me/6281779229522?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Section
      className="
        relative overflow-hidden
        bg-gray-900 text-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[700px] h-[700px]
        bg-green-500/20 blur-[160px]
        rounded-full
        z-0
      " />

      <Container className="relative z-10 text-center">

        {/* 🔥 HEADLINE (LEBIH STRONG) */}
        <h2 className="
          text-[32px] md:text-[48px]
          font-semibold
          leading-tight
          tracking-[-0.02em]
        ">
          Siap Scale Bisnis Anda{" "}
          <span className="text-green-400">
            Lebih Cepat?
          </span>
        </h2>

        {/* 🔥 SUBTITLE (LEBIH MENJUAL) */}
        <p className="
          mt-6
          text-[16px] md:text-[18px]
          text-white/70
          max-w-2xl mx-auto
          leading-relaxed
        ">
          Kami bantu Anda membangun website profesional, meningkatkan traffic,
          dan mengubah pengunjung menjadi pelanggan.
        </p>

        {/* 🔥 VALUE POINT (PENTING BANGET) */}
        <div className="
          mt-8
          flex flex-col sm:flex-row
          justify-center gap-6
          text-sm text-white/60
        ">
          <span>✔ Gratis konsultasi 30 menit</span>
          <span>✔ Analisis bisnis & kebutuhan Anda</span>
          <span>✔ Tanpa komitmen</span>
        </div>

        {/* 🔥 CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Button
            onClick={handleWhatsApp}
            className="
              px-8 py-4 text-[16px]
              shadow-[0_10px_40px_rgba(34,197,94,0.4)]
            "
          >
            🚀 Konsultasi Sekarang via WhatsApp
          </Button>

          <Button
            variant="secondary"
            className="px-8 py-4 text-[16px]"
          >
            Lihat Portfolio
          </Button>

        </div>

        {/* 🔥 TRUST */}
        <div className="
          mt-10
          text-sm text-white/60
        ">
          Dipercaya 100+ bisnis di Indonesia
        </div>

        {/* 🔥 URGENCY */}
        <p className="mt-3 text-xs text-white/40">
          Slot terbatas setiap minggu • Respon cepat
        </p>

      </Container>
    </Section>
  );
}