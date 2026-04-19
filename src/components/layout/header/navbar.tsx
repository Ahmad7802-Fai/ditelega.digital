"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, Container, NavItem, MegaMenu } from "@/components";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  // 🔥 LOCK SCROLL SAAT MENU BUKA
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // 🔥 DETECT SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 STATE FINAL (INI KUNCI)
  const isDark = scrolled || !isHome;

  return (
    <>
      {/* 🔥 NAVBAR */}
      <header
        className={`
          fixed top-0 w-full z-50 transition-all duration-300

          ${
            isDark
              ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-200/60"
              : "bg-gradient-to-b from-black/70 to-transparent border-b border-white/10"
          }
        `}
      >
        <Container size="wide">
          <div className="h-16 sm:h-20 flex items-center justify-between">

            {/* 🔥 LOGO */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-[140px] sm:w-[180px] md:w-[200px] h-[40px] sm:h-[45px] md:h-[50px]">
                <Image
                  src={isDark ? "/logo-dark.webp" : "/logo-light.png"}
                  alt="Ditelaga Digital"
                  fill
                  sizes="180px"
                  className="object-contain transition group-hover:scale-105"
                />
              </div>
            </Link>

            {/* 🔥 DESKTOP MENU */}
            <nav
              className={`
                hidden md:flex items-center gap-8 lg:gap-10
                transition-all duration-300

                ${
                  isDark
                    ? "text-gray-800"
                    : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                }
              `}
            >
              <NavItem label="Home" href="/" />
              <MegaMenu />
              <NavItem label="Portfolio" href="/portfolio" />
              <NavItem label="Clients" href="/clients" />
              <NavItem label="About" href="/about" />
              <NavItem label="Contact" href="/contact" />
            </nav>

            {/* 🔥 CTA DESKTOP */}
            <div className="hidden md:block">
              <button
                className={`
                  px-5 py-2.5 rounded-xl font-medium transition-all duration-300

                  ${
                    isDark
                      ? "bg-green-600 text-white shadow-md hover:bg-green-700"
                      : "bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20"
                  }
                `}
              >
                Hubungi Kami
              </button>
            </div>

            {/* 🔥 MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className={`
                md:hidden
                relative w-10 h-10
                flex items-center justify-center
                rounded-xl
                border transition-all duration-300

                ${
                  isDark
                    ? "border-gray-300 bg-white/90"
                    : "border-white/30 bg-black/30 backdrop-blur"
                }

                shadow-md active:scale-95
              `}
            >
              <div className="flex flex-col gap-[4px]">
                <span
                  className={`
                    block h-[2px] w-5 transition-all duration-300
                    ${isDark ? "bg-black" : "bg-white"}
                    ${open ? "rotate-45 translate-y-[6px]" : ""}
                  `}
                />
                <span
                  className={`
                    block h-[2px] w-5 transition-all duration-300
                    ${isDark ? "bg-black" : "bg-white"}
                    ${open ? "opacity-0" : ""}
                  `}
                />
                <span
                  className={`
                    block h-[2px] w-5 transition-all duration-300
                    ${isDark ? "bg-black" : "bg-white"}
                    ${open ? "-rotate-45 -translate-y-[6px]" : ""}
                  `}
                />
              </div>
            </button>

          </div>
        </Container>
      </header>

      {/* 🔥 MOBILE MENU */}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}