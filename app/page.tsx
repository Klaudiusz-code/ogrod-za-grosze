// app/page.tsx
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { client } from "@/lib/client";
import { gql } from "@apollo/client";
import HomeClient from "./HomeClient";
import { Metadata } from "next";

/* =========================
   SEO
========================= */
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.query({
    query: gql`
      query SeoHome {
        pageBy(uri: "/") {
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
    fetchPolicy: "no-cache",
  });

  // @ts-ignore

  const seo = data?.pageBy?.seo;

  const title = seo?.title || "Szkółka roślin i krzewów w Aleksandrowie";
  const description =
    seo?.description || "Szkółka roślin i krzewów w Aleksandrowie";

  return {
    title,
    description,
    openGraph: {
      title: seo?.openGraph?.title || title,
      description: seo?.openGraph?.description || description,
      type: "website",
      locale: "pl_PL",
    },
  };
}

/* =========================
   PAGE DATA
========================= */
export default async function Page() {
  const { data } = await client.query({
    query: gql`
      query HomePage {
        pageBy(uri: "/") {
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
    fetchPolicy: "no-cache",
  });

  return <HomeClient data={data} />;
}
