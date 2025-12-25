"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLeaf, FaWhatsapp, FaPlus, FaCommentDots } from "react-icons/fa";

const faqItems = [
  {
    question: "Jakie rośliny są aktualnie dostępne?",
    answer:
      "W naszej szkółce znajdziesz drzewa, krzewy i rośliny ozdobne dostosowane do sezonu. Zapraszamy do kontaktu telefonicznego lub WhatsApp w celu sprawdzenia dostępności.",
  },
  {
    question: "Czy oferujecie doradztwo przy wyborze roślin?",
    answer:
      "Tak! Nasi specjaliści pomogą Ci dobrać rośliny odpowiednie do Twojego ogrodu, uwzględniając warunki glebowe i nasłonecznienie.",
  },
  {
    question: "Jak mogę złożyć zamówienie?",
    answer:
      "Zamówienia przyjmujemy telefonicznie, przez WhatsApp lub osobiście w naszej szkółce. Możliwe jest także wcześniejsze rezerwowanie roślin.",
  },
  {
    question: "Czy rośliny można odebrać osobiście lub zamówić dostawę?",
    answer:
      "Oferujemy odbiór osobisty w szkółce oraz dostawę na terenie miasta i okolic. Skontaktuj się z nami, aby ustalić szczegóły dostawy.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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
          {/* LEWA KOLUMNA */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop"
                alt="Ekspert doradzający"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    Masz wątpliwości?
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Nasi eksperci pomogą Ci dobrać idealną roślinę do Twojego
                    ogrodu.
                  </p>

                  <a
                    href="https://wa.me/48123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl transition hover:bg-[#1ebc57]"
                  >
                    <FaWhatsapp />
                    Porozmawiajmy
                  </a>
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
                  Pytania & Odpowiedzi
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Czego się często <br />
                <span className="text-green-600">pytasz?</span>
              </h2>

              <p className="text-gray-500 max-w-md">
                Kliknij pytanie, aby zobaczyć odpowiedź.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {faqItems.map((item, index) => {
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
                        className={`w-8 h-8 flex items-center justify-center rounded-full border transition ${
                          isOpen
                            ? "rotate-45 border-green-200 bg-green-50 text-green-600"
                            : "border-gray-200 text-gray-400"
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
