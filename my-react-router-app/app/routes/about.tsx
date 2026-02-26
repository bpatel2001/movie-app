import React from "react";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="mb-2">
        This is a simple movie search application built with React Router and Tailwind CSS.
      </p>
      <p className="mb-2">
        You can search for movies, view details, and favorite your top picks. The app demonstrates client-side routing, global state management, and a clean, responsive UI.
      </p>
      <p className="text-gray-500 text-sm">&copy; 2026 Movie App Demo</p>
    </main>
  );
}
