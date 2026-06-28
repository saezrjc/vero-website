"use client";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const articulos = [
  {
    slug: "como-lanzar-tu-negocio-siendo-inmigrante",
    categoria: "Emprendimiento",
    titulo: "Cómo lanzar tu primer negocio en EE.UU. siendo latina: la guía que nadie te da",
    extracto: "Estructura legal, EIN, cuenta bancaria de negocio, impuestos y lo que nadie te explica antes de empezar. Todo lo que necesitas saber para emprender con bases sólidas en suelo americano.",
    fecha: "Mayo 2026",
    lectura: "10 min",
    destacado: true,
  },
  {
    slug: "presupuesto-familiar-inmigrante-eeuu",
    categoria: "Finanzas Personales",
    titulo: "Cómo hacer un presupuesto real siendo inmigrante en EE.UU.",
    extracto: "No se trata de recortar gastos. Se trata de entender a dónde va tu dinero y tomar decisiones conscientes. Sistema paso a paso para familias latinas.",
    fecha: "Marzo 2026",
    lectura: "9 min",
    destacado: true,
  },
  {
    slug: "cansancio-silencioso-mujer-latina",
    categoria: "Bienestar y Liderazgo",
    titulo: "El cansancio silencioso: por qué las mujeres latinas estamos agotadas sin permiso para decirlo",
    extracto: "Sostienes la casa, el trabajo, los hijos, la pareja y a veces a tu familia en el país de origen. Y encima se espera que estés disponible. Esto tiene nombre.",
    fecha: "Febrero 2026",
    lectura: "6 min",
    destacado: true,
  },
  {
    slug: "credito-desde-cero-inmigrante",
    categoria: "Finanzas Personales",
    titulo: "Cómo construir crédito desde cero si acabas de llegar a Estados Unidos",
    extracto: "Sin historial crediticio no puedes alquilar, comprar un auto ni muchas veces conseguir trabajo. Esto es lo que funciona y lo que no.",
    fecha: "Marzo 2026",
    lectura: "7 min",
    destacado: false,
  },
  {
    slug: "deudas-en-eeuu-que-hacer",
    categoria: "Finanzas Personales",
    titulo: "Tengo deudas en EE.UU.: qué hacer, por dónde empezar y cómo salir",
    extracto: "Las deudas en Estados Unidos funcionan diferente. Entender el sistema es el primer paso para no quedar atrapada en intereses que nunca bajan.",
    fecha: "Febrero 2026",
    lectura: "8 min",
    destacado: false,
  },
  {
    slug: "liderazgo-femenino-diaspora-latina",
    categoria: "Bienestar y Liderazgo",
    titulo: "Liderazgo femenino en la diáspora: cómo liderar cuando nadie te ve como líder",
    extracto: "Las mujeres latinas que construyen en EE.UU. lo hacen a pesar de — no gracias a — muchos de los sistemas que las rodean. Aquí hay algo que cambia eso.",
    fecha: "Enero 2026",
    lectura: "7 min",
    destacado: false,
  },
  {
    slug: "como-monetizar-tu-historia-latina",
    categoria: "Emprendimiento",
    titulo: "Cómo monetizar tu historia como mujer latina sin sentirte impostora",
    extracto: "Tu experiencia como inmigrante, tu trayectoria, lo que aprendiste al reconstruirte — todo eso tiene valor económico. El problema es que nadie te enseñó cómo usarlo.",
    fecha: "Enero 2026",
    lectura: "8 min",
    destacado: false,
  },
  {
    slug: "emprender-en-eeuu-siendo-latina",
    categoria: "Emprendimiento",
    titulo: "Emprender en EE.UU. siendo latina: lo que nadie te dice antes de empezar",
    extracto: "Las reglas del juego son diferentes. El sistema fiscal, las licencias, los contratos, la estructura de tu negocio — hay cosas que necesitas saber antes de que cuesten caro.",
    fecha: "Diciembre 2025",
    lectura: "10 min",
    destacado: false,
  },
  {
    slug: "habitos-conscientes-inmigrante",
    categoria: "Bienestar y Liderazgo",
    titulo: "Hábitos conscientes cuando vives en modo supervivencia",
    extracto: "Cuando trabajas 60 horas semanales, crías hijos y mandas dinero a Venezuela, hablar de rutinas matutinas suena como un lujo. Esto es diferente.",
    fecha: "Noviembre 2025",
    lectura: "6 min",
    destacado: false,
  },
  {
    slug: "construir-legado-desde-cero",
    categoria: "Emprendimiento",
    titulo: "Construir legado cuando empezaste desde cero: no es para cuando tengas más dinero",
    extracto: "Legado no es lo que dejas cuando tienes mucho — es la forma en que vives hoy. Y se puede construir desde exactamente donde estás ahora.",
    fecha: "Noviembre 2025",
    lectura: "7 min",
    destacado: false,
  },
  {
    slug: "independencia-financiera-mujer-latina",
    categoria: "Finanzas Personales",
    titulo: "Independencia financiera para la mujer latina: no es un sueño, es un sistema",
    extracto: "La independencia financiera no se consigue ganando más — se consigue entendiendo el dinero que ya tienes y tomando decisiones distintas. Así empieza.",
    fecha: "Octubre 2025",
    lectura: "9 min",
    destacado: false,
  },
  {
    slug: "marca-personal-emprendedora-latina",
    categoria: "Emprendimiento",
    titulo: "Marca personal para la emprendedora latina: cómo construir autoridad siendo inmigrante",
    extracto: "Tu historia de inmigrante no es un obstáculo — es tu diferenciador más poderoso. Así se construye una marca personal que convierte en oportunidades reales.",
    fecha: "Octubre 2025",
    lectura: "8 min",
    destacado: false,
  },
];

