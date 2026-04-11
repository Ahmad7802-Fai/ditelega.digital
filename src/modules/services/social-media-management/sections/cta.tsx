import { Section, Container } from "@/components";

export default function CTA() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Creative 👋
Saya tertarik dengan layanan Social Media Management.
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative overflow-hidden
        py-36 text-center text-white

        bg-gradient-to-r
        from-[#0f172a]
        via-[#0b1f1a]
        to-[#071a14]
      "
    >

      {/* 🔥 BIG GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[1000px] h-[1000px]
        bg-green-400/20 blur-[180px]
        rounded-full
      " />

      {/* 🔥 SECOND GLOW */}
      <div className="
        absolute right-0 bottom-0
        w-[500px] h-[500px]
        bg-green-300/20 blur-[120px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* 🔥 BADGE */}
        <div className="mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-500/10 text-green-300 text-xs font-medium
          ">
            🚀 Siap Grow Lebih Cepat?
          </span>
        </div>

        {/* 🔥 HEADLINE */}
        <h2 className="
          text-4xl md:text-5xl font-semibold
          tracking-tight leading-tight
          max-w-3xl mx-auto
        ">
          Ubah Social Media Jadi{" "}
          <span className="text-green-400">
            Mesin Penjualan
          </span>
        </h2>

        {/* 🔥 SUBTEXT */}
        <p className="
          mt-5 text-white/70
          max-w-2xl mx-auto leading-relaxed
        ">
          Jangan hanya aktif posting — bangun strategi yang benar,
          tingkatkan engagement, dan hasilkan conversion nyata untuk bisnis Anda.
        </p>

        {/* 🔥 CTA */}
        <div className="mt-10">

          <a
            href={url}
            target="_blank"
            className="
              inline-flex items-center gap-3

              px-10 py-4 rounded-xl font-medium

              bg-green-500 text-white

              shadow-[0_15px_50px_rgba(34,197,94,0.4)]

              hover:bg-green-400
              hover:shadow-[0_25px_70px_rgba(34,197,94,0.6)]
              hover:-translate-y-[2px]

              transition-all duration-300
            "
          >
            Konsultasi Gratis Sekarang
            <span className="text-lg">→</span>
          </a>

          {/* 🔥 TRUST REDUCER */}
          <p className="mt-4 text-xs text-white/50">
            Respon cepat • Tanpa komitmen • Gratis konsultasi
          </p>

        </div>

      </Container>

    </Section>
  );
}