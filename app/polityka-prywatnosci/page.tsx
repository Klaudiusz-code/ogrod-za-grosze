import React from "react";
import { FaFileAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Polityka Prywatności | Szkółka Aleksandrów",
  description: "Polityka prywatności i plików cookies w Szkółce Roślin Aleksandrów.",
};

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Header prosty, jak w sekcjach */}
      <header className="bg-white border-b border-gray-200 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-3 block">
            Dokument prawny
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Polityka Prywatności
          </h1>
          <p className="text-gray-500 text-lg">
            Niniejsza Polityka Prywatności reguluje zasady przetwarzania Twoich danych osobowych oraz wykorzystywania plików cookies w ramach serwisu.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          {/* Informacja o administratorze */}
          <section className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FaGlobe className="text-green-600" /> Administrator Danych
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Administratorem Twoich danych osobowych jest:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-gray-800">
              <p className="font-bold text-lg mb-1">Szkółka Roślin Aleksandrów</p>
              <p className="mb-2">ul. Cicha 20, 00-001 Aleksandrów</p>
              <p className="mb-2 flex items-center gap-2">
                <FaPhone className="text-green-600 text-sm" />
                +48 123 456 789
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-green-600 text-sm" />
                biuro@szkolka.pl
              </p>
            </div>
          </section>

          {/* 1. Cel i podstawa przetwarzania */}
          <section className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. Cele przetwarzania danych
            </h2>
            <p className="text-gray-600 mb-4">
              Twoje dane osobowe przetwarzane są w następujących celach:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
              <li><strong className="text-gray-900">Kontakt poprzez formularz:</strong> Odpowiedzi na Twoje pytania, doradztwo ogrodnicze (podstawa prawna: wykonanie umowy przed zawarciem umowy lub art. 6 ust. 1 lit. f RODO).</li>
              <li><strong className="text-gray-900">Kontakt telefoniczny:</strong> Obsługa zgłoszeń telefonicznych (podstawa prawna: art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes).</li>
              <li><strong className="text-gray-900">WhatsApp:</strong> Komunikacja z klientami (podstawa prawna: art. 6 ust. 1 lit. f RODO).</li>
              <li><strong className="text-gray-900">Cookies:</strong> Dostosowanie strony do Twoich preferencji i analiza ruchu (podstawa prawna: art. 6 ust. 1 lit. f RODO).</li>
            </ul>
          </section>

          {/* 2. Odbiorcy danych */}
          <section className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. Odbiorcy danych
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Twoje dane nie są udostępniane podmiotom trzecim, z wyjątkiem podmiotów niezbędnych do obsługi serwisu (np. dostawcy usług hostingu, narzędzia analityczne) oraz gdy wymagają tego przepisy prawa.
            </p>
          </section>

          {/* 3. Pliki Cookies */}
          <section className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FaFileAlt className="text-green-600" /> Pliki Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Serwis wykorzystuje pliki cookies w celu poprawy jakości przeglądania stron, analizowania ruchu oraz dostarczania spersonalizowanych treści. Możesz zarządzać ustawieniami cookies w przeglądarce.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 text-sm uppercase mb-1">Niezbędne</h4>
                <p className="text-xs text-green-700">Niezbędne do działania strony.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Analityczne</h4>
                <p className="text-xs text-gray-600">Pomagają nam zrozumieć, jak korzystasz ze strony.</p>
              </div>
            </div>
          </section>

          {/* 4. Twoje prawa */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              4. Twoje prawa
            </h2>
            <p className="text-gray-600 mb-4">
              Przysługują Ci następujące prawa w związku z przetwarzaniem Twoich danych osobowych:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
              <li>Prawo do dostępu do Twoich danych.</li>
              <li>Prawo do sprostowania danych.</li>
              <li>Prawo do usunięcia danych.</li>
              <li>Prawo do ograniczenia przetwarzania.</li>
              <li>Prawo do sprzeciwu wobec przetwarzania.</li>
              <li>Prawo do przenoszenia danych.</li>
            </ul>
            <p className="text-sm text-gray-500 italic">
              Aby skorzystać z praw skontaktuj się z nami pod adresem: biuro@szkolka.pl
            </p>
          </section>

          {/* 5. Zmiany w polityce */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              5. Zmiany w polityce
            </h2>
            <p className="text-gray-600">
              Niniejsza polityka może ulec zmianie w przyszłości. Wszelkie zmiany będą publikowane na tej podstronie.
            </p>
          </section>

          <div className="text-center pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400 mb-6">
              Ostatnia aktualizacja: 01.1.2026
            </p>
            <Link 
              href="/" 
              className="inline-block px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md"
            >
              Wróć do strony głównej
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}