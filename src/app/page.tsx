import {
  Hero,
  Services,
  WhyUs,
  Testimonials,
  Pricing,
  CTA,
} from "@/modules/homepage";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}