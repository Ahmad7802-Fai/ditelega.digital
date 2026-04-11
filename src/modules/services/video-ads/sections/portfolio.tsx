import { Section, Container } from "@/components";
import { portfolio } from "../data";
import PortfolioCard from "../components/portfolio-card";

export default function Portfolio() {
  return (
    <Section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[900px] h-[900px]
        bg-green-300/20 blur-[180px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium mb-6
          ">
            Portfolio Video Ads
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl text-center font-semibold tracking-tight
        ">
          Contoh Video Ads{" "}
          <span className="text-green-600">
            yang Menghasilkan
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-5
          max-w-2xl mx-auto leading-relaxed
        ">
          Beberapa video ads yang telah kami produksi untuk membantu bisnis meningkatkan engagement, trust, dan conversion.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {portfolio.map((item, i) => (
            <PortfolioCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}