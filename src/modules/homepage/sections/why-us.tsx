import { Section, Container, Heading } from "@/components";
import FeatureCard from "../components/feature-card";
import { features } from "../data";

export default function WhyUs() {
  return (
    <Section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 SOFT BACKGROUND GLOW */}
      <div className="
        absolute -left-40 top-20
        w-[500px] h-[500px]
        bg-green-300/20 blur-[140px]
        rounded-full
      " />

      <div className="
        absolute -right-40 bottom-10
        w-[500px] h-[500px]
        bg-blue-300/20 blur-[140px]
        rounded-full
      " />

      <Container>

        {/* 🔥 HEADING (UPGRADE COPY) */}
        <Heading
          title="Kenapa Bisnis Anda Harus Memilih"
          highlight="Ditelaga Creative Digital?"
          subtitle="Kami tidak hanya membuat tampilan—kami membangun sistem digital yang meningkatkan kepercayaan, traffic, dan penjualan."
          align="center"
        />

        {/* 🔥 GRID */}
        <div className="
          grid md:grid-cols-2 lg:grid-cols-3
          gap-10 mt-20
        ">
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}