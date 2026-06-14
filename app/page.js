"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1>🚀 MarketBrain</h1>
      <h2>Live Market Dashboard</h2>

      {data ? (
        <>
          <p>Status: {data.status}</p>
          <p>{data.message}</p>
        </>
      ) : (
        <p>Loading API...</p>
      )}

      <button>Connect Angel One</button>
    </main>
  );
}
