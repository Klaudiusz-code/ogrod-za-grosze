"use client";

import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const MapSection = () => {
  return (
    <section id="kontakt" className="relative py-20 bg-[#0f1115] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-0 lg:gap-8 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
          
          <div className="lg:col-span-7 relative h-[400px] lg:h-[700px] group overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700 z-10 pointer-events-none" />
            
            <iframe
              title="Lokalizacja szkółki"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.1234567890!2d19.850000!3d50.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sLokalna%20Szk%C3%B3%C5%82ka!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out transform group-hover:scale-105 group-hover:grayscale-0"
            />

            <div className="absolute top-8 left-8 z-20 bg-white/95 backdrop-blur text-gray-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 animate-bounce-slow">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Otwarte teraz</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#161b22] to-[#0d1117] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative order-last lg:order-first">
            
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-500/50 via-transparent to-transparent" />

            <div className="mb-10">
              <p className="text-green-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Kontakt i Dojazd
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-2">
                Odwiedź <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
                  Naszą Szkółkę
                </span>
              </h2>
            </div>

            <div className="space-y-10">
              
              {/* Adres */}
              <div className="group/item">
                <div className="flex items-center gap-4 mb-3 text-green-400 opacity-80 group-hover/item:opacity-100 transition-opacity">
                  <FaMapMarkerAlt />
                  <span className="text-xs font-bold uppercase tracking-widest">Lokalizacja</span>
                </div>
                <div className="pl-9 border-l border-white/10 group-hover/item:border-green-500/50 transition-colors">
                  <h3 className="text-2xl font-light text-white">
                    Aleksandrów
                  </h3>
                  <p className="text-gray-400 text-lg mt-1">ul. Cicha 20</p>
                </div>
              </div>

              <div className="group/item">
                <div className="flex items-center gap-4 mb-3 text-green-400 opacity-80 group-hover/item:opacity-100 transition-opacity">
                  <FaClock />
                  <span className="text-xs font-bold uppercase tracking-widest">Godziny otwarcia</span>
                </div>
                <div className="pl-9 border-l border-white/10 group-hover/item:border-green-500/50 transition-colors space-y-1">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Poniedziałek - Piątek</span>
                    <span className="font-medium text-white">08:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Sobota</span>
                    <span className="font-medium text-white">09:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                    <span>Niedziela</span>
                    <span>Zamknięte</span>
                  </div>
                </div>
              </div>

              <div className="group/item">
                <div className="flex items-center gap-4 mb-3 text-green-400 opacity-80 group-hover/item:opacity-100 transition-opacity">
                  <FaPhoneAlt />
                  <span className="text-xs font-bold uppercase tracking-widest">Telefon</span>
                </div>
                <div className="pl-9 border-l border-white/10 group-hover/item:border-green-500/50 transition-colors">
                  <a href="tel:+48000123456" className="text-xl text-white hover:text-green-400 transition-colors">
                    +48 000 123 456
                  </a>
                </div>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=ul.+Cicha+20+Aleksandrów"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative w-full md:w-auto inline-flex items-center justify-center gap-4 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(22,163,74,0.4)] hover:shadow-[0_10px_30px_-10px_rgba(22,163,74,0.5)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                    Wyznacz trasę 
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;