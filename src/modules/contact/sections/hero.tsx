import { Section, Container } from "@/components";

export default function ContactHero() {
  return (
    <Section className="
      relative pt-32 pb-24
      bg-gradient-to-b from-white via-green-50/40 to-white
      overflow-hidden
    ">

      {/* 🔥 BIG GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-10
        w-[800px] h-[800px]
        bg-green-300/20 blur-[180px]
        rounded-full
      " />

      <Container className="relative z-10 text-center max-w-2xl">

        <h1 className="
          text-4xl md:text-5xl
          font-semibold tracking-tight
        ">
          Hubungi{" "}
          <span className="text-green-600">
            Kami
          </span>
        </h1>

        <p className="
          mt-6 text-gray-600 leading-relaxed text-lg
        ">
          Konsultasikan kebutuhan digital Anda. Kami siap membantu
          bisnis Anda tumbuh lebih cepat.
        </p>

      </Container>
    </Section>
  );
}