"use client";

import Image from "next/image";
import { FaTruck, FaWhatsapp, FaPhoneAlt, FaLeaf } from "react-icons/fa";

export default function TransportSection() {
  return (
    <section id="transport" className="relative py-28 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
                <FaTruck />
              </div>
              <span className="uppercase text-xs font-bold tracking-widest text-green-700">
                Transport roślin
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Nie masz jak <br />
              <span className="text-green-700">przewieźć roślin?</span>
              <br /> My to ogarniemy.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
              Kupujesz większe drzewa, krzewy lub większą ilość roślin?
              <br />
              <strong>Zapewniamy bezpieczny transport</strong> bez uszkodzeń,
              bez kombinowania i bez stresu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Transport na terenie miasta i okolic",
                "Zabezpieczenie roślin na czas przewozu",
                "Możliwość wniesienia na posesję",
                "Termin ustalany indywidualnie",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
                >
                  <span className="w-2 h-2 rounded-full bg-green-600" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/48123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl transition hover:bg-[#1ebc57] hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
              >
                <FaWhatsapp size={20} />
                Zapytaj o transport
              </a>

              <a
                href="tel:+48123456789"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-green-700 text-green-700 font-bold rounded-xl transition hover:bg-green-700 hover:text-white"
              >
                <FaPhoneAlt />
                Zadzwoń
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                alt="Transport roślin"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <p className="text-white font-semibold text-lg mb-1">
                    Bezpieczny transport
                  </p>
                  <p className="text-gray-200 text-sm">
                    Od szkółki prosto do Twojego ogrodu
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-32 h-32 text-green-100 opacity-50 -z-10">
              <FaLeaf />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
