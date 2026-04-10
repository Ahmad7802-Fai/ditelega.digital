import { Section, Container, Heading } from "@/components";
import TestimonialCard from "../components/testimonial-card";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <Section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-gray-50 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-10
        w-[500px] h-[500px]
        bg-green-200/20 blur-[120px]
        rounded-full
      " />

      <Container>

        {/* 🔥 HEADING */}
        <Heading
          title="Kata Mereka"
          highlight="Tentang Kami"
          subtitle="Bisnis dari berbagai industri mempercayakan layanan kami"
          align="center"
        />

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}