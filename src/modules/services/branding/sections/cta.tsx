import { Section, Container } from "@/components";

export default function CTA() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Creative Digital 👋
Saya ingin konsultasi branding untuk bisnis saya.
Boleh dibantu arahan strateginya?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative py-36 text-center text-white overflow-hidden

        bg-gradient-to-r
        from-[#0f172a]
        via-[#0b1f1a]
        to-[#071a14]
      "
    >
      {/* 🔥 MAIN GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[900px] h-[900px]
        bg-green-400/20 blur-[160px]
        rounded-full
      " />

      {/* 🔥 EXTRA GLOW */}
      <div className="
        absolute right-0 bottom-0
        w-[500px] h-[500px]
        bg-green-300/10 blur-[120px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-white/10 text-white/80 text-xs font-medium
            backdrop-blur
          ">
            Branding Consultation
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-5xl font-semibold tracking-tight leading-tight
          max-w-3xl mx-auto
        ">
          Brand Anda Tidak Harus Terlihat Biasa.{" "}
          <span className="text-green-400">
            Saatnya Tampil Lebih Profesional.
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          mt-6 text-white/70
          max-w-xl mx-auto leading-relaxed text-lg
        ">
          Kami bantu Anda membangun brand yang lebih dipercaya,
          lebih kuat secara visual, dan lebih mudah menarik pelanggan.
        </p>

        {/* CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-10 px-10 py-4 rounded-xl

            bg-green-500 text-white font-medium

            shadow-[0_15px_50px_rgba(34,197,94,0.4)]

            hover:bg-green-400
            hover:shadow-[0_25px_70px_rgba(34,197,94,0.5)]
            hover:-translate-y-[2px]

            transition-all duration-300
          "
        >
          Konsultasi Gratis Sekarang
        </a>

        {/* TRUST */}
        <div className="
          mt-10 flex flex-wrap justify-center gap-6
          text-sm text-white/60
        ">
          <span>✔️ Gratis audit brand awal</span>
          <span>✔️ Tanpa komitmen</span>
          <span>✔️ Fokus hasil & positioning</span>
        </div>

      </Container>

      {/* 🔥 BOTTOM FADE */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-black/40
      " />
    </Section>
  );
}