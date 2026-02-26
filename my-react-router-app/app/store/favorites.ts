import { create } from "zustand";

export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  [key: string]: any;
}

interface FavoritesState {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavorites = create<FavoritesState>((set, get) => ({
  favorites: [],
  addFavorite: (movie) =>
    set((state) =>
      get().isFavorite(movie.id)
        ? state
        : { favorites: [...state.favorites, movie] }
    ),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((m) => m.id !== id) })),
  isFavorite: (id) => get().favorites.some((m) => m.id === id),
}));
