import { gql } from "@apollo/client";

export const GET_HOMEPAGE = gql`
  query HomePageByID {
    page(id: "cG9zdDoxOQ==") {
      title
      globalneUstawieniaStrony {
        numerTelefonu
        emailKontaktowy
        whatsapp
        adres
        godzinyOtwarcia
        otwarteTeraz
      }
    }
  }
`;
