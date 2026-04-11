"use client";

import { Section, Container } from "@/components";
import { process } from "../data";
import ProcessCard from "../components/process-card";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* 🔥 WRAPPER REF (FIX) */}
      <div ref={ref}>

        {/* BG */}
        <div className="
          absolute left-1/2 -translate-x-1/2 top-0
          w-[700px] h-[700px]
          bg-green-300/20 blur-[140px]
          rounded-full
        " />

        <Container className="relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
              Workflow
            </span>

            <h2 className="text-4xl font-semibold mt-4">
              Alur Implementasi
            </h2>

            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Proses sistematis untuk memastikan hasil optimal & scalable.
            </p>
          </div>

          {/* LINE */}
          <div className="relative">
            <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200" />

            <motion.div
              style={{ scaleX }}
              className="
                absolute top-6 left-0 h-[2px] w-full origin-left
                bg-gradient-to-r from-green-500 to-green-300
              "
            />
          </div>

          {/* STEPS */}
          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {process.map((item, i) => (
              <ProcessCard key={i} {...item} index={i} />
            ))}
          </div>

        </Container>
      </div>
    </Section>
  );
}