const categorias = ["Todos", "Emprendimiento", "Finanzas Personales", "Bienestar y Liderazgo"];

const coloresCategoria: Record<string, string> = {
  "Emprendimiento": "#B8975A",
  "Finanzas Personales": "#4A3728",
  "Bienestar y Liderazgo": "#8B5E3C",
};

export default function Blog() {
  const destacados = articulos.filter(a => a.destacado);
  const resto = articulos.filter(a => !a.destacado);

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
            Blog · Recursos gratuitos
          </p>
          <h1 style={{
            fontFamily: "var(--font-serif, serif)", fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1,
            color: "#F8F4EE", marginBottom: "1.5rem",
          }}>
            Guías reales para<br />mujeres latinas.
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#B8975A", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#EDE5D8", fontSize: "clamp(.95rem, 2vw, 1.1rem)", lineHeight: 1.8 }}>
            Emprendimiento, Finanzas, Bienestar y Liderazgo — explicados por alguien que lo vivió primero.
          </p>
        </motion.div>
      </section>

      {/* DESTACADOS */}
      <section style={{ background: "#F8F4EE", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "3rem" }}>Artículos destacados</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
            {destacados.map((art, i) => (
              <motion.article key={art.slug} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ duration: .6, delay: i * .1 }}
                style={{ background: "#1E1510", padding: "2.5rem", position: "relative", cursor: "pointer" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#B8975A" }} />
                <span style={{
                  display: "inline-block", background: coloresCategoria[art.categoria] || "#B8975A",
                  color: "#F8F4EE", fontSize: ".68rem", padding: ".2rem .7rem",
                  letterSpacing: ".08em", textTransform: "uppercase", marginBottom: "1rem",
                }}>{art.categoria}</span>
                <h2 style={{ fontFamily: "var(--font-serif, serif)", color: "#F8F4EE", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3, marginBottom: "1rem" }}>
                  {art.titulo}
                </h2>
                <p style={{ color: "#EDE5D8", fontSize: ".88rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{art.extracto}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#B8975A", fontSize: ".75rem" }}>{art.fecha} · {art.lectura} lectura</span>
                  <span style={{ color: "#B8975A", fontSize: ".88rem" }}>→</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* RESTO */}
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "2rem" }}>Todos los artículos</p>
          <div style={{ display: "grid", gap: "1rem" }}>
            {resto.map((art, i) => (
              <motion.article key={art.slug} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ duration: .4, delay: i * .04 }}
                style={{ background: "#fff", padding: "1.5rem 2rem", borderLeft: "2px solid #EDE5D8", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "center", cursor: "pointer", transition: "border-color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#B8975A")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#EDE5D8")}>
                <div>
                  <div style={{ display: "flex", gap: ".8rem", alignItems: "center", marginBottom: ".5rem", flexWrap: "wrap" }}>
                    <span style={{ color: coloresCategoria[art.categoria] || "#B8975A", fontSize: ".72rem", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>{art.categoria}</span>
                    <span style={{ color: "#8B5E3C", fontSize: ".72rem" }}>{art.fecha} · {art.lectura}</span>
                  </div>
                  <h3 style={{ color: "#1E1510", fontSize: ".95rem", fontWeight: 500, lineHeight: 1.4, marginBottom: ".4rem" }}>{art.titulo}</h3>
                  <p style={{ color: "#4A3728", fontSize: ".85rem", lineHeight: 1.6 }}>{art.extracto}</p>
                </div>
                <span style={{ color: "#B8975A", fontSize: "1.2rem", flexShrink: 0 }}>→</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CONTACTO */}
      <section style={{ background: "#EDE5D8", padding: "6rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ color: "#B8975A", fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem" }}>Recibe los nuevos artículos</p>
          <h2 style={{ fontFamily: "var(--font-serif, serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#1E1510", marginBottom: "1rem" }}>
            Una guía nueva cada semana.
          </h2>
          <p style={{ color: "#4A3728", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Emprendimiento, finanzas y herramientas reales para mujeres latinas en EE.UU. Sin spam.
          </p>
          <a href="https://wa.me/17863289942?text=Hola%20Ver%C3%B3nica%2C%20quiero%20recibir%20tus%20art%C3%ADculos%20y%20recursos" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", background: "#1E1510", color: "#F8F4EE",
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
