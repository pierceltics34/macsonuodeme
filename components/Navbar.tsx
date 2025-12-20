"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Kuponlarımız", href: "/kuponlarimiz" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCrispChat = () => {
    if (typeof window !== "undefined" && window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-soft">
      <div className="container-custom">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="z-20 flex-shrink-0 ml-0 md:-ml-16 lg:-ml-24 hover:opacity-80 transition-opacity duration-150 flex items-center justify-center"
          >
            <div className="bg-white rounded-lg px-2 md:px-3 py-1.5 md:py-2 flex items-center justify-center h-12 md:h-16">
              <Image
                src="/logo.png"
                alt="macsonuodeme.com"
                width={240}
                height={60}
                className="h-10 md:h-14 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Menu - Ortalanmış */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 transform -translate-x-1/2 z-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-bold transition-colors duration-150 ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Canlı Destek Butonu */}
          <div className="hidden md:block z-10">
            <Button onClick={openCrispChat} variant="secondary">
              Canlı Destek
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Button onClick={openCrispChat} variant="secondary" className="text-sm px-4 py-2">
              Destek
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary transition-colors duration-150"
              aria-label="Menüyü aç/kapat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors duration-150 ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

