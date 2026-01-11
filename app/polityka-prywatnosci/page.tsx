import React from "react";
import { gql } from "@apollo/client";
import { client } from "../../lib/client";
import parse from "html-react-parser";
import Link from "next/link";

interface PrivacyPageData {
  pageBy: {
    id: string;
    title: string;
    content: string;
  };
}

export default async function PrivacyPage() {
  const query = gql`
    query PolitykaPrywatnosci {
      pageBy(uri: "polityka-prywatnosci") {
        id
        title
        content
      }
    }
  `;

  const { data } = await client.query<PrivacyPageData>({ query });

  if (!data?.pageBy) {
    return <p>Brak danych strony polityki prywatności.</p>;
  }

  const page = data.pageBy;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-green-800">
            {page.title}
          </h1>

          <div className="prose prose-green mx-auto">{parse(page.content)}</div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition"
            >
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
