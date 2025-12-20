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
        <div className="relative flex items-center justify-between navbar-height px-3 sm:px-4 lg:px-6">
          {/* Logo Brand Wrapper - Sabit Genişlik */}
          <div 
            className="flex-shrink-0 flex items-center justify-start h-full"
            style={{
              width: 'clamp(300px, 40vw, 600px)'
            }}
          >
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-150 flex items-center justify-start h-full w-full"
            >
              <div className="bg-white rounded-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-center h-full">
                <Image
                  src="/mslogo.png"
                  alt="macsonuodeme.com"
                  width={2000}
                  height={500}
                  className="w-auto object-contain block"
                  style={{ 
                    height: 'clamp(160px, 20vw, 260px)',
                    maxHeight: '260px',
                    maxWidth: 'none'
                  }}
                  priority
                  unoptimized
                />
              </div>
            </Link>
          </div>

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
          <div className="hidden md:block z-10 flex-shrink-0">
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

