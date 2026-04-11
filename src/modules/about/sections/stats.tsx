import { Section, Container } from "@/components";
import { stats } from "../data";
import StatCard from "../components/stat-card";

export default function Stats() {
  return (
    <Section className="
      relative overflow-hidden
      py-32
      bg-gradient-to-b from-gray-900 via-gray-950 to-black
      text-white
    ">
      
      {/* 🔥 GREEN GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
        w-[800px] h-[800px]
        bg-green-500/20 blur-[200px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* 🔥 TITLE */}
        <h2 className="text-center text-3xl font-semibold mb-16">
          Dipercaya Banyak Bisnis
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {stats.map((item, i) => (
            <StatCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}