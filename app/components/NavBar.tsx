"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "BOOK", href: "/book" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Journie Johnson Vocal Studio"
                width={500}
                height={167}
                priority
                className="w-3/5 sm:w-48 md:w-64 lg:w-96 xl:w-125 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-8 ${josefinSans.className}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold transition-colors text-[#065DDF] hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <Image src="/burger.svg" alt="Menu" width={40} height={40} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`border-t border-gray-200 ${josefinSans.className}`}>
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-xl font-medium hover:bg-gray-50 transition-colors text-[#065DDF] hover:text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
