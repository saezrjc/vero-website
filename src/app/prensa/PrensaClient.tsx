"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const menciones = [
  {
    medio: "Univision Noticias",
    tipo: "Entrevista en video",
    titulo: "La venezolana que convirtió su historia de inmigrante en un negocio de impacto",
    extracto: "Verónica Perozo llegó a Florida con lo justo y construyó desde cero una agencia de seguros que hoy protege a cientos de familias latinas en el estado.",
    año: "2025",
    categoria: "Televisión",
  },
  {
    medio: "El Nuevo Herald",
    tipo: "Reportaje",
    titulo: "Mujeres latinas que lideran: las empresarias que están cambiando el sur de Florida",
    extracto: "Entre las voces más reconocidas del empresariado latino femenino en Miami, Verónica Perozo destaca por su enfoque en la educación financiera y el legado familiar.",
    año: "2025",
    categoria: "Prensa escrita",
  },
  {
    medio: "Podcast Latina Boss",
    tipo: "Entrevista larga",
    titulo: "El Cansancio Silencioso: la conversación que nadie está teniendo",
    extracto: "Una hora de conversación real sobre lo que cuesta sostener una familia, un negocio y una identidad propia en un país que no es el tuyo.",
    año: "2024",
    categoria: "Podcast",
  },
  {
    medio: "Miami Community News",
    tipo: "Perfil",
    titulo: "De PDVSA a Florida: la historia de una empresaria que eligió empezar de nuevo",
    extracto: "Con años de experiencia en recursos humanos en Venezuela, Verónica Perozo eligió reconstruirse en EE.UU. y hoy es referente en la comunidad latina de seguros de salud.",
    año: "2024",
    categoria: "Prensa escrita",
  },
  {
    medio: "Telemundo 51 Miami",
    tipo: "Segmento especial",
    titulo: "Seguros de salud para familias latinas: lo que necesitas saber en Florida",
    extracto: "Verónica Perozo explica en términos claros cómo funciona el sistema de salud en EE.UU. y qué opciones tienen las familias latinas que no saben por dónde empezar.",
    año: "2024",
    categoria: "Televisión",
  },
  {
    medio: "Podcast El Dinero Habla",
    tipo: "Entrevista",
    titulo: "Finanzas desde la trinchera: cómo una inmigrante construyó su propia agencia",
    extracto: "Habla con honestidad sobre el primer año sin ingresos estables, el miedo a los números y el momento exacto en que las finanzas dejaron de ser el enemigo.",
    año: "2023",
    categoria: "Podcast",
  },
];

const categorias = ["Todos", "Televisión", "Prensa escrita", "Podcast"];

