import { Section, Container, Heading } from "@/components";
import { services } from "../data";
import ServiceCard from "../components/service-card";

export default function Services() {
  return (
    <Section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white to-gray-50
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[600px] h-[600px]
        bg-green-200/20 blur-3xl rounded-full
      " />

      <Container>

        <Heading
          title="Layanan"
          highlight="Premium"
          subtitle="Solusi digital terbaik untuk bisnis Anda"
        />

        <div className="
          grid md:grid-cols-2 lg:grid-cols-3
          gap-8 mt-14
        ">
          {services.map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}