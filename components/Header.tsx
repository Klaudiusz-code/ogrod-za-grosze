"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const links = [
  { name: "Strona główna", href: "/" },
  { name: "Asortyment", href: "rosliny" },
  { name: "O nas", href: "onas" },
  { name: "Kontakt", href: "kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Strona główna");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`${poppins.className} sticky top-0 z-50 bg-white/90 backdrop-blur-md`}>
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-11 h-11 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 transition-transform group-hover:scale-105">
            <FaLeaf className="text-white text-lg" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-gray-700 tracking-tight">
              Ogród Za Grosze
            </span>
            <span className="text-xs font-semibold text-green-600 uppercase tracking-widest mt-0.5">
              Szkółka Roślin
            </span>
          </div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 z-10">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.href);
                setActive(link.name);
              }}
              className={`relative text-[13px] font-medium transition ${
                active === link.name ? "text-green-700" : "text-gray-600 hover:text-green-600"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-green-600 transition-all duration-300 ${
                  active === link.name ? "w-full" : "w-0 hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+48123456789"
            className="hidden lg:flex items-center gap-3 pl-2 pr-5 py-2 rounded-full border border-gray-200 hover:border-green-500 transition"
          >
            <span className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center">
              <FaPhoneAlt size={14} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] text-gray-500">Zadzwoń teraz</span>
              <span className="text-sm font-medium text-gray-800">+48 123 456 789</span>
            </span>
          </a>

          {/* HAMBURGER */}
          <button className="md:hidden z-20" onClick={() => setIsOpen(true)}>
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className="fixed inset-0 z-40 h hidden">
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <FaLeaf className="text-green-600 text-xl" />
              <span className="font-bold text-gray-900 text-lg">Menu</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.href);
                  setActive(link.name);
                  setIsOpen(false);
                }}
                className="flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-green-600 border-b border-gray-50 transition-colors"
              >
                {link.name}
                <FaArrowRight className="text-xs" />
              </button>
            ))}
          </nav>

          {/* Mobile Footer CTA */}
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <a
              href="tel:+48123456789"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full gap-3 py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all"
            >
              <FaPhoneAlt size={18} />
              <span>Zadzwoń teraz</span>
            </a>
            <p className="text-center text-xs text-gray-400 mt-4">
              Czynne Pon-Sob: 8:00 - 17:00
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
