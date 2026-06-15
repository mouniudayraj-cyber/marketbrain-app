"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const connectAngelOne = () => {
    alert("Button Working");
  };

  useEffect(() => {
    fetch("/api/market")
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
          <p>NIFTY: {data?.nifty}</p>
          <p>BANKNIFTY: {data?.banknifty}</p>
          <p>VIX: {data?.vix}</p>
        </>
      ) : (
        <p>Loading API...</p>
      )}

      <button onClick={connectAngelOne}>
        window.open(
  "https://smartapi.angelone.in/publisher-login/?api_key=983mzMi0",
  "_self"
);
