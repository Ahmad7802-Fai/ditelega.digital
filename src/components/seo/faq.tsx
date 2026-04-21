"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-600 mt-4">
            Temukan jawaban dari pertanyaan yang sering diajukan terkait layanan kami.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`
                  border rounded-2xl transition-all
                  ${isOpen ? "border-green-500 shadow-lg" : "border-gray-200"}
                `}
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="
                    w-full text-left px-6 py-5
                    flex justify-between items-center
                    font-medium text-gray-900
                  "
                >
                  {item.question}

                  <span
                    className={`
                      text-xl transition-transform
                      ${isOpen ? "rotate-45 text-green-600" : "text-gray-400"}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}