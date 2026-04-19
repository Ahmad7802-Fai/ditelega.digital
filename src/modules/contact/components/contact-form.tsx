"use client";

import { useState } from "react";
import { sendLead, getWhatsAppLink } from "@/lib/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔥 FORMAT NOMOR
  const formatPhone = (phone: string) => {
    let p = phone.replace(/\D/g, "");

    if (p.startsWith("0")) {
      return "62" + p.slice(1);
    }

    if (p.startsWith("62")) {
      return p;
    }

    return p;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (!form.name || !form.phone || !form.message) {
      alert("Nama, nomor WhatsApp, dan pesan wajib diisi");
      return;
    }

    const phone = formatPhone(form.phone);

    if (phone.length < 10) {
      alert("Nomor WhatsApp tidak valid");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      // 🔥 1. KIRIM KE BACKEND
      await sendLead({
        name: form.name,
        phone,
        message: form.message,
      });

      // 🔥 2. COPYWRITING LEBIH “CLOSING”
      const text = `
Halo Ditelaga Digital 👋

Saya tertarik dengan layanan:

👉 ${form.message}

Nama: ${form.name}
No WA: ${phone}

Mohon info paket & estimasi biaya ya 🙌
      `;

      const url = getWhatsAppLink(text);

      // 🔥 3. UX FEEDBACK
      setSuccess(true);

      // 🔥 4. REDIRECT KE WA
      setTimeout(() => {
        window.open(url, "_blank");
      }, 700);

      // 🔥 5. RESET
      setForm({
        name: "",
        phone: "",
        message: "",
      });

    } catch (err: any) {
      alert(err.message || "Gagal mengirim");
    }

    setLoading(false);
  };

  return (
    <div className="
      relative p-8 rounded-3xl
      bg-white/70 backdrop-blur-xl
      border border-white/40
      shadow-[0_30px_120px_rgba(0,0,0,0.1)]
    ">

      {/* GLOW */}
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
            className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500"
            placeholder="Masukkan nama Anda"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Nomor WhatsApp
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500"
            placeholder="Contoh: 08123456789"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Kebutuhan Anda
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500"
            placeholder="Ceritakan kebutuhan bisnis Anda..."
          />
        </div>

        {/* SUCCESS */}
        {success && (
          <div className="text-center text-green-600 text-sm font-medium">
            Menghubungkan ke WhatsApp...
          </div>
        )}

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
            transition-all duration-300
            disabled:opacity-70
          "
        >
          {loading
            ? "Menghubungkan..."
            : "Konsultasi Gratis via WhatsApp"}
        </button>

        {/* TRUST */}
        <p className="text-xs text-gray-500 text-center">
          🔒 Data Anda aman & tidak akan dibagikan
        </p>

      </div>
    </div>
  );
}