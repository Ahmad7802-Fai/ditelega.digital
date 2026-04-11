"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.message) {
      alert("Nama dan pesan wajib diisi");
      return;
    }

    setLoading(true);

    const phone = "628177922952";

    const text = `
Halo Ditelaga Digital 👋

Nama: ${form.name}
Email: ${form.email}

Pesan:
${form.message}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);

      // reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 500);
  };

  return (
    <div className="
      relative p-8 rounded-3xl

      bg-white/70 backdrop-blur-xl
      border border-white/40

      shadow-[0_30px_120px_rgba(0,0,0,0.1)]
    ">

      {/* 🔥 GLOW */}
      <div className="
        absolute -top-10 -right-10 w-40 h-40
        bg-green-200/40 blur-3xl rounded-full
      " />

      <div className="relative z-10 space-y-6">

        {/* NAME */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Nama Lengkap
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="
              mt-2 w-full px-4 py-3 rounded-xl
              bg-white border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-green-500
            "
            placeholder="Masukkan nama Anda"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="
              mt-2 w-full px-4 py-3 rounded-xl
              bg-white border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-green-500
            "
            placeholder="Masukkan email Anda"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Pesan
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="
              mt-2 w-full px-4 py-3 rounded-xl
              bg-white border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-green-500
            "
            placeholder="Ceritakan kebutuhan bisnis Anda..."
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            w-full py-3 rounded-xl

            bg-green-600 text-white font-medium

            shadow-[0_10px_40px_rgba(34,197,94,0.4)]

            hover:bg-green-700
            hover:shadow-[0_20px_60px_rgba(34,197,94,0.5)]
            hover:-translate-y-[1px]

            disabled:opacity-70

            transition-all duration-300
          "
        >
          {loading ? "Menghubungi..." : "Konsultasi Gratis via WhatsApp"}
        </button>

        {/* TRUST */}
        <p className="text-xs text-gray-500 text-center">
          🔒 Data Anda aman & tidak akan dibagikan
        </p>

      </div>
    </div>
  );
}