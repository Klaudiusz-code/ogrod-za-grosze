"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaLeaf,
  FaSeedling,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";
import { useGlobalSettings } from "../components/GlobalSettingsContext";

type Kafelek = {
  tytulKafelka: string;
  krotkiOpis: string;
};

type HeroProps = {
  kafelki: Kafelek[];
};

const icons = [FaLeaf, FaUsers, FaSeedling];

export default function Hero({ kafelki }: HeroProps) {
  const { numerTelefonu, whatsapp } = useGlobalSettings();

  return (
    <section className="relative bg-white">
      <div className="relative w-full md:max-w-450 mx-auto md:px-4 lg:px-8">
        <div
          className="
            relative overflow-hidden
            min-h-[70vh] sm:min-h-[60vh] md:min-h-[55vh] md:max-w-450
            pt-16 sm:pt-12 md:pt-0
            md:rounded-[28px]
          "
        >
          <Image
            src="/gardening.jpg"
            alt="Szkółka roślin – Aleksandrów"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-black/25 md:bg-gradient-to-r md:from-black/80 md:via-green-950/55 md:to-transparent" />

          <div className="relative z-10 w-full mt-16">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
              
              {/* LEWA KOLUMNA */}
              <div className="text-white max-w-xl pb-8 md:pb-0">
                <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-[10px] tracking-[0.25em] uppercase text-green-300">
                  Lokalna szkółka • Aleksandrów
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
                  Najlepsze rośliny dla Twojego ogrodu
                </h1>

                <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-lg">
                  Zdrowe drzewa, krzewy i byliny prosto z lokalnej szkółki.
                  Doradzimy i pomożemy wybrać najlepiej.
                </p>

                {/* --- MOBILE TILES (Rząd poziomy, minimalizm) --- */}
                <div className="flex lg:hidden w-full gap-3 mb-8">
                  {Array.isArray(kafelki) &&
                    kafelki.map((item, index) => {
                      const Icon = icons[index];
                      if (!Icon) return null;

                      return (
                        <div
                          key={index}
                          className="
                            flex-1 group
                            bg-white/5 border border-white/10
                            rounded-xl p-3
                            flex flex-col items-center justify-center text-center
                            hover:bg-white/10 transition-colors
                          "
                        >
                          <div className="text-green-400 text-2xl mb-2 group-hover:text-white transition-colors">
                            <Icon />
                          </div>
                          <h3 className="font-bold text-[10px] uppercase tracking-wider text-white leading-tight">
                            {item.tytulKafelka}
                          </h3>
                        </div>
                      );
                    })}
                </div>
                {/* --- KONIEC MOBILE TILES --- */}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="#rosliny"
                    className="group inline-flex justify-center items-center gap-3 px-6 py-3.5 rounded-full bg-green-600 hover:bg-green-700 text-sm sm:text-base font-semibold shadow-lg transition"
                  >
                    Zobacz asortyment
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`tel:${numerTelefonu}`}
                    className="inline-flex justify-center items-center gap-3 px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-md text-sm sm:text-base font-semibold"
                  >
                    <FaPhoneAlt />
                    Zadzwoń
                  </Link>

                  {whatsapp && (
                    <Link
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-3 px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-md text-sm sm:text-base font-semibold"
                    >
                      WhatsApp
                    </Link>
                  )}
                </div>
              </div>

              {/* PRAWA KOLUMNA - ORYGINAŁ (DESKTOP) */}
              <div className="hidden lg:flex flex-col gap-5 justify-center">
                {Array.isArray(kafelki) &&
                  kafelki.map((item, index) => {
                    const Icon = icons[index];
                    if (!Icon) return null;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 bg-white/5 backdrop-blur rounded-2xl p-6"
                      >
                        <div className="w-14 h-14 rounded-xl bg-green-50 text-green-700 flex items-center justify-center text-2xl">
                          <Icon />
                        </div>

                        <div>
                          <h3 className="font-semibold text-white text-lg">
                            {item.tytulKafelka}
                          </h3>
                          <p className="text-sm text-gray-200 mt-1">
                            {item.krotkiOpis}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}