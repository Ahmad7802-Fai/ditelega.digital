import Hero from "./sections/hero";
import Features from "./sections/features";
import Solution from "./sections/solution";
import Process from "./sections/process";
import SEOContent from "./sections/seo-content";
import Pricing from "./sections/pricing";
import CTA from "./sections/cta";

export default function ManagementSystemModule() {
  return (
    <>
      <Hero />
      <Features />
      <Solution />
      <Process />
      <SEOContent />
      <Pricing />
      <CTA />
    </>
  );
}