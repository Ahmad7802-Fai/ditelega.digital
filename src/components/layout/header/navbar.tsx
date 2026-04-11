"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button, Container, NavItem, MegaMenu } from "@/components";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /* 🔥 LOCK SCROLL SAAT MENU BUKA */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* 🔥 NAVBAR */}
      <header
        className="
          fixed top-0 w-full z-50
          backdrop-blur-xl bg-white/70
          border-b border-gray-200/60
          shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        "
      >
        <Container size="wide">
          <div className="
            h-16 sm:h-20
            flex items-center justify-between
          ">

            {/* 🔥 LOGO */}
            <Link href="/" className="flex items-center group">
              <div className="
                relative
                w-[140px] sm:w-[180px] md:w-[200px]
                h-[40px] sm:h-[45px] md:h-[50px]
              ">
                <Image
                  src="/logo2.webp"
                  alt="Ditelaga Digital"
                  fill
                  priority
                  className="object-contain transition group-hover:scale-105"
                />
              </div>
            </Link>

            {/* 🔥 DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              <NavItem label="Home" href="/" />
              <MegaMenu />
              <NavItem label="Portfolio" href="/portfolio" />
              <NavItem label="Clients" href="/clients" />
              <NavItem label="About" href="/about" />
              <NavItem label="Contact" href="/contact" />
            </nav>

            {/* 🔥 CTA DESKTOP */}
            <div className="hidden md:block">
              <Button size="md">
                Hubungi Kami
              </Button>
            </div>

            {/* 🔥 MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden
                relative w-10 h-10
                flex items-center justify-center
                rounded-xl
                border border-gray-200
                bg-white/70 backdrop-blur
                shadow-sm

                active:scale-95
                transition
              "
            >
              {/* HAMBURGER ICON */}
              <div className="flex flex-col gap-[4px]">
                <span
                  className={`
                    block h-[2px] w-5 bg-black transition
                    ${open ? "rotate-45 translate-y-[6px]" : ""}
                  `}
                />
                <span
                  className={`
                    block h-[2px] w-5 bg-black transition
                    ${open ? "opacity-0" : ""}
                  `}
                />
                <span
                  className={`
                    block h-[2px] w-5 bg-black transition
                    ${open ? "-rotate-45 -translate-y-[6px]" : ""}
                  `}
                />
              </div>
            </button>

          </div>
        </Container>
      </header>

      {/* 🔥 MOBILE MENU (WAJIB DI LUAR HEADER) */}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}