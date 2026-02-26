import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import React, { useState } from "react";
import { Link } from "react-router";
import { useFavorites } from "../store/favorites";

const TMDB_API_KEY = "1fd8202884d3443966a7fb925f1c679b";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.log("TMDB API KEY:", import.meta.env.VITE_TMDB_API_KEY);
      setResults([]);
    }
    setLoading(false);
  }

  return (
    <div>
      <h1>Movie Search Engine</h1>
      <form onSubmit={handleSearch} style={{ margin: "2em 0" }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
          style={{ padding: "0.5em", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "1em", padding: "0.5em 1em" }}>
          Search
        </button>
      </form>
      {loading && <div>Loading...</div>}
      <div>
        {results.map((movie: any) => {
          const favorite = isFavorite(movie.id);
          return (
            <div key={movie.id} style={{ marginBottom: "1em", display: "flex", alignItems: "center" }}>
              <button
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  favorite ? removeFavorite(movie.id) : addFavorite(movie);
                }}
                aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                style={{ background: "none", border: "none", cursor: "pointer", marginRight: "0.5em", fontSize: 24, color: favorite ? "#facc15" : "#ccc" }}
                title={favorite ? "Remove from favorites" : "Add to favorites"}
              >
                {favorite ? "★" : "☆"}
              </button>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none", color: "inherit", flex: 1 }}
              >
                <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  {movie.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      style={{ marginRight: "1em", borderRadius: "4px" }}
                    />
                  )}
                  <div>
                    <div style={{ fontWeight: "bold" }}>{movie.title}</div>
                    <div style={{ color: "#666" }}>{movie.release_date}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
