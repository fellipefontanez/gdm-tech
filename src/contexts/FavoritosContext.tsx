"use client";

import { createContext, useContext, useState, useMemo, useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";

type FavoritosContextType = {
  cachedData: string[] | null;
  setCachedData: (data: string[]) => void;
  addFavorite: (newFavorite: string) => void;
  removeFavorite: (favorite: string) => void;
};

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export function useFavoritosContext() {
  const context = useContext(FavoritosContext);
  if (!context) throw new Error("useFavoritosContext must be used within a FavoritosProvider");
  return context;
}

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [cachedData, setCachedData] = useState<string[] | null>(null);
  const { data: session, update } = useSession();

  useEffect(() => {
    if (session?.user) {
      const favorites = (session.user as any).favorites ?? [];
      setCachedData(favorites);
    }
  }, [session]);

  const addFavorite = (newFavorite: string) => {
    const currentFavorites = (session as any)?.user?.favorites || [];
    if (!currentFavorites.includes(newFavorite)) {
      const updatedFavorites = [...currentFavorites, newFavorite];
      update({
        user: {
          ...session?.user,
          favorites: updatedFavorites,
        },
      });
      setCachedData(updatedFavorites);
    }
  };

  const removeFavorite = (favorite: string) => {
    const currentFavorites = (session as any)?.user?.favorites || [];
    if (currentFavorites.includes(favorite)) {
      const updatedFavorites = currentFavorites.filter((item: string) => item !== favorite);
      update({
        user: {
          ...session?.user,
          favorites: updatedFavorites,
        },
      });
      setCachedData(updatedFavorites);
    }
  };

  const value = useMemo(() => ({ cachedData, setCachedData, addFavorite, removeFavorite }), [cachedData, session]);

  return <FavoritosContext.Provider value={value}>{children}</FavoritosContext.Provider>;
}
