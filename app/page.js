"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/market")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  }, []);

  const connectAngelOne = () => {
    window.location.href =
      "https://smartapi.angelone.in/publisher-login?api_key=983mzMi0";
  };

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
          <p>NIFTY: {data.nifty}</p>
          <p>BANKNIFTY: {data.banknifty}</p>
          <p>VIX: {data.vix}</p>
        </>
      ) : (
        <p>Loading API...</p>
      )}

      <button
        onClick={connectAngelOne}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Connect Angel One
      </button>
    </main>
  );
}
