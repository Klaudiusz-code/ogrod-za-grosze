"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useGlobalSettings } from "@/components/GlobalSettingsContext";

const MapSection = () => {
  const {
    numerTelefonu,
    adres,
    godzinyOtwarcia,
    otwarteTeraz,
  } = useGlobalSettings();

  const encodedAddress = adres
    ? encodeURIComponent(adres)
    : "";

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.04575934652!2d22.92893247694208!3d50.46598078624492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47234d440695d4f3%3A0x30ca4a010e011765!2zU3prw7PFgmthIGRyemV3ZWsgaSBrcnpld8Ozdw!5e1!3m2!1spl!2spl!4v1768512737941!5m2!1spl!2spl";

  const formattedHours = godzinyOtwarcia ? godzinyOtwarcia.replace(/, /g, '\n') : "";

  return (
    <section
      id="kontakt"
      className="relative py-20 bg-[#0f1115] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[100px]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
          <div className="lg:col-span-7 relative h-[400px] lg:h-[700px] group overflow-hidden">
            <iframe
              title="Lokalizacja"
              src={mapEmbedUrl}
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {otwarteTeraz && (
              <div className="absolute top-8 left-8 z-20 bg-white/95 text-gray-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Otwarte teraz
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#161b22] to-[#0d1117] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <p className="text-green-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Kontakt i Dojazd
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Odwiedź <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
                  Naszą Szkółkę
                </span>
              </h2>
            </div>

            <div className="space-y-10">
              {adres && (
                <div>
                  <div className="flex items-center gap-4 mb-3 text-green-400">
                    <FaMapMarkerAlt />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Lokalizacja
                    </span>
                  </div>
                  <div className="pl-9 border-l border-white/10">
                    <p className="text-xl text-white">{adres}</p>
                  </div>
                </div>
              )}

              {godzinyOtwarcia && (
                <div>
                  <div className="flex items-center gap-4 mb-3 text-green-400">
                    <FaClock />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Godziny otwarcia
                    </span>
                  </div>
                  {/* ZMIANA: Dodana klasa whitespace-pre-line i użycie formattedHours */}
                  <div className="pl-9 border-l border-white/10 text-gray-300 whitespace-pre-line">
                    {formattedHours}
                  </div>
                </div>
              )}

              {numerTelefonu && (
                <div>
                  <div className="flex items-center gap-4 mb-3 text-green-400">
                    <FaPhoneAlt />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Telefon
                    </span>
                  </div>
                  <div className="pl-9 border-l border-white/10">
                    <a
                      href={`tel:${numerTelefonu.replace(/\s+/g, "")}`}
                      className="text-xl text-white hover:text-green-400"
                    >
                      {numerTelefonu}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {adres && (
              <div className="mt-12 pt-8 border-t border-white/5">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 font-bold rounded-xl transition shadow-lg"
                >
                  Wyznacz trasę
                  <FaArrowRight />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;