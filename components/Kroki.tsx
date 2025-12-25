"use client";

import React from "react";
import { FaComments, FaThList, FaTruck, FaWhatsapp, FaArrowRight } from "react-icons/fa";

interface Step {
  id: string;
  title: string;
  description: string;
  iconType: "comments" | "list" | "truck";
}

const stepsData: Step[] = [
  {
    id: "01",
    title: "Doradztwo",
    description:
      "Opowiedz nam o swoim ogrodzie. Dobierzemy rośliny idealnie pasujące do Twojej gleby i warunków.",
    iconType: "comments",
  },
  {
    id: "02",
    title: "Wybór",
    description:
      "Oglądnij zdrowe, dorodne okazy wprost z naszych tuneli foliowych i pól uprawnych.",
    iconType: "list",
  },
  {
    id: "03",
    title: "Realizacja",
    description:
      "Zajmiemy się transportem i sadzeniem. Wystarczy, że cieszysz się nowym ogrodem.",
    iconType: "truck",
  },
];

const ProcessSection: React.FC = () => {
  const renderIcon = (type: Step["iconType"]) => {
    switch (type) {
      case "comments":
        return <FaComments />;
      case "list":
        return <FaThList />;
      case "truck":
        return <FaTruck />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden mt-4">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Jak wygląda współpraca?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nie musisz być ekspertem. Przeprowadzimy Cię przez cały proces – od pierwszej
            rozmowy do ostatniego dociśnięcia ziemi.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-gray-300 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {stepsData.map((step) => (
              <div key={step.id} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-200">
                  <div className="absolute -top-4 -right-4 text-[120px] font-black text-gray-50 leading-none select-none group-hover:text-green-50/30 transition-colors">
                    {step.id}
                  </div>

                  <div className="relative w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {renderIcon(step.iconType)}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  <div className="hidden md:block absolute top-12 -right-1/2 w-[calc(100%-3rem)] h-[2px] border-t-2 border-dashed border-transparent group-hover:border-green-300 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gray-900 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[80px] rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Masz pytania do konkretnego gatunku?
              </h3>
              <p className="text-gray-400">
                Napisz do nas, odpowiemy na pytania dotyczące doboru i dostępności.
              </p>
            </div>

            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebc57] text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
            >
              <FaWhatsapp className="text-2xl" />
              Rozmawiaj na WhatsApp
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
