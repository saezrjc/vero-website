"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setState("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Hubo un error. Intenta de nuevo.");
        setState("error");
      }
    } catch {
      setErrorMsg("Error de conexión. Intenta de nuevo.");
      setState("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(248,244,238,.06)",
    border: "1px solid #4A3728",
    color: "#F8F4EE",
    padding: ".85rem 1rem",
    fontSize: ".9rem",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#8B5E3C",
    fontSize: ".72rem",
    letterSpacing: ".12em",
    textTransform: "uppercase",
    marginBottom: ".4rem",
  };

  if (state === "success") {
    return (
      <div style={{ padding: "2rem", background: "rgba(184,151,90,.1)", border: "1px solid #B8975A", color: "#F8F4EE", textAlign: "center" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>¡Mensaje recibido!</p>
        <p style={{ color: "#8B5E3C", fontSize: ".85rem" }}>Te responderé personalmente en 24–48 horas.</p>
        <button
          onClick={() => setState("idle")}
          style={{ marginTop: "1.5rem", background: "transparent", border: "1px solid #4A3728", color: "#8B5E3C", padding: ".5rem 1.5rem", cursor: "pointer", fontSize: ".78rem", letterSpacing: ".1em", textTransform: "uppercase" }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div style={{ marginBottom: "1.2rem" }}>
        <label htmlFor="cf-name" style={labelStyle}>Nombre</label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Tu nombre"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "1.2rem" }}>
        <label htmlFor="cf-email" style={labelStyle}>Email</label>
        <input
          id="cf-email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="tu@email.com"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "1.8rem" }}>
        <label htmlFor="cf-message" style={labelStyle}>Mensaje</label>
        <textarea
          id="cf-message"
          required
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Cuéntame en qué puedo ayudarte..."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {state === "error" && (
        <p style={{ color: "#cc6666", fontSize: ".82rem", marginBottom: "1rem" }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        style={{
          background: state === "sending" ? "#4A3728" : "#B8975A",
          color: "#1E1510",
          padding: ".9rem 2.5rem",
          fontWeight: 600,
          fontSize: ".82rem",
          letterSpacing: ".06em",
          textTransform: "uppercase",
          border: "none",
          cursor: state === "sending" ? "not-allowed" : "pointer",
          width: "100%",
          transition: "background .2s",
        }}
      >
        {state === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
