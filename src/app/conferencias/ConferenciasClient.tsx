"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Conferencias() {
  return (
    <main style={{ fontFamily: "var(--font-sans, Inter, system-ui, sans-serif)", paddingTop: "5rem" }}>

      <Nav />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg, #1E1510 0%, #2E1F15 60%, #1A0F08 100%)",
        padding: "7rem 2rem 5rem", textAlign: "center",
      }}>
        <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: .8 }} style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Programa de mentoría · 90 días
          </p>
          <h1 style={{
            fontFamily: "var(--font-serif, serif)", fontWeight: 300,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.05,
            color: "#F8F4EE", marginBottom: "1.5rem",
          }}>
            Arquitectas<br />de Legado
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#B8975A", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#EDE5D8", fontSize: "clamp(.95rem, 2vw, 1.15rem)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            90 días para dejar de sobrevivir en silencio y empezar a construir una vida con identidad clara, estructura financiera, propósito monetizable y legado.
          </p>
          <a href="https://veronicaperozo.com/digital-9828" style={{
            display: "inline-block", background: "#B8975A", color: "#1E1510",
            padding: ".9rem 2.5rem", fontWeight: 600, fontSize: ".82rem",
            letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none",
          }}>Quiero entrar al programa →</a>
        </motion.div>
      </section>

      {/* PARA QUIÉN */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>¿Es para ti?</p>
            <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1E1510", marginBottom: "2rem", lineHeight: 1.2 }}>
              Este programa es para la mujer que ya sabe que puede más,<br /><em>pero todavía no sabe cómo.</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                "Eres inmigrante latina y sientes que reconstruiste tu vida pero no tu identidad",
                "Trabajas mucho pero el dinero nunca alcanza y no sabes por qué",
                "Tienes un negocio o idea pero no sabes cómo monetizarlo con claridad",
                "Cuidas a todos menos a ti misma y ya llegaste al límite",
                "Quieres dejar algo — un legado — pero no sabes por dónde empezar",
                "Sientes que tu historia vale, pero no sabes cómo convertirla en autoridad",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem", background: "#EDE5D8" }}>
                  <span style={{ color: "#B8975A", fontSize: "1.2rem", lineHeight: 1, flexShrink: 0 }}>✓</span>
                  <p style={{ color: "#4A3728", fontSize: ".9rem", lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Qué construyes en 90 días</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#F8F4EE", textAlign: "center", marginBottom: "3rem" }}>
            Cuatro pilares. Un sistema de vida.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { n: "01", title: "Identidad Clara", desc: "Defines quién eres, qué representas y cómo quieres que el mundo te conozca. Sin identidad no hay marca, negocio ni legado." },
              { n: "02", title: "Estructura Financiera", desc: "Ordenas tus finanzas: ingresos, gastos, deudas, metas. El dinero deja de ser el enemigo y se convierte en tu herramienta." },
              { n: "03", title: "Propósito Monetizable", desc: "Encuentras cómo convertir tu historia, tu conocimiento o tu talento en un ingreso real, no en un sueño pospuesto." },
              { n: "04", title: "Construcción de Legado", desc: "Defines qué quieres dejar — a tu familia, comunidad, historia — y empiezas a actuar en esa dirección desde hoy." },
            ].map((p) => (
              <motion.div key={p.n} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ padding: "2rem", background: "#2E1F15", borderTop: "2px solid #B8975A" }}>
                <p style={{ fontFamily: "var(--font-serif, serif)", color: "#B8975A", fontSize: "2.5rem", fontWeight: 300, marginBottom: ".8rem", lineHeight: 1 }}>{p.n}</p>
                <h3 style={{ color: "#F8F4EE", fontSize: "1rem", fontWeight: 600, marginBottom: ".8rem", letterSpacing: ".03em" }}>{p.title}</h3>
                <p style={{ color: "#EDE5D8", fontSize: ".88rem", lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section style={{ background: "#EDE5D8", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Cómo funciona</p>
            <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1E1510", marginBottom: "2.5rem" }}>
              90 días de acompañamiento real.
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {[
                { fase: "Semanas 1–2", title: "Diagnóstico y Claridad", desc: "Evaluamos tu situación actual: identidad, finanzas, tiempo y energía. Defines tu punto de partida sin juicios." },
                { fase: "Semanas 3–6", title: "Estructura y Sistema", desc: "Construyes tus herramientas: presupuesto, rutinas, propuesta de valor y plan de acción. Todo personalizado." },
                { fase: "Semanas 7–10", title: "Acción y Monetización", desc: "Ejecutas. Empiezas a generar, a visibilizarte y a convertir tu historia en autoridad y en ingreso." },
                { fase: "Semanas 11–13", title: "Legado y Continuidad", desc: "Consolidas los resultados, defines tu siguiente etapa y recibes el sistema para sostenerlo solo." },
              ].map((f) => (
                <div key={f.fase} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "1.5rem", padding: "1.5rem", background: "#F8F4EE" }}>
                  <div>
                    <p style={{ color: "#B8975A", fontSize: ".72rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" }}>{f.fase}</p>
                  </div>
                  <div>
                    <p style={{ color: "#1E1510", fontWeight: 600, marginBottom: ".4rem", fontSize: ".95rem" }}>{f.title}</p>
                    <p style={{ color: "#4A3728", fontSize: ".88rem", lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPEAKING */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Conferencias y charlas</p>
            <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1E1510", marginBottom: "1.5rem" }}>
              Verónica como speaker.
            </h2>
            <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2rem" }}>
              Verónica habla desde la experiencia vivida, no desde el guión. Sus conferencias para organizaciones, empresas y comunidades latinas combinan historia personal, datos concretos y herramientas accionables.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
              {[
                "Liderazgo femenino en la diáspora latina",
                "De inmigrante a empresaria: construir desde cero",
                "El cansancio silencioso: bienestar real para mujeres que sostienen todo",
                "Finanzas para familias latinas en EEUU",
              ].map((tema) => (
                <div key={tema} style={{ padding: "1rem 1.2rem", borderLeft: "2px solid #B8975A", background: "#EDE5D8" }}>
                  <p style={{ color: "#4A3728", fontSize: ".88rem", lineHeight: 1.5 }}>{tema}</p>
                </div>
              ))}
            </div>
            <a href="https://wa.me/17863289942?text=Hola%20Ver%C3%B3nica%2C%20me%20interesa%20contratarte%20como%20speaker" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block", border: "1px solid #4A3728", color: "#4A3728",
              padding: ".9rem 2rem", fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Contratar como speaker →</a>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Da el primer paso</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#F8F4EE", marginBottom: "1rem" }}>
            Las plazas son limitadas.
          </h2>
          <p style={{ color: "#EDE5D8", marginBottom: "2.5rem", lineHeight: 1.8 }}>
            Arquitectas de Legado trabaja con grupos pequeños para garantizar atención real. Escríbenos para saber si hay disponibilidad.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/17863289942?text=Hola%20Ver%C3%B3nica%2C%20me%20interesa%20el%20programa%20Arquitectas%20de%20Legado" target="_blank" rel="noopener noreferrer" style={{
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
