"use client";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Kroki from "@/components/Kroki";
import NewArrivalsMobileOptimized from "@/components/NewArrivals";
import TransportSection from "@/components/TransportRoslin";
import AboutGardenSection from "@/components/LocalGarden";
import PlantList from "@/components/PlantList";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { GlobalSettingsProvider } from "@/components/GlobalSettingsContext";
import { FaLeaf } from "react-icons/fa";

export default function HomeClient({ data }: any) {
  const settings = data.page.globalneUstawieniaStrony;

  const globalSettings = {
    whatsapp: settings?.whatsapp || "",
    numerTelefonu: settings?.numerTelefonu || "",
    emailKontaktowy: settings?.emailKontaktowy || "",
    adres: settings?.adres || "",
    godzinyOtwarcia: settings?.godzinyOtwarcia || "",
    otwarteTeraz: settings?.otwarteTeraz || false,
    logo: settings?.logo?.node?.sourceUrl || "",
    facebook: settings?.facebook || "",
    instagram: settings?.instagram || "",
    katalogPdf: settings?.katalogPdf || "",
  };

  return (
    <GlobalSettingsProvider value={globalSettings}>
      <main className="text-gray-800">
        <TopBar />
        <Header />
        <Hero
          kafelki={data.kafelkiStartowe.edges.map((e: any) => e.node.kafelki)}
        />
        <Kroki
          steps={data.krokWspPracy.edges.map(
            (e: any) => e.node.krokiwspolpracy
          )}
        />
        <NewArrivalsMobileOptimized
          items={data.rosliny.nodes.map((n: any) => ({
            id: n.id,
            title: n.roslinki.plantName,
            image: n.roslinki.obrazekRosliny?.node?.sourceUrl,
            available: !!n.roslinki.dostepnosc,
          }))}
        />
        <TransportSection
          items={data.transportItems.nodes.map(
            (n: any) => n.transportroslin
          )}
          globalSettings={globalSettings}
        />
        <AboutGardenSection
          globalSettings={globalSettings}
          aboutSchoolData={data.page.aboutschool}
        />
        <PlantList
          categories={data.assortmentBoxes.nodes.map(
            (n: any, i: number) => ({
              id: `cat-${i}`,
              title: n.asortymentBox.nazwaSekcji,
              count: n.asortymentBox.iloscGatunkow,
              items: n.asortymentBox.items?.split(","),
              dodatkowaInformacja: n.asortymentBox.dodatkowaInformacja,
              icon: FaLeaf,
            })
          )}
        />
        <Gallery
          galleryItems={data.galleries.nodes.flatMap((g: any) => {
            if (!g?.zdjecia) return [];

            const zdjeciaArray = Array.isArray(g.zdjecia)
              ? g.zdjecia
              : [g.zdjecia];

            return zdjeciaArray.map((z: any) => ({
              src: z?.obrazekurl?.node?.sourceUrl || "",
              title: z?.tytulZdjecia || "Zdjęcie",
            }));
          })}
        />
        <Map />
        <Faq
          items={
            data.faqs?.nodes
              .flatMap((f: any) => f?.pytanka || [])
              .map((p: any) => ({
                question: p.pytanie,
                answer: p.odpowiedz,
              })) || []
          }
        />
        <Footer />
      </main>
    </GlobalSettingsProvider>
  );
}