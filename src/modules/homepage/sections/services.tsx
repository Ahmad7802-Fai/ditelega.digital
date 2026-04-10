import { Section, Container, Heading } from "@/components";
import { services } from "../data";
import ServiceCard from "../components/service-card"; // ✅ FIX

export default function Services() {
  return (
    <Section background="muted">
      <Container>

        <Heading
          title="Layanan"
          highlight="Premium"
          subtitle="Solusi digital terbaik untuk bisnis Anda"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}