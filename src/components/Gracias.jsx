// src/components/Gracias.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Gracias() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1>✅ Thanks for your message!</h1>
      <p>I’ll get back to you as soon as possible.</p>
      <Link
        to="/"
        style={{
          color: "#0af",
          marginTop: "2rem",
          fontSize: "1.2rem",
          textDecoration: "underline",
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
