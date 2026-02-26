import React from "react";
import { Link } from "react-router";
import { useFavorites } from "../store/favorites";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <div className="max-w-2xl mx-auto p-8">No favorites yet.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>
      {favorites.map((movie) => (
        <div key={movie.id} className="flex items-center mb-4">
          <button
            onClick={() => removeFavorite(movie.id)}
            aria-label="Remove from favorites"
            style={{ background: "none", border: "none", cursor: "pointer", marginRight: "0.5em", fontSize: 24, color: "#facc15" }}
            title="Remove from favorites"
          >
            ★
          </button>
          <Link to={`/movie/${movie.id}`} className="flex items-center gap-4 hover:underline">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                alt={movie.title}
                className="rounded"
              />
            )}
            <div>
              <div className="font-bold">{movie.title}</div>
              <div className="text-gray-500">{movie.release_date}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
