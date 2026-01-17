"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Item = {
  id: number;
  title: string;
  image: string;
  available: boolean | string | number;
};

interface NewArrivalsProps {
  items: Item[];
}

export default function NewArrivalsMobileOptimized({ items }: NewArrivalsProps) {
  const [swiper, setSwiper] = useState<any>(null);

  if (!items || items.length === 0) return null;

  const isAvailable = (value: boolean | string | number) =>
    value === true || value === "true" || value === 1 || value === "1";

  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
              Świeże rośliny w naszej szkółce
            </h2>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">
              Najlepsze odmiany na 2026
            </p>
          </div>

          <div className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 p-1.5 rounded-full">
            <button
              onClick={() => swiper?.slidePrev()}
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <Swiper
            onSwiper={setSwiper}
            
            speed={500}
            
            spaceBetween={20}
            slidesPerView={1.1}
            grabCursor={true}
            loop={items.length > 2}
            
            watchSlidesProgress={true} 
            
            observer={true} 
            observeParents={true}
            
            preventInteractionOnTransition={true}
            
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: (index, className) => `<span class="${className} !bg-white w-1.5 h-1.5 !opacity-30 !mx-1"></span>`,
            }}
            
            modules={[Pagination, Autoplay]}
            
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="!overflow-visible"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto py-4 pb-12">
                <div 
                  className="group relative h-[400px] md:h-[600px] w-full bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer border border-neutral-800"
                  style={{ willChange: 'transform' }}
                >
                  <div className="absolute inset-0" style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-800 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      unoptimized 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 md:via-black/20 to-transparent" />
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    {isAvailable(item.available) ? (
                      <span className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur text-black text-[10px] md:text-xs font-bold uppercase px-3 py-1.5 md:py-2 rounded-md shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        <FaCheck className="text-[9px]" /> Dostępne
                      </span>
                    ) : (
                      <span className="bg-neutral-800/90 backdrop-blur text-neutral-400 text-[10px] md:text-xs font-bold uppercase px-3 py-1.5 md:py-2 rounded-md border border-neutral-700">
                        Brak
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full z-10">
                    <div className="md:hidden p-6 bg-black/90 backdrop-blur-md border-t border-neutral-800">
                      <h3 className="text-xl font-bold text-white leading-tight mb-2">{item.title}</h3>
                      <div className="w-10 h-[2px] bg-neutral-700 group-hover:bg-emerald-500 transition-colors" />
                    </div>

                    <div className="hidden md:block absolute bottom-0 left-0 w-full p-8 pb-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                      <div className="w-8 h-[1px] bg-white/30 group-hover:w-16 group-hover:bg-emerald-400 transition-all duration-500" />
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-3xl pointer-events-none transition-colors duration-500" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-3xl pointer-events-none transition-colors duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}