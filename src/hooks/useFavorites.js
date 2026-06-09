import { useState } from "react";

const STORAGE_KEY = "football_favorites";

function loadFavorites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites);

  function save(newFavorites) {
    setFavorites(newFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  }

  function toggle(team) {
    const exist = favorites.some((f) => f.id === team.id);

    if (exist) {
      save(favorites.filter((f) => f.id !== team.id));
    } else {
      save([...favorites, team]);
    }
  }

  function isFavorite(id) {
    return favorites.some((f) => f.id === id);
  }

  return { favorites, toggle, isFavorite };
}
