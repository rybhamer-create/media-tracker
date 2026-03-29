"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MediaCard from "./components/MediaCard";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <main style={{ padding: 20 }}>
      <h1>Media Tracker</h1>
      <SearchBar setResults={setResults} />
      <div style={{ marginTop: 20 }}>
        {results.map((item: any) => (
          <MediaCard key={item.imdbID} item={item} />
        ))}
      </div>
    </main>
  );
}