import Hero from "./sections/hero";
import VisionMission from "./sections/vision-mission";
import WhyUs from "./sections/why-us";
import Timeline from "./sections/timeline"; // 🔥 TAMBAH INI
import Stats from "./sections/stats";

export default function AboutSection() {
  return (
    <>
      <Hero />
      <VisionMission />
      <WhyUs />
      <Timeline /> {/* 🔥 MASUK DI SINI */}
      <Stats />
    </>
  );
}