"use client";

import { createContext, useContext } from "react";

export type GlobalSettings = {
  numerTelefonu: string;
  whatsapp?: string;
  emailKontaktowy?: string;
  adres?: string;
  godzinyOtwarcia?: string;
  otwarteTeraz?: boolean;
};

const GlobalSettingsContext = createContext<GlobalSettings | null>(null);

export function GlobalSettingsProvider({
  value,
  children,
}: {
  value: GlobalSettings;
  children: React.ReactNode;
}) {
  return (
    <GlobalSettingsContext.Provider value={value}>
      {children}
    </GlobalSettingsContext.Provider>
  );
}

export function useGlobalSettings() {
  const context = useContext(GlobalSettingsContext);
  if (!context)
    throw new Error("useGlobalSettings musi być użyty wewnątrz Provider!");
  return context;
}
