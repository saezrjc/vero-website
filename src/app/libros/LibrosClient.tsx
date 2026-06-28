"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Libros() {
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
            Obra publicada
          </p>
          <h1 style={{
            fontFamily: "var(--font-serif, serif)", fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1,
            color: "#F8F4EE", marginBottom: "1.5rem",
          }}>
            Palabras que<br />transforman vidas.
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#B8975A", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#EDE5D8", fontSize: "clamp(.95rem, 2vw, 1.1rem)", lineHeight: 1.8 }}>
            Cada libro nació de una conversación real con mujeres que necesitaban respuestas, no teoría.
          </p>
        </motion.div>
      </section>

      {/* LIBRO PRINCIPAL */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

            {/* Book cover */}
            <div style={{ borderTop: "4px solid #B8975A", overflow: "hidden" }}>
              <Image
                src="/images/libro-portada-final.jpg"
                alt="El Cansancio Silencioso — Verónica Perozo"
                width={600}
                height={962}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="(max-width: 768px) 100vw, 440px"
                priority
              />
            </div>

            <div>
              <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Libro principal</p>
              <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1E1510", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                El Cansancio Silencioso
              </h2>
              <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1rem" }}>
                La historia de la mujer que sostiene todo por fuera y está agotada por dentro. La que nadie ve cansada porque siempre está presente, siempre lista, siempre fuerte.
              </p>
              <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2rem" }}>
                Este libro es la pieza central de autoridad de Verónica. No es autoayuda convencional — es una conversación honesta sobre lo que cuesta sostener una vida sin un sistema que te sostenga a ti.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="https://www.amazon.com/gp/product/B0GZCRG21Q/" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-block", background: "#B8975A", color: "#1E1510",
                  padding: ".9rem 2rem", fontWeight: 600, fontSize: ".82rem",
                  letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none",
                }}>Comprar en Amazon →</a>
                <a href="mailto:insurance.2jvs@gmail.com?subject=Quiero El Cansancio Silencioso" style={{
                  display: "inline-block", border: "1px solid #4A3728", color: "#4A3728",
                  padding: ".9rem 2rem", fontSize: ".82rem",
                  letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none",
                }}>Escribir a Verónica</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GUÍAS */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Materiales educativos</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#F8F4EE", textAlign: "center", marginBottom: "3rem" }}>
            Guías que funcionan en la vida real.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {[
              {
                sub: "E-Book · 2025",
                title: "Sistema de Libertad Financiera",
                desc: "Un mapa claro para que tu dinero trabaje para ti. Sistema práctico de educación financiera diseñado para mujeres que quieren dejar de sobrevivir y empezar a construir.",
                bullets: ["Diagnóstico financiero real", "Plan de deudas estructurado", "Fundamentos de inversión", "Sistema de ahorro mensual"],
              },
              {
                sub: "Guía · 2025 — Protocolo de Transformación 1%",
                title: "Hábitos Conscientes",
                desc: "Metodología de micro-hábitos para construir disciplina diaria, orden financiero y estabilidad desde lo pequeño. Porque el 1% repetido cambia todo.",
                bullets: ["Rutinas de alto impacto", "Control financiero semanal", "Sistema de prioridades", "Seguimiento de progreso"],
              },
              {
                sub: "Guía · 2025",
                title: "Libera tu Niño Interior",
                desc: "Herramienta de trabajo emocional para dejar ir las creencias limitantes heredadas y abrir espacio a la abundancia. La puerta interna que muchas mujeres no saben que está cerrada.",
                bullets: ["Trabajo emocional profundo", "Reprogramación de creencias", "Ejercicios de liberación", "Apertura a la abundancia"],
              },
            ].map((book) => (
              <motion.div key={book.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ padding: "2.5rem", background: "#2E1F15", borderTop: "2px solid #B8975A" }}>
                <p style={{ color: "#B8975A", fontSize: ".72rem", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: ".8rem" }}>{book.sub}</p>
                <h3 style={{ fontFamily: "var(--font-serif, serif)", color: "#F8F4EE", fontSize: "1.35rem", fontWeight: 400, marginBottom: "1rem", lineHeight: 1.3 }}>{book.title}</h3>
                <p style={{ color: "#EDE5D8", fontSize: ".9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{book.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {book.bullets.map((b) => (
                    <li key={b} style={{ color: "#B8975A", fontSize: ".82rem", marginBottom: ".4rem", display: "flex", alignItems: "center", gap: ".5rem" }}>
                      <span style={{ width: "4px", height: "4px", background: "#B8975A", borderRadius: "50%", flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="mailto:insurance.2jvs@gmail.com?subject=Quiero las guías educativas" style={{
              display: "inline-block", border: "1px solid #B8975A", color: "#B8975A",
              padding: ".9rem 2.5rem", fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Solicitar guías →</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section style={{ background: "#EDE5D8", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "1px", background: "#B8975A", margin: "0 auto 2rem" }} />
          <p style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#1E1510", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            "Verónica hace que las cosas sucedan. Su impacto no se mide en frases bonitas — se mide en decisiones, contratos y vidas que empiezan a creer otra vez."
          </p>
          <p style={{ color: "#8B5E3C", fontSize: ".82rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
            — Lectora de El Cansancio Silencioso
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1E1510", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#F8F4EE", marginBottom: "1rem" }}>
            ¿Lista para dar el siguiente paso?
          </h2>
          <p style={{ color: "#EDE5D8", marginBottom: "2rem", lineHeight: 1.8 }}>
            Escríbenos y te indicamos cómo acceder a los materiales.
          </p>
          <a href="mailto:insurance.2jvs@gmail.com" style={{
            display: "inline-block", background: "#B8975A", color: "#1E1510",
            padding: ".9rem 2.5rem", fontWeight: 600, fontSize: ".82rem",
            letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none",
          }}>Escribir a Verónica →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0F08", padding: "2rem", textAlign: "center", borderTop: "1px solid #2E1F15" }}>
        <p style={{ color: "#8B5E3C", fontSize: ".78rem" }}>© 2026 Verónica Perozo · veronicaperozo.com</p>
      </footer>

    </main>
  );
}
