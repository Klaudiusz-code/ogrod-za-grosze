"use client";

import React from "react";
import Image from "next/image";
import { 
  FaTree, 
  FaLeaf, 
  FaSeedling, 
  FaBoxOpen, 
  FaChevronRight 
} from "react-icons/fa";

type Category = {
  id: string;
  title: string;
  icon: React.ElementType;
  items: string[];
  count: string; // 
};

const categories: Category[] = [
  {
    id: "trees",
    title: "Drzewa",
    icon: FaTree,
    count: "50+ gatunków",
    items: ["Liściaste ozdobne", "Iglaste", "Owocowe", "Karłowe do donic"],
  },
  {
    id: "shrubs",
    title: "Krzewy",
    icon: FaLeaf,
    count: "100+ odmian",
    items: ["Kwitnące", "Zimozielone", "Ozdobne z liści", "Pnącza"],
  },
  {
    id: "perennials",
    title: "Byliny & Trawy",
    icon: FaSeedling,
    count: "300+ odmian",
    items: ["Byliny rabatowe", "Trawy ozdobne", "Rośliny wodne", "Zioła"],
  },
  {
    id: "material",
    title: "Materiał szkółkarski",
    icon: FaBoxOpen,
    count: "Wielkość C1 - C5",
    items: ["Sadzonki ukorzenione", "Rośliny w donicach", "Drzewka formowane", "Na żywopłoty"],
  },
];

export default function InteractiveCatalogSection() {
  return (
    <section id="rosliny" className="relative py-24 md:py-32 overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop"
          alt="Tło szkółki"
          fill
          priority
          className="object-cover scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-900/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-3 text-green-400 text-sm font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-[1px] bg-green-400"></span>
            Pełna oferta
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8">
            Asortyment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">
              Wartościowy
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Nie sprzedajemy roślin "z taśmy". Oferujemy zdrowy, dorodny materiał 
            szkółkarski, który jest gotowy do natychmiastowego sadzenia i cieszenia oko przez lata.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {categories.map((cat, index) => (
            <div 
              key={cat.id}
              className="group relative border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-green-500/30 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)]"
            >
              <div className="flex items-center p-6 md:p-8 relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-green-400 text-xl md:text-2xl group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-lg">
                  <cat.icon />
                </div>

                <div className="ml-6 flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tight group-hover:text-green-400 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="hidden md:inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-400 group-hover:border-green-500/50 group-hover:text-green-300 transition-colors">
                      {cat.count}
                    </span>
                  </div>
                </div>

                <div className="opacity-30 group-hover:opacity-100 text-white transition-all duration-300 transform group-hover:translate-x-1">
                  <FaChevronRight />
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-[50%] md:w-[40%] bg-black/20 backdrop-blur-md flex items-center justify-end px-8 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out border-l border-white/5">
                <div className="w-full flex flex-wrap gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-sm text-gray-200 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-green-500/50 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-12 gap-6">
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            Dostępność w zależności od pory roku
          </p>
          <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/50 transition-all duration-300 flex items-center gap-3">
            Pobierz pełny katalog PDF
            <span className="text-xs bg-white/20 px-2 py-1 rounded">PDF</span>
          </button>
        </div>

      </div>
    </section>
  );
}