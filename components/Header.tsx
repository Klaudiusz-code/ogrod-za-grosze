"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes, FaLeaf, FaArrowRight } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { useGlobalSettings } from "./GlobalSettingsContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface HeaderGlobalSettings {
  logo?: string;
  numerTelefonu: string;
  emailKontaktowy?: string;
  whatsapp?: string;
  adres?: string;
  godzinyOtwarcia?: string;
  otwarteTeraz?: boolean;
  facebook?: string;
  instagram?: string;
}

const links = [
  { name: "Strona główna", href: "/" },
  { name: "Asortyment", href: "rosliny" },
  { name: "O nas", href: "onas" },
  { name: "Kontakt", href: "kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Strona główna");

  const settings = useGlobalSettings() as HeaderGlobalSettings;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    if (id === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <header className={`${poppins.className} sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <button onClick={() => scrollToSection("/")} className="group focus:outline-none">
            {settings.logo ? (
              <Image
                src={settings.logo}
                alt="Ogród Za Grosze"
                width={160}
                height={40}
                className="object-contain h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <FaLeaf size={16} />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-600">
                  Ogród Za Grosze
                </span>
              </div>
            )}
          </button>

          <nav className="hidden md:flex items-center gap-10 z-10">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.href);
                  setActive(link.name);
                }}
                className={`relative text-sm font-medium transition-all duration-300 py-2 ${
                  active === link.name
                    ? "text-emerald-700 font-semibold"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                {link.name}
                {active === link.name && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${settings.numerTelefonu}`}
              className="hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-100 transition-all duration-300 group"
            >
              <span className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <FaPhoneAlt size={12} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-emerald-500/80 font-semibold">Zadzwoń teraz</span>
                <span className="text-sm font-bold">{settings.numerTelefonu}</span>
              </div>
            </a>

            <button 
              className="md:hidden z-20 p-2 text-gray-700 hover:text-emerald-600 focus:outline-none transition-colors" 
              onClick={() => setIsOpen(true)}
              aria-label="Otwórz menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-32 -left-32 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative flex items-center justify-between px-6 py-6 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <FaLeaf size={16} />
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">Menu</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-full bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all duration-300 focus:outline-none"
            aria-label="Zamknij menu"
          >
            <FaTimes size={22} />
          </button>
        </div>

        <nav className="relative flex-1 flex flex-col justify-center items-center gap-6 px-6 z-10 overflow-hidden">
          {links.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="group relative w-full text-center"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`
              }}
            >
              <span className="text-3xl md:text-4xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300 block py-2">
                {link.name}
              </span>
              <span className="h-0.5 w-0 bg-emerald-500 mx-auto group-hover:w-12 transition-all duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        <div className="relative px-6 pb-10 pt-6 z-10">
          <a
            href={`tel:${settings.numerTelefonu}`}
            className="group flex items-center justify-center w-full gap-3 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-1 transition-all duration-300"
          >
            <FaPhoneAlt size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Zadzwoń teraz</span>
            <FaArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
          
          {settings.godzinyOtwarcia && (
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-medium">
                Otwarte: {settings.godzinyOtwarcia}
              </p>
            </div>
          )}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}