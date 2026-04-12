"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  const handleWhatsApp = () => {
    const message =
      "Halo, saya tertarik bekerja sama dengan Ditelaga Digital.";
    const url = `https://wa.me/6281779229522?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 bottom-0
          w-[600px] h-[600px]
          bg-green-500/10 blur-[140px]
          rounded-full
          z-0
        "
      />

      <Container className="relative z-10 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          {/* 🔥 BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-3 group">

              {/* LOGO */}
              <div className="relative w-[40px] h-[90px]">
                <Image
                  src="/icon.svg"
                  alt="Ditelaga Digital"
                  fill
                  className="object-contain transition group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="leading-tight">
                <p className="text-green-400 font-semibold text-sm">
                  Ditelaga Creative Digital
                </p>
                <p className="text-white text-xs tracking-wide">
                  PT DITELAGA GLOBAL MANDIRI
                </p>
              </div>

            </Link>

            <p className="text-white/60 mt-4 text-sm leading-relaxed">
              Solusi digital modern untuk website, branding, SEO, dan marketing.
              Kami membantu bisnis Anda tumbuh lebih cepat di era digital.
            </p>

            {/* 🔥 SOCIAL */}
            <div className="flex gap-4 mt-6">

              <a
                  href="https://instagram.com/ditelaga.idn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                <div className="
                  p-2 rounded-lg
                  bg-white/5
                  hover:bg-green-500/20
                  transition
                  group-hover:scale-110
                  group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
                ">
                  <IconBrandInstagram size={18} />
                </div>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="group"
              >
                <div className="
                  p-2 rounded-lg
                  bg-white/5
                  hover:bg-green-500/20
                  transition
                  group-hover:scale-110
                  group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
                ">
                  <IconBrandFacebook size={18} />
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="group"
              >
                <div className="
                  p-2 rounded-lg
                  bg-white/5
                  hover:bg-green-500/20
                  transition
                  group-hover:scale-110
                  group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
                ">
                  <IconBrandLinkedin size={18} />
                </div>
              </a>

              <a
                href="mailto:hello@ditelaga.com"
                className="group"
              >
                <div className="
                  p-2 rounded-lg
                  bg-white/5
                  hover:bg-green-500/20
                  transition
                  group-hover:scale-110
                  group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
                ">
                  <IconMail size={18} />
                </div>
              </a>

            </div>
          </div>

          {/* 🔥 MENU */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Menu
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              <li className="hover:text-green-400 transition cursor-pointer">Home</li>
              <li className="hover:text-green-400 transition cursor-pointer">Services</li>
              <li className="hover:text-green-400 transition cursor-pointer">Portfolio</li>
              <li className="hover:text-green-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* 🔥 SERVICES */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Services
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              <li className="hover:text-green-400 transition">Website Development</li>
              <li className="hover:text-green-400 transition">SEO Optimization</li>
              <li className="hover:text-green-400 transition">Google Ads</li>
              <li className="hover:text-green-400 transition">Branding & Creative</li>
            </ul>
          </div>

          {/* 🔥 CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Hubungi Kami
            </h4>

            <p className="text-white/60 text-sm">
              Konsultasikan kebutuhan digital bisnis Anda sekarang.
            </p>

            <Button
              onClick={handleWhatsApp}
              className="
                mt-5
                px-5 py-3 text-sm
                shadow-[0_10px_30px_rgba(34,197,94,0.4)]
              "
            >
              💬 WhatsApp Kami
            </Button>
          </div>

        </div>

        {/* 🔥 DIVIDER */}
        <div
          className="
            mt-16 pt-6
            border-t border-white/10
            flex flex-col md:flex-row
            justify-between items-center gap-4
          "
        >
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Ditelaga Creative Digital. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/40">
            <span className="hover:text-green-400 transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-green-400 transition cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

      </Container>
    </footer>
  );
}