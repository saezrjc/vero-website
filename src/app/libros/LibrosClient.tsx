"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Libros() {
  return (
    <main style={{ fontFamily: "var(--font-sans, Inter, system-ui, sans-serif)", paddingTop: "5rem" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "1rem 2rem", display: "flex", justifyContent: "space-between",
        alignItems: "center", background: "rgba(248,244,238,0.94)",
        backdropFilter: "blur(8px)", borderBottom: "1px solid #EDE5D8",
      }}>
        <Link href="/" style={{ fontFamily: "var(--font-serif, serif)", fontSize: "1.1rem", color: "#4A3728", fontWeight: 400, textDecoration: "none" }}>
          Verónica Perozo
        </Link>
        <div style={{ display: "flex", gap: "1.8rem" }}>
          {([["Sobre mí", "/sobre-mi"], ["Libros", "/libros"], ["Conferencias", "/conferencias"], ["Blog", "/blog"], ["Prensa", "/prensa"]] as [string, string][]).map(([label, href]) => (
            <Link key={href} href={href} style={{ color: "#8B5E3C", fontSize: ".82rem", textDecoration: "none", letterSpacing: ".06em", textTransform: "uppercase" }}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

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
            <div style={{ position: "relative", minHeight: "420px", borderTop: "4px solid #B8975A", overflow: "hidden" }}>
              <Image
                src="/images/libro-portada.jpeg"
                alt="El Cansancio Silencioso — Verónica Perozo"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              {
                sub: "Protocolo de Transformación 1%",
                title: "Guía de Hábitos Conscientes",
                desc: "Metodología de micro-hábitos para construir disciplina diaria, orden financiero y estabilidad desde lo pequeño. Porque el 1% repetido cambia todo.",
                bullets: ["Rutinas de alto impacto", "Control financiero semanal", "Sistema de prioridades", "Seguimiento de progreso"],
              },
              {
                sub: "Plan Financiero 30 Días",
                title: "Del Caos a la Claridad",
                desc: "Sistema en 4 etapas para dejar de huirle a los números y empezar a usarlos como herramienta de construcción. Claridad, estrategia, acción y control.",
                bullets: ["Diagnóstico financiero real", "Presupuesto funcional", "Plan de deudas e inversión", "Tablero de control mensual"],
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
