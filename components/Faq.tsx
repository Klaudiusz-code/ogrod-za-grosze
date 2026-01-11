"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLeaf, FaWhatsapp, FaPlus, FaCommentDots } from "react-icons/fa";
import { useGlobalSettings } from "@/components/GlobalSettingsContext";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

export default function FaqSection({ items }: FaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { whatsapp } = useGlobalSettings();

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  if (!items.length) return null;

  return (
    <section className="relative z-10 py-24 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop"
                alt="Doradztwo"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    Masz pytania?
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Skontaktuj się z nami – chętnie pomożemy.
                  </p>

                  {whatsapp && (
                    <a
                      href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebc57]"
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -top-12 -left-12 w-32 h-32 text-green-100 opacity-50 -z-10">
              <FaLeaf />
            </div>
          </div>

          <div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <FaCommentDots />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                  FAQ
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Najczęstsze <br />
                <span className="text-green-600">pytania</span>
              </h2>

              <p className="text-gray-500">
                Kliknij pytanie, aby zobaczyć odpowiedź.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {items.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-xl border transition ${
                      isOpen
                        ? "border-green-200 bg-white shadow-sm"
                        : "border-gray-100"
                    }`}
                  >
                    <button
                      onClick={() => toggleIndex(index)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span
                        className={`text-lg font-medium ${
                          isOpen ? "text-green-700" : "text-gray-800"
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full  transition ${
                          isOpen
                            ? "rotate-45   text-green-600"
                            : " text-gray-400"
                        }`}
                      >
                        <FaPlus className="text-sm" />
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isOpen
                          ? "max-h-[300px] opacity-100 pb-5"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pl-5 ml-5 border-l-2 border-green-200 text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
