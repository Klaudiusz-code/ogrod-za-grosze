 "use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

// Zdjęcia z Unsplash dla demo (wystarczy podmienić URL-e na swoje /sz1.webp itp.)
const images = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop", // Szklarnia
  "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1000&auto=format&fit=crop", // Ręce i rośliny
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop", // Alejka
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop", // Trawy
  "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop", // Szklarnia wnętrze
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop", // Sadzonki
];

type GalleryItem = {
  src: string;
  category: string;
  title: string;
};

const galleryData: GalleryItem[] = [
  { src: images[0], category: "Szklarnia", title: "Miejsce gdzie wszystko rośnie" },
  { src: images[1], category: "Ręce", title: "Pielęgnacja z pasją" },
  { src: images[2], category: "Ogród", title: "Alejki dla klientów" },
  { src: images[3], category: "Trawy", title: "Szeroki asortyment" },
  { src: images[4], category: "Wnętrze", title: "Profesjonalne warunki" },
  { src: images[5], category: "Sadzonki", title: "Początek drogi" },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i! - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i! + 1) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    if (activeIndex !== null) {
      document.body.style.overflow = "hidden"; 
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex]);

  return (
    <section className="relative py-24 bg-white text-gray-900">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Kadr po kadrem
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
            Galeria Szkołki
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Zobacz, jak wygląda nasza codzienna prawa. Każda roślina jest dla nas ważna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 transform translate-y-4 opacity-0 ${
                isMounted ? "translate-y-0 opacity-100" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }} 
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-green-700 shadow-xl backdrop-blur-sm">
                        <FaExpand className="text-xl" />
                    </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
                activeIndex !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={close}
          />

          <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 flex flex-col items-center">
            
            <div className="relative w-full h-[60vh] md:h-[80vh] max-h-[800px] bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
               <Image
                  src={images[activeIndex]}
                  alt="Powiększenie"
                  fill
                  className="object-contain"
                  priority
               />
            </div>

            <button
              onClick={close}
              className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 rounded-full bg-white text-black hover:bg-green-500 hover:text-white flex items-center justify-center transition-colors shadow-lg z-20"
              aria-label="Zamknij"
            >
              <FaTimes />
            </button>

            <button
              onClick={prev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md flex items-center justify-center transition-all border border-white/20 hover:scale-110 z-20"
              aria-label="Poprzednie"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md flex items-center justify-center transition-all border border-white/20 hover:scale-110 z-20"
              aria-label="Następne"
            >
              <FaChevronRight />
            </button>

            <div className="mt-4 text-center text-white/70 text-sm font-medium tracking-wide">
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;