"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { FaLeaf, } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${poppins.className} bg-[#022c22] text-emerald-50/80 relative overflow-hidden`}>
      
      <div className="absolute top-0 right-0 text-emerald-900/30 -mr-20 -mt-20 pointer-events-none opacity-30">
         <FaLeaf size={400} transform="rotate(180)" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 pt-20 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-800/50 rounded-lg flex items-center justify-center text-green-400 border border-emerald-700/50">
                <FaLeaf />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Aleksandrów</span>
            </div>
            <p className="text-sm leading-relaxed text-emerald-200/60">
              Profesjonalna szkółka roślin. Łączymy tradycję z nowoczesnym podejściem do ogrodnictwa. Twój ogród to nasza pasja.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center border border-white/10 hover:border-green-400 transition-all duration-300 text-white">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center border border-white/10 hover:border-pink-400 transition-all duration-300 text-white">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Nawigacja</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Strona główna</a></li>
              <li><a href="#" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">O nas</a></li>
              <li><a href="#" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Asortyment</a></li>
              <li><a href="#" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Galeria realizacji</a></li>
              <li><a href="#" className="hover:text-green-400 hover:translate-x-1 transition-all inline-block">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-green-400"><FaMapMarkerAlt /></div>
                <div>
                  <p className="text-white font-medium">Adres szkółki</p>
                  <p className="text-sm text-emerald-200/70">ul. Cicha 20, Aleksandrów</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-green-400"><FaPhoneAlt /></div>
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <a href="tel:+48123456789" className="text-sm text-emerald-200/70 hover:text-white transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-green-400"><FaEnvelope /></div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:biuro@szkolka.pl" className="text-sm text-emerald-200/70 hover:text-white transition-colors">
                    biuro@szkolka.pl
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Godziny otwarcia</h3>
              <div className="space-y-2 text-sm text-emerald-200/80 mb-6">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Poniedziałek - Piątek</span>
                  <span className="text-white">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Sobota</span>
                  <span className="text-white">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span className="text-red-300">Zamknięte</span>
                </div>
              </div>
            </div>
            
            <a 
              href="#map" 
              className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-900/50"
            >
              <FaMapMarkerAlt /> Wyznacz trasę
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-emerald-200/50">
          
          <div className="text-center md:text-left">
            © {currentYear} Szkółka Roślin Aleksandrów. Wszelkie prawa zastrzeżone.
          </div>

          {/* LINKI PRAWNE */}
          <div className="flex gap-6">
            <a href="/polityka-prywatnosci" className="hover:text-green-400 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-green-400 transition-colors">Regulamin</a>
          </div>

          <div className="flex items-center gap-2 text-center md:text-right">
            <span>Projekt i realizacja:</span>
            <a
              href="https://klaudiuszdev.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-green-400 transition-colors"
            >
              klaudiuszdev.pl
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}