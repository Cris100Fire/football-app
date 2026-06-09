import { createContext, useContext } from "react";
import { useFavorites } from "../hooks/useFavorites";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const value = useFavorites();

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const ctx = useContext(FavoritesContext);

  if (!ctx) {
    throw new Error(
      "useFavoritesContext debe usarse dentro de FavoritesProvider",
    );
  }

  return ctx;
}
