"use client";

import { FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setIsOpen(hour >= 8 && hour < 17);
  }, []);

  return (
    <div className="w-full bg-[#064e3b] text-emerald-50 text-[11px] font-medium tracking-widest uppercase border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 h-9 flex items-center justify-between relative z-10">
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-emerald-100/80 group hover:text-white transition-colors cursor-default">
            <span className={`relative flex h-2 w-2 mr-2 ${isOpen ? 'animate-pulse' : 'opacity-50'}`}>
              <span className={`absolute inline-flex h-full w-full rounded-full ${isOpen ? 'bg-green-400' : 'bg-gray-500'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-green-300' : 'bg-gray-400'}`}></span>
            </span>
            <FaClock className="text-[10px]" />
            <span className={isOpen ? "text-white" : "text-emerald-200/50"}>
              {isOpen ? "OTWARTE TERAZ" : "ZAMKNIĘTE"}: 08:00 – 17:00
            </span>
          </div>

          <div className="h-3 w-px bg-white/20" />

          <div className="flex items-center gap-2 text-emerald-100/80 hover:text-white transition-colors">
            <FaEnvelope className="text-[10px]" />
            <a href="mailto:biuro@szkolka.pl" className="hover:underline decoration-white/30 underline-offset-4">
              biuro@szkolka.pl
            </a>
          </div>
        </div>

        <div className="md:hidden w-full flex justify-center">
          <span className="flex items-center gap-2 text-[10px] text-emerald-100">
            <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></span>
            {isOpen ? "Otwarte 08:00 - 17:00" : "Zamknięte"}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="text-emerald-100/60 hover:text-white hover:scale-110 transition-all duration-300" aria-label="Facebook">
              <FaFacebookF className="text-xs" />
            </a>
            <a href="#" className="text-emerald-100/60 hover:text-white hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <FaInstagram className="text-xs" />
            </a>
          </div>

          <div className="hidden sm:block h-3 w-px bg-white/20" />

          <a
            href="#transport"
            className="hidden sm:flex items-center gap-2 text-white hover:text-green-200 transition-colors group"
          >
            <span>Transport</span>
            <FaArrowRight className="text-[9px] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
