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

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full md:max-w-[1800px] mx-auto md:px-4 lg:px-8">
        <div
          className="
            relative overflow-hidden
            min-h-[60vh] sm:min-h-[55vh] md:min-h-[560px]
            flex items-start md:items-center
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/25 md:bg-gradient-to-r md:from-black/80 md:via-green-950/55 md:to-transparent" />

          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
              <div className="text-white max-w-xl">
                <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-[10px] tracking-[0.25em] uppercase text-green-300">
                  Lokalna szkółka • Aleksandrów
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
                  Najlepsze rośliny dla Twojego ogrodu
                </h1>

                <p className="text-gray-200 text-base sm:text-lg mb-7 max-w-lg">
                  Zdrowe drzewa, krzewy i byliny prosto z lokalnej szkółki.
                  Doradzimy i pomożemy wybrać najlepiej.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="#asortyment"
                    className="group inline-flex justify-center items-center gap-3 px-6 py-3.5 rounded-full bg-green-600 hover:bg-green-700 text-sm sm:text-base font-semibold shadow-lg transition"
                  >
                    Zobacz asortyment
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="tel:+48123456789"
                    className="inline-flex justify-center items-center gap-3 px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-md text-sm sm:text-base font-semibold"
                  >
                    <FaPhoneAlt />
                    Zadzwoń
                  </Link>
                </div>

                <div className="lg:hidden mt-4 relative py-6 sm:py-0">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/10 z-0 mx-2" />

                  <div className="flex justify-between items-stretch gap-2 relative z-10">
                    <div className="flex-1 group">
                      <div className="h-full flex flex-col items-center justify-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-colors group-hover:bg-white/10">
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center shadow-[0_0_15px_rgba(22,163,74,0.3)]">
                          <FaSeedling className="text-white text-sm" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-green-200">
                          Asortyment
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 group">
                      <div className="h-full flex flex-col items-center justify-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-colors group-hover:bg-white/10">
                        <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-green-300 group-hover:bg-green-600 group-hover:text-white transition-colors">
                          <FaUsers className="text-sm" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-white">
                          Doradztwo
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 group">
                      <div className="h-full flex flex-col items-center justify-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-colors group-hover:bg-white/10">
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center shadow-[0_0_15px_rgba(22,163,74,0.3)]">
                          <FaLeaf className="text-white text-sm" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-green-200">
                          Jakość
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-5 justify-center">
                <div className="flex items-start gap-4 bg-white/5 backdrop-blur rounded-2xl p-6">
                  <div className="w-14 h-14 rounded-xl bg-green-50 text-green-700 flex items-center justify-center text-2xl">
                    <FaLeaf />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      Duży wybór
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      Drzewa, krzewy i byliny
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 backdrop-blur rounded-2xl p-6">
                  <div className="w-14 h-14 rounded-xl bg-green-50 text-green-700 flex items-center justify-center text-2xl">
                    <FaUsers />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      Doradztwo
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      Pomagamy dobrać rośliny
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 backdrop-blur rounded-2xl p-6">
                  <div className="w-14 h-14 rounded-xl bg-green-50 text-green-700 flex items-center justify-center text-2xl">
                    <FaSeedling />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Jakość</h3>
                    <p className="text-sm text-gray-200 mt-1">
                      Lokalny producent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
