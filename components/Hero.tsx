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

                <div className="mt-6 grid grid-cols-3 gap-3 lg:hidden">
                  <div className="flex flex-col items-center text-center gap-1.5 bg-white/10 backdrop-blur rounded-xl py-3">
                    <div className="text-green-400 text-lg">
                      <FaLeaf />
                    </div>
                    <span className="text-[11px] text-gray-200 font-medium">
                      Duży wybór
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center gap-1.5 bg-white/10 backdrop-blur rounded-xl py-3">
                    <div className="text-green-400 text-lg">
                      <FaUsers />
                    </div>
                    <span className="text-[11px] text-gray-200 font-medium">
                      Doradztwo
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center gap-1.5 bg-white/10 backdrop-blur rounded-xl py-3">
                    <div className="text-green-400 text-lg">
                      <FaSeedling />
                    </div>
                    <span className="text-[11px] text-gray-200 font-medium">
                      Jakość
                    </span>
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
