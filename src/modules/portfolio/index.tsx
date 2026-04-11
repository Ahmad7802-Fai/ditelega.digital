import { Section, Container, Heading } from "@/components";
import PortfolioGrid from "./components/portfolio-grid";

export default function PortfolioSection() {
  return (
    <Section className="bg-gradient-to-b from-white via-green-50/40 to-white">

      <Container>
        <Heading
          title="Portfolio"
          subtitle="Beberapa karya digital terbaik yang telah kami buat untuk klien di berbagai industri."
          align="center"
        />

        <PortfolioGrid />
      </Container>

    </Section>
  );
}