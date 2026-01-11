"use client";

import React from "react";
import Link from "next/link";


export default function NotFoundPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
   

      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-green-700 mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Strona nie została znaleziona
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Przepraszamy, ale strona, której szukasz, nie istnieje lub została usunięta.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition"
        >
          Wróć na stronę główną
        </Link>
      </main>

    </div>
  );
}
