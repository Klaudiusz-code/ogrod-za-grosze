import { client } from "@/lib/client";
import { gql } from "@apollo/client";
import HomeClient from "./HomeClient";
import { Metadata } from "next";

interface SeoResponse {
  page: {
    seo: {
      title: string;
      description: string;
      openGraph?: {
        title?: string;
        description?: string;
      };
    } | null;
  } | null;
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.query<SeoResponse>({
    query: gql`
      query SeoHome {
        page(id: "cG9zdDoxOQ==") {
          seo {
            title
            description
            openGraph {
              title
              description
            }
          }
        }
      }
    `,
  });

  const title = data?.page?.seo?.title || "Szkółka roślin i krzewów w Aleksandrowie";
  const description =
    data?.page?.seo?.description || "Szkółka roślin i krzewów w Aleksandrowie";

  const ogTitle = data?.page?.seo?.openGraph?.title || title;
  const ogDescription =
    data?.page?.seo?.openGraph?.description || description;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      locale: "pl_PL",
    },
  };
}

export default async function Page() {
  const { data }: any = await client.query({
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

  return <HomeClient data={data} />;
}