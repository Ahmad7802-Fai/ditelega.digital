"use client";

import Image from "next/image";
import { Section, Container } from "@/components";
import { timeline } from "../data";
import { cn } from "@/lib/utils";

export default function Timeline() {
  return (
    <Section
      className="
        relative py-36
        bg-gradient-to-b from-white via-green-50/40 to-white
        overflow-hidden
      "
    >
      {/* 🔥 BIG SOFT GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-10
          w-[1000px] h-[1000px]
          bg-green-300/20 blur-[220px]
          rounded-full
        "
      />

      <Container className="relative z-10">
        {/* 🔥 HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Perjalanan Kami
          </h2>

          <p className="text-gray-500 mt-5 text-base leading-relaxed">
            Dari awal hingga menjadi partner digital terpercaya
          </p>
        </div>

        {/* 🔥 TIMELINE */}
        <div className="relative mt-28">
          {/* 🔥 LINE */}
          <div
            className="
              absolute left-1/2 top-0 -translate-x-1/2
              w-[2px] h-full
              bg-gradient-to-b from-green-400 via-green-300/70 to-transparent
            "
          />

          <div className="space-y-32">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="relative grid md:grid-cols-2 gap-16 items-center"
                >
                  {/* 🔥 IMAGE */}
                  <div
                    className={cn(
                      "group relative",
                      !isLeft && "md:order-2"
                    )}
                  >
                    <div
                      className="
                        relative h-[280px] rounded-3xl overflow-hidden
                        border border-white/40
                        bg-white/40 backdrop-blur-xl
                        shadow-[0_30px_120px_rgba(0,0,0,0.18)]
                        group-hover:scale-[1.04]
                        group-hover:-rotate-[0.5deg]
                        transition-all duration-700 ease-out
                      "
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="
                          object-cover
                          group-hover:scale-110
                          transition duration-700
                        "
                      />

                      {/* overlay gradient */}
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-t from-black/50 via-black/10 to-transparent
                          opacity-60
                        "
                      />

                      {/* hover overlay */}
                      <div
                        className="
                          absolute inset-0
                          bg-black/20 backdrop-blur-[2px]
                          opacity-0 group-hover:opacity-100
                          transition duration-500
                        "
                      />
                    </div>
                  </div>

                  {/* 🔥 CONTENT */}
                  <div
                    className={cn(
                      "relative",
                      isLeft ? "md:text-right" : "md:text-left"
                    )}
                  >
                    {/* glow kecil */}
                    <div
                      className="
                        absolute -top-6 -left-6 w-24 h-24
                        bg-green-200/40 blur-2xl rounded-full
                        opacity-0 group-hover:opacity-100
                        transition
                      "
                    />

                    {/* YEAR */}
                    <p className="text-green-600 text-sm font-semibold tracking-wide">
                      {item.year}
                    </p>

                    {/* TITLE */}
                    <h3 className="text-2xl font-semibold mt-2 text-gray-900">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className={cn(
                        "text-gray-600 mt-4 text-sm leading-relaxed max-w-md",
                        isLeft && "ml-auto"
                      )}
                    >
                      {item.desc}
                    </p>

                    {/* 🔥 LINE ACCENT */}
                    <div
                      className={cn(
                        "mt-6 h-[2px] w-12 bg-green-600 opacity-60 group-hover:w-20 transition-all duration-300",
                        isLeft && "ml-auto"
                      )}
                    />
                  </div>

                  {/* 🔥 DOT */}
                  <div
                    className="
                      hidden md:block absolute left-1/2 -translate-x-1/2
                      w-6 h-6 rounded-full
                      bg-green-600
                      shadow-[0_0_0_10px_rgba(34,197,94,0.15)]
                      ring-4 ring-white
                      z-20
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* 🔥 FADE BOTTOM */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-24
          bg-gradient-to-b from-transparent to-white
        "
      />
    </Section>
  );
}