import Hero from "./sections/hero";
import Benefits from "./sections/benefits";
import Pricing from "./sections/pricing";
import CTA from "./sections/cta";
import SEOContent from "./sections/seo-content"; // 🔥 TAMBAHAN

export default function CompanyProfileSection() {
  return (
    <>
      <Hero />
      <Benefits />
      <SEOContent /> {/* 🔥 INI KUNCI */}
      <Pricing />
      <CTA />
    </>
  );
}