
import { route, index, type RouteConfig } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("favorites", "routes/favorites.tsx"),
	route("movie/:id", "routes/movie.tsx"),
] satisfies RouteConfig;
