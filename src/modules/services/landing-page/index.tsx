import Hero from "./sections/hero";
import Benefits from "./sections/benefits";
import Process from "./sections/process";
import SEOContent from "./sections/seo-content"; // 🔥 tambah
import Pricing from "./sections/pricing";
import CTA from "./sections/cta";

export default function LandingPageModule() {
  return (
    <>
      <Hero />
      <Benefits />
      <Process />

      {/* 🔥 SEO + TRUST */}
      <SEOContent />

      {/* 🔥 MONEY SECTION */}
      <Pricing />

      {/* 🔥 FINAL PUSH */}
      <CTA />
    </>
  );
}