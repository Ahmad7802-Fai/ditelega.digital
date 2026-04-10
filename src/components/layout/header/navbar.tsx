"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button, Container, NavItem, MegaMenu } from "@/components";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 w-full z-50
        backdrop-blur-xl bg-white/70
        border-b border-gray-200/60
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      "
    >
      {/* 🔥 PAKAI CONTAINER */}
      <Container size="wide">
        <div className="h-20 flex items-center justify-between">

          {/* 🔥 LOGO */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-[200px] h-[50px]">
              <Image
                src="/logo.svg"
                alt="Ditelaga Digital"
                fill
                priority
                className="object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* 🔥 MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <NavItem label="Home" href="/" />
            <MegaMenu />
            <NavItem label="Portfolio" href="/portfolio" />
            <NavItem label="Clients" href="/clients" />
            <NavItem label="About" href="/about" />
            <NavItem label="Contact" href="/contact" />
          </nav>

          {/* 🔥 CTA */}
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
              p-2 rounded-lg
              hover:bg-gray-100
              transition
            "
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </Container>

      {/* 🔥 MOBILE MENU */}
      <MobileMenu open={open} />
    </header>
  );
}