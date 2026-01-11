"use client";

import React, { useState, useEffect } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

interface GalleryItem {
  src: string;
  title: string;
  category?: string;
}

interface GalleryProps {
  galleryItems: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? 0 : (i - 1 + galleryItems.length) % galleryItems.length
    );
  const next = () =>
    setActiveIndex((i) =>
      i === null ? 0 : (i + 1) % galleryItems.length
    );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex]);

  if (!galleryItems?.length) return null;

  return (
    <section className="relative py-24 bg-white text-gray-900">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Kadr po kadrem
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
            Galeria Szkółki
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Zobacz, jak wygląda nasza codzienna praca. Każda roślina jest dla
            nas ważna.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 transform ${
                isMounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-green-700 shadow-xl backdrop-blur-sm">
                    <FaExpand className="text-xl" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                {item.category && (
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1 block">
                    {item.category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={close}
          />

          <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
            <div className="relative w-full h-[70vh] max-h-[800px] bg-black rounded-xl overflow-hidden shadow-2xl">
              <img
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* CLOSE */}
            <button
              onClick={close}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black hover:bg-green-500 hover:text-white flex items-center justify-center transition shadow-lg"
            >
              <FaTimes />
            </button>

            {/* NAV */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur flex items-center justify-center transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur flex items-center justify-center transition"
            >
              <FaChevronRight />
            </button>

            <div className="mt-4 text-white/70 text-sm">
              {activeIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
