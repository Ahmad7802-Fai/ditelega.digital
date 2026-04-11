import { Section, Container } from "@/components";

export default function CTA() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya tertarik membuat landing page untuk bisnis saya.
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative py-36 text-center
        bg-gradient-to-r from-[#0f172a] via-[#0b1f1a] to-[#071a14]
        text-white overflow-hidden
      "
    >
      {/* 🔥 BIG GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[900px] h-[900px]
        bg-green-500/20 blur-[180px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-500/10 text-green-400 text-xs font-medium
          ">
            🚀 Siap Scale Bisnis Anda?
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-5xl font-semibold tracking-tight leading-tight
        ">
          Tingkatkan Penjualan dengan{" "}
          <span className="text-green-400">
            Landing Page Profesional
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          mt-6 text-white/70
          max-w-xl mx-auto leading-relaxed
        ">
          Konsultasi gratis sekarang dan dapatkan strategi landing page
          yang siap meningkatkan konversi bisnis Anda.
        </p>

        {/* CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            mt-10 px-10 py-4 rounded-xl

            bg-green-600 text-white font-semibold

            shadow-[0_20px_80px_rgba(34,197,94,0.4)]

            hover:bg-green-500
            hover:shadow-[0_30px_120px_rgba(34,197,94,0.6)]
            hover:-translate-y-[2px]

            transition-all duration-300
          "
        >
          💬 Konsultasi via WhatsApp
        </a>

        {/* TRUST */}
        <div className="
          mt-8 flex flex-wrap justify-center gap-6
          text-xs text-white/50
        ">
          <span>✔ Gratis Konsultasi</span>
          <span>✔ Tanpa Komitmen</span>
          <span>✔ Respon Cepat</span>
        </div>

        {/* URGENCY */}
        <p className="mt-6 text-xs text-green-400">
          🔥 Slot terbatas setiap bulan
        </p>

      </Container>

      {/* 🔥 FADE KE FOOTER */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-[#071a14]
      " />
    </Section>
  );
}