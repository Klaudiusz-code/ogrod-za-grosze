"use client";

import React from "react";
import Image from "next/image";
import {
  FaLeaf,
  FaCheckCircle,
  FaSmile,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaSeedling,
} from "react-icons/fa";
import { isOpenNow } from "@/utils/isOpenNow";

interface GlobalSettings {
  whatsapp: string;
  numerTelefonu: string;
  adres?: string;
  godzinyOtwarcia?: string;
}

interface AboutSchoolData {
  tytulSekcji: string;
  opisGlowny: string;
  lataDoswiadczenia: string;
  gwarancjaJakosci: string;
  zadowoleniKlienci: string;
  liczbaOdmianRoslin: string;
}

interface AboutGardenSectionProps {
  globalSettings: GlobalSettings;
  aboutSchoolData: AboutSchoolData;
}

export default function AboutGardenSection({
  globalSettings,
  aboutSchoolData,
}: AboutGardenSectionProps) {
  const stats = [
    {
      label: "Lat doświadczenia",
      value: aboutSchoolData.lataDoswiadczenia,
      icon: FaClock,
    },
    {
      label: "Gwarancja jakości",
      value: aboutSchoolData.gwarancjaJakosci,
      icon: FaCheckCircle,
    },
    {
      label: "Zadowolonych klientów",
      value: aboutSchoolData.zadowoleniKlienci,
      icon: FaSmile,
    },
    {
      label: "Odmian roślin",
      value: aboutSchoolData.liczbaOdmianRoslin,
      icon: FaSeedling,
    },
  ];

  return (
    <section
      id="onas"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
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
                "{aboutSchoolData.tytulSekcji}"
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
                {aboutSchoolData.tytulSekcji} <br />
                
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutSchoolData.opisGlowny}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-gray-100 py-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700 mb-2 group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>

                    <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                      {stat.label}
                    </span>

                    <span className="text-lg md:text-xl font-bold text-gray-900 mt-1">
                      {stat.value}
                    </span>
                  </div>
                );
              })}
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
                      href={`tel:${globalSettings.numerTelefonu}`}
                      className="flex items-center gap-3 text-white hover:text-green-400 transition-colors"
                    >
                      <FaPhoneAlt className="text-green-500" />
                      <span className="font-medium">
                        {globalSettings.numerTelefonu}
                      </span>
                    </a>
                    {globalSettings.adres && (
                      <a
                        href="#"
                        className="flex items-center gap-3 text-white hover:text-green-400 transition-colors"
                      >
                        <FaMapMarkerAlt className="text-green-500" />
                        <span className="font-medium">
                          {globalSettings.adres}
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start md:items-end space-y-3">
                  {globalSettings.godzinyOtwarcia && (
                    <div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                      <FaClock />
                      {isOpenNow(globalSettings.godzinyOtwarcia)
                        ? "Otwarte teraz"
                        : "Zamknięte"}
                    </div>
                  )}
                  <a
                    href={`https://wa.me/${(
                      globalSettings.numerTelefonu || ""
                    ).replace(/\D/g, "")}`}
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
