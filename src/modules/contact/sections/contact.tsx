import { Section, Container } from "@/components";
import ContactInfo from "../components/contact-info";
import ContactForm from "../components/contact-form";

export default function ContactSection() {
  return (
    <Section className="
      relative py-28
      bg-gradient-to-b from-white to-green-50/30
    ">

      <Container>

        <div className="
          grid md:grid-cols-2 gap-20 items-start
        ">
          <ContactInfo />
          <ContactForm />
        </div>

      </Container>
    </Section>
  );
}