export default function Prensa() {
  return (
    <main style={{ fontFamily: "var(--font-sans, Inter, system-ui, sans-serif)", paddingTop: "5rem" }}>

      <Nav />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg, #1E1510 0%, #2E1F15 60%, #1A0F08 100%)",
        padding: "7rem 2rem 5rem", textAlign: "center",
      }}>
        <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: .8 }} style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Presencia en medios
          </p>
          <h1 style={{
            fontFamily: "var(--font-serif, serif)", fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1,
            color: "#F8F4EE", marginBottom: "1.5rem",
          }}>
            Una voz que<br />los medios buscan.
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#B8975A", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#EDE5D8", fontSize: "clamp(.95rem, 2vw, 1.1rem)", lineHeight: 1.8 }}>
            Televisión, radio, prensa y podcasts. Verónica habla con autoridad porque vivió lo que cuenta.
          </p>
        </motion.div>
      </section>

      {/* KIT DE PRENSA */}
      <section style={{ background: "#EDE5D8", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: ".5rem" }}>Para medios y periodistas</p>
            <p style={{ color: "#1E1510", fontWeight: 500, fontSize: "1rem" }}>Kit de prensa disponible bajo solicitud</p>
            <p style={{ color: "#4A3728", fontSize: ".88rem", marginTop: ".3rem" }}>Foto profesional, bio en 50/100/200 palabras, temas de entrevista sugeridos</p>
          </div>
          <a href="mailto:insurance.2jvs@gmail.com?subject=Solicito kit de prensa Verónica Perozo" style={{
            display: "inline-block", background: "#1E1510", color: "#F8F4EE",
            padding: ".9rem 2rem", fontSize: ".82rem", letterSpacing: ".06em",
            textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap",
          }}>Solicitar kit →</a>
        </div>
      </section>

      {/* MENCIONES */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Cobertura mediática</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1E1510", marginBottom: "3rem" }}>
            Menciones y apariciones.
          </h2>

          <div style={{ display: "grid", gap: "1.5rem" }}>
            {menciones.map((m, i) => (
              <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ duration: .5, delay: i * .07 }}
                style={{ background: "#fff", padding: "2rem", borderLeft: "3px solid #B8975A", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
                <div>
                  <div style={{ display: "flex", gap: ".8rem", alignItems: "center", marginBottom: ".8rem", flexWrap: "wrap" }}>
                    <span style={{ background: "#EDE5D8", color: "#4A3728", fontSize: ".72rem", padding: ".2rem .7rem", letterSpacing: ".08em", textTransform: "uppercase" }}>{m.categoria}</span>
                    <span style={{ color: "#8B5E3C", fontSize: ".78rem", fontWeight: 600 }}>{m.medio}</span>
                    <span style={{ color: "#8B5E3C", fontSize: ".75rem" }}>· {m.tipo}</span>
                  </div>
                  <h3 style={{ color: "#1E1510", fontSize: "1rem", fontWeight: 500, marginBottom: ".8rem", lineHeight: 1.4 }}>{m.titulo}</h3>
                  <p style={{ color: "#4A3728", fontSize: ".88rem", lineHeight: 1.7, fontStyle: "italic" }}>"{m.extracto}"</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ color: "#B8975A", fontSize: ".82rem", fontWeight: 600 }}>{m.año}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMAS QUE DOMINA */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Temas de entrevista</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#F8F4EE", textAlign: "center", marginBottom: "3rem" }}>
            Habla con autoridad sobre estos temas.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              { n: "01", tema: "Inmigración y emprendimiento", desc: "Cómo construir un negocio viable en EE.UU. sin red, sin idioma perfecto y sin un mapa claro." },
              { n: "02", tema: "Finanzas familiares para latinos", desc: "El sistema financiero americano explicado para familias latinas que no saben por dónde empezar." },
              { n: "03", tema: "Liderazgo femenino en la diáspora", desc: "La mujer latina que sostiene la familia, el negocio y su identidad propia — y lo que eso cuesta." },
              { n: "04", tema: "Seguros de salud en Florida", desc: "Opciones reales, lenguaje claro y decisiones informadas para familias latinas en el estado." },
              { n: "05", tema: "El cansancio silencioso", desc: "Burnout invisible, salud mental en la comunidad latina y por qué pedir ayuda no es debilidad." },
              { n: "06", tema: "Construcción de legado", desc: "Dejar algo que sobreviva: cómo pensar en legado cuando estás sobreviviendo el día a día." },
            ].map((t) => (
              <motion.div key={t.n} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ padding: "1.5rem", background: "#2E1F15", borderTop: "2px solid #B8975A" }}>
                <p style={{ color: "#B8975A", fontFamily: "var(--font-serif, serif)", fontSize: "1.8rem", fontWeight: 300, marginBottom: ".5rem" }}>{t.n}</p>
                <h3 style={{ color: "#F8F4EE", fontSize: ".95rem", fontWeight: 500, marginBottom: ".6rem" }}>{t.tema}</h3>
                <p style={{ color: "#EDE5D8", fontSize: ".85rem", lineHeight: 1.6 }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CITA CLAVE */}
      <section style={{ background: "#EDE5D8", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "1px", background: "#B8975A", margin: "0 auto 2rem" }} />
          <p style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "#1E1510", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            "No hablo de lo que leí. Hablo de lo que viví — y eso es lo que hace que la gente me escuche."
          </p>
          <p style={{ color: "#8B5E3C", fontSize: ".82rem", letterSpacing: ".1em", textTransform: "uppercase" }}>— Verónica Perozo</p>
        </div>
      </section>

      {/* CTA CONTACTO PRENSA */}
      <section style={{ background: "#1E1510", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Contacto para medios</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F8F4EE", marginBottom: "1rem" }}>
            ¿Quieres que Verónica hable en tu medio?
          </h2>
          <p style={{ color: "#EDE5D8", marginBottom: "2.5rem", lineHeight: 1.8 }}>
            Responde cada solicitud personalmente. El kit de prensa se envía en menos de 24 horas.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:insurance.2jvs@gmail.com?subject=Solicitud de entrevista / colaboración de prensa" style={{
              background: "#B8975A", color: "#1E1510", padding: ".9rem 2rem",
              fontWeight: 600, fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Escribir a Verónica</a>
            <a href="https://instagram.com/veronica.perozo" target="_blank" rel="noopener noreferrer" style={{
              border: "1px solid #B8975A", color: "#B8975A", padding: ".9rem 2rem",
              fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>@veronica.perozo</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0F08", padding: "2rem", textAlign: "center", borderTop: "1px solid #2E1F15" }}>
        <p style={{ color: "#8B5E3C", fontSize: ".78rem" }}>© 2026 Verónica Perozo · veronicaperozo.com</p>
      </footer>

    </main>
  );
}
