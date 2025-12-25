"use client";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Kroki from "@/components/Kroki";
import Rosliny from "@/components/Rosliny";
import PlantList from "@/components/PlantList";
import LocalGarden from "@/components/LocalGarden";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="text-gray-800">
      {/* TOPBAR */}
      <TopBar />

      {/* HEADER / NAV */}
      <Header />

      {/* HERO */}
      <Hero />
      <Kroki />

      {/* NOWOŚCI W SZKÓŁCE */}
      <NewArrivals />

      {/* KROKI / HOW IT WORKS */}

      {/* OFERTA / ROŚLINY */}
      <Rosliny />
      <PlantList />

      {/* INFO O LOKALNYM OGRODZIE */}
      <LocalGarden />

      {/* GALERIA */}
      <Gallery />

      {/* MAPA / KONTAKT */}
      <Map />

      {/* FAQ */}
      <Faq />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
