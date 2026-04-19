"use client";

import Link from "next/link";
import { Container, Button } from "@/components";
import { services } from "@/lib/services";
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
    <footer className="relative bg-gray-950 text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[700px] bg-green-500/10 blur-[160px] rounded-full z-0" />

      <Container className="relative z-10 py-20">

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-12">

          {/* ========================= */}
          {/* 🔥 BRAND */}
          {/* ========================= */}
          <div>
            <Link href="/" className="flex items-center">
              <div>
                <p className="text-green-400 font-semibold text-sm">
                  Ditelaga Creative Digital
                </p>
                <p className="text-white/50 text-xs">
                  PT DITELAGA GLOBAL MANDIRI
                </p>
              </div>
            </Link>

            <p className="text-white/50 mt-4 text-sm leading-relaxed">
              Solusi digital modern untuk website, branding, SEO, dan marketing.
              Kami membantu bisnis Anda tumbuh lebih cepat di era digital.
            </p>

            {/* 🔥 SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  icon: IconBrandInstagram,
                  link: "https://instagram.com/ditelaga.idn",
                },
                {
                  icon: IconBrandFacebook,
                  link: "https://facebook.com/ditelaga.id",
                },
                {
                  icon: IconBrandLinkedin,
                  link: "#",
                },
                {
                  icon: IconMail,
                  link: "mailto:hello@ditelaga.com",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <a key={i} href={item.link} target="_blank" className="group">
                    <div className="p-2 rounded-lg bg-white/5 hover:bg-green-500/20 transition group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ========================= */}
          {/* 🔥 MENU */}
          {/* ========================= */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>

            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/service/seo" className="hover:text-green-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-green-400 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================= */}
          {/* 🔥 SERVICES (AUTO CLEAN) */}
          {/* ========================= */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3">

              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/service/${service.slug}`}
                  className="
                    flex items-center gap-2
                    text-white/50 
                    hover:text-green-400 
                    transition 
                    text-sm 
                    hover:pl-2
                  "
                >
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full opacity-70" />

                  <span>
                    {service.shortTitle}
                  </span>
                </Link>
              ))}

            </div>
          </div>

          {/* ========================= */}
          {/* 🔥 CTA */}
          {/* ========================= */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>

            <p className="text-white/50 text-sm">
              Konsultasikan kebutuhan digital bisnis Anda sekarang.
            </p>

            <Button
              onClick={handleWhatsApp}
              className="mt-5 px-5 py-3 text-sm shadow-[0_10px_30px_rgba(34,197,94,0.4)]"
            >
              💬 WhatsApp Kami
            </Button>
          </div>

        </div>

        {/* ========================= */}
        {/* 🔥 BOTTOM */}
        {/* ========================= */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

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