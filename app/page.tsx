"use client";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import PlantList from "@/components/PlantList";
import Hero from "@/components/Hero";
import NewArrivalsMobileOptimized from "@/components/NewArrivals";
import Kroki from "@/components/Kroki";
import TransportSection from "@/components/TransportRoslin";
import AboutGardenSection from "@/components/LocalGarden";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

import { client } from "@/lib/client";
import { gql } from "@apollo/client";
import { GlobalSettingsProvider } from "@/components/GlobalSettingsContext";

import { FaLeaf } from "react-icons/fa";

interface PlantItem {
  id: number;
  title: string;
  image: string;
  available: boolean;
}

interface TransportItem {
  transportTitle: string;
}

export interface GlobalSettings {
  whatsapp: string;
  numerTelefonu: string;
  emailKontaktowy: string;
  adres: string;
  godzinyOtwarcia: string;
  otwarteTeraz: boolean;
  logo: string;
  facebook: string;
  instagram: string;
  katalogPdf: string;
}

interface Category {
  id: string;
  title: string;
  items: string[];
  count: string;
  dodatkowaInformacja?: string | null;
  icon: React.ElementType;
}

interface GalleryItem {
  src: string;
  title: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface AboutSchoolData {
  tytulSekcji: string;
  opisGlowny: string;
  lataDoswiadczenia: string;
  gwarancjaJakosci: string;
  zadowoleniKlienci: string;
  liczbaOdmianRoslin: string;
}

interface HomePageQuery {
  page: {
    globalneUstawieniaStrony: {
      logo?: { node: { sourceUrl: string } };
      numerTelefonu: string;
      emailKontaktowy?: string;
      whatsapp?: string;
      adres?: string;
      godzinyOtwarcia?: string;
      otwarteTeraz?: boolean;
      facebook?: string;
      instagram?: string;
      katalogPdf?: string | null;
    };
    aboutschool: AboutSchoolData;
  };
  kafelkiStartowe: {
    edges: {
      node: { kafelki: { tytulKafelka: string; krotkiOpis: string } };
    }[];
  };
  krokWspPracy: {
    edges: {
      node: { krokiwspolpracy: { description: string; opisKroku: string } };
    }[];
  };
  rosliny: {
    nodes: {
      id: number | string;
      roslinki: {
        plantName: string;
        dostepnosc?: boolean;
        obrazekRosliny?: { node: { sourceUrl: string } };
      };
    }[];
  };
  transportItems: { nodes: { transportroslin: { transportTitle: string } }[] };
  assortmentBoxes: {
    nodes: {
      asortymentBox: {
        nazwaSekcji: string;
        iloscGatunkow: string;
        items: string;
        dodatkowaInformacja?: string | null;
      };
    }[];
  };
  galleries: {
    nodes: {
      zdjecia: {
        tytulZdjecia: string;
        obrazekurl: { node: { sourceUrl: string } };
      }[];
    }[];
  };
  faqs: { nodes: { pytanka: { pytanie: string; odpowiedz: string }[] }[] };
}


export default async function Page() {
  const { data } = await client.query<HomePageQuery>({
    query: gql`
      query HomePage {
        page(id: "cG9zdDoxOQ==") {
          globalneUstawieniaStrony {
            logo {
              node {
                sourceUrl
              }
            }
            numerTelefonu
            emailKontaktowy
            whatsapp
            adres
            godzinyOtwarcia
            otwarteTeraz
            facebook
            instagram
            katalogPdf
          }
          aboutschool {
            tytulSekcji
            opisGlowny
            lataDoswiadczenia
            gwarancjaJakosci
            zadowoleniKlienci
            liczbaOdmianRoslin
          }
        }

        kafelkiStartowe {
          edges {
            node {
              kafelki {
                tytulKafelka
                krotkiOpis
              }
            }
          }
        }

        krokWspPracy {
          edges {
            node {
              krokiwspolpracy {
                description
                opisKroku
              }
            }
          }
        }

        rosliny {
          nodes {
            id
            roslinki {
              plantName
              dostepnosc
              obrazekRosliny {
                node {
                  sourceUrl
                }
              }
            }
          }
        }

        transportItems {
          nodes {
            transportroslin {
              transportTitle
            }
          }
        }

        assortmentBoxes {
          nodes {
            asortymentBox {
              nazwaSekcji
              iloscGatunkow
              items
              dodatkowaInformacja
            }
          }
        }

        galleries {
          nodes {
            zdjecia {
              tytulZdjecia
              obrazekurl {
                node {
                  sourceUrl
                }
              }
            }
          }
        }

        faqs {
          nodes {
            pytanka {
              pytanie
              odpowiedz
            }
          }
        }
      }
    `,
  });

  const settings = data?.page?.globalneUstawieniaStrony;

  const globalSettings: GlobalSettings = {
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

  const aboutSchoolData: AboutSchoolData = data?.page?.aboutschool || {
    tytulSekcji: "",
    opisGlowny: "",
    lataDoswiadczenia: "0",
    gwarancjaJakosci: "0",
    zadowoleniKlienci: "0",
    liczbaOdmianRoslin: "0",
  };

  const kafelki =
    data?.kafelkiStartowe?.edges?.map((e) => e.node.kafelki) || [];

  const steps =
    data?.krokWspPracy?.edges?.map((e) => ({
      description: e.node.krokiwspolpracy.description,
      opisKroku: e.node.krokiwspolpracy.opisKroku,
    })) || [];

  const items: PlantItem[] =
    data?.rosliny?.nodes?.map((node) => ({
      id: Number(node.id),
      title: node.roslinki?.plantName || "Brak nazwy",
      image: node.roslinki?.obrazekRosliny?.node?.sourceUrl || "",
      available: !!node.roslinki?.dostepnosc,
    })) || [];

  const transportItems: TransportItem[] =
    data?.transportItems?.nodes?.map((n) => n.transportroslin) || [];

  const categories: Category[] =
    data?.assortmentBoxes?.nodes?.map((node, index) => ({
      id: `cat-${index}`,
      title: node.asortymentBox.nazwaSekcji,
      count: node.asortymentBox.iloscGatunkow,
      items: node.asortymentBox.items
        ? node.asortymentBox.items.split(",").map((i) => i.trim())
        : [],
      dodatkowaInformacja: node.asortymentBox.dodatkowaInformacja || null,
      icon: FaLeaf,
    })) || [];

  const galleryItems: GalleryItem[] =
    data?.galleries?.nodes?.flatMap((node) => {
      if (!node?.zdjecia) return [];
      const arr = Array.isArray(node.zdjecia) ? node.zdjecia : [node.zdjecia];
      return arr.map((z) => ({
        src: z.obrazekurl?.node?.sourceUrl || "",
        title: z.tytulZdjecia || "Zdjęcie",
      }));
    }) || [];

  const faqItems: FaqItem[] =
    data?.faqs?.nodes
      ?.flatMap((n) =>
        n.pytanka ? (Array.isArray(n.pytanka) ? n.pytanka : [n.pytanka]) : []
      )
      .map((p) => ({
        question: p.pytanie,
        answer: p.odpowiedz,
      })) || [];

  return (
    <GlobalSettingsProvider value={globalSettings}>
      <main className="text-gray-800">
        <TopBar />
        <Header />

        <Hero kafelki={kafelki} />
        <Kroki steps={steps} />
        <NewArrivalsMobileOptimized items={items} />

        <TransportSection
          items={transportItems}
          globalSettings={globalSettings}
        />
        <AboutGardenSection
          globalSettings={globalSettings}
          aboutSchoolData={aboutSchoolData}
        />

        <PlantList categories={categories} />
        <Gallery galleryItems={galleryItems} />
        <Map />
        <Faq items={faqItems} />
        <Footer />
      </main>
    </GlobalSettingsProvider>
  );
}
