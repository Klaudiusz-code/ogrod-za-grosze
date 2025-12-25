"use client";

import React from "react";
import Image from "next/image";
import {
  FaLeaf,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaAward,
  FaTree,
  FaHeart,
} from "react-icons/fa";

export default function AboutGardenSection() {
  return (
    <section id="onas" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-100" />

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 lg:col-start-1 relative h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 group">
            <Image
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000&auto=format&fit=crop"
              alt="Nasz zespół w pracy"
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hidden md:block">
              <p className="text-2xl font-serif font-bold text-green-800">
                "Jakość to nasza pasja, nie obowiązek."
              </p>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                — Założyciel szkółki
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-7 flex flex-col justify-center space-y-12">
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <FaLeaf />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-800">
                  O szkółce
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                Pielęgnujemy <br />
                <span className="text-green-700 italic font-serif">
                  tradycję od pokoleń
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Szkółka w Aleksandrowie to nie tylko sprzedaż. To miejsce, gdzie
                rośliny mają czas zakorzenić się, a my znamy każdą z nich z
                imienia. Dostarczamy zdrowe, aklimatyzowane sadzonki, które z
                powodzeniem przyjmą się w Twoim ogrodzie.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-gray-100 py-8">
              {[
                { number: "15+", label: "Lat doświadczenia", icon: FaTree },
                { number: "100%", label: "Gwarancja jakości", icon: FaAward },
                {
                  number: "5k+",
                  label: "Zadowolonych klientów",
                  icon: FaHeart,
                },
                { number: "300+", label: "Odmian roślin", icon: FaLeaf },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default"
                >
                  <stat.icon className="text-green-200 text-2xl mb-2 group-hover:text-green-600 transition-colors duration-300" />
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.number}
                  </span>
                  <span className="text-xs font-bold uppercase text-gray-500 tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl text-white">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/20 rounded-full blur-[60px]" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Masz pytania?</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nie wiesz, która roślina będzie najlepsza? Chętnie pomożemy.
                    Zadzwoń lub przyjedź odwiedzić nas.
                  </p>

                  <div className="pt-4 space-y-3">
                    <a
                      href="tel:+48123456789"
                      className="flex items-center gap-3 text-white hover:text-green-400 transition-colors"
                    >
                      <FaPhoneAlt className="text-green-500" />
                      <span className="font-medium">+48 123 456 789</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-white hover:text-green-400 transition-colors"
                    >
                      <FaMapMarkerAlt className="text-green-500" />
                      <span className="font-medium">
                        Aleksandrów, ul. Cicha 20
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start md:items-end space-y-3">
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                    <FaClock />
                    Czynne Pon-Sob
                  </div>
                  <a
                    href="https://wa.me/48123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebc57] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
                  >
                    Napisz na WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
