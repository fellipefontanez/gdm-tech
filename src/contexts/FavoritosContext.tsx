"use client";

import { createContext, useContext, useState, useMemo, useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";

type FavoritosContextType = {
  cachedData: string[] | null;
  setCachedData: (data: string[]) => void;
  addFavorite: (newFavorite: string) => void;
  removeFavorite: (favorite: string) => void;
  showOnlyFavCategories: boolean | undefined;
  setShowOnlyFavCategories: (deveMostrar: boolean) => void;
};

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export function useFavoritosContext() {
  const context = useContext(FavoritosContext);
  if (!context) throw new Error("useFavoritosContext must be used within a FavoritosProvider");
  return context;
}

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [cachedData, setCachedDataState] = useState<string[] | null>(null);
  const [showOnlyFavCategories, setShowOnlyFavCategories] = useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/protected/favoritos?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.favoritos) {
            setCachedDataState(data.favoritos);
          }
        });
    }
  }, [session]);

  const addFavorite = async (newFavorite: string) => {
    const updatedFavorites = [...(cachedData ?? []), newFavorite];
    setCachedDataState(updatedFavorites);

    await fetch("/api/protected/favoritos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: session?.user?.email,
        favoritos: updatedFavorites,
      }),
    });
  };

  const setCachedData = async (favoritos: string[]) => {
    setCachedDataState(favoritos);

    await fetch("/api/protected/favoritos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: session?.user?.email,
        favoritos: favoritos,
      }),
    });
  };

  const removeFavorite = async (favorite: string) => {
    const updatedFavorites = (cachedData ?? []).filter((item) => item !== favorite);
    setCachedDataState(updatedFavorites);

    await fetch("/api/protected/favoritos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: session?.user?.email,
        favoritos: updatedFavorites,
      }),
    });
  };

  const value = useMemo(
    () => ({ cachedData, setCachedData, addFavorite, removeFavorite, showOnlyFavCategories, setShowOnlyFavCategories }),
    [cachedData, showOnlyFavCategories]
  );

  return <FavoritosContext.Provider value={value}>{children}</FavoritosContext.Provider>;
}
