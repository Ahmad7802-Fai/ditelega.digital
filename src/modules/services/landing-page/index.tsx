import Hero from "./sections/hero";
import Benefits from "./sections/benefits";
import Process from "./sections/process";
import Pricing from "./sections/pricing";
import CTA from "./sections/cta";

export default function LandingPageModule() {
  return (
    <>
      <Hero />
      <Benefits />
      <Process />
      <Pricing />
      <CTA />
    </>
  );
}