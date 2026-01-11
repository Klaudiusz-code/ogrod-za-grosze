"use client";

import React from "react";
import Image from "next/image";
import {
  FaTree,
  FaLeaf,
  FaSeedling,
  FaBoxOpen,
  FaChevronRight,
} from "react-icons/fa";
import { useGlobalSettings } from "./GlobalSettingsContext";
import type { GlobalSettings } from "@/types/globalSettings";



export type PlantCategory = {
  id: string;
  title: string;
  items: string[];
  count: string | number;
  dodatkowaInformacja?: string | null;
};

type PlantListProps = {
  categories: PlantCategory[];
};



export default function PlantList({ categories }: PlantListProps) {
  const getIcon = (title: string) => {
    const lower = title.toLowerCase();

    if (lower.includes("drzew")) return FaTree;
    if (lower.includes("krzew")) return FaLeaf;
    if (lower.includes("bylin") || lower.includes("traw"))
      return FaSeedling;

    return FaBoxOpen;
  };

  const globalSettings = useGlobalSettings() as GlobalSettings;

  const handleDownloadPdf = () => {
    if (!globalSettings.katalogPdf) return;

    const link = document.createElement("a");
    link.href = globalSettings.katalogPdf;
    link.download = "katalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="rosliny"
      className="relative py-24 md:py-32 overflow-hidden text-white"
    >
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
            <span className="w-8 h-[1px] bg-green-400" />
            Pełna oferta
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
            Asortyment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">
              Wartościowy
            </span>
          </h2>
        </div>

        {/* LISTA */}
        <div className="flex flex-col gap-4">
          {categories.map((cat) => {
            const Icon = getIcon(cat.title);

            return (
              <div
                key={cat.id}
                className="group relative border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-green-500/30 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)]"
              >
                <div className="flex items-center p-6 md:p-8 relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-green-400 text-xl md:text-2xl group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <Icon />
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

                    {cat.dodatkowaInformacja && (
                      <p className="text-gray-300 text-sm mt-1">
                        {cat.dodatkowaInformacja}
                      </p>
                    )}
                  </div>

                  <FaChevronRight className="opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </div>

                <div className="absolute right-0 top-0 bottom-0 w-[50%] md:w-[40%] bg-black/20 backdrop-blur-md flex items-center justify-end px-8 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out border-l border-white/5">
                  <div className="w-full flex flex-wrap gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-sm text-gray-200 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-12 gap-6">
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            Dostępność w zależności od pory roku
          </p>

          <button
            onClick={handleDownloadPdf}
            disabled={!globalSettings.katalogPdf}
            className="px-8 py-4 bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-full hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/50 transition-all duration-300 flex items-center gap-3"
          >
            Pobierz pełny katalog PDF
            <span className="text-xs bg-white/20 px-2 py-1 rounded">
              PDF
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
