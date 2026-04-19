// src/modules/clients/index.tsx

"use client";

import { Section, Container, Heading, Button } from "@/components";
import ClientGrid from "./components/client-grid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ========================= */
/* 🔥 TESTIMONIAL DATA */
/* ========================= */

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner Coffee Shop",
    text: "Omset naik 2x dalam 3 bulan setelah pakai jasa Ditelaga 🔥",
  },
  {
    name: "Siti Rahma",
    role: "Fashion Brand",
    text: "Leads masuk tiap hari, closing jauh lebih gampang.",
  },
  {
    name: "Andi Wijaya",
    role: "Bisnis Properti",
    text: "Website + ads mereka benar-benar menghasilkan.",
  },
];

export default function ClientsSection() {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      className="
        relative overflow-hidden
        pt-32 pb-28
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-10
        w-[700px] h-[700px]
        bg-green-300/20 blur-[160px]
        rounded-full
      " />

      <div className="
        absolute inset-0
        bg-gradient-to-t from-white via-transparent to-white
        pointer-events-none
      " />

      <Container className="relative z-10">

        {/* ========================= */}
        {/* 🔥 HEADING */}
        {/* ========================= */}
        <Heading
          title="Semua"
          highlight="Client Kami"
          subtitle="Showcase project premium yang telah kami kerjakan."
          align="center"
        />

        <p className="mt-4 text-center text-sm text-gray-400">
          Dipercaya oleh berbagai bisnis dari berbagai industri
        </p>

        {/* ========================= */}
        {/* 🔥 TRUST STATS */}
        {/* ========================= */}
        <div className="
          mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center
        ">
          {[
            { value: "200+", label: "Project Selesai" },
            { value: "100+", label: "Klien Aktif" },
            { value: "4.9⭐", label: "Rating Klien" },
            { value: "5+", label: "Tahun Pengalaman" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl
                bg-white
                border border-gray-100
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              "
            >
              <h3 className="text-2xl font-bold text-green-600">
                {item.value}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* 🔥 GRID CLIENT (LO PUNYA) */}
        {/* ========================= */}
        <div className="mt-16">
          <ClientGrid />
        </div>

        {/* ========================= */}
        {/* 🔥 TESTIMONIAL SLIDER */}
        {/* ========================= */}
        <div className="mt-24 max-w-3xl mx-auto text-center">

          <div className="
            p-8 rounded-3xl
            bg-white
            border border-gray-100
            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            transition-all duration-500
          ">
            <p className="text-lg text-gray-700 leading-relaxed">
              “{testimonials[index].text}”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">
                {testimonials[index].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[index].role}
              </p>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`
                  w-2 h-2 rounded-full transition
                  ${i === index ? "bg-green-500 scale-125" : "bg-gray-300"}
                `}
              />
            ))}
          </div>

        </div>

        {/* ========================= */}
        {/* 🔥 CTA (CLOSING) */}
        {/* ========================= */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold">
            Siap Jadi Klien Berikutnya?
          </h2>

          <p className="text-gray-600 mt-3">
            Konsultasi gratis dan lihat bagaimana kami bisa bantu bisnis Anda berkembang.
          </p>

          <Link href="/contact">
            <Button className="
              mt-6
              px-8 py-4
              bg-gradient-to-r
              from-green-500 to-emerald-600
              shadow-[0_0_30px_rgba(34,197,94,0.5)]
              hover:scale-[1.03]
              transition
            ">
              🚀 Konsultasi Gratis
            </Button>
          </Link>
        </div>

      </Container>
    </Section>
  );
}