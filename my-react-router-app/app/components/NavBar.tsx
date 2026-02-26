import { Link } from "react-router";

export function NavBar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/favorites" className="hover:underline">Favorites</Link>
    </nav>
  );
}
