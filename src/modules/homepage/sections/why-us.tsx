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
      {/* 🔥 BACKGROUND DECORATION */}
      <div className="
        absolute -left-40 top-20
        w-[400px] h-[400px]
        bg-green-300/20 blur-[120px]
        rounded-full
      " />

      <div className="
        absolute -right-40 bottom-10
        w-[400px] h-[400px]
        bg-blue-300/20 blur-[120px]
        rounded-full
      " />

      <Container>
        
        {/* 🔥 HEADING */}
        <Heading
          title="Kenapa Memilih"
          highlight="Kami?"
          subtitle="Kami menghadirkan solusi digital premium dengan standar tinggi"
          align="center"
        />

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}