"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-sans, Inter, system-ui, sans-serif)" }}>

      <Nav />

      {/* HERO */}
      <section style={{
        minHeight: "100vh", background: "linear-gradient(160deg, #1E1510 0%, #2E1F15 60%, #1A0F08 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "8rem 4rem 0rem", overflow: "hidden",
      }}>
        <div style={{
          maxWidth: "1100px", width: "100%",
          display: "grid", gridTemplateColumns: "1fr clamp(280px, 38vw, 480px)",
          gap: "clamp(2rem, 5vw, 5rem)", alignItems: "flex-end",
        }}>
          {/* Texto */}
          <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: .8 }}
            style={{ paddingBottom: "4rem" }}>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Autora · Empresaria · Mentora
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif, serif)", fontWeight: 300,
              fontSize: "clamp(2.8rem, 7vw, 6rem)", lineHeight: 1.05,
              color: "#F8F4EE", marginBottom: "1.5rem",
            }}>
              Verónica<br />Perozo
            </h1>
            <div style={{ width: "60px", height: "1px", background: "#B8975A", marginBottom: "1.5rem" }} />
            <p style={{ color: "#EDE5D8", fontSize: "clamp(.95rem, 2vw, 1.15rem)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              De sobrevivir en silencio a construir con identidad,<br />propósito, ingresos y legado.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/conferencias" style={{
                background: "#B8975A", color: "#1E1510", padding: ".9rem 2rem",
                fontWeight: 600, fontSize: ".82rem", letterSpacing: ".06em",
                textTransform: "uppercase", textDecoration: "none", display: "inline-block",
              }}>Arquitectas de Legado</Link>
              <Link href="/libros" style={{
                border: "1px solid #B8975A", color: "#B8975A", padding: ".9rem 2rem",
                fontWeight: 400, fontSize: ".82rem", letterSpacing: ".06em",
                textTransform: "uppercase", textDecoration: "none", display: "inline-block",
              }}>El Cansancio Silencioso</Link>
            </div>
          </motion.div>

          {/* Imagen Verónica */}
          <motion.div
            variants={fade} initial="hidden" animate="show" transition={{ duration: 1, delay: .3 }}
            style={{ position: "relative", height: "clamp(420px, 65vh, 640px)", alignSelf: "flex-end" }}
          >
            <Image
              src="/images/veronica-hero-nobg.png"
              alt="Verónica Perozo — Autora, empresaria y mentora"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "bottom center" }}
              sizes="(max-width: 768px) 90vw, 480px"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#EDE5D8", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "3rem", textAlign: "center" }}>
          {([["28+", "Años de experiencia"], ["Cientos", "Familias atendidas"], ["4+", "Libros y guías publicados"], ["1", "Programa de mentoría"]] as [string, string][]).map(([value, label]) => (
            <div key={label}>
              <p style={{ fontFamily: "var(--font-serif, serif)", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, color: "#4A3728" }}>{value}</p>
              <p style={{ fontSize: ".78rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#8B5E3C", marginTop: ".4rem" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MÍ PREVIEW */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}
            style={{ position: "relative", minHeight: "500px", overflow: "hidden" }}>
            <Image
              src="/images/vero-diseno-12.png"
              alt="Verónica Perozo — Autora y mentora de mujeres latinas"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </motion.div>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7, delay: .2 }}>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Mi historia</p>
            <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1E1510", marginBottom: "1.5rem", lineHeight: 1.15 }}>
              Yo no te hablo desde la teoría.<br />
              <em>Te hablo desde una vida que tuve que ordenar.</em>
            </h2>
            <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1rem" }}>
              Llegué a Florida en septiembre de 2015. Venezolana, inmigrante, madre, con una carrera construida en Venezuela — administración de empresas, recursos humanos, años en la industria petrolera venezolana — y todo por reconstruir.
            </p>
            <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2rem" }}>
              Lo que comenzó como una forma de salir adelante se convirtió en una agencia de seguros, un libro publicado, materiales educativos y un programa de mentoría para mujeres que se parecen a la mujer que yo fui.
            </p>
            <Link href="/sobre-mi" style={{ color: "#B8975A", fontSize: ".85rem", letterSpacing: ".1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid #B8975A", paddingBottom: ".2rem" }}>
              Leer historia completa →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LIBROS */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Obra publicada</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#F8F4EE", textAlign: "center", marginBottom: "3rem" }}>
            El Cansancio Silencioso y más
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {[
              { title: "El Cansancio Silencioso", sub: "Libro · 2026", desc: "La historia de la mujer que sostiene todo por fuera y está agotada por dentro. Disponible en Amazon." },
              { title: "Sistema de Libertad Financiera", sub: "E-Book · 2025", desc: "Un mapa claro para que tu dinero trabaje para ti. Educación financiera práctica para mujeres latinas." },
              { title: "Hábitos Conscientes", sub: "Guía · Protocolo de Transformación 1%", desc: "Metodología de micro-hábitos para construir disciplina diaria, orden financiero y estabilidad." },
            ].map((book) => (
              <motion.div key={book.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ padding: "2rem", background: "#2E1F15", borderTop: "2px solid #B8975A" }}>
                <p style={{ color: "#B8975A", fontSize: ".72rem", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: ".5rem" }}>{book.sub}</p>
                <h3 style={{ fontFamily: "var(--font-serif, serif)", color: "#F8F4EE", fontSize: "1.25rem", fontWeight: 400, marginBottom: ".8rem" }}>{book.title}</h3>
                <p style={{ color: "#EDE5D8", fontSize: ".9rem", lineHeight: 1.7 }}>{book.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/libros" style={{ color: "#B8975A", fontSize: ".85rem", letterSpacing: ".1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid #B8975A", paddingBottom: ".2rem" }}>
              Ver todos los libros →
            </Link>
          </div>
        </div>
      </section>

      {/* ARQUITECTAS */}
      <section style={{ background: "#EDE5D8", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Programa de mentoría</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1E1510", marginBottom: "1.5rem" }}>
            Arquitectas de Legado
          </h2>
          <p style={{ color: "#4A3728", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "2rem" }}>
            90 días para dejar de sobrevivir en silencio y empezar a construir una vida con identidad clara, estructura financiera, propósito monetizable y legado.
          </p>
          <Link href="/conferencias" style={{
            display: "inline-block", background: "#4A3728", color: "#F8F4EE",
            padding: ".9rem 2.5rem", fontWeight: 600, fontSize: ".82rem",
            letterSpacing: ".06em", textTransform: "uppercase", textDecoration: "none",
          }}>Conocer el programa →</Link>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "1px", background: "#B8975A", margin: "0 auto 2rem" }} />
          <p style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontSize: "clamp(1.15rem, 3vw, 1.7rem)", color: "#1E1510", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            "Verónica hace que las cosas sucedan. Su impacto no se mide en frases bonitas — se mide en decisiones, contratos y vidas que empiezan a creer otra vez."
          </p>
          <p style={{ color: "#8B5E3C", fontSize: ".82rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
            — Lectora de El Cansancio Silencioso
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ background: "#1E1510", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Conversemos</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#F8F4EE", marginBottom: "1rem" }}>
            ¿Lista para construir tu legado?
          </h2>
          <p style={{ color: "#EDE5D8", marginBottom: "2.5rem", lineHeight: 1.8 }}>
            Escríbeme directamente o encuéntrame en redes.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a href="mailto:insurance.2jvs@gmail.com" style={{
              background: "#B8975A", color: "#1E1510", padding: ".9rem 2rem",
              fontWeight: 600, fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Enviar email</a>
          </div>
          <div style={{ display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              ["Instagram", "https://instagram.com/veronica.perozo"],
              ["TikTok", "https://www.tiktok.com/@VeronicaPerozooficial"],
              ["YouTube", "https://www.youtube.com/@VeronicaPerozoOficial"],
              ["Facebook", "https://www.facebook.com/Veronica.Perozo"],
              ["LinkedIn", "https://www.linkedin.com/in/veronica-perozov-1a5622141"],
            ].map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{
                color: "#8B5E3C", fontSize: ".78rem", letterSpacing: ".08em",
                textTransform: "uppercase", textDecoration: "none",
                borderBottom: "1px solid #4A3728", paddingBottom: ".1rem",
              }}>{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0F08", padding: "2.5rem 2rem", textAlign: "center", borderTop: "1px solid #2E1F15" }}>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
          {[
            ["Instagram", "https://instagram.com/veronica.perozo"],
            ["TikTok", "https://www.tiktok.com/@VeronicaPerozooficial"],
            ["YouTube", "https://www.youtube.com/@VeronicaPerozoOficial"],
            ["Facebook", "https://www.facebook.com/Veronica.Perozo"],
            ["LinkedIn", "https://www.linkedin.com/in/veronica-perozov-1a5622141"],
          ].map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{
              color: "#4A3728", fontSize: ".72rem", letterSpacing: ".1em",
              textTransform: "uppercase", textDecoration: "none",
            }}>{label}</a>
          ))}
        </div>
        <p style={{ color: "#3A2920", fontSize: ".72rem" }}>© 2026 Verónica Perozo · veronicaperozo.com</p>
      </footer>

    </main>
  );
}
