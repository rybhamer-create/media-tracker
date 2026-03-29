"use client";

import { useState } from "react";

export default function SearchBar({ setResults }: any) {
  const [query, setQuery] = useState("");

  const search = async () => {
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    setResults(data.Search || []);
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies or shows..."
      />
      <button onClick={search}>Search</button>
    </div>
  );
}