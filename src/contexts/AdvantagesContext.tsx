"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AdvantagesV1Response } from "@/src/types/eventResponse.model";

type DataContextType = {
  cachedData: AdvantagesV1Response | null;
  setCachedData: (data: AdvantagesV1Response) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) throw new Error("useDataContext must be used within a DataProvider");
  return context;
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [cachedData, setCachedData] = useState<AdvantagesV1Response | null>(null);

  return <DataContext.Provider value={{ cachedData, setCachedData }}>{children}</DataContext.Provider>;
}
