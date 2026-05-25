"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function SobreMi() {
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
            Mi historia
          </p>
          <h1 style={{
            fontFamily: "var(--font-serif, serif)", fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1,
            color: "#F8F4EE", marginBottom: "1.5rem",
          }}>
            Yo no te hablo<br />desde la teoría.
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#B8975A", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#EDE5D8", fontSize: "clamp(.95rem, 2vw, 1.1rem)", lineHeight: 1.8 }}>
            Te hablo desde una vida que tuve que ordenar.
          </p>
        </motion.div>
      </section>

      {/* FOTO + HISTORIA */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto 4rem", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "flex-start" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}
            style={{ position: "relative", minHeight: "500px", overflow: "hidden" }}>
            <Image
              src="/images/vero-en-el-sofa2.png"
              alt="Verónica Perozo — Autora venezolana radicada en Florida"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
          </motion.div>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7, delay: .15 }}>
            <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1E1510", marginBottom: "2rem", lineHeight: 1.2 }}>
              Llegué a Florida en septiembre de 2015.
            </h2>

            <p style={{ color: "#4A3728", lineHeight: 1.95, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              Venezolana, inmigrante, madre, con una carrera construida en Venezuela — administración de empresas, recursos humanos, años trabajando en PDVSA — y todo por reconstruir. No vine con un plan perfecto. Vine con la certeza de que algo tenía que cambiar.
            </p>

            <p style={{ color: "#4A3728", lineHeight: 1.95, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              Los primeros años fueron de silencio y aprendizaje. De descubrir que el sistema aquí funciona diferente, que nadie te explica las reglas del juego, y que la mayoría de las mujeres que llegaban como yo estaban sobreviviendo solas, sin un mapa.
            </p>

            <p style={{ color: "#4A3728", lineHeight: 1.95, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              Empecé en seguros porque necesitaba un ingreso. Pero muy pronto entendí que los seguros son la puerta de entrada a una conversación más profunda: la de la seguridad real — la financiera, la familiar, la de saber que si algo pasa, tu familia está protegida.
            </p>

            <p style={{ color: "#4A3728", lineHeight: 1.95, fontSize: "1.05rem", marginBottom: "3rem" }}>
              Lo que comenzó como una forma de salir adelante se convirtió en 2JVS Insurance, una agencia construida con identidad propia. Después vino el libro, las guías, y finalmente <em>Arquitectas de Legado</em> — el programa que habría cambiado todo si yo lo hubiera tenido al llegar.
            </p>

            <div style={{ borderLeft: "2px solid #B8975A", paddingLeft: "1.5rem", marginBottom: "3rem" }}>
              <p style={{ fontFamily: "var(--font-serif, serif)", fontStyle: "italic", fontSize: "1.25rem", color: "#1E1510", lineHeight: 1.7 }}>
                "De sobrevivir en silencio a construir con identidad, propósito, ingresos y legado."
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* FORMACION */}
      <section style={{ background: "#EDE5D8", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: .7 }}>
            <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Formación y trayectoria</p>
            <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1E1510", marginBottom: "2.5rem" }}>
              Una carrera construida en dos países.
            </h2>

            <div style={{ display: "grid", gap: "1.5rem" }}>
              {[
                { year: "Venezuela", title: "Administración de Empresas · Recursos Humanos", desc: "Años de carrera corporativa, incluyendo experiencia en PDVSA. Gestión de equipos, procesos administrativos y liderazgo organizacional." },
                { year: "2015", title: "Llegada a Florida, EE.UU.", desc: "Recomienza desde cero. Estudia el sistema americano, obtiene licencias y empieza a construir una red de clientes desde la comunidad latina." },
                { year: "2018+", title: "Fundadora de 2JVS Insurance", desc: "Agencia de seguros de salud especializada en familias latinas en Florida. Cientos de familias atendidas." },
                { year: "2024", title: "Autora publicada", desc: "Publica El Cansancio Silencioso, Guía de Hábitos Conscientes y Del Caos a la Claridad — materiales educativos para mujeres latinas." },
                { year: "2025", title: "Creadora de Arquitectas de Legado", desc: "Lanza su programa de mentoría de 90 días para mujeres que quieren construir una vida con identidad clara, estructura financiera y propósito monetizable." },
              ].map((item) => (
                <div key={item.year} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "1rem", paddingBottom: "1.5rem", borderBottom: "1px solid #D4C5B2" }}>
                  <p style={{ color: "#B8975A", fontSize: ".82rem", fontWeight: 600, letterSpacing: ".05em", paddingTop: ".2rem" }}>{item.year}</p>
                  <div>
                    <p style={{ color: "#1E1510", fontWeight: 500, marginBottom: ".3rem", fontSize: ".95rem" }}>{item.title}</p>
                    <p style={{ color: "#4A3728", fontSize: ".9rem", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section style={{ background: "#1E1510", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Lo que guía mi trabajo</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#F8F4EE", textAlign: "center", marginBottom: "3rem" }}>
            Tres principios que no negocio.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              { n: "01", title: "Identidad antes que estrategia", desc: "No puedes construir nada sólido sobre una identidad confusa. El primer trabajo siempre es saber quién eres y qué quieres dejar." },
              { n: "02", title: "Orden antes que crecimiento", desc: "El caos no escala. Si tu vida financiera o tu agenda están en desorden, el crecimiento solo amplifica el problema." },
              { n: "03", title: "Legado, no solo ingreso", desc: "El dinero es una herramienta. La pregunta real es: ¿qué vas a construir con él que sobreviva más allá de ti?" },
            ].map((v) => (
              <motion.div key={v.n} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ padding: "2rem", background: "#2E1F15", borderTop: "2px solid #B8975A" }}>
                <p style={{ color: "#B8975A", fontSize: "2rem", fontFamily: "var(--font-serif, serif)", fontWeight: 300, marginBottom: "1rem" }}>{v.n}</p>
                <h3 style={{ color: "#F8F4EE", fontSize: "1.1rem", fontWeight: 500, marginBottom: ".8rem" }}>{v.title}</h3>
                <p style={{ color: "#EDE5D8", fontSize: ".9rem", lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1E1510", marginBottom: "1.5rem" }}>
            ¿Lista para construir tu historia?
          </h2>
          <p style={{ color: "#4A3728", lineHeight: 1.9, marginBottom: "2.5rem" }}>
            Conéctate con el programa Arquitectas de Legado o empieza con El Cansancio Silencioso.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/conferencias" style={{
              background: "#B8975A", color: "#1E1510", padding: ".9rem 2rem",
              fontWeight: 600, fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Arquitectas de Legado</Link>
            <Link href="/libros" style={{
              border: "1px solid #4A3728", color: "#4A3728", padding: ".9rem 2rem",
              fontSize: ".82rem", letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
            }}>Ver libros →</Link>
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
