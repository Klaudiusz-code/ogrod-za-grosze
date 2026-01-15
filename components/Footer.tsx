"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLeaf,
  FaClock,
} from "react-icons/fa";
import { Poppins } from "next/font/google";
import { useGlobalSettings } from "./GlobalSettingsContext";
import { isOpenNow } from "@/utils/isOpenNow";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface FooterGlobalSettings {
  logo?: string;
  numerTelefonu: string;
  emailKontaktowy?: string;
  adres?: string;
  godzinyOtwarcia?: string;
  facebook?: string;
  instagram?: string;
}

export default function Footer() {
  const settings = useGlobalSettings() as FooterGlobalSettings;
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Strona główna", href: "/" },
    { name: "Asortyment", href: "rosliny" },
    { name: "O nas", href: "onas" },
    { name: "Kontakt", href: "kontakt" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const hours = settings.godzinyOtwarcia ?? "";
    setIsOpen(isOpenNow(hours));
    const interval = setInterval(() => {
      setIsOpen(isOpenNow(hours));
    }, 60_000);
    return () => clearInterval(interval);
  }, [settings.godzinyOtwarcia]);

  const scrollToSection = (id: string) => {
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`${poppins.className} bg-[#022c22] text-emerald-50/80 relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 text-emerald-900/30 -mr-20 -mt-20 pointer-events-none opacity-30">
        <FaLeaf size={400} />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              {settings.logo ? (
                <Image
                  src={"/logowhite.svg"}
                  alt="Logo"
                  width={160}
                  height={40}
                  className="h-16 w-auto object-contain"
                />
              ) : (
                <span className="text-lg font-bold text-green-700">
                  Ogród Za Grosze
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-emerald-200/60">
              Profesjonalna szkółka roślin. Łączymy tradycję z nowoczesnym
              podejściem do ogrodnictwa. Twój ogród to nasza pasja.
            </p>
            <div className="flex gap-4">
              {settings.facebook && (
                <a
                  href={settings.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center border border-white/10 hover:border-green-400 transition-all duration-300 text-white"
                >
                  <FaFacebookF size={14} />
                </a>
              )}
              {settings.instagram && (
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center border border-white/10 hover:border-pink-400 transition-all duration-300 text-white"
                >
                  <FaInstagram size={14} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-green-400" />
                <div>
                  <p className="text-white font-medium">Adres</p>
                  <p className="text-sm text-emerald-200/70">
                    {settings.adres || "-"}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-green-400" />
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <a
                    href={`tel:${settings.numerTelefonu}`}
                    className="text-sm text-emerald-200/70 hover:text-white"
                  >
                    {settings.numerTelefonu}
                  </a>
                </div>
              </li>
              {settings.emailKontaktowy && (
                <li className="flex items-start gap-4">
                  <FaEnvelope className="mt-1 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a
                      href={`mailto:${settings.emailKontaktowy}`}
                      className="text-sm text-emerald-200/70 hover:text-white"
                    >
                      {settings.emailKontaktowy}
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-emerald-200 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Godziny otwarcia
              </h3>
              <div className="space-y-2 text-sm text-emerald-200/80 mb-6">
                {settings.godzinyOtwarcia
                  ? settings.godzinyOtwarcia.split(",").map((line, idx) => {
                      const match = line.match(/^([^\d]+)(.*)$/);
                      if (!match) return null;
                      const day = match[1].trim();
                      const hours = match[2].trim();
                      return (
                        <div
                          key={idx}
                          className="flex justify-between border-b border-white/5 pb-2"
                        >
                          <span>{day}</span>
                          <span className="text-white">{hours}</span>
                        </div>
                      );
                    })
                  : "Brak godzin otwarcia"}

                <div className="flex items-center justify-between pt-2">
                  <span>Teraz</span>
                  <span className="flex items-center gap-2">
                    <span
                      className={`relative flex h-2 w-2 ${
                        isOpen ? "animate-pulse" : "opacity-50"
                      }`}
                    >
                      <span
                        className={`absolute inline-flex h-full w-full rounded-full ${
                          isOpen ? "bg-green-400" : "bg-gray-500"
                        } opacity-75`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${
                          isOpen ? "bg-green-300" : "bg-gray-400"
                        }`}
                      ></span>
                    </span>
                    <span
                      className={`font-semibold ${
                        isOpen ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isOpen ? "Otwarte" : "Zamknięte"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-emerald-200/50">
          <div className="text-center md:text-left">
            © {currentYear} Szkółka Roślin Aleksandrów. Wszelkie prawa
            zastrzeżone.
          </div>
          <div className="flex gap-6">
            <a
              href="/polityka-prywatnosci"
              className="hover:text-green-400 transition-colors"
            >
              Polityka Prywatności
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Regulamin
            </a>
          </div>
          <div className="flex items-center gap-2 text-center md:text-right">
            <span>Projekt i realizacja:</span>
            <a
              href="https://klaudiuszdev.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-green-400 transition-colors"
            >
              klaudiuszdev.pl